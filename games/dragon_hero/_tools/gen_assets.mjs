// Dragon Hero — AI asset generator via Perchance (free text-to-image).
//
// Flow:
//   1. Launch headless Chromium via puppeteer.
//   2. Navigate to the Perchance verifyUser page so the frontend captures
//      a valid session token (anti-bot cookies are set here).
//   3. POST /api/generate with the captured userKey to request each symbol.
//   4. GET /api/downloadTemporaryImage?imageId=... to retrieve the PNG bytes.
//   5. Save to ./_raw/<name>.png.
//
// Run:
//   cd /tmp/pc-bot && node <repo>/web/games/dragon_hero/_tools/gen_assets.mjs

import fs from 'node:fs/promises';
import path from 'node:path';
import puppeteer from 'puppeteer';

const OUT_DIR = process.env.PC_OUT_DIR
  || 'C:\\Users\\Redan\\IdeaProjects\\AgoraMarket\\web\\games\\dragon_hero\\_raw';
const BASE = 'https://image-generation.perchance.org/api';

// Shared stylistic suffix so every symbol matches visually.
const STYLE = ', flat illustration, vibrant jewel-tone colors, gold rim highlights, '
  + 'centered composition, solid black background, mobile game slot symbol icon, '
  + '2D vector art style, no text, no watermark';

const NEGATIVE = 'blurry, photorealistic, 3d render, text, watermark, signature, '
  + 'border, frame, multiple subjects, cluttered background, low quality';

const SYMBOLS = [
  { name: '00_dragon_head',  prompt: 'majestic eastern dragon head facing forward, golden scales, red glowing eyes, horns curved back' },
  { name: '01_dragon_claw',  prompt: 'single dragon claw gripping a glowing red gem, sharp talons, golden scales on wrist' },
  { name: '02_fireball',     prompt: 'swirling fireball orb with orange and red flames, glowing embers, magical' },
  { name: '03_dragon_pearl', prompt: 'mystical glowing pearl orb with swirling blue energy inside, held in gold setting' },
  { name: '04_dragon_scale', prompt: 'single large dragon scale, iridescent emerald green, metallic sheen, diamond shape' },
  { name: '05_dragon_wing',  prompt: 'folded bat-like dragon wing, leathery membrane, bone spines, dark red and gold' },
  { name: '06_gold_coin',    prompt: 'ancient gold coin stamped with oriental dragon emblem, round, glowing edges' },
  { name: '07_fantasy_sword',prompt: 'ornate fantasy longsword pointing up, dragon-head pommel, gold hilt, blue glowing blade' },
  { name: '08_dragon_shield',prompt: 'heraldic kite shield with dragon crest, crimson and gold, battle worn metal rim' },
  { name: '09_hero_char',    prompt: 'cute chibi dragon warrior character standing, full body, red dragon humanoid with golden armor, friendly pose, game character art' },
];

async function fetchUserKey(page) {
  const url = `${BASE}/verifyUser?thread=0&__cacheBust=${Math.random()}`;
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
  const html = await page.content();
  const m = html.match(/"userKey":"([^"]+)"/);
  if (!m) {
    if (html.includes('too_many_requests')) throw new Error('rate limited');
    throw new Error('userKey not found — Perchance may have changed their flow');
  }
  return m[1];
}

async function generateOne(page, userKey, prompt, negative) {
  const url = `${BASE}/generate`
    + `?userKey=${encodeURIComponent(userKey)}`
    + `&requestId=aiImageCompletion${Math.floor(Math.random() * 2 ** 30)}`
    + `&__cacheBust=${Math.random()}`;
  const body = {
    generatorName: 'ai-image-generator',
    channel: 'ai-text-to-image-generator',
    subChannel: 'public',
    prompt,
    negativePrompt: negative,
    seed: -1,
    resolution: '768x768',
    guidanceScale: 7.0,
  };
  return await page.evaluate(async (u, b) => {
    const r = await fetch(u, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(b),
    });
    const text = await r.text();
    try { return { status: r.status, json: JSON.parse(text) }; }
    catch { return { status: r.status, text }; }
  }, url, body);
}

async function downloadOne(page, imageId, outPath) {
  const url = `${BASE}/downloadTemporaryImage?imageId=${encodeURIComponent(imageId)}`;
  const dataUrl = await page.evaluate(async (u) => {
    const r = await fetch(u);
    if (!r.ok) return null;
    const blob = await r.blob();
    return await new Promise(resolve => {
      const fr = new FileReader();
      fr.onloadend = () => resolve(fr.result);
      fr.readAsDataURL(blob);
    });
  }, url);
  if (!dataUrl) throw new Error(`download failed for ${imageId}`);
  const b64 = dataUrl.split(',', 2)[1];
  await fs.writeFile(outPath, Buffer.from(b64, 'base64'));
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  try {
    const page = await browser.newPage();
    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 '
      + '(KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
    );

    console.log('[verify] fetching userKey…');
    const userKey = await fetchUserKey(page);
    console.log(`[verify] userKey=${userKey.slice(0, 8)}…`);

    for (const s of SYMBOLS) {
      const outPath = path.join(OUT_DIR, `${s.name}.png`);
      try {
        const exists = await fs.stat(outPath).then(() => true).catch(() => false);
        if (exists) { console.log(`[skip] ${s.name}.png already exists`); continue; }

        console.log(`[gen]  ${s.name}: ${s.prompt.slice(0, 60)}…`);
        const res = await generateOne(page, userKey, s.prompt + STYLE, NEGATIVE);
        if (res.status !== 200 || !res.json?.imageId) {
          console.error(`[gen]  FAILED ${s.name}: ${JSON.stringify(res).slice(0, 200)}`);
          continue;
        }
        const { imageId } = res.json;
        console.log(`[dl]   ${s.name}: imageId=${imageId.slice(0, 12)}…`);
        await downloadOne(page, imageId, outPath);
        const size = (await fs.stat(outPath)).size;
        console.log(`[done] ${s.name}.png (${(size / 1024).toFixed(1)} KB)`);

        // Polite delay — avoid hammering free service
        await new Promise(r => setTimeout(r, 2500));
      } catch (err) {
        console.error(`[err]  ${s.name}: ${err.message}`);
      }
    }
  } finally {
    await browser.close();
  }
  console.log(`\nAll done. Output: ${OUT_DIR}`);
}

main().catch(err => { console.error(err); process.exit(1); });

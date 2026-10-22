# Startup script fonts

Web startup loads same-origin, content-addressed TrueType SFNT (`.ttf`) assets
through Flutter's public `FontLoader` before `runApp`. Family names, fallback
order, font features and registration timing are unchanged. The theme retains
its existing primary font selection. Native platforms retain their existing
font selection.

The four original pinned WOFF2 files remain in this directory, unchanged,
alongside the four SFNT containers. The SFNT files contain the same glyph order,
character mappings, outlines, horizontal metrics, names, OpenType layout tables
and other font data. They avoid the observed CanvasKit paragraph-layout cost of
the WOFF2 container. This changes the container, without subsetting or changing
font features. The original CJK/Thai subsets and Roboto source records, upstream
revision, licenses and hashes remain in `provenance.json`.

The only decoded table differences permitted by the offline verifier are the
SFNT `head.checkSumAdjustment`, and equivalent `cmap` serialization when its
complete XML semantics are identical (observed for Roboto). Every difference is
listed with per-table source/output SHA-256 in the conversion provenance.

Offline SFNT reproduction requires Python, `fontTools==4.62.1` and Brotli:

```
python scripts/prepare_startup_font_sfnt.py
python scripts/prepare_startup_font_sfnt.py --check
python -m unittest discover -s test/scripts -p prepare_startup_font_sfnt_test.py
python scripts/check_startup_font_coverage.py
```

The preparer accepts only the four pinned local WOFF2 sources. It validates all
conversions before publishing any output, verifies the expected SFNT hashes,
and refuses to overwrite different bytes. It performs no network requests and
does not update application references or mirror pins. The older
`prepare_startup_fonts.py` reproduces the original licensed WOFF2 subsets from
upstream and requires network access; it is not a release-build step.

The HTML entry preloads the four SFNT assets as `fetch`, `type="font/ttf"` and
`crossorigin`, matching Flutter's asset fetch. Downloads overlap the engine and
main bundle. Do not use `as="font"`: Flutter consumes these bytes through fetch,
rather than CSS. The build verifies resource bytes, sizes and MIME types before
injecting the transport. A new immutable mirror must contain and SHA-verify the
new files before its pin is accepted; `mirrorReady: false` explicitly blocks a
build while this evidence is missing. Keep the old WOFF2 files and their paths
for compatibility with already published clients.

Validate first-paint glyphs with external fonts blocked, delayed startup assets,
all supported locales, and the popular-keyword chip width. Browser or source
tests do not replace physical iPhone/PWA acceptance.

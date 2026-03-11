export function createAnimationLoopManager(config = {}) {
  const renderer = config.renderer;
  const scene = config.scene;
  const camera = config.camera;
  const reelGroups = Array.isArray(config.reelGroups) ? config.reelGroups : null;
  const fillLight = config.fillLight;
  const charRenderer = config.charRenderer;
  const charScene = config.charScene;
  const charCamera = config.charCamera;
  const charSpot = config.charSpot;

  if (!renderer || !scene || !camera || !reelGroups || !fillLight) {
    throw new Error('animation_loop_manager: renderer/scene/camera/reelGroups/fillLight are required');
  }
  if (!charRenderer || !charScene || !charCamera || !charSpot) {
    throw new Error('animation_loop_manager: charRenderer/charScene/charCamera/charSpot are required');
  }

  const maxSpinSpeed = Number.isFinite(Number(config.maxSpinSpeed)) ? Number(config.maxSpinSpeed) : 0.32;
  const minSpinSpeed = Number.isFinite(Number(config.minSpinSpeed)) ? Number(config.minSpinSpeed) : 0.002;
  const isMobile = !!config.isMobile;
  const orbitLightA = config.orbitLightA || null;
  const orbitLightB = config.orbitLightB || null;

  const getStripClip = typeof config.getStripClip === 'function' ? config.getStripClip : () => 0;
  const getCardHeight = typeof config.getCardHeight === 'function' ? config.getCardHeight : () => 0;
  const isCharAnimating = typeof config.isCharAnimating === 'function' ? config.isCharAnimating : () => false;
  const getCharMixer = typeof config.getCharMixer === 'function' ? config.getCharMixer : () => null;

  let lastTime = performance.now();
  let charFrameSkip = 0;

  function updateReels() {
    const stripClip = Number(getStripClip()) || 0;
    const cardH = Number(getCardHeight()) || 0;

    reelGroups.forEach((strip) => {
      let spinning = !!strip.userData.spinning;
      let speed = Number(strip.userData.speed) || 0;

      // Smooth spin-up: ramp to max speed over roughly 20 frames.
      if (spinning && speed < maxSpinSpeed) {
        speed = Math.min(speed + maxSpinSpeed / 20, maxSpinSpeed);
        strip.userData.speed = speed;
      }

      // Decelerate after stop signal.
      if (!spinning && speed > minSpinSpeed) {
        speed *= 0.88;
        strip.userData.speed = speed;
      }

      const delta = speed > minSpinSpeed ? speed : 0;
      if (delta === 0) return;

      let stripMaxY = -Infinity;
      strip.children.forEach((c) => {
        if (c.position.y > stripMaxY) stripMaxY = c.position.y;
      });

      strip.children.forEach((card) => {
        card.position.y -= delta;
        if (card.position.y < -stripClip) {
          card.position.y = stripMaxY + cardH;
          stripMaxY = card.position.y;
        }
      });
    });
  }

  function updateStageLights(t) {
    fillLight.intensity = 1.4 + Math.sin(t * 6.8) * 0.3 + Math.sin(t * 13.5) * 0.12;

    if (!isMobile && orbitLightA && orbitLightB) {
      const ORBIT_R = 6;
      orbitLightA.position.set(
        Math.cos(t * 0.7) * ORBIT_R,
        Math.sin(t * 0.5) * 1.5,
        Math.sin(t * 0.7) * ORBIT_R
      );
      orbitLightB.position.set(
        Math.sin(t * 0.55 + 1.5) * ORBIT_R,
        Math.cos(t * 0.65) * 1.2,
        Math.cos(t * 0.55 + 1.5) * ORBIT_R
      );
      orbitLightA.intensity = 1.4 + Math.sin(t * 1.1) * 0.6;
      orbitLightB.intensity = 1.2 + Math.cos(t * 0.9) * 0.5;
    }
  }

  function renderCharacter(dt, t) {
    if (isCharAnimating()) {
      const charMixer = getCharMixer();
      if (charMixer) charMixer.update(dt);
      charSpot.intensity = 2.5 + Math.sin(t * 1.4) * 0.5;
      charRenderer.render(charScene, charCamera);
      return;
    }

    // Idle: render around 15fps to reduce GPU load.
    charFrameSkip = (charFrameSkip + 1) % 4;
    if (charFrameSkip === 0) {
      charSpot.intensity = 2.5 + Math.sin(t * 1.4) * 0.5;
      charRenderer.render(charScene, charCamera);
    }
  }

  function frame() {
    const now = performance.now();
    const dt = Math.min((now - lastTime) / 1000, 0.033);
    lastTime = now;
    const t = now / 1000;

    updateReels();
    updateStageLights(t);
    renderer.render(scene, camera);
    renderCharacter(dt, t);
  }

  return {
    start() {
      lastTime = performance.now();
      renderer.setAnimationLoop(frame);
    },
    stop() {
      renderer.setAnimationLoop(null);
    },
  };
}

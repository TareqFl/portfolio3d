import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import config from '../particlesjs-config.json';

const Animation = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    container.fpsLimit = 45;
    // await console.log(container);
  }, []);
  return (
    <Particles
      id="tsparticles"
      options={config}
      init={particlesInit}
      loaded={particlesLoaded}
      style={{ display: 'inline' }}
    />
  );
};

export default Animation;

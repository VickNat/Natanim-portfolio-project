import React from 'react';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particle = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
      await console.log(container);
  }, []);

  return (
    <>
      <Particles
        className="tsparticles"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}

        options={{
          background: {
            image: "url('pietro-jeng-n6B49lTx7NM-unsplash.jpg')",
            repeat: "no-repeat",
            size: "cover"
          },
          particles: {
              color: {
                  value: "#A9C016",
              },
              links: {
                  color: "#A9C016",
                  distance: 150,
                  enable: true,
                  opacity: 0.3
              },
              move: {
                  enable: true,
                  speed: 3,
              },
              number: {
                  density: {
                      enable: true,
                      area: 900,
                  },
                  value: 80,
              }
          }
      }}
     />
    </>
  )
}

export default Particle
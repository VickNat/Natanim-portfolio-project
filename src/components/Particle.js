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
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover"
          },
          
          interactivity: {
              events: {
                  onClick: {
                      enable: true
                  },
                  onHover: {
                      enable: true,
                      mode: "repulse"
                  },
                  resize: true,
              },
              modes: {
                  push: {
                      quantity: 4,
                  },
                  repulse: {
                      distance: 200,
                      duration: 0.4,
                  },
              },
          },
          particles: {
              color: {
                  value: "#A9C016",
              },
              links: {
                  color: "#A9C016",
                  distance: 150,
                  enable: true,
                  opacity: 0.3,
                  width: 1,
              },
              collisions: {
                  enable: true,
              },
              move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                      default: "bounce",
                  },
                  random: false,
                  speed: 3,
                  straight: false,
              },
              number: {
                  density: {
                      enable: true,
                      area: 800,
                  },
                  value: 80,
              },
              opacity: {
                  value: 0.5,
              }
          }
      }}
     />
    </>
  )
}

export default Particle
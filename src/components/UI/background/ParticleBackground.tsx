import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { useEffect, useMemo, useState } from "react";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);

  const options: ISourceOptions = useMemo(() => {


    const manualParticles = [];
    const width = window.innerWidth;
    const height = window.innerHeight;
    const pixelSpacing = 40;

    const widthStep = (pixelSpacing / width) * 100;
    const heightStep = (pixelSpacing / height) * 100;

    for (
      let currentWidth = widthStep;
      currentWidth < 99;
      currentWidth += widthStep
    ) {
      for (
        let currentHeight = heightStep;
        currentHeight < 99;
        currentHeight += heightStep
      ) {
        manualParticles.push({
          position: {
            x: currentWidth,
            y: currentHeight,
          },
          options: {
            opacity: {
              value: getDistanceFromCenter(currentWidth, currentHeight, width, height)
            },
          },
        });
      }
    }

    return {
      background: {
        color: {
          value: "#2b2a33",
        },
        opacity: 1,
      },
      particles: {
        size: {
          value: 5,
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "polygon", 
          options: {
            polygon: {
              sides: 3,
            }
          }
        }, 
      },
      manualParticles,
      interactivity: {
        events: {
          onHover: {
            enable: true, 
            mode: ["bubble",]
          }
        },
        modes: {
          bubble: {
            distance: 220, 
            duration: 2, 
            size: 15, 
            color: {
              value: "#a8ffa8"
            }
          },
        }
      },
      fullScreen: {
        enable: true, 
        zIndex: -1, 
      }, 
      fpsLimit: 120,
    };
  }, []);

  async function particlesLoaded(container?: Container) {
    if (!container) return;
  }

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => setInit(true));
  }, []);

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      ></Particles>
    );
  }

  return <></>;
}

function getDistanceFromCenter(
  x: number,
  y: number,
  width: number,
  height: number
) {
  const opacityMax = 1;
  const opacityMin = 0; 
  const xPixels = x * width / 100; 
  const yPixels = y * height / 100; 

  const centerX = width / 2;
  const centerY = height / 2;

  let distanceX = centerX - xPixels;
  if (distanceX < 0) distanceX *= -1;

  let distanceY = centerY - yPixels;
  if (distanceY < 0) distanceY *= -1;

  const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
  let opacity = (distance - 520) / (centerX + 600);

  if (opacity < opacityMin) opacity = opacityMin;
  if (opacity > opacityMax) opacity = opacityMax;
  return opacity; 
}

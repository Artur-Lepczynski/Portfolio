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

    return {
      background: {
        image: "linear-gradient(-15deg, #434343 0%, #000000 100%)",
        opacity: 1,
      },
      particles: {
        number: {
          value: 120,
          density: {
            enable: true,
            width: 1920,
            height: 1080,
          },
        },
        size: {
          value: { min: 1, max: 2 },
          animation: {
            enable: true,
            speed: 1,
            size_min: 0.5,
            sync: false,
          },
        },
        color: {
          value: "#ffffff",
        },
        opacity: {
          value: { min: 0.3, max: 0.8 },
          animation: {
            enable: true,
            speed: 0.5,
            opacity_min: 0.2,
            sync: false,
          },
        },
        links: {
          enable: true,
          distance: 40,
          color: "#ffffff",
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: { min: 0.5, max: 2.5 },
          direction: MoveDirection.none,
          random: true,
          straight: false,
          outModes: {
            default: OutMode.out,
          },
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true, 
            mode: ["grab"], 
            parallax: {
              enable: true, 
              force: 60, 
              smooth: 10,
            }
          }
        },
        modes: {
          grab: {
            distance: 200,
            links: {
              opacity: 0.6,
              color: "#00957c",
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

import { useState } from "react";
import style from "./Curtain.module.css";
import { AnimatePresence, stagger } from "motion/react";
import CurtainFragment from "./CurtainFragment";
import { motion } from "motion/react";

export default function Curtain() {
  const fragmentWidthPx = 200;
  const fragmentsNumber = Math.ceil(window.innerWidth / fragmentWidthPx) + 4;
  const fragmentDuration = 0.5;
  const fragmentStagger = 0.075;
  const idleTime = 0.4;
  const animationTimeMs =
    (fragmentDuration + (fragmentsNumber - 1) * fragmentStagger + idleTime) *
    1000;

  const [curtainVisible, setCurtainVisible] = useState(true);
  const [backgroundVisible, setBackgroundVisible] = useState(true);

  const fragments = Array.from({ length: fragmentsNumber });

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        delayChildren: stagger(fragmentStagger),
      },
    },
    exit: {
      transition: {
        delayChildren: stagger(fragmentStagger),
      },
    },
  };

  setTimeout(() => {
    setCurtainVisible(false);
  }, animationTimeMs);

  setTimeout(() => {
    setBackgroundVisible(false);
  }, animationTimeMs - (idleTime / 2) * 1000);

  return (
    <>
      {backgroundVisible && <div className={style.background}></div>}
      <AnimatePresence>
        {curtainVisible && (
          <motion.div
            className={style.curtain}
            variants={containerVariants}
            transition={{ duration: 20 }}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            {fragments.map((_, i) => (
              <CurtainFragment
                key={i}
                fragmentNumber={i}
                duration={fragmentDuration}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

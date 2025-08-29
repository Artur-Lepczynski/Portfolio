import { ReactTyped } from "react-typed";
import style from "./Intro.module.css";
import { AppearingText } from "../UI/AppearingText";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Intro() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    function checkScreenSize() {
      setIsSmallScreen(window.innerWidth <= 530);
    }
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const name = isSmallScreen ? "Artur\nLepczyński" : "Artur Lepczyński";

  return (
    <div className={style.background}>
      <div className={style["wrapper"]}>
        <AppearingText className={style.name} text={name} />
        <motion.h2
          className={style.title}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 4.2 }}
        >
          web developer
        </motion.h2>
        <motion.div
          className={style.separator}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 4.5, duration: 1.5 }}
        ></motion.div>
        <div className={style["about-wrapper"]}>
          <ReactTyped
            className={style.about}
            strings={[
              "Hi! 🙂 I'm a graduate of the Polish-Japanese Academy of Information Technology with multiple years of experience in frontend development. 💻 Skilled in TypeScript and React, I'm looking for new challenges to further grow and contribute to exciting projects! 🚀",
            ]}
            typeSpeed={8}
            startDelay={6100}
            cursorChar=""
          />
        </div>
      </div>
    </div>
  );
}

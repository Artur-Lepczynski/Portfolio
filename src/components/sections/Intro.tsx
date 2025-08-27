import { ReactTyped } from "react-typed";
import style from "./Intro.module.css";
import { AppearingText } from "../UI/AppearingText";

export default function Intro() {
  return (
    <div className={style.background}>
      <div className={style["name-wrapper"]}>
        <AppearingText className={style.name} text="Artur Lepczyński" />
        <h2 className={style.title}>web developer</h2>
        <div className={style.separator}></div>
        <div className={style["about-wrapper"]}>
          <ReactTyped
          className={style.about}
          strings={[
            "Hi! 🙂 I'm a graduate of the Polish-Japanese Academy of Information Technology with multiple years of experience in frontend development. 💻 Skilled in TypeScript and React, I'm looking for new challenges to further grow and contribute to exciting projects! 🚀",
          ]}
          typeSpeed={10}
          startDelay={500}
        />
        </div>
      </div>
    </div>
  );
}

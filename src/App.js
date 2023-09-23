import style from "./App.module.css";
import "./colors.css";
import { Suspense, useState } from "react";
import { useTranslation } from "react-i18next";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Curtain from "./components/UI/Curtain";

export default function App() {
  const { t, i18n } = useTranslation();

  //home, projects, contact
  const [selectedPanel, setSelectedPanel] = useState("home");
  const [fadeDirection, setFadeDirection] = useState("right");

  function handlePanelChange(newPanel, fadeDirection) {
    setSelectedPanel("none");
    setFadeDirection(fadeDirection);
    setTimeout(() => {
      setSelectedPanel(newPanel);
    }, 300);
  }

  function handleLanguageChange(newLanguage) {
    i18n.changeLanguage(newLanguage);
  }

  const [distance, setDistance] = useState({ x: 0, y: 0 });

  function handleMouseMove(event) {
    const x = event.clientX;
    const y = event.clientY;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const originX = width / 2;
    const originY = height / 2;
    let xDist = x - originX;
    if (xDist > 820) xDist = 820;
    const yDist = y - originY;
    const xMove = (xDist / 820) * -10;
    const yMove = (yDist / originY) * -10;
    setDistance({ x: xMove, y: yMove });
  }

  return (
    <Suspense fallback="...loading">
      <Curtain />
      <div className={style["outer-wrapper"]} onMouseMove={handleMouseMove}>
        <div
          className={style["inner-wrapper"]}
          style={{ transform: `translate(${distance.x}px, ${distance.y}px)` }}
        >
          <Home
            in={selectedPanel === "home"}
            onLanguageChange={handleLanguageChange}
            onPanelChange={handlePanelChange}
          />
          <Projects
            in={selectedPanel === "projects"}
            onPanelChange={handlePanelChange}
            fadeDirection={fadeDirection}
          />
        </div>
      </div>
    </Suspense>
  );
}

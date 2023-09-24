import style from "./App.module.css";
import "./colors.css";
import { Suspense, useState } from "react";
import { useTranslation } from "react-i18next";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Curtain from "./components/UI/Curtain";
import Contact from "./components/contact/Contact";

export default function App() {
  const { i18n } = useTranslation();
  
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
    const originX = window.innerWidth / 2;
    const originY = window.innerHeight / 2;
    let xDist = event.clientX - originX;
    if (xDist > 820) xDist = 820;
    const yDist = event.clientY - originY;
    const xMove = (xDist / 820) * -10;
    const yMove = (yDist / originY) * -10;
    setDistance({ x: xMove, y: yMove });
  }

  return (
    <Suspense fallback="...loading">
      <Curtain />
      <div className={style["outer-wrapper"]} onMouseMove={handleMouseMove}>
        <main
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
          <Contact
            in={selectedPanel === "contact"}
            onPanelChange={handlePanelChange}
          />
        </main>
      </div>
    </Suspense>
  );
}

import style from "./App.module.css";
import "./colors.css";
import { Suspense, useState } from "react";
import { useTranslation } from "react-i18next";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Curtain from "./components/UI/Curtain";
import Page from "./components/UI/Page";

export default function App() {
  const { t, i18n } = useTranslation();

  //home, projects, contact
  const [selectedPanel, setSelectedPanel] = useState("home");

  function handlePanelChange(newPanel) {
    setSelectedPanel("none");
    setTimeout(() => {
      setSelectedPanel(newPanel);
    }, 300);
  }

  function handleLanguageChange(newLanguage) {
    i18n.changeLanguage(newLanguage);
  }

  return (
    <Suspense fallback="...loading">
      <Curtain />
      <div className={style["app-wrapper"]}>
        <Page>
          <Home
            in={selectedPanel === "home"}
            onLanguageChange={handleLanguageChange}
            onPanelChange={handlePanelChange}
          />
          <Projects
            in={selectedPanel === "projects"}
            onPanelChange={handlePanelChange}
          />
        </Page>
      </div>
    </Suspense>
  );
}

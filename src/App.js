import style from "./App.module.css";
import "./colors.css";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Curtain from "./components/UI/Curtain";

export default function App() {
  const { t, i18n } = useTranslation();
  const locales = {
    en: "English",
    pl: "Polski",
  };

  function handleLanguageChange() {
    const newLanguage = i18n.language === "en" ? "pl" : "en";
    i18n.changeLanguage(newLanguage);
  }

  return (
    <Suspense fallback="...loading">
      <Curtain />
      <div className={style["app-wrapper"]}>
        <Home />
        <Projects/>
      </div>
    </Suspense>
  );
}

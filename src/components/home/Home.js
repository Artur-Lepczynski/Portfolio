import { useTranslation } from "react-i18next";
import Page from "../UI/Page";
import style from "./Home.module.css";
import Button from "../UI/Button";
import Panel from "../UI/Panel";

export default function Home(props) {
  const { t, i18n } = useTranslation();

  function handleLanguageChange(code) {
    props.onLanguageChange(code);
  }

  function handlePanelChange(newPanel) {
    props.onPanelChange(newPanel);
  }

  return (
    <Panel className={style.home} in={props.in}>
      <div>
        <h1>Artur Lepczyński</h1>
        <p className={style.subtitle}>{t("home.title")}</p>
        <div className={style["button-wrapper"]}>
          <Button type="button" onClick={() => handlePanelChange("projects")}>
            <i className="fa-solid fa-arrow-right"></i>
            {t("home.projects")}
          </Button>
          <Button type="button" onClick={() => handlePanelChange("contact")}>
            <i className="fa-solid fa-arrow-right"></i>
            {t("home.contact")}
          </Button>
        </div>
      </div>
      <div className={style["info-wrapper"]}>
        <div className={style["lang-controls"]}>
          <p>{t("home.language")}:</p>
          <div className={style["lang-buttons"]}>
            <Button
              type="language"
              active={i18n.language === "en"}
              onClick={() => {
                handleLanguageChange("en");
              }}
            >
              English
            </Button>
            <i className="fa-solid fa-circle"></i>
            <Button
              type="language"
              active={i18n.language === "pl"}
              onClick={() => {
                handleLanguageChange("pl");
              }}
            >
              Polski
            </Button>
          </div>
        </div>
        <div className={style.bio}>
          <p>{t("home.bio")}</p>
        </div>
      </div>
    </Panel>
  );
}

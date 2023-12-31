import { useTranslation } from "react-i18next";
import style from "./Home.module.css";
import Button from "../UI/Button";
import Panel from "../UI/Panel";

export default function Home(props) {
  const { t, i18n } = useTranslation();

  function handleLanguageChange(code) {
    props.onLanguageChange(code);
  }

  function handlePanelChange(newPanel) {
    props.onPanelChange(newPanel, "right");
  }

  return (
    <Panel
      in={props.in}
      fadeDirection="left"
      title="Artur Lepczyński"
      subtitle={t("home.title")}
    >
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
      <div className={style["info-wrapper"]}>
        <div className={style["lang-controls"]}>
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
        <div className={style.bio}>
          <p>{t("home.bio")}</p>
        </div>
      </div>
    </Panel>
  );
}

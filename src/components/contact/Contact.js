import { useTranslation } from "react-i18next";
import style from "./Contact.module.css";
import Panel from "../UI/Panel";
import Button from "../UI/Button";

export default function Contact(props) {
  const { t } = useTranslation();

  function handlePanelChange(newPanel) {
    props.onPanelChange(newPanel, "left");
  }

  return (
    <Panel
      className={style.contact}
      in={props.in}
      fadeDirection="right"
      title={t("contact.title")}
      subtitle={t("contact.subtitle")}
    >
      <div className={style["info-wrapper"]}>
        <div className={style["controls"]}>
          <Button
            type="button"
            onClick={() => {
              handlePanelChange("home");
            }}
          >
            <i className={`fa-solid fa-angles-left ${style.arrow}`}></i>
          </Button>
          <i className={`fa-solid fa-circle ${style.dot}`}></i>
          <Button
            type="button"
            onClick={() => {
              handlePanelChange("projects");
            }}
          >
            <i className={`fa-solid fa-angle-left ${style.arrow}`}></i>
          </Button>
        </div>
        <div className={style["contact-info"]}>
          <div className={style["contact-item"]}>
            <i className="fa-solid fa-envelope"></i>
            <p>artur.lepczynski@gmail.com</p>
          </div>
          <div className={style["contact-item"]}>
            <i className="fa-brands fa-github"></i>
            <Button
              className={style.link}
              type="link"
              to="https://github.com/Artur-Lepczynski"
            >
              https://github.com/Artur-Lepczynski
            </Button>
          </div>
        </div>
      </div>
    </Panel>
  );
}

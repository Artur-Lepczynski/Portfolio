import style from "./Projects.module.css";
import Panel from "../UI/Panel";
import Button from "../UI/Button";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import listifyLogo from "../../images/listify-logo.png";
import Project from "./Project";

export default function Projects(props) {
  const { t } = useTranslation();

  const [selectedProject, setSelectedProject] = useState("none");

  function handleProjectChange(newProject) {
    if (newProject === selectedProject) return;
    setSelectedProject("none");
    setTimeout(() => {
      setSelectedProject(newProject);
    }, 150);
  }

  function handlePanelChange(newPanel) {
    props.onPanelChange(newPanel, newPanel === "home" ? "right" : "left");
  }

  return (
    <Panel
      className={style.projects}
      in={props.in}
      fadeDirection={props.fadeDirection}
    >
      <div>
        <h1>{t("projects.title")}</h1>
        <p className={style.subtitle}>{t("projects.subtitle")}</p>
        <Button
          type="project"
          active={selectedProject === "listify"}
          onClick={() => handleProjectChange("listify")}
        >
          Listify
        </Button>
        <p className={style["more-projects"]}>{t("projects.more-projects")}</p>
      </div>

      <div className={style["info-wrapper"]}>
        <div className={style["controls"]}>
          <Button
            type="button"
            onClick={() => {
              handlePanelChange("home");
            }}
          >
            <i className={`fa-solid fa-chevron-left ${style.arrow}`}></i>
          </Button>
          <i className={`fa-solid fa-circle ${style.dot}`}></i>
          <Button
            type="button"
            onClick={() => {
              handlePanelChange("contact");
            }}
          >
            <i className={`fa-solid fa-arrow-right ${style.arrow}`}></i>
            {t("projects.contact")}
          </Button>
        </div>
        <Project
          in={selectedProject === "listify"}
          logo={listifyLogo}
          logoAlt="Listify logo"
          title="Listify"
          description={t("projects.listify.description")}
          listItems={[
            "Context API",
            "React Router",
            t("projects.listify.list-item-firebase"),
            "CSS Modules",
            "Chart.js",
          ]}
          projectLink="https://listify-w36.web.app"
          githubLink="https://github.com/Artur-Lepczynski/Listify"
        />
      </div>
    </Panel>
  );
}

import { CSSTransition } from "react-transition-group";
import style from "./Project.module.css";
import Button from "../UI/Button";

export default function Project(props) {
  return (
    <CSSTransition
      in={props.in}
      timeout={300}
      unmountOnExit
      mountOnEnter
      classNames={{
        enter: style["project-enter"],
        enterActive: style["project-enter-active"],
        exit: style["project-exit"],
        exitActive: style["project-exit-active"],
      }}
    >
      <div className={style.project}>
        <div className={style["project-header"]}>
        <img src={props.logo} alt={props.logoAlt} width={60} height={60}></img>
        <div className={style.controls}>
        <Button type="link" className={style.title} to={props.projectLink}>
          {props.title}
        </Button>
        <Button type="link" className={style["github-link"]} to={props.githubLink}>
          <i className="fa-brands fa-github"></i>
        </Button>
        </div>
        </div>
        <p className={style.description}>{props.description}</p>
        <ul>
          {props.listItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p></p>
      </div>
    </CSSTransition>
  );
}

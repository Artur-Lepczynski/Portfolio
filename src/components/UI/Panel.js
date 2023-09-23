import { CSSTransition } from "react-transition-group";
import style from "./Panel.module.css";

export default function Panel(props) {
  return (
    <CSSTransition
      in={props.in}
      timeout={300}
      classNames={{
        enter: style["panel-enter"],
        enterActive: style["panel-enter-active"],
        exit: style["panel-exit"],
        exitActive: style["panel-exit-active"],
      }}
      mountOnEnter
      unmountOnExit
    >
      <div
        className={`${style.panel} ${
          props.fadeDirection === "left"
            ? style["panel-left"]
            : style["panel-right"]
        } ${props.className}`}
      >
        {props.children}
      </div>
    </CSSTransition>
  );
}

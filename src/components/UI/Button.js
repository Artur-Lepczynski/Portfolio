import style from "./Button.module.css";

export default function Button(props) {
  return (
    <>
      {(props.type === "language" || props.type === "button") && (
        <button
          className={`
            ${style.button}
            ${props.type === "language" && style["language-button"]}
            ${
              props.type === "language" &&
              props.active &&
              style["language-active"]
            }
            ${props.type === "button" && style["action-button"]}
            ${props.className}
            `}
          onClick={props.onClick}
        >
          {props.children}
        </button>
      )}
      {props.type === "project" && (
        <div className={style["project-button-wrapper"]}>
          {props.active && (
            <i
              className={`fa-solid fa-play ${style["project-button-icon"]}`}
            ></i>
          )}
          <button
            className={`${style.button} ${style["project-button"]}`}
            onClick={props.onClick}
          >
            {props.children}
          </button>
        </div>
      )}
      {props.type === "link" && (
        <a
          href={props.to}
          target="_blank"
          rel="noreferrer"
          className={`${style.button} ${props.className}`}
        >
          {props.children}
        </a>
      )}
    </>
  );
}

// // v{props.type === "project" && props.active && (
//   <i className="fa-solid fa-play"></i>
//   )}

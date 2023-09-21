import style from "./Button.module.css";

export default function Button(props) {
  return (
    <>
      {props.type === "language" && (
        <button
          className={`${style.button} ${style["language-button"]} ${
            props.active && style.active
          }`}
          onClick={props.onClick}
        >
          {props.children}
        </button>
      )}
      {props.type === "button" && (
        <button
          className={`${style.button} ${style["action-button"]} ${props.className}`}
          onClick={props.onClick}
        >
          {props.children}
        </button>
      )}
    </>
  );
}

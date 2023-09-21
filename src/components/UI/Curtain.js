import style from "./Curtain.module.css"; 
import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

export default function Curtain() {
  const [curtainIn, setCurtainIn] = useState(true);
  const CURTAIN_SHOWN_TIME = 100;

  useEffect(() => {
    setTimeout(() => {
      setCurtainIn(false);
    }, CURTAIN_SHOWN_TIME);
  }, []);

  return (
    <CSSTransition
      in={curtainIn}
      timeout={500}
      mountOnEnter
      unmountOnExit
      classNames={{
        exit: style["curtain-exit"],
        exitActive: style["curtain-exit-active"],
      }}
    >
      <div className={style.curtain}></div>
    </CSSTransition>
  );
}

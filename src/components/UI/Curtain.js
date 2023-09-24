import style from "./Curtain.module.css";
import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

export default function Curtain() {
  const [curtainIn, setCurtainIn] = useState(true);
  const CURTAIN_TOTAL_TIME = 6000;

  const [curtainClosed, setCurtainClosed] = useState(true);
  const CURTAIN_CLOSED_TIME = 5500;

  const [textShown, setTextShown] = useState(true);
  const TEXT_SHOWN_TIME = 5000;

  useEffect(() => {
    setTimeout(() => {
      setCurtainIn(false);
    }, CURTAIN_TOTAL_TIME);
    setTimeout(() => {
      setCurtainClosed(false);
    }, CURTAIN_CLOSED_TIME);
    setTimeout(() => {
      setTextShown(false);
    }, TEXT_SHOWN_TIME);
  }, []);

  return (
    <CSSTransition
      in={curtainIn}
      timeout={200}
      classNames={{
        exitActive: style["curtain-exit-active"],
      }}
      unmountOnExit
    >
      <div className={style["curtain"]}>
        <CSSTransition
          in={curtainClosed}
          timeout={500}
          classNames={{
            exit: style["curtain-both-exit"],
            exitActive: style["curtain-left-exit-active"],
          }}
          unmountOnExit
        >
          <div className={style["curtain-left"]}></div>
        </CSSTransition>

        <CSSTransition
          in={curtainClosed}
          timeout={500}
          classNames={{
            exit: style["curtain-exit"],
            exitActive: style["curtain-right-exit-active"],
          }}
          unmountOnExit
        >
          <div className={style["curtain-right"]}></div>
        </CSSTransition>



        {textShown && <div className={style.text}>
          <p className={style.title}>Artur Lepczyński</p>
          <p className={style.subtitle}>portfolio</p>
          <div className={style.wheel}></div>
        </div>}

      </div>
    </CSSTransition>
  );
}

import { motion } from "motion/react";
import style from "./CurtainFragment.module.css";

interface CurtainFragmentProps {
  duration: number;
  fragmentNumber: number;
}

export default function CurtainFragment(props: CurtainFragmentProps) {
  const shiftLeftPx = 2;

  const fragmentVariants = {
    hidden: { opacity: 0, scaleX: 0},
    show: { opacity: 1, scaleX: 1, transition: { duration: props.duration } },
    exit: { opacity: 0, scaleX: 0, transition: { duration: props.duration } },
  };

  return (
    <motion.div
      style={{ right: props.fragmentNumber * shiftLeftPx }}
      className={style.fragment}
      variants={fragmentVariants}
    ></motion.div>
  );
}


  // const fragmentVariants = {
  //   hidden: { scaleX: 0, opacity: 1 },
  //   show: { scaleX: 1, opacity: 1, transition: { duration: props.duration } },
  //   exit: { opacity: 0, scaleX: 0, transition: { duration: props.duration } },
  // };
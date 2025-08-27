import style from "./AppearingText.module.css";
import { motion } from "motion/react";

interface AppearingTextProps {
  text: string;
  delay?: number;
  staggerDelay?: number;
  className?: string;
}

export function AppearingText({
  text,
  delay = 0,
  staggerDelay = 0.1,
  className = "",
}: AppearingTextProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      {text.split("").map((letter, index) => {
        return (
          <motion.span
            className={style.letter}
            key={index}
            initial={{ opacity: 0.5, transform: "scaleY(0) translateY(40px)" }}
            animate={{ opacity: 1, transform: "scaleY(1) translateY(0px)" }}
            transition={{
              delay: delay + index * staggerDelay,
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            whileHover={{
              color: "#00957c",
              transition: { duration: 0.2 },
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        );
      })}
    </motion.div>
  );
}

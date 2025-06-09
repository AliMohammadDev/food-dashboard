import { motion } from "framer-motion";
import React from "react";

type BlurTextProps = {
  text: string;
  delay?: number;
  direction?: "top" | "bottom";
  animateBy?: "words" | "letters";
  className?: string;
  onAnimationComplete?: () => void;
};

const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 0,
  direction = "top",
  animateBy = "words",
  className = "",
  onAnimationComplete,
}) => {
  const items = animateBy === "words" ? text.split(" ") : text.split("");

  const getInitial = () => {
    return direction === "top" ? { y: -20, opacity: 0 } : { y: 20, opacity: 0 };
  };

  return (
    <div className={`inline-block overflow-hidden ${className}`}>
      {items.map((item, i) => (
        <motion.span
          key={i}
          initial={getInitial()}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: delay / 1000 + i * 0.05, duration: 0.5 }}
          onAnimationComplete={i === items.length - 1 ? onAnimationComplete : undefined}
          className={`inline-block ${animateBy === "words" ? "mr-2" : ""}`}
        >
          {item}
        </motion.span>
      ))}

    </div>
  );
};

export default BlurText;

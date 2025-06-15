"use client";

import { motion } from "motion/react";

export default function MotionFadeInUp(props) {
  return (
    <motion.div
      className={props.className}
      initial={{ opacity: 0, transform: "translateY(50px)" }}
      whileInView={{
        opacity: 1,
        transform: "translateY(0)",
        ease: ["easeOut", "easeOut"],
      }}
      transition={{ duration: 0.5, delay: 0, ...props.transition }}
      viewport={{ once: true, amount: 1 }}
    >
      {props.children}
    </motion.div>
  );
}

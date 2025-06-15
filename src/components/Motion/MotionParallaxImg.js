"use client";

import { motion, useScroll, useTransform } from "motion/react";

export default function ParallaxImage(props) {
  const { scrollY } = useScroll(); // Get the scroll position

  // Create a transform that moves the div at 50% of the scroll speed
  const yTransform = useTransform(scrollY, [0, 1000], [0, 400]);

  return (
    <motion.div className="relative" style={{ y: yTransform }}>
      {props.children}
    </motion.div>
  );
}

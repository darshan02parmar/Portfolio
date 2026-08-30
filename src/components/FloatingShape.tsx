import React from "react";
import { motion } from "framer-motion";

interface FloatingShapeProps {
  shapeUrl: string;
  directionClass: string;
  amplitude: number[];
  speed: number;
  size?: number; // optional size in pixels
}

const FloatingShape: React.FC<FloatingShapeProps> = ({
  shapeUrl,
  directionClass,
  amplitude = [40, 10, 10],
  speed = 0.2,
  size = 150,
}) => {
  const yKeyframes = [0, -amplitude[0], 0];
  const xKeyframes = [0, (amplitude[1] || 0) * 0.15, 0];
  const rotateKeyframes = [0, amplitude[2] || 10, -(amplitude[2] || 10), 0];

  const duration = speed > 0 ? 1 / speed : 6;

  return (
    <motion.div
      className={`absolute z-0 pointer-events-none ${directionClass}`}
      animate={{
        y: yKeyframes,
        x: xKeyframes,
        rotate: rotateKeyframes,
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <img
        src={shapeUrl}
        alt="Floating Shape"
        style={{ width: `${size}px`, height: `${size}px` }}
        className="opacity-80 transition-all duration-300 glowing-shape"
      />
    </motion.div>
  );
};

export default FloatingShape;

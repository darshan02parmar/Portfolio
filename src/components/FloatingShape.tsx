import React from 'react';
import { motion } from 'framer-motion';

interface FloatingShapeProps {
    shapeUrl: string;
    directionClass: string; // e.g., 'left-[-20px] bottom-[-20px]' or 'right-0 top-0'
    amplitude: number[];
    speed: number;
}

const FloatingShape: React.FC<FloatingShapeProps> = ({ 
    shapeUrl, 
    directionClass, 
    amplitude = [40, 10, 10], 
    speed = 0.2 
}) => {
    // Dynamically calculate keyframes based on amplitude prop
    const yKeyframes = [0, -amplitude[0], 0];
    const xKeyframes = [0, (amplitude[1] || 0) * 0.15, 0];
    const rotateKeyframes = [0, amplitude[2] || 10, -(amplitude[2] || 10), 0];
    
    // Duration is inversely proportional to speed, e.g., speed of 0.2 results in a 5s duration
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
                ease: "easeInOut"
            }}
        >
            <img src={shapeUrl} alt="Floating Shape" className="w-[150px] h-[150px] opacity-80 transition-all duration-300 glowing-shape" />
        </motion.div>
    );
};

export default FloatingShape;

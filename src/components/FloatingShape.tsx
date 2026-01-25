import React from 'react';
import { motion } from 'framer-motion';

interface FloatingShapeProps {
    shapeUrl: string;
    directionClass: string; // e.g., 'left-[-20px] bottom-[-20px]' or 'right-0 top-0'
    amplitude: number[];
    speed: number;
}

const FloatingShape: React.FC<FloatingShapeProps> = ({ shapeUrl, directionClass }) => {
    // Simplified animation for now, can be enhanced with complex framer-motion variants
    return (
        <motion.div
            className={`absolute z-0 pointer-events-none ${directionClass}`}
            animate={{
                y: [0, -40, 0],
                rotate: [0, 10, -10, 0],
            }}
            transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            <img src={shapeUrl} alt="Floating Shape" className="w-[150px] h-[150px] opacity-80" />
        </motion.div>
    );
};

export default FloatingShape;

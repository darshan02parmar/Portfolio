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
            className={`absolute z-[-1] pointer-events-none ${directionClass}`}
            animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0],
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            <img src={shapeUrl} alt="Floating Shape" className="w-32 h-32 opacity-50" />
        </motion.div>
    );
};

export default FloatingShape;

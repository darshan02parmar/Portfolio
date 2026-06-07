import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
}

export const TiltCard: React.FC<TiltCardProps> = ({ children, className = '' }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const glareRef = useRef<HTMLDivElement>(null);

    // Track normalized mouse coordinates (-0.5 to 0.5)
    const x = useMotionValue(0.5);
    const y = useMotionValue(0.5);

    // Smooth springs for tilt angles (max tilt +/-10 degrees)
    const rotateX = useSpring(useTransform(y, [0, 1], [10, -10]), { stiffness: 120, damping: 20 });
    const rotateY = useSpring(useTransform(x, [0, 1], [-10, 10]), { stiffness: 120, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        x.set(mouseX / width);
        y.set(mouseY / height);

        if (glareRef.current) {
            glareRef.current.style.background = `radial-gradient(circle at ${((mouseX / width) * 100).toFixed(1)}% ${((mouseY / height) * 100).toFixed(1)}%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 70%)`;
            glareRef.current.style.opacity = '1';
        }
    };

    const handleMouseLeave = () => {
        x.set(0.5);
        y.set(0.5);

        if (glareRef.current) {
            glareRef.current.style.opacity = '0';
        }
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
                perspective: '1000px',
            }}
            className={`relative ${className}`}
        >
            <div style={{ transform: 'translateZ(10px)', transformStyle: 'preserve-3d' }} className="w-full h-full">
                {children}
            </div>

            {/* Glossy Glare overlay */}
            <div
                ref={glareRef}
                style={{
                    opacity: 0,
                    transition: 'opacity 0.2s ease',
                }}
                className="absolute inset-0 pointer-events-none rounded-[30px] z-20 mix-blend-overlay"
            />
        </motion.div>
    );
};

export default TiltCard;

import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
    const cursorDotRef = useRef<HTMLDivElement>(null);
    const cursorRingRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Using motion values and springs for smooth ring lag
    const ringX = useMotionValue(-100);
    const ringY = useMotionValue(-100);
    const springConfig = { stiffness: 250, damping: 28, mass: 0.8 };
    const springX = useSpring(ringX, springConfig);
    const springY = useSpring(ringY, springConfig);

    useEffect(() => {
        // Only run on desktop/devices with a precise pointer
        const mediaQuery = window.matchMedia('(pointer: coarse)');
        if (mediaQuery.matches) return;

        requestAnimationFrame(() => {
            setIsVisible(true);
        });

        const handleMouseMove = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check if hovered element or its parent is magnetic
            const magneticElement = target.closest('[data-magnetic]');

            if (cursorDotRef.current) {
                cursorDotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
            }

            if (magneticElement) {
                setIsHovered(true);
                const rect = magneticElement.getBoundingClientRect();
                const elementX = rect.left + rect.width / 2;
                const elementY = rect.top + rect.height / 2;

                // Lock ring position to the center of the magnetic element
                ringX.set(elementX);
                ringY.set(elementY);

                // Add magnetic pull effect to the element itself
                const pullX = (e.clientX - elementX) * 0.25;
                const pullY = (e.clientY - elementY) * 0.25;
                (magneticElement as HTMLElement).style.transform = `translate3d(${pullX}px, ${pullY}px, 0)`;
                (magneticElement as HTMLElement).style.transition = 'transform 0.1s ease-out';
            } else {
                setIsHovered(false);
                ringX.set(e.clientX);
                ringY.set(e.clientY);

                // Reset any previously pulled elements
                document.querySelectorAll('[data-magnetic]').forEach((el) => {
                    const htmlEl = el as HTMLElement;
                    if (htmlEl.style.transform) {
                        htmlEl.style.transform = '';
                        htmlEl.style.transition = 'transform 0.3s ease-out';
                    }
                });
            }
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        const handleMouseEnter = () => {
            setIsVisible(true);
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [ringX, ringY]);

    if (!isVisible) return null;

    return (
        <>
            {/* Inner Dot */}
            <div
                ref={cursorDotRef}
                className="fixed top-0 left-0 w-2 h-2 bg-[#50e0b3] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
                style={{ transform: 'translate3d(-100px, -100px, 0)' }}
            />
            {/* Outer Ring */}
            <motion.div
                ref={cursorRingRef}
                className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 border-[2px] border-[#50e0b3] mix-blend-difference`}
                style={{
                    x: springX,
                    y: springY,
                    width: isHovered ? 48 : 24,
                    height: isHovered ? 48 : 24,
                    backgroundColor: isHovered ? 'rgba(80, 224, 179, 0.1)' : 'transparent',
                }}
                transition={{
                    width: { type: 'spring', stiffness: 200, damping: 20 },
                    height: { type: 'spring', stiffness: 200, damping: 20 },
                    backgroundColor: { duration: 0.2 },
                }}
            />
        </>
    );
};

export default CustomCursor;

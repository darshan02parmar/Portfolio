import { useState, useEffect } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const ScrollButton = () => {
    const [direction, setDirection] = useState<'down' | 'up'>('down');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setDirection('up');
            } else {
                setDirection('down');
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = () => {
        if (direction === 'up') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
            className="fixed bottom-8 right-8 z-50 p-3.5 bg-background/60 backdrop-blur-xl text-foreground rounded-full border border-border/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-foreground hover:text-background hover:shadow-xl transition-all duration-500 flex items-center justify-center group"
            aria-label={direction === 'up' ? "Scroll to top" : "Scroll to bottom"}
        >
            {direction === 'up' ? (
                <ArrowUp size={22} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
            ) : (
                <ArrowDown size={22} className="group-hover:translate-y-0.5 transition-transform duration-300" />
            )}
        </motion.button>
    );
};

export default ScrollButton;



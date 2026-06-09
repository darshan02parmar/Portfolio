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
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleClick}
            className="fixed bottom-8 right-8 z-50 p-4 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 border-[3px] border-slate-900 dark:border-slate-100 shadow-[4px_4px_0px_0px_#1e293b] dark:shadow-[4px_4px_0px_0px_#f1f5f9]"
            aria-label={direction === 'up' ? "Scroll to top" : "Scroll to bottom"}
        >
            {direction === 'up' ? <ArrowUp size={24} /> : <ArrowDown size={24} />}
        </motion.button>
    );
};

export default ScrollButton;



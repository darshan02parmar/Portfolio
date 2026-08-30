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
            className="group fixed bottom-8 right-8 z-50 flex items-center justify-center rounded-full border-[3px] border-slate-900 bg-white p-4 text-slate-900 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none dark:border-slate-100 dark:bg-slate-900 dark:text-slate-100 dark:shadow-[4px_4px_0px_0px_#f1f5f9]"
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



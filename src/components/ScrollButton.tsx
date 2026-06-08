import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Display only when within 250px of the bottom of the scrollable page
            const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 250;
            setIsVisible(isAtBottom);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleClick}
                    className="fixed bottom-8 right-8 z-50 p-4 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 border-[3px] border-slate-900 dark:border-slate-100 shadow-[4px_4px_0px_0px_#1e293b] dark:shadow-[4px_4px_0px_0px_#f1f5f9]"
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={24} />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollButton;


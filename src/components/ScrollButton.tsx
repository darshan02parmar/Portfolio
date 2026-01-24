import { useState, useEffect } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

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
        <button
            onClick={handleClick}
            className="fixed bottom-8 right-8 z-50 p-4 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300"
            aria-label={direction === 'up' ? "Scroll to top" : "Scroll to bottom"}
        >
            {direction === 'up' ? <ArrowUp size={24} /> : <ArrowDown size={24} />}
        </button>
    );
};

export default ScrollButton;

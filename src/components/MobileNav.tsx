import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const menuItems = [
        { label: 'Intro', id: 'hero' },
        { label: 'Experience', id: 'work-experience' },
        { label: 'Projects', id: 'projects' },
        { label: 'Tech Stack', id: 'tech-stack' },
        { label: 'Blog', id: 'blog' },
        { label: 'Contact', id: 'contact' }
    ];

    const handleNavigation = (id: string) => {
        setIsOpen(false);
        if (location.pathname !== '/') {
            navigate(`/#${id}`);
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="lg:hidden">
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-8 left-8 z-50 p-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded-full border-[3px] border-slate-900 dark:border-slate-100 shadow-[4px_4px_0px_0px_#1e293b] dark:shadow-[4px_4px_0px_0px_#f1f5f9] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all duration-200"
                aria-label="Toggle Navigation Menu"
            >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Overlay Navigation Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm"
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: '-100%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: '-100%', opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed bottom-28 left-8 z-40 w-64 max-w-[calc(100vw-4rem)] rounded-[30px] border-[3px] border-slate-900 dark:border-slate-100 bg-white dark:bg-slate-900 p-6 shadow-[8px_8px_0px_0px_#1e293b] dark:shadow-[8px_8px_0px_0px_#f1f5f9]"
                        >
                            <nav className="flex flex-col gap-3">
                                {menuItems.map((item, i) => (
                                    <motion.button
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        key={item.id}
                                        onClick={() => handleNavigation(item.id)}
                                        className="w-full text-left font-heading text-lg py-2.5 px-4 rounded-xl border border-transparent hover:border-slate-900 dark:hover:border-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white"
                                    >
                                        {item.label}
                                    </motion.button>
                                ))}
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}

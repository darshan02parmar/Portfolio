import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Compass, Terminal, Moon, Sun, ArrowRight, Laptop } from 'lucide-react';
import { projects } from '../lib/projects';
import toast from 'react-hot-toast';

interface CommandPaletteProps {
    isOpen: boolean;
    onClose: () => void;
    toggleTheme: () => void;
    theme: 'light' | 'dark';
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
    isOpen,
    onClose,
    toggleTheme,
    theme
}) => {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Dynamic actions list
    const navigationActions = [
        { id: 'work', label: 'Go to Work Experience', icon: <Compass size={18} />, action: () => scrollToSection('work') },
        { id: 'projects', label: 'Go to Selected Projects', icon: <Compass size={18} />, action: () => scrollToSection('projects') },
        { id: 'tech-stack', label: 'Go to Tech Stack', icon: <Compass size={18} />, action: () => scrollToSection('tech-stack') },
        { id: 'contact', label: 'Go to Contact Form', icon: <Compass size={18} />, action: () => scrollToSection('contact') },
    ];

    const themeAction = {
        id: 'toggle-theme',
        label: `Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`,
        icon: theme === 'light' ? <Moon size={18} /> : <Sun size={18} />,
        action: () => {
            toggleTheme();
            toast.success(`Switched to ${theme === 'light' ? 'Dark' : 'Light'} Mode!`);
            onClose();
        }
    };

    const secretAction = {
        id: 'secret-easter-egg',
        label: 'Developer Secrets: Matrix Mode 🟢',
        icon: <Terminal size={18} />,
        action: () => {
            toast.success('Matrix mode activated! Look at your custom cursor and shapes...', {
                icon: '🟢',
                duration: 4000
            });
            onClose();
        }
    };

    const projectActions = projects.map(p => ({
        id: `project-${p.id}`,
        label: `View Project Details: ${p.title}`,
        icon: <Laptop size={18} />,
        action: () => {
            navigate(`/project/${p.id}`);
            onClose();
        }
    }));

    const allActions = [
        ...navigationActions,
        themeAction,
        ...projectActions,
        secretAction
    ];

    // Filtered actions based on search input
    const filteredActions = allActions.filter(action =>
        action.label.toLowerCase().includes(search.toLowerCase())
    );

    const scrollToSection = (id: string) => {
        onClose();
        // Redirect to homepage if we are on project details page
        if (window.location.pathname !== '/') {
            navigate(`/#${id}`);
            // Wait for navigation and then scroll
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    // Auto-focus input when palette opens
    useEffect(() => {
        if (isOpen) {
            requestAnimationFrame(() => {
                setSearch('');
                setSelectedIndex(0);
            });
            setTimeout(() => inputRef.current?.focus(), 100);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Handle keypress navigation
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedIndex(prev => (prev + 1) % Math.max(1, filteredActions.length));
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedIndex(prev => (prev - 1 + filteredActions.length) % Math.max(1, filteredActions.length));
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (filteredActions[selectedIndex]) {
                    filteredActions[selectedIndex].action();
                }
            } else if (e.key === 'Escape') {
                e.preventDefault();
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, filteredActions, selectedIndex, onClose]);

    // Handle clicking outside to close
    const handleOverlayClick = (e: React.MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
                onClick={handleOverlayClick}
            >
                <motion.div
                    ref={containerRef}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="w-full max-w-lg overflow-hidden rounded-[30px] border-[3px] border-slate-900 bg-[#0f172a] text-slate-100 shadow-[8px_8px_0px_0px_#50e0b3] dark:shadow-[8px_8px_0px_0px_#50e0b3]"
                >
                    {/* Search Input */}
                    <div className="flex items-center gap-3 border-b-2 border-slate-800 p-4">
                        <Search className="text-slate-400" size={20} />
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Type a command or search projects..."
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setSelectedIndex(0);
                            }}
                            className="w-full bg-transparent text-lg text-slate-100 placeholder-slate-500 focus:outline-none"
                        />
                        <span className="hidden sm:inline-block rounded border border-slate-700 bg-slate-800 px-1.5 py-0.5 text-xs text-slate-400 font-mono">
                            ESC
                        </span>
                    </div>

                    {/* Results List */}
                    <div className="max-h-[300px] overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
                        {filteredActions.length > 0 ? (
                            filteredActions.map((action, index) => {
                                const active = index === selectedIndex;
                                return (
                                    <div
                                        key={action.id}
                                        onClick={action.action}
                                        onMouseEnter={() => setSelectedIndex(index)}
                                        className={`flex items-center justify-between cursor-none rounded-xl p-3 transition-colors duration-150 ${
                                            active
                                                ? 'bg-[#50e0b3] text-[#0f172a]'
                                                : 'text-slate-300 hover:text-slate-100'
                                        }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className={active ? 'text-[#0f172a]' : 'text-slate-500'}>
                                                {action.icon}
                                            </span>
                                            <span className="font-medium">{action.label}</span>
                                        </div>
                                        {active && <ArrowRight size={18} />}
                                    </div>
                                );
                            })
                        ) : (
                            <div className="p-8 text-center text-slate-500">
                                No commands or projects found matching "{search}"
                            </div>
                        )}
                    </div>

                    {/* Footer Tips */}
                    <div className="flex items-center justify-between border-t-2 border-slate-800 bg-[#0d1323] p-3 text-xs text-slate-400">
                        <span>Tip: Use arrow keys to navigate and Enter to select</span>
                        <div className="flex gap-1.5">
                            <span className="rounded bg-slate-800 px-1.5 py-0.5 font-mono text-[10px]">↑↓ Navigate</span>
                            <span className="rounded bg-slate-800 px-1.5 py-0.5 font-mono text-[10px]">&crarr; Select</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default CommandPalette;

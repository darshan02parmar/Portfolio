'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, CheckCircle2, Circle } from 'lucide-react';

interface AchievementBadgeProps {
    unlockedSecrets: string[];
}

export default function AchievementBadge({ unlockedSecrets }: AchievementBadgeProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    
    const totalSecrets = 5;
    const foundCount = unlockedSecrets.length;

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

    const secretList = [
        { key: 'matrix', label: 'Reality Shift (matrix/neo)', desc: 'Glitch into the matrix falling code' },
        { key: 'secrets', label: 'Diagnostics Console (secrets)', desc: 'Expose bundle statistics drawer' },
        { key: 'theme', label: 'Styling Shift (theme)', desc: 'Trigger global color scheme swap' },
        { key: 'konami', label: 'God Mode (konami code)', desc: 'Fire full screen canvas particle blast' },
        { key: 'darshan', label: 'Identity Console (darshan)', desc: 'Launch terminal WHOAMI stats' }
    ];

    return (
        <AnimatePresence>
            {isVisible && foundCount > 0 && foundCount < totalSecrets && (
                <div 
                    className="fixed bottom-28 right-8 z-[9980] flex flex-col items-end gap-3 select-none pointer-events-auto"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Expanded Tooltip / Checklist */}
                    <AnimatePresence>
                        {isHovered && (
                            <motion.div
                                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 15, scale: 0.95 }}
                                transition={{ type: 'spring', damping: 20, stiffness: 200 }}
                                className="bg-white dark:bg-slate-900 border-[3px] border-slate-900 dark:border-slate-100 p-4 rounded-2xl shadow-[6px_6px_0px_0px_#1e293b] dark:shadow-[6px_6px_0px_0px_#f1f5f9] w-64 font-mono text-[10px] text-slate-800 dark:text-slate-200"
                            >
                                <div className="font-heading font-bold text-xs text-amber-500 mb-3 border-b border-slate-200 dark:border-slate-800 pb-1.5 flex items-center gap-1.5">
                                    <Award size={14} /> UNLOCKED SECRETS ({foundCount}/{totalSecrets})
                                </div>
                                
                                <div className="space-y-2.5">
                                    {secretList.map(sec => {
                                        const isUnlocked = unlockedSecrets.includes(sec.key);
                                        return (
                                            <div key={sec.key} className="flex gap-2 items-start">
                                                {isUnlocked ? (
                                                    <CheckCircle2 size={12} className="text-[#84cc16] shrink-0 mt-0.5" />
                                                ) : (
                                                    <Circle size={12} className="text-slate-300 dark:text-slate-700 shrink-0 mt-0.5" />
                                                )}
                                                <div className={isUnlocked ? 'text-slate-800 dark:text-slate-200 font-bold' : 'text-slate-400 dark:text-slate-500'}>
                                                    <div>{sec.label}</div>
                                                    <div className="text-[8px] text-slate-400 font-normal leading-normal">{sec.desc}</div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Main Floating Badge Button */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={
                            foundCount === totalSecrets 
                            ? { opacity: 1, scale: [1, 1.02, 1], y: 0, boxShadow: ["4px 4px 0px 0px #1e293b", "4px 4px 15px 0px #eab308", "4px 4px 0px 0px #1e293b"] }
                            : { opacity: 1, scale: 1, y: 0 }
                        }
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={
                            foundCount === totalSecrets 
                            ? { repeat: Infinity, duration: 2, ease: "easeInOut" } 
                            : {}
                        }
                        whileHover={{ scale: 1.05, rotate: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-amber-400 border-[3px] border-slate-900 dark:border-slate-100 text-slate-950 font-mono text-xs font-bold px-4 py-2.5 rounded-full flex items-center gap-2 shadow-[4px_4px_0px_0px_#1e293b] dark:shadow-[4px_4px_0px_0px_#f1f5f9] cursor-pointer"
                    >
                        {foundCount === totalSecrets ? (
                            <>
                                <span className="text-sm">✨</span>
                                <span>All secrets discovered!</span>
                            </>
                        ) : (
                            <>
                                <span className="text-sm">🏆</span>
                                <span>{foundCount}/{totalSecrets} Secrets Found</span>
                            </>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

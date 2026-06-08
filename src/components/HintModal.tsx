'use client';

import { motion } from 'framer-motion';
import { X, HelpCircle } from 'lucide-react';

interface HintModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function HintModal({ isOpen, onClose }: HintModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[10010] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm pointer-events-auto select-none">
            {/* Modal Backdrop click */}
            <div className="absolute inset-0" onClick={onClose} />

            <motion.div
                initial={{ opacity: 0, scale: 0.93 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.93 }}
                transition={{ type: 'spring', damping: 20, stiffness: 200 }}
                className="w-full max-w-md bg-white dark:bg-slate-900 border-[4px] border-slate-900 dark:border-slate-100 p-6 rounded-[30px] shadow-[8px_8px_0px_0px_#1e293b] dark:shadow-[8px_8px_0px_0px_#f1f5f9] relative font-mono text-slate-800 dark:text-slate-200 z-10"
            >
                {/* Close corner icon */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-slate-100 hover:bg-rose-500 hover:text-white dark:bg-slate-800 dark:hover:bg-rose-600 p-1.5 rounded-lg border border-slate-350 dark:border-slate-700 transition-colors cursor-pointer"
                >
                    <X size={14} />
                </button>

                <div className="flex items-center gap-2 text-[#84cc16] font-bold text-sm border-b-2 border-slate-200 dark:border-slate-800 pb-3 mb-4">
                    <HelpCircle size={18} />
                    <span>HINT PROTOCOL #001</span>
                </div>

                <p className="text-xs leading-relaxed mb-4 text-slate-500 dark:text-slate-400">
                    There are <span className="font-bold text-slate-800 dark:text-slate-200 underline">5 hidden keyboard secrets</span> in this portfolio. Type them anywhere on your screen.
                </p>

                <div className="space-y-3 bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-850 text-[11px] leading-relaxed">
                    <div className="flex gap-2">
                        <span className="text-[#84cc16] font-bold">01.</span>
                        <div>
                            <span className="font-bold text-slate-750 dark:text-slate-300">Changes reality:</span>
                            <p className="text-slate-500 text-[10px]">Alters the grid. (Hint: <code className="bg-slate-200 dark:bg-slate-900 px-1 rounded text-rose-500">matrix</code> or <code className="bg-slate-200 dark:bg-slate-900 px-1 rounded text-rose-500">neo</code>)</p>
                        </div>
                    </div>
                    <div className="flex gap-2 border-t border-slate-100 dark:border-slate-900 pt-2">
                        <span className="text-blue-400 font-bold">02.</span>
                        <div>
                            <span className="font-bold text-slate-750 dark:text-slate-300">Reveals secrets:</span>
                            <p className="text-slate-500 text-[10px]">Uncovers CPU/RAM bundle scopes. (Hint: <code className="bg-slate-200 dark:bg-slate-900 px-1 rounded text-blue-500">secrets</code>)</p>
                        </div>
                    </div>
                    <div className="flex gap-2 border-t border-slate-100 dark:border-slate-900 pt-2">
                        <span className="text-purple-400 font-bold">03.</span>
                        <div>
                            <span className="font-bold text-slate-750 dark:text-slate-300">Changes appearance:</span>
                            <p className="text-slate-500 text-[10px]">Swaps stylesheet colors. (Hint: <code className="bg-slate-200 dark:bg-slate-900 px-1 rounded text-purple-500">theme</code>)</p>
                        </div>
                    </div>
                    <div className="flex gap-2 border-t border-slate-100 dark:border-slate-900 pt-2">
                        <span className="text-amber-500 font-bold">04.</span>
                        <div>
                            <span className="font-bold text-slate-750 dark:text-slate-300">Unlocks God Mode:</span>
                            <p className="text-slate-500 text-[10px]">Confetti explosion sequence. (Hint: type <code className="bg-slate-200 dark:bg-slate-900 px-1 rounded text-amber-500">konami</code> or use keys <kbd className="bg-slate-200 dark:bg-slate-800 px-1 rounded">↑↑↓↓←→←→BA</kbd>)</p>
                        </div>
                    </div>
                    <div className="flex gap-2 border-t border-slate-100 dark:border-slate-900 pt-2">
                        <span className="text-pink-500 font-bold">05.</span>
                        <div>
                            <span className="font-bold text-slate-750 dark:text-slate-300">Prints developer identity:</span>
                            <p className="text-slate-500 text-[10px]">Launches developer profile terminal. (Hint: <code className="bg-slate-200 dark:bg-slate-900 px-1 rounded text-pink-500">darshan</code>)</p>
                        </div>
                    </div>
                </div>

                <button
                    onClick={onClose}
                    className="w-full mt-6 py-3 border-[3px] border-slate-900 dark:border-slate-100 bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950 font-bold uppercase rounded-xl shadow-[4px_4px_0px_0px_#84cc16] dark:shadow-[4px_4px_0px_0px_#50e0b3] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none cursor-pointer text-center text-xs"
                >
                    Let's go explore!
                </button>
            </motion.div>
        </div>
    );
}

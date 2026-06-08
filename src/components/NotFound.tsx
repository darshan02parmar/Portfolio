'use client';

import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Terminal, AlertTriangle, ArrowRight } from 'lucide-react';

export default function NotFound() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-6 text-slate-900 dark:text-slate-100 font-mono select-none relative overflow-hidden transition-colors duration-300">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 bg-grid-pattern opacity-60 dark:opacity-100 pointer-events-none" />

            {/* Retro scanline CRT simulation */}
            <div className="pointer-events-none absolute inset-0 z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.12)_50%)] bg-[size:100%_4px] opacity-10 dark:opacity-30" />

            {/* Giant Ghost Typography Background */}
            <div className="absolute pointer-events-none select-none font-extrabold text-slate-950 dark:text-white opacity-[0.04] dark:opacity-[0.02] text-[16rem] sm:text-[28rem] z-0 leading-none tracking-tighter">
                404
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="max-w-xl w-full border-[3px] border-slate-900 dark:border-slate-100 p-6 sm:p-10 rounded-2xl bg-white dark:bg-slate-900 shadow-[6px_6px_0px_0px_#1e293b] dark:shadow-[6px_6px_0px_0px_#f1f5f9] relative z-10 flex flex-col gap-6"
            >
                {/* Header Title */}
                <div className="flex items-center gap-3 border-b-2 border-slate-900 dark:border-slate-800 pb-4 mb-2">
                    <Terminal size={24} className="text-slate-900 dark:text-emerald-400" />
                    <span className="text-sm font-bold tracking-widest text-slate-800 dark:text-emerald-400 font-mono">SYSTEM WARNING DRAWER</span>
                </div>

                {/* Main Error */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-lg sm:text-xl">
                        <AlertTriangle size={20} className="shrink-0 animate-bounce" />
                        <span>ERROR_404: SEGMENTATION_FAULT</span>
                    </div>

                    <div className="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <div>&gt; GET {location.pathname}</div>
                        <div className="text-rose-600 dark:text-rose-400">&gt; Status: 404 (Resource Missing)</div>
                        <div>&gt; Reality state: CORRUPTED</div>
                    </div>
                </div>

                {/* Console Log */}
                <div className="bg-slate-50 dark:bg-slate-950 border-2 border-slate-900 dark:border-slate-800 p-4 rounded-xl font-mono text-[10px] sm:text-xs text-slate-700 dark:text-emerald-400 space-y-1">
                    <div>[sys] initialising sector lookup...</div>
                    <div className="text-rose-600 dark:text-rose-400">[warn] address {location.pathname} is outside bounds</div>
                    <div>[sys] stack overflow prevented.</div>
                    <div className="text-amber-600 dark:text-amber-400">[sys] safe route identified at darshan.dev/home</div>
                </div>

                {/* Escape Button Footer */}
                <div className="flex justify-end border-t border-slate-200 dark:border-slate-800 pt-5 mt-2">
                    <button
                        onClick={() => navigate('/', { replace: true })}
                        className="flex items-center gap-2 rounded-full border-[3px] border-slate-900 dark:border-slate-100 bg-[#84cc16] hover:bg-[#84cc16]/90 dark:bg-[#50e0b3] dark:hover:bg-[#50e0b3]/90 text-slate-950 font-mono text-xs font-bold px-6 py-3 shadow-[4px_4px_0px_0px_#1e293b] dark:shadow-[4px_4px_0px_0px_#0f172a] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-pointer"
                    >
                        ESCAPE NOW <ArrowRight size={14} />
                    </button>
                </div>
            </motion.div>
        </div>
    );
}

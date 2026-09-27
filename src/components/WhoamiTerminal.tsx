'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Github, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

interface WhoamiTerminalProps {
    onClose: () => void;
}

export default function WhoamiTerminal({ onClose }: WhoamiTerminalProps) {
    const [typedInput, setTypedInput] = useState('');
    const [showOutputs, setShowOutputs] = useState<string[]>([]);
    const [isDone, setIsDone] = useState(false);

    const fullInput = 'whoami';
    const outputs = [
        'Darshan Parmar',
        'Full Stack Developer',
        'Currently SDE Intern at GetNorthPath',
        "Top 1% Contributor of GSSoC'25",
        'Contributing to open source. because I enjoy figuring out how things work.'
    ];

    useEffect(() => {
        // Step 1: Type out "whoami" letter by letter
        let currentInput = '';
        let charIndex = 0;
        
        const typeInputTimer = setInterval(() => {
            if (charIndex < fullInput.length) {
                currentInput += fullInput[charIndex];
                setTypedInput(currentInput);
                charIndex++;
            } else {
                clearInterval(typeInputTimer);
                
                // Step 2: After a pause, print outputs line by line
                setTimeout(() => {
                    let outputIndex = 0;
                    const printOutputsTimer = setInterval(() => {
                        if (outputIndex < outputs.length) {
                            setShowOutputs(prev => [...prev, outputs[outputIndex]]);
                            outputIndex++;
                        } else {
                            clearInterval(printOutputsTimer);
                            setIsDone(true);
                        }
                    }, 250); // delay between each line output
                }, 400); // pause before printing outputs
            }
        }, 120); // typing speed of "whoami"

        return () => {
            clearInterval(typeInputTimer);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="fixed inset-0 z-[10020] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm pointer-events-auto select-none">
            {/* Backdrop click */}
            <div className="absolute inset-0" onClick={onClose} />

            <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 30 }}
                transition={{ type: 'spring', damping: 22, stiffness: 210 }}
                className="w-full max-w-lg bg-[#030712] border-[4px] border-[#0ea5e9] p-6 rounded-[30px] shadow-[8px_8px_0px_0px_#0ea5e9] relative font-mono text-[#0ea5e9] z-10 overflow-hidden"
            >
                {/* CRT Scanline effect */}
                <div className="pointer-events-none absolute inset-0 bg-scanlines opacity-10 z-20" />
                
                {/* Header */}
                <div className="flex items-center gap-2 font-bold text-sm border-b border-[#0ea5e9]/30 pb-3 mb-5">
                    <Terminal size={18} className="animate-pulse" />
                    <span>DARSHAN@WHOAMI:~</span>
                </div>

                {/* Terminal Content */}
                <div className="space-y-3 min-h-[160px] text-xs">
                    <div className="flex items-center gap-2">
                        <span className="text-lime-400 font-bold">$</span>
                        <span>{typedInput}</span>
                        {!isDone && showOutputs.length === 0 && (
                            <span className="w-2 h-4 bg-lime-400 animate-blink inline-block" />
                        )}
                    </div>

                    {showOutputs.map((line, idx) => (
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            key={idx}
                            className="flex items-baseline gap-2 pl-5 font-mono font-bold text-[#0ea5e9]"
                        >
                            <span className="text-lime-400/70" aria-hidden="true">&gt;</span>
                            <span>{line}</span>
                        </motion.div>
                    ))}

                    {isDone && (
                        <div className="mt-4 flex gap-3 pl-5">
                            <a
                                href="https://github.com/darshan02parmar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-lg border border-[#0ea5e9]/50 bg-slate-950 px-3 py-2 text-[11px] font-bold text-[#0ea5e9] shadow-[2px_2px_0px_0px_#a3e635] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
                            >
                                <Github size={14} />
                                GitHub
                            </a>
                            <Link
                                to="/blog"
                                className="inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-lg border border-[#0ea5e9]/50 bg-slate-950 px-3 py-2 text-[11px] font-bold text-[#0ea5e9] shadow-[2px_2px_0px_0px_#a3e635] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
                            >
                                <BookOpen size={14} />
                                Blog
                            </Link>
                        </div>
                    )}
                </div>

                {/* Exit Controls */}
                <div className="mt-5 pl-5">
                    <button
                        onClick={onClose}
                        className="block w-full rounded-lg border border-lime-400/50 bg-transparent px-4 py-1.5 text-[10px] font-medium uppercase text-lime-400/80 transition-colors hover:border-lime-400 hover:text-lime-400 cursor-pointer"
                    >
                        Close Terminal
                    </button>
                </div>

            </motion.div>
        </div>
    );
}

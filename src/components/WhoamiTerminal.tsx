'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, X } from 'lucide-react';

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
        'Open Source Contributor',
        'GSSoC Contributor',
        'Coffee Powered Human'
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
                
                {/* Corner Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-slate-950 hover:bg-[#0ea5e9] text-[#0ea5e9] hover:text-white p-1.5 rounded-lg border border-[#0ea5e9]/30 transition-colors cursor-pointer z-30"
                >
                    <X size={14} />
                </button>

                {/* Header */}
                <div className="flex items-center gap-2 font-bold text-sm border-b border-[#0ea5e9]/30 pb-3 mb-5">
                    <Terminal size={18} className="animate-pulse" />
                    <span>DARSHAN@WHOAMI:~</span>
                </div>

                {/* Terminal Content */}
                <div className="space-y-3 min-h-[160px] text-xs">
                    <div className="flex items-center gap-2">
                        <span className="text-slate-500 font-bold">$</span>
                        <span>{typedInput}</span>
                        {!isDone && showOutputs.length === 0 && (
                            <span className="w-2 h-4 bg-[#0ea5e9] animate-blink inline-block" />
                        )}
                    </div>

                    {showOutputs.map((line, idx) => (
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            key={idx}
                            className={`pl-5 font-bold ${idx === 0 ? 'text-[#0ea5e9] text-sm font-heading' : 'text-slate-350'}`}
                        >
                            {line}
                        </motion.div>
                    ))}

                    {isDone && (
                        <div className="flex items-center gap-2 mt-4">
                            <span className="text-slate-500 font-bold">$</span>
                            <span className="w-2 h-4 bg-[#0ea5e9] animate-blink inline-block" />
                        </div>
                    )}
                </div>

                {/* Exit Controls */}
                <button
                    onClick={onClose}
                    className="w-full mt-6 py-2.5 border-[3px] border-[#0ea5e9] bg-[#030712] hover:bg-[#0ea5e9] text-[#0ea5e9] hover:text-white font-bold uppercase rounded-xl shadow-[4px_4px_0px_0px_rgba(14,165,233,0.3)] hover:shadow-none transition-all hover:translate-x-[1px] hover:translate-y-[1px] cursor-pointer text-center text-xs"
                >
                    Close Terminal
                </button>

            </motion.div>
        </div>
    );
}

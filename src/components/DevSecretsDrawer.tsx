'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { X, Terminal, Cpu, HardDrive, Monitor, Keyboard, Play } from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface DevSecretsDrawerProps {
    onClose: () => void;
}

export default function DevSecretsDrawer({ onClose }: DevSecretsDrawerProps) {
    const location = useLocation();
    const [currentTime, setCurrentTime] = useState('');
    const [dimensions, setDimensions] = useState({ 
        w: typeof window !== 'undefined' ? window.innerWidth : 0, 
        h: typeof window !== 'undefined' ? window.innerHeight : 0 
    });
    const [cpuLoad, setCpuLoad] = useState(24.5);
    const [terminalLogs, setTerminalLogs] = useState<string[]>([
        'Mounting DevConsole Diagnostic cluster...',
        'System monitoring hooks attached successfully.',
        'Audio Context initial state: SUSPENDED'
    ]);

    useEffect(() => {
        const handleResize = () => {
            setDimensions({ w: window.innerWidth, h: window.innerHeight });
        };
        window.addEventListener('resize', handleResize);

        // Live Clock
        const updateClock = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString());
        };
        updateClock();
        const clockInterval = setInterval(updateClock, 1000);

        // CPU Fluctuations
        const cpuInterval = setInterval(() => {
            setCpuLoad(prev => {
                const diff = (Math.random() - 0.5) * 8;
                const next = prev + diff;
                return Math.max(12, Math.min(88, parseFloat(next.toFixed(1))));
            });
        }, 1500);

        return () => {
            window.removeEventListener('resize', handleResize);
            clearInterval(clockInterval);
            clearInterval(cpuInterval);
        };
    }, []);

    // Web Audio Synthesizer Beeps
    const triggerAudioSynth = (freq = 440, type: OscillatorType = 'square') => {
        try {
            const AudioContext = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
            if (!AudioContext) return;
            
            const ctx = new AudioContext();
            const osc = ctx.createOscillator();
            const gainNode = ctx.createGain();

            osc.type = type;
            osc.frequency.setValueAtTime(freq, ctx.currentTime);

            gainNode.gain.setValueAtTime(0.08, ctx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);

            osc.connect(gainNode);
            gainNode.connect(ctx.destination);

            osc.start();
            osc.stop(ctx.currentTime + 0.3);

            // Append to local log stream
            setTerminalLogs(prev => [
                ...prev.slice(-8),
                `> Executed Synthesizer Beep: Freq ${freq}Hz, Type: ${type.toUpperCase()}`
            ]);
        } catch (err) {
            console.error('Audio synthesizer initiation failed:', err);
        }
    };

    return (
        <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed bottom-0 left-0 right-0 z-[9990] bg-[#070c19] border-t-[4px] border-slate-900 dark:border-slate-100 p-6 sm:p-8 font-mono text-xs text-slate-350 shadow-[0_-12px_40px_rgba(0,0,0,0.6)] select-none pointer-events-auto max-h-[85vh] overflow-y-auto"
        >
            <div className="max-w-6xl mx-auto flex flex-col gap-6">
                
                {/* Header */}
                <div className="flex justify-between items-center border-b-2 border-slate-800 pb-4">
                    <div className="flex items-center gap-2 text-[#50e0b3]">
                        <Terminal size={18} />
                        <span className="font-bold tracking-wider text-sm">DEVELOPER SECRET DIAGNOSTICS drawer v2.0.1</span>
                    </div>
                    <button
                        onClick={onClose}
                        className="rounded bg-slate-900 hover:bg-[#50e0b3] text-slate-400 hover:text-slate-950 p-1.5 transition-colors border border-slate-800 cursor-pointer"
                        aria-label="Close drawer"
                    >
                        <X size={16} />
                    </button>
                </div>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    {/* Column 1: System Specs */}
                    <div className="border border-slate-800 bg-slate-950 p-4 rounded-2xl flex flex-col gap-3">
                        <div className="flex items-center gap-2 text-blue-400 font-bold border-b border-slate-900 pb-2">
                            <Cpu size={14} /> SYSTEM PERFORMANCE
                        </div>
                        <div className="space-y-2.5">
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span>VIRTUAL CPU LOAD</span>
                                    <span className="text-[#50e0b3] font-bold">{cpuLoad}%</span>
                                </div>
                                <div className="w-full bg-slate-900 h-2 rounded overflow-hidden">
                                    <div className="bg-[#50e0b3] h-full transition-all duration-300" style={{ width: `${cpuLoad}%` }}></div>
                                </div>
                            </div>
                            <div className="flex justify-between border-t border-slate-900/60 pt-2">
                                <span className="text-slate-500">MEMORY POOL:</span>
                                <span>3.81 GB / 16.00 GB</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-500">SCREEN SIZE:</span>
                                <span>{dimensions.w}px × {dimensions.h}px</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-500">CLOCK BEACON:</span>
                                <span className="text-[#50e0b3]">{currentTime || '--:--:--'}</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Build Size metrics */}
                    <div className="border border-slate-800 bg-slate-950 p-4 rounded-2xl flex flex-col gap-3">
                        <div className="flex items-center gap-2 text-purple-400 font-bold border-b border-slate-900 pb-2">
                            <HardDrive size={14} /> PRODUCTION ASSETS BUNDLE
                        </div>
                        <div className="space-y-1.5 text-slate-400">
                            <div className="flex justify-between">
                                <span>dist/index.html</span>
                                <span className="text-green-400 font-mono">1.83 kB</span>
                            </div>
                            <div className="flex justify-between">
                                <span>dist/assets/index.js</span>
                                <span className="text-amber-400 font-mono">1,018.76 kB</span>
                            </div>
                            <div className="flex justify-between">
                                <span>dist/assets/index.css</span>
                                <span className="text-green-400 font-mono">92.91 kB</span>
                            </div>
                            <div className="flex justify-between">
                                <span>dist/assets/Tooltip.js</span>
                                <span className="text-green-400 font-mono">46.81 kB</span>
                            </div>
                            <div className="border-t border-slate-900 pt-2 flex justify-between font-bold text-slate-350">
                                <span>TOTAL BUILD FOOTPRINT:</span>
                                <span>1,160.31 kB</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Active Routing info */}
                    <div className="border border-slate-800 bg-slate-950 p-4 rounded-2xl flex flex-col gap-3">
                        <div className="flex items-center gap-2 text-amber-500 font-bold border-b border-slate-900 pb-2">
                            <Monitor size={14} /> SESSION LOGS & CONTEXT
                        </div>
                        <div className="space-y-1.5 text-slate-400">
                            <div className="flex justify-between">
                                <span>ACTIVE PATHNAME:</span>
                                <span className="text-blue-400 truncate max-w-[60%]">{location.pathname}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>DEPLOYED DOMAIN:</span>
                                <span>localhost:3000</span>
                            </div>
                            <div className="flex justify-between">
                                <span>BROWSER ENGINES:</span>
                                <span className="truncate max-w-[60%]">Chrome / Gecko / WebKit</span>
                            </div>
                            <div className="flex justify-between">
                                <span>AOS ANIMATIONS:</span>
                                <span className="text-green-400">ONLINE</span>
                            </div>
                            <div className="flex justify-between">
                                <span>ROUTE CACHE:</span>
                                <span className="text-purple-400">ACTIVE</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Footer Controls & Live Logger */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-slate-800 pt-4">
                    {/* Live Synth Beeps */}
                    <div className="flex flex-col gap-3 bg-slate-950 p-4 rounded-2xl border border-slate-800">
                        <div className="flex items-center gap-1.5 text-sky-400 font-bold">
                            <Keyboard size={14} /> AUDIO SYNTHESIZER BEACON
                        </div>
                        <p className="text-[10px] text-slate-500 leading-normal">
                            Test client-side dynamic audio synthesis. Triggers raw 8-bit oscillator soundwaves via the browser's native Web Audio API.
                        </p>
                        <div className="flex flex-wrap gap-2.5 mt-1">
                            <button
                                onClick={() => triggerAudioSynth(261.63, 'square')} // C4 note
                                className="bg-slate-900 hover:bg-sky-500 border border-slate-800 text-slate-300 hover:text-slate-950 px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all cursor-pointer font-bold text-[10px]"
                            >
                                <Play size={10} /> Synth C4
                            </button>
                            <button
                                onClick={() => triggerAudioSynth(329.63, 'triangle')} // E4 note
                                className="bg-slate-900 hover:bg-sky-500 border border-slate-800 text-slate-300 hover:text-slate-950 px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all cursor-pointer font-bold text-[10px]"
                            >
                                <Play size={10} /> Synth E4
                            </button>
                            <button
                                onClick={() => triggerAudioSynth(392.00, 'sine')} // G4 note
                                className="bg-slate-900 hover:bg-sky-500 border border-slate-800 text-slate-300 hover:text-slate-950 px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all cursor-pointer font-bold text-[10px]"
                            >
                                <Play size={10} /> Synth G4
                            </button>
                            <button
                                onClick={() => triggerAudioSynth(523.25, 'sawtooth')} // C5 note
                                className="bg-slate-900 hover:bg-sky-500 border border-slate-800 text-slate-300 hover:text-slate-950 px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all cursor-pointer font-bold text-[10px]"
                            >
                                <Play size={10} /> Synth C5
                            </button>
                        </div>
                    </div>

                    {/* Console Live logs */}
                    <div className="bg-slate-950 border border-slate-800 p-4 rounded-2xl flex flex-col gap-2 min-h-[110px] justify-between">
                        <div className="text-[#50e0b3] font-bold text-[10px] border-b border-slate-900 pb-1">CONSOLE EVENT LOG STREAM</div>
                        <div className="space-y-1 text-[10px] text-slate-400 select-all font-mono leading-relaxed">
                            {terminalLogs.map((log, idx) => (
                                <div key={idx} className={log.startsWith('>') ? 'text-[#50e0b3]' : ''}>
                                    {log}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Hotkeys cheatsheet */}
                <div className="text-[10px] text-slate-655 flex flex-wrap gap-4 items-center justify-center border-t border-slate-900 pt-3 text-center">
                    <span>HOTKEY CHEATSHEET:</span>
                    <span className="bg-slate-950 border border-slate-900 px-2 py-0.5 rounded text-[#50e0b3]">matrix</span>
                    <span>to trigger digital rain backdrop</span>
                    <span className="bg-slate-950 border border-slate-900 px-2 py-0.5 rounded text-blue-400">secrets</span>
                    <span>to close this diagnostic console</span>
                    <span className="bg-slate-950 border border-slate-900 px-2 py-0.5 rounded text-purple-400">theme</span>
                    <span>to flip stylesheet colors</span>
                </div>

            </div>
        </motion.div>
    );
}

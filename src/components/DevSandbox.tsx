import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye, Edit3, Settings, Play, Sliders, Activity, Info, X } from 'lucide-react';
import toast from 'react-hot-toast';

interface DevSandboxProps {
    isOpen: boolean;
    onClose: () => void;
    unlockedSecretsCount: number;
}

export default function DevSandbox({ isOpen, onClose, unlockedSecretsCount }: DevSandboxProps) {
    const [wireframe, setWireframe] = useState(false);
    const [editable, setEditable] = useState(false);
    const [slowmo, setSlowmo] = useState(false);
    const [explode, setExplode] = useState(false);
    const [hue, setHue] = useState(130); // Base hue is roughly green/lime (130deg)
    const [domCount] = useState(() => typeof document !== 'undefined' ? document.getElementsByTagName('*').length : 0);

    // Inject sandbox CSS overrides when mounted
    useEffect(() => {
        const styleId = 'god-mode-injected-styles';
        let styleTag = document.getElementById(styleId);
        if (!styleTag) {
            styleTag = document.createElement('style');
            styleTag.id = styleId;
            styleTag.innerHTML = `
                /* Wireframe blueprint mode */
                .god-mode-wireframe * {
                    outline: 1px dashed rgba(16, 185, 129, 0.6) !important;
                    outline-offset: -1px;
                }
                .god-mode-wireframe img, .god-mode-wireframe svg {
                    filter: hue-rotate(calc(var(--god-mode-hue-rotate) * -1deg)) brightness(0.95) contrast(1.1) !important;
                }
                
                /* Slow motion transitions */
                .god-mode-slowmo * {
                    transition-duration: 1.5s !important;
                    animation-duration: 5s !important;
                }
                
                /* Explode mode animation */
                .god-mode-exploded {
                    pointer-events: none !important;
                    animation: explode-shatter-anim 0.5s cubic-bezier(0.1, 0.8, 0.3, 1) forwards !important;
                }
                @keyframes explode-shatter-anim {
                    0% {
                        transform: scale(1) rotate(0deg);
                        filter: blur(0px) brightness(1);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(0.15) translate(var(--explode-x, 0px), var(--explode-y, 0px)) rotate(45deg);
                        filter: blur(12px) brightness(2.5) grayscale(1);
                        opacity: 0;
                        visibility: hidden;
                    }
                }

                /* Revert hue shifts for image elements to preserve realistic photo colors */
                html[style*="--god-mode-hue-rotate"] img, 
                html[style*="--god-mode-hue-rotate"] video,
                html[style*="--god-mode-hue-rotate"] iframe,
                html[style*="--god-mode-hue-rotate"] .images,
                html[style*="--god-mode-hue-rotate"] [style*="background-image"] {
                    filter: hue-rotate(calc(var(--god-mode-hue-rotate) * -1deg)) !important;
                }
            `;
            document.head.appendChild(styleTag);
        }
        return () => {
            const existing = document.getElementById(styleId);
            if (existing) existing.remove();
        };
    }, []);

    // Toggle Wireframe Mode
    useEffect(() => {
        const root = document.documentElement;
        if (wireframe) {
            root.classList.add('god-mode-wireframe');
            toast.success('🛠️ Wireframe Blueprint Mode Enabled');
        } else {
            root.classList.remove('god-mode-wireframe');
        }
        return () => root.classList.remove('god-mode-wireframe');
    }, [wireframe]);

    // Toggle Editable Mode
    useEffect(() => {
        if (editable) {
            document.designMode = 'on';
            toast('✏️ Page Editor Active! Click any text to modify it.', {
                icon: '📝',
                style: { fontFamily: 'monospace', fontSize: '11px', fontWeight: 'bold' }
            });
        } else {
            document.designMode = 'off';
        }
        return () => {
            document.designMode = 'off';
        };
    }, [editable]);

    // Toggle Slow Motion Mode
    useEffect(() => {
        const root = document.documentElement;
        if (slowmo) {
            root.classList.add('god-mode-slowmo');
            toast.success('⏳ Slow-Motion Transitions Active');
        } else {
            root.classList.remove('god-mode-slowmo');
        }
        return () => root.classList.remove('god-mode-slowmo');
    }, [slowmo]);

    // Handle click explosion when Explode is active
    useEffect(() => {
        if (!explode) return;

        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Ignore fixed elements, buttons, links, inputs, and structure elements
            if (
                target.closest('.fixed') || 
                target.closest('button') || 
                target.closest('a') || 
                target.closest('input') || 
                target.closest('textarea') ||
                target.tagName === 'BODY' ||
                target.tagName === 'HTML'
            ) {
                return;
            }

            e.preventDefault();
            e.stopPropagation();

            const randomX = (Math.random() - 0.5) * 500;
            const randomY = (Math.random() - 0.5) * 500 - 150; // biased upwards
            target.style.setProperty('--explode-x', `${randomX}px`);
            target.style.setProperty('--explode-y', `${randomY}px`);
            target.classList.add('god-mode-exploded');

            // Play 8-bit retro sound
            try {
                const AudioContext = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
                if (AudioContext) {
                    const ctx = new AudioContext();
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.type = 'sawtooth';
                    osc.frequency.setValueAtTime(180, ctx.currentTime);
                    osc.frequency.exponentialRampToValueAtTime(10, ctx.currentTime + 0.25);
                    gain.gain.setValueAtTime(0.04, ctx.currentTime);
                    gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.25);
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.start();
                    osc.stop(ctx.currentTime + 0.3);
                }
            } catch (err) {
                console.error(err);
            }

            toast('💥 BOOM!', {
                duration: 800,
                style: { fontFamily: 'monospace', fontSize: '9px', fontWeight: 'bold' }
            });
        };

        window.addEventListener('click', handleClick, true); // Use capture phase
        return () => {
            window.removeEventListener('click', handleClick, true);
        };
    }, [explode]);

    // Clean up exploded elements when toggled off
    useEffect(() => {
        if (!explode) {
            const elements = document.querySelectorAll('.god-mode-exploded');
            elements.forEach((el) => {
                const htmlEl = el as HTMLElement;
                htmlEl.classList.remove('god-mode-exploded');
                htmlEl.style.removeProperty('--explode-x');
                htmlEl.style.removeProperty('--explode-y');
            });
        }
    }, [explode]);

    // Clean up exploded elements on unmount
    useEffect(() => {
        return () => {
            const elements = document.querySelectorAll('.god-mode-exploded');
            elements.forEach((el) => {
                const htmlEl = el as HTMLElement;
                htmlEl.classList.remove('god-mode-exploded');
                htmlEl.style.removeProperty('--explode-x');
                htmlEl.style.removeProperty('--explode-y');
            });
        };
    }, []);

    // Update Theme Accent Color Hue
    useEffect(() => {
        const root = document.documentElement;
        const rotation = hue - 130; // 130 is the native green hue
        root.style.setProperty('--god-mode-hue-rotate', rotation.toString());
        root.style.filter = `hue-rotate(${rotation}deg)`;

        return () => {
            root.style.removeProperty('--god-mode-hue-rotate');
            root.style.filter = '';
        };
    }, [hue]);

    if (!isOpen) return null;

    return (
        <motion.div
            drag
            dragMomentum={false}
            initial={{ opacity: 0, scale: 0.9, x: 20, y: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed bottom-28 left-8 z-[9990] w-80 bg-slate-950 border-[3px] border-[#eab308] p-5 rounded-2xl shadow-[6px_6px_0px_0px_#eab308] font-mono text-[11px] text-white cursor-move select-none"
        >
            {/* Header */}
            <div className="flex justify-between items-center border-b border-[#eab308]/45 pb-3 mb-4">
                <div className="flex items-center gap-2 text-[#eab308] font-bold text-xs">
                    <Settings className="animate-spin duration-[4000ms] h-4 w-4" />
                    <span>DEV GOD MODE SANDBOX</span>
                </div>
                <button
                    onClick={onClose}
                    className="p-1 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md border border-slate-700 transition-colors cursor-pointer"
                >
                    <X size={12} />
                </button>
            </div>

            {/* Diagnostic Stats */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 mb-4 flex flex-col gap-1.5 text-slate-400">
                <div className="flex justify-between items-center text-[10px]">
                    <span className="flex items-center gap-1"><Activity size={10} /> DOM Elements:</span>
                    <span className="text-[#eab308] font-bold">{domCount}</span>
                </div>
                <div className="flex justify-between items-center text-[10px]">
                    <span className="flex items-center gap-1"><Info size={10} /> Viewport Size:</span>
                    <span className="text-[#eab308] font-bold">{window.innerWidth} x {window.innerHeight}</span>
                </div>
                <div className="flex justify-between items-center text-[10px]">
                    <span className="flex items-center gap-1">🏆 Secrets Found:</span>
                    <span className="text-amber-400 font-bold">{unlockedSecretsCount}/5</span>
                </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col gap-3">
                {/* Wireframe Mode Toggle */}
                <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-slate-300">
                        <Eye size={12} className="text-[#38bdf8]" /> Wireframe Blueprint
                    </span>
                    <button
                        onClick={() => setWireframe(!wireframe)}
                        className={`px-3 py-1 rounded-md border-2 font-bold text-[9px] transition-all cursor-pointer ${
                            wireframe
                                ? 'bg-[#eab308] text-slate-950 border-[#eab308] shadow-[2px_2px_0px_0px_#1e293b] translate-x-[-1px] translate-y-[-1px]'
                                : 'bg-slate-800 text-slate-400 border-slate-700'
                        }`}
                    >
                        {wireframe ? 'ACTIVE' : 'OFF'}
                    </button>
                </div>

                {/* Content Editor Toggle */}
                <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-slate-300">
                        <Edit3 size={12} className="text-[#a855f7]" /> Page Editor (designMode)
                    </span>
                    <button
                        onClick={() => setEditable(!editable)}
                        className={`px-3 py-1 rounded-md border-2 font-bold text-[9px] transition-all cursor-pointer ${
                            editable
                                ? 'bg-[#eab308] text-slate-950 border-[#eab308] shadow-[2px_2px_0px_0px_#1e293b] translate-x-[-1px] translate-y-[-1px]'
                                : 'bg-slate-800 text-slate-400 border-slate-700'
                        }`}
                    >
                        {editable ? 'ACTIVE' : 'OFF'}
                    </button>
                </div>

                {/* Slow Mo Toggle */}
                <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-slate-300">
                        <Play size={12} className="text-[#10b981]" /> Slow Motion (0.2x)
                    </span>
                    <button
                        onClick={() => setSlowmo(!slowmo)}
                        className={`px-3 py-1 rounded-md border-2 font-bold text-[9px] transition-all cursor-pointer ${
                            slowmo
                                ? 'bg-[#eab308] text-slate-950 border-[#eab308] shadow-[2px_2px_0px_0px_#1e293b] translate-x-[-1px] translate-y-[-1px]'
                                : 'bg-slate-800 text-slate-400 border-slate-700'
                        }`}
                    >
                        {slowmo ? 'ACTIVE' : 'OFF'}
                    </button>
                </div>

                {/* Click to Explode Toggle */}
                <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-slate-300 font-bold text-rose-400 animate-pulse">
                        <Sliders size={12} className="text-[#f43f5e]" /> Click to Explode Mode
                    </span>
                    <button
                        onClick={() => setExplode(!explode)}
                        className={`px-3 py-1 rounded-md border-2 font-bold text-[9px] transition-all cursor-pointer ${
                            explode
                                ? 'bg-[#eab308] text-slate-950 border-[#eab308] shadow-[2px_2px_0px_0px_#1e293b] translate-x-[-1px] translate-y-[-1px]'
                                : 'bg-slate-800 text-slate-400 border-slate-700'
                        }`}
                    >
                        {explode ? 'ACTIVE' : 'OFF'}
                    </button>
                </div>

                {/* Hue Customizer Slider */}
                <div className="mt-2 flex flex-col gap-1.5">
                    <div className="flex justify-between items-center text-slate-300">
                        <span>🎨 Accent Color Hue</span>
                        <span className="text-[#eab308] font-bold">{hue}°</span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="360"
                        value={hue}
                        onChange={(e) => setHue(parseInt(e.target.value))}
                        className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#eab308]"
                    />
                </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-[9px] text-slate-500 text-center">
                💡 Hint: Drag me anywhere on the viewport!
            </div>
        </motion.div>
    );
}


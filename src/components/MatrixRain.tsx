'use client';

import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

interface MatrixRainProps {
    onClose: () => void;
    isNeoMode?: boolean;
}

export default function MatrixRain({ onClose, isNeoMode = false }: MatrixRainProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [typingStep, setTypingStep] = useState<'wake' | 'pause1' | 'has_you' | 'pause2' | 'rain'>(
        isNeoMode ? 'wake' : 'rain'
    );
    const [typedText, setTypedText] = useState('');

    // Typewriter effect for intro text
    useEffect(() => {
        if (!isNeoMode || typingStep === 'rain') return;

        let activeText = '';
        let targetText = '';
        let timer: ReturnType<typeof setTimeout>;

        if (typingStep === 'wake') {
            targetText = 'Wake up, Darshan...';
            let idx = 0;
            const type = () => {
                if (idx < targetText.length) {
                    activeText += targetText[idx];
                    setTypedText(activeText);
                    idx++;
                    timer = setTimeout(type, 120);
                } else {
                    timer = setTimeout(() => {
                        setTypingStep('pause1');
                        setTypedText('');
                    }, 1200);
                }
            };
            timer = setTimeout(type, 300);
        } else if (typingStep === 'pause1') {
            timer = setTimeout(() => {
                setTypingStep('has_you');
            }, 600);
        } else if (typingStep === 'has_you') {
            targetText = 'The Matrix has you...';
            let idx = 0;
            const type = () => {
                if (idx < targetText.length) {
                    activeText += targetText[idx];
                    setTypedText(activeText);
                    idx++;
                    timer = setTimeout(type, 120);
                } else {
                    timer = setTimeout(() => {
                        setTypingStep('pause2');
                        setTypedText('');
                    }, 1200);
                }
            };
            timer = setTimeout(type, 300);
        } else if (typingStep === 'pause2') {
            timer = setTimeout(() => {
                setTypingStep('rain');
            }, 600);
        }

        return () => clearTimeout(timer);
    }, [typingStep, isNeoMode]);

    // Canvas matrix rain drawing
    useEffect(() => {
        if (typingStep !== 'rain') return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        const alphabet = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const fontSize = 16;
        const columns = Math.floor(width / fontSize) + 1;

        const rainDrops: number[] = Array(columns).fill(1).map(() => Math.floor(Math.random() * -100));

        let animationId: number;
        let lastTime = 0;
        const interval = 33; // ~30 FPS

        const draw = (timestamp: number) => {
            animationId = requestAnimationFrame(draw);

            if (timestamp - lastTime < interval) return;
            lastTime = timestamp;

            ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = '#10b981';
            ctx.font = `bold ${fontSize}px monospace`;

            for (let i = 0; i < rainDrops.length; i++) {
                const char = alphabet[Math.floor(Math.random() * alphabet.length)];
                const x = i * fontSize;
                const y = rainDrops[i] * fontSize;

                if (Math.random() > 0.98) {
                    ctx.fillStyle = '#ffffff';
                } else if (Math.random() > 0.9) {
                    ctx.fillStyle = '#34d399';
                } else {
                    ctx.fillStyle = '#10b981';
                }

                ctx.fillText(char, x, y);

                if (y > height && Math.random() > 0.975) {
                    rainDrops[i] = 0;
                }

                rainDrops[i]++;
            }
        };

        animationId = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
        };
    }, [typingStep]);

    return (
        <div className="fixed inset-0 z-[9999] bg-black select-none pointer-events-auto overflow-hidden">
            {typingStep === 'rain' ? (
                <>
                    <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
                    
                    {/* Control Panel */}
                    <div className="absolute top-8 left-8 right-8 z-[10000] flex justify-between items-center pointer-events-none">
                        <div className="bg-black/80 border border-[#10b981]/35 px-6 py-2.5 rounded-xl text-xs font-mono font-bold text-[#10b981] tracking-widest backdrop-blur shadow-[0_0_15px_rgba(16,185,129,0.15)] flex items-center gap-2">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                            </span>
                            MATRIX MODE INJECTED
                        </div>
                        
                        <button
                            onClick={onClose}
                            className="pointer-events-auto flex items-center gap-1.5 rounded-full border-[3px] border-[#10b981] bg-black hover:bg-[#10b981] text-[#10b981] hover:text-black px-5 py-2.5 font-mono text-sm font-bold shadow-[4px_4px_0px_0px_#047857] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none cursor-pointer"
                        >
                            <X size={16} /> ESCAPE
                        </button>
                    </div>
                </>
            ) : (
                /* Typewriter overlay screen */
                <div className="absolute inset-0 flex items-center pl-12 sm:pl-24 font-mono text-xl sm:text-3xl text-[#10b981] bg-black">
                    <div className="flex items-center gap-1">
                        <span>{typedText}</span>
                        <span className="w-3.5 h-6 sm:w-5 sm:h-8 bg-[#10b981] animate-blink inline-block" />
                    </div>
                </div>
            )}
        </div>
    );
}

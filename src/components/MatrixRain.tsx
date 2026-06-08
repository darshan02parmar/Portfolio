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
    const [exitText, setExitText] = useState('');
    const [isExiting, setIsExiting] = useState(false);

    // Escape Handler with Typewriter Sequence
    const handleExit = () => {
        if (isExiting) return;
        setIsExiting(true);

        let activeText = '';
        const targetText = 'Disconnecting...';
        let idx = 0;

        const typeDisconnecting = () => {
            if (idx < targetText.length) {
                activeText += targetText[idx];
                setExitText(activeText);
                idx++;
                setTimeout(typeDisconnecting, 70);
            } else {
                setTimeout(() => {
                    activeText += '\nReality restored.';
                    setExitText(activeText);

                    setTimeout(() => {
                        onClose();
                    }, 1200);
                }, 500);
            }
        };

        setTimeout(typeDisconnecting, 150);
    };

    // Capture Escape key to trigger custom exit animation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                e.preventDefault();
                e.stopPropagation();
                handleExit();
            }
        };

        window.addEventListener('keydown', handleKeyDown, true);
        return () => window.removeEventListener('keydown', handleKeyDown, true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isExiting]);

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

    // Canvas matrix rain drawing + mouse distortion
    useEffect(() => {
        if (typingStep !== 'rain' || isExiting) return;

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

        // Track mouse coordinates
        const mouse = { x: -1000, y: -1000 };
        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };
        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                mouse.x = e.touches[0].clientX;
                mouse.y = e.touches[0].clientY;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('touchmove', handleTouchMove);

        const alphabet = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const fontSize = 16;
        const columns = Math.floor(width / fontSize) + 1;
        const trailLength = 22;

        // Dynamic column states
        const yPositions: number[] = Array(columns).fill(0).map(() => Math.random() * -100);
        const speeds: number[] = Array(columns).fill(0).map(() => Math.random() * 0.4 + 0.4);

        // Stable pseudorandom characters mapping
        const getChar = (col: number, row: number, timestamp: number) => {
            const timeSeed = Math.floor(timestamp / 300);
            const seed = Math.abs(col * 59 + row * 17 + timeSeed) % alphabet.length;
            return alphabet[seed];
        };

        let animationId: number;
        let lastTime = 0;
        const interval = 16; // ~60 FPS

        const draw = (timestamp: number) => {
            animationId = requestAnimationFrame(draw);

            if (timestamp - lastTime < interval) return;
            lastTime = timestamp;

            // Clear screen completely to allow custom trail drawing and prevent ghost static artifacts
            ctx.fillStyle = 'rgba(0, 0, 0, 1)';
            ctx.fillRect(0, 0, width, height);

            for (let i = 0; i < yPositions.length; i++) {
                // Advance head position smoothly
                yPositions[i] += speeds[i];

                for (let j = 0; j < trailLength; j++) {
                    const yIndex = Math.floor(yPositions[i]) - j;
                    if (yIndex < 0) continue;

                    const x = i * fontSize;
                    const y = yIndex * fontSize;

                    // Skip drawing if outside screen bounds
                    if (y > height + fontSize) continue;

                    // Distance to mouse pointer
                    const dx = x - mouse.x;
                    const dy = y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const radius = 160;

                    let drawX = x;
                    let drawY = y;
                    let color = '#10b981';
                    let font = `bold ${fontSize}px monospace`;
                    let opacity = 1 - j / trailLength;
                    if (opacity < 0) opacity = 0;

                    // Mouse Field Distortion: Bend, Repel, Brighten
                    if (dist < radius) {
                        const force = (radius - dist) / radius; // 0 (outer edge) to 1 (cursor center)

                        // 1. Repel: Push away from cursor
                        const angle = Math.atan2(dy, dx);
                        const pushDist = force * 35; // Maximum repel distance in px
                        drawX += Math.cos(angle) * pushDist;
                        drawY += Math.sin(angle) * pushDist;

                        // 2. Bend: Fluid wave/shear offset based on y-pos and timestamp
                        drawX += Math.sin(y / 15 + timestamp / 120) * 12 * force;
                        drawY += Math.cos(x / 15 + timestamp / 120) * 8 * force;

                        // 3. Brighten: Color morphing from matrix green into cyan/white neon glows
                        if (force > 0.65) {
                            color = '#ffffff'; // White hot center
                            ctx.shadowColor = '#00f5ff';
                            ctx.shadowBlur = 12;
                        } else {
                            color = '#38bdf8'; // Glowing neon cyan
                            ctx.shadowColor = '#38bdf8';
                            ctx.shadowBlur = 8;
                        }

                        font = `bold ${fontSize * (1 + force * 0.3)}px monospace`;
                        opacity = 1.0;
                    } else {
                        // Standard trail color profiles
                        ctx.shadowBlur = 0; // Performance optimization: disable shadow for outer cells

                        if (j === 0) {
                            color = '#ffffff'; // White lead character
                        } else if (j < 3) {
                            color = '#34d399'; // Bright green transition
                        } else {
                            color = '#10b981'; // Classic dim green trail
                        }
                    }

                    ctx.fillStyle = color;
                    ctx.globalAlpha = opacity;
                    ctx.font = font;

                    const char = getChar(i, yIndex, timestamp);
                    ctx.fillText(char, drawX, drawY);

                    // Reset context values for subsequent drawings
                    ctx.globalAlpha = 1.0;
                    ctx.shadowBlur = 0;
                }

                // Recycle column if top of trail falls off screen
                const topOfTrailY = (Math.floor(yPositions[i]) - trailLength) * fontSize;
                if (topOfTrailY > height) {
                    yPositions[i] = -trailLength;
                    speeds[i] = Math.random() * 0.4 + 0.4;
                }
            }
        };

        animationId = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('touchmove', handleTouchMove);
            cancelAnimationFrame(animationId);
        };
    }, [typingStep, isExiting]);

    return (
        <div className="fixed inset-0 z-[9999] bg-black select-none pointer-events-auto overflow-hidden">
            {isExiting ? (
                /* Typewriter overlay screen for exit */
                <div className="absolute inset-0 flex items-center pl-12 sm:pl-24 font-mono text-xl sm:text-3xl text-[#10b981] bg-black z-[10001]">
                    <div className="flex items-center gap-1">
                        <span className="whitespace-pre-line">{exitText}</span>
                        <span className="w-3.5 h-6 sm:w-5 sm:h-8 bg-[#10b981] animate-blink inline-block" />
                    </div>
                </div>
            ) : typingStep === 'rain' ? (
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
                            onClick={handleExit}
                            className="pointer-events-auto flex items-center gap-1.5 rounded-full border-[3px] border-[#10b981] bg-black hover:bg-[#10b981] text-[#10b981] hover:text-black px-5 py-2.5 font-mono text-sm font-bold shadow-[4px_4px_0px_0px_#047857] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none cursor-pointer"
                        >
                            <X size={16} /> ESCAPE
                        </button>
                    </div>
                </>
            ) : (
                /* Typewriter overlay screen for intro */
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


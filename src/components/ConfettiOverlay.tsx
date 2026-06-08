'use client';

import { useEffect, useRef } from 'react';

interface ConfettiOverlayProps {
    onComplete: () => void;
}

interface Particle {
    x: number;
    y: number;
    size: number;
    color: string;
    speedX: number;
    speedY: number;
    rotation: number;
    rotationSpeed: number;
    opacity: number;
    fadeSpeed: number;
}

export default function ConfettiOverlay({ onComplete }: ConfettiOverlayProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
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

        const colors = [
            '#eab308', // Gold
            '#ec4899', // Pink
            '#3b82f6', // Blue
            '#10b981', // Lime
            '#a855f7', // Purple
            '#f97316'  // Orange
        ];

        const particles: Particle[] = [];
        
        // Spawn bursts from multiple positions (left, right, bottom center)
        const spawnPositions = [
            { x: width * 0.2, y: height * 0.8 },
            { x: width * 0.8, y: height * 0.8 },
            { x: width * 0.5, y: height * 0.5 }
        ];

        spawnPositions.forEach(pos => {
            for (let i = 0; i < 60; i++) {
                const angle = Math.random() * Math.PI * 2;
                const speed = 4 + Math.random() * 10;
                particles.push({
                    x: pos.x,
                    y: pos.y,
                    size: 4 + Math.random() * 8,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    speedX: Math.cos(angle) * speed,
                    speedY: Math.sin(angle) * speed - (3 + Math.random() * 5), // boost upwards
                    rotation: Math.random() * 360,
                    rotationSpeed: -4 + Math.random() * 8,
                    opacity: 1,
                    fadeSpeed: 0.008 + Math.random() * 0.012
                });
            }
        });

        let animationId: number;

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            let activeParticles = 0;

            particles.forEach(p => {
                if (p.opacity <= 0) return;
                activeParticles++;

                // Apply gravity & drag
                p.speedY += 0.22; // gravity
                p.speedX *= 0.985; // friction
                p.speedY *= 0.985;

                // Move
                p.x += p.speedX;
                p.y += p.speedY;
                p.rotation += p.rotationSpeed;
                p.opacity -= p.fadeSpeed;

                // Draw
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate((p.rotation * Math.PI) / 180);
                ctx.globalAlpha = Math.max(0, p.opacity);
                ctx.fillStyle = p.color;

                // Draw square/rectangle confetti shapes
                ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
                ctx.restore();
            });

            if (activeParticles > 0) {
                animationId = requestAnimationFrame(animate);
            } else {
                onComplete();
            }
        };

        animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[10030] w-screen h-screen pointer-events-none block"
        />
    );
}

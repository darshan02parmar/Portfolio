'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import AOSComponent from '@/lib/aos';

const frontend = [
    { path: 'next.svg', name: 'Next.js' },
    { path: 'ts.svg', name: 'TypeScript' },
    { path: 'js.svg', name: 'JavaScript' },
    { path: 'react.svg', name: 'React' },
    { path: 'react_query.svg', name: 'React Query' },
    { path: 'tailwindcss.svg', name: 'Tailwind CSS' },
    { path: 'html.svg', name: 'HTML' },
    { path: 'css.svg', name: 'CSS' },
];

const backend = [
    { path: 'workers.svg', name: 'Cloudflare Workers' },
    { path: 'node.svg', name: 'Node.js' },
    { path: 'express.svg', name: 'Express.js' },
    { path: 'mongodb.svg', name: 'MongoDB' },
    { path: 'sqlite.svg', name: 'SQLite' },
    { path: 'postman.svg', name: 'Postman' },
];

const misc = [
    { path: 'vercel.svg', name: 'Vercel' },
    { path: 'cloudflare.svg', name: 'Cloudflare' },
    { path: 'linux.svg', name: 'Linux' },
    { path: 'git-light.svg', name: 'Git' },
    { path: 'github.svg', name: 'GitHub' },
    { path: 'figma.svg', name: 'Figma' },
];

const allSkills = [...frontend, ...backend, ...misc];

export default function TechStack() {
    const [isSandbox, setIsSandbox] = useState(false);
    const constraintsRef = useRef<HTMLDivElement>(null);

    return (
        <AOSComponent>
            <section
                id="tech-stack"
                className="mt-32 flex max-w-[630px] flex-col gap-6 p-6 pb-0 text-slate-900 dark:text-slate-100 relative z-10"
            >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
                    <h3
                        className="tech-stack-title font-heading text-4xl"
                        data-aos="fade-down"
                    >
                        Tech Stack <span className="hidden md:inline">/ Tools</span>
                    </h3>
                    
                    {/* Toggle Buttons */}
                    <div className="flex rounded-full border-[3px] border-slate-900 dark:border-slate-100 overflow-hidden text-xs font-mono font-bold bg-white dark:bg-slate-950 p-0.5 shadow-[4px_4px_0px_0px_#1e293b] dark:shadow-[4px_4px_0px_0px_#f1f5f9] select-none shrink-0 self-start sm:self-auto">
                        <button
                            onClick={() => setIsSandbox(false)}
                            className={`px-3 py-1.5 rounded-full transition-colors ${
                                !isSandbox 
                                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950' 
                                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-50'
                            }`}
                        >
                            List View
                        </button>
                        <button
                            onClick={() => setIsSandbox(true)}
                            className={`px-3 py-1.5 rounded-full transition-colors ${
                                isSandbox 
                                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950' 
                                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-50'
                            }`}
                        >
                            Physics Sandbox 🛝
                        </button>
                    </div>
                </div>

                {!isSandbox ? (
                    <div className="stack-wrapper flex grid-cols-[2.2fr_0.9fr] grid-rows-[1fr_1fr] flex-col gap-6 md:grid">
                        <div
                            data-aos="fade-right"
                            className="col-start-1 col-end-2 row-start-1 row-end-2"
                        >
                            <div className="wrapper rounded-[30px] border-[3px] border-slate-900 dark:border-slate-100 p-6 shadow-[4px_4px_0px_0px_#1e293b] dark:shadow-[4px_4px_0px_0px_#f1f5f9] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none bg-white/10 dark:bg-slate-900">
                                <h3 className="vertical mb-4 font-heading text-3xl">Frontend</h3>

                                <div className="flex max-w-80 flex-wrap gap-4">
                                    {frontend.map((elm) => (
                                        <span
                                            className="hint--top hint--rounded relative group"
                                            key={elm.path}
                                        >
                                            <img
                                                height={45}
                                                width={45}
                                                alt={elm.name}
                                                src={`/skillicons/${elm.path}`}
                                                className="transition-transform group-hover:scale-110"
                                            />
                                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 px-2 py-1 bg-slate-800 text-white text-xs rounded transition-all group-hover:scale-100 z-50 whitespace-nowrap shadow-lg">
                                                {elm.name}
                                            </span>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div
                            data-aos="fade-right"
                            className="col-start-1 col-end-2 row-start-2 row-end-3"
                        >
                            <div className="wrapper rounded-[30px] border-[3px] border-slate-900 dark:border-slate-100 p-6 shadow-[4px_4px_0px_0px_#1e293b] dark:shadow-[4px_4px_0px_0px_#f1f5f9] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none bg-white/10 dark:bg-slate-900">
                                <h3 className="vertical mb-4 font-heading text-3xl">Backend</h3>

                                <div className="flex max-w-80 flex-wrap gap-4">
                                    {backend.map((elm) => (
                                        <span
                                            className="hint--top hint--rounded relative group"
                                            key={elm.path}
                                        >
                                            <img
                                                height={45}
                                                width={45}
                                                alt={elm.name}
                                                src={`/skillicons/${elm.path}`}
                                                className="transition-transform group-hover:scale-110"
                                            />
                                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 px-2 py-1 bg-slate-800 text-white text-xs rounded transition-all group-hover:scale-100 z-50 whitespace-nowrap shadow-lg">
                                                {elm.name}
                                            </span>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div
                            data-aos="fade-up"
                            className="col-start-2 col-end-3 row-start-1 row-end-3 md:h-full"
                        >
                            <div className="wrapper rounded-[30px] border-[3px] border-slate-900 dark:border-slate-100 p-6 shadow-[4px_4px_0px_0px_#1e293b] dark:shadow-[4px_4px_0px_0px_#f1f5f9] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none md:h-full bg-white/10 dark:bg-slate-900">
                                <h3 className="vertical mb-4 font-heading text-3xl">Misc.</h3>

                                <div className="flex max-w-80 flex-wrap gap-4">
                                    {misc.map((elm) => (
                                        <span
                                            className="hint--top hint--rounded relative group"
                                            key={elm.path}
                                        >
                                            <img
                                                height={45}
                                                width={45}
                                                alt={elm.name}
                                                src={`/skillicons/${elm.path}`}
                                                className="transition-transform group-hover:scale-110"
                                            />
                                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 px-2 py-1 bg-slate-800 text-white text-xs rounded transition-all group-hover:scale-100 z-50 whitespace-nowrap shadow-lg">
                                                {elm.name}
                                            </span>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    /* Physics Sandbox Area */
                    <div 
                        ref={constraintsRef}
                        className="w-full h-[360px] sm:h-[420px] rounded-[30px] border-[3px] border-slate-900 dark:border-slate-100 p-6 shadow-[6px_6px_0px_0px_#1e293b] dark:shadow-[6px_6px_0px_0px_#f1f5f9] bg-white/10 dark:bg-slate-900/40 backdrop-blur-md overflow-hidden relative select-none"
                    >
                        {/* Background Instructions */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-25 dark:opacity-15 text-center px-4">
                            <span className="text-3xl sm:text-4xl font-heading mb-2">🛝 PHYSICS SANDBOX</span>
                            <span className="text-xs font-mono font-bold uppercase tracking-wider">Drag, throw, or hover over the technology capsules</span>
                        </div>

                        {/* Draggable Capsules */}
                        {allSkills.map((elm, index) => {
                            const colCount = 4;
                            const col = index % colCount;
                            const row = Math.floor(index / colCount);
                            
                            const startLeft = 8 + col * 23;
                            const startTop = 10 + row * 17;

                            return (
                                <motion.div
                                    key={elm.path}
                                    drag
                                    dragConstraints={constraintsRef}
                                    dragElastic={0.4}
                                    dragTransition={{ bounceStiffness: 400, bounceDamping: 18 }}
                                    whileHover={{ scale: 1.1, rotate: 2 }}
                                    whileDrag={{ scale: 1.15, cursor: 'grabbing', zIndex: 50 }}
                                    animate={{
                                        x: [0, (index % 2 === 0 ? 1 : -1) * (8 + (index % 12)), (index % 2 === 0 ? -1 : 1) * (4 + (index % 10)), 0],
                                        y: [0, (index % 3 === 0 ? 1 : -1) * (6 + (index % 9)), (index % 3 === 0 ? -1 : 1) * (10 + (index % 11)), 0],
                                    }}
                                    transition={{
                                        duration: 6 + (index % 4),
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        ease: "easeInOut"
                                    }}
                                    className="absolute bg-white dark:bg-slate-950 border-2 border-slate-900 dark:border-slate-100 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center gap-2 select-none shadow-[2px_2px_0px_0px_#1e293b] dark:shadow-[2px_2px_0px_0px_#f1f5f9] hover:shadow-none transition-shadow active:shadow-none cursor-grab"
                                    style={{
                                        left: `${startLeft}%`,
                                        top: `${startTop}%`,
                                    }}
                                >
                                    <img 
                                        src={`/skillicons/${elm.path}`} 
                                        alt={elm.name} 
                                        width={20} 
                                        height={20} 
                                        className="pointer-events-none select-none w-4 h-4 sm:w-5 sm:h-5" 
                                    />
                                    <span className="text-[10px] sm:text-xs font-mono font-bold pointer-events-none select-none">
                                        {elm.name}
                                    </span>
                                </motion.div>
                            );
                        })}
                    </div>
                )}
            </section>
        </AOSComponent>
    );
}

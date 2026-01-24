'use client';

import { LuExternalLink as LinkIcon } from 'react-icons/lu';
import { FaCodeBranch as CodeIcon } from 'react-icons/fa6';
import { VscGitStash as CodeStashIcon } from 'react-icons/vsc';
import AOSComponent from '@/lib/aos';

// TODO: convert all these images to next/image
export default function Projects() {
    return (
        <AOSComponent>
            <section id="projects" className="relative z-10 mt-32 p-6 text-slate-900">
                <h3
                    data-aos="fade-left"
                    className="projects-title motion-preset-blur-right mb-8 font-heading text-4xl"
                >
                    Selected Projects
                </h3>

                <div id="projects-container" className="mb-6 flex flex-col gap-6">

                    {/* Project 1: Wanderlust */}
                    <div data-aos="fade-left">
                        <div className="wrapper flex flex-col gap-4 rounded-[30px] border-[3px] border-slate-900 p-6 shadow-[4px_4px_0px_0px_ #1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                            <h3 className="flex gap-4 font-heading text-3xl">
                                Wanderlust
                                <CodeStashIcon className="text-green-600" />
                            </h3>

                            <div className="flex flex-col gap-2 text-lg md:flex-row md:gap-4">
                                <a
                                    target="_blank"
                                    href="https://wanderlust-750d.onrender.com/"
                                    className="flex items-center gap-2 rounded-[30px] border-[2px] border-slate-900 bg-slate-900 px-6 py-1 font-medium text-white shadow-[2px_2px_0px_0px_#84cc16] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                                >
                                    Deployed site
                                    <LinkIcon className="inline h-[20px] w-[20px] text-white" />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://github.com/darshan02parmar/wanderlust"
                                    className="flex items-center gap-2 rounded-[30px] border-[2px] border-slate-900 px-6 py-1 font-medium shadow-[2px_2px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                                >
                                    Source code
                                    <CodeIcon className="inline h-[17px] w-[17px]" />
                                </a>
                            </div>
                            <div>
                                <p className="mb-2 text-xl">
                                    A full-stack vacation rental platform similar to Airbnb.
                                </p>
                                <div className="badge-container">
                                    <img
                                        src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
                                        alt="MongoDB"
                                    />
                                    <img
                                        src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
                                        alt="Express.js"
                                    />
                                    <img
                                        src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                                        alt="React"
                                    />
                                    <img
                                        src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
                                        alt="NodeJS"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 2: Weather App */}
                    <div data-aos="fade-left">
                        <div className="wrapper flex flex-col gap-4 rounded-[30px] border-[3px] border-slate-900 p-6 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                            <h3 className="font-heading text-3xl">Weather App ☁️</h3>

                            <div className="flex flex-col gap-2 text-lg md:flex-row md:gap-4">
                                <a
                                    target="_blank"
                                    href="https://weather-app-basic-kohl.vercel.app/"
                                    className="flex items-center gap-2 rounded-[30px] border-[2px] border-slate-900 bg-slate-900 px-6 py-1 font-medium text-white shadow-[2px_2px_0px_0px_#84cc16] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                                >
                                    Deployed site
                                    <LinkIcon className="inline h-[20px] w-[20px] text-white" />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://github.com/darshan02parmar/weather-app"
                                    className="flex items-center gap-2 rounded-[30px] border-[2px] border-slate-900 px-6 py-1 font-medium shadow-[2px_2px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                                >
                                    Source code
                                    <CodeIcon className="inline h-[17px] w-[17px]" />
                                </a>
                            </div>
                            <div>
                                <p className="mb-2 text-xl">
                                    Real-time weather forecasting application with location-based data.
                                </p>
                                <div className="badge-container">
                                    <img
                                        src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                                        alt="React"
                                    />
                                    <img
                                        src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white"
                                        alt="Vite"
                                    />
                                    <img
                                        src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
                                        alt="TailwindCSS"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <a
                    href="https://github.com/darshan02parmar"
                    target="_blank"
                    className="wrapper flex h-16 items-center justify-center gap-2 rounded-[30px] border-[3px] border-slate-900 text-center text-[20px] font-medium shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none bg-white"
                >
                    More on github
                    <LinkIcon />
                </a>
            </section>
        </AOSComponent>
    );
}

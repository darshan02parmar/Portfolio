'use client';

import { MdWork as WorkIcon } from 'react-icons/md';
import { BsBuildingsFill as CompanyIcon } from 'react-icons/bs';
import { FaLocationDot as LocationIcon } from 'react-icons/fa6';
import { FaRegCalendarAlt as DateIcon } from "react-icons/fa";
import AOSComponent from '@/lib/aos'; // Make sure tsconfig paths are set or relative import
export default function WorkExperience() {
    return (
        <AOSComponent>
            <section
                id="work"
                className="relative z-10 mt-32 2xl:mt-52 p-6 text-slate-900"
            >
                <h3
                    data-aos="fade-left"
                    className="work-title motion-preset-blur-right mb-8 font-heading text-4xl flex items-center gap-2"
                >
                    <WorkIcon />
                    Work Experience
                </h3>

                <div id="experience-container" className="mb-6 flex flex-col gap-6">
                    <div data-aos="fade-left">
                        <div className="wrapper flex flex-col gap-4 rounded-[30px] border-[3px] border-slate-900 p-6 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                            <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between">
                                <div>
                                    <h3 className="font-heading text-3xl">
                                        Open-Source Contributor
                                    </h3>
                                    <p className="mt-1 text-lg font-semibold text-slate-700 flex items-center gap-2">
                                        <CompanyIcon />
                                        GSSoC’25
                                    </p>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-sm mt-2 flex items-center gap-2 text-slate-600 md:text-base lg:text-right lg:flex-row-reverse">
                                        <DateIcon />
                                        2025
                                    </p>
                                    <p className="mt-1 text-md lg:self-end font-semibold text-slate-700 flex items-center gap-2 lg:text-right lg:flex-row-reverse">
                                        <LocationIcon />
                                        Remote
                                    </p>
                                </div>
                            </div>

                            <ul className="flex flex-col gap-3 text-slate-700">
                                <li className="flex gap-3 text-lg bg-white/80 rounded-lg shadow-md px-4 py-2 hover:border-l-4 border-slate-700 transition-all duration-100">
                                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-900"></span>
                                    <span>
                                        Contributed to multiple open-source repositories during GirlScript Summer of Code (GSSoC’25)
                                    </span>
                                </li>
                                <li className="flex gap-3 text-lg bg-white/80 rounded-lg shadow-md px-4 py-2 hover:border-l-4 border-slate-700 transition-all duration-100">
                                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-900"></span>
                                    <span>
                                        Worked on real-world features, bug fixes, and enhancements across community projects
                                    </span>
                                </li>
                                <li className="flex gap-3 text-lg bg-white/80 rounded-lg shadow-md px-4 py-2 hover:border-l-4 border-slate-700 transition-all duration-100">
                                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-900"></span>
                                    <span>
                                        Collaborated using Git, GitHub, and pull-request workflows
                                    </span>
                                </li>
                                <li className="flex gap-3 text-lg bg-white/80 rounded-lg shadow-md px-4 py-2 hover:border-l-4 border-slate-700 transition-all duration-100">
                                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-900"></span>
                                    <span>
                                        Recognized among the top 1% contributors based on consistency and impact
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </AOSComponent>
    );
}

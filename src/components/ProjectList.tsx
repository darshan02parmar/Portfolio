import { Link } from 'react-router-dom';
import { LuExternalLink as LinkIcon, LuInfo as InfoIcon } from 'react-icons/lu';
import { FaCodeBranch as CodeIcon } from 'react-icons/fa6';
import { VscGitStash as CodeStashIcon } from 'react-icons/vsc';
import AOSComponent from '@/lib/aos';
import { projects } from '@/lib/projects';

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
                    {projects.map((project, index) => (
                        <div key={project.id} data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}>
                            <div className="wrapper flex flex-col gap-4 rounded-[30px] border-[3px] border-slate-900 p-6 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none bg-white/10 backdrop-blur-sm">
                                <h3 className="flex gap-4 font-heading text-3xl">
                                    {project.title}
                                    {project.id === 'wanderlust' && <CodeStashIcon className="text-green-600" />}
                                </h3>

                                <div className="flex flex-col gap-2 text-lg md:flex-row md:gap-4">
                                    {project.deployedUrl && (
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href={project.deployedUrl}
                                            className="flex items-center gap-2 rounded-[30px] border-[2px] border-slate-900 bg-slate-900 px-6 py-1 font-medium text-white shadow-[2px_2px_0px_0px_#84cc16] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                                        >
                                            Deployed site
                                            <LinkIcon className="inline h-[20px] w-[20px] text-white" />
                                        </a>
                                    )}

                                    {project.githubUrl && (
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href={project.githubUrl}
                                            className="flex items-center gap-2 rounded-[30px] border-[2px] border-slate-900 px-6 py-1 font-medium shadow-[2px_2px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                                        >
                                            Source code
                                            <CodeIcon className="inline h-[17px] w-[17px]" />
                                        </a>
                                    )}

                                    <Link
                                        to={`/project/${project.id}`}
                                        className="flex items-center gap-2 rounded-[30px] border-[2px] border-slate-900 bg-lime-400 px-6 py-1 font-medium shadow-[2px_2px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                                    >
                                        Info
                                        <InfoIcon className="inline h-[20px] w-[20px]" />
                                    </Link>
                                </div>
                                <div>
                                    <p className="mb-2 text-xl">
                                        {project.description}
                                    </p>
                                    <div className="badge-container">
                                        {project.badges.map((badge, bIndex) => (
                                            <img
                                                key={bIndex}
                                                src={badge.src}
                                                alt={badge.alt}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <a
                    href="https://github.com/darshan02parmar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wrapper flex h-16 items-center justify-center gap-2 rounded-[30px] border-[3px] border-slate-900 text-center text-[20px] font-medium shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none bg-white"
                >
                    More on github
                    <LinkIcon />
                </a>
            </section>
        </AOSComponent>
    );
}


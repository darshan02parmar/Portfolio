import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '../lib/projects';
import { LuExternalLink as LinkIcon, LuArrowLeft as BackIcon } from 'react-icons/lu';
import { FaCodeBranch as CodeIcon } from 'react-icons/fa6';
import AOSComponent from '@/lib/aos';

export default function ProjectDetail() {
    const { id } = useParams<{ id: string }>();
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return <Navigate to="/" replace />;
    }

    return (
        <AOSComponent>
            <div className="min-h-screen p-6 lg:p-14 text-slate-900 animate-fade-in ml-24">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 mb-8 text-lg font-medium hover:text-lime-600 transition-colors"
                >
                    <BackIcon />
                    Back to Portfolio
                </Link>

                <header className="mb-12">
                    <h1 className="font-heading text-5xl lg:text-7xl mb-4">{project.title}</h1>
                    <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl">
                        {project.description}
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-2 flex flex-col gap-10">
                        <section className="wrapper rounded-[30px] border-[3px] border-slate-900 p-8 shadow-[8px_8px_0px_0px_#1e293b] bg-white">
                            <h2 className="font-heading text-3xl mb-4">About the Project</h2>
                            <p className="text-lg leading-relaxed text-slate-700">
                                {project.longDescription}
                            </p>
                        </section>

                        <section className="wrapper rounded-[30px] border-[3px] border-slate-900 p-8 shadow-[8px_8px_0px_0px_#84cc16] bg-white">
                            <h2 className="font-heading text-3xl mb-4">Problem Solved 🧩</h2>
                            <p className="text-lg leading-relaxed text-slate-700">
                                {project.problemSolved}
                            </p>
                        </section>

                        <section className="wrapper rounded-[30px] border-[3px] border-slate-900 p-8 shadow-[8px_8px_0px_0px_#3b82f6] bg-white">
                            <h2 className="font-heading text-3xl mb-4">Impact 🚀</h2>
                            <p className="text-lg leading-relaxed text-slate-700">
                                {project.impact}
                            </p>
                        </section>

                        <section className="wrapper rounded-[30px] border-[3px] border-slate-900 p-8 shadow-[8px_8px_0px_0px_#f59e0b] bg-white">
                            <h2 className="font-heading text-3xl mb-4">Difficulty & Learning 🧠</h2>
                            <p className="text-lg leading-relaxed text-slate-700">
                                {project.difficulty}
                            </p>
                        </section>
                    </div>

                    <aside className="flex flex-col gap-6">
                        <div className="wrapper rounded-[30px] border-[3px] border-slate-900 p-6 shadow-[4px_4px_0px_0px_#1e293b] bg-white">
                            <h3 className="font-heading text-2xl mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.badges.map((badge, index) => (
                                    <img key={index} src={badge.src} alt={badge.alt} className="h-8" />
                                ))}
                            </div>
                            <ul className="mt-4 flex flex-wrap gap-2">
                                {project.techStack.map((tech, index) => (
                                    <li key={index} className="px-3 py-1 bg-slate-100 rounded-full text-sm font-medium border border-slate-300">
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col gap-4">
                            {project.deployedUrl && (
                                <a
                                    href={project.deployedUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 rounded-[30px] border-[3px] border-slate-900 bg-slate-900 px-6 py-3 font-heading text-xl text-white shadow-[4px_4px_0px_0px_#84cc16] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                                >
                                    Live Demo
                                    <LinkIcon />
                                </a>
                            )}
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 rounded-[30px] border-[3px] border-slate-900 bg-white px-6 py-3 font-heading text-xl text-slate-900 shadow-[4px_4px_0px_0px_#1e293b] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                                >
                                    View Code
                                    <CodeIcon />
                                </a>
                            )}
                        </div>
                    </aside>
                </div>
            </div>
        </AOSComponent>
    );
}

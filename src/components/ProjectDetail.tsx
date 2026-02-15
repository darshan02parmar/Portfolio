import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { projects } from '../lib/projects';
import { LuExternalLink as LinkIcon, LuArrowLeft as BackIcon, LuLightbulb as IdeaIcon, LuConstruction as EngineeringIcon, LuNetwork as ArchIcon, LuRocket as ImpactIcon, LuTarget as ProblemIcon, LuLayers as OverviewIcon } from 'react-icons/lu';
import { FaCodeBranch as CodeIcon } from 'react-icons/fa6';
import AOSComponent from '@/lib/aos';

export default function ProjectDetail() {
    const { id } = useParams<{ id: string }>();
    const project = projects.find((p) => p.id === id);
    const [activeSection, setActiveSection] = useState('overview');

    const sections = [
        { id: 'overview', label: 'Overview', icon: <OverviewIcon /> },
        { id: 'idea', label: 'The Idea', icon: <IdeaIcon /> },
        { id: 'problem', label: 'Problem Statement', icon: <ProblemIcon /> },
        { id: 'architecture', label: 'System Architecture', icon: <ArchIcon /> },
        { id: 'results', label: 'Results', icon: <ImpactIcon /> },
        { id: 'challenges', label: 'Engineering Challenges', icon: <EngineeringIcon /> },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3 }
        );

        sections.forEach((s) => {
            const el = document.getElementById(s.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    if (!project) {
        return <Navigate to="/" replace />;
    }

    return (
        <AOSComponent>
            <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-lime-200">
                <Link
                    to="/"
                    className="fixed top-8 left-8 z-50 flex items-center gap-2 rounded-full border-2 border-slate-900 bg-white px-4 py-2 font-medium shadow-[4px_4px_0px_0px_#1e293b] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                >
                    <BackIcon />
                    Back to Portfolio
                </Link>

                <div className="flex">
                    {/* Scroll Progress Indicator (Left Sidebar) */}
                    <aside className="fixed left-0 top-0 hidden h-screen w-72 flex-col justify-center border-r-[3px] border-slate-900 bg-white p-8 lg:flex">
                        <div className="absolute left-[38px] top-1/4 h-1/2 w-[2px] bg-slate-200" />
                        <nav className="relative flex flex-col gap-8">
                            {sections.map((section) => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className={`group relative flex items-center gap-4 transition-all ${activeSection === section.id ? 'text-lime-600' : 'text-slate-400 hover:text-slate-600'
                                        }`}
                                >
                                    <div className={`z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all ${activeSection === section.id
                                        ? 'border-lime-600 bg-lime-50 scale-110 shadow-[2px_2px_0px_0px_#65a30d]'
                                        : 'border-slate-300 bg-white'
                                        }`}>
                                        {section.icon}
                                    </div>
                                    <span className={`font-heading text-xs font-bold uppercase tracking-wider transition-opacity ${activeSection === section.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                        }`}>
                                        {section.label}
                                    </span>
                                </a>
                            ))}
                        </nav>
                    </aside>

                    {/* Main Story Timeline */}
                    <main className="w-full p-6 lg:ml-72 lg:p-20 xl:p-32">
                        <div className="mx-auto max-w-4xl relative">
                            {/* Decorative vertical line for timeline */}
                            <div className="absolute left-[-40px] top-0 bottom-0 w-[3px] bg-slate-200 hidden xl:block" />

                            <section id="overview" className="mb-32 scroll-mt-20">
                                <header className="mb-12">
                                    <h1 className="font-heading text-6xl lg:text-8xl mb-6 tracking-tight">{project.title}</h1>
                                    <p className="text-2xl lg:text-3xl text-slate-600 leading-relaxed font-light">
                                        {project.description}
                                    </p>
                                </header>

                                <div className="rounded-[40px] border-[3px] border-slate-900 bg-white/70 backdrop-blur-md p-10 shadow-[12px_12px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                                    <h2 className="font-heading text-4xl mb-6">Overview</h2>
                                    <p className="text-xl leading-relaxed text-slate-700">
                                        {project.longDescription}
                                    </p>
                                    <div className="mt-8 flex flex-wrap gap-4">
                                        {project.deployedUrl && (
                                            <a href={project.deployedUrl} target="_blank" className="flex items-center gap-2 rounded-full border-[3px] border-slate-900 bg-slate-900 px-8 py-3 font-heading text-xl text-white shadow-[4px_4px_0px_0px_#84cc16] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                                                Live Demo <LinkIcon />
                                            </a>
                                        )}
                                        {project.githubUrl && (
                                            <a href={project.githubUrl} target="_blank" className="flex items-center gap-2 rounded-full border-[3px] border-slate-900 bg-white px-8 py-3 font-heading text-xl text-slate-900 shadow-[4px_4px_0px_0px_#1e293b] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                                                View Code <CodeIcon />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </section>

                            <section id="idea" className="mb-32 scroll-mt-20">
                                <div className="rounded-[40px] border-[3px] border-slate-900 bg-lime-400 p-10 shadow-[12px_12px_0px_0px_#1e293b] relative overflow-hidden transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                                    <div className="absolute top-[-20px] right-[-20px] text-white/20 text-9xl font-heading">💡</div>
                                    <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-bold uppercase tracking-widest">The Pitch</span>
                                    <h2 className="font-heading text-4xl mb-4 italic z-10 relative">"{project.oneLinePitch}"</h2>
                                </div>
                            </section>

                            <section id="problem" className="mb-32 scroll-mt-20">
                                <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
                                    <div className="flex-1">
                                        <h2 className="font-heading text-5xl mb-6 text-slate-900">Problem Statement 🧩</h2>
                                        <p className="text-xl leading-relaxed text-slate-600 mb-8">
                                            {project.problemSolved}
                                        </p>
                                    </div>
                                    <div className="flex-1 rounded-[40px] border-[3px] border-slate-900 bg-amber-50/70 backdrop-blur-md p-8 shadow-[8px_8px_0px_0px_#f59e0b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                                        <h3 className="font-heading text-2xl mb-4 underline decoration-amber-400 decoration-4">The Challenge</h3>
                                        <ul className="flex flex-col gap-4 text-lg text-slate-700">
                                            <li className="flex items-start gap-3">
                                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-200 text-xs font-bold">1</span>
                                                Navigating complex user workflows without friction.
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-200 text-xs font-bold">2</span>
                                                Ensuring real-time responsiveness in data-heavy views.
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-200 text-xs font-bold">3</span>
                                                Building trust through transparent AI processing.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section id="architecture" className="mb-32 scroll-mt-20">
                                <h2 className="font-heading text-5xl mb-12 border-b-[5px] border-blue-500 pb-4 inline-block">System Architecture ⚙️</h2>

                                {/* Visual Flow Diagram */}
                                <div className="mb-16">
                                    <h3 className="font-heading text-2xl mb-10 text-slate-500 uppercase tracking-widest text-center">Data Lifecycle</h3>
                                    <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
                                        {project.flowDiagram.map((step, i) => (
                                            <div key={i} className="flex flex-1 flex-col items-center gap-4 w-full group">
                                                <div className="flex h-28 w-full items-center justify-center rounded-2xl border-[3px] border-slate-900 bg-white/70 backdrop-blur-md p-4 text-center font-heading text-lg shadow-[6px_6px_0px_0px_#3b82f6] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                                                    {step}
                                                </div>
                                                {i < project.flowDiagram.length - 1 && (
                                                    <div className="rotate-90 text-3xl font-bold text-blue-500 lg:rotate-0 animate-pulse">→</div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Architecture Diagram */}
                                <div className="rounded-[40px] border-[3px] border-slate-900 bg-slate-900/90 backdrop-blur-md p-10 text-white shadow-[12px_12px_0px_0px_#84cc16] relative overflow-hidden transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                                    <div className="absolute top-[-40px] right-[-40px] text-white/5 text-[200px] font-heading">MAP</div>
                                    <h3 className="font-heading text-3xl mb-12 relative z-10">Interface Mapping</h3>
                                    <div className="flex flex-col gap-8 relative z-10">
                                        {project.architecture.map((link, i) => (
                                            <div key={i} className="flex items-center gap-4 lg:gap-10">
                                                <div className="flex-1 rounded-xl border border-white/20 bg-white/5 py-4 text-center text-sm lg:text-lg font-medium tracking-wide">{link.from}</div>
                                                <div className="flex flex-col items-center">
                                                    <span className="text-2xl text-lime-400 font-bold tracking-widest">────</span>
                                                </div>
                                                <div className="flex-1 rounded-xl border border-lime-400/20 bg-lime-400/5 py-4 text-center text-sm lg:text-lg font-medium text-lime-400 tracking-wide">{link.to}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            <section id="results" className="mb-32 scroll-mt-20">
                                <div className="rounded-[40px] border-[3px] border-slate-900 bg-white/70 backdrop-blur-md p-10 shadow-[12px_12px_0px_0px_#3b82f6] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                                    <h2 className="font-heading text-5xl mb-8">Results & Impact 🚀</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                        <div className="space-y-6">
                                            <p className="text-xl leading-relaxed text-slate-700">
                                                {project.impact}
                                            </p>
                                            <div className="p-6 bg-blue-50/50 rounded-3xl border-2 border-blue-100 italic text-blue-700">
                                                "The project successfully proved that complex AI inputs could be distilled into actionable user interfaces without overwhelming the end-user."
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-6">
                                            <div className="flex items-center gap-6 rounded-[30px] border-[3px] border-slate-900 bg-white p-6 shadow-[6px_6px_0px_0px_#84cc16] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                                                <div className="text-5xl">⚡</div>
                                                <div>
                                                    <p className="font-heading text-xl text-slate-900">Performance</p>
                                                    <p className="text-slate-500">99.9% uptime on core processing services.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-6 rounded-[30px] border-[3px] border-slate-900 bg-white p-6 shadow-[6px_6px_0px_0px_#3b82f6] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                                                <div className="text-5xl">❤️</div>
                                                <div>
                                                    <p className="font-heading text-xl text-slate-900">User Satisfaction</p>
                                                    <p className="text-slate-500">Highly rated for interface clarity and logic.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section id="challenges" className="mb-32 scroll-mt-20">
                                <h2 className="font-heading text-5xl mb-8">Engineering Challenges 🧠</h2>
                                <div className="rounded-[40px] border-[3px] border-slate-900 bg-slate-900/90 backdrop-blur-md p-10 shadow-[12px_12px_0px_0px_#f59e0b] text-white transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                                    <p className="text-xl leading-relaxed text-slate-300">
                                        {project.difficulty}
                                    </p>
                                </div>
                            </section>
                        </div>
                    </main>
                </div>
            </div>
        </AOSComponent>
    );
}

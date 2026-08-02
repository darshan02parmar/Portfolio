import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '../lib/projects';
import { 
    LuExternalLink as LinkIcon, 
    LuArrowLeft as BackIcon, 
    LuLightbulb as IdeaIcon, 
    LuNetwork as ArchIcon, 
    LuRocket as ImpactIcon, 
    LuTarget as ProblemIcon, 
    LuLayers as OverviewIcon 
} from 'react-icons/lu';
import { FaCodeBranch as CodeIcon } from 'react-icons/fa6';
import AOSComponent from '@/lib/aos';
import { 
    ArrowRight, 
    Zap, 
    Heart, 
    Code, 
    Award, 
    CheckCircle2, 
    XCircle, 
    HelpCircle, 
    Layout, 
    BookOpen, 
    Layers,
    Lightbulb,
    TrendingUp,
    Brain,
    Sparkles,
    Compass
} from 'lucide-react';

interface CaseStudy {
    status: string;
    type: string;
    role: string;
    duration: string;
    year: string;
    snapshot: {
        role: string;
        goal: string;
        impact: string;
        stack: string;
    };
    before: string[];
    after: string[];
    timeline: { day: string; label: string; details: string }[];
    logs: string[];
    contributions: { area: string; percent: number }[];
    uniqueFeatures: string[];
    lessons: { title: string; desc: string }[];
    mockScreenshots: {
        title: string;
        url: string;
        visualType: 'input' | 'processing' | 'blueprint' | 'roadmap' | 'listings' | 'auth' | 'map';
        imgUrl?: string;
    }[];
}

const caseStudyData: Record<string, CaseStudy> = {
    ideaflow: {
        status: 'Completed',
        type: 'AI SaaS Product',
        role: 'Solo Full-Stack Developer',
        duration: '2 Weeks',
        year: '2025',
        snapshot: {
            role: 'Solo Full-Stack Developer & AI Architect',
            goal: 'Convert unstructured startup ideas into rich product briefs, blueprints, and roadmaps in seconds.',
            impact: 'Reduced early-stage planning and documentation cycles from days to 10 seconds of processing time.',
            stack: 'Next.js + TypeScript + OpenAI API + Tambo AI + Tailwind CSS + Framer Motion'
        },
        before: [
            '"Blank page" paralysis for founders trying to document their startup vision.',
            'Days spent drafting initial briefs, wireframes, and roadmaps manually.',
            'Unstructured ideas with no clear architectural path or technical guidelines.'
        ],
        after: [
            'Immediate generative UI brief created in 10 seconds.',
            'Automatic tech stack recommendation matched to product requirements.',
            'Actionable, clear MVP development roadmap ready for engineers.'
        ],
        timeline: [
            { day: 'Day 1', label: 'AI Prompt Engineering', details: 'Structured prompt instructions and schemas to ensure deterministic AI outputs.' },
            { day: 'Day 4', label: 'Frontend & Router Setup', details: 'Assembled responsive Next.js views and routing flows for forms.' },
            { day: 'Day 8', label: 'API Integrations', details: 'Connected OpenAI and Tambo AI models to serverless function handlers.' },
            { day: 'Day 11', label: 'Dynamic Generative UI', details: 'Built interactive React cards that render dynamically from parsed AI data.' },
            { day: 'Day 14', label: 'Optimization & Deployment', details: 'Optimized response times, compiled bundles, and deployed live to Vercel.' }
        ],
        logs: [
            'Initializing IdeaFlow generative UI engine v1.0.0...',
            'Connecting to OpenAI models and Tambo AI backend...',
            'User submitted project prompt: "On-demand dog walking SaaS"',
            'Sending prompt payload to OpenAI API (3564 input tokens)...',
            'Parsing structured JSON output schema from LLM...',
            'Validating tech stack selections: [React, Node.js, Stripe, PostgreSQL]...',
            'Assembling product brief, user journeys, and Gantt roadmap...',
            '✓ Generative UI layout assembled successfully. Rendering details.',
            'Case study loaded. Ready for display.'
        ],
        contributions: [
            { area: 'Frontend & UI Design', percent: 100 },
            { area: 'AI Prompts & Integration', percent: 100 },
            { area: 'Serverless Routing API', percent: 105 },
            { area: 'Vercel Deployment', percent: 100 }
        ],
        uniqueFeatures: [
            'Dynamic real-time Generative UI cards',
            'Multi-layer business and technical output briefs',
            'Context-aware tech stack recommendations',
            'Instant PDF/Blueprint export controls'
        ],
        lessons: [
            { title: 'Prompt Rigidity', desc: 'Learned how to structure system prompts to strictly output JSON, preventing parser crashes.' },
            { title: 'Dynamic Component Assemblies', desc: 'Discovered the power of lazy component rendering based on runtime structured data.' },
            { title: 'Serverless Function Timeouts', desc: 'Optimized API gateway limits by shifting heavy processing tasks into streams.' },
            { title: 'UX for AI Latency', desc: 'Designed custom skeletons and simulated log streams to maintain engagement during API loads.' }
        ],
        mockScreenshots: [
            { title: 'User Input Form', url: '/ideaflow-form', visualType: 'input', imgUrl: '/projects/ideaflow-1.png' },
            { title: 'AI Structuring Engines', url: '/ideaflow-processing', visualType: 'processing' },
            { title: 'Interactive Technical Blueprint', url: '/ideaflow-blueprint', visualType: 'blueprint', imgUrl: '/projects/ideaflow-3.png' },
            { title: 'MVP Development Roadmap', url: '/ideaflow-roadmap', visualType: 'roadmap', imgUrl: '/projects/ideaflow-4.png' }
        ]
    },
    wanderlust: {
        status: 'Completed',
        type: 'Vacation Rental Portal',
        role: 'Solo Full-Stack Developer',
        duration: '4 Weeks',
        year: '2025',
        snapshot: {
            role: 'Solo Full-Stack Developer & Database Designer',
            goal: 'Build a secure vacation rental listing search engine similar to Airbnb.',
            impact: 'Created a fully operational platform capable of listing properties, booking dates, and handling geocoding.',
            stack: 'MongoDB + Express.js + React + Node.js + Passport.js + Mapbox SDK + Render hosting'
        },
        before: [
            'Property owners lack simple, localized self-serve listing portals.',
            'Insecure listing verifications leading to fraudulent booking reviews.',
            'No precise map coordinates for listing searches, causing booking confusion.'
        ],
        after: [
            'Unified, secure listing portal with complete CRUD controls.',
            'Passport.js user authentication sessions protecting listings and reviews.',
            'High-precision geocoding via Mapbox SDK displaying exact map pins.'
        ],
        timeline: [
            { day: 'Day 1', label: 'Database & Schemas', details: 'Designed MongoDB collections with referenced users, properties, and reviews.' },
            { day: 'Day 7', label: 'Express REST Routing', details: 'Wrote robust Express.js API handlers for secure CRUD actions.' },
            { day: 'Day 15', label: 'Passport Auth Flow', details: 'Mastered Express cookies, sessions, and strategy authentications.' },
            { day: 'Day 22', label: 'Mapbox API Geocoding', details: 'Connected client and server layers to Mapbox for location listings.' },
            { day: 'Day 28', label: 'Deployment on Render', details: 'Wrote environmental configs, verified builds, and deployed platform.' }
        ],
        logs: [
            'Starting Wanderlust Express cluster on port 3000...',
            'Attempting connection to MongoDB cluster...',
            '✓ MongoDB database connection established successfully.',
            'Registering Passport.js LocalSession strategies...',
            'Express router initialized. Active endpoints: /listings, /reviews, /users',
            'Mapbox SDK initialized. Geocoding coordinates cache loaded...',
            '✓ Web application online. Serving client requests.'
        ],
        contributions: [
            { area: 'REST API & Routing', percent: 100 },
            { area: 'NoSQL Database Schemas', percent: 100 },
            { area: 'Passport Authentication', percent: 100 },
            { area: 'Mapbox Geocoding Integrations', percent: 100 }
        ],
        uniqueFeatures: [
            'Interactive Mapbox location search cards',
            'Full CRUD capability for listings and user reviews',
            'Custom server-side Joi schema validation validations',
            'Secure cookies sessions with Passport authentication'
        ],
        lessons: [
            { title: 'NoSQL Schema Modeling', desc: 'Learned when to embed data vs reference collections to optimize MongoDB read speeds.' },
            { title: 'Middleware Protected Routes', desc: 'Implemented clean Express middlewares to protect listings editing and posting.' },
            { title: 'Input Schema Validation', desc: 'Utilized Joi validations to block malformed inputs before database interactions.' },
            { title: 'Third-party API Performance', desc: 'Optimized map renders by caching geolocated coordinates locally.' }
        ],
        mockScreenshots: [
            { title: 'Secure Authentication & Login', url: '/wanderlust-auth', visualType: 'auth', imgUrl: '/projects/wanderlust-auth.png' },
            { title: 'Property Listings Dashboard', url: '/wanderlust-listings', visualType: 'listings', imgUrl: '/projects/wanderlust-listings.png' },
            { title: 'Mapbox Location Mapping', url: '/wanderlust-map', visualType: 'map', imgUrl: '/projects/wanderlust-map.png' },
            { title: 'Full Listing Overview', url: '/wanderlust-overview', visualType: 'listings', imgUrl: '/projects/wanderlust-overview.png' }
        ]
    },
    investease: {
        status: 'Completed',
        type: 'Investment Management Platform',
        role: 'Solo Developer',
        duration: '4 Weeks',
        year: '2026',
        snapshot: {
            role: 'Solo Full-Stack Developer, System Designer & Backend Engineer',
            goal: 'Build a secure, scalable investor self-service platform that centralizes portfolio management, SIPs, digital KYC, nominee management, statements, notifications, and support operations into a unified experience.',
            impact: 'Delivered a production-inspired MERN platform featuring secure authentication, dynamic portfolio operations, digital KYC workflows, PDF statement generation, and a role-based admin dashboard that streamlines investor and operational workflows.',
            stack: 'React • Node.js • Express.js • MongoDB Atlas • JWT • Tailwind CSS • PDFKit • Multer • Render • Vercel'
        },
        before: [
            'Fragmented investor workflows across multiple platforms.',
            'Manual KYC verification and support processes.',
            'Limited visibility into portfolio and account operations.',
            'Disconnected administrative workflows.'
        ],
        after: [
            'Unified investor self-service dashboard.',
            'Digital KYC with approval workflow.',
            'Integrated portfolio, SIP, nominee, and statement management.',
            'Dedicated admin operations dashboard.'
        ],
        timeline: [
            { day: 'Reliability', label: 'Deployment', details: 'Secure cloud deployment with independent frontend and backend hosting.' },
            { day: 'Security', label: 'Authentication', details: 'JWT authentication with role-based authorization.' },
            { day: 'Scalability', label: 'Architecture', details: 'Modular MERN architecture supporting future integrations.' }
        ],
        logs: [
            'Initializing InvestEase investor dashboard...',
            'Connecting to MongoDB Atlas cluster...',
            'Authenticating user via JWT token...',
            'Fetching dynamic portfolio calculations...',
            'Generating PDF statement for Q3 2026...',
            '✓ KYC document verified by admin.',
            'Case study loaded. Ready for display.'
        ],
        contributions: [
            { area: 'Frontend & UI Design', percent: 100 },
            { area: 'Backend API & Architecture', percent: 100 },
            { area: 'Database Design', percent: 100 },
            { area: 'PDF Generation Engine', percent: 100 }
        ],
        uniqueFeatures: [
            'Role-based Access Control (Admin/User)',
            'Dynamic Portfolio & Health Score Calculations',
            'Digital KYC Document Workflows',
            'Dynamic PDF Account Statements'
        ],
        lessons: [
            { title: 'System Design', desc: 'Designed a modular three-tier MERN architecture with reusable service layers.' },
            { title: 'Authentication & Security', desc: 'Implemented JWT authentication, role-based authorization, password hashing, and protected routes.' },
            { title: 'Business Logic', desc: 'Developed dynamic portfolio calculations, Health Score computation, notification workflows, and event-driven updates.' },
            { title: 'Deployment & DevOps', desc: 'Configured cloud deployment using Vercel, Render, and MongoDB Atlas while handling production environment variables and deployment workflows.' }
        ],
        mockScreenshots: [
            { title: 'Premium Landing Experience', url: '/landing', visualType: 'input' },
            { title: 'Investor Command Center', url: '/dashboard', visualType: 'processing' },
            { title: 'Dynamic Portfolio Management', url: '/portfolio', visualType: 'blueprint' },
            { title: 'Digital KYC Workflow', url: '/kyc', visualType: 'roadmap' }
        ]
    }
};


const BrowserMock = ({ title, url, type, imgUrl }: { title: string; url: string; type: string; imgUrl?: string }) => {
    return (
        <div className="w-full rounded-2xl border-[3px] border-slate-900 dark:border-slate-100 bg-[#0f172a] overflow-hidden shadow-[8px_8px_0px_0px_#1e293b] dark:shadow-[8px_8px_0px_0px_#50e0b3] transition-transform duration-300 hover:scale-[1.01] relative z-10 group">
            {/* Header Bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b-2 border-slate-800 bg-slate-900/60 text-xs">
                <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500 border border-rose-600 block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500 border border-amber-600 block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500 border border-emerald-600 block"></span>
                </div>
                <div className="bg-[#1e293b] text-slate-400 px-6 py-1 rounded-md border border-slate-800 font-mono w-[60%] text-center truncate transition-colors group-hover:text-slate-300 group-hover:bg-[#1e293b]/80">
                    {url}
                </div>
                <span className="text-slate-500 font-mono hidden sm:inline-block">HTTPS</span>
            </div>
            
            {/* Mock Content */}
            <div className="bg-slate-950 min-h-[200px] flex flex-col justify-center text-slate-300 font-sans relative">
                {imgUrl ? (
                    <div className="w-full h-[250px] overflow-hidden">
                        <img 
                            src={imgUrl} 
                            alt={title} 
                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                ) : (
                    <div className="p-6">
                        {type === 'input' && (
                            <div className="space-y-3">
                                <div className="w-[80%] h-4 bg-slate-800 rounded animate-pulse"></div>
                                <div className="w-full h-10 bg-slate-900 border border-slate-800 rounded-lg p-3 text-xs flex items-center text-slate-500">Enter your startup idea here...</div>
                                <div className="w-24 h-8 bg-lime-500 rounded-full flex items-center justify-center text-slate-950 font-bold text-xs">Submit Idea</div>
                            </div>
                        )}
                        {type === 'processing' && (
                            <div className="space-y-4 flex flex-col items-center justify-center text-center">
                                <div className="relative flex h-10 w-10 items-center justify-center">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-8 w-8 bg-blue-500"></span>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-xs font-mono text-lime-400">CONNECTING TO LLM CLUSTER...</div>
                                    <div className="text-[10px] text-slate-500">Analyzing market size & matching optimal libraries...</div>
                                </div>
                            </div>
                        )}
                        {type === 'blueprint' && (
                            <div className="space-y-3">
                                <div className="border border-slate-800 bg-slate-900/50 p-4 rounded-xl space-y-2">
                                    <div className="text-xs font-mono text-blue-400">PRODUCT BRIEF</div>
                                    <div className="w-full h-3 bg-slate-800 rounded"></div>
                                    <div className="w-[90%] h-3 bg-slate-800 rounded"></div>
                                    <div className="w-[60%] h-3 bg-slate-800 rounded"></div>
                                </div>
                            </div>
                        )}
                        {type === 'roadmap' && (
                            <div className="space-y-3">
                                <div className="text-xs font-mono text-purple-400">MVP GANTT TIMELINE</div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="w-12 text-[10px] text-slate-500 font-mono">Sprint 1</span>
                                        <div className="h-4 bg-purple-500/30 border border-purple-500 rounded flex-1 w-[30%]"></div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-12 text-[10px] text-slate-500 font-mono">Sprint 2</span>
                                        <div className="h-4 bg-blue-500/30 border border-blue-500 rounded flex-1 w-[60%] ml-[30%]"></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {type === 'auth' && (
                            <div className="max-w-xs mx-auto space-y-3 w-full border border-slate-800 p-4 rounded-xl bg-slate-900/40">
                                <div className="text-center font-heading text-sm text-slate-200">Register Account</div>
                                <div className="h-8 bg-slate-950 border border-slate-800 rounded-lg p-2 text-[10px] text-slate-650 flex items-center">Username</div>
                                <div className="h-8 bg-slate-950 border border-slate-800 rounded-lg p-2 text-[10px] text-slate-650 flex items-center">Password</div>
                                <div className="h-8 bg-lime-50 text-slate-950 rounded-lg font-bold text-[11px] flex items-center justify-center">Sign Up</div>
                            </div>
                        )}
                        {type === 'listings' && (
                            <div className="grid grid-cols-2 gap-3">
                                <div className="border border-slate-800 bg-slate-900 p-2 rounded-lg space-y-2">
                                    <div className="h-16 bg-slate-800 rounded-md animate-pulse"></div>
                                    <div className="w-[80%] h-2 bg-slate-700 rounded"></div>
                                    <div className="w-[40%] h-2 bg-slate-700 rounded"></div>
                                </div>
                                <div className="border border-slate-800 bg-slate-900 p-2 rounded-lg space-y-2">
                                    <div className="h-16 bg-slate-800 rounded-md animate-pulse"></div>
                                    <div className="w-[80%] h-2 bg-slate-700 rounded"></div>
                                    <div className="w-[40%] h-2 bg-slate-700 rounded"></div>
                                </div>
                            </div>
                        )}
                        {type === 'map' && (
                            <div className="relative border border-slate-800 bg-slate-900 p-2 rounded-lg h-[150px] overflow-hidden flex items-center justify-center">
                                <div className="absolute inset-0 opacity-20 bg-grid-pattern"></div>
                                <div className="z-10 flex flex-col items-center">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                    </span>
                                    <div className="bg-slate-950 border border-slate-800 px-2 py-1 rounded text-[9px] font-bold text-slate-300 shadow mt-1">Eiffel Tower Listing</div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
            
            {/* Title Label */}
            <div className="px-4 py-2 bg-slate-900 border-t border-slate-800 text-center font-heading text-xs tracking-wider text-slate-400">
                {title}
            </div>
        </div>
    );
};

export default function ProjectDetail() {
    const { id } = useParams<{ id: string }>();
    const project = projects.find((p) => p.id === id);
    const [activeSection, setActiveSection] = useState('overview');

    const sections = [
        { id: 'overview', label: 'Overview', icon: <OverviewIcon /> },
        { id: 'snapshot', label: 'Snapshot', icon: <Layers size={18} /> },
        { id: 'pitch', label: 'The Pitch', icon: <IdeaIcon /> },
        { id: 'problem', label: 'Problem & Solutions', icon: <ProblemIcon /> },
        { id: 'architecture', label: 'System Flow', icon: <ArchIcon /> },
        { id: 'screens', label: 'Product Showcase', icon: <Layout size={18} /> },
        { id: 'results', label: 'Impact & Logs', icon: <ImpactIcon /> },
        { id: 'lessons', label: 'Takeaways', icon: <BookOpen size={18} /> },
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
            { threshold: 0.2 }
        );

        sections.forEach((s) => {
            const el = document.getElementById(s.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    if (!project) {
        return <Navigate to="/" replace />;
    }

    const study = caseStudyData[project.id] || caseStudyData['ideaflow'];

    return (
        <AOSComponent>
            <div className="min-h-screen bg-background bg-grid-pattern text-foreground selection:bg-lime-200 transition-colors duration-300">
                <Link
                    to="/"
                    className="fixed top-8 left-8 z-50 flex items-center gap-2 rounded-full border-2 border-slate-900 dark:border-slate-100 bg-white dark:bg-slate-900 dark:text-slate-100 px-4 py-2 font-medium shadow-[4px_4px_0px_0px_#1e293b] dark:shadow-[4px_4px_0px_0px_#f1f5f9] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:bg-slate-100 dark:hover:bg-white dark:hover:text-slate-950"
                >
                    <BackIcon />
                    Back to Portfolio
                </Link>

                <div className="flex">
                    {/* Scroll Progress Indicator (Left Sidebar) */}
                    <aside className="fixed left-0 top-0 hidden h-screen w-72 flex-col pt-32 pb-8 px-8 border-r-[3px] border-slate-900 dark:border-slate-800 bg-white dark:bg-slate-900 lg:flex transition-colors duration-300 overflow-y-auto">
                        <nav className="relative flex flex-col gap-8 mt-auto mb-auto">
                            {/* Connecting Line */}
                            <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-slate-200 dark:bg-slate-800 z-0" />
                            
                            {sections.map((section) => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className={`group relative flex items-center gap-4 transition-all z-10 ${activeSection === section.id ? 'text-lime-600 dark:text-lime-400' : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'
                                        }`}
                                >
                                    <div className={`z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 transition-all ${activeSection === section.id
                                        ? 'border-lime-600 dark:border-lime-400 bg-lime-50 dark:bg-lime-950 scale-110 shadow-[2px_2px_0px_0px_#65a30d]'
                                        : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900'
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
                    <main className="w-full p-6 pt-24 lg:pt-20 lg:ml-72 lg:p-20 xl:p-32">
                        <div className="mx-auto max-w-4xl relative">
                            {/* Decorative vertical line for timeline */}
                            <div className="absolute left-[-40px] top-0 bottom-0 w-[3px] bg-slate-200 dark:bg-slate-800 hidden xl:block" />

                            {/* Section 1: Hero & Status Header */}
                            <section id="overview" className="mb-24 scroll-mt-20">
                                <header className="mb-12">
                                    <span className="text-sm font-semibold tracking-widest text-[#50e0b3] bg-[#0f172a] px-3 py-1 rounded-full border border-[#50e0b3]/30">CASE STUDY</span>
                                    <h1 className="font-heading text-6xl lg:text-8xl mt-4 mb-6 tracking-tight flex items-center gap-4 flex-wrap">
                                        {project.title}
                                        {project.id === 'ideaflow' && (
                                            <Sparkles className="text-lime-400 w-10 h-10 lg:w-16 lg:h-16 animate-pulse shrink-0" />
                                        )}
                                        {project.id === 'wanderlust' && (
                                            <Compass className="text-amber-500 w-10 h-10 lg:w-16 lg:h-16 animate-spin animate-duration-[25000ms] shrink-0" />
                                        )}
                                    </h1>
                                    <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                                        {project.description}
                                    </p>
                                </header>

                                {/* Project Status Header */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-3xl border-[3px] border-slate-900 dark:border-slate-100 bg-white dark:bg-slate-900 p-6 shadow-[8px_8px_0px_0px_#1e293b] dark:shadow-[8px_8px_0px_0px_#f1f5f9]">
                                    <div className="flex flex-col border-r border-slate-200 dark:border-slate-800 pr-2">
                                        <span className="text-[10px] uppercase tracking-wider text-slate-400 font-mono">Status</span>
                                        <span className="text-sm font-bold text-green-500 font-mono">{study.status}</span>
                                    </div>
                                    <div className="flex flex-col md:border-r border-slate-200 dark:border-slate-800 pr-2">
                                        <span className="text-[10px] uppercase tracking-wider text-slate-400 font-mono">Type</span>
                                        <span className="text-sm font-bold text-slate-800 dark:text-slate-200 font-mono truncate">{study.type}</span>
                                    </div>
                                    <div className="flex flex-col border-r border-slate-200 dark:border-slate-800 pr-2">
                                        <span className="text-[10px] uppercase tracking-wider text-slate-400 font-mono">Role</span>
                                        <span className="text-sm font-bold text-slate-800 dark:text-slate-200 font-mono truncate">{study.role.split(' ')[0]} Dev</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase tracking-wider text-slate-400 font-mono">Year</span>
                                        <span className="text-sm font-bold text-slate-800 dark:text-slate-200 font-mono">{study.year}</span>
                                    </div>
                                </div>
                            </section>

                            {/* Section 2: Project Snapshot (Grid) */}
                            <section id="snapshot" className="mb-24 scroll-mt-20">
                                <h2 className="font-heading text-4xl mb-8 border-b-[5px] border-lime-400 pb-2 inline-block">Project Snapshot</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="rounded-3xl border-[3px] border-slate-900 dark:border-slate-100 bg-white dark:bg-slate-900 p-6 shadow-[6px_6px_0px_0px_#f59e0b] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                                        <div className="flex items-center gap-2 mb-2 font-heading text-xl text-slate-900 dark:text-slate-100">
                                            <Award size={20} className="text-amber-500" />
                                            <h3>My Role</h3>
                                        </div>
                                        <p className="text-slate-650 dark:text-slate-300 text-sm leading-relaxed">{study.snapshot.role}</p>
                                    </div>
                                    <div className="rounded-3xl border-[3px] border-slate-900 dark:border-slate-100 bg-white dark:bg-slate-900 p-6 shadow-[6px_6px_0px_0px_#3b82f6] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                                        <div className="flex items-center gap-2 mb-2 font-heading text-xl text-slate-900 dark:text-slate-100">
                                            <HelpCircle size={20} className="text-blue-500" />
                                            <h3>Goal</h3>
                                        </div>
                                        <p className="text-slate-655 dark:text-slate-300 text-sm leading-relaxed">{study.snapshot.goal}</p>
                                    </div>
                                    <div className="rounded-3xl border-[3px] border-slate-900 dark:border-slate-100 bg-white dark:bg-slate-900 p-6 shadow-[6px_6px_0px_0px_#84cc16] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                                        <div className="flex items-center gap-2 mb-2 font-heading text-xl text-slate-900 dark:text-slate-100">
                                            <Zap size={20} className="text-lime-500" />
                                            <h3>Impact</h3>
                                        </div>
                                        <p className="text-slate-655 dark:text-slate-300 text-sm leading-relaxed">{study.snapshot.impact}</p>
                                    </div>
                                    <div className="rounded-3xl border-[3px] border-slate-900 dark:border-slate-100 bg-white dark:bg-slate-900 p-6 shadow-[6px_6px_0px_0px_#ec4899] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                                        <div className="flex items-center gap-2 mb-2 font-heading text-xl text-slate-900 dark:text-slate-100">
                                            <Code size={20} className="text-pink-500" />
                                            <h3>Stack Summary</h3>
                                        </div>
                                        <p className="text-slate-655 dark:text-slate-300 text-sm leading-relaxed">{study.snapshot.stack}</p>
                                    </div>
                                </div>
                            </section>

                            {/* Section 3: The Pitch (Callout) */}
                            <section id="pitch" className="mb-24 scroll-mt-20">
                                <div className="rounded-[40px] border-[3px] border-slate-900 dark:border-slate-100 bg-lime-400 dark:bg-lime-500 dark:text-slate-900 p-8 shadow-[10px_10px_0px_0px_#1e293b] dark:shadow-[10px_10px_0px_0px_#f1f5f9] relative overflow-hidden group">
                                    <Lightbulb className="absolute top-[-10px] right-[-10px] text-white/20 dark:text-slate-900/10 w-32 h-32 rotate-12 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-45" />
                                    <span className="mb-3 inline-block rounded-full bg-white/20 px-4 py-1 text-xs font-bold uppercase tracking-widest">The Pitch</span>
                                    <h2 className="font-heading text-3xl md:text-4xl italic z-10 relative">"{project.oneLinePitch}"</h2>
                                </div>
                            </section>

                            {/* Section 4: Problem Statement & Before vs After */}
                            <section id="problem" className="mb-24 scroll-mt-20">
                                <h2 className="font-heading text-4xl mb-8 border-b-[5px] border-rose-500 pb-2 inline-block">Problem & Solution</h2>
                                <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch">
                                    <div className="flex-1 flex flex-col justify-center">
                                        <h3 className="font-heading text-2xl mb-4 text-slate-900 dark:text-slate-100">Problem Statement</h3>
                                        <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                                            {project.problemSolved}
                                        </p>
                                    </div>
                                    
                                    {/* Before vs After split panel */}
                                    <div className="flex-1 rounded-[30px] border-[3px] border-slate-900 dark:border-slate-100 bg-white dark:bg-slate-900 overflow-hidden shadow-[8px_8px_0px_0px_#1e293b] dark:shadow-[8px_8px_0px_0px_#f1f5f9]">
                                        <div className="grid grid-cols-2 border-b-2 border-slate-900 bg-slate-100 dark:bg-slate-800 text-center font-heading py-3 text-sm tracking-wider">
                                            <div className="text-rose-600 border-r-2 border-slate-900">BEFORE</div>
                                            <div className="text-green-600">AFTER</div>
                                        </div>
                                        <div className="grid grid-cols-2 divide-x-2 divide-slate-900 text-xs">
                                            <div className="p-4 space-y-4">
                                                {study.before.map((b, idx) => (
                                                    <div key={idx} className="flex gap-2 items-start text-slate-600 dark:text-slate-400">
                                                        <XCircle size={14} className="text-rose-500 shrink-0 mt-0.5" />
                                                        <span>{b}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="p-4 space-y-4">
                                                {study.after.map((a, idx) => (
                                                    <div key={idx} className="flex gap-2 items-start text-slate-800 dark:text-slate-200">
                                                        <CheckCircle2 size={14} className="text-green-500 shrink-0 mt-0.5" />
                                                        <span>{a}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Section 5: Interactive Architecture Flow */}
                            <section id="architecture" className="mb-24 scroll-mt-20">
                                <h2 className="font-heading text-4xl mb-8 border-b-[5px] border-blue-500 pb-2 inline-block">System Architecture Flow</h2>
                                
                                {/* Data Lifecycle flow diagram */}
                                <div className="mb-16">
                                    <h3 className="font-heading text-xl mb-8 text-slate-500 uppercase tracking-widest text-center">Data Lifecycle</h3>
                                    {project.id === 'investease' ? (
                                        <div className="flex flex-col items-center w-full max-w-sm mx-auto font-heading">
                                            {/* Login Box */}
                                            <div className="rounded-xl border-[3px] border-slate-900 dark:border-slate-100 bg-white dark:bg-slate-900 px-8 py-3 text-lg shadow-[4px_4px_0px_0px_#3b82f6] z-10">
                                                Authentication (Login)
                                            </div>
                                            
                                            {/* Arrow Down */}
                                            <div className="w-[3px] h-8 bg-blue-500 relative">
                                                <div className="absolute -bottom-2 -left-[4.5px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-blue-500"></div>
                                            </div>

                                            {/* Dashboard Box */}
                                            <div className="rounded-xl border-[3px] border-slate-900 dark:border-slate-100 bg-white dark:bg-slate-900 px-12 py-4 text-xl font-bold shadow-[6px_6px_0px_0px_#84cc16] z-10 mt-2">
                                                Investor Dashboard
                                            </div>

                                            {/* Branching Section */}
                                            <div className="relative flex flex-col items-start w-full pl-[50%] mt-2">
                                                {/* Continuous Vertical Line */}
                                                <div className="absolute left-[50%] ml-[-1.5px] top-0 bottom-[-10px] w-[3px] bg-blue-500 z-0"></div>
                                                
                                                {/* Branches */}
                                                {[
                                                    'Portfolio Operations',
                                                    'SIP Management',
                                                    'KYC Verifications',
                                                    'Account Statements',
                                                    'Push Notifications',
                                                    'Nominee Management'
                                                ].map((item, i) => (
                                                    <div key={i} className="flex items-center w-full my-3 z-10">
                                                        {/* Horizontal Connector */}
                                                        <div className="h-[3px] w-8 bg-blue-500 shrink-0"></div>
                                                        {/* Item Box */}
                                                        <div className="rounded-lg border-2 border-slate-900 dark:border-slate-100 bg-white dark:bg-slate-900 px-4 py-2 text-sm shadow-[3px_3px_0px_0px_#a855f7] flex-1 truncate">
                                                            {item}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Arrow Down from the vertical line */}
                                            <div className="w-[3px] h-8 bg-blue-500 relative mt-[10px]">
                                                <div className="absolute -bottom-2 -left-[4.5px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-blue-500"></div>
                                            </div>

                                            {/* Admin Dashboard */}
                                            <div className="rounded-xl border-[3px] border-slate-900 dark:border-slate-100 bg-slate-900 text-white dark:bg-slate-800 px-8 py-3 text-lg shadow-[4px_4px_0px_0px_#ef4444] mt-2 z-10 text-center">
                                                Admin Operations Dashboard
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-stretch justify-center gap-4 lg:flex-row lg:items-center">
                                            {project.flowDiagram.map((step, i) => (
                                                <React.Fragment key={i}>
                                                    <div className="flex-1 flex flex-col items-center gap-4 w-full relative">
                                                        <div className="relative flex h-28 w-full items-center justify-center rounded-2xl border-[3px] border-slate-900 dark:border-slate-100 bg-white dark:bg-slate-900 p-6 text-center font-heading text-lg shadow-[6px_6px_0px_0px_#3b82f6] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none dark:text-slate-100">
                                                            <div className="absolute top-2 left-3 text-xs font-mono font-bold text-blue-500 dark:text-blue-400">0{i + 1}</div>
                                                            <span className="mt-2">{step}</span>
                                                        </div>
                                                    </div>
                                                    {i < project.flowDiagram.length - 1 && (
                                                        <div className="flex items-center justify-center py-2 lg:py-0">
                                                            <ArrowRight className="text-blue-500 font-bold rotate-90 lg:rotate-0 animate-pulse" size={24} />
                                                        </div>
                                                    )}
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* System Mapping Connectors */}
                                <div className="rounded-[40px] border-[3px] border-slate-900 dark:border-slate-100 bg-slate-900/90 dark:bg-slate-900/40 backdrop-blur-md p-8 text-white shadow-[12px_12px_0px_0px_#84cc16] relative overflow-hidden transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                                    <div className="absolute top-[-40px] right-[-40px] text-white/5 text-[200px] font-heading">MAP</div>
                                    <h3 className="font-heading text-3xl mb-12 relative z-10">Interface Mapping</h3>
                                    <div className="flex flex-col gap-6 relative z-10">
                                        {project.architecture.map((link, i) => (
                                            <div key={i} className="flex items-center justify-between gap-4 md:gap-8">
                                                <div className="flex-1 rounded-xl border border-white/25 bg-white/5 py-4 text-center text-sm lg:text-lg font-medium tracking-wide truncate max-w-[45%]">{link.from}</div>
                                                <div className="flex items-center justify-center gap-2 flex-1">
                                                    <div className="h-[2px] bg-gradient-to-r from-white/10 via-lime-400/50 to-lime-400/90 flex-1 min-w-[20px]" />
                                                    <ArrowRight className="text-lime-400 shrink-0" size={18} />
                                                </div>
                                                <div className="flex-1 rounded-xl border border-lime-400/25 bg-lime-400/5 py-4 text-center text-sm lg:text-lg font-medium text-lime-400 tracking-wide truncate max-w-[45%]">{link.to}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* Section 6: Product Screenshots (CSS Mock Browsers) */}
                            <section id="screens" className="mb-24 scroll-mt-20">
                                <h2 className="font-heading text-4xl mb-8 border-b-[5px] border-purple-500 pb-2 inline-block">Product Showcase</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {study.mockScreenshots.map((scr, idx) => (
                                        <BrowserMock
                                            key={idx}
                                            title={scr.title}
                                            url={scr.url}
                                            type={scr.visualType}
                                            imgUrl={scr.imgUrl}
                                        />
                                    ))}
                                </div>
                            </section>

                            {/* Section 7: Results & Impact */}
                            <section id="results" className="mb-24 scroll-mt-20">
                                <div className="rounded-[40px] border-[3px] border-slate-900 dark:border-slate-100 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md p-8 shadow-[12px_12px_0px_0px_#3b82f6] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                                    <h2 className="font-heading text-4xl mb-8 flex items-center gap-3">
                                        Results & Impact
                                        <TrendingUp className="text-blue-500 animate-pulse shrink-0" size={32} />
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                        <div className="space-y-6">
                                            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                                                {project.impact}
                                            </p>
                                            <div className="p-6 bg-blue-50/50 dark:bg-blue-900/20 rounded-3xl border-2 border-blue-100 dark:border-blue-900/60 italic text-blue-700 dark:text-blue-300 text-sm">
                                                "The project successfully proved that complex requirements could be distilled into actionable visual components and flows without overwhelming the end-user."
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-6">
                                            <div className="flex items-center gap-6 rounded-[30px] border-[3px] border-slate-900 dark:border-slate-100 bg-white dark:bg-slate-900 p-6 shadow-[6px_6px_0px_0px_#84cc16] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                                                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border-2 border-slate-900 dark:border-slate-100 bg-lime-50 dark:bg-lime-950/40">
                                                    <Zap className="text-lime-500 fill-lime-500" size={30} />
                                                </div>
                                                <div>
                                                    <p className="font-heading text-xl text-slate-900 dark:text-slate-100">Performance</p>
                                                    <p className="text-slate-500 dark:text-slate-400 text-xs">Uptime on core processing services.</p>
                                                    <div className="mt-1.5 flex items-center gap-2">
                                                        <span className="relative flex h-2 w-2">
                                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                                        </span>
                                                        <span className="text-[10px] font-semibold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/35 px-2 py-0.5 rounded-md border border-green-200 dark:border-green-900/50">99.9% Uptime</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-6 rounded-[30px] border-[3px] border-slate-900 dark:border-slate-100 bg-white dark:bg-slate-900 p-6 shadow-[6px_6px_0px_0px_#3b82f6] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                                                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border-2 border-slate-900 dark:border-slate-100 bg-rose-50 dark:bg-rose-950/40">
                                                    <Heart className="text-rose-500 fill-rose-500" size={30} />
                                                </div>
                                                <div>
                                                    <p className="font-heading text-xl text-slate-900 dark:text-slate-100">User Satisfaction</p>
                                                    <p className="text-slate-500 dark:text-slate-400 text-xs">Clarifying logic and UI layouts.</p>
                                                    <div className="mt-1.5 flex items-center">
                                                        <span className="text-[10px] font-semibold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/35 px-2 py-0.5 rounded-md border border-rose-200 dark:border-rose-900/50">Excellent Rating</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>



                            {/* Section 9: Lessons Learned Cards */}
                            <section id="lessons" className="mb-32 scroll-mt-20">
                                <h2 className="font-heading text-4xl mb-8 border-b-[5px] border-amber-500 pb-2 inline-flex items-center gap-3">
                                    Lessons Learned
                                    <Brain className="text-amber-500 animate-pulse shrink-0" size={32} />
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {study.lessons.map((l, idx) => (
                                        <div key={idx} className="rounded-3xl border-[3px] border-slate-900 dark:border-slate-100 bg-white dark:bg-slate-900 p-6 shadow-[6px_6px_0px_0px_#eab308] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                                            <h3 className="font-heading text-xl text-slate-900 dark:text-slate-100 mb-2">{l.title}</h3>
                                            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{l.desc}</p>
                                        </div>
                                    ))}
                                </div>


                            </section>

                            {/* Section 10: Live Demo / GitHub Action Cards */}
                            <div className="border-t-[3px] border-slate-900 dark:border-slate-800 pt-16 mb-24 flex flex-col sm:flex-row items-center justify-center gap-6">
                                {project.deployedUrl && (
                                    <a
                                        href={project.deployedUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 rounded-full border-[3px] border-slate-900 bg-slate-900 dark:border-[#50e0b3] dark:bg-[#0f172a] dark:text-[#50e0b3] px-8 py-4 font-heading text-xl text-white shadow-[4px_4px_0px_0px_#84cc16] dark:shadow-[4px_4px_0px_0px_#50e0b3] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:bg-slate-800 dark:hover:bg-[#50e0b3] dark:hover:text-[#0f172a]"
                                    >
                                        Live Deployed Demo <LinkIcon />
                                    </a>
                                )}
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 rounded-full border-[3px] border-slate-900 dark:border-slate-100 bg-white dark:bg-slate-900 px-8 py-4 font-heading text-xl text-slate-900 dark:text-slate-100 shadow-[4px_4px_0px_0px_#1e293b] dark:shadow-[4px_4px_0px_0px_#f1f5f9] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:bg-slate-100 dark:hover:bg-white dark:hover:text-slate-950"
                                    >
                                        View Source Code <CodeIcon />
                                    </a>
                                )}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </AOSComponent>
    );
}

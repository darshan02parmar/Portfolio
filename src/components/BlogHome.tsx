import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import { ArrowLeft, ExternalLink, Calendar } from 'lucide-react';
import FloatingShape from './FloatingShape';
import TiltCard from './TiltCard';
import SEO from './SEO';

const BlogHome = () => {
    const latestPosts = [
        blogs[0], 
        { 
            id: "coming-soon-1", 
            slug: "", 
            title: "More Engineering Notes Coming Soon", 
            description: "I'm currently documenting my process of building this portfolio and diving deep into React, Node.js, and modern AI tools. Check back shortly for new content!", 
            tags: ["Writing", "In Progress"], 
            date: "Coming Soon", 
            readTime: "—" 
        }, 
        // { 
        //     id: "coming-soon-2", 
        //     slug: "", 
        //     title: "", 
        //     description: "  ", 
        //     tags: [],
        //     date: "Coming Soon", 
        //     readTime: "—" 
        // }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-lime-200 transition-colors duration-300 relative overflow-hidden font-sans">
            <SEO
                title="Blog | Darshan Parmar — Software & Full-Stack Development"
                description="Articles and notes on web development, React, Next.js, TypeScript, AI, and things I learn while building software."
                canonical="/blog"
            />
            
            {/* Background Decorative Blob (Matched to Home) */}
            <img
                src="/gr1.png"
                alt="spinning blob"
                className="images glow absolute left-[-85px] top-[-95px] z-0 h-[400px] w-[400px] animate-spin animate-duration-[40000ms] animate-infinite animate-ease-in-out opacity-80 dark:opacity-40 pointer-events-none"
            />
            
            <FloatingShape 
                shapeUrl="/shapes/shape-85.svg" 
                directionClass="absolute right-[5%] top-[15%] z-0 pointer-events-none opacity-70" 
                amplitude={[20, 50, 20]} 
                speed={0.15} 
            />

            {/* Header */}
            <header className="pt-24 pb-12 px-6 sm:px-8 max-w-6xl mx-auto relative z-10">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium mb-6 transition-colors"
                >
                    <ArrowLeft size={16} />
                    Back to Portfolio
                </Link>

                <h1 className="font-heading text-7xl md:text-8xl mb-6 text-slate-950 dark:text-white tracking-tight">
                    Blog
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
                    Things I’m learning, building, debugging, and figuring out along the way.
                </p>
            </header>

            {/* Main Content List */}
            <main className="max-w-6xl mx-auto px-6 sm:px-8 pb-24 relative z-10 flex flex-col gap-8">
                {/* Blue Background Image Behind Cards */}
                <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[140%] max-w-[1200px] h-[80%] pointer-events-none z-[-1] opacity-70 dark:opacity-40">
                    <img
                        src="/background/image.png"
                        alt=""
                        className="w-full h-full object-cover blur-[80px]"
                    />
                </div>
                {latestPosts.map((post) => (
                    <div key={post.id}>
                        <TiltCard>
                            <div className="relative w-full h-full flex flex-col rounded-[30px] border-[3px] border-slate-900 dark:border-slate-100 bg-white/10 dark:bg-slate-900 backdrop-blur-sm shadow-[4px_4px_0px_0px_#1e293b] dark:shadow-[4px_4px_0px_0px_#f1f5f9] p-6 sm:p-8">
                                
                                {/* Meta */}
                            <div className="flex items-center gap-2 text-slate-500 font-medium text-sm sm:text-base mb-3">
                                <Calendar size={16} />
                                <span>{post.date}</span>
                                <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                                <span>{post.readTime}</span>
                            </div>

                            {/* Title & Desc */}
                            <h2 className="text-3xl sm:text-4xl font-bold font-sans text-slate-900 dark:text-white mb-3 leading-tight">
                                {post.slug ? (
                                    <Link to={`/blog/${post.slug}`} className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors">
                                        {post.title}
                                    </Link>
                                ) : (
                                    <span className="text-slate-900 dark:text-white">{post.title}</span>
                                )}
                            </h2>
                            <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl mb-5 leading-relaxed">
                                {post.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {post.tags.map(tag => (
                                    <span 
                                        key={tag} 
                                        className="px-3 py-1 bg-[#a3e635] text-slate-950 font-medium text-sm rounded-full border border-slate-900"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Read More Button (Only if slug exists) */}
                            {post.slug && (
                                <div className="mt-auto">
                                    <Link 
                                        to={`/blog/${post.slug}`}
                                        className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 text-white px-5 py-2 font-medium text-sm transition-transform hover:-translate-y-0.5 active:translate-y-0 w-fit shadow-[4px_4px_0px_0px_#a3e635] dark:shadow-[4px_4px_0px_0px_#a3e635] border border-slate-900"
                                    >
                                        Read More <ExternalLink size={14} />
                                    </Link>
                                </div>
                            )}
                            </div>
                        </TiltCard>
                    </div>
                ))}
            </main>

            {/* Footer Notice */}
            <footer className="text-center pb-24 px-6 text-slate-500 dark:text-slate-400 text-sm font-medium relative z-10">
                More posts coming soon! Follow me on <a href="https://twitter.com/darshanparmar03" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-900 dark:hover:text-white transition-colors text-slate-700 dark:text-slate-300">Twitter</a> for updates.
            </footer>
        </div>
    );
};

export default BlogHome;

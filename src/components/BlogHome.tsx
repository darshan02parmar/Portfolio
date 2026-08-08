import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import { ArrowLeft, ExternalLink, Calendar } from 'lucide-react';
import FloatingShape from './FloatingShape';

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
            
            {/* Background Decorative Blobs */}
            <div className="absolute top-[-100px] left-[10%] w-[600px] h-[600px] bg-pink-300/30 dark:bg-pink-900/30 rounded-full blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>
            <div className="absolute top-[0px] left-[-100px] w-[500px] h-[500px] bg-purple-300/30 dark:bg-purple-900/30 rounded-full blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>
            <div className="absolute top-[-50px] left-[30%] w-[400px] h-[400px] bg-orange-300/20 dark:bg-orange-900/20 rounded-full blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>
            
            <div className="absolute top-[15%] right-[5%] lg:right-[15%] z-0 pointer-events-none opacity-70">
               <FloatingShape shapeUrl="/shapes/shape-81.svg" directionClass="right-0 top-0" amplitude={[15, 20, 10]} speed={0.15} />
            </div>

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
                {latestPosts.map((post, index) => (
                    <div 
                        key={post.id} 
                        className="relative w-full rounded-[28px] border-[3px] border-slate-900 dark:border-slate-100 bg-white dark:bg-slate-900 overflow-hidden shadow-[8px_8px_0px_0px_#1e293b] dark:shadow-[8px_8px_0px_0px_#f1f5f9] transition-transform duration-300 hover:-translate-y-1"
                    >
                        {/* Internal decorative gradient blob based on index to vary colors slightly */}
                        <div className={`absolute -right-20 -bottom-20 w-[600px] h-[600px] rounded-full blur-[90px] pointer-events-none opacity-60 dark:opacity-40 ${
                            index % 3 === 0 ? 'bg-cyan-400' : index % 3 === 1 ? 'bg-emerald-400' : 'bg-teal-400'
                        }`}></div>

                        <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full">
                            
                            {/* Meta */}
                            <div className="flex items-center gap-2 text-slate-500 font-medium text-xs sm:text-sm mb-4">
                                <Calendar size={14} />
                                <span>{post.date}</span>
                                <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                                <span>{post.readTime}</span>
                            </div>

                            {/* Title & Desc */}
                            <h2 className="text-2xl sm:text-3xl font-bold font-sans text-slate-900 dark:text-white mb-4 leading-tight">
                                {post.slug ? (
                                    <Link to={`/blog/${post.slug}`} className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors">
                                        {post.title}
                                    </Link>
                                ) : (
                                    <span className="text-slate-900 dark:text-white">{post.title}</span>
                                )}
                            </h2>
                            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mb-6 leading-relaxed">
                                {post.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {post.tags.map(tag => (
                                    <span 
                                        key={tag} 
                                        className="px-3 py-1 bg-[#a3e635] text-slate-950 font-medium text-xs rounded-full border border-slate-900"
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

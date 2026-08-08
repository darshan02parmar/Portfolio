import { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { blogs } from '../data/blogs';
import { ArrowLeft, ArrowUpRight, Copy, Check, Calendar, Clock } from 'lucide-react';
import BlogPostJsonLd from './seo/BlogPostJsonLd';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const BlogPost = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = blogs.find(b => b.slug === slug);
    const [content, setContent] = useState('');
    const [copied, setCopied] = useState(false);

    // Reading progress
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        if (post?.contentPath) {
            fetch(post.contentPath)
                .then(res => res.text())
                .then(text => setContent(text))
                .catch(err => console.error("Failed to load markdown:", err));
        }
    }, [post]);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-lime-200 transition-colors duration-300 relative overflow-hidden font-sans">
            <BlogPostJsonLd post={post} />
            
            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1.5 bg-lime-500 z-[100] origin-left"
                style={{ scaleX }}
            />

            {/* Background Decorative Blobs */}
            <div className="absolute top-[-100px] left-[10%] w-[600px] h-[600px] bg-pink-300/30 dark:bg-pink-900/30 rounded-full blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>
            <div className="absolute top-[0px] left-[-100px] w-[500px] h-[500px] bg-purple-300/30 dark:bg-purple-900/30 rounded-full blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>
            <div className="absolute top-[-50px] left-[30%] w-[400px] h-[400px] bg-orange-300/20 dark:bg-orange-900/20 rounded-full blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>

            <div className="max-w-6xl mx-auto px-6 sm:px-8 pt-24 pb-32 relative z-10 flex flex-col">
                
                {/* Main Content Area */}
                <main className="flex-1 w-full min-w-0">
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white font-medium mb-12 transition-colors"
                    >
                        <ArrowLeft size={16} />
                        Back to Blog
                    </Link>

                    <header className="mb-12">
                        <h1 className="font-sans font-bold text-5xl md:text-7xl text-slate-950 dark:text-white mb-6 leading-tight tracking-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center gap-2 text-slate-500 font-medium text-xs sm:text-sm mb-6">
                            <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
                            <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                            <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {post.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-[#a3e635] text-slate-950 font-medium text-xs rounded-full border border-slate-900">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </header>

                    {/* Markdown Content Container */}
                    <div className="relative rounded-[28px] border-[3px] border-slate-900 dark:border-slate-100 bg-white dark:bg-slate-900 p-8 md:p-12 lg:p-16 shadow-[8px_8px_0px_0px_#1e293b] dark:shadow-[8px_8px_0px_0px_#f1f5f9]">
                        
                        {/* Decorative flower shape (optional/subtle) */}
                        <div className="absolute -top-10 -right-10 opacity-30 pointer-events-none z-[-1] hidden md:block">
                           <img src="/shapes/shape-81.svg" alt="" className="w-32 h-32 blur-sm" />
                        </div>

                        <div className="prose prose-lg dark:prose-invert prose-headings:font-heading prose-headings:text-slate-900 dark:prose-headings:text-white prose-a:text-lime-600 dark:prose-a:text-lime-400 hover:prose-a:text-lime-700 prose-img:rounded-2xl prose-img:border-2 prose-img:border-slate-200 dark:prose-img:border-slate-800 max-w-none prose-pre:p-0 prose-pre:bg-transparent prose-pre:border-0 prose-code:font-mono">
                            <ReactMarkdown 
                                remarkPlugins={[remarkGfm]}
                                components={{
                                    code({node, inline, className, children, ...props}: any) {
                                        const match = /language-(\w+)/.exec(className || '')
                                        return !inline && match ? (
                                            <div className="rounded-xl overflow-hidden border-2 border-slate-800 shadow-lg my-8">
                                                <div className="flex items-center px-4 py-2 bg-slate-900 border-b border-slate-800">
                                                    <div className="flex gap-1.5">
                                                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                                        <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                                                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                                    </div>
                                                    <div className="ml-4 text-xs font-mono text-slate-400">{match[1]}</div>
                                                </div>
                                                <SyntaxHighlighter
                                                    {...props}
                                                    children={String(children).replace(/\n$/, '')}
                                                    style={vscDarkPlus}
                                                    language={match[1]}
                                                    PreTag="div"
                                                    customStyle={{ margin: 0, padding: '1.5rem', background: '#0f172a' }}
                                                />
                                            </div>
                                        ) : (
                                            <code {...props} className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm font-mono border border-slate-200 dark:border-slate-700">
                                                {children}
                                            </code>
                                        )
                                    }
                                }}
                            >
                                {content || 'Loading content...'}
                            </ReactMarkdown>
                        </div>
                    </div>
                    
                    {/* Article Footer */}
                    <div className="mt-16 rounded-[28px] border-[3px] border-slate-900 dark:border-slate-100 bg-white dark:bg-slate-900 p-8 shadow-[6px_6px_0px_0px_#1e293b] dark:shadow-[6px_6px_0px_0px_#f1f5f9] text-center relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="font-heading text-3xl text-slate-900 dark:text-white mb-4">Enjoyed this post?</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
                                Check out my other articles or read this directly on Hashnode.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <a 
                                    href={post.hashnodeUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="px-6 py-3 rounded-full border border-slate-900 font-medium text-sm bg-slate-900 text-white transition-transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_#a3e635] dark:shadow-[4px_4px_0px_0px_#a3e635]"
                                >
                                    To Hashnode <ArrowUpRight size={16} />
                                </a>
                                <button 
                                    onClick={handleCopyLink}
                                    className="px-6 py-3 rounded-full border border-slate-900 font-medium text-sm bg-white text-slate-900 transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_#1e293b] dark:shadow-[4px_4px_0px_0px_#f1f5f9]"
                                >
                                    {copied ? (
                                        <><Check size={16} className="text-green-600" /> Copied!</>
                                    ) : (
                                        <><Copy size={16} /> Copy link</>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </main>

            </div>
        </div>
    );
};

export default BlogPost;

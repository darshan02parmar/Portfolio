import { useState, useEffect, type ComponentPropsWithoutRef } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { blogs } from "../data/blogs";
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Clock,
  Briefcase,
} from "lucide-react";
import FloatingShape from "./FloatingShape";
import BlogPostJsonLd from "./seo/BlogPostJsonLd";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import vscDarkPlus from "react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus.js";
import multilingualSupportContent from "../../public/posts/adding-multilingual-support-to-nextjs-with-i18n.md?raw";

type MarkdownCodeProps = ComponentPropsWithoutRef<"code"> & {
  inline?: boolean;
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogs.find((b) => b.slug === slug);
  const initialContent =
    post?.slug === "adding-multilingual-support-to-nextjs-with-i18n"
      ? multilingualSupportContent
      : "";
  const [content, setContent] = useState(initialContent);
  const showMorePosts = false;

  // Reading progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (post?.contentPath && !initialContent) {
      fetch(post.contentPath)
        .then((res) => res.text())
        .then((text) => setContent(text))
        .catch((err) => console.error("Failed to load markdown:", err));
    }
  }, [post, initialContent]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-lime-200 transition-colors duration-300 relative overflow-hidden font-sans">
      <BlogPostJsonLd post={post} />

      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-lime-500 z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Background Decorative Blob (Matched to Home) */}
      <img
        src="/gr1.png"
        alt="spinning blob"
        className="images glow absolute left-[-85px] top-[-95px] z-0 h-[400px] w-[400px] animate-spin animate-duration-[40000ms] animate-infinite animate-ease-in-out opacity-80 dark:opacity-40 pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 pt-16 md:pt-20 pb-24 relative z-10 flex flex-col">
        {/* Main Content Area */}
        <main className="flex-1 w-full min-w-0">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white font-medium mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          <header className="mb-8">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 text-slate-950 dark:text-white tracking-tight leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-2 text-slate-500 font-medium text-xs sm:text-sm mb-4">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} /> {post.date}
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-400"></span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} /> {post.readTime}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[#a3e635] text-slate-950 font-medium text-xs rounded-full border border-slate-900"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Markdown Content Container */}
          <div className="relative rounded-[28px] border-[3px] border-slate-900 dark:border-slate-100 bg-white dark:bg-slate-900 p-6 md:p-10 lg:p-12 shadow-[8px_8px_0px_0px_#1e293b] dark:shadow-[8px_8px_0px_0px_#f1f5f9]">
            {/* Floating Shape peeking from behind the Post Border */}
            <FloatingShape
              shapeUrl="/shapes/shape-81.svg"
              directionClass="absolute -right-4 md:-right-12 top-[-20px] md:top-[-60px] z-[-1] pointer-events-none opacity-80"
              amplitude={[60, 15, 15]}
              speed={0.12}
            />

            {/* Static decorative background behind the content block */}
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[140%] md:w-[120%] h-auto aspect-square max-h-[1200px] opacity-50 dark:opacity-20 pointer-events-none z-[-1]">
              <img
                src="/background/image.png"
                alt=""
                className="w-full h-full object-cover blur-[40px] mix-blend-multiply dark:mix-blend-screen"
              />
            </div>

            <div className="prose md:prose-lg dark:prose-invert prose-headings:font-heading prose-headings:text-slate-900 dark:prose-headings:text-white prose-a:text-lime-600 dark:prose-a:text-lime-400 hover:prose-a:text-lime-700 prose-img:rounded-2xl prose-img:border-2 prose-img:border-slate-200 dark:prose-img:border-slate-800 max-w-none prose-pre:p-0 prose-pre:bg-transparent prose-pre:border-0 prose-code:font-mono">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  code({
                    inline,
                    className,
                    children,
                    ...props
                  }: MarkdownCodeProps) {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                      <div className="rounded-xl overflow-hidden border-2 border-slate-800 shadow-lg my-8">
                        <div className="flex items-center px-4 py-2 bg-slate-900 border-b border-slate-800">
                          <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                          </div>
                          <div className="ml-4 text-xs font-mono text-slate-400">
                            {match[1]}
                          </div>
                        </div>
                        <SyntaxHighlighter
                          children={String(children).replace(/\n$/, "")}
                          style={vscDarkPlus}
                          language={match[1]}
                          PreTag="div"
                          customStyle={{
                            margin: 0,
                            padding: "1.5rem",
                            background: "#0f172a",
                          }}
                        />
                      </div>
                    ) : (
                      <code
                        {...props}
                        className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm font-mono border border-slate-200 dark:border-slate-700 break-words"
                      >
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {content || "Loading content..."}
              </ReactMarkdown>
            </div>
          </div>

          {/* Article Footer - CTA */}
          <div className="mt-16 rounded-[28px] border-[3px] border-slate-900 dark:border-slate-100 bg-white dark:bg-slate-900 py-6 px-6 md:py-8 md:px-12 shadow-[8px_8px_0px_0px_#1e293b] dark:shadow-[8px_8px_0px_0px_#f1f5f9] text-center relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-heading text-3xl md:text-4xl text-slate-900 dark:text-white mb-2">
                Enjoyed this post?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-lg mx-auto text-base md:text-lg leading-relaxed">
                If you found this useful, there's more coming.
                <br />I write about what I learn, build, and figure out along
                the way.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://github.com/darshan02parmar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full border-[2px] border-slate-900 font-medium text-sm bg-slate-900 text-white transition-transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_#a3e635] dark:shadow-[4px_4px_0px_0px_#a3e635]"
                >
                  <Briefcase size={16} /> See my work
                </a>
                <a
                  href={post.hashnodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full border-[2px] border-slate-900 font-medium text-sm bg-white text-slate-900 transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_#1e293b] dark:shadow-[4px_4px_0px_0px_#f1f5f9]"
                >
                  Follow on Hashnode <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* More Posts Section - Hidden for now */}
          {showMorePosts && (
            <div className="mt-24">
              <h3 className="font-heading text-3xl text-slate-900 dark:text-white mb-8">
                More posts
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Dummy Card 1 */}
                <Link
                  to="/blog"
                  className="h-full flex flex-col rounded-2xl border-[3px] border-slate-900 dark:border-slate-100 bg-white dark:bg-slate-900 p-6 shadow-[6px_6px_0px_0px_#1e293b] dark:shadow-[6px_6px_0px_0px_#f1f5f9] transition-transform hover:-translate-y-1"
                >
                  <div className="flex items-center gap-2 text-slate-500 font-medium text-xs mb-3">
                    <Calendar size={14} />
                    <span>Jan 15, 2025</span>
                  </div>
                  <h4 className="text-xl font-bold font-sans text-slate-900 dark:text-white mb-3 leading-tight">
                    Integrating Formbricks for User Feedback in CodeStash
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed line-clamp-3 mt-auto">
                    Learn how to add in-app user feedback surveys using
                    Formbricks to gather insights about AI-generated content and
                    improve user experience in your Next.js applications.
                  </p>
                </Link>

                {/* Dummy Card 2 */}
                <Link
                  to="/blog"
                  className="h-full flex flex-col rounded-2xl border-[3px] border-slate-900 dark:border-slate-100 bg-white dark:bg-slate-900 p-6 shadow-[6px_6px_0px_0px_#1e293b] dark:shadow-[6px_6px_0px_0px_#f1f5f9] transition-transform hover:-translate-y-1"
                >
                  <div className="flex items-center gap-2 text-slate-500 font-medium text-xs mb-3">
                    <Calendar size={14} />
                    <span>Dec 15, 2024</span>
                  </div>
                  <h4 className="text-xl font-bold font-sans text-slate-900 dark:text-white mb-3 leading-tight">
                    Adding Rate Limiting to Express API with Unkey
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed line-clamp-3 mt-auto">
                    Learn how to implement rate limiting in your Express API
                    using Unkey's ratelimiter to prevent abuse and manage
                    resource usage effectively.
                  </p>
                </Link>
              </div>

              <div className="mt-12 text-center">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-900 bg-slate-900 text-white px-6 py-3 font-medium text-sm transition-transform hover:-translate-y-0.5 shadow-[4px_4px_0px_0px_#a3e635]"
                >
                  <ArrowLeft size={16} /> All posts
                </Link>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default BlogPost;

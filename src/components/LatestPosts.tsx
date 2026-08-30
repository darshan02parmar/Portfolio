import { Link } from "react-router-dom";
import { blogs } from "../data/blogs";
import { ExternalLink } from "lucide-react";

const LatestPosts = () => {
  // Show top 3 or recent blogs
  const recentBlogs = blogs.slice(0, 3);

  return (    <section id="blog" className="mb-24 scroll-mt-20 px-4 md:px-8 mt-24">
      <h2 className="projects-title font-heading text-4xl mb-12 text-slate-900 dark:text-slate-100 relative inline-block">
        Latest Posts
        <span className="absolute -bottom-2 -left-2 -right-6 h-6 bg-lime-300/40 dark:bg-lime-900/40 blur-md -z-10 rounded-full glow-lite"></span>
      </h2>

      <div className="flex flex-col gap-6">
        {recentBlogs.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.slug}`}
            className="group flex flex-col justify-between rounded-[32px] border-[3px] border-slate-900 dark:border-slate-100 bg-white dark:bg-slate-900 p-8 shadow-[6px_6px_0px_0px_#1e293b] dark:shadow-[6px_6px_0px_0px_#f1f5f9] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            <div>
              <h3 className="font-heading text-2xl text-slate-900 dark:text-white mb-3 group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">
                {post.description}
              </p>
            </div>
            <div className="text-slate-500 font-mono text-xs flex items-center gap-3">
              <span>{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-slate-400"></span>
              <span>{post.readTime}</span>
            </div>
          </Link>
        ))}

        <Link
          to="/blog"
          className="mt-4 flex items-center justify-center gap-2 w-full rounded-full border-[3px] border-slate-900 dark:border-slate-100 bg-white dark:bg-slate-900 px-8 py-5 font-heading text-xl text-slate-900 dark:text-white shadow-[4px_4px_0px_0px_#1e293b] dark:shadow-[4px_4px_0px_0px_#f1f5f9] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          View All Posts <ExternalLink size={20} />
        </Link>
      </div>
    </section>
  );
};

export default LatestPosts;

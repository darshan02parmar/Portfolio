import JsonLd from './JsonLd';
import { type BlogPostMeta } from '../../data/blogs';

interface BlogPostJsonLdProps {
  post: BlogPostMeta;
}

const BlogPostJsonLd = ({ post }: BlogPostJsonLdProps) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://darshan-parmar.vercel.app/blog/${post.slug}`
    },
    "headline": post.title,
    "description": post.description,
    "author": {
      "@type": "Person",
      "name": "Darshan Parmar",
      "url": "https://darshan-parmar.vercel.app/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Darshan Parmar",
      "logo": {
        "@type": "ImageObject",
        "url": "https://darshan-parmar.vercel.app/gr3.png"
      }
    },
    "datePublished": new Date(post.date).toISOString(), // Roughly parsing "Aug 08, 2026" works well enough for ISO in most browsers
    "keywords": post.tags.join(', ')
  };

  return <JsonLd data={data} />;
};

export default BlogPostJsonLd;

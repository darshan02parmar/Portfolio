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
    "url": `https://darshan-parmar.vercel.app/blog/${post.slug}`,
    "author": {
      "@type": "Person",
      "name": "Darshan Parmar",
      "url": "https://darshan-parmar.vercel.app/"
    },
    "publisher": {
      "@type": "Person",
      "name": "Darshan Parmar",
      "url": "https://darshan-parmar.vercel.app/"
    },
    "datePublished": "2026-08-08",
    "keywords": post.tags.join(', ')
  };

  return <JsonLd data={data} />;
};

export default BlogPostJsonLd;

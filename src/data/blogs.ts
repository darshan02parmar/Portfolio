export interface BlogPostMeta {
  id: string;
  slug: string;
  title: string;
  series: string;
  description: string;
  tags: string[];
  date: string;
  readTime: string;
  hashnodeUrl: string;
  contentPath?: string;
  sections: { id: string; title: string }[];
}

export const blogs: BlogPostMeta[] = [
  {
    id: "1",
    slug: "adding-multilingual-support-to-nextjs-with-i18n",
    title: "Adding Multilingual Support to Next.js with i18n",
    series: "BUILD LOG #001",
    description:
      "Step-by-step guide to implementing i18n in Next.js with locale routing, TypeScript, accessibility features, and SEO best practices for multilingual sites.",
    tags: ["Next.js", "TypeScript", "i18n", "SEO", "Internationalization"],
    date: "Aug 08, 2026",
    readTime: "13 min read",
    hashnodeUrl:
      "https://darshan-builds.hashnode.dev/adding-multilingual-support-to-nextjs-with-i18n",
    contentPath: "/posts/adding-multilingual-support-to-nextjs-with-i18n.md",
    sections: [
      { id: "introduction", title: "Introduction" },
      { id: "architecture", title: "Architecture" },
      { id: "locale-setup", title: "Locale Setup" },
      { id: "routing", title: "Routing" },
      { id: "translations", title: "Translations" },
      { id: "seo", title: "SEO" },
      { id: "#internationalization", title: "Internationalization" },
      { id: "typescript", title: "TypeScript" },
      { id: "debugging", title: "Debugging" },
      { id: "lessons-learned", title: "Lessons Learned" },
      { id: "references", title: "References" },
    ],
  },
];

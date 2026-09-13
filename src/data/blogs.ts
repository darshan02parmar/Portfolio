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
  {
    id: "2",
    slug: "how-to-structure-a-full-stack-next-js-project-for-production",
    title: "How to Structure a Full-Stack Next.js Project for Production",
    series: "BUILD LOG #002",
    description:
      "A production-ready project layout for full-stack Next.js apps, covering routing, server/client boundaries, services, configuration, and scalable architecture.",
    tags: ["Next.js", "Architecture", "Full-Stack", "TypeScript", "Production"],
    date: "Sep 13, 2026",
    readTime: "8 min read",
    hashnodeUrl:
      "https://darshan-builds.hashnode.dev/how-to-structure-a-full-stack-next-js-project-for-production",
    contentPath:
      "/posts/how-to-structure-a-full-stack-next-js-project-for-production.md",
    sections: [
      { id: "introduction", title: "Introduction" },
      { id: "architecture", title: "Architecture" },
      { id: "project-structure", title: "Project Structure" },
      { id: "routes", title: "Routes" },
      { id: "services", title: "Services" },
      { id: "config", title: "Configuration" },
      { id: "security", title: "Security" },
      { id: "observability", title: "Observability" },
    ],
  },
];

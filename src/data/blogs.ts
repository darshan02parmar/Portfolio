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
    readTime: "15 min read",
    hashnodeUrl:
      "https://darshan-builds.hashnode.dev/how-to-structure-a-full-stack-next-js-project-for-production",
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
  {
    id: "3",
    slug: "ai-design-to-production-ready-nextjs",
    title: "AI Design to Production-Ready Next.js",
    series: "BUILD LOG #003",
    description:
      "From product idea to a polished production-ready app: balancing AI-driven design decisions, product thinking, and clean frontend architecture in Next.js.",
    tags: ["AI", "Next.js", "Design", "Production", "Product"],
    date: "Oct 08, 2026",
    readTime: "9 min read",
    hashnodeUrl: "https://darshan-builds.hashnode.dev/ai-design-to-production-ready-nextjs",
    sections: [
      { id: "introduction", title: "Introduction" },
      { id: "design-system", title: "Design System" },
      { id: "product-thinking", title: "Product Thinking" },
      { id: "nextjs-implementation", title: "Next.js Implementation" },
      { id: "ai-workflows", title: "AI Workflows" },
      { id: "shipping", title: "Shipping" },
    ],
  },
];

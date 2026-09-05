import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Sitemap from "vite-plugin-sitemap";
import { blogs } from "./src/data/blogs";
import { projects } from "./src/lib/projects";

const dynamicRoutes = [
  "/blog",
  ...blogs.map((b) => `/blog/${b.slug}`),
  ...projects.map((p) => `/project/${p.id}`),
];

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: "https://darshan-parmar.vercel.app",
      dynamicRoutes,
      exclude: ["/404"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

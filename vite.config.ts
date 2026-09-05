import path from "path";
import { defineConfig, type ConfigEnv } from "vite";
import react from "@vitejs/plugin-react";
import Sitemap from "vite-plugin-sitemap";
import { visualizer } from "rollup-plugin-visualizer";
import { blogs } from "./src/data/blogs";
import { projects } from "./src/lib/projects";

const dynamicRoutes = [
  "/blog",
  ...blogs.map((b) => `/blog/${b.slug}`),
  ...projects.map((p) => `/project/${p.id}`),
];

// https://vite.dev/config/
export default defineConfig((configEnv: ConfigEnv & { ssrBuild?: boolean }) => {
  const { command, ssrBuild = false } = configEnv;

  return ({
  plugins: [
    react(),
    Sitemap({
      hostname: "https://darshan-parmar.vercel.app",
      dynamicRoutes,
      exclude: ["/404"],
    }),
    ...(command === "build" && !ssrBuild
      ? [
          visualizer({
            filename: "dist/bundle-stats.html",
            open: false,
            gzipSize: true,
            brotliSize: true,
            template: "treemap",
          }),
          visualizer({
            filename: "dist/bundle-stats.json",
            open: false,
            gzipSize: true,
            brotliSize: true,
            template: "raw-data",
          }),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  });
});

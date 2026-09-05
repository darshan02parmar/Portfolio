/* eslint-disable react-refresh/only-export-components */
import type { RouteRecord } from "vite-react-ssg";
import { lazy, Suspense, type ReactNode } from "react";
import { AppShell, HomeRoute, PageWrapper } from "./App";
import NotFound from "./components/NotFound";
import { blogs } from "./data/blogs";
import { projects } from "./lib/projects";

const BlogHome = lazy(() => import("./components/BlogHome"));
const BlogPost = lazy(() => import("./components/BlogPost"));
const ProjectDetail = lazy(() => import("./components/ProjectDetail"));

const RouteLoading = () => <div className="min-h-screen" aria-busy="true" />;

const LazyRoute = ({ children }: { children: ReactNode }) => (
  <Suspense fallback={<RouteLoading />}>{children}</Suspense>
);

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <AppShell />,
    children: [
      {
        index: true,
        element: <HomeRoute />,
      },
      {
        path: "project/:id",
        element: <PageWrapper><LazyRoute><ProjectDetail /></LazyRoute></PageWrapper>,
        getStaticPaths: () => projects.map(({ id }) => `project/${id}`),
      },
      {
        path: "blog",
        element: <PageWrapper><LazyRoute><BlogHome /></LazyRoute></PageWrapper>,
      },
      {
        path: "blog/:slug",
        element: <PageWrapper><LazyRoute><BlogPost /></LazyRoute></PageWrapper>,
        getStaticPaths: () => blogs.map(({ slug }) => `blog/${slug}`),
      },
      { path: "*", element: <PageWrapper><NotFound /></PageWrapper> },
    ],
  },
];

export default routes;

import type { RouteRecord } from "vite-react-ssg";
import { AppShell, HomeRoute, PageWrapper } from "./App";
import BlogHome from "./components/BlogHome";
import BlogPost from "./components/BlogPost";
import NotFound from "./components/NotFound";
import ProjectDetail from "./components/ProjectDetail";
import { blogs } from "./data/blogs";
import { projects } from "./lib/projects";

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
        element: <PageWrapper><ProjectDetail /></PageWrapper>,
        getStaticPaths: () => projects.map(({ id }) => `project/${id}`),
      },
      {
        path: "blog",
        element: <PageWrapper><BlogHome /></PageWrapper>,
      },
      {
        path: "blog/:slug",
        element: <PageWrapper><BlogPost /></PageWrapper>,
        getStaticPaths: () => blogs.map(({ slug }) => `blog/${slug}`),
      },
      { path: "*", element: <PageWrapper><NotFound /></PageWrapper> },
    ],
  },
];

export default routes;

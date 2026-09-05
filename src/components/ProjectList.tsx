import { Link } from "react-router-dom";
import { LuExternalLink as LinkIcon, LuInfo as InfoIcon } from "react-icons/lu";
import { FaCodeBranch as CodeIcon } from "react-icons/fa6";
import { VscGitStash as CodeStashIcon } from "react-icons/vsc";
import AOSComponent from "@/lib/aos";
import { projects } from "@/lib/projects";
import TiltCard from "./TiltCard";

export default function Projects() {
  return (
    <AOSComponent>
      <section
        id="projects"
        className="relative z-10 mt-32 p-6 text-slate-900 dark:text-slate-100"
      >
        <h2
          data-aos="fade-left"
          className="projects-title motion-preset-blur-right mb-8 font-heading text-4xl"
        >
          Selected Projects
        </h2>

        <div id="projects-container" className="mb-6 flex flex-col gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
            >
              <TiltCard>
                <div className="wrapper flex flex-col gap-4 rounded-[30px] border-[3px] border-slate-900 dark:border-slate-100 p-6 shadow-[4px_4px_0px_0px_#1e293b] dark:shadow-[4px_4px_0px_0px_#f1f5f9] bg-white/10 dark:bg-slate-900 backdrop-blur-sm">
                  <h3 className="flex gap-4 font-heading text-3xl text-slate-900 dark:text-slate-100">
                    {project.title}
                    {project.id === "wanderlust" && (
                      <CodeStashIcon className="text-green-600 dark:text-green-400" />
                    )}
                  </h3>

                  <div className="flex flex-col gap-2 text-lg md:flex-row md:gap-4">
                    {project.deployedUrl && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.deployedUrl}
                        className="flex items-center gap-2 rounded-[30px] border-[2px] border-slate-900 bg-slate-900 dark:border-[#50e0b3] dark:bg-[#0f172a] dark:text-[#50e0b3] px-6 py-1 font-medium text-white shadow-[2px_2px_0px_0px_#84cc16] dark:shadow-[2px_2px_0px_0px_#50e0b3] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:bg-slate-800 dark:hover:bg-[#50e0b3] dark:hover:text-[#0f172a]"
                      >
                        Deployed site
                        <LinkIcon className="inline h-[20px] w-[20px]" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.githubUrl}
                        className="flex items-center gap-2 rounded-[30px] border-[2px] border-slate-900 dark:border-slate-100 px-6 py-1 font-medium shadow-[2px_2px_0px_0px_#1e293b] dark:shadow-[2px_2px_0px_0px_#f1f5f9] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:bg-slate-100 dark:hover:bg-white dark:hover:text-[#0f172a] dark:text-slate-100"
                      >
                        Source code
                        <CodeIcon className="inline h-[17px] w-[17px]" />
                      </a>
                    )}

                    <Link
                      to={`/project/${project.id}`}
                      className="flex items-center gap-2 rounded-[30px] border-[2px] border-slate-900 dark:border-slate-100 bg-lime-400 dark:bg-lime-500 dark:text-slate-900 px-6 py-1 font-medium shadow-[2px_2px_0px_0px_#1e293b] dark:shadow-[2px_2px_0px_0px_#f1f5f9] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:bg-lime-500 dark:hover:bg-lime-400"
                    >
                      Info
                      <InfoIcon className="inline h-[20px] w-[20px]" />
                    </Link>
                  </div>
                  <div>
                    <p className="mb-2 text-xl text-slate-700 dark:text-slate-300">
                      {project.description}
                    </p>
                    <div className="badge-container">
                      {project.badges.map((badge, bIndex) => (
                        <img key={bIndex} src={badge.src} alt={badge.alt} />
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>

        <a
          href="https://github.com/darshan02parmar"
          target="_blank"
          rel="noopener noreferrer"
          className="wrapper flex h-16 items-center justify-center gap-2 rounded-[30px] border-[3px] border-slate-900 dark:border-slate-100 text-center text-[20px] font-medium shadow-[4px_4px_0px_0px_#1e293b] dark:shadow-[4px_4px_0px_0px_#f1f5f9] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none bg-white dark:bg-slate-900 dark:text-slate-100"
        >
          More on github
          <LinkIcon />
        </a>
      </section>
    </AOSComponent>
  );
}

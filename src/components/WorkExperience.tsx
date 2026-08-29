"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdWork as WorkIcon } from "react-icons/md";
import { BsBuildingsFill as CompanyIcon } from "react-icons/bs";
import { FaLocationDot as LocationIcon } from "react-icons/fa6";
import { FaRegCalendarAlt as DateIcon } from "react-icons/fa";
import AOSComponent from "@/lib/aos";
import TiltCard from "./TiltCard";

export default function WorkExperience() {
  const [showAll, setShowAll] = useState(false);

  const bulletClass =
    "flex gap-3 text-lg bg-white/80 dark:bg-slate-900/80 rounded-lg shadow-md px-4 py-2 hover:border-l-4 border-slate-700 dark:border-slate-300 transition-all duration-100";

  const experienceCard = (content: React.ReactNode, key: string) => (
    <motion.div
      key={key}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      data-aos="fade-left"
    >
      <TiltCard>
        <div className="wrapper relative flex flex-col gap-4 overflow-hidden rounded-[30px] border-[3px] border-slate-900 bg-white/10 p-6 shadow-[4px_4px_0px_0px_#1e293b] dark:border-slate-100 dark:bg-slate-900 dark:shadow-[4px_4px_0px_0px_#f1f5f9]">
          <img
            src="/background/br1.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20 dark:opacity-10"
          />
          <div className="relative z-10 flex flex-col gap-4">{content}</div>
        </div>
      </TiltCard>
    </motion.div>
  );

  return (
    <AOSComponent>
      <section
        id="work-experience"
        className="relative z-10 mt-32 2xl:mt-52 p-6 text-slate-900 dark:text-slate-100"
      >
        <h3
          data-aos="fade-left"
          className="work-title motion-preset-blur-right mb-8 font-heading text-4xl flex items-center gap-2"
        >
          <WorkIcon />
          Work Experience
        </h3>

        <div id="experience-container" className="mb-6 flex flex-col gap-6">
          {experienceCard(
            <>
              <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-heading text-3xl text-slate-900 dark:text-slate-100">
                      Software Developer
                    </h3>
                    {/* <span className="inline-flex items-center gap-2 rounded-full border-2 border-lime-700 bg-lime-300 px-3 py-1 text-xs font-black uppercase tracking-wide text-slate-950">
                      <span
                        className="h-2 w-2 animate-pulse rounded-full bg-lime-700"
                        aria-hidden="true"
                      />
                      Current
                    </span> */}
                  </div>
                  <p className="mt-1 text-lg font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                    <CompanyIcon />
                    GetNorthPath · SDE Intern
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm mt-2 flex items-center gap-2 text-slate-600 dark:text-slate-400 md:text-base lg:text-right lg:flex-row-reverse">
                    <DateIcon />
                    Aug 2026 - Present
                  </p>
                  <p className="mt-1 text-md lg:self-end font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2 lg:text-right lg:flex-row-reverse">
                    <LocationIcon />
                    Remote
                  </p>
                </div>
              </div>

              <ul className="flex flex-col gap-3 text-slate-700 dark:text-slate-300">
                <li className={bulletClass}>
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-900 dark:bg-slate-100"></span>
                  <span>
                    Building and shipping production software at GetNorthPath
                  </span>
                </li>
                <li className={bulletClass}>
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-900 dark:bg-slate-100"></span>
                  <span>
                    Collaborating with the engineering team on product features
                    and improvements
                  </span>
                </li>
                <li className={bulletClass}>
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-900 dark:bg-slate-100"></span>
                  <span>
                    Developing with modern tools, thoughtful interfaces, and
                    reliable workflows
                  </span>
                </li>
                <li className={bulletClass}>
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-900 dark:bg-slate-100"></span>
                  <span>
                    Contributing through GitHub, code reviews, debugging, and
                    continuous improvements
                  </span>
                </li>
              </ul>
            </>,
            "current-role",
          )}

          <AnimatePresence initial={false}>
            {showAll && (
              <>
                <motion.div
                  className="mx-auto flex h-10 origin-top flex-col items-center"
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ scaleY: 1, opacity: 1 }}
                  exit={{ scaleY: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  aria-hidden="true"
                >
                  <div className="h-7 w-0.5 bg-lime-500" />
                  <div className="h-3 w-3 rounded-full border-2 border-slate-900 bg-lime-400 dark:border-slate-100" />
                </motion.div>
                {experienceCard(
                  <>
                    <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        <h3 className="font-heading text-3xl text-slate-900 dark:text-slate-100">
                          Open-Source Contributor
                        </h3>
                        <p className="mt-1 text-lg font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                          <CompanyIcon />
                          GSSoC’25
                        </p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="text-sm mt-2 flex items-center gap-2 text-slate-600 dark:text-slate-400 md:text-base lg:text-right lg:flex-row-reverse">
                          <DateIcon />
                          2025
                        </p>
                        <p className="mt-1 text-md lg:self-end font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2 lg:text-right lg:flex-row-reverse">
                          <LocationIcon />
                          Remote
                        </p>
                      </div>
                    </div>

                    <ul className="flex flex-col gap-3 text-slate-700 dark:text-slate-300">
                      <li className={bulletClass}>
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-900 dark:bg-slate-100" />
                        <span>
                          Contributed to multiple open-source repositories
                          during GirlScript Summer of Code (GSSoC’25)
                        </span>
                      </li>
                      <li className={bulletClass}>
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-900 dark:bg-slate-100" />
                        <span>
                          Worked on real-world features, bug fixes, and
                          enhancements across community projects
                        </span>
                      </li>
                      <li className={bulletClass}>
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-900 dark:bg-slate-100" />
                        <span>
                          Collaborated using Git, GitHub, and pull-request
                          workflows
                        </span>
                      </li>
                      <li className={bulletClass}>
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-900 dark:bg-slate-100" />
                        <span>
                          Recognized among the top 1% contributors based on
                          consistency and impact
                        </span>
                      </li>
                    </ul>
                  </>,
                  "open-source-role",
                )}
              </>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-4 flex flex-col items-center">
          <div className="h-8 w-px border-l-2 border-dashed border-slate-300 dark:border-slate-600" />
          <button
            type="button"
            onClick={() => setShowAll((visible) => !visible)}
            aria-expanded={showAll}
            className="flex items-center gap-3 text-sm font-semibold text-slate-900 transition-colors hover:text-lime-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 focus-visible:ring-offset-2 dark:text-slate-100 dark:hover:text-lime-400"
          >
            <span
              className="h-3 w-3 rounded-full border-2 border-slate-900 bg-lime-400 dark:border-slate-100"
              aria-hidden="true"
            />
            {showAll ? "Show less" : "View all experience"}
          </button>
        </div>
      </section>
    </AOSComponent>
  );
}

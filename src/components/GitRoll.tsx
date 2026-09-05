'use client';

import AOSComponent from '@/lib/aos';

export default function GitRoll({ theme }: { theme: 'light' | 'dark' }) {
    return (
        <AOSComponent>
            <section
                id="gitroll"
                className="mt-32 flex max-w-[630px] flex-col gap-6 p-6 pb-0 text-slate-900 dark:text-slate-100 relative z-10"
            >
                <h2
                    className="tech-stack-title mb-4 font-heading text-4xl"
                    data-aos="fade-left"
                >
                    GitRoll Profile
                </h2>

                <a
                    href="https://gitroll.io/profile/uiFTdl9Q6LlQiYvD1CGbe8avuasm1"
                    target="_blank"
                    className="group relative"
                    data-aos="fade-left"
                >
                    <img
                        src={`https://gitroll.io/api/badges/profiles/v1/uiFTdl9Q6LlQiYvD1CGbe8avuasm1?theme=${theme}`}
                        className="wrapper w-full rounded-[30px] border-[3px] border-slate-900 dark:border-slate-100 shadow-[4px_4px_0px_0px_#1e293b] dark:shadow-[4px_4px_0px_0px_#f1f5f9] transition-all duration-200 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none bg-white dark:bg-slate-900"
                        alt="GitRoll Profile Badge"
                    />
                </a>
            </section>
        </AOSComponent>
    );
}

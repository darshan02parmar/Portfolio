'use client';

import AOSComponent from '@/lib/aos';
import { GitHubCalendar } from 'react-github-calendar';

export default function Github({ theme }: { theme: 'light' | 'dark' }) {
    const years = [2026, 2025, 2024];

    return (
        <AOSComponent>
            <section
                id="github"
                className="relative z-10 mt-32 flex max-w-[630px] flex-col gap-6 p-6 pb-0 text-slate-900 dark:text-slate-100"
            >
                <h3
                    className="gitroll-title mb-4 font-heading text-4xl"
                    data-aos="fade-left"
                >
                    Commit History
                </h3>

                <div className="flex flex-col gap-6">
                    {years.map((year) => (
                        <div data-aos="fade-left" key={year}>
                            <div className="disable-scrollbar flex wrapper rounded-[30px] border-[3px] border-slate-900 dark:border-slate-100 p-6 shadow-[4px_4px_0px_0px_#1e293b] dark:shadow-[4px_4px_0px_0px_#f1f5f9] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none bg-white dark:bg-slate-900">
                                <GitHubCalendar
                                    username="darshan02parmar"
                                    colorScheme={theme}
                                    year={year}
                                    transformData={(contributions) => contributions.slice().reverse()}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </AOSComponent>
    );
}

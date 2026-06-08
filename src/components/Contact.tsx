'use client';

import AOSComponent from '@/lib/aos';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function Contact({ onOpenHints }: { onOpenHints?: () => void }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    async function sendEmail() {
        if (!name || !message || !email) {
            toast.error('Please fill in all fields');
            return;
        }

        const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '6693c76e-2577-422e-a264-716bd7eb6091';

        const emailPromise = axios
            .post('https://api.web3forms.com/submit', {
                access_key: accessKey,
                name,
                email,
                message,
                subject: `New Message from ${name} (Portfolio)`,
            })
            .then((res) => {
                if (res.data.success) {
                    setName('');
                    setEmail('');
                    setMessage('');
                } else {
                    throw new Error(res.data.message || 'Submission failed');
                }
            });

        toast.promise(emailPromise, {
            loading: 'Sending email...',
            success: 'Thank you for contacting me!',
            error: (err) => err?.message || 'Something went wrong while sending email :(',
        });
    }

    return (
        <AOSComponent>
            <section
                id="contact"
                className="relative z-10 mt-32 flex flex-col gap-6 px-6 pt-6 text-slate-900 dark:text-slate-100 pb-32"
            >
                <h3
                    className="contact-title mb-4 font-heading text-4xl"
                    data-aos="fade-left"
                >
                    Contact me
                </h3>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        sendEmail();
                    }}
                    className="flex flex-col gap-6 text-xl placeholder:text-xl"
                >
                    <div data-aos="fade-left" className="w-full">
                        <input
                            className="wrapper w-full rounded-[30px] border-[3px] border-slate-900 dark:border-slate-100 p-6 shadow-[4px_4px_0px_0px_#1e293b] dark:shadow-[4px_4px_0px_0px_#f1f5f9] transition-all duration-200 placeholder:text-xl placeholder:text-slate-800 dark:placeholder:text-slate-400 hover:translate-x-1 hover:translate-y-1 hover:shadow-none focus:translate-x-1 focus:translate-y-1 focus:shadow-none focus:outline-none md:h-20 bg-white dark:bg-slate-900 dark:text-white"
                            required
                            placeholder="Your name"
                            id="name"
                            onChange={(e) => setName(e.target.value)}
                            autoComplete="name"
                            value={name}
                        />
                    </div>
                    <div data-aos="fade-left" className="w-full">
                        <input
                            className="wrapper w-full rounded-[30px] border-[3px] border-slate-900 dark:border-slate-100 p-6 shadow-[4px_4px_0px_0px_#1e293b] dark:shadow-[4px_4px_0px_0px_#f1f5f9] transition-all duration-200 placeholder:text-xl placeholder:text-slate-800 dark:placeholder:text-slate-400 hover:translate-x-1 hover:translate-y-1 hover:shadow-none focus:translate-x-1 focus:translate-y-1 focus:shadow-none focus:outline-none md:h-20 bg-white dark:bg-slate-900 dark:text-white"
                            required
                            placeholder="Your email"
                            id="email"
                            type="email"
                            autoComplete="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <div data-aos="fade-left" className="w-full">
                        <textarea
                            className="wrapper w-full rounded-[30px] border-[3px] border-slate-900 dark:border-slate-100 p-6 shadow-[4px_4px_0px_0px_#1e293b] dark:shadow-[4px_4px_0px_0px_#f1f5f9] transition-all duration-200 placeholder:text-xl placeholder:text-slate-800 dark:placeholder:text-slate-400 hover:translate-x-1 hover:translate-y-1 hover:shadow-none focus:translate-x-1 focus:translate-y-1 focus:shadow-none focus:outline-none md:h-40 bg-white dark:bg-slate-900 dark:text-white"
                            required
                            placeholder="Your message"
                            id="message"
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                        />
                    </div>

                    <button
                        type="submit"
                        className="max-w-[600px] rounded-[30px] border-[2px] border-slate-900 bg-slate-900 dark:border-[#50e0b3] dark:bg-[#0f172a] dark:text-[#50e0b3] px-6 py-4 text-sm font-medium text-white shadow-[4px_4px_0px_0px_#84cc16] dark:shadow-[4px_4px_0px_0px_#50e0b3] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:bg-slate-800 dark:hover:bg-[#50e0b3] dark:hover:text-[#0f172a] md:text-xl cursor-pointer"
                    >
                        Send
                    </button>
                </form>

                {onOpenHints && (
                    <button
                        onClick={onOpenHints}
                        className="text-xs text-slate-500 dark:text-slate-400 font-mono hover:text-lime-500 dark:hover:text-lime-400 transition-colors text-left border-none bg-transparent cursor-pointer select-none self-start"
                    >
                        Developer Mode Available 👀<br />
                        <span className="underline underline-offset-2">Try finding the hidden commands...</span>
                    </button>
                )}
            </section>
        </AOSComponent>
    );
}

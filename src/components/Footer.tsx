import { useEffect, useRef, useState } from "react";

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer || isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, [isVisible]);

  const revealClass = isVisible
    ? "translate-y-0 opacity-100"
    : "translate-y-2 opacity-0";

  return (
    <footer
      ref={footerRef}
      className="mt-24 flex flex-col items-center px-6 pb-12 pt-8 text-center"
    >
      <div className="flex items-center justify-center gap-4">
        <span
          aria-hidden="true"
          className={`h-px w-10 origin-center rounded-full bg-lime-500 transition-transform duration-700 ease-out motion-reduce:transition-none sm:w-14 dark:bg-[#50e0b3] ${isVisible ? "scale-x-100" : "scale-x-0"}`}
        />
        <p
          className={`font-sans text-sm font-medium text-slate-800 transition-all duration-500 ease-out motion-reduce:transition-none dark:text-slate-100 sm:text-base ${revealClass}`}
          style={{ transitionDelay: isVisible ? "150ms" : "0ms" }}
        >
          you&apos;ve reached the end
        </p>
        <span
          aria-hidden="true"
          className={`h-px w-10 origin-center rounded-full bg-lime-500 transition-transform duration-700 ease-out motion-reduce:transition-none sm:w-14 dark:bg-[#50e0b3] ${isVisible ? "scale-x-100" : "scale-x-0"}`}
        />
      </div>
      <p
        className={`mt-4 font-mono text-[11px] text-slate-500 transition-all duration-500 ease-out motion-reduce:transition-none dark:text-slate-400 ${revealClass}`}
        style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
      >
        (unless you know a code)
      </p>
      <p
        className={`mt-8 text-xs font-normal text-slate-500 transition-all duration-500 ease-out motion-reduce:transition-none dark:text-slate-400 ${revealClass}`}
        style={{ transitionDelay: isVisible ? "450ms" : "0ms" }}
      >
        © 2026 Darshan Parmar
      </p>
    </footer>
  );
};

export default Footer;

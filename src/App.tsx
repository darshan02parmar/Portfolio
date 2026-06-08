import { useEffect, Suspense, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Sun, Moon } from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';
import { FaGithub as GithubIcon } from 'react-icons/fa';
import { FaLinkedin as LinkedinIcon } from 'react-icons/fa';
import { MdOutgoingMail as MailIcon } from 'react-icons/md';
import { FaXTwitter as TwitterIcon } from 'react-icons/fa6';
import ProjectList from './components/ProjectList';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import ScrollButton from './components/ScrollButton';
import Glow from './components/Glow';
import Github from './components/Github';
import FloatingShape from './components/FloatingShape';
import HeroImage from './components/HeroImage';
import WorkExperience from './components/WorkExperience';
import Footer from './components/Footer';
import GitRoll from './components/GitRoll';
import ProjectDetail from './components/ProjectDetail';
import CommandPalette from './components/CommandPalette';
import MatrixRain from './components/MatrixRain';
import DevSecretsDrawer from './components/DevSecretsDrawer';
import HintModal from './components/HintModal';
import AchievementBadge from './components/AchievementBadge';
import WhoamiTerminal from './components/WhoamiTerminal';
import ConfettiOverlay from './components/ConfettiOverlay';
import DevSandbox from './components/DevSandbox';

import Snowfall from 'react-snowfall';

const SpinningShape = () => (
  <img
    src='/gr1.png'
    alt="spinning blob"
    className="images glow absolute left-[-85px] top-[-95px] z-[-10] h-[400px] w-[400px] animate-spin animate-duration-[40000ms] animate-infinite animate-ease-in-out dark:opacity-40"
  />
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const MouseGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(80, 224, 179, 0.15), transparent 80%)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed inset-0 z-30 opacity-0 dark:opacity-100 transition-opacity duration-300"
    />
  );
};

const Home = ({ theme, onOpenHints }: { theme: 'light' | 'dark'; onOpenHints: () => void }) => {
  return (
    <>
      <aside className="pl-10 pr-6 pt-14 lg:fixed text-slate-900 dark:text-slate-100 lg:w-[35%] lg:pl-32 lg:h-screen lg:overflow-hidden transition-colors duration-300">
        <Suspense fallback={<div>Loading...</div>}>
          <SpinningShape />
        </Suspense>
        <Glow />

        <h1
          className="mt-4 animate-fade-right animate-duration-500 font-heading text-[60px] leading-tight lg:text-[70px] dark:drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]"
          id="my-name"
        >
          Darshan Parmar
        </h1>

        <h2
          className="mt-20 animate-fade-right animate-duration-600 animate-delay-200 font-heading text-[27px] lg:text-[32px]"
          id="profession"
        >
          Fullstack Developer
        </h2>

        <p
          className="mt-4 animate-fade-right animate-duration-700 animate-delay-300 text-xl"
          id="more-info"
        >
          Hello there, I'm Darshan Parmar, and I build full-stack web
          apps with{' '}
          <a
            href="/#tech-stack"
            className="cursor-pointer underline underline-offset-2 hover:text-lime-500"
          >
            modern tools
          </a>
          .
        </p>

        <a
          href="/DarshanParmar.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="motion-preset-slide-right mt-6 inline-block !animate-blur-in-800 rounded-[30px] border-2 border-slate-900 bg-slate-900 dark:border-[#50e0b3] dark:bg-[#0f172a] dark:text-[#50e0b3] px-6 py-2 text-sm font-medium text-white shadow-[4px_4px_0px_0px_#84cc16] dark:shadow-[4px_4px_0px_0px_#50e0b3] transition-all duration-200 motion-delay-500 hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:bg-slate-800 dark:hover:bg-[#50e0b3] dark:hover:text-[#0f172a] md:text-xl xl:border-[3px]"
        >
          Résumé
        </a>
        <a
          href="/#contact"
          className="motion-preset-slide-right ml-[20px] inline-block !animate-blur-in-800 rounded-[30px] border-[3px] border-slate-900 dark:border-slate-100 px-6 py-2 text-sm font-medium shadow-[4px_4px_0px_0px_#1e293b] dark:shadow-[4px_4px_0px_0px_#f1f5f9] transition-all duration-200 motion-delay-500 hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:bg-slate-100 dark:hover:bg-white dark:hover:text-[#0f172a] md:text-xl dark:text-slate-100"
        >
          Contact me
        </a>

        <div className="mt-6 flex animate-fade-right animate-delay-500 items-center gap-4">
          <a
            href="https://github.com/darshan02parmar"
            target="_blank"
            aria-label="Github"
          >
            <GithubIcon className="h-8 w-8" />
          </a>
          <a
            href="https://linkedin.com/in/parmar-darshan"
            target="_blank"
            aria-label="Linkedin"
          >
            <LinkedinIcon className="h-8 w-8" />
          </a>
          <a
            href="https://twitter.com/darshan02parmar"
            target="_blank"
            aria-label="Twitter"
          >
            <TwitterIcon className="h-8 w-8" />
          </a>
          <a href="mailto:darshanparmar0302@gmail.com" target="_blank" aria-label="Email">
            <MailIcon className="h-10 w-10" />
          </a>
        </div>

      </aside>

      <div className="lg:ml-[50%] lg:w-[50%] w-full px-4 lg:px-10 relative">
        <Snowfall
          color={theme === 'dark' ? '#334155' : '#cbd5e1'}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            pointerEvents: 'none'
          }}
          snowflakeCount={250}
          radius={[0.5, 3.0]}
          speed={[0.5, 3.0]}
        />
        <HeroImage />

        <div className="relative">
          <FloatingShape
            shapeUrl="/shapes/shape-81.svg"
            directionClass="left-[-60px] bottom-[-90px]"
            amplitude={[20, 100, 30]}
            speed={0.1}
          />
          <img
            src="/background/br1.png"
            alt="Background"
            className="absolute top-20 left-1/2 -translate-x-1/2 w-[450px] h-auto object-contain z-0 pointer-events-none opacity-60 dark:opacity-20 dark:invert"
          />
          <WorkExperience />
        </div>

        <div className="relative">
          <img
            src="/background/br3.png"
            alt="Background"
            className="absolute top-10 left-1/2 -translate-x-1/2 w-[750px] h-auto object-contain z-0 pointer-events-none opacity-80 dark:opacity-20 dark:invert"
          />
          <ProjectList />
        </div>

        <div className="relative">
          <FloatingShape
            shapeUrl="/shapes/shape-77.svg"
            directionClass="left-[-20px] bottom-[-20px]"
            amplitude={[40, 100, 30]}
            speed={0.2}
          />
          <img
            src="/background/br2.png"
            alt="Background"
            className="absolute top-10 left-1/2 -translate-x-1/2 w-[580px] h-auto object-contain z-0 pointer-events-none opacity-80 dark:opacity-20 dark:invert"
          />
          <TechStack />
        </div>

        <div className="relative">
          <FloatingShape
            shapeUrl="/shapes/custom/shape-86-green.svg"
            directionClass="right-0"
            amplitude={[100, 100, 30]}
            speed={0.2}
          />
          <Github theme={theme} />
        </div>

        <div className="relative">
          <FloatingShape
            shapeUrl="/shapes/shape-79.svg"
            directionClass="left-[-20px] bottom-[-20px]"
            amplitude={[40, 100, 30]}
            speed={0.2}
          />
          <GitRoll theme={theme} />
        </div>

        <div className="relative">
          <FloatingShape
            shapeUrl="/shapes/shape-85.svg"
            directionClass="right-5 top-[-50px]"
            amplitude={[100, 100, 30]}
            speed={0.2}
          />
          <FloatingShape
            shapeUrl="/shapes/shape-80.svg"
            directionClass="left-[-20px] bottom-[-20px] z-0"
            amplitude={[40, 100, 30]}
            speed={0.2}
          />
          <Contact onOpenHints={onOpenHints} />
        </div>
        <Footer />
      </div>
    </>
  );
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="w-full relative"
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = ({ theme, onOpenHints }: { theme: 'light' | 'dark'; onOpenHints: () => void }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageWrapper>
            <Home theme={theme} onOpenHints={onOpenHints} />
          </PageWrapper>
        } />
        <Route path="/project/:id" element={
          <PageWrapper>
            <ProjectDetail />
          </PageWrapper>
        } />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', next);
      return next;
    });
  };

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [isMatrixActive, setIsMatrixActive] = useState(false);
  const [isNeoModeActive, setIsNeoModeActive] = useState(false);
  const [isSecretsDrawerActive, setIsSecretsDrawerActive] = useState(false);
  const [isHintModalOpen, setIsHintModalOpen] = useState(false);
  const [isWhoamiOpen, setIsWhoamiOpen] = useState(false);
  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const [isSandboxOpen, setIsSandboxOpen] = useState(false);

  // Stored achievements
  const [unlockedSecrets, setUnlockedSecrets] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        return JSON.parse(localStorage.getItem('discovered_secrets') || '[]');
      } catch {
        return [];
      }
    }
    return [];
  });

  const keyBufferRef = useRef<string[]>([]);
  const konamiBufferRef = useRef<string[]>([]);
  const konamiCode = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a'];

  const triggerRewardSound = () => {
    try {
      const AudioContext = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime);
      osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1);
      osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.2);
      osc.frequency.setValueAtTime(1046.50, ctx.currentTime + 0.3);

      gainNode.gain.setValueAtTime(0.08, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);
      
      osc.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.5);
    } catch (err) {
      console.error(err);
    }
  };

  const unlockSecret = (key: string) => {
    setUnlockedSecrets(prev => {
      if (prev.includes(key)) return prev;
      const next = [...prev, key];
      if (typeof window !== 'undefined') {
        localStorage.setItem('discovered_secrets', JSON.stringify(next));
      }
      
      toast.custom((t) => (
        <div className={`${t.visible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'} max-w-xs w-full bg-amber-400 border-[3px] border-slate-900 p-4 rounded-2xl shadow-[4px_4px_0px_0px_#1e293b] font-mono text-[11px] font-bold text-slate-950 flex items-center gap-3 transition-all duration-300 pointer-events-auto`}>
          <span className="text-xl">🏆</span>
          <div>
            <div>ACHIEVEMENT UNLOCKED!</div>
            <div className="text-[9px] text-slate-800 font-normal">Found secret: {key.toUpperCase()} ({next.length}/5)</div>
          </div>
        </div>
      ), { duration: 4000 });

      triggerRewardSound();

      if (next.length === 5) {
        setTimeout(() => {
          setIsConfettiActive(true);
          toast.success('🎉 Incredible! You discovered all 5 Developer Secrets!', {
            style: { border: '3px solid #eab308', fontSize: '11px', fontFamily: 'monospace', fontWeight: 'bold' }
          });
        }, 800);
      }

      return next;
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 1. Ctrl + K / Cmd + K for Command Palette
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsPaletteOpen(prev => !prev);
        return;
      }

      // If user presses Escape, close active overlays
      if (e.key === 'Escape') {
        setIsMatrixActive(false);
        setIsSecretsDrawerActive(false);
        setIsPaletteOpen(false);
        setIsWhoamiOpen(false);
        setIsHintModalOpen(false);
        setIsSandboxOpen(false);
        return;
      }

      const key = e.key.toLowerCase();

      // Track Konami Code sequence
      const konamiBuffer = konamiBufferRef.current;
      konamiBuffer.push(key);
      if (konamiBuffer.length > konamiCode.length) {
        konamiBuffer.shift();
      }
      if (konamiBuffer.join(',') === konamiCode.join(',')) {
        unlockSecret('konami');
        setIsConfettiActive(true);
        setIsSandboxOpen(true);
        toast.custom((t) => (
          <div className={`${t.visible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'} max-w-sm w-full bg-slate-900 border-[3px] border-[#eab308] p-4 rounded-2xl shadow-[6px_6px_0px_0px_#eab308] font-mono text-[11px] font-bold text-white flex flex-col gap-1 transition-all duration-300 pointer-events-auto`}>
            <div className="text-[#eab308] text-xs">🚀 DEVELOPER GOD MODE ACTIVATED</div>
            <div className="text-[9px] text-slate-400 font-normal">Gravity inverted, confetti engine primed, secrets count incremented.</div>
          </div>
        ), { duration: 5000 });
        konamiBufferRef.current = [];
        return;
      }

      // Ignore modifiers and non-character keys
      if (e.key.length !== 1) return;

      // Append lowercase key to buffer for standard word checks
      const buffer = keyBufferRef.current;
      buffer.push(key);
      if (buffer.length > 15) {
        buffer.shift();
      }

      const typed = buffer.join('');

      // Check codes
      if (typed.endsWith('matrix')) {
        unlockSecret('matrix');
        setIsNeoModeActive(false);
        setIsMatrixActive(true);
        keyBufferRef.current = [];
      } else if (typed.endsWith('neo')) {
        unlockSecret('matrix');
        setIsNeoModeActive(true);
        setIsMatrixActive(true);
        keyBufferRef.current = [];
      } else if (typed.endsWith('secrets')) {
        unlockSecret('secrets');
        setIsSecretsDrawerActive(prev => !prev);
        keyBufferRef.current = [];
      } else if (typed.endsWith('theme')) {
        unlockSecret('theme');
        toggleTheme();
        keyBufferRef.current = [];
      } else if (typed.endsWith('darshan')) {
        unlockSecret('darshan');
        setIsWhoamiOpen(true);
        keyBufferRef.current = [];
      } else if (typed.endsWith('konami')) {
        unlockSecret('konami');
        setIsConfettiActive(true);
        setIsSandboxOpen(true);
        toast.custom((t) => (
          <div className={`${t.visible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'} max-w-sm w-full bg-slate-900 border-[3px] border-[#eab308] p-4 rounded-2xl shadow-[6px_6px_0px_0px_#eab308] font-mono text-[11px] font-bold text-white flex flex-col gap-1 transition-all duration-300 pointer-events-auto`}>
            <div className="text-[#eab308] text-xs">🚀 DEVELOPER GOD MODE ACTIVATED</div>
            <div className="text-[9px] text-slate-400 font-normal">Gravity inverted, confetti engine primed, secrets count incremented.</div>
          </div>
        ), { duration: 5000 });
        keyBufferRef.current = [];
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  useEffect(() => {
    AOS.init({
      once: false,
      mirror: false,
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Toaster position="top-right" />
      <main className="relative mx-auto overflow-hidden bg-background text-foreground transition-colors duration-300 min-h-screen">
        <ScrollButton />
        <MouseGlow />
        <CommandPalette
          isOpen={isPaletteOpen}
          onClose={() => setIsPaletteOpen(false)}
          toggleTheme={toggleTheme}
          theme={theme}
        />

        {/* Matrix Rain Canvas overlay */}
        <AnimatePresence>
          {isMatrixActive && (
            <MatrixRain onClose={() => setIsMatrixActive(false)} isNeoMode={isNeoModeActive} />
          )}
        </AnimatePresence>

        {/* Dev Diagnostics Drawer overlay */}
        <AnimatePresence>
          {isSecretsDrawerActive && (
            <DevSecretsDrawer onClose={() => setIsSecretsDrawerActive(false)} />
          )}
        </AnimatePresence>

        {/* Retro Whoami Terminal overlay */}
        <AnimatePresence>
          {isWhoamiOpen && (
            <WhoamiTerminal onClose={() => setIsWhoamiOpen(false)} />
          )}
        </AnimatePresence>

        {/* Hint Clue Modal */}
        <AnimatePresence>
          {isHintModalOpen && (
            <HintModal isOpen={isHintModalOpen} onClose={() => setIsHintModalOpen(false)} />
          )}
        </AnimatePresence>

        {/* Canvas Confetti Explosion */}
        {isConfettiActive && (
          <ConfettiOverlay onComplete={() => setIsConfettiActive(false)} />
        )}

        {/* Dev God Mode Sandbox Console */}
        <AnimatePresence>
          {isSandboxOpen && (
            <DevSandbox
              isOpen={isSandboxOpen}
              onClose={() => setIsSandboxOpen(false)}
              unlockedSecretsCount={unlockedSecrets.length}
            />
          )}
        </AnimatePresence>

        {/* Secret Achievements Counter Progress Widget */}
        <AchievementBadge unlockedSecrets={unlockedSecrets} />

        {/* Neo-brutalist Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="fixed top-8 right-8 z-50 p-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded-full border-[3px] border-slate-900 dark:border-slate-100 shadow-[4px_4px_0px_0px_#1e293b] dark:shadow-[4px_4px_0px_0px_#f1f5f9] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
          aria-label="Toggle Theme"
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        <AnimatedRoutes theme={theme} onOpenHints={() => setIsHintModalOpen(true)} />
      </main>
    </Router>
  );
}

export default App;


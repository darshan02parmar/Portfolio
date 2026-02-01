import { useEffect, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Toaster } from 'react-hot-toast';
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

import Snowfall from 'react-snowfall';

// Placeholder for spinning shape if complex to port immediately, else simple div
const SpinningShape = () => (
  <img
    src='/gr1.png'
    alt="spinning blob"
    className="images glow absolute left-[-85px] top-[-95px] z-[-10] h-[400px] w-[400px] animate-spin animate-duration-[40000ms] animate-infinite animate-ease-in-out"
  />
);

function App() {
  useEffect(() => {
    AOS.init({
      once: false,
      mirror: false,
    });
  }, []);

  return (
    <Router>
      <Toaster position="top-right" />
      <main className="relative mx-auto overflow-hidden">
        <aside className="pl-10 pr-6 pt-14 lg:fixed text-slate-900 lg:w-[35%] lg:pl-32 lg:h-screen lg:overflow-hidden">
          <Suspense fallback={<div>Loading...</div>}>
            <SpinningShape />
          </Suspense>
          <Glow />

          <h1
            className="mt-4 animate-fade-right animate-duration-500 font-heading text-[60px] leading-tight lg:text-[70px]"
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
              href="#tech-stack"
              className="cursor-pointer underline underline-offset-2 hover:text-lime-500"
            >
              modern tools
            </a>
            .
          </p>

          <a
            href="/DarshanParmar_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block animate-fade-right animate-delay-500 rounded-[30px] border-2 border-slate-900 bg-slate-900 px-6 py-2 text-sm font-medium text-white shadow-[4px_4px_0px_0px_#84cc16] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none md:text-xl xl:border-[3px]"
          >
            Résumé
          </a>
          <a
            href="#contact"
            className="ml-[20px] inline-block animate-fade-right animate-delay-500 rounded-[30px] border-[3px] border-slate-900 px-6 py-2 text-sm font-medium shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none md:text-xl"
          >
            Contact me
          </a>

          <div className="mt-6 flex animate-fade-right animate-delay-500 items-center gap-4">
            <a
              href="https://github.com/darshan02parmar" // Updated link for Darshan
              target="_blank"
              aria-label="Github"
            >
              <GithubIcon className="h-8 w-8" />
            </a>
            <a
              href="https://linkedin.com/in/parmar-darshan" // Updated link for Darshan
              target="_blank"
              aria-label="Linkedin"
            >
              <LinkedinIcon className="h-8 w-8" />
            </a>
            <a
              href="https://twitter.com/darshan02parmar" // Updated link for Darshan
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

        <ScrollButton />

        <div className="lg:ml-[50%] lg:w-[50%] w-full px-4 lg:px-10 relative">
          <Snowfall
            color="#cbd5e1"
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
              className="absolute top-20 left-1/2 -translate-x-1/2 w-[450px] h-auto object-contain z-0 pointer-events-none opacity-60"
            />
            <WorkExperience />
          </div>

          <div className="relative">

            <img
              src="/background/br3.png"
              alt="Background"
              className="absolute top-10 left-1/2 -translate-x-1/2 w-[750px] h-auto object-contain z-0 pointer-events-none opacity-80"
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
              className="absolute top-10 left-1/2 -translate-x-1/2 w-[580px] h-auto object-contain z-0 pointer-events-none opacity-80"
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
            <Github />
          </div>

          <div className="relative">
            <FloatingShape
              shapeUrl="/shapes/shape-79.svg"
              directionClass="left-[-20px] bottom-[-20px]"
              amplitude={[40, 100, 30]}
              speed={0.2}
            />
            <GitRoll />
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
            <Contact />
          </div>
          <Footer />
        </div>
      </main>
    </Router>
  );
}

export default App;

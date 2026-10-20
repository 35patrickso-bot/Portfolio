import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ROW_1_TOOLS, ROW_2_TOOLS, ToolItem } from './toolLogos.ts';

const NAV_ITEMS = ['Home', 'About', 'Services', 'Contact'] as const;
type NavItem = (typeof NAV_ITEMS)[number];

const SERVICES = [
  {
    title: 'Executive Operations & Strategy',
    text: 'Complex cross-time-zone calendar management, global business travel coordination, proactive gatekeeping, stakeholder communications, and daily workflow optimization to fiercely protect your focus.',
  },
  {
    title: 'Custom Automations & AI',
    text: 'Building tailored Google Workspace automations, Gemini-powered inbox triage, and custom scripts that eliminate manual data entry, streamline operations, and buy back your time.',
  },
  {
    title: 'Full-Stack Web Development',
    text: 'Designing, building, and maintaining fast, mobile-responsive websites and secure internal portals hosted on AWS using modern frameworks like Node.js, Python, and React.',
  },
  {
    title: 'Digital Content & SEO',
    text: "Managing content calendars via Meta Business Suite, executing paid and organic campaigns, optimizing website SEO, and tracking analytics to maximize your brand's reach and visibility.",
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<NavItem>('Home');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return (
        document.documentElement.classList.contains('dark') ||
        window.matchMedia('(prefers-color-scheme: dark)').matches
      );
    }
    return false;
  });

  // Sync dark class to root <html> element and persist preference
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Handle smooth scroll when clicking navigation buttons
  const handleNavClick = (item: NavItem) => {
    setActiveTab(item);
    const targetEl = document.getElementById(item.toLowerCase());
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // 1. IntersectionObserver for active section tab indicator
  useEffect(() => {
    const sectionElements = NAV_ITEMS.map((item) =>
      document.getElementById(item.toLowerCase())
    ).filter(Boolean) as HTMLElement[];

    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const foundItem = NAV_ITEMS.find(
              (item) => item.toLowerCase() === entry.target.id
            );
            if (foundItem) {
              setActiveTab(foundItem);
            }
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    sectionElements.forEach((el) => navObserver.observe(el));

    return () => navObserver.disconnect();
  }, []);

  // 2. IntersectionObserver for repeating scroll animations (replays in both scroll directions)
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => revealObserver.observe(el));

    return () => revealObserver.disconnect();
  }, []);

  // Helper renderer for a single marquee tool card:
  // All hover effects, transitions, border, and rounded classes are on this outermost parent div
  // so the entire card floats upward as one solid, cohesive unit without internal items clipping
  const renderToolCard = (tool: ToolItem, key: string | number) => (
    <div
      key={key}
      className="shrink-0 flex items-center gap-3 px-4 py-2.5 rounded-xl border border-black/[0.08] dark:border-white/10 bg-white dark:bg-white/5 text-black dark:text-gray-200 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-lg hover:border-black/25 dark:hover:border-white/25 cursor-default select-none"
    >
      <img
        src={`/${tool.image}`}
        alt={tool.name}
        className="w-8 h-8 object-contain rounded-md shrink-0 bg-neutral-100 dark:bg-neutral-800/80 p-0.5"
        loading="lazy"
        onError={(e) => {
          const target = e.currentTarget;
          if (target.src !== tool.fallback) {
            target.src = tool.fallback;
          }
        }}
      />
      <span className="text-sm font-medium tracking-tight text-neutral-900 dark:text-gray-200 whitespace-nowrap">
        {tool.name}
      </span>
    </div>
  );

  return (
    <div className="relative min-h-screen text-black dark:text-gray-200 font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black bg-[#f4f4f1] dark:bg-[#121212] overflow-hidden transition-colors duration-500 ease-in-out">
      {/* Floating Dark Mode Toggle Button (Top Right) */}
      <button
        type="button"
        onClick={() => setIsDarkMode((prev) => !prev)}
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        className="fixed top-6 right-6 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border border-black/10 dark:border-white/15 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-sm hover:scale-105 active:scale-95 transition-all duration-300 text-neutral-800 dark:text-neutral-200 cursor-pointer select-none"
      >
        <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
          <motion.div
            key={isDarkMode ? 'sun' : 'moon'}
            initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="flex items-center justify-center"
          >
            {isDarkMode ? (
              // Sun icon for Dark Mode
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-amber-300"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            ) : (
              // Moon icon for Light Mode
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-neutral-800"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            )}
          </motion.div>
        </div>
      </button>

      {/* 
        Section 1: Home (Full screen height)
        - Main text in center
        - Tool Marquee infinite scroll at bottom (Row 1 Left, Row 2 Right)
      */}
      <section
        id="home"
        className="min-h-screen w-full flex flex-col justify-between pt-20 sm:pt-28 pb-32 sm:pb-36"
      >
        {/* Main Text Content */}
        <div className="w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 flex-1 flex flex-col justify-center items-start text-left">
          {/* Eyebrow Label */}
          <p className="hidden text-sm sm:text-base md:text-lg font-medium tracking-tight text-neutral-500 dark:text-neutral-400 mb-3 md:mb-4 select-none">
            Virtual Executive Assistant
          </p>

          {/* Main Headline */}
          <h1 className="hidden delay-100 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-black dark:text-white leading-[1.06] mb-6 md:mb-8 text-balance">
            I Run Systems So You Can Lead.
          </h1>

          {/* Description */}
          <p className="hidden delay-200 text-lg sm:text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 font-normal leading-relaxed text-pretty max-w-3xl">
            Strategic right-hand support, proactive daily management, and automated workflows that clear operational bottlenecks and keep your business moving flawlessly.
          </p>
        </div>

        {/* 
          Tool Marquee: Infinite scrolling tracks at bottom of Home section
          - Row 1: Google & Microsoft (Scrolls Left)
          - Row 2: AWS & Meta (Scrolls Right)
        */}
        <div className="hidden delay-300 w-full mt-10 sm:mt-12 flex flex-col gap-2 marquee-gradient-mask py-2">
          {/* Row 1 (Google & Microsoft) -> Left Scroll */}
          <div className="overflow-visible w-full flex">
            <div className="marquee-track-left">
              {ROW_1_TOOLS.map((tool, i) => renderToolCard(tool, `r1-a-${i}`))}
              {ROW_1_TOOLS.map((tool, i) => renderToolCard(tool, `r1-b-${i}`))}
            </div>
          </div>

          {/* Row 2 (AWS & Meta) -> Right Scroll (duplicated multiple times for seamless loop) */}
          <div className="overflow-visible w-full flex">
            <div className="marquee-track-right">
              {ROW_2_TOOLS.map((tool, i) => renderToolCard(tool, `r2-a-${i}`))}
              {ROW_2_TOOLS.map((tool, i) => renderToolCard(tool, `r2-b-${i}`))}
              {ROW_2_TOOLS.map((tool, i) => renderToolCard(tool, `r2-c-${i}`))}
              {ROW_2_TOOLS.map((tool, i) => renderToolCard(tool, `r2-d-${i}`))}
            </div>
          </div>
        </div>
      </section>

      {/* 
        Section 2: About (Full screen height)
      */}
      <section
        id="about"
        className="min-h-screen w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-24 sm:pt-32 pb-36 flex flex-col justify-start border-t border-black/[0.06] dark:border-white/10 transition-colors duration-500 ease-in-out"
      >
        <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16 relative">
          {/* Left Side: Photo */}
          <div className="hidden w-full sm:w-auto flex-shrink-0 flex justify-center lg:justify-start lg:sticky lg:top-24 self-start">
            <div className="relative w-64 sm:w-80 md:w-88 aspect-[3/4] rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] border border-black/[0.08] dark:border-white/10 transition-colors duration-500 ease-in-out">
             <img
  src="/Official%20DP.JPG"
  alt="Patrick Nicos So, Official DP"
  className="w-full h-full object-cover object-top"
  loading="lazy"
  decoding="async"
/>
            </div>
          </div>

          {/* Right Side: ALL text content */}
          <div className="flex-1 flex flex-col items-start text-left">
            {/* Headline */}
            <h2 className="hidden text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black dark:text-white leading-tight text-balance">
              Hi, I'm Patrick.
            </h2>

            {/* Sub-headline */}
            <h3 className="hidden delay-100 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-neutral-800 dark:text-neutral-200 leading-snug mt-3 sm:mt-4 mb-6 sm:mb-8 text-balance">
              I'm a Tech-Savvy Executive Assistant who builds the systems founders scale on.
            </h3>

            {/* Paragraphs 1, 2, 3 with cascading stagger */}
            <div className="space-y-4 sm:space-y-5 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-normal leading-relaxed text-pretty">
              <p className="hidden delay-200">
                I bring together traditional executive support, full-stack web development, Google Workspace automation, and AI integration. Whether I’m managing cross-time-zone calendars and business travel or engineering custom workflows, I measure my work against a single standard: it must eliminate operational friction and protect the leader’s bandwidth.
              </p>
              <p className="hidden delay-300">
                As the strategic right-hand to a Founder, I managed daily operations, prioritized meetings, and coordinated complex global schedules. To cut down on inbox triage, I built custom Google Apps Script automations powered by Gemini that instantly summarized important emails directly into Google Docs.
              </p>
              <p className="hidden delay-400">
                Currently, I work as a Full Stack Developer, building and securing web infrastructure using AWS, Node.js, and Python. Before that, I managed social media scheduling, SEO, and paid campaigns as a Content Manager. I build heavily on AWS and Google Workspace, and I work remotely from the Philippines.
              </p>
            </div>

            {/* Resume Button */}
            <div className="hidden delay-400 mt-6 sm:mt-8">
              <a
                href="Patrick Nicos So - Résumé.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm sm:text-base font-medium tracking-tight bg-black text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 dark:bg-white dark:text-black dark:hover:bg-gray-200 cursor-pointer select-none group"
              >
                <span>View Résumé</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 
        Section 3: Services (Full screen height, 2x2 Grid of Rounded Cards)
      */}
      <section
        id="services"
        className="min-h-screen w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32 pb-36 flex flex-col justify-center items-start border-t border-black/[0.06] dark:border-white/10 transition-colors duration-500 ease-in-out"
      >
        <div className="hidden w-full flex flex-col items-start text-left mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black dark:text-white leading-tight text-balance">
            How I Can Help You Scale
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-300 font-normal leading-relaxed text-pretty max-w-3xl mt-4">
            I provide end-to-end operational support, from managing your schedule to building a tech stack tailored to how you work. Here’s what I bring:
          </p>
        </div>

        {/* 4 Service Cards with cascading stagger & floating hover animation */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {SERVICES.map((service, index) => {
            const delayClass =
              index === 0
                ? 'delay-100'
                : index === 1
                  ? 'delay-200'
                  : index === 2
                    ? 'delay-300'
                    : 'delay-400';

            return (
              <div
                key={index}
                className={`hidden ${delayClass} service-card group relative flex flex-col justify-between p-6 sm:p-8 md:p-9 rounded-2xl sm:rounded-3xl bg-neutral-50/70 dark:bg-white/5 border border-black/[0.08] dark:border-white/10 cursor-default`}
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-black dark:text-white leading-snug">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 font-normal leading-relaxed text-pretty">
                    {service.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 
        Section 4: Contact (Full screen height)
      */}
      <section
        id="contact"
        className="min-h-screen w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32 pb-40 flex flex-col justify-center items-center text-center border-t border-black/[0.06] dark:border-white/10 transition-colors duration-500 ease-in-out"
      >
        <div className="w-full flex flex-col items-center justify-center max-w-3xl">
          {/* Eyebrow Label */}
          <p className="hidden text-xs sm:text-sm uppercase tracking-widest font-semibold text-neutral-400 dark:text-neutral-500 mb-3 select-none">
            Get In Touch
          </p>

          {/* Headline */}
          <h2 className="hidden delay-100 text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-black dark:text-white leading-tight mb-8 sm:mb-12 text-balance">
            Let's Work Together.
          </h2>

          {/* Primary Contact: Prominent oversized text links */}
          <div className="hidden delay-200 w-full flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 md:gap-14 my-6 sm:my-8">
            <div className="flex flex-col items-center">
              <span className="text-xs uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-medium mb-1.5 select-none">
                Email
              </span>
              <a
                href="mailto:35patrickso@gmail.com"
                className="text-lg sm:text-2xl md:text-3xl font-semibold tracking-tight text-black dark:text-white hover:text-neutral-500 dark:hover:text-neutral-300 transition-colors duration-200 underline-offset-8 hover:underline"
              >
                35patrickso@gmail.com
              </a>
            </div>

            <div
              className="max-sm:hidden w-px h-12 bg-black/[0.08] dark:bg-white/10"
              aria-hidden="true"
            />

            <div className="flex flex-col items-center">
              <span className="text-xs uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-medium mb-1.5 select-none">
                Mobile
              </span>
              <a
                href="tel:+639959658061"
                className="text-lg sm:text-2xl md:text-3xl font-semibold tracking-tight text-black dark:text-white hover:text-neutral-500 dark:hover:text-neutral-300 transition-colors duration-200 underline-offset-8 hover:underline"
              >
                +63 995 965 8061
              </a>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="hidden delay-300 flex items-center justify-center gap-4 mt-8 sm:mt-10">
            <a
              href="https://www.facebook.com/patrick.so.904/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3 rounded-full text-sm font-medium tracking-tight text-black dark:text-white border border-black/15 dark:border-white/20 bg-white/80 dark:bg-white/5 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200 hover:shadow-md cursor-pointer select-none"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/patrickso_/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3 rounded-full text-sm font-medium tracking-tight text-black dark:text-white border border-black/15 dark:border-white/20 bg-white/80 dark:bg-white/5 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200 hover:shadow-md cursor-pointer select-none"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* 
        Fixed Viewport Bottom Navigation Bar:
        Ordered: Home - About - Services - Contact
      */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 flex justify-center items-center pointer-events-none pb-[max(1.5rem,env(safe-area-inset-bottom,1.5rem))] px-4"
        style={{ position: 'fixed' }}
      >
        <nav
          aria-label="Primary Navigation"
          className="pointer-events-auto liquid-glass-nav relative flex items-center p-1.5 rounded-full transition-shadow duration-300"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item;
            return (
              <button
                key={item}
                type="button"
                onClick={() => handleNavClick(item)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative px-5 py-2.5 rounded-full text-sm font-medium tracking-tight whitespace-nowrap transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white cursor-pointer select-none ${
                  isActive
                    ? 'text-black dark:text-white font-semibold'
                    : 'text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-black/[0.03] dark:hover:bg-white/[0.05]'
                }`}
              >
                {/* Smooth Animated Liquid Glass Lens */}
                {isActive && (
                  <motion.div
                    layoutId="liquid-nav-lens"
                    className="absolute inset-0 rounded-full liquid-glass-active-pill"
                    transition={{
                      type: 'spring',
                      stiffness: 420,
                      damping: 32,
                      mass: 0.8,
                    }}
                  >
                    <span className="liquid-lens-reflection" />
                  </motion.div>
                )}
                <span className="relative z-10">{item}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

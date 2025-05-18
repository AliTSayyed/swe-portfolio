"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function HeroSection() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  // Handler for the About button to scroll down 20px
  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent default anchor behavior

    // Get current scroll position
    const currentScrollPosition = window.scrollY;

    // Scroll down by 20px from the current position
    window.scrollTo({
      top: currentScrollPosition + 80,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute top-6 right-6 z-50 overflow-hidden hidden sm:block">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 px-4 py-2 bg-black/50 backdrop-blur-md rounded-md border border-gray-800"
        >
          <a
            href="#"
            onClick={handleAboutClick}
            className="text-gray-300 hover:text-green-500 cursor-pointer transition-colors"
          >
            About
          </a>
          <a
            href="#work"
            className="text-gray-300 hover:text-green-500 cursor-pointer transition-colors"
          >
            Work
          </a>
          <a
            href="#projects"
            className="text-gray-300 hover:text-green-500 cursor-pointer transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-green-500 cursor-pointer transition-colors"
          >
            Contact
          </a>
        </motion.nav>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 opacity-10" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>
      <div className="relative z-10 max-w-4xl w-full mx-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-black/50 backdrop-blur-lg rounded-lg border border-gray-800 p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="font-mono">
            <p className="text-green-500">$ dev --version</p>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              Ali-Taabesh Sayyed
            </h1>
            <p className="text-green-500">$ ls -la ./skills</p>
            <div className="flex flex-wrap gap-2 mt-2 mb-4">
              <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                Java
              </span>
              <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                Go
              </span>
              <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                Python
              </span>
              <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                Django
              </span>
              <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                JavaScript
              </span>
              <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                TypeScript
              </span>
              <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                React
              </span>
              <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                Next.js
              </span>
              <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                N8N
              </span>
              <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                Git
              </span>
              <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                PostgreSQL
              </span>
              <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                GCP
              </span>
              <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                Dockers
              </span>
              <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                Kubernetes
              </span>
            </div>
            <p className="text-green-500 mb-2">$ cat About.txt</p>
            <p className="text-gray-400 mb-2">
              I&#39;m a self-taught Software Developer who transitioned from a
              Biochemistry background (Summa Cum Laude) to tech. My passion lies
              in full-stack development, crafting complete end-to-end solutions
              that deliver tangible value to clients. This drive has already led
              me from a coding novice to a valuable contributor at fast-paced
              startups, where adaptability and quick learning are essential.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Linkedin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const { hero } = portfolioData;

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 mb-6 text-sm font-mono border border-primary/30 rounded-full bg-primary/10"
          >
            AI/ML Engineer & Builder
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block">{hero.headline}</span>
            <span className="block gradient-text mt-2">{hero.subheadline}</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted max-w-3xl mx-auto mb-12 leading-relaxed">
            {hero.description}
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="group px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 glow-hover flex items-center gap-2"
            >
              {hero.cta.primary}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={portfolioData.social.resume}
              download
              className="px-8 py-4 border-2 border-border hover:border-primary/50 text-foreground font-semibold rounded-lg hover:bg-primary/5 transition-all duration-300 flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              {hero.cta.secondary}
            </a>

            <a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-border hover:border-secondary/50 text-foreground font-semibold rounded-lg hover:bg-secondary/5 transition-all duration-300 flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              {hero.cta.tertiary}
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-muted rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-3 bg-primary rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

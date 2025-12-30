"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Linkedin, Github, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import ParticleBackground from "./ParticleBackground";
import CodeAnimation from "./CodeAnimation";
import TradingGraph from "./TradingGraph";

export default function Hero() {
  const { hero } = portfolioData;

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle background */}
      <ParticleBackground />
      
      {/* Animated background */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      {/* Gradient orbs - multiple layers */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "0.5s" }}></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 mb-6 text-sm font-mono border border-primary/30 rounded-full bg-primary/10"
            >
              � AI/ML Engineer → Quant Developer
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block">{hero.headline}</span>
              <span className="block gradient-text mt-2 animate-gradient">{hero.subheadline}</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted mb-8 leading-relaxed">
              {hero.description}
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
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
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 mt-8"
            >
              <a
                href={portfolioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-border hover:border-primary/50 flex items-center justify-center hover:bg-primary/10 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={portfolioData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-border hover:border-secondary/50 flex items-center justify-center hover:bg-secondary/10 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${portfolioData.social.email}`}
                className="w-12 h-12 rounded-full border-2 border-border hover:border-accent/50 flex items-center justify-center hover:bg-accent/10 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Interactive Visuals */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block space-y-8"
          >
            <CodeAnimation />
            <TradingGraph />
          </motion.div>
        </div>

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

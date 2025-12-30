"use client";

import { motion } from "framer-motion";
import { Trophy, Code, Users } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Hackathons() {
  const { hackathons } = portfolioData;

  return (
    <section id="hackathons" className="relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Hackathons & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block"></div>

            {/* Timeline items */}
            <div className="space-y-8">
              {hackathons.map((hackathon, idx) => (
                <motion.div
                  key={hackathon.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-20 md:pl-24"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block"></div>

                  <div className="glass p-6 rounded-xl hover:border-primary/30 transition-all duration-300">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <Trophy className="w-5 h-5 text-accent" />
                      <h3 className="text-xl font-bold">{hackathon.name}</h3>
                      <span className="px-3 py-1 text-sm font-mono bg-secondary/20 text-secondary rounded-full">
                        {hackathon.year}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-3 text-muted">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{hackathon.role}</span>
                    </div>

                    <p className="text-accent font-medium mb-4">
                      {hackathon.outcome}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {hackathon.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-mono bg-background/80 border border-border rounded-full flex items-center gap-1"
                        >
                          <Code className="w-3 h-3" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

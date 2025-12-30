"use client";

import { motion } from "framer-motion";
import { Award, BookOpen } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Certifications() {
  const { certifications } = portfolioData;

  // Don't render if no certifications
  if (!certifications || certifications.length === 0) {
    return null;
  }

  return (
    <section id="certifications" className="relative bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Certifications & Learning
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-6 rounded-xl hover:border-accent/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/20 rounded-lg group-hover:bg-accent/30 transition-colors">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                      {cert.name}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-3 text-sm text-muted">
                      <BookOpen className="w-4 h-4" />
                      <span>{cert.issuer}</span>
                      <span>•</span>
                      <span>{cert.year}</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 text-xs font-mono bg-background/80 border border-border rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

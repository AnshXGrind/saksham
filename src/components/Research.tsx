"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Research() {
  const { research } = portfolioData;

  const getIcon = (iconName: string) => {
    const Icon = ((Icons as unknown) as Record<string, React.ComponentType<{ className?: string }>>)[iconName] || Icons.Code;
    return <Icon className="w-8 h-8" />;
  };

  return (
    <section id="research" className="relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {research.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>

          <p className="text-lg text-muted text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            {research.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {research.interests.map((interest, idx) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass p-6 rounded-xl text-center hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="inline-block p-4 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                  <div className="text-primary">{getIcon(interest.icon)}</div>
                </div>
                
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {interest.title}
                </h3>
                
                <p className="text-sm text-muted">
                  {interest.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

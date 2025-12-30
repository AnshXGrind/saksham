"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Skills() {
  const { skills } = portfolioData;

  const getIcon = (iconName: string) => {
    const Icon = ((Icons as unknown) as Record<string, React.ComponentType<{ className?: string }>>)[iconName] || Icons.Code;
    return <Icon className="w-6 h-6" />;
  };

  return (
    <section id="skills" className="relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Skills & Tech Stack
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((category, idx) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-6 rounded-xl hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-all"
                    >
                      <div className="text-primary">{getIcon(skill.icon)}</div>
                      <div className="flex-1">
                        <div className="font-medium">{skill.name}</div>
                        <div className="text-sm text-muted">{skill.level}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

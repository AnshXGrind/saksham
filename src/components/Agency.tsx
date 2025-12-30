"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Palette, Brain, Zap, ArrowRight, Check, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const iconMap = {
  code: Code,
  smartphone: Smartphone,
  palette: Palette,
  brain: Brain,
  zap: Zap,
};

export default function Agency() {
  const { agency } = portfolioData;

  return (
    <section id="agency" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-primary/5 to-black/50"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 mb-6 text-sm font-mono border border-primary/30 rounded-full bg-primary/10"
          >
            💼 Digital Agency
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {agency.title}
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-primary font-mono mb-4">
            {agency.tagline}
          </p>
          
          <p className="text-lg text-text/70 max-w-3xl mx-auto">
            {agency.description}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {agency.services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative h-full p-8 bg-background/50 backdrop-blur-sm border border-primary/20 rounded-2xl hover:border-primary/40 transition-all">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-text/70 mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-text/60">
                        <Check className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pricing & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-2xl mx-auto mb-8 p-8 bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">
              {agency.pricing.note}
            </h3>
            <p className="text-text/70 text-lg">
              {agency.pricing.contact}
            </p>
          </div>

          {/* CTA Button */}
          <motion.a
            href={`mailto:${portfolioData.social.email}?subject=Agency Project Inquiry`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-full font-bold text-lg hover:shadow-lg hover:shadow-primary/50 transition-all group"
          >
            <Mail className="w-5 h-5" />
            {agency.cta}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          
          <p className="mt-6 text-text/50 text-sm">
            Response time: Within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}

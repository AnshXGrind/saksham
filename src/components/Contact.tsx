"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Download, ExternalLink } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  const { social } = portfolioData;

  const socialLinks = [
    { icon: Github, label: "GitHub", href: social.github, color: "hover:text-primary" },
    { icon: Linkedin, label: "LinkedIn", href: social.linkedin, color: "hover:text-[#0077B5]" },
    { icon: Twitter, label: "Twitter", href: social.twitter, color: "hover:text-[#1DA1F2]" },
    { icon: Mail, label: "Email", href: `mailto:${social.email}`, color: "hover:text-accent" },
  ];

  return (
    <section id="contact" className="relative bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>

          <p className="text-lg text-muted mb-12 max-w-2xl mx-auto">
            Interested in collaboration, hiring, or just want to chat about AI and tech? 
            Feel free to reach out through any of these platforms.
          </p>

          {/* Social links */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {socialLinks.map((link, idx) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className={`glass p-6 rounded-xl ${link.color} transition-all duration-300 group flex flex-col items-center gap-3 min-w-[140px]`}
              >
                <link.icon className="w-8 h-8" />
                <span className="font-medium">{link.label}</span>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </div>

          {/* Resume download */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <a
              href={social.resume}
              download
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-background font-bold rounded-lg hover:opacity-90 transition-all duration-300 glow-hover"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 pt-8 border-t border-border text-center text-muted"
      >
        <p className="font-mono text-sm">
          © {new Date().getFullYear()} Built with Next.js, TypeScript & Framer Motion
        </p>
        <p className="text-xs mt-2 gradient-text">
          Designed for impact. Crafted with code.
        </p>
      </motion.footer>
    </section>
  );
}

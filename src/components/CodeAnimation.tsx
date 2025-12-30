"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const codeSnippets = [
  `const developer = {
  name: 'Saksham',
  passion: 'Innovation',
  mission: 'Build Future'
};`,
  `function createMagic() {
  const ideas = transform(creativity);
  return ideas.map(build);
}`,
  `class FutureDev {
  constructor() {
    this.skills = ['React', 'AI', 'ML'];
    this.dream = 'Change the world';
  }
}`,
  `async function innovate() {
  const solution = await brainstorm();
  return solution.deploy();
}`
];

export default function CodeAnimation() {
  const [currentSnippet, setCurrentSnippet] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const snippet = codeSnippets[currentSnippet];
    
    if (isTyping) {
      if (displayedText.length < snippet.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(snippet.slice(0, displayedText.length + 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 30);
        return () => clearTimeout(timeout);
      } else {
        setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
        setIsTyping(true);
      }
    }
  }, [displayedText, isTyping, currentSnippet]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative w-full max-w-2xl mx-auto"
    >
      <div className="relative bg-[#0a0a0a] rounded-xl border border-[#00d4ff]/30 overflow-hidden shadow-2xl">
        {/* Window Controls */}
        <div className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-[#111111] to-[#0a0a0a] border-b border-[#00d4ff]/20">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-gray-400 text-sm font-mono">future.js</span>
          </div>
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-[#7c3aed] animate-pulse" style={{ animationDelay: '0.3s' }} />
          </div>
        </div>

        {/* Code Display */}
        <div className="p-6 font-mono text-sm">
          <div className="space-y-1">
            {displayedText.split('\n').map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-4"
              >
                <span className="text-gray-600 select-none min-w-[2rem] text-right">
                  {i + 1}
                </span>
                <span className="text-gray-300">
                  {line.split('').map((char, charIndex) => {
                    // Syntax highlighting
                    const isKeyword = ['const', 'function', 'class', 'async', 'await', 'return', 'constructor', 'this', 'new'].some(k => 
                      line.slice(charIndex).startsWith(k) && !line[charIndex + k.length]?.match(/\w/)
                    );
                    const isString = char === "'" || char === '"';
                    const isNumber = char.match(/[0-9]/);
                    const isOperator = ['=', '>', '<', '+', '-', '*', '/', '(', ')', '{', '}', '[', ']'].includes(char);

                    let className = "text-gray-300";
                    if (isKeyword) className = "text-[#00d4ff]";
                    if (isString) className = "text-[#10b981]";
                    if (isNumber) className = "text-[#7c3aed]";
                    if (isOperator) className = "text-gray-400";

                    return (
                      <span key={charIndex} className={className}>
                        {char}
                      </span>
                    );
                  })}
                  {i === displayedText.split('\n').length - 1 && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="inline-block w-2 h-4 bg-[#00d4ff] ml-1"
                    />
                  )}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Status Bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-[#111111] to-[#0a0a0a] border-t border-[#00d4ff]/20 text-xs text-gray-500">
          <div className="flex items-center gap-4">
            <span>⚡ Next.js</span>
            <span>🎨 TypeScript</span>
            <span>✨ Coding...</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[0, 1, 2].map(i => (
                <motion.div
                  key={i}
                  className="w-1 h-3 bg-[#00d4ff]"
                  animate={{
                    scaleY: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/5 via-transparent to-[#7c3aed]/5 pointer-events-none" />
      </div>
    </motion.div>
  );
}

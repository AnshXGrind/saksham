"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface DataPoint {
  value: number;
  time: number;
}

export default function TradingGraph() {
  const [data, setData] = useState<DataPoint[]>([]);
  const [isPositive, setIsPositive] = useState(true);

  useEffect(() => {
    // Generate initial data
    const initialData: DataPoint[] = [];
    let value = 50;
    for (let i = 0; i < 50; i++) {
      value += (Math.random() - 0.5) * 10;
      value = Math.max(20, Math.min(80, value));
      initialData.push({ value, time: Date.now() - (50 - i) * 1000 });
    }
    setData(initialData);

    // Update data every second
    const interval = setInterval(() => {
      setData(prev => {
        const lastValue = prev[prev.length - 1]?.value || 50;
        const change = (Math.random() - 0.48) * 8; // Slight upward bias
        const newValue = Math.max(20, Math.min(80, lastValue + change));
        setIsPositive(newValue > lastValue);
        
        const newData = [
          ...prev.slice(1),
          { value: newValue, time: Date.now() }
        ];
        return newData;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const generatePath = () => {
    if (data.length < 2) return "";
    
    const width = 300;
    const height = 150;
    const xStep = width / (data.length - 1);
    
    let path = `M 0 ${height - data[0].value * 1.5}`;
    
    for (let i = 1; i < data.length; i++) {
      const x = i * xStep;
      const y = height - data[i].value * 1.5;
      path += ` L ${x} ${y}`;
    }
    
    return path;
  };

  const currentValue = data[data.length - 1]?.value || 50;
  const previousValue = data[data.length - 2]?.value || 50;
  const changePercent = ((currentValue - previousValue) / previousValue * 100).toFixed(2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative w-full max-w-md mx-auto"
    >
      <div className="relative bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] rounded-2xl border border-[#00d4ff]/20 p-6 overflow-hidden backdrop-blur-sm">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-white text-sm font-medium">Portfolio Growth</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-2xl font-bold text-white">
                {currentValue.toFixed(1)}
              </span>
              <span className={`text-sm ${isPositive ? 'text-[#10b981]' : 'text-red-500'}`}>
                {isPositive ? '↑' : '↓'} {Math.abs(parseFloat(changePercent))}%
              </span>
            </div>
          </div>
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-[#00d4ff]/60 animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 rounded-full bg-[#00d4ff]/30 animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>

        {/* Graph */}
        <div className="relative h-40">
          <svg width="100%" height="100%" viewBox="0 0 300 150" preserveAspectRatio="none">
            {/* Grid lines */}
            <g className="opacity-10">
              {[0, 1, 2, 3, 4].map(i => (
                <line
                  key={i}
                  x1="0"
                  y1={i * 37.5}
                  x2="300"
                  y2={i * 37.5}
                  stroke="#00d4ff"
                  strokeWidth="1"
                />
              ))}
            </g>

            {/* Area under curve */}
            <defs>
              <linearGradient id="graphGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={isPositive ? "#10b981" : "#ef4444"} stopOpacity="0.3" />
                <stop offset="100%" stopColor={isPositive ? "#10b981" : "#ef4444"} stopOpacity="0" />
              </linearGradient>
            </defs>
            
            <path
              d={`${generatePath()} L 300 150 L 0 150 Z`}
              fill="url(#graphGradient)"
            />

            {/* Line */}
            <motion.path
              d={generatePath()}
              fill="none"
              stroke={isPositive ? "#10b981" : "#ef4444"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5 }}
            />

            {/* Animated dot at end */}
            {data.length > 0 && (
              <motion.circle
                cx={300}
                cy={150 - data[data.length - 1].value * 1.5}
                r="4"
                fill={isPositive ? "#10b981" : "#ef4444"}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            )}
          </svg>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-[#00d4ff]/10">
          <div>
            <div className="text-gray-500 text-xs">High</div>
            <div className="text-white text-sm font-semibold">{Math.max(...data.map(d => d.value)).toFixed(1)}</div>
          </div>
          <div>
            <div className="text-gray-500 text-xs">Low</div>
            <div className="text-white text-sm font-semibold">{Math.min(...data.map(d => d.value)).toFixed(1)}</div>
          </div>
          <div>
            <div className="text-gray-500 text-xs">Avg</div>
            <div className="text-white text-sm font-semibold">
              {(data.reduce((a, b) => a + b.value, 0) / data.length).toFixed(1)}
            </div>
          </div>
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#00d4ff]/5 via-transparent to-transparent pointer-events-none" />
      </div>
    </motion.div>
  );
}

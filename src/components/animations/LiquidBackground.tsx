import React from 'react';
import { motion } from 'framer-motion';

const LiquidBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg className="absolute w-full h-full">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
            <stop offset="100%" stopColor="rgba(147, 51, 234, 0.1)" />
          </linearGradient>
        </defs>
        <motion.path
          fill="url(#gradient)"
          initial={{
            d: "M0,0 L100,0 L100,100 L0,100 Z",
          }}
          animate={{
            d: [
              "M0,0 L100,0 L100,100 L0,100 Z",
              "M0,0 L100,0 L90,100 L10,100 Z",
              "M0,0 L100,0 L100,100 L0,100 Z",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </svg>
    </div>
  );
};

export default LiquidBackground;
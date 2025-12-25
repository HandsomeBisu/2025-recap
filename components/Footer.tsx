import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="h-full w-full flex flex-col items-center justify-center bg-discord-bg relative p-6">
      <div className="max-w-4xl w-full text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Thank You</h2>
          <p className="text-xl md:text-2xl text-discord-muted leading-relaxed max-w-2xl mx-auto">
            2025년, DPS와 함께해주신 모든 분들께 진심으로 감사드립니다.<br/>
            혼자가 아닌 우리가 되어 만든 멋진 순간들이었습니다.<br/>
            <span className="text-discord-primary font-bold mt-4 block text-2xl md:text-3xl">2026년에도 Don't Play Solo!</span>
          </p>
        </motion.div>

        <div className="w-full h-px bg-white/10 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-discord-muted/60">
          <div className="mb-4 md:mb-0 flex items-center gap-2">
            <span>Designed for DPS</span>
            <Heart size={12} className="text-red-500 fill-current animate-pulse" />
          </div>
          <div className="flex gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Credits</span>
            <span className="hover:text-white transition-colors cursor-pointer">Privacy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Discord</span>
          </div>
        </div>
        
        <div className="mt-8 text-xs text-discord-muted/40 font-mono">
          © 2025 Don't Play Solo. All Systems Operational.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
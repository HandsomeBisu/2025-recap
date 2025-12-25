import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <section className="relative h-full w-full flex flex-col items-center justify-center overflow-hidden bg-discord-bg">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-discord-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 text-center px-4 flex flex-col items-center"
      >
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block px-4 py-1.5 mb-6 rounded-full bg-discord-card border border-discord-primary/30 text-discord-primary text-sm font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(88,101,242,0.3)]"
        >
          CHECKPOINT
        </motion.div>
        
        <h1 className="text-6xl md:text-9xl font-sans font-black tracking-tighter text-white mb-2 drop-shadow-2xl">
          DPS <span className="text-transparent bg-clip-text bg-gradient-to-r from-discord-primary to-purple-500">2025</span>
        </h1>
        
        <p className="text-xl md:text-3xl font-bold text-discord-muted tracking-tight mb-10">
          Don't Play Solo
        </p>

        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="group flex items-center gap-2 px-8 py-4 bg-discord-primary hover:bg-discord-secondary text-white rounded-full font-bold text-lg shadow-lg shadow-discord-primary/25 transition-all"
        >
          <span>시작하기</span>
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
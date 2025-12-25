import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, CheckCircle2, ArrowRight } from 'lucide-react';

interface IntroProps {
  onComplete: () => void;
}

const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Sequence timer for "booting" effect
    const timers = [
      setTimeout(() => setStep(1), 800),  // Show "System Check"
      setTimeout(() => setStep(2), 1600), // Show "Assets Loaded"
      setTimeout(() => setStep(3), 2400), // Show "Ready" & Button
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center text-white overflow-hidden font-mono">
      {/* Background Matrix/Grid effect */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />

      <div className="relative z-10 w-full max-w-md px-6">
        {/* Logo / Header Area */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-8 border-b border-white/20 pb-4"
        >
          <Terminal className="text-discord-primary" size={24} />
          <span className="text-lg font-bold tracking-widest text-discord-primary">
            DPS SYSTEM BOOT_
          </span>
        </motion.div>

        {/* Loading Sequence */}
        <div className="space-y-4 mb-12">
          <BootItem 
            visible={step >= 0} 
            text="Initializing Checkpoint Protocol..." 
            delay={0}
          />
          <BootItem 
            visible={step >= 1} 
            text="Verifying Year 2025 Data..." 
            delay={0.1}
          />
          <BootItem 
            visible={step >= 2} 
            text="Loading Contributors & Assets..." 
            delay={0.1}
          />
          <BootItem 
            visible={step >= 2} 
            text="Connection Established." 
            color="text-emerald-400"
            icon={<CheckCircle2 size={16} />}
            delay={0.2}
          />
        </div>

        {/* Main Title Reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={step >= 3 ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, type: "spring" }}
          className="text-center mb-10"
        >
          <h1 className="text-5xl md:text-6xl font-black italic tracking-tighter mb-2">
            DPS <span className="text-transparent bg-clip-text bg-gradient-to-r from-discord-primary to-purple-500">2025</span>
          </h1>
          <p className="text-discord-muted text-sm tracking-[0.2em] uppercase">
            Don't Play Solo
          </p>
        </motion.div>

        {/* Enter Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={step >= 3 ? { opacity: 1, y: 0 } : {}}
          className="flex justify-center"
        >
          <button
            onClick={onComplete}
            className="group relative px-8 py-4 bg-white text-black font-black text-lg tracking-widest uppercase hover:bg-discord-primary hover:text-white transition-all duration-300 clip-path-button"
            style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)' }}
          >
            <div className="flex items-center gap-3">
              <span>Enter Archive</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </div>
            {/* Glitch effect overlay */}
            <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:animate-[shimmer_1s_infinite]" />
          </button>
        </motion.div>
      </div>

      {/* Footer System Info */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 text-[10px] text-center font-mono"
      >
        ID: DPS-2025-CHK // SYS.VER.2.0.5 <br/>
        All systems operational.
      </motion.div>
    </div>
  );
};

const BootItem = ({ visible, text, color = "text-discord-muted", icon, delay = 0 }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={visible ? { opacity: 1, x: 0 } : {}}
      transition={{ delay }}
      className={`flex items-center gap-3 text-sm font-medium ${color}`}
    >
      {icon || <div className="w-1.5 h-1.5 bg-current rounded-full" />}
      <span>{text}</span>
    </motion.div>
  );
};

export default Intro;
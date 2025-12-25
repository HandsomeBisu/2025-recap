import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Heart } from 'lucide-react';
import { QUOTE } from '../constants';

const EndingSlide: React.FC = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    // Show quote for 2 seconds, then switch to footer
    const timer = setTimeout(() => {
      setShowFooter(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="h-full w-full flex flex-col items-center justify-center bg-black relative overflow-hidden px-6">
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
       
       <AnimatePresence mode="wait">
         {!showFooter ? (
           <motion.div
             key="quote"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
             transition={{ duration: 0.8 }}
             className="max-w-4xl mx-auto relative z-10 text-center absolute inset-0 flex flex-col items-center justify-center p-6"
           >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8 flex justify-center text-discord-primary"
              >
                <Quote size={48} className="fill-current" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8"
              >
                "{QUOTE.text}"
              </motion.h2>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-xl md:text-2xl font-display font-bold text-discord-muted bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-white"
              >
                — {QUOTE.sub}
              </motion.div>
           </motion.div>
         ) : (
           <motion.div
             key="footer"
             initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
             animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
             transition={{ duration: 1, delay: 0.2 }} // 1 second delay feel in transition
             className="max-w-4xl w-full text-center relative z-10"
           >
              <div className="mb-12">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Thank You</h2>
                <p className="text-xl md:text-2xl text-discord-muted leading-relaxed max-w-2xl mx-auto">
                  2025년, DPS와 함께해주신 모든 분들께 진심으로 감사드립니다.<br/>
                  모두와 함께했기에 의미있는 시간이였습니다.<br/>
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, type: "spring" }}
                    className="text-discord-primary font-bold mt-8 block text-2xl md:text-3xl"
                  >
                    2026년에도 Don't Play Solo!
                  </motion.span>
                </p>
              </div>

              <div className="w-full h-px bg-white/10 my-8" />

              <div className="flex flex-col md:flex-row justify-between items-center text-sm text-discord-muted/60">
                <div className="mb-4 md:mb-0 flex items-center gap-2">
                  <span>Designed by DPS</span>
                  <Heart size={12} className="text-red-500 fill-current animate-pulse" />
                </div>
                <div className="flex gap-6">
                  <span className="hover:text-white transition-colors cursor-pointer">Credits</span>
                  <span className="hover:text-white transition-colors cursor-pointer">Privacy</span>
                  <span className="hover:text-white transition-colors cursor-pointer">Discord</span>
                </div>
              </div>
              
              <div className="mt-8 text-xs text-discord-muted/40 font-mono">
                © 2025 Don't Play Solo. All rights reserved.
              </div>
           </motion.div>
         )}
       </AnimatePresence>
    </section>
  );
};

export default EndingSlide;
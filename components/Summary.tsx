import React, { useState, useEffect, useRef } from 'react';
import { Achievement } from '../types';
import StatCard from './StatCard';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SummaryProps {
  title?: string;
  items: Achievement[];
}

const Summary: React.FC<SummaryProps> = ({ title, items }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      // Check if we are close to the bottom (within 10px)
      const atBottom = scrollTop + clientHeight >= scrollHeight - 10;
      setIsAtBottom(atBottom);
    }
  };

  useEffect(() => {
    // Check initial state
    handleScroll();
  }, []);

  return (
    <section className="h-full w-full flex flex-col justify-start items-center pt-28 md:pt-32 px-4 md:px-8 max-w-7xl mx-auto relative">
      {title && (
        <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6 md:mb-10 text-center shrink-0">
          {title}
        </h2>
      )}
      
      {/* Scrollable Container with ID for App.tsx detection */}
      <div 
        id="slide-scroll-container"
        ref={containerRef}
        onScroll={handleScroll}
        className="flex-1 w-full overflow-y-auto custom-scrollbar pb-20 md:pb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pb-4">
          {items.map((item, index) => (
            <StatCard key={item.id} achievement={item} index={index} />
          ))}
        </div>
      </div>

      {/* Scroll Guide - Disappears when reached bottom */}
      <AnimatePresence>
        {!isAtBottom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-20"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-discord-primary bg-black/50 px-3 py-1 rounded-full backdrop-blur-md">
              계속 스크롤하세요
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown className="text-white" size={24} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Summary;
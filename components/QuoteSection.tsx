import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { QUOTE } from '../constants';

const QuoteSection: React.FC = () => {
  return (
    <section className="h-full w-full flex flex-col items-center justify-center px-6 bg-black relative overflow-hidden">
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
       
       <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8 flex justify-center text-discord-primary"
          >
            <Quote size={48} className="fill-current" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8"
          >
            "{QUOTE.text}"
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl font-display font-bold text-discord-muted bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-white"
          >
            — {QUOTE.sub}
          </motion.div>
       </div>
    </section>
  );
};

export default QuoteSection;
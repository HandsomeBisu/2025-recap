import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react';
import { Achievement } from '../types';

interface AchievementSlideProps {
  data: Achievement;
}

const AchievementSlide: React.FC<AchievementSlideProps> = ({ data }) => {
  const Icon = data.icon;
  const [imgError, setImgError] = useState(false);

  return (
    <section className="h-full w-full flex flex-col md:flex-row items-center justify-center p-6 md:p-16 gap-8 md:gap-16 max-w-7xl mx-auto">
      
      {/* Text Content - Left Side (Desktop) / Bottom (Mobile) */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-1 w-full flex flex-col justify-center text-left order-2 md:order-1"
      >
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${data.color} bg-opacity-20 text-white shadow-[0_0_30px_rgba(255,255,255,0.1)]`}>
          <Icon size={32} />
        </div>
        
        <h3 className="text-discord-primary font-bold tracking-wider uppercase mb-2 text-lg">
          {data.title}
        </h3>
        
        <div className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-tight">
          {data.value}
        </div>
        
        <p className="text-discord-muted text-xl md:text-2xl font-medium leading-relaxed">
          {data.description}
        </p>
      </motion.div>

      {/* Visual Content - Right Side (Desktop) / Top (Mobile) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, x: 50 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex-1 w-full order-1 md:order-2"
      >
        <div className="relative group w-full aspect-video bg-discord-card rounded-3xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center overflow-hidden hover:border-discord-primary/50 transition-colors duration-300">
          
          {/* Background Glow */}
          <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${data.color}`} />
          
          {data.image && !imgError ? (
            <img 
              src={data.image} 
              alt={data.title} 
              className="w-full h-full object-cover" 
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="flex flex-col items-center gap-4 text-discord-muted/40 group-hover:text-discord-primary/60 transition-colors">
              <ImageIcon size={64} strokeWidth={1.5} />
              <span className="font-mono text-sm uppercase tracking-widest border border-current px-3 py-1 rounded-full">
                Add Image Here
              </span>
            </div>
          )}
        </div>
      </motion.div>

    </section>
  );
};

export default AchievementSlide;
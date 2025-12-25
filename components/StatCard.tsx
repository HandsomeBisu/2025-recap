import React from 'react';
import { motion } from 'framer-motion';
import { Achievement } from '../types';

interface StatCardProps {
  achievement: Achievement;
  index: number;
}

const StatCard: React.FC<StatCardProps> = ({ achievement, index }) => {
  const Icon = achievement.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100 
      }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`relative group overflow-hidden bg-discord-card rounded-3xl p-6 md:p-8 border border-white/5 hover:border-discord-primary/50 transition-colors ${achievement.gridSpan || ''}`}
    >
      {/* Background Glow */}
      <div className={`absolute top-0 right-0 w-32 h-32 opacity-10 rounded-full blur-2xl -mr-10 -mt-10 transition-opacity group-hover:opacity-20 ${achievement.color}`} />
      
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="mb-6">
          <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-4 ${achievement.color} bg-opacity-20 text-white`}>
            <Icon size={24} className="md:w-7 md:h-7" />
          </div>
          <h3 className="text-discord-muted text-sm md:text-base font-semibold uppercase tracking-wider mb-1">
            {achievement.title}
          </h3>
          <div className="text-4xl md:text-5xl font-black text-white tracking-tight">
            {achievement.value}
          </div>
        </div>
        
        <p className="text-discord-muted/80 text-sm md:text-base font-medium leading-relaxed">
          {achievement.description}
        </p>
      </div>

      {/* Shine effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
    </motion.div>
  );
};

export default StatCard;
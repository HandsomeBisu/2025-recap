import React from 'react';
import { motion } from 'framer-motion';
import { CONTRIBUTORS } from '../constants';
import { Shield } from 'lucide-react';

const Contributors: React.FC = () => {
  return (
    <section className="h-full w-full flex flex-col items-center justify-start pt-28 md:pt-32 relative overflow-hidden px-6">
      {/* Decorative gradient line */}
      <div className="absolute top-[15%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-discord-primary to-transparent opacity-30" />

      <div className="w-full max-w-6xl mx-auto flex flex-col h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 shrink-0"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            CONTRIBUTORS
          </h2>
          <p className="text-discord-muted text-lg">
            DPS가 여기까지 올 수 있었던 것은 여러분 덕분입니다.
          </p>
        </motion.div>

        {/* Scrollable Grid Container */}
        <div className="flex-1 overflow-y-auto w-full px-4 custom-scrollbar pb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {CONTRIBUTORS.map((person, idx) => (
                <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="w-full max-w-[260px] bg-discord-card rounded-2xl overflow-hidden border border-white/5 hover:border-discord-primary/50 shadow-lg hover:shadow-xl hover:shadow-discord-primary/10 transition-all group"
                >
                {/* Banner */}
                <div className={`h-20 w-full bg-gradient-to-r ${getGradient(idx)} opacity-80 group-hover:opacity-100 transition-opacity relative`}>
                    <div className="absolute inset-0 bg-black/10" />
                </div>
                
                {/* Profile Content */}
                <div className="px-5 pb-6 flex flex-col items-center relative -mt-10">
                    {/* Avatar */}
                    <div className="w-20 h-20 rounded-full border-[6px] border-discord-card bg-discord-card z-10 overflow-hidden shadow-sm">
                        {person.image ? (
                            <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-discord-bg text-discord-text font-bold text-2xl">
                                {person.name[0]}
                            </div>
                        )}
                    </div>
                    
                    {/* Badge */}
                    <div className="absolute top-8 right-6 bg-discord-card rounded-full p-1 text-discord-primary" title="Contributor">
                        <Shield size={16} fill="currentColor" />
                    </div>

                    <h3 className="mt-3 font-bold text-xl text-white group-hover:text-discord-primary transition-colors">
                        {person.name}
                    </h3>
                    <p className="text-discord-muted text-sm font-medium mt-1">
                        {person.role || 'Contributor'}
                    </p>
                </div>
                </motion.div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};

// Helper to generate consistent gradients based on index
function getGradient(index: number): string {
    const gradients = [
        "from-indigo-500 to-purple-500",
        "from-emerald-500 to-teal-500",
        "from-blue-500 to-cyan-500",
        "from-rose-500 to-pink-500",
        "from-amber-500 to-orange-500",
        "from-violet-500 to-fuchsia-500",
        "from-sky-500 to-blue-500",
    ];
    return gradients[index % gradients.length];
}

export default Contributors;
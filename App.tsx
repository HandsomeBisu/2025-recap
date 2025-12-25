import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Hero from './components/Hero';
import AchievementSlide from './components/AchievementSlide';
import Contributors from './components/Contributors';
import Summary from './components/Summary';
import EndingSlide from './components/EndingSlide';
import Intro from './components/Intro';
import { ACHIEVEMENTS } from './constants';

// Custom Finger Icon Component
const SwipeFinger = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 2a2 2 0 0 0-2 2v8.5a.5.5 0 0 1-1 0V6a2 2 0 0 0-4 0v9a6 6 0 0 0 6 6h1a6 6 0 0 0 6-6V9a2 2 0 0 0-4 0v3.5" />
  </svg>
);

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const isTransitioning = useRef(false);
  const touchStartX = useRef(0);

  // Audio State
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleIntroComplete = () => {
    // Start music when Intro is finished
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Audio playback failed:", error);
        });
      }
    }
    // Transition to main app
    setShowIntro(false);
  };

  const handleStart = () => {
    // Hero 'Start' button click -> Go to first achievement
    changeSlide(1);
  };

  // Generate slides: Hero -> Individual Achievements -> Contributors -> Summary -> Ending (Quote + Footer)
  const slides = [
    <Hero key="hero" onStart={handleStart} />,
    ...ACHIEVEMENTS.map((item) => (
      <AchievementSlide key={item.id} data={item} />
    )),
    <Contributors key="contributors" />,
    <Summary key="summary" items={ACHIEVEMENTS} title="2025 AT A GLANCE" />,
    <EndingSlide key="ending" />
  ];

  const changeSlide = (newIndex: number) => {
    if (isTransitioning.current) return;
    if (newIndex < 0 || newIndex >= slides.length) return;

    setDirection(newIndex > currentSlide ? 1 : -1);
    setCurrentSlide(newIndex);
    isTransitioning.current = true;
    setTimeout(() => {
      isTransitioning.current = false;
    }, 600);
  };

  const handleWheel = (e: WheelEvent) => {
    if (showIntro) return; // Disable scrolling during intro

    // Check if we are inside a scrollable slide container (e.g., Summary page)
    const scrollContainer = document.getElementById('slide-scroll-container');
    
    if (scrollContainer) {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
      const atBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight - 5; // 5px tolerance
      const atTop = scrollTop <= 5;

      if (e.deltaY > 0) {
        // Scrolling DOWN
        if (!atBottom) {
          // If not at bottom, allow internal scroll and DO NOT change slide
          return; 
        }
        // If at bottom, proceed to change slide
      } else {
        // Scrolling UP
        if (!atTop) {
          // If not at top, allow internal scroll and DO NOT change slide
          return;
        }
        // If at top, proceed to change slide
      }
    }

    // Default slide navigation logic
    if (Math.abs(e.deltaY) > 30) {
      if (e.deltaY > 0) {
        changeSlide(currentSlide + 1);
      } else {
        changeSlide(currentSlide - 1);
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (showIntro) return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      changeSlide(currentSlide + 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      changeSlide(currentSlide - 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (showIntro) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        changeSlide(currentSlide + 1);
      } else {
        changeSlide(currentSlide - 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleWheel);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide, showIntro]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      position: 'absolute' as const,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      position: 'absolute' as const,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      position: 'absolute' as const,
    }),
  };

  return (
    <div 
      className="fixed inset-0 bg-discord-bg text-discord-text overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <audio ref={audioRef} src="assets/bgm.mp3" loop preload="auto" />

      {/* Intro Overlay */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro"
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[100]"
          >
            <Intro onComplete={handleIntroComplete} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          {!showIntro && (
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.4 }
              }}
              className="w-full h-full flex items-center justify-center"
            >
              {slides[currentSlide]}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation & UI controls - Only show after Intro */}
      {!showIntro && (
        <>
          {/* Side Navigation Buttons (Desktop) */}
          <div className="hidden md:flex fixed inset-y-0 left-0 items-center px-4 z-50">
            <button
              onClick={() => changeSlide(currentSlide - 1)}
              disabled={currentSlide === 0}
              className="p-3 rounded-full bg-black/20 hover:bg-discord-primary text-white/50 hover:text-white transition-all disabled:opacity-0 disabled:cursor-not-allowed backdrop-blur-sm"
            >
              <ChevronLeft size={32} />
            </button>
          </div>
          <div className="hidden md:flex fixed inset-y-0 right-0 items-center px-4 z-50">
            <button
              onClick={() => changeSlide(currentSlide + 1)}
              disabled={currentSlide === slides.length - 1}
              className="p-3 rounded-full bg-black/20 hover:bg-discord-primary text-white/50 hover:text-white transition-all disabled:opacity-0 disabled:cursor-not-allowed backdrop-blur-sm"
            >
              <ChevronRight size={32} />
            </button>
          </div>

          {/* Swipe Guide (Mobile - First Slide Only) */}
          <AnimatePresence>
            {currentSlide === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="fixed bottom-12 left-0 right-0 z-50 md:hidden flex flex-col items-center justify-center pointer-events-none"
              >
                <div className="flex flex-col items-center gap-3 text-white/70">
                  <motion.div
                    animate={{ x: [-15, 15, -15] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="bg-black/40 p-3 rounded-full backdrop-blur-sm border border-white/10"
                  >
                    <SwipeFinger size={28} />
                  </motion.div>
                  <span className="text-xs font-bold tracking-widest uppercase bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                    옆으로 스와이프 하세요
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Progress Dots */}
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-40">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => changeSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlide 
                    ? 'bg-discord-primary w-6' 
                    : 'bg-white/20 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          
          {/* Top Progress Bar */}
          <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-discord-primary to-purple-500 z-50 transition-all duration-500"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </>
      )}
    </div>
  );
}

export default App;
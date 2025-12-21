// src/components/Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 }
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-hero-gradient py-32 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-cyan/10 rounded-full blur-[120px] filter opacity-50 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-indigo/10 rounded-full blur-[100px] filter opacity-30"></div>
      </div>

      <motion.div
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 text-brand-cyan text-sm font-medium mb-8 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4" />
          <span>L'innovation au service de votre croissance</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-bold text-white leading-[1.1] tracking-tight">
          Nous construisons des
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-cyan bg-[length:200%_auto] animate-gradient-x">
            applications web
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-slate-400 text-lg md:text-2xl max-w-3xl mx-auto mt-8 leading-relaxed">
          De la startup à l'entreprise, nous transformons vos idées les plus audacieuses en solutions logicielles <span className="text-slate-200">robustes, scalables et performantes</span>.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
          <button className="group relative bg-brand-cyan text-brand-dark font-bold py-4 px-10 rounded-xl hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] flex items-center justify-center gap-2">
            Démarrer un projet
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="bg-slate-900/50 backdrop-blur-md border border-slate-700 text-slate-300 font-semibold py-4 px-10 rounded-xl hover:bg-slate-800 hover:text-white transition-all duration-300">
            Nos réalisations
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-brand-cyan to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;

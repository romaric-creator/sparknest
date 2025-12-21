// src/components/Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-emerald-50 to-white py-20 overflow-hidden border-b border-brand-border">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(var(--color-brand-accent) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <motion.div
        className="container mx-auto px-6 relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-white)] border border-brand-border text-brand-accent text-[10px] font-bold mb-8 tracking-widest uppercase"
        >
          <span>Innovation & Excellence</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-4xl md:text-7xl font-bold text-brand-text leading-[1.1] tracking-tight max-w-4xl mx-auto">
          Propulsez votre entreprise avec des
          <span className="text-brand-accent"> solutions digitales </span>
          sur-mesure
        </motion.h1>

        <motion.p variants={itemVariants} className="text-brand-slate text-lg md:text-xl max-w-2xl mx-auto mt-8 leading-relaxed">
          Nous concevons des applications web et mobiles performantes, pensées pour la scalabilité et l'expérience utilisateur.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <button className="btn-primary flex items-center justify-center gap-2">
            Démarrer un projet
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="btn-secondary">
            Voir nos réalisations
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

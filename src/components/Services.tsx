// src/components/Services.tsx
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const servicesData = [
  {
    title: 'Développement Web & Mobile',
    description: 'Création d\'applications sur-mesure, performantes et optimisées pour tous les supports.',
    icon: 'Code', // Placeholder for an icon
  },
  {
    title: 'Architecture Cloud & DevOps',
    description: 'Infrastructure scalable, CI/CD et automatisation pour une mise en production rapide et fiable.',
    icon: 'Cloud', // Placeholder for an icon
  },
  {
    title: 'UI/UX & Stratégie Produit',
    description: 'Conception d\'interfaces intuitives et engageantes qui répondent aux besoins de vos utilisateurs.',
    icon: 'Design', // Placeholder for an icon
  },
];

const Services: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" }); // Trigger once when 100px from bottom of viewport

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  // A simple function to render placeholder icons.
  // In a real app, you would use an icon library like react-icons.
  const renderIcon = (iconName: string) => {
    const baseClass = "w-8 h-8 mb-4 text-brand-cyan";
    if (iconName === 'Code') {
      return <svg className={baseClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>;
    }
    if (iconName === 'Cloud') {
      return <svg className={baseClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>;
    }
    if (iconName === 'Design') {
      return <svg className={baseClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>;
    }
    return null;
  };

  return (
    <section id="services" className="py-24 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">Nos Domaines d'Expertise</h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Nous offrons une gamme complète de services pour accompagner votre projet à chaque étape de son cycle de vie.
          </p>
        </div>
        <motion.div
          ref={ref}
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 transition-all duration-300 hover:border-brand-cyan/50 hover:-translate-y-2"
              style={{ backdropFilter: 'blur(12px)' }}
            >
              {renderIcon(service.icon)}
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

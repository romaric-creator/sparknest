// src/components/TechStack.tsx
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Code2,
  Database,
  Cloud,
  Layers,
  Cpu,
  Globe,
  Zap,
  Box
} from 'lucide-react';

const techLogos = [
  { name: 'React', icon: <Code2 className="w-8 h-8" /> },
  { name: 'Node.js', icon: <Cpu className="w-8 h-8" /> },
  { name: 'TypeScript', icon: <Zap className="w-8 h-8" /> },
  { name: 'GraphQL', icon: <Globe className="w-8 h-8" /> },
  { name: 'PostgreSQL', icon: <Database className="w-8 h-8" /> },
  { name: 'AWS', icon: <Cloud className="w-8 h-8" /> },
  { name: 'Docker', icon: <Box className="w-8 h-8" /> },
  { name: 'Kubernetes', icon: <Layers className="w-8 h-8" /> },
];

const TechStack: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

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
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="tech-stack" className="py-24 bg-brand-dark/50">
      <div className="container mx-auto px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-slate-400 font-medium mb-12 text-lg"
        >
          Les technologies que nous maîtrisons pour des produits d'exception
        </motion.h3>
        <motion.div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {techLogos.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group flex flex-col items-center gap-3"
            >
              <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 text-slate-400 group-hover:text-brand-cyan group-hover:border-brand-cyan/50 group-hover:bg-brand-cyan/5 transition-all duration-300 shadow-lg group-hover:shadow-brand-cyan/10">
                {tech.icon}
              </div>
              <span className="text-slate-500 font-medium text-sm group-hover:text-slate-200 transition-colors duration-300">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;

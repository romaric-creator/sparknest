// src/components/Features.tsx
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import apiFlowDiagram from '../assets/api-flow-diagram.png';

const Features: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const jsonCode = `{
  "service": "API Gateway",
  "route": "/v1/users",
  "authentication": "JWT",
  "downstream_services": [
    { "name": "user-service", "version": "2.1.0" },
    { "name": "auth-service", "version": "1.5.3" }
  ],
  "caching": {
    "enabled": true,
    "ttl": 3600
  }
}`;

  return (
    <section id="features" className="py-24 bg-slate-900/60">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">Une Expertise Technique Approfondie</h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Nous concevons des systèmes complexes, maintenables et prêts pour l'avenir.
          </p>
        </div>
        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Column: Code Editor */}
          <motion.div variants={itemVariants} className="bg-slate-950 border border-slate-800 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between bg-slate-800/50 px-4 py-2 border-b border-slate-700">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              </div>
              <span className="text-sm text-slate-400">api-gateway-config.json</span>
            </div>
            <pre className="p-6 text-sm text-slate-300 overflow-x-auto">
              <code className="font-mono">{jsonCode}</code>
            </pre>
          </motion.div>

          {/* Right Column: API Flow Diagram */}
          <motion.div variants={itemVariants} className="text-left">
            <h3 className="text-2xl font-semibold text-white mb-4">Des Architectures Modernes</h3>
            <p className="text-slate-400 mb-6">
              De la passerelle API aux microservices, nous utilisons des patrons de conception éprouvés pour garantir la résilience et la performance de vos applications. Chaque composant est pensé pour être indépendant, déployable et scalable.
            </p>
            {/* Diagram Placeholder */}
            <div className="rounded-lg overflow-hidden border border-slate-800 hover:border-brand-cyan/50 transition-all duration-300">
              <img
                src={apiFlowDiagram}
                alt="Diagramme de flux API avec microservices"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;

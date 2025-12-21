// src/components/Projects.tsx
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projectsData = [
    {
        title: 'E-commerce Platform',
        description: 'Plateforme e-commerce complète avec paiement en ligne, gestion de stock et tableau de bord administrateur.',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        demoUrl: '#',
        githubUrl: '#',
    },
    {
        title: 'API Banking System',
        description: 'Système bancaire sécurisé avec authentification multi-facteurs, transactions en temps réel et API RESTful.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
        technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Redis'],
        demoUrl: '#',
        githubUrl: '#',
    },
    {
        title: 'Mobile Health App',
        description: 'Application mobile de santé connectée avec suivi en temps réel, rappels de médicaments et téléconsultation.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
        technologies: ['React Native', 'Firebase', 'TensorFlow', 'WebRTC'],
        demoUrl: '#',
        githubUrl: '#',
    },
];

const Projects: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px 0px' });

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

    return (
        <section id="projects" className="py-24 bg-slate-900/60">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white">Nos Projets</h2>
                    <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
                        Découvrez quelques-uns des projets que nous avons réalisés avec passion et expertise.
                    </p>
                </div>

                <motion.div
                    ref={ref}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-brand-cyan/50 hover:-translate-y-2 group"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60"></div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                                <p className="text-slate-400 text-sm mb-4">{project.description}</p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="text-xs bg-brand-cyan/10 text-brand-cyan px-3 py-1 rounded-full border border-brand-cyan/30"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-4">
                                    <a
                                        href={project.demoUrl}
                                        className="flex items-center gap-2 text-sm text-brand-cyan hover:text-brand-cyan/80 transition-colors"
                                    >
                                        <ExternalLink size={16} />
                                        Demo
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        className="flex items-center gap-2 text-sm text-brand-cyan hover:text-brand-cyan/80 transition-colors"
                                    >
                                        <Github size={16} />
                                        Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;

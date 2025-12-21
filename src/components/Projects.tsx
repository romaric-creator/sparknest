import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { getProjects } from '../services/api';

const Projects: React.FC = () => {
    const [projectsData, setProjectsData] = useState<any[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const data = await getProjects();
                setProjectsData(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchProjects();
    }, []);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px 0px' });

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
        <section id="projects" className="py-24 bg-gradient-to-b from-emerald-50 to-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">Nos Réalisations</h2>
                    <p className="text-brand-muted text-lg">
                        Une sélection de projets qui illustrent notre savoir-faire technique et notre engagement envers la qualité.
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
                            className="group bg-brand-surface border border-brand-border rounded-lg p-6 flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-brand-accent"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 rounded-md overflow-hidden mb-6 border border-brand-border">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Project Content */}
                            <div className="flex-grow">
                                <h3 className="text-xl font-bold text-brand-text mb-3">{project.title}</h3>
                                <p className="text-brand-muted text-sm mb-6 line-clamp-3 leading-relaxed">{project.description}</p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies && project.technologies.split(',').map((tech: string, techIndex: number) => (
                                        <span
                                            key={techIndex}
                                            className="text-xs font-semibold uppercase tracking-wider bg-emerald-50 text-brand-accent px-2 py-1 rounded border border-emerald-200"
                                        >
                                            {tech.trim()}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Links */}
                            <div className="flex gap-6 pt-4 border-t border-brand-border mt-auto">
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm font-semibold text-brand-accent hover:text-brand-text"
                                >
                                    <ExternalLink size={14} />
                                    Live Demo
                                </a>
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm font-semibold text-brand-muted hover:text-brand-text"
                                >
                                    <Github size={14} />
                                    Source Code
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;

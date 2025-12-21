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
                                    {project.technologies && project.technologies.split(',').map((tech: string, techIndex: number) => (
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

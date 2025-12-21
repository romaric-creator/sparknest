// src/components/TechStack.tsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { getTechnologies } from '../services/api';

interface Technology {
    id: number;
    name: string;
    icon: string;
}

const TechStack: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

    const [technologies, setTechnologies] = useState<Technology[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTechs = async () => {
            try {
                setLoading(true);
                const data = await getTechnologies();
                setTechnologies(data);
            } catch (err) {
                setError('Impossible de charger les technologies.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchTechs();
    }, []);


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
        <section id="tech-stack" className="py-24 bg-gradient-to-b from-emerald-50/30 to-white">
            <div className="container mx-auto px-6 text-center">
                <motion.h3
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-brand-muted font-medium mb-12 text-lg max-w-2xl mx-auto"
                >
                    Les technologies que nous maîtrisons pour des produits d'exception
                </motion.h3>
                <motion.div
                    ref={ref}
                    className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 items-start justify-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {loading ? (
                        <p className="text-brand-muted col-span-full text-center">Chargement...</p>
                    ) : error ? (
                        <p className="text-red-500 col-span-full text-center">{error}</p>
                    ) : (
                        technologies.map((tech) => (
                            <motion.div
                                key={tech.id}
                                variants={itemVariants}
                                className="group flex flex-col items-center gap-3"
                            >
                                <div className="p-4 rounded-2xl bg-white border border-brand-border group-hover:border-brand-accent group-hover:shadow-lg transition-all duration-300">
                                    <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
                                </div>
                                <span className="text-brand-muted font-medium text-sm text-center group-hover:text-brand-text transition-colors duration-300">
                                    {tech.name}
                                </span>
                            </motion.div>
                        ))
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;

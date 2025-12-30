import React, { useState, useEffect, useRef } from 'react';
// import { motion } from 'framer-motion'; // Remove motion import
import { getTechnologies } from '../services/api';
import Icon from './Icon';
import { icons } from 'lucide-react'; // Import icons to get IconName type

interface Technology {
    id: number;
    name: string;
    icon: string; // This will now be the Lucide icon name
}

// Remove iconNameMapping as mobile app will send direct Lucide icon names
// const iconNameMapping: { [key: string]: string } = {
//     "Node JS": "Server", // Example mapping
//     "Typescript": "Brackets", // Example mapping
//     "React": "Atom", // Example mapping
//     // Add more mappings as needed
// };

const TechStack: React.FC = () => {
    const ref = useRef(null);
    // const isInView = useInView(ref, { once: true, margin: "-100px 0px" }); // Temporarily remove useInView

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


    // Remove containerVariants and itemVariants
    // const containerVariants = {
    //     hidden: { opacity: 0 },
    //     visible: {
    //         opacity: 1,
    //         transition: {
    //             staggerChildren: 0.1,
    //         },
    //     },
    // };

    // const itemVariants = {
    //     hidden: { y: 20, opacity: 0 },
    //     visible: { y: 0, opacity: 1 },
    // };

    return (
        <section id="tech-stack" className="py-24 bg-gradient-to-b from-emerald-50/30 to-white">
            <div className="container mx-auto px-6 text-center">
                <h3 // Changed from motion.h3
                    // initial={{ opacity: 0, y: -20 }}
                    // animate={{ opacity: 1, y: 0 }} // Always animate for now
                    // transition={{ duration: 0.6 }}
                    className="text-brand-muted font-medium mb-12 text-lg max-w-2xl mx-auto"
                >
                    Les technologies que nous maîtrisons pour des produits d'exception
                </h3>
                <div // Changed from motion.div
                    ref={ref}
                    className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 items-start justify-center"
                    // variants={containerVariants}
                    // initial="hidden"
                    // animate={isInView ? "visible" : "hidden"}
                >
                    {loading ? (
                        <p className="text-brand-muted col-span-full text-center">Chargement...</p>
                    ) : error ? (
                        <p className="text-red-500 col-span-full text-center">{error}</p>
                    ) : (
                        technologies.map((tech) => {
                            // Directly use tech.icon as the Lucide icon name
                            const lucideIconName = tech.icon as keyof typeof icons || 'HelpCircle'; // Fallback icon
                            return (
                                <div // Changed from motion.div
                                    key={tech.id}
                                    // variants={itemVariants}
                                    className="group flex flex-col items-center gap-3"
                                >
                                    <div className="p-4 rounded-2xl bg-white border border-brand-border group-hover:border-brand-accent group-hover:shadow-lg transition-all duration-300">
                                        <Icon name={lucideIconName} size={40} className="text-brand-text" />
                                    </div>
                                    <span className="text-brand-muted font-medium text-sm text-center group-hover:text-brand-text transition-colors duration-300">
                                        {tech.name}
                                    </span>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </section>
    );
};

export default TechStack;

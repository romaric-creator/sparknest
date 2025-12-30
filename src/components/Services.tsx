// src/components/Services.tsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { getServices } from '../services/api';
import Icon from './Icon';
import { icons } from 'lucide-react';

type IconName = keyof typeof icons;

interface Service {
    id: number;
    icon: string;
    title:string;
    description: string;
}

const Services: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
    
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                setLoading(true);
                const data: Service[] = await getServices();
                setServices(data);
            } catch (err) {
                setError('Impossible de charger les services.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchServices();
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
        <section id="services" className="py-24 bg-gradient-to-b from-white to-emerald-50/30 border-b border-brand-border">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-16 text-center mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">Nos Domaines d'Expertise</h2>
                    <p className="text-brand-muted text-lg">
                        Nous offrons une gamme complète de services pour accompagner votre transformation digitale avec rigueur et expertise.
                    </p>
                </div>
                <motion.div
                    ref={ref}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {loading ? (
                        <p className="text-brand-muted col-span-full text-center">Chargement des services...</p>
                    ) : error ? (
                        <p className="text-red-500 col-span-full text-center">{error}</p>
                    ) : (
                        services.map((service) => (
                            <motion.div
                                key={service.id}
                                variants={itemVariants}
                                className="bg-white border border-brand-border rounded-2xl p-8 hover:border-brand-accent hover:shadow-lg hover:-translate-y-1 group"
                            >
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center mb-6 group-hover:from-emerald-100 group-hover:to-emerald-200">
                                    <Icon name={service.icon as IconName} className="w-7 h-7 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold text-brand-text mb-3">{service.title}</h3>
                                <p className="text-brand-muted text-sm leading-relaxed">{service.description}</p>
                            </motion.div>
                        ))
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;

// src/components/Testimonials.tsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote, User } from 'lucide-react';
import { getTestimonials } from '../services/api';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    content: string;
    image?: string;
}

const Testimonials: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px 0px' });

    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                setLoading(true);
                const data = await getTestimonials();
                setTestimonials(data);
            } catch (err) {
                setError('Impossible de charger les témoignages.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchTestimonials();
    }, []);

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
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-emerald-50 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-64 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-brand-text mb-4">Ils nous font confiance</h2>
                    <p className="text-brand-muted max-w-2xl mx-auto">
                        La satisfaction de nos clients est notre meilleure carte de visite. Découvrez ce qu'ils disent de nous.
                    </p>
                </div>

                <motion.div
                    ref={ref}
                    className="grid md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {loading ? (
                        <p className="text-brand-muted col-span-full text-center">Chargement des témoignages...</p>
                    ) : error ? (
                        <p className="text-red-500 col-span-full text-center">{error}</p>
                    ) : (
                        testimonials.map((testimonial) => (
                            <motion.div
                                key={testimonial.id}
                                variants={itemVariants}
                                className="bg-brand-surface border border-brand-border p-8 rounded-2xl relative group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-brand-accent"
                            >
                                <Quote className="absolute top-6 right-6 text-slate-100 group-hover:text-brand-accent/20 transition-colors" size={40} />

                                <div className="flex items-center gap-4 mb-6">
                                    {testimonial.image ? (
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-12 h-12 rounded-full object-cover border-2 border-brand-border group-hover:border-brand-accent transition-colors"
                                        />
                                    ) : (
                                        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center border-2 border-brand-border group-hover:border-brand-accent transition-colors">
                                            <User size={24} className="text-brand-muted" />
                                        </div>
                                    )}
                                    <div>
                                        <h4 className="text-brand-text font-semibold">{testimonial.name}</h4>
                                        <p className="text-brand-muted text-sm">{testimonial.role}</p>
                                    </div>
                                </div>

                                <p className="text-brand-muted leading-relaxed">
                                    "{testimonial.content}"
                                </p>
                            </motion.div>
                        ))
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;


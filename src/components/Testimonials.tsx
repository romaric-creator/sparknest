// src/components/Testimonials.tsx
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Sophie Martin',
        role: 'CEO, TechStart',
        content: "L'équipe de SparkNest a transformé notre vision en réalité. Leur expertise technique et leur réactivité sont impressionnantes. Une collaboration fluide du début à la fin.",
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    },
    {
        name: 'Thomas Dubois',
        role: 'CTO, DataFlow',
        content: "Nous avions besoin d'une architecture complexe et scalable. SparkNest a relevé le défi haut la main. Le code est propre, documenté et performant.",
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    },
    {
        name: 'Marie Leroy',
        role: 'Product Manager, Innovate',
        content: "Ce que j'apprécie le plus chez SparkNest, c'est leur capacité à comprendre les enjeux business derrière la technique. Ils ne font pas que coder, ils conseillent.",
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    },
];

const Testimonials: React.FC = () => {
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
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <section id="testimonials" className="py-24 bg-brand-dark relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-64 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-brand-indigo/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Ils nous font confiance</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
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
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl relative group hover:border-brand-cyan/30 transition-colors duration-300"
                        >
                            <Quote className="absolute top-6 right-6 text-slate-700 group-hover:text-brand-cyan/20 transition-colors" size={40} />

                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-slate-700 group-hover:border-brand-cyan transition-colors"
                                />
                                <div>
                                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                                    <p className="text-slate-500 text-sm">{testimonial.role}</p>
                                </div>
                            </div>

                            <p className="text-slate-300 leading-relaxed italic">
                                "{testimonial.content}"
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;

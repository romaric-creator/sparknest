// src/components/Contact.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-24 bg-slate-900/30">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Info Side */}
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-6">Parlons de votre projet</h2>
                        <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                            Vous avez une idée ? Un défi technique ? Ou simplement envie d'échanger ?
                            Notre équipe est prête à vous écouter et à vous accompagner.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-brand-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Mail className="text-brand-cyan" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">Email</h4>
                                    <a href="mailto:christiantendainfo2006@gmail.com" className="text-slate-400 hover:text-brand-cyan transition-colors">
                                        christiantendainfo2006@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-brand-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Phone className="text-brand-cyan" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">Téléphone</h4>
                                    <p className="text-slate-400">+33 6 12 34 56 78</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-brand-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MapPin className="text-brand-cyan" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">Bureau</h4>
                                    <p className="text-slate-400">Paris, France</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl"
                    >
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Nom</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-colors"
                                        placeholder="Votre nom"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-colors"
                                        placeholder="votre@email.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-slate-400 mb-2">Sujet</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-colors"
                                    placeholder="De quoi s'agit-il ?"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-colors resize-none"
                                    placeholder="Racontez-nous votre projet..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-brand-cyan text-brand-dark font-bold py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                Envoyer le message
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;

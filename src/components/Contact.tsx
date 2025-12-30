// src/components/Contact.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { sendContactMessage } from '../services/api';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        try {
            await sendContactMessage({
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                content: formData.message
            });
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-24 bg-gradient-to-b from-emerald-50 to-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Info Side */}
                    <div>
                        <h2 className="text-4xl font-bold text-brand-text mb-6">Parlons de votre projet</h2>
                        <p className="text-brand-muted mb-8 text-lg leading-relaxed">
                            Vous avez une idée ? Un défi technique ? Ou simplement envie d'échanger ?
                            Notre équipe est prête à vous écouter et à vous accompagner.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Mail className="text-brand-accent" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-brand-text font-semibold mb-1">Email</h4>
                                    <a href="mailto:christiantendainfo2006@gmail.com" className="text-brand-muted hover:text-brand-accent transition-colors">
                                        christiantendainfo2006@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Phone className="text-brand-accent" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-brand-text font-semibold mb-1">Téléphone</h4>
                                    <p className="text-brand-muted">+33 6 12 34 56 78</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MapPin className="text-brand-accent" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-brand-text font-semibold mb-1">Bureau</h4>
                                    <p className="text-brand-muted">Douala, Cameroun</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-brand-surface border border-brand-border p-8 rounded-2xl shadow-lg"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-brand-muted mb-2">Nom</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-white border border-brand-border rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-colors"
                                        placeholder="Votre nom"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-brand-muted mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-white border border-brand-border rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-colors"
                                        placeholder="votre@email.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-brand-muted mb-2">Sujet</label>
                                <input
                                    type="text"
                                    id="subject"
                                    required
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    className="w-full bg-white border border-brand-border rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-colors"
                                    placeholder="De quoi s'agit-il ?"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-brand-muted mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-white border border-brand-border rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-colors resize-none"
                                    placeholder="Racontez-nous votre projet..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full bg-brand-accent text-white font-bold py-4 rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                            >
                                {status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
                                <Send size={18} />
                            </button>

                            {status === 'success' && <p className="text-green-600 text-center">Message envoyé avec succès !</p>}
                            {status === 'error' && <p className="text-red-600 text-center">Une erreur est survenue. Veuillez réessayer.</p>}
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;

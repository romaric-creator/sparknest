// src/pages/Team.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Code, Database, Layout, ChevronRight } from 'lucide-react';

const teamMembers = [
    {
        name: 'Alexandre Dubois',
        role: 'Co-fondateur & Tech Lead',
        bio: 'Architecte logiciel passionné avec 10 ans d\'expérience. Expert en solutions cloud scalables et microservices.',
        icon: Code,
        skills: ['Architecture', 'Node.js', 'Cloud', 'System Design'],
        social: {
            linkedin: '#',
            github: '#',
            twitter: '#'
        },
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
    },
    {
        name: 'Sarah Martin',
        role: 'Co-fondatrice & Lead Product',
        bio: 'Designeuse UX/UI obsédée par l\'expérience utilisateur. Elle transforme des idées complexes en interfaces intuitives.',
        icon: Layout,
        skills: ['UI/UX', 'Product Strategy', 'Figma', 'Frontend'],
        social: {
            linkedin: '#',
            github: '#',
            twitter: '#'
        },
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
    },
    {
        name: 'Thomas Bernard',
        role: 'Co-fondateur & Lead Developer',
        bio: 'Développeur Fullstack polyvalent. Il maîtrise aussi bien le backend complexe que les animations frontend fluides.',
        icon: Database,
        skills: ['React', 'TypeScript', 'DevOps', 'Performance'],
        social: {
            linkedin: '#',
            github: '#',
            twitter: '#'
        },
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
    }
];

const Team: React.FC = () => {
    return (
        <div className="min-h-screen bg-brand-dark pt-32 pb-24">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="max-w-3xl mb-20">
                    <h1 className="text-3xl md:text-5xl font-bold text-brand-text mb-6 tracking-tight">L'Équipe SparkNest</h1>
                    <p className="text-brand-slate text-lg leading-relaxed">
                        Nous sommes un trio d'experts passionnés, unis par une vision commune :
                        <span className="text-brand-accent font-semibold"> créer des solutions numériques d'exception</span>.
                        Pas d'intermédiaires, pas de juniors : vous travaillez directement avec les fondateurs.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-24">
                    {teamMembers.map((member, index) => {
                        const Icon = member.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="card-corporate flex flex-col h-full group"
                            >
                                {/* Image Header */}
                                <div className="relative h-48 rounded-lg overflow-hidden mb-6 border border-brand-border group-hover:border-brand-accent/30 transition-colors">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                    <div className="absolute bottom-3 left-3">
                                        <div className="w-10 h-10 bg-brand-dark/80 backdrop-blur-sm border border-brand-border rounded flex items-center justify-center">
                                            <Icon className="text-brand-accent" size={20} />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-grow">
                                    <h3 className="text-lg font-bold text-brand-text mb-1">{member.name}</h3>
                                    <p className="text-brand-accent text-xs font-semibold uppercase tracking-wider mb-4">{member.role}</p>
                                    <p className="text-brand-slate text-sm mb-6 leading-relaxed">
                                        {member.bio}
                                    </p>

                                    {/* Skills */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {member.skills.map((skill, idx) => (
                                            <span
                                                key={idx}
                                                className="text-[10px] font-semibold uppercase tracking-wider bg-brand-surface text-brand-slate px-2 py-1 rounded border border-brand-border"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="flex gap-4 pt-4 border-t border-brand-border mt-auto">
                                    <a href={member.social.linkedin} className="text-brand-slate hover:text-brand-accent transition-colors">
                                        <Linkedin size={18} />
                                    </a>
                                    <a href={member.social.github} className="text-brand-slate hover:text-brand-accent transition-colors">
                                        <Github size={18} />
                                    </a>
                                    <a href={member.social.twitter} className="text-brand-slate hover:text-brand-accent transition-colors">
                                        <Twitter size={18} />
                                    </a>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Values / Why Us */}
                <div className="grid md:grid-cols-2 gap-12 items-center bg-brand-surface rounded-2xl p-8 md:p-12 border border-brand-border">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 tracking-tight">Pourquoi nous choisir ?</h2>
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center flex-shrink-0">
                                    <span className="text-brand-accent text-xs font-bold">01</span>
                                </div>
                                <div>
                                    <h4 className="text-brand-text font-bold mb-2 text-sm uppercase tracking-wider">Expertise Directe</h4>
                                    <p className="text-brand-slate text-sm leading-relaxed">Vous parlez directement à ceux qui conçoivent et codent votre projet. Pas de perte d'information, pas de bureaucratie.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center flex-shrink-0">
                                    <span className="text-brand-accent text-xs font-bold">02</span>
                                </div>
                                <div>
                                    <h4 className="text-brand-text font-bold mb-2 text-sm uppercase tracking-wider">Agilité Maximale</h4>
                                    <p className="text-brand-slate text-sm leading-relaxed">Une structure légère permet des décisions rapides et une adaptation instantanée à vos besoins changeants.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center flex-shrink-0">
                                    <span className="text-brand-accent text-xs font-bold">03</span>
                                </div>
                                <div>
                                    <h4 className="text-brand-text font-bold mb-2 text-sm uppercase tracking-wider">Qualité Artisanale</h4>
                                    <p className="text-brand-slate text-sm leading-relaxed">Nous privilégions la qualité sur la quantité. Chaque ligne de code est pensée pour la performance et la durabilité.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center md:text-left md:pl-12 border-t md:border-t-0 md:border-l border-brand-border pt-12 md:pt-0">
                        <h3 className="text-2xl font-bold text-brand-text mb-4 tracking-tight">Prêt à collaborer ?</h3>
                        <p className="text-brand-slate mb-8 leading-relaxed">
                            Discutons de vos enjeux et voyons comment notre expertise peut propulser votre entreprise vers de nouveaux sommets.
                        </p>
                        <a
                            href="mailto:christiantendainfo2006@gmail.com"
                            className="btn-primary inline-flex items-center gap-2"
                        >
                            Démarrer une collaboration
                            <ChevronRight size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;

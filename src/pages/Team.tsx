// src/pages/Team.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Code, Database, Layout } from 'lucide-react';

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
        <div className="min-h-screen bg-brand-dark pt-20">
            <div className="container mx-auto px-6 py-16">
                {/* Header */}
                <div className="text-center mb-20">
                    <h1 className="text-5xl font-bold text-white mb-6">L'Équipe SparkNest</h1>
                    <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
                        Nous sommes un trio d'experts passionnés, unis par une vision commune :
                        <span className="text-brand-cyan font-semibold"> créer des solutions numériques d'exception</span>.
                        Pas d'intermédiaires, pas de juniors : vous travaillez directement avec les fondateurs.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    {teamMembers.map((member, index) => {
                        const Icon = member.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden group hover:border-brand-cyan/50 transition-all duration-300"
                            >
                                {/* Image Header */}
                                <div className="relative h-48 overflow-hidden">
                                    <div className="absolute inset-0 bg-brand-cyan/20 mix-blend-overlay z-10"></div>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute -bottom-6 left-6 z-20">
                                        <div className="w-12 h-12 bg-brand-cyan rounded-xl flex items-center justify-center shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
                                            <Icon className="text-brand-dark" size={24} />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="pt-10 p-6">
                                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                                    <p className="text-brand-cyan font-medium mb-4">{member.role}</p>
                                    <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                                        {member.bio}
                                    </p>

                                    {/* Skills */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {member.skills.map((skill, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs font-medium bg-slate-800 text-slate-300 px-3 py-1 rounded-full border border-slate-700"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Social Links */}
                                    <div className="flex gap-4 pt-4 border-t border-slate-800">
                                        <a href={member.social.linkedin} className="text-slate-400 hover:text-brand-cyan transition-colors">
                                            <Linkedin size={20} />
                                        </a>
                                        <a href={member.social.github} className="text-slate-400 hover:text-brand-cyan transition-colors">
                                            <Github size={20} />
                                        </a>
                                        <a href={member.social.twitter} className="text-slate-400 hover:text-brand-cyan transition-colors">
                                            <Twitter size={20} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Values / Why Us */}
                <div className="grid md:grid-cols-2 gap-12 items-center bg-slate-900/30 rounded-3xl p-8 md:p-12 border border-slate-800">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">Pourquoi travailler avec nous ?</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-brand-cyan/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-brand-cyan font-bold">1</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">Expertise Directe</h4>
                                    <p className="text-slate-400 text-sm">Vous parlez directement à ceux qui codent votre projet. Pas de perte d'information.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-brand-cyan/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-brand-cyan font-bold">2</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">Agilité Maximale</h4>
                                    <p className="text-slate-400 text-sm">Une petite équipe soudée prend des décisions rapides et s'adapte instantanément.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-brand-cyan/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-brand-cyan font-bold">3</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">Qualité Artisanale</h4>
                                    <p className="text-slate-400 text-sm">Nous ne faisons pas de l'abattage. Chaque ligne de code est pensée et optimisée.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">Prêt à lancer votre projet ?</h3>
                        <p className="text-slate-400 mb-8">
                            Discutons de vos besoins et voyons comment notre expertise peut vous aider à atteindre vos objectifs.
                        </p>
                        <a
                            href="mailto:christiantendainfo2006@gmail.com"
                            className="inline-block bg-brand-cyan text-brand-dark font-bold py-4 px-8 rounded-xl hover:bg-opacity-90 transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
                        >
                            Démarrer une collaboration
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;

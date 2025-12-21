// src/components/Marketplace.tsx
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Lock, Globe, Code2, Search, Database, Cloud, Shield, BarChart, MessageSquare } from 'lucide-react';

const categories = ['Tous', 'Finance', 'Sécurité', 'IA', 'Outils', 'Data'];

const apiData = [
    {
        id: 1,
        name: 'Payment Gateway API',
        description: 'API complète pour le traitement des paiements avec support multi-devises et webhooks.',
        icon: Zap,
        price: '€49',
        period: '/mois',
        category: 'Finance',
        features: ['10k transactions/mois', 'Multi-devises', 'Webhooks', 'Support 24/7'],
        popular: true,
    },
    {
        id: 2,
        name: 'Auth Secure API',
        description: 'Système d\'authentification sécurisé avec OAuth2, JWT et MFA.',
        icon: Lock,
        price: '€29',
        period: '/mois',
        category: 'Sécurité',
        features: ['OAuth2 & JWT', 'MFA', 'Session mgmt', 'Audit logs'],
        popular: false,
    },
    {
        id: 3,
        name: 'GeoLocation Pro',
        description: 'Géolocalisation précise, reverse geocoding et calcul d\'itinéraires.',
        icon: Globe,
        price: '€19',
        period: '/mois',
        category: 'Outils',
        features: ['100k requêtes', 'Reverse geocoding', 'Routing', 'Maps'],
        popular: false,
    },
    {
        id: 4,
        name: 'AI Code Assistant',
        description: 'Génération et optimisation de code propulsée par l\'IA.',
        icon: Code2,
        price: '€99',
        period: '/mois',
        category: 'IA',
        features: ['Code generation', 'Refactoring', 'Multi-langage', 'CI/CD'],
        popular: true,
    },
    {
        id: 5,
        name: 'Data Scraper API',
        description: 'Extraction de données web structurées à grande échelle.',
        icon: Database,
        price: '€59',
        period: '/mois',
        category: 'Data',
        features: ['JS Rendering', 'Proxy rotation', 'Structured data', 'API/Webhook'],
        popular: false,
    },
    {
        id: 6,
        name: 'Cloud Storage API',
        description: 'Stockage objet scalable et sécurisé compatible S3.',
        icon: Cloud,
        price: '€39',
        period: '/mois',
        category: 'Outils',
        features: ['1TB Stockage', 'CDN inclus', 'Encryption', 'Backups'],
        popular: false,
    },
    {
        id: 7,
        name: 'Fraud Detection AI',
        description: 'Détection de fraude en temps réel par machine learning.',
        icon: Shield,
        price: '€149',
        period: '/mois',
        category: 'Sécurité',
        features: ['Real-time scoring', 'Custom rules', 'ML models', 'Dashboard'],
        popular: true,
    },
    {
        id: 8,
        name: 'Analytics Engine',
        description: 'Analytique produit et comportement utilisateur sans cookies.',
        icon: BarChart,
        price: '€45',
        period: '/mois',
        category: 'Data',
        features: ['Privacy first', 'Custom events', 'Funnels', 'Retention'],
        popular: false,
    },
    {
        id: 9,
        name: 'NLP Sentiment API',
        description: 'Analyse de sentiment et classification de texte multilingue.',
        icon: MessageSquare,
        price: '€79',
        period: '/mois',
        category: 'IA',
        features: ['Sentiment analysis', 'Entity extraction', '50+ langues', 'Batch processing'],
        popular: false,
    }
];

const Marketplace: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Tous');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px 0px' });

    const filteredApis = apiData.filter(api => {
        const matchesSearch = api.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            api.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'Tous' || api.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <section id="marketplace" className="min-h-screen pt-32 pb-24 bg-brand-dark">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4">Marketplace API</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Explorez notre catalogue d'APIs prêtes à l'emploi. Intégrez des fonctionnalités puissantes en quelques minutes.
                    </p>
                </div>

                {/* Search & Filter */}
                <div className="mb-12 space-y-6">
                    {/* Search Bar */}
                    <div className="max-w-xl mx-auto relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                        <input
                            type="text"
                            placeholder="Rechercher une API (ex: paiement, auth...)"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-slate-900/50 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-colors"
                        />
                    </div>

                    {/* Categories */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === cat
                                        ? 'bg-brand-cyan text-brand-dark'
                                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <motion.div
                    ref={ref}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    key={selectedCategory + searchTerm} // Force re-render animation on filter change
                >
                    {filteredApis.length > 0 ? (
                        filteredApis.map((api) => {
                            const IconComponent = api.icon;
                            return (
                                <motion.div
                                    key={api.id}
                                    variants={itemVariants}
                                    className={`relative bg-slate-900/50 border ${api.popular ? 'border-brand-cyan' : 'border-slate-800'} rounded-xl p-6 transition-all duration-300 hover:border-brand-cyan/50 hover:-translate-y-1 group`}
                                >
                                    {api.popular && (
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                            <span className="bg-brand-cyan text-brand-dark text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-brand-cyan/20">
                                                POPULAIRE
                                            </span>
                                        </div>
                                    )}

                                    <div className="flex justify-between items-start mb-4">
                                        <div className="w-12 h-12 bg-brand-cyan/10 rounded-lg flex items-center justify-center group-hover:bg-brand-cyan/20 transition-colors">
                                            <IconComponent className="text-brand-cyan" size={24} />
                                        </div>
                                        <span className="text-xs font-medium text-slate-500 bg-slate-800 px-2 py-1 rounded">
                                            {api.category}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2">{api.name}</h3>
                                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">{api.description}</p>

                                    <div className="flex items-baseline gap-1 mb-6">
                                        <span className="text-3xl font-bold text-white">{api.price}</span>
                                        <span className="text-slate-500 text-sm">{api.period}</span>
                                    </div>

                                    <ul className="space-y-2 mb-6">
                                        {api.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-sm text-slate-400">
                                                <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <button className="w-full bg-slate-800 hover:bg-brand-cyan hover:text-brand-dark text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300">
                                        Voir les détails
                                    </button>
                                </motion.div>
                            );
                        })
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <p className="text-slate-500 text-lg">Aucune API ne correspond à votre recherche.</p>
                            <button
                                onClick={() => { setSearchTerm(''); setSelectedCategory('Tous'); }}
                                className="mt-4 text-brand-cyan hover:underline"
                            >
                                Réinitialiser les filtres
                            </button>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default Marketplace;

// src/components/Marketplace.tsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Search, ChevronRight, HelpCircle } from 'lucide-react';
import { getMarketplaceItems } from '../services/api';

// Helper to dynamically render Lucide icons
const DynamicIcon = ({ name, ...props }) => {
    const IconComponent = Icons[name];

    if (!IconComponent) {
        // Return a default icon or null
        return <HelpCircle {...props} />;
    }

    return <IconComponent {...props} />;
};

interface MarketplaceItem {
    id: number;
    name: string;
    description: string;
    icon: string;
    price: string;
    period: string;
    category: string;
    features: string; // Stored as comma-separated string
    popular: boolean;
}

const Marketplace: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Tous');
    const [marketplaceItems, setMarketplaceItems] = useState<MarketplaceItem[]>([]);
    const [categories, setCategories] = useState<string[]>(['Tous']);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px 0px' });

    useEffect(() => {
        const fetchMarketplaceItems = async () => {
            try {
                setLoading(true);
                const data = await getMarketplaceItems();
                setMarketplaceItems(data);

                // Extract unique categories
                const uniqueCategories = Array.from(new Set(data.map((item: MarketplaceItem) => item.category)));
                setCategories(['Tous', ...uniqueCategories]);
            } catch (err) {
                setError('Impossible de charger les articles de la marketplace.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchMarketplaceItems();
    }, []);

    const filteredApis = marketplaceItems.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'Tous' || item.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 },
        },
    };

    const itemVariants = {
        hidden: { y: 10, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <section id="marketplace" className="min-h-screen pt-32 pb-24 bg-brand-dark">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-brand-text mb-4 tracking-tight">Marketplace API</h2>
                    <p className="text-brand-muted text-lg">
                        Explorez notre catalogue d'APIs professionnelles. Intégrez des fonctionnalités robustes en quelques minutes.
                    </p>
                </div>

                {/* Search & Filter */}
                <div className="mb-12 flex flex-col md:flex-row gap-6 items-center justify-between border-b border-brand-border pb-8">
                    {/* Categories */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-1.5 rounded-md text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${selectedCategory === cat
                                    ? 'bg-brand-accent text-brand-dark'
                                    : 'bg-brand-surface text-brand-muted hover:text-brand-text border border-brand-border'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search Bar */}
                    <div className="w-full md:w-80 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted" size={16} />
                        <input
                            type="text"
                            placeholder="Rechercher une API..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-brand-surface border border-brand-border rounded-md py-2 pl-10 pr-4 text-sm text-brand-text placeholder-brand-muted focus:outline-none focus:border-brand-accent transition-colors"
                        />
                    </div>
                </div>

                {/* Grid */}
                <motion.div
                    ref={ref}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    key={selectedCategory + searchTerm}
                >
                    {loading ? (
                        <p className="text-brand-muted col-span-full text-center">Chargement des articles...</p>
                    ) : error ? (
                        <p className="text-red-500 col-span-full text-center">{error}</p>
                    ) : filteredApis.length > 0 ? (
                        filteredApis.map((item) => {
                            const itemFeatures = item.features.split(',').map(f => f.trim());
                            return (
                                <motion.div
                                    key={item.id}
                                    variants={itemVariants}
                                    className={`bg-brand-surface border border-brand-border rounded-2xl p-8 flex flex-col h-full hover:border-brand-accent hover:shadow-lg hover:-translate-y-1 group ${item.popular ? 'border-brand-accent/40' : ''}`}
                                >
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-10 h-10 bg-brand-surface border border-brand-border rounded flex items-center justify-center">
                                            <DynamicIcon name={item.icon} className="text-brand-accent" size={20} />
                                        </div>
                                        {item.popular && (
                                            <span className="text-[10px] font-bold bg-brand-accent/10 text-brand-accent px-2 py-0.5 rounded border border-brand-accent/20 uppercase tracking-tighter">
                                                Populaire
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-lg font-bold text-brand-text mb-2">{item.name}</h3>
                                    <p className="text-brand-muted text-sm mb-6 line-clamp-2 leading-relaxed">{item.description}</p>

                                    <div className="flex items-baseline gap-1 mb-6">
                                        <span className="text-2xl font-bold text-brand-text">{item.price}</span>
                                        <span className="text-brand-muted text-xs">{item.period}</span>
                                    </div>

                                    <ul className="space-y-3 mb-8 flex-grow">
                                        {itemFeatures.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-xs text-brand-muted">
                                                <ChevronRight size={12} className="text-brand-accent" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <button className="btn-secondary w-full text-xs py-2.5 flex items-center justify-center gap-2 group">
                                        Voir la documentation
                                        <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                                    </button>
                                </motion.div>
                            );
                        })
                    ) : (
                        <div className="col-span-full text-center py-20 border border-dashed border-brand-border rounded-xl">
                            <p className="text-brand-muted text-lg">Aucune API ne correspond à votre recherche.</p>
                            <button
                                onClick={() => { setSearchTerm(''); setSelectedCategory('Tous'); }}
                                className="mt-4 text-brand-accent hover:underline text-sm font-medium"
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

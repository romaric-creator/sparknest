// src/pages/Blog.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = ['Tous', 'Architecture', 'Mobile', 'Sécurité', 'IA & Machine Learning', 'DevOps', 'UI/UX'];

const blogPosts = [
    {
        id: 1,
        title: 'Les Microservices en 2024 : Guide Complet',
        excerpt: 'Découvrez comment architecturer vos applications avec une approche microservices moderne et scalable.',
        author: 'SparkNest Team',
        date: '15 Décembre 2024',
        category: 'Architecture',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop',
        readTime: '8 min',
    },
    {
        id: 2,
        title: 'Optimiser les Performances React Native',
        excerpt: 'Techniques avancées pour améliorer les performances de vos applications React Native.',
        author: 'SparkNest Team',
        date: '10 Décembre 2024',
        category: 'Mobile',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop',
        readTime: '6 min',
    },
    {
        id: 3,
        title: 'Sécurité des API : Bonnes Pratiques',
        excerpt: 'Comment sécuriser vos API avec OAuth2, JWT et autres mécanismes de protection.',
        author: 'SparkNest Team',
        date: '5 Décembre 2024',
        category: 'Sécurité',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop',
        readTime: '10 min',
    },
    {
        id: 4,
        title: 'Introduction à TensorFlow pour Développeurs',
        excerpt: 'Premiers pas avec TensorFlow pour intégrer l\'IA dans vos applications.',
        author: 'SparkNest Team',
        date: '1 Décembre 2024',
        category: 'IA & Machine Learning',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
        readTime: '12 min',
    },
    {
        id: 5,
        title: 'CI/CD avec GitHub Actions',
        excerpt: 'Automatisez vos déploiements avec GitHub Actions et Docker.',
        author: 'SparkNest Team',
        date: '28 Novembre 2024',
        category: 'DevOps',
        image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=500&fit=crop',
        readTime: '7 min',
    },
    {
        id: 6,
        title: 'Design Systems : Construire une UI Cohérente',
        excerpt: 'Créez un design system scalable pour vos applications avec Figma et Storybook.',
        author: 'SparkNest Team',
        date: '20 Novembre 2024',
        category: 'UI/UX',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop',
        readTime: '9 min',
    },
    {
        id: 7,
        title: 'Kubernetes pour les Débutants',
        excerpt: 'Comprendre les concepts de base de l\'orchestration de conteneurs avec K8s.',
        author: 'SparkNest Team',
        date: '15 Novembre 2024',
        category: 'DevOps',
        image: 'https://images.unsplash.com/photo-1667372393119-c85c020799a3?w=800&h=500&fit=crop',
        readTime: '15 min',
    },
    {
        id: 8,
        title: 'L\'avenir du Web avec WebAssembly',
        excerpt: 'Pourquoi WebAssembly va révolutionner les performances des applications web.',
        author: 'SparkNest Team',
        date: '10 Novembre 2024',
        category: 'Architecture',
        image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?w=800&h=500&fit=crop',
        readTime: '8 min',
    },
    {
        id: 9,
        title: 'UX Mobile : Les Erreurs à Éviter',
        excerpt: 'Les pièges courants dans la conception d\'interfaces mobiles et comment les contourner.',
        author: 'SparkNest Team',
        date: '5 Novembre 2024',
        category: 'UI/UX',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop',
        readTime: '6 min',
    }
];

const Blog: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Tous');

    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'Tous' || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-brand-dark pt-20">
            <div className="container mx-auto px-6 py-16">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-white mb-4">Blog SparkNest</h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Découvrez nos articles sur le développement web, mobile, l'architecture cloud et les dernières technologies.
                    </p>
                </div>

                {/* Search & Filter */}
                <div className="mb-16 space-y-6">
                    {/* Search Bar */}
                    <div className="max-w-xl mx-auto relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                        <input
                            type="text"
                            placeholder="Rechercher un article..."
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

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                layout // Enable layout animation for filtering
                                className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-brand-cyan/50 hover:-translate-y-2 group"
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-brand-cyan text-brand-dark text-xs font-bold px-3 py-1 rounded-full">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-brand-cyan transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>
                                    <p className="text-slate-400 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                                    {/* Meta */}
                                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                                        <span className="flex items-center gap-1">
                                            <User size={14} />
                                            {post.author}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            {post.date}
                                        </span>
                                        <span>{post.readTime}</span>
                                    </div>

                                    {/* Read More */}
                                    <Link
                                        to={`/blog/${post.id}`}
                                        className="inline-flex items-center gap-2 text-brand-cyan hover:gap-3 transition-all duration-300"
                                    >
                                        Lire l'article
                                        <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </motion.article>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <p className="text-slate-500 text-lg">Aucun article ne correspond à votre recherche.</p>
                            <button
                                onClick={() => { setSearchTerm(''); setSelectedCategory('Tous'); }}
                                className="mt-4 text-brand-cyan hover:underline"
                            >
                                Réinitialiser les filtres
                            </button>
                        </div>
                    )}
                </div>

                {/* Pagination (Static for now) */}
                {filteredPosts.length > 6 && (
                    <div className="flex justify-center gap-2 mt-12">
                        <button className="px-4 py-2 bg-brand-cyan text-brand-dark rounded-lg font-semibold">
                            1
                        </button>
                        <button className="px-4 py-2 bg-slate-900 text-slate-400 rounded-lg hover:bg-slate-800 transition-colors">
                            2
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blog;

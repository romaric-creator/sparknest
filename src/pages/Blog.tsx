import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getArticles } from '../services/api';

interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
}

const categories = ['Tous', 'Architecture', 'Mobile', 'Sécurité', 'IA & Machine Learning', 'DevOps', 'UI/UX'];

const Blog: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Tous');
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const data: BlogPost[] = await getArticles();
                setBlogPosts(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchArticles();
    }, []);

    const filteredPosts = blogPosts.filter((post: BlogPost) => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (post.excerpt && post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()));
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
                        {categories.map((cat: string) => (
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

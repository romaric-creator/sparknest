import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search, Clock } from 'lucide-react';
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
        <div className="min-h-screen bg-brand-dark pt-32 pb-24">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="max-w-3xl mb-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-brand-text mb-4 tracking-tight">Blog SparkNest</h1>
                    <p className="text-brand-slate text-lg">
                        Expertise technique, retours d'expérience et actualités du monde du développement.
                    </p>
                </div>

                {/* Search & Filter */}
                <div className="mb-12 flex flex-col md:flex-row gap-6 items-center justify-between border-b border-brand-border pb-8">
                    {/* Categories */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat: string) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-1.5 rounded-md text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${selectedCategory === cat
                                    ? 'bg-brand-accent text-brand-dark'
                                    : 'bg-brand-surface text-brand-slate hover:text-brand-text border border-brand-border'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search Bar */}
                    <div className="w-full md:w-80 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-slate" size={16} />
                        <input
                            type="text"
                            placeholder="Rechercher un article..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-brand-surface border border-brand-border rounded-md py-2 pl-10 pr-4 text-sm text-brand-text placeholder-brand-slate focus:outline-none focus:border-brand-accent transition-colors"
                        />
                    </div>
                </div>

                {/* Blog Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post) => (
                            <motion.article
                                key={post.id}
                                variants={itemVariants}
                                className="card-corporate flex flex-col h-full group"
                            >
                                {/* Image */}
                                <div className="relative h-48 rounded-lg overflow-hidden mb-6 border border-brand-border group-hover:border-brand-accent/30 transition-colors">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-3 left-3">
                                        <span className="bg-brand-dark/80 backdrop-blur-sm text-brand-accent text-[10px] font-bold px-2 py-0.5 rounded border border-brand-accent/20 uppercase tracking-wider">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-grow">
                                    <h2 className="text-lg font-bold text-brand-text mb-3 group-hover:text-brand-accent transition-colors line-clamp-2 leading-tight">
                                        {post.title}
                                    </h2>
                                    <p className="text-brand-slate text-sm mb-6 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                                </div>

                                {/* Meta */}
                                <div className="flex items-center justify-between pt-4 border-t border-brand-border mt-auto">
                                    <div className="flex items-center gap-3 text-[10px] font-semibold text-brand-slate uppercase tracking-wider">
                                        <span className="flex items-center gap-1">
                                            <Calendar size={12} className="text-brand-accent" />
                                            {post.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock size={12} className="text-brand-accent" />
                                            {post.readTime}
                                        </span>
                                    </div>
                                    <Link
                                        to={`/blog/${post.id}`}
                                        className="text-brand-accent hover:opacity-80 transition-opacity"
                                    >
                                        <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </motion.article>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20 border border-dashed border-brand-border rounded-xl">
                            <p className="text-brand-slate text-lg">Aucun article ne correspond à votre recherche.</p>
                            <button
                                onClick={() => { setSearchTerm(''); setSelectedCategory('Tous'); }}
                                className="mt-4 text-brand-accent hover:underline text-sm font-medium"
                            >
                                Réinitialiser les filtres
                            </button>
                        </div>
                    )}
                </motion.div>

                {/* Pagination (Static for now) */}
                {filteredPosts.length > 6 && (
                    <div className="flex justify-center gap-2 mt-16">
                        <button className="w-10 h-10 flex items-center justify-center bg-brand-accent text-brand-dark rounded font-bold text-sm">
                            1
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center bg-brand-surface text-brand-slate border border-brand-border rounded hover:text-brand-text transition-colors text-sm">
                            2
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blog;

// src/pages/BlogPost.tsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark } from 'lucide-react';
import Comments from '../components/Comments';
import { getArticleById } from '../services/api';

interface Post {
    id: string;
    title: string;
    content: string;
    image: string;
    category: string;
    author: string;
    createdAt: string; // Assuming the API returns a date string
    readTime: string;
}

const BlogPost: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            if (!id) return;
            try {
                setLoading(true);
                const data = await getArticleById(id);
                setPost(data);
                setError(null);
            } catch (err) {
                setError('Article non trouvé.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
        window.scrollTo(0, 0);
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-brand-dark flex items-center justify-center">
                <p className="text-brand-text">Chargement de l'article...</p>
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="min-h-screen bg-brand-dark flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl text-brand-text mb-4">{error || 'Article non trouvé'}</h2>
                    <Link to="/blog" className="text-brand-accent hover:underline">Retour au blog</Link>
                </div>
            </div>
        );
    }

    const formattedDate = new Date(post.createdAt).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className="min-h-screen bg-brand-dark pt-20">
            {/* Hero Section */}
            <div className="relative py-20 border-b border-brand-border">
                <div className="container mx-auto px-6">
                    <Link to="/blog" className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-accent mb-8 transition-colors text-sm font-medium">
                        <ArrowLeft size={16} />
                        Retour au blog
                    </Link>

                    <div className="max-w-4xl">
                        <span className="bg-brand-surface border border-brand-border text-brand-accent text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider mb-6 inline-block">
                            {post.category}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-brand-text mb-8 leading-tight tracking-tight">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-brand-muted text-xs font-semibold uppercase tracking-wider">
                            <span className="flex items-center gap-2">
                                <User size={14} className="text-brand-accent" />
                                {post.author || 'SparkNest Team'}
                            </span>
                            <span className="flex items-center gap-2">
                                <Calendar size={14} className="text-brand-accent" />
                                {formattedDate}
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock size={14} className="text-brand-accent" />
                                {post.readTime || '5 min'} de lecture
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-16 grid lg:grid-cols-[1fr_320px] gap-16">
                {/* Main Content */}
                <article>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="prose prose-invert prose-lg max-w-none"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Comments Section */}
                    <div className="mt-20 pt-12 border-t border-brand-border">
                        <Comments />
                    </div>
                </article>

                {/* Sidebar */}
                <aside className="hidden lg:block space-y-8">
                    <div className="bg-brand-surface border border-brand-border rounded-lg p-6 sticky top-32">
                        <h3 className="text-sm font-bold text-brand-text mb-6 uppercase tracking-wider">À propos de l'auteur</h3>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-slate-100 border border-brand-border rounded-full flex items-center justify-center text-brand-muted">
                                <User size={24} />
                            </div>
                            <div>
                                <p className="font-bold text-brand-text text-sm">{post.author || 'SparkNest Team'}</p>
                                <p className="text-[10px] text-brand-muted font-bold uppercase tracking-tighter">Rédacteur</p>
                            </div>
                        </div>
                        <p className="text-sm text-brand-muted mb-8 leading-relaxed">
                            Expert en architecture logicielle et développement web moderne. Passionné par l'innovation et le partage de connaissances.
                        </p>
                        <div className="flex gap-3">
                            <button className="flex-1 bg-slate-100 text-brand-muted hover:text-brand-text text-xs py-2 flex items-center justify-center gap-2 rounded-md transition-colors">
                                <Share2 size={14} />
                                Partager
                            </button>
                            <button className="flex-1 bg-slate-100 text-brand-muted hover:text-brand-text text-xs py-2 flex items-center justify-center gap-2 rounded-md transition-colors">
                                <Bookmark size={14} />
                                Sauvegarder
                            </button>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default BlogPost;

// src/pages/BlogPost.tsx
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark } from 'lucide-react';
import Comments from '../components/Comments';

// Mock data import (ideally this should be shared or fetched)
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
        content: `
      <p>L'architecture microservices est devenue un standard pour les applications complexes et scalables. En 2024, les outils et les pratiques ont évolué pour rendre cette approche plus accessible et plus robuste.</p>
      
      <h3>Pourquoi les Microservices ?</h3>
      <p>Contrairement aux architectures monolithiques, les microservices permettent de diviser une application en petits services indépendants. Chaque service est responsable d'une fonctionnalité spécifique et peut être développé, déployé et mis à l'échelle indépendamment.</p>
      
      <h3>Les Avantages Clés</h3>
      <ul>
        <li><strong>Scalabilité :</strong> Vous pouvez allouer plus de ressources uniquement aux services qui en ont besoin.</li>
        <li><strong>Agilité :</strong> Les équipes peuvent travailler en parallèle sur différents services sans se bloquer.</li>
        <li><strong>Résilience :</strong> Une panne sur un service n'entraîne pas nécessairement l'arrêt de toute l'application.</li>
      </ul>

      <h3>Les Défis à Anticiper</h3>
      <p>Cependant, cette architecture n'est pas sans défis. La complexité de gestion, la latence réseau et la cohérence des données sont des points critiques à surveiller.</p>
      
      <h3>Conclusion</h3>
      <p>Adopter les microservices demande une maturité technique et organisationnelle, mais les bénéfices à long terme pour des applications d'envergure sont indéniables.</p>
    `
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
        content: `
      <p>React Native permet de créer des applications mobiles performantes, mais il est facile de tomber dans certains pièges qui ralentissent l'expérience utilisateur. Voici nos meilleures astuces pour garder vos apps fluides.</p>
      
      <h3>1. Utiliser FlatList correctement</h3>
      <p>Pour les longues listes, <code>FlatList</code> est incontournable. Assurez-vous d'implémenter <code>getItemLayout</code> et d'utiliser des composants purs pour les items.</p>
      
      <h3>2. Attention aux re-renders</h3>
      <p>Utilisez <code>React.memo</code>, <code>useMemo</code> et <code>useCallback</code> pour éviter les rendus inutiles, surtout dans les composants complexes.</p>
      
      <h3>3. Images optimisées</h3>
      <p>Préférez les formats modernes comme WebP et assurez-vous de redimensionner vos images avant de les afficher.</p>
    `
    },
    // ... other posts would go here with similar structure
];

const BlogPost: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    // Find post by ID
    const post = blogPosts.find(p => p.id === Number(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!post) {
        return (
            <div className="min-h-screen bg-brand-dark flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl text-white mb-4">Article non trouvé</h2>
                    <Link to="/blog" className="text-brand-cyan hover:underline">Retour au blog</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-brand-dark pt-20">
            {/* Hero Image */}
            <div className="relative h-[400px] w-full overflow-hidden">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
                    <div className="container mx-auto">
                        <span className="bg-brand-cyan text-brand-dark text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
                            {post.category}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-4xl leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-slate-300 text-sm">
                            <span className="flex items-center gap-2">
                                <User size={16} className="text-brand-cyan" />
                                {post.author}
                            </span>
                            <span className="flex items-center gap-2">
                                <Calendar size={16} className="text-brand-cyan" />
                                {post.date}
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock size={16} className="text-brand-cyan" />
                                {post.readTime} de lecture
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12 grid md:grid-cols-[1fr_300px] gap-12">
                {/* Main Content */}
                <div className="md:pr-8">
                    <Link to="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-brand-cyan mb-8 transition-colors">
                        <ArrowLeft size={16} />
                        Retour aux articles
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-slate-300 prose-strong:text-white prose-a:text-brand-cyan hover:prose-a:text-brand-cyan/80"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Comments Section */}
                    <Comments />
                </div>

                {/* Sidebar */}
                <aside className="hidden md:block space-y-8">
                    {/* Author Card */}
                    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 sticky top-24">
                        <h3 className="text-lg font-semibold text-white mb-4">À propos de l'auteur</h3>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-slate-400">
                                <User size={24} />
                            </div>
                            <div>
                                <p className="font-semibold text-white">{post.author}</p>
                                <p className="text-xs text-slate-500">Rédacteur Senior</p>
                            </div>
                        </div>
                        <p className="text-sm text-slate-400 mb-6">
                            Expert en architecture logicielle et développement web moderne. Passionné par l'innovation et le partage de connaissances.
                        </p>
                        <div className="flex gap-2">
                            <button className="flex-1 flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white py-2 rounded-lg text-sm transition-colors">
                                <Share2 size={16} />
                                Partager
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white py-2 rounded-lg text-sm transition-colors">
                                <Bookmark size={16} />
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

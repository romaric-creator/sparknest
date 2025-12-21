// src/components/Comments.tsx
import React, { useState } from 'react';
import { User, MessageSquare, Send } from 'lucide-react';
import { motion } from 'framer-motion';

interface Comment {
    id: number;
    author: string;
    date: string;
    content: string;
    avatar?: string;
}

const initialComments: Comment[] = [
    {
        id: 1,
        author: 'Jean Dupont',
        date: '16 Décembre 2024',
        content: 'Super article ! Très clair et concis. J\'ai particulièrement apprécié la partie sur l\'architecture hexagonale.',
    },
    {
        id: 2,
        author: 'Marie Martin',
        date: '17 Décembre 2024',
        content: 'Merci pour ce partage. Est-ce que vous prévoyez un article sur la mise en place de tests E2E avec Cypress ?',
    },
];

const Comments: React.FC = () => {
    const [comments, setComments] = useState<Comment[]>(initialComments);
    const [newComment, setNewComment] = useState('');
    const [authorName, setAuthorName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newComment.trim() || !authorName.trim()) return;

        const comment: Comment = {
            id: comments.length + 1,
            author: authorName,
            date: new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }),
            content: newComment,
        };

        setComments([...comments, comment]);
        setNewComment('');
        setAuthorName('');
    };

    return (
        <div className="mt-16 pt-16 border-t border-slate-800">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <MessageSquare className="text-brand-cyan" />
                Commentaires ({comments.length})
            </h3>

            {/* Comment List */}
            <div className="space-y-8 mb-12">
                {comments.map((comment) => (
                    <motion.div
                        key={comment.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex gap-4"
                    >
                        <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400">
                                <User size={20} />
                            </div>
                        </div>
                        <div className="flex-grow">
                            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="font-semibold text-white">{comment.author}</span>
                                    <span className="text-xs text-slate-500">{comment.date}</span>
                                </div>
                                <p className="text-slate-300 text-sm leading-relaxed">{comment.content}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Comment Form */}
            <div className="bg-slate-900/30 border border-slate-800 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4">Laisser un commentaire</h4>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">
                            Nom
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={authorName}
                            onChange={(e) => setAuthorName(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-brand-cyan transition-colors"
                            placeholder="Votre nom"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="comment" className="block text-sm font-medium text-slate-400 mb-1">
                            Message
                        </label>
                        <textarea
                            id="comment"
                            rows={4}
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-brand-cyan transition-colors resize-none"
                            placeholder="Partagez votre avis..."
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="flex items-center gap-2 bg-brand-cyan text-brand-dark font-semibold py-2 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300"
                    >
                        <Send size={18} />
                        Publier
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Comments;

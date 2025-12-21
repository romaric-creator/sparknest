// src/pages/NotFound.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle, ChevronRight } from 'lucide-react';

const NotFound: React.FC = () => {
    return (
        <div className="min-h-screen bg-brand-dark flex flex-col items-center justify-center px-6 text-center">
            <div className="w-16 h-16 bg-brand-surface border border-brand-border rounded-xl flex items-center justify-center mb-8">
                <AlertTriangle className="text-brand-accent" size={32} />
            </div>

            <h1 className="text-7xl md:text-9xl font-bold text-brand-text mb-4 tracking-tighter">404</h1>
            <h2 className="text-xl md:text-2xl font-bold text-brand-text mb-6 uppercase tracking-widest">Page introuvable</h2>

            <p className="text-brand-slate max-w-md mb-10 text-sm leading-relaxed">
                La page que vous recherchez n'existe pas ou a été déplacée.
                Veuillez vérifier l'URL ou retourner à la page d'accueil.
            </p>

            <Link
                to="/"
                className="btn-primary inline-flex items-center gap-2 text-sm"
            >
                <Home size={18} />
                Retour à l'accueil
                <ChevronRight size={16} />
            </Link>
        </div>
    );
};

export default NotFound;

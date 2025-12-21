// src/pages/NotFound.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';

const NotFound: React.FC = () => {
    return (
        <div className="min-h-screen bg-brand-dark flex flex-col items-center justify-center px-6 text-center">
            <div className="w-24 h-24 bg-brand-cyan/10 rounded-full flex items-center justify-center mb-8 animate-pulse">
                <AlertTriangle className="text-brand-cyan" size={48} />
            </div>

            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">Page introuvable</h2>

            <p className="text-slate-400 max-w-md mb-10 text-lg">
                Oups ! Il semblerait que vous vous soyez égaré dans le cyberespace. Cette page n'existe pas ou a été déplacée.
            </p>

            <Link
                to="/"
                className="inline-flex items-center gap-2 bg-brand-cyan text-brand-dark font-bold py-3 px-8 rounded-xl hover:bg-opacity-90 transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
            >
                <Home size={20} />
                Retour à l'accueil
            </Link>
        </div>
    );
};

export default NotFound;

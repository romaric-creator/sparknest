// src/pages/LegalNotice.tsx
import React from 'react';

const LegalNotice: React.FC = () => {
    return (
        <div className="min-h-screen bg-brand-dark pt-20">
            <div className="container mx-auto px-6 py-16 max-w-4xl">
                <h1 className="text-5xl font-bold text-white mb-8">Mentions Légales</h1>

                <div className="prose prose-invert prose-slate max-w-none">
                    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 mb-6">
                        <h2 className="text-2xl font-semibold text-white mb-4">Éditeur du site</h2>
                        <p className="text-slate-400 mb-2">
                            <strong className="text-white">Raison sociale :</strong> SparkNest
                        </p>
                        <p className="text-slate-400 mb-2">
                            <strong className="text-white">Adresse :</strong> Paris, France
                        </p>
                        <p className="text-slate-400 mb-2">
                            <strong className="text-white">Email :</strong>{' '}
                            <a href="mailto:christiantendainfo2006@gmail.com" className="text-brand-cyan hover:underline">
                                christiantendainfo2006@gmail.com
                            </a>
                        </p>
                        <p className="text-slate-400">
                            <strong className="text-white">Téléphone :</strong>{' '}
                            <a href="tel:+237678261699" className="text-brand-cyan hover:underline">
                                +237 678 26 16 99
                            </a>
                        </p>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 mb-6">
                        <h2 className="text-2xl font-semibold text-white mb-4">Directeur de la publication</h2>
                        <p className="text-slate-400">SparkNest Team</p>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 mb-6">
                        <h2 className="text-2xl font-semibold text-white mb-4">Hébergement</h2>
                        <p className="text-slate-400 mb-2">
                            <strong className="text-white">Hébergeur :</strong> À définir
                        </p>
                        <p className="text-slate-400">
                            Le site est hébergé sur une infrastructure cloud professionnelle garantissant sécurité et disponibilité.
                        </p>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 mb-6">
                        <h2 className="text-2xl font-semibold text-white mb-4">Propriété intellectuelle</h2>
                        <p className="text-slate-400 mb-4">
                            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
                            Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                        </p>
                        <p className="text-slate-400">
                            La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite
                            sauf autorisation expresse du directeur de la publication.
                        </p>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 mb-6">
                        <h2 className="text-2xl font-semibold text-white mb-4">Données personnelles</h2>
                        <p className="text-slate-400 mb-4">
                            Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD),
                            vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
                        </p>
                        <p className="text-slate-400">
                            Pour exercer ce droit, contactez-nous à l'adresse :{' '}
                            <a href="mailto:christiantendainfo2006@gmail.com" className="text-brand-cyan hover:underline">
                                christiantendainfo2006@gmail.com
                            </a>
                        </p>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                        <h2 className="text-2xl font-semibold text-white mb-4">Cookies</h2>
                        <p className="text-slate-400">
                            Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic.
                            En poursuivant votre navigation, vous acceptez l'utilisation de ces cookies.
                            Vous pouvez à tout moment modifier vos paramètres de cookies dans votre navigateur.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LegalNotice;

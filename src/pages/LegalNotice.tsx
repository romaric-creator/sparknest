// src/pages/LegalNotice.tsx
import React from 'react';
import { Shield, Scale, Info, Lock, Cookie } from 'lucide-react';

const LegalNotice: React.FC = () => {
    return (
        <div className="min-h-screen bg-brand-dark pt-32 pb-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="mb-16">
                    <h1 className="text-3xl md:text-5xl font-bold text-brand-text mb-6 tracking-tight">Mentions Légales</h1>
                    <p className="text-brand-slate text-lg">
                        Informations légales concernant l'édition et l'hébergement du site SparkNest.
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="card-corporate">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 bg-brand-accent/10 border border-brand-accent/20 rounded flex items-center justify-center">
                                <Info className="text-brand-accent" size={18} />
                            </div>
                            <h2 className="text-lg font-bold text-brand-text uppercase tracking-wider">Éditeur du site</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6 text-sm">
                            <div>
                                <p className="text-brand-slate mb-1 font-bold uppercase tracking-tighter text-[10px]">Raison sociale</p>
                                <p className="text-brand-text font-medium">SparkNest</p>
                            </div>
                            <div>
                                <p className="text-brand-slate mb-1 font-bold uppercase tracking-tighter text-[10px]">Adresse</p>
                                <p className="text-brand-text font-medium">Paris, France</p>
                            </div>
                            <div>
                                <p className="text-brand-slate mb-1 font-bold uppercase tracking-tighter text-[10px]">Email</p>
                                <a href="mailto:christiantendainfo2006@gmail.com" className="text-brand-accent hover:underline font-medium">
                                    christiantendainfo2006@gmail.com
                                </a>
                            </div>
                            <div>
                                <p className="text-brand-slate mb-1 font-bold uppercase tracking-tighter text-[10px]">Téléphone</p>
                                <a href="tel:+237678261699" className="text-brand-accent hover:underline font-medium">
                                    +237 678 26 16 99
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="card-corporate">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 bg-brand-accent/10 border border-brand-accent/20 rounded flex items-center justify-center">
                                <Shield className="text-brand-accent" size={18} />
                            </div>
                            <h2 className="text-lg font-bold text-brand-text uppercase tracking-wider">Directeur de la publication</h2>
                        </div>
                        <p className="text-brand-slate text-sm leading-relaxed">
                            L'équipe SparkNest assure la direction de la publication et la responsabilité éditoriale du site.
                        </p>
                    </div>

                    <div className="card-corporate">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 bg-brand-accent/10 border border-brand-accent/20 rounded flex items-center justify-center">
                                <Info className="text-brand-accent" size={18} />
                            </div>
                            <h2 className="text-lg font-bold text-brand-text uppercase tracking-wider">Hébergement</h2>
                        </div>
                        <p className="text-brand-slate text-sm leading-relaxed mb-4">
                            <strong className="text-brand-text">Hébergeur :</strong> Vercel Inc.
                        </p>
                        <p className="text-brand-slate text-sm leading-relaxed">
                            Le site est hébergé sur une infrastructure cloud professionnelle garantissant sécurité, performance et haute disponibilité.
                        </p>
                    </div>

                    <div className="card-corporate">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 bg-brand-accent/10 border border-brand-accent/20 rounded flex items-center justify-center">
                                <Scale className="text-brand-accent" size={18} />
                            </div>
                            <h2 className="text-lg font-bold text-brand-text uppercase tracking-wider">Propriété intellectuelle</h2>
                        </div>
                        <p className="text-brand-slate text-sm leading-relaxed mb-4">
                            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
                            Tous les droits de reproduction sont réservés.
                        </p>
                        <p className="text-brand-slate text-sm leading-relaxed">
                            La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite
                            sauf autorisation expresse du directeur de la publication.
                        </p>
                    </div>

                    <div className="card-corporate">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 bg-brand-accent/10 border border-brand-accent/20 rounded flex items-center justify-center">
                                <Lock className="text-brand-accent" size={18} />
                            </div>
                            <h2 className="text-lg font-bold text-brand-text uppercase tracking-wider">Données personnelles</h2>
                        </div>
                        <p className="text-brand-slate text-sm leading-relaxed mb-4">
                            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
                        </p>
                        <p className="text-brand-slate text-sm leading-relaxed">
                            Pour exercer ce droit, contactez-nous à l'adresse :{' '}
                            <a href="mailto:christiantendainfo2006@gmail.com" className="text-brand-accent hover:underline">
                                christiantendainfo2006@gmail.com
                            </a>
                        </p>
                    </div>

                    <div className="card-corporate">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 bg-brand-accent/10 border border-brand-accent/20 rounded flex items-center justify-center">
                                <Cookie className="text-brand-accent" size={18} />
                            </div>
                            <h2 className="text-lg font-bold text-brand-text uppercase tracking-wider">Cookies</h2>
                        </div>
                        <p className="text-brand-slate text-sm leading-relaxed">
                            Ce site utilise des cookies essentiels pour améliorer l'expérience utilisateur et analyser le trafic de manière anonyme.
                            Vous pouvez à tout moment modifier vos paramètres de cookies dans votre navigateur.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LegalNotice;

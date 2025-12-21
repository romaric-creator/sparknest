// src/pages/PrivacyPolicy.tsx
import React from 'react';
import { Shield, Lock, Eye, UserCheck, Database, Clock, Mail } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="min-h-screen bg-brand-dark pt-32 pb-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="mb-16">
                    <h1 className="text-3xl md:text-5xl font-bold text-brand-text mb-6 tracking-tight">Politique de Confidentialité</h1>
                    <p className="text-brand-slate text-lg">
                        Comment nous protégeons et gérons vos données personnelles chez SparkNest.
                    </p>
                    <div className="mt-8 inline-flex items-center gap-2 px-3 py-1 bg-brand-surface border border-brand-border rounded text-[10px] font-bold text-brand-slate uppercase tracking-wider">
                        <Clock size={12} className="text-brand-accent" />
                        Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="card-corporate">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 bg-brand-accent/10 border border-brand-accent/20 rounded flex items-center justify-center">
                                <Shield className="text-brand-accent" size={18} />
                            </div>
                            <h2 className="text-lg font-bold text-brand-text uppercase tracking-wider">1. Introduction</h2>
                        </div>
                        <p className="text-brand-slate text-sm leading-relaxed mb-4">
                            SparkNest s'engage à protéger votre vie privée et vos données personnelles. Cette politique explique comment nous collectons, utilisons et protégeons vos informations.
                        </p>
                        <p className="text-brand-slate text-sm leading-relaxed">
                            En utilisant nos services, vous acceptez les pratiques décrites dans cette politique de confidentialité.
                        </p>
                    </div>

                    <div className="card-corporate">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 bg-brand-accent/10 border border-brand-accent/20 rounded flex items-center justify-center">
                                <Database className="text-brand-accent" size={18} />
                            </div>
                            <h2 className="text-lg font-bold text-brand-text uppercase tracking-wider">2. Données collectées</h2>
                        </div>
                        <p className="text-brand-slate text-sm leading-relaxed mb-6">Nous collectons uniquement les données nécessaires à la fourniture de nos services :</p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 bg-brand-surface border border-brand-border rounded">
                                <p className="text-brand-text font-bold text-xs uppercase tracking-wider mb-2">Identification</p>
                                <p className="text-brand-slate text-xs">Nom, prénom, email, téléphone pour le contact direct.</p>
                            </div>
                            <div className="p-4 bg-brand-surface border border-brand-border rounded">
                                <p className="text-brand-text font-bold text-xs uppercase tracking-wider mb-2">Technique</p>
                                <p className="text-brand-slate text-xs">Adresse IP, type de navigateur, pages visitées pour l'optimisation.</p>
                            </div>
                        </div>
                    </div>

                    <div className="card-corporate">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 bg-brand-accent/10 border border-brand-accent/20 rounded flex items-center justify-center">
                                <Eye className="text-brand-accent" size={18} />
                            </div>
                            <h2 className="text-lg font-bold text-brand-text uppercase tracking-wider">3. Utilisation des données</h2>
                        </div>
                        <p className="text-brand-slate text-sm leading-relaxed mb-4">Vos données sont utilisées exclusivement pour :</p>
                        <ul className="space-y-3">
                            {['Répondre à vos demandes de contact', 'Fournir et améliorer nos services techniques', 'Analyser l\'audience du site de manière anonyme', 'Assurer la sécurité de notre infrastructure'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-brand-slate">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="card-corporate">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 bg-brand-accent/10 border border-brand-accent/20 rounded flex items-center justify-center">
                                <Lock className="text-brand-accent" size={18} />
                            </div>
                            <h2 className="text-lg font-bold text-brand-text uppercase tracking-wider">4. Sécurité</h2>
                        </div>
                        <p className="text-brand-slate text-sm leading-relaxed">
                            Nous mettons en œuvre des mesures de sécurité rigoureuses (chiffrement SSL, protocoles d'accès restreints) pour protéger vos données contre tout accès non autorisé ou divulgation.
                        </p>
                    </div>

                    <div className="card-corporate">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 bg-brand-accent/10 border border-brand-accent/20 rounded flex items-center justify-center">
                                <UserCheck className="text-brand-accent" size={18} />
                            </div>
                            <h2 className="text-lg font-bold text-brand-text uppercase tracking-wider">5. Vos droits</h2>
                        </div>
                        <p className="text-brand-slate text-sm leading-relaxed mb-6">
                            Vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données personnelles.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {['Accès', 'Rectification', 'Suppression', 'Opposition', 'Portabilité'].map((right) => (
                                <span key={right} className="px-2 py-1 bg-brand-surface border border-brand-border rounded text-[10px] font-bold text-brand-text uppercase tracking-tighter">
                                    {right}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="card-corporate">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 bg-brand-accent/10 border border-brand-accent/20 rounded flex items-center justify-center">
                                <Mail className="text-brand-accent" size={18} />
                            </div>
                            <h2 className="text-lg font-bold text-brand-text uppercase tracking-wider">6. Contact</h2>
                        </div>
                        <p className="text-brand-slate text-sm leading-relaxed mb-4">
                            Pour toute question relative à vos données personnelles, contactez notre délégué à la protection des données :
                        </p>
                        <a href="mailto:christiantendainfo2006@gmail.com" className="text-brand-accent hover:underline font-bold text-sm">
                            christiantendainfo2006@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;

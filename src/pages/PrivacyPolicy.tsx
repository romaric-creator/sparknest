// src/pages/PrivacyPolicy.tsx
import React from 'react';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="min-h-screen bg-brand-dark pt-20">
            <div className="container mx-auto px-6 py-16 max-w-4xl">
                <h1 className="text-5xl font-bold text-white mb-8">Politique de Confidentialité</h1>

                <div className="prose prose-invert prose-slate max-w-none">
                    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 mb-6">
                        <p className="text-slate-400">
                            <em>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</em>
                        </p>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 mb-6">
                        <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
                        <p className="text-slate-400 mb-4">
                            SparkNest s'engage à protéger votre vie privée et vos données personnelles. Cette politique de confidentialité
                            explique comment nous collectons, utilisons et protégeons vos informations lorsque vous utilisez notre site web et nos services.
                        </p>
                        <p className="text-slate-400">
                            En utilisant nos services, vous acceptez les pratiques décrites dans cette politique.
                        </p>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 mb-6">
                        <h2 className="text-2xl font-semibold text-white mb-4">2. Données collectées</h2>
                        <p className="text-slate-400 mb-4">Nous pouvons collecter les types de données suivants :</p>
                        <ul className="list-disc list-inside text-slate-400 space-y-2 ml-4">
                            <li><strong className="text-white">Données d'identification :</strong> nom, prénom, adresse email, numéro de téléphone</li>
                            <li><strong className="text-white">Données de connexion :</strong> adresse IP, type de navigateur, pages visitées</li>
                            <li><strong className="text-white">Données de navigation :</strong> cookies, durée de visite, interactions avec le site</li>
                            <li><strong className="text-white">Données professionnelles :</strong> société, poste, secteur d'activité (pour les demandes B2B)</li>
                        </ul>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 mb-6">
                        <h2 className="text-2xl font-semibold text-white mb-4">3. Utilisation des données</h2>
                        <p className="text-slate-400 mb-4">Vos données sont utilisées pour :</p>
                        <ul className="list-disc list-inside text-slate-400 space-y-2 ml-4">
                            <li>Répondre à vos demandes de contact et devis</li>
                            <li>Fournir et améliorer nos services</li>
                            <li>Personnaliser votre expérience utilisateur</li>
                            <li>Analyser l'utilisation de notre site pour l'optimiser</li>
                            <li>Vous envoyer des communications marketing (avec votre consentement)</li>
                            <li>Respecter nos obligations légales et réglementaires</li>
                        </ul>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 mb-6">
                        <h2 className="text-2xl font-semibold text-white mb-4">4. Partage des données</h2>
                        <p className="text-slate-400 mb-4">
                            Nous ne vendons ni ne louons vos données personnelles à des tiers. Vos données peuvent être partagées uniquement dans les cas suivants :
                        </p>
                        <ul className="list-disc list-inside text-slate-400 space-y-2 ml-4">
                            <li>Avec des prestataires de services techniques (hébergement, analytics)</li>
                            <li>Si requis par la loi ou une autorité compétente</li>
                            <li>Avec votre consentement explicite</li>
                        </ul>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 mb-6">
                        <h2 className="text-2xl font-semibold text-white mb-4">5. Sécurité des données</h2>
                        <p className="text-slate-400">
                            Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données contre
                            tout accès non autorisé, modification, divulgation ou destruction. Cela inclut le chiffrement SSL, l'authentification sécurisée
                            et des sauvegardes régulières.
                        </p>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 mb-6">
                        <h2 className="text-2xl font-semibold text-white mb-4">6. Vos droits</h2>
                        <p className="text-slate-400 mb-4">
                            Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
                        </p>
                        <ul className="list-disc list-inside text-slate-400 space-y-2 ml-4">
                            <li><strong className="text-white">Droit d'accès :</strong> obtenir une copie de vos données</li>
                            <li><strong className="text-white">Droit de rectification :</strong> corriger des données inexactes</li>
                            <li><strong className="text-white">Droit à l'effacement :</strong> supprimer vos données</li>
                            <li><strong className="text-white">Droit à la limitation :</strong> limiter le traitement de vos données</li>
                            <li><strong className="text-white">Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                            <li><strong className="text-white">Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                        </ul>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 mb-6">
                        <h2 className="text-2xl font-semibold text-white mb-4">7. Cookies</h2>
                        <p className="text-slate-400 mb-4">
                            Notre site utilise des cookies essentiels au fonctionnement du site et des cookies analytiques pour améliorer votre expérience.
                            Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur.
                        </p>
                        <p className="text-slate-400">
                            Types de cookies utilisés : cookies de session, cookies de performance, cookies fonctionnels.
                        </p>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 mb-6">
                        <h2 className="text-2xl font-semibold text-white mb-4">8. Conservation des données</h2>
                        <p className="text-slate-400">
                            Vos données personnelles sont conservées uniquement pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées,
                            ou conformément aux obligations légales applicables.
                        </p>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                        <h2 className="text-2xl font-semibold text-white mb-4">9. Contact</h2>
                        <p className="text-slate-400 mb-4">
                            Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, contactez-nous :
                        </p>
                        <p className="text-slate-400">
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
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;

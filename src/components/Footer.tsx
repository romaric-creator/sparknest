// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/sparknest-logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-2">
              <img src={logo} alt="SparkNest Logo" className="h-8 w-8 invert" />
              <span className="text-2xl font-bold text-white">SparkNest</span>
            </div>
            <p className="text-slate-400 text-sm">Construire le futur du web, une ligne de code à la fois.</p>
          </div>

          {/* Column 2: Liens Rapides */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li><a href="/#services" className="text-slate-400 hover:text-brand-cyan transition-colors">Services</a></li>
              <li><a href="/#features" className="text-slate-400 hover:text-brand-cyan transition-colors">Expertise</a></li>
              <li><a href="/#projects" className="text-slate-400 hover:text-brand-cyan transition-colors">Projets</a></li>
              <li><Link to="/marketplace" className="text-slate-400 hover:text-brand-cyan transition-colors">Marketplace</Link></li>
              <li><Link to="/blog" className="text-slate-400 hover:text-brand-cyan transition-colors">Blog</Link></li>
              <li><Link to="/team" className="text-slate-400 hover:text-brand-cyan transition-colors">L'Équipe</Link></li>
            </ul>
          </div>

          {/* Column 3: Légal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Légal</h4>
            <ul className="space-y-3">
              <li><Link to="/legal" className="text-slate-400 hover:text-brand-cyan transition-colors">Mentions Légales</Link></li>
              <li><Link to="/privacy" className="text-slate-400 hover:text-brand-cyan transition-colors">Politique de Confidentialité</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:christiantendainfo2006@gmail.com" className="text-slate-400 hover:text-brand-cyan transition-colors">
                  christiantendainfo2006@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+237678261699" className="text-slate-400 hover:text-brand-cyan transition-colors">
                  +237 678 26 16 99
                </a>
              </li>
              <li className="text-slate-400">Paris, France</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} SparkNest. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/sparknest-logo.png';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-primary border-t border-brand-border pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="SparkNest Logo" className="h-8 w-8" />
              <span className="text-xl font-bold text-brand-text tracking-tight">SparkNest</span>
            </div>
            <p className="text-brand-muted text-sm leading-relaxed mb-6">
              Expertise technique et solutions numériques d'exception pour les entreprises innovantes.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-brand-muted hover:text-brand-text transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-brand-muted hover:text-brand-text transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="text-brand-muted hover:text-brand-text transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold text-brand-text uppercase tracking-widest mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="/#services" className="text-brand-muted hover:text-brand-text transition-colors text-sm">Services</a></li>
              <li><a href="/#projects" className="text-brand-muted hover:text-brand-text transition-colors text-sm">Projets</a></li>
              <li><Link to="/marketplace" className="text-brand-muted hover:text-brand-text transition-colors text-sm">Marketplace</Link></li>
              <li><Link to="/blog" className="text-brand-muted hover:text-brand-text transition-colors text-sm">Blog</Link></li>
              <li><Link to="/team" className="text-brand-muted hover:text-brand-text transition-colors text-sm">L'Équipe</Link></li>
            </ul>
          </div>

          {/* Column 3: Légal */}
          <div>
            <h4 className="text-xs font-bold text-brand-text uppercase tracking-widest mb-6">Légal</h4>
            <ul className="space-y-4">
              <li><Link to="/legal" className="text-brand-muted hover:text-brand-text transition-colors text-sm">Mentions Légales</Link></li>
              <li><Link to="/privacy" className="text-brand-muted hover:text-brand-text transition-colors text-sm">Confidentialité</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-xs font-bold text-brand-text uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-brand-muted text-sm">
                <Mail size={16} className="text-brand-accent" />
                <a href="mailto:christiantendainfo2006@gmail.com" className="hover:text-brand-text transition-colors">
                  contact@sparknest.fr
                </a>
              </li>
              <li className="flex items-center gap-3 text-brand-muted text-sm">
                <Phone size={16} className="text-brand-accent" />
                <a href="tel:+237678261699" className="hover:text-brand-text transition-colors">
                  +237 678 26 16 99
                </a>
              </li>
              <li className="flex items-center gap-3 text-brand-muted text-sm">
                <MapPin size={16} className="text-brand-accent" />
                Douala, Cameroun
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-muted/60 text-[10px] font-semibold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} SparkNest. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <span className="text-[10px] font-bold text-brand-muted/60 uppercase tracking-tighter">Crafted with Precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

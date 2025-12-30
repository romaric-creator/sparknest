// src/components/Header.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/sparknest-logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <header className="bg-brand-primary border-b border-brand-border sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity z-[1001] relative">
          <img src={logo} alt="SparkNest Logo" className="h-9 w-9" />
          <span className="text-xl font-bold text-brand-text tracking-tight">SparkNest</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8">
          <li><a href="/#services" className="text-sm font-medium text-brand-muted hover:text-brand-text transition-colors duration-200">Services</a></li>
          <li><a href="/#features" className="text-sm font-medium text-brand-muted hover:text-brand-text transition-colors duration-200">Expertise</a></li>
          <li><a href="/#projects" className="text-sm font-medium text-brand-muted hover:text-brand-text transition-colors duration-200">Projets</a></li>
          <li><Link to="/marketplace" className="text-sm font-medium text-brand-muted hover:text-brand-text transition-colors duration-200">Marketplace</Link></li>
          <li><Link to="/blog" className="text-sm font-medium text-brand-muted hover:text-brand-text transition-colors duration-200">Blog</Link></li>
          <li><Link to="/team" className="text-sm font-medium text-brand-muted hover:text-brand-text transition-colors duration-200">L'Équipe</Link></li>
        </ul>

        {/* Desktop CTA */}
        <a
          href="mailto:christiantendainfo2006@gmail.com"
          className="hidden md:block btn-primary text-sm py-2 px-6"
        >
          Démarrer un projet
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-brand-text focus:outline-none z-[1001] relative p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-0 bg-brand-primary z-[1000] flex flex-col items-center justify-center md:hidden"
            >
              <ul className="flex flex-col items-center space-y-8 text-lg font-medium">
                <li><a href="/#services" onClick={toggleMenu} className="text-brand-text hover:text-brand-accent transition-colors">Services</a></li>
                <li><a href="/#features" onClick={toggleMenu} className="text-brand-text hover:text-brand-accent transition-colors">Expertise</a></li>
                <li><a href="/#projects" onClick={toggleMenu} className="text-brand-text hover:text-brand-accent transition-colors">Projets</a></li>
                <li><Link to="/marketplace" onClick={toggleMenu} className="text-brand-text hover:text-brand-accent transition-colors">Marketplace</Link></li>
                <li><Link to="/blog" onClick={toggleMenu} className="text-brand-text hover:text-brand-accent transition-colors">Blog</Link></li>
                <li><Link to="/team" onClick={toggleMenu} className="text-brand-text hover:text-brand-accent transition-colors">L'Équipe</Link></li>
                <li>
                  <a
                    href="mailto:christiantendainfo2006@gmail.com"
                    onClick={toggleMenu}
                    className="btn-primary mt-4"
                  >
                    Démarrer un projet
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;

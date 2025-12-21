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
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0 },
  };

  return (
    <header className="bg-brand-dark/80 backdrop-blur-lg sticky top-0 z-50 border-b border-slate-800">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity z-[1001] relative">
          <img src={logo} alt="SparkNest Logo" className="h-10 w-10 invert" />
          <span className="text-2xl font-bold text-white">SparkNest</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8">
          <li><a href="/#services" className="text-slate-300 hover:text-brand-cyan transition-colors duration-300">Services</a></li>
          <li><a href="/#features" className="text-slate-300 hover:text-brand-cyan transition-colors duration-300">Expertise</a></li>
          <li><a href="/#projects" className="text-slate-300 hover:text-brand-cyan transition-colors duration-300">Projets</a></li>
          <li><Link to="/marketplace" className="text-slate-300 hover:text-brand-cyan transition-colors duration-300">Marketplace</Link></li>
          <li><Link to="/blog" className="text-slate-300 hover:text-brand-cyan transition-colors duration-300">Blog</Link></li>
          <li><Link to="/team" className="text-slate-300 hover:text-brand-cyan transition-colors duration-300">L'Équipe</Link></li>
        </ul>

        {/* Desktop CTA */}
        <a
          href="mailto:christiantendainfo2006@gmail.com"
          className="hidden md:block bg-brand-cyan text-brand-dark font-semibold py-2 px-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 filter hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
        >
          Démarrer un projet
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none z-[1001] relative p-2 cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-0 bg-[#0f172a] z-[1000] flex flex-col items-center justify-start pt-32 md:hidden h-screen w-screen"
              style={{ backgroundColor: '#0f172a', opacity: 1 }}
            >
              <ul className="flex flex-col items-center space-y-8 text-xl">
                <li><a href="/#services" onClick={toggleMenu} className="text-white hover:text-brand-cyan transition-colors">Services</a></li>
                <li><a href="/#features" onClick={toggleMenu} className="text-white hover:text-brand-cyan transition-colors">Expertise</a></li>
                <li><a href="/#projects" onClick={toggleMenu} className="text-white hover:text-brand-cyan transition-colors">Projets</a></li>
                <li><Link to="/marketplace" onClick={toggleMenu} className="text-white hover:text-brand-cyan transition-colors">Marketplace</Link></li>
                <li><Link to="/blog" onClick={toggleMenu} className="text-white hover:text-brand-cyan transition-colors">Blog</Link></li>
                <li><Link to="/team" onClick={toggleMenu} className="text-white hover:text-brand-cyan transition-colors">L'Équipe</Link></li>
                <li>
                  <a
                    href="mailto:christiantendainfo2006@gmail.com"
                    onClick={toggleMenu}
                    className="inline-block bg-brand-cyan text-brand-dark font-semibold py-3 px-8 rounded-lg mt-4"
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

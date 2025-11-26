import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const headerClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg shadow-slate-900/5 py-3' : 'bg-white/80 backdrop-blur-md py-4 md:py-5'
  }`;

  const linkClass = (path: string) =>
    `text-sm font-semibold transition-all duration-300 relative group ${
      location.pathname === path
        ? 'text-primary-600'
        : 'text-slate-700 hover:text-primary-600'
    }`;

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group relative z-[60]">
          <div className="bg-gradient-to-br from-primary-600 to-secondary-500 p-2 rounded-xl text-white group-hover:shadow-lg group-hover:shadow-primary-500/30 group-hover:scale-105 transition-all duration-300">
            <Leaf size={24} className="sm:w-6 sm:h-6" />
          </div>
          <span className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-500">
            EcoCorp
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className={linkClass(link.path)}>
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-500 transition-all duration-300 ${
                location.pathname === link.path ? 'w-full' : 'group-hover:w-full'
              }`} />
            </Link>
          ))}
          <Link
            to="/contact"
            state={{ interest: 'quote' }}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-semibold text-sm shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-slate-700 p-2 hover:bg-slate-100 rounded-lg transition-colors relative z-[60]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm lg:hidden"
              style={{ zIndex: 45 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl lg:hidden overflow-y-auto"
              style={{ zIndex: 55 }}
            >
              <div className="p-6 pt-24">
                {/* Close button inside panel */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>

                {/* Mobile Nav Links */}
                <nav className="flex flex-col gap-2 mb-8">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05, duration: 0.3 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                          location.pathname === link.path
                            ? 'bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-600'
                            : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  <Link
                    to="/contact"
                    state={{ interest: 'quote' }}
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center py-3.5 rounded-full bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-bold shadow-lg shadow-primary-500/30"
                  >
                    Get a Quote
                  </Link>
                </motion.div>

                {/* Mobile Footer Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  className="mt-8 pt-8 border-t border-slate-200"
                >
                  <p className="text-sm font-semibold text-slate-700 mb-3">Contact Us</p>
                  <p className="text-sm text-slate-600 mb-1">contact@ecocorp.com</p>
                  <p className="text-sm text-slate-600">+1 (555) 123-4567</p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
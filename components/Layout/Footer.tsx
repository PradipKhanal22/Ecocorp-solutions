import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-slate-900 text-slate-300 pt-20 pb-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary-500 to-secondary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary-500 to-primary-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-500 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 mb-12 md:mb-16 shadow-2xl shadow-primary-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left w-full md:w-auto">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">Stay Updated</h3>
              <p className="text-sm sm:text-base text-white/90">Subscribe to our newsletter for the latest insights and updates.</p>
            </div>
            <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3 sm:gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:flex-1 md:w-64 px-4 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm sm:text-base"
              />
              <button className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-primary-600 font-bold hover:bg-slate-100 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap text-sm sm:text-base">
                <span>Subscribe</span>
                <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-gradient-to-br from-primary-600 to-secondary-500 p-2 rounded-xl text-white shadow-lg shadow-primary-500/30">
                <Leaf size={24} />
              </div>
              <span className="text-2xl font-bold text-white">EcoCorp</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Leading the way in sustainable innovation and corporate responsibility. We build the future, today.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Instagram, href: '#' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-gradient-to-br hover:from-primary-600 hover:to-secondary-500 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full" />
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Our Services', path: '/services' },
                { name: 'Projects Gallery', path: '/gallery' },
                { name: 'Latest News', path: '/blog' },
                { name: 'Contact Support', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    <ArrowRight size={14} className="text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full" />
            </h3>
            <ul className="space-y-3">
              {[
                'Strategic Consulting',
                'Custom Development',
                'Sustainability Audits',
                'Financial Planning',
                'Mobile Solutions',
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="group flex items-center gap-2 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    <ArrowRight size={14} className="text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full" />
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-slate-800 group-hover:bg-gradient-to-br group-hover:from-primary-600 group-hover:to-secondary-500 flex items-center justify-center text-primary-500 group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <span className="text-sm leading-relaxed pt-2">123 Innovation Drive,<br />Tech Valley, CA 94043</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-slate-800 group-hover:bg-gradient-to-br group-hover:from-primary-600 group-hover:to-secondary-500 flex items-center justify-center text-primary-500 group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <Phone size={18} />
                </div>
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-slate-800 group-hover:bg-gradient-to-br group-hover:from-primary-600 group-hover:to-secondary-500 flex items-center justify-center text-primary-500 group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <Mail size={18} />
                </div>
                <span className="text-sm">contact@ecocorp.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} <span className="text-white font-semibold">EcoCorp Solutions</span>. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
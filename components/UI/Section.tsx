import React from 'react';
import { motion } from 'framer-motion';
import { BaseProps } from '../../types';

interface SectionProps extends BaseProps {
  id?: string;
  bgColor?: 'white' | 'light' | 'gradient';
}

const Section: React.FC<SectionProps> = ({ children, className = '', id, bgColor = 'white' }) => {
  let bgClasses = 'bg-white';
  if (bgColor === 'light') bgClasses = 'bg-slate-50';
  if (bgColor === 'gradient') bgClasses = 'bg-gradient-to-br from-slate-50 to-blue-50';

  return (
    <section id={id} className={`py-20 md:py-28 ${bgClasses} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container mx-auto px-6 md:px-12 lg:px-20"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
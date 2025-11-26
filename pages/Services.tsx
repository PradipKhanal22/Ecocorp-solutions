import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/UI/Section';
import { BarChart, Code, Leaf, PieChart, Smartphone, Globe, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { 
    icon: BarChart, 
    title: 'Strategic Consulting', 
    desc: 'Data-driven insights to guide your decision-making and optimize operations.',
    features: ['Market Analysis', 'Process Optimization', 'Growth Strategy']
  },
  { 
    icon: Code, 
    title: 'Custom Development', 
    desc: 'Tailored software solutions built with the latest technologies to meet your unique needs.',
    features: ['Web Applications', 'API Integration', 'Cloud Solutions']
  },
  { 
    icon: Leaf, 
    title: 'Sustainability Audits', 
    desc: 'Comprehensive assessments to reduce your carbon footprint and improve efficiency.',
    features: ['Carbon Tracking', 'Green Certification', 'Eco Strategy']
  },
  { 
    icon: PieChart, 
    title: 'Financial Planning', 
    desc: 'Expert financial advice to ensure sustainable growth and profitability.',
    features: ['Budget Planning', 'Investment Strategy', 'Risk Management']
  },
  { 
    icon: Smartphone, 
    title: 'Mobile Solutions', 
    desc: 'Engaging mobile applications that connect you with customers anywhere.',
    features: ['iOS & Android', 'UX Design', 'App Maintenance']
  },
  { 
    icon: Globe, 
    title: 'Global Expansion', 
    desc: 'Strategies and support for taking your business into new international markets.',
    features: ['Market Entry', 'Localization', 'Partnership Building']
  },
];

const Services: React.FC = () => {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80" 
            alt="Team collaboration" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-primary-900/70" />
        </div>
        
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-emerald-500/10 to-blue-500/10 rounded-bl-[8rem] z-[1]" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-tr-[8rem] z-[1]" />
        
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold mb-6">
              <Sparkles size={16} className="text-emerald-400" />
              Solutions that Scale
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Services</span>
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions designed to propel your business forward. From strategy to execution, we're with you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 group overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              
              {/* Icon */}
              <div className="relative w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-primary-500/20 group-hover:shadow-xl group-hover:shadow-primary-500/30 group-hover:scale-110 transition-all duration-300">
                <service.icon size={32} className="text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
              
              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* CTA Link */}
              <Link 
                to="/contact" 
                state={{ interest: service.title }}
                className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300"
              >
                Learn more <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section bgColor="white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Our Proven Process</h2>
          <p className="text-slate-600 text-lg">
            A streamlined approach to delivering exceptional results every time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-secondary-200 to-primary-200 -z-10" />
          
          {[
            { step: '01', title: 'Discovery', desc: 'Understanding your unique challenges and goals' },
            { step: '02', title: 'Strategy', desc: 'Crafting a tailored roadmap for success' },
            { step: '03', title: 'Execution', desc: 'Implementing solutions with precision' },
            { step: '04', title: 'Growth', desc: 'Continuous optimization and support' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="text-center relative"
            >
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-primary-500/30">
                <span className="text-4xl font-bold text-white">{item.step}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section bgColor="gradient" className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            We specialize in solving complex problems. Let's talk about your specific needs and craft a solution that's perfect for you.
          </p>
          <Link
            to="/contact"
            state={{ interest: 'quote' }}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-slate-900 text-white font-bold text-lg hover:bg-slate-800 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            Get in Touch <ArrowRight size={20} />
          </Link>
        </motion.div>
      </Section>
    </div>
  );
};

export default Services;
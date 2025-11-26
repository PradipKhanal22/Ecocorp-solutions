import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/UI/Section';
import { Target, Lightbulb, Users, Award, TrendingUp, Heart, Sparkles } from 'lucide-react';

const teamMembers = [
  { id: '1', name: 'Sarah Johnson', role: 'CEO & Founder', imageUrl: 'https://picsum.photos/300/300?random=10' },
  { id: '2', name: 'David Chen', role: 'Chief Technology Officer', imageUrl: 'https://picsum.photos/300/300?random=11' },
  { id: '3', name: 'Emily Davis', role: 'Head of Sustainability', imageUrl: 'https://picsum.photos/300/300?random=12' },
  { id: '4', name: 'Michael Wilson', role: 'Strategy Director', imageUrl: 'https://picsum.photos/300/300?random=13' },
];

const stats = [
  { value: '500+', label: 'Projects Completed', icon: Award },
  { value: '98%', label: 'Client Satisfaction', icon: Heart },
  { value: '50+', label: 'Team Members', icon: Users },
  { value: '15+', label: 'Years Experience', icon: TrendingUp },
];

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80" 
            alt="Team collaboration" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-primary-900/75" />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-emerald-500/10 to-blue-500/10 rounded-bl-[8rem] z-[1]" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-tr-[8rem] z-[1]" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold mb-6">
              <Sparkles size={16} className="text-emerald-400" />
              Our Story
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              Building the Future, <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Together</span>
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed max-w-3xl">
              Driven by purpose, powered by innovation. We're a team of passionate experts committed to creating sustainable solutions that make a real difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <Section bgColor="white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-primary-500/20">
                <stat.icon size={28} />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500 mb-2">
                {stat.value}
              </div>
              <p className="text-slate-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Mission Vision Values */}
      <Section bgColor="light">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Our Core Principles</h2>
          <p className="text-slate-600 text-lg">
            The values that guide everything we do.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Target, title: "Our Mission", text: "To empower organizations with sustainable strategies that drive long-term growth and positive environmental impact." },
            { icon: Lightbulb, title: "Our Vision", text: "A world where business success and ecological stewardship go hand in hand, creating a thriving future for all." },
            { icon: Users, title: "Our Values", text: "Integrity, innovation, collaboration, and a relentless commitment to excellence in everything we do." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform duration-300">
                <item.icon size={36} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Story / Context */}
      <Section>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/600/400?random=20" alt="Team meeting" className="w-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Since 2015
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Journey</h2>
            <p className="text-slate-600 mb-4 leading-relaxed text-lg">
              Founded in 2015, EcoCorp started with a simple idea: that technology could be the greatest enabler of sustainability. What began as a small consultancy has grown into a global firm serving Fortune 500 companies.
            </p>
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              We believe that the best solutions are those that solve today's problems without compromising tomorrow. Our team of experts works tirelessly to bridge the gap between ambitious goals and actionable reality.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-full text-primary-700 font-semibold text-sm">
                Innovation First
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-full text-primary-700 font-semibold text-sm">
                Sustainable Growth
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-full text-primary-700 font-semibold text-sm">
                Client Success
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Team */}
      <Section bgColor="light">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
          <p className="text-slate-600 text-lg">The passionate individuals behind our success.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-w-1 aspect-h-1 overflow-hidden relative">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-64 object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500 font-semibold text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default About;
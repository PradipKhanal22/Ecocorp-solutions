import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/UI/Section';
import { Target, Lightbulb, Users, Award, TrendingUp, Heart, Sparkles, ChevronDown, Shield, Zap, Globe, Mail, Linkedin, Twitter, Rocket, Trophy, HelpCircle } from 'lucide-react';

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
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What makes EcoCorp different from other sustainability consulting firms?",
      answer: "We combine deep technical expertise with practical business acumen. Our team doesn't just advise—we implement. We've successfully completed over 500 projects across 45+ countries, delivering measurable results that balance environmental impact with business growth. Our data-driven approach ensures every recommendation is backed by solid analytics and real-world success stories."
    },
    {
      question: "How long does a typical project take from start to finish?",
      answer: "Project timelines vary based on scope and complexity. A standard sustainability audit typically takes 4-6 weeks, while comprehensive transformation initiatives can span 6-12 months. We work closely with your team to establish realistic timelines that align with your business objectives. Our phased approach allows you to see results incrementally, with quick wins in the first 30 days."
    },
    {
      question: "Do you work with companies of all sizes?",
      answer: "Absolutely! We've partnered with organizations ranging from innovative startups to Fortune 500 corporations. Our scalable solutions are designed to meet you where you are. Whether you're just beginning your sustainability journey or looking to optimize existing programs, we tailor our approach to fit your size, industry, and specific needs."
    },
    {
      question: "What industries do you specialize in?",
      answer: "Our expertise spans multiple sectors including technology, manufacturing, finance, retail, healthcare, and energy. We've developed specialized frameworks for each industry while maintaining cross-sector best practices. This diverse experience allows us to bring innovative solutions from one industry to solve challenges in another, giving our clients a competitive advantage."
    },
    {
      question: "How do you measure the success of your sustainability initiatives?",
      answer: "We establish clear, measurable KPIs at project inception aligned with your business goals. Metrics typically include carbon footprint reduction, cost savings, energy efficiency improvements, waste reduction percentages, and ROI. We provide detailed quarterly reports with real-time dashboards so you can track progress continuously. Our success is measured by your success—both environmental and financial."
    },
    {
      question: "What support do you provide after project completion?",
      answer: "Our commitment doesn't end at implementation. We offer ongoing support packages including quarterly reviews, annual audits, training refreshers, and 24/7 technical support. Many clients transition to our managed services program where we continue optimizing their sustainability operations. We also provide access to our exclusive client network for knowledge sharing and best practice exchanges."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="pt-32">
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
              <Sparkles size={16} />
              What Drives Us
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Our Core Principles</h2>
            <p className="text-slate-600 text-lg">
              The values that guide everything we do and shape our approach to creating sustainable solutions.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: Target, 
              title: "Our Mission", 
              text: "To empower organizations with sustainable strategies that drive long-term growth and positive environmental impact.",
              color: "from-blue-500 to-cyan-500",
              bgColor: "from-blue-50 to-cyan-50"
            },
            { 
              icon: Lightbulb, 
              title: "Our Vision", 
              text: "A world where business success and ecological stewardship go hand in hand, creating a thriving future for all.",
              color: "from-yellow-500 to-orange-500",
              bgColor: "from-yellow-50 to-orange-50"
            },
            { 
              icon: Users, 
              title: "Our Values", 
              text: "Integrity, innovation, collaboration, and a relentless commitment to excellence in everything we do.",
              color: "from-emerald-500 to-teal-500",
              bgColor: "from-emerald-50 to-teal-50"
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative bg-white p-8 rounded-3xl border-2 border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group overflow-hidden"
            >
              {/* Background Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className={`w-24 h-24 mx-auto bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <item.icon size={48} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary-600 transition-colors">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">{item.text}</p>
                
                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Story / Context - Enhanced Our Journey Timeline */}
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-100 text-secondary-700 text-sm font-semibold mb-4">
              <TrendingUp size={16} />
              Milestones & Growth
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Our Journey</h2>
            <p className="text-slate-600 text-lg">
              From humble beginnings to industry leadership - our path of continuous growth and innovation.
            </p>
          </motion.div>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 via-secondary-500 to-emerald-500 md:left-0 md:right-0 md:top-1/2 md:bottom-auto md:w-auto md:h-1 md:bg-gradient-to-r transform -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {[
              { 
                year: "2015", 
                title: "Founded", 
                description: "EcoCorp Solutions was established with a vision to revolutionize sustainable business practices.",
                icon: Rocket,
                color: "from-blue-500 to-indigo-500"
              },
              { 
                year: "2018", 
                title: "First Milestone", 
                description: "Achieved 100+ satisfied clients and expanded our service offerings to include advanced analytics.",
                icon: Award,
                color: "from-purple-500 to-pink-500"
              },
              { 
                year: "2021", 
                title: "Global Expansion", 
                description: "Opened offices in Europe and Asia, becoming a truly global sustainability partner.",
                icon: Globe,
                color: "from-cyan-500 to-teal-500"
              },
              { 
                year: "2024", 
                title: "Industry Leader", 
                description: "Recognized as a top sustainability consulting firm with 500+ successful projects worldwide.",
                icon: Trophy,
                color: "from-yellow-500 to-orange-500"
              },
            ].map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="bg-white p-8 rounded-3xl border-2 border-slate-100 shadow-lg hover:shadow-2xl hover:border-primary-300 transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Background Gradient on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${milestone.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${milestone.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <milestone.icon size={36} />
                    </div>
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 mb-3">
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary-600 transition-colors">
                      {milestone.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {milestone.description}
                    </p>
                  </div>
                  
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section bgColor="light">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
              <Users size={16} />
              Leadership Team
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
            <p className="text-slate-600 text-lg">
              The passionate individuals behind our success, driving innovation and sustainability forward.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg border-2 border-slate-100 hover:shadow-2xl hover:border-primary-300 transition-all duration-300 flex flex-col md:flex-row"
            >
              <div className="md:w-2/5 overflow-hidden relative">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-80 md:h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-primary-900/20 to-transparent" />
              </div>
              
              <div className="md:w-3/5 p-8 flex flex-col justify-center relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-bl-full" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 text-xs font-semibold mb-4">
                    {member.role}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Leading our team with expertise and passion for sustainable solutions, driving innovation in every project.
                  </p>
                  
                  <div className="flex gap-3">
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl flex items-center justify-center text-primary-600 hover:from-primary-600 hover:to-secondary-600 hover:text-white transition-all shadow-sm hover:shadow-md"
                    >
                      <Linkedin size={18} />
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl flex items-center justify-center text-blue-500 hover:from-blue-500 hover:to-cyan-500 hover:text-white transition-all shadow-sm hover:shadow-md"
                    >
                      <Twitter size={18} />
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl flex items-center justify-center text-emerald-600 hover:from-emerald-600 hover:to-teal-600 hover:text-white transition-all shadow-sm hover:shadow-md"
                    >
                      <Mail size={18} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FAQs Section */}
      <Section bgColor="white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
              <HelpCircle size={16} />
              Got Questions?
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600 text-lg">
              Find answers to common questions about our services, processes, and approach.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                openFaq === index 
                  ? 'border-emerald-500 shadow-xl shadow-emerald-500/10' 
                  : 'border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors duration-200 group"
              >
                <span className={`text-lg font-bold transition-colors duration-200 ${
                  openFaq === index 
                    ? 'text-emerald-600' 
                    : 'text-slate-900 group-hover:text-emerald-600'
                }`}>
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openFaq === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex-shrink-0 ml-4 ${
                    openFaq === index 
                      ? 'text-emerald-600' 
                      : 'text-slate-400 group-hover:text-emerald-600'
                  }`}
                >
                  <ChevronDown size={24} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-6 pt-2">
                      <p className="text-slate-600 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default About;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/UI/Section';
import { Mail, MapPin, Phone, Send, CheckCircle2, ArrowRight, Building, Calendar, DollarSign, MessageSquare, Sparkles, Clock, Globe } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

type FormMode = 'contact' | 'quote';

const Contact: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mode, setMode] = useState<FormMode>('contact');
  
  const [formState, setFormState] = useState({ 
    name: '', 
    email: '', 
    company: '',
    subject: 'general',
    budget: '',
    timeline: '',
    message: '' 
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Initialize mode based on navigation state
  useEffect(() => {
    if (location.state && (location.state as any).interest === 'quote') {
      setMode('quote');
      setFormState(prev => ({ ...prev, subject: 'quote' }));
    } else {
      setMode('contact');
      setFormState(prev => ({ ...prev, subject: 'general' }));
    }
  }, [location]);

  const toggleMode = (newMode: FormMode) => {
    setMode(newMode);
    // Update URL state without reload so back button works nicely
    navigate('/contact', { state: { interest: newMode === 'quote' ? 'quote' : 'general' }, replace: true });
    setFormState(prev => ({ 
      ...prev, 
      subject: newMode === 'quote' ? 'quote' : 'general',
      // Reset specific fields when switching context if desired, or keep them
    }));
    setIsSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Form Submitted [${mode} mode]`, formState);
    setIsSubmitted(true);
    setTimeout(() => {
        setIsSubmitted(false);
        setFormState({ 
          name: '', email: '', company: '', subject: 'general', budget: '', timeline: '', message: '' 
        });
        if (mode === 'quote') setFormState(prev => ({ ...prev, subject: 'quote' }));
    }, 3000);
  };

  // --- RENDER: QUOTE MODE ---
  if (mode === 'quote') {
    return (
      <div className="pt-20 min-h-screen bg-slate-50">
        {/* Hero Section for Quote */}
        <section className="relative py-16 overflow-hidden bg-gradient-to-br from-primary-600 to-secondary-500">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold mb-6">
                <DollarSign size={16} />
                Project Inquiry
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Request a Free Quote</h1>
              <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                Tell us about your project goals and requirements. We'll provide a detailed proposal within 24 hours.
              </p>
              
              <button 
                onClick={() => toggleMode('contact')}
                className="text-sm text-white/80 hover:text-white underline flex items-center justify-center gap-1 mx-auto"
              >
                Looking for general contact? Switch here
              </button>
            </motion.div>
          </div>
        </section>

        <Section className="!py-12">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-primary-600 to-secondary-500 h-2 w-full"></div>
              <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
                
                {/* Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all bg-slate-50 focus:bg-white"
                      placeholder="Jane Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Work Email *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all bg-slate-50 focus:bg-white"
                      placeholder="jane@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>

                {/* Company Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Company / Organization</label>
                    <div className="relative">
                      <Building className="absolute left-4 top-3.5 text-slate-400" size={18} />
                      <input
                        type="text"
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all bg-slate-50 focus:bg-white"
                        placeholder="Acme Inc."
                        value={formState.company}
                        onChange={(e) => setFormState({...formState, company: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Expected Timeline</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-3.5 text-slate-400" size={18} />
                      <select
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all bg-slate-50 focus:bg-white appearance-none"
                        value={formState.timeline}
                        onChange={(e) => setFormState({...formState, timeline: e.target.value})}
                      >
                        <option value="">When do you need this?</option>
                        <option value="urgent">Urgent (ASAP)</option>
                        <option value="1month">Within 1 month</option>
                        <option value="3months">1-3 months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Project Specifics */}
                <div>
                   <label className="block text-sm font-semibold text-slate-700 mb-2">Estimated Budget</label>
                   <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                     {['< $5k', '$5k - $10k', '$10k - $50k', '$50k+'].map((opt) => (
                       <button
                         key={opt}
                         type="button"
                         onClick={() => setFormState({...formState, budget: opt})}
                         className={`py-3 px-4 rounded-xl text-sm font-medium border transition-all ${
                           formState.budget === opt 
                             ? 'border-primary-500 bg-primary-50 text-primary-700 ring-1 ring-primary-500' 
                             : 'border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                         }`}
                       >
                         {opt}
                       </button>
                     ))}
                   </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Project Details</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all bg-slate-50 focus:bg-white resize-none"
                    placeholder="Describe your goals, challenges, and what you're looking to achieve..."
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className={`w-full py-4 rounded-xl text-white font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 ${
                      isSubmitted ? 'bg-green-500' : 'bg-slate-900'
                  }`}
                >
                  {isSubmitted ? (
                      <>Quote Request Sent <CheckCircle2 size={20} /></>
                  ) : (
                      <>Submit Request <ArrowRight size={20} /></>
                  )}
                </button>

                <p className="text-xs text-center text-slate-400 mt-4">
                  By submitting this form, you agree to our privacy policy. Your information is kept strictly confidential.
                </p>
              </form>
            </motion.div>
          </div>
        </Section>
      </div>
    );
  }

  // --- RENDER: CONTACT MODE (Default) ---
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80" 
            alt="Contact us" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-primary-900/75" />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-emerald-500/10 to-blue-500/10 rounded-bl-[8rem] z-[1]" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold mb-6">
              <Sparkles size={16} className="text-emerald-400" />
              We're Here to Help
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Touch</span>
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              Whether you have a question, need support, or want to discuss a project, our team is ready to assist you.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Contact Information</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We'd love to hear from you. Reach out through any of these channels and we'll respond promptly.
              </p>
            </div>
            
            <div className="space-y-6 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-start gap-5 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-100 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Our Location</h4>
                  <p className="text-slate-700">123 Innovation Drive,<br />Tech Valley, CA 94043</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start gap-5 p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-100 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="p-3 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Email Us</h4>
                  <p className="text-slate-700">contact@ecocorp.com</p>
                  <p className="text-slate-500 text-sm mt-1 flex items-center gap-1">
                    <Clock size={14} /> Response time: ~2 hours
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start gap-5 p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100/50 border border-purple-100 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Call Us</h4>
                  <p className="text-slate-700">+1 (555) 123-4567</p>
                  <p className="text-slate-500 text-sm mt-1">Mon-Fri, 9am - 6pm EST</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-start gap-5 p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100/50 border border-orange-100 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Global Presence</h4>
                  <p className="text-slate-700">45+ Countries Worldwide</p>
                  <p className="text-slate-500 text-sm mt-1">Serving clients across 6 continents</p>
                </div>
              </motion.div>
            </div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white relative overflow-hidden shadow-xl"
            >
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary-500 to-secondary-500 rounded-full blur-3xl opacity-20 -mr-10 -mt-10"></div>
                <h4 className="text-2xl font-bold mb-3 relative z-10">Need a Custom Solution?</h4>
                <p className="text-slate-300 mb-6 relative z-10">Get a detailed cost estimate tailored to your specific project requirements.</p>
                <button 
                  onClick={() => toggleMode('quote')}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-secondary-500 text-white px-6 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300 hover:-translate-y-0.5 relative z-10"
                >
                  Request a Quote <ArrowRight size={18} />
                </button>
            </motion.div>
          </motion.div>

          {/* Right: General Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100 h-fit"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                  placeholder="john@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                <select
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all bg-white"
                  value={formState.subject}
                  onChange={(e) => {
                      if (e.target.value === 'quote') {
                          toggleMode('quote');
                      } else {
                          setFormState({...formState, subject: e.target.value});
                      }
                  }}
                >
                  <option value="general">General Inquiry</option>
                  <option value="support">Customer Support</option>
                  <option value="quote">Get a Quote / Project</option>
                  <option value="media">Media & Press</option>
                  <option value="careers">Careers</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full py-3.5 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                    isSubmitted ? 'bg-green-500' : 'bg-gradient-to-r from-primary-600 to-secondary-500 hover:shadow-lg hover:-translate-y-0.5'
                }`}
              >
                {isSubmitted ? (
                    <>Sent! <CheckCircle2 size={20} /></>
                ) : (
                    <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
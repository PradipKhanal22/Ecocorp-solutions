import React, { useState, useEffect } from 'react';
import Section from '../components/UI/Section';
import { Mail, MapPin, Phone, Send, CheckCircle2, ArrowRight, Building, Calendar, DollarSign, MessageSquare } from 'lucide-react';
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
        <Section className="!py-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-wide uppercase mb-4">
                Project Inquiry
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Request a Free Quote</h1>
              <p className="text-lg text-slate-600 mb-8">
                Tell us about your project goals and requirements. We'll analyze your needs and provide a detailed proposal within 24 hours.
              </p>
              
              <button 
                onClick={() => toggleMode('contact')}
                className="text-sm text-slate-500 hover:text-primary-600 underline flex items-center justify-center gap-1 mx-auto"
              >
                Looking for general contact info instead? Click here
              </button>
            </div>

            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
              <div className="bg-gradient-to-r from-primary-600 to-secondary-500 h-2 w-full"></div>
              <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
                
                {/* Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
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
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Work Email</label>
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
            </div>
          </div>
        </Section>
      </div>
    );
  }

  // --- RENDER: CONTACT MODE (Default) ---
  return (
    <div className="pt-20">
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left: Contact Info */}
          <div>
            <div className="mb-8">
              <span className="text-primary-600 font-bold tracking-wider uppercase text-sm">Contact Us</span>
              <h1 className="text-4xl font-bold text-slate-900 mt-2 mb-6">Get in Touch</h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                We'd love to hear from you. Whether you have a question about our services, pricing, or just want to say hello, our team is ready to answer all your questions.
              </p>
            </div>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-5">
                <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Our Location</h4>
                  <p className="text-slate-600 mt-1">123 Innovation Drive,<br />Tech Valley, CA 94043</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Email Us</h4>
                  <p className="text-slate-600 mt-1">contact@ecocorp.com</p>
                  <p className="text-slate-500 text-sm mt-1">Response time: ~2 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="p-4 bg-purple-50 text-purple-600 rounded-2xl shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Call Us</h4>
                  <p className="text-slate-600 mt-1">+1 (555) 123-4567</p>
                  <p className="text-slate-500 text-sm mt-1">Mon-Fri, 9am - 6pm EST</p>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500 rounded-full blur-3xl opacity-20 -mr-10 -mt-10"></div>
                <h4 className="text-xl font-bold mb-3 relative z-10">Looking for a custom solution?</h4>
                <p className="text-slate-300 mb-6 relative z-10">Get a detailed cost estimate for your specific project needs.</p>
                <button 
                  onClick={() => toggleMode('quote')}
                  className="inline-flex items-center gap-2 bg-white text-slate-900 px-5 py-2.5 rounded-lg font-bold hover:bg-slate-100 transition-colors relative z-10"
                >
                  Request a Quote <ArrowRight size={16} />
                </button>
            </div>
          </div>

          {/* Right: General Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100 h-fit">
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
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
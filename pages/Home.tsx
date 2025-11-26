import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Zap, Shield, Globe, Award, Users, TrendingUp, Sparkles, Star, Quote } from 'lucide-react';
import Section from '../components/UI/Section';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80" 
            alt="Modern workspace" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-primary-900/70" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-emerald-500/10 to-blue-500/10 rounded-bl-[10rem] z-[1]" />
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-tr-[10rem] z-[1]" />

        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 lg:gap-20 relative z-10">
          <div className="md:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Innovating for Tomorrow
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white mb-6">
                Building a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Sustainable</span> Future Together
              </h1>
              <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl">
                We provide cutting-edge solutions for modern organizations. From strategic consulting to green technology implementation, we are your partners in growth.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to="/contact"
                  state={{ interest: 'quote' }}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-bold text-lg shadow-2xl shadow-primary-500/40 hover:shadow-primary-500/60 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
                >
                  Get Started <ArrowRight size={20} />
                </Link>
                <Link
                  to="/about"
                  className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold text-lg hover:bg-white/20 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-8 mt-12 pt-8 border-t border-white/20">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">500+</div>
                  <div className="text-sm text-slate-300">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">98%</div>
                  <div className="text-sm text-slate-300">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">45+</div>
                  <div className="text-sm text-slate-300">Countries Served</div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:w-1/2 relative hidden md:block"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Team collaboration"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>
            
            {/* Floating Achievement Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl max-w-xs"
            >
              <div className="flex items-center gap-4">
                <div className="p-4 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl text-white shadow-lg">
                  <Award size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">Award Winning</h4>
                  <p className="text-sm text-slate-600">Top Sustainability Partner 2025</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Rating Card */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -top-6 -right-6 bg-white p-5 rounded-2xl shadow-2xl"
            >
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm font-bold text-slate-800">5.0 Rating</p>
              <p className="text-xs text-slate-500">From 200+ Reviews</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <Section id="features" bgColor="white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
              <Sparkles size={16} />
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">EcoCorp</span>?
            </h2>
            <p className="text-lg text-slate-600">
              We combine industry expertise with innovative technology to deliver results that matter.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Zap, title: "Fast Implementation", text: "Rapid deployment of solutions to get you running quickly and efficiently.", color: "from-yellow-500 to-orange-500" },
            { icon: Shield, title: "Secure & Reliable", text: "Enterprise-grade security standards for complete peace of mind.", color: "from-blue-500 to-cyan-500" },
            { icon: Globe, title: "Global Reach", text: "Connecting your business to opportunities across 45+ countries worldwide.", color: "from-emerald-500 to-teal-500" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Stats Section */}
      <Section bgColor="gradient">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Users, value: "10K+", label: "Happy Clients" },
            { icon: Award, value: "50+", label: "Awards Won" },
            { icon: Globe, value: "45+", label: "Countries" },
            { icon: TrendingUp, value: "99%", label: "Success Rate" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto bg-white rounded-2xl flex items-center justify-center text-primary-600 mb-4 shadow-lg">
                <stat.icon size={36} />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <p className="text-slate-700 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Services Preview */}
      <Section bgColor="light">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Core Services</h2>
            <p className="text-lg text-slate-600">
              Comprehensive solutions designed to drive your business forward
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[
            { title: "Strategic Consulting", desc: "Data-driven insights for better decisions", color: "bg-blue-50 text-blue-600" },
            { title: "Custom Development", desc: "Tailored software solutions", color: "bg-purple-50 text-purple-600" },
            { title: "Sustainability Audits", desc: "Reduce your carbon footprint", color: "bg-emerald-50 text-emerald-600" },
            { title: "Financial Planning", desc: "Expert advice for growth", color: "bg-orange-50 text-orange-600" },
            { title: "Mobile Solutions", desc: "Engaging mobile applications", color: "bg-pink-50 text-pink-600" },
            { title: "Global Expansion", desc: "Enter new markets confidently", color: "bg-cyan-50 text-cyan-600" },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 bg-white rounded-2xl border border-slate-100 hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-bold text-lg hover:shadow-xl hover:shadow-primary-500/40 hover:-translate-y-1 transition-all duration-300"
          >
            View All Services <ArrowRight size={20} />
          </Link>
        </div>
      </Section>

      {/* Testimonials */}
      <Section bgColor="white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">What Our Clients Say</h2>
            <p className="text-lg text-slate-600">
              Don't just take our word for it - hear from our satisfied partners
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Sarah Johnson", role: "CEO, TechVision", quote: "EcoCorp transformed our operations with sustainable solutions that boosted efficiency by 40%." },
            { name: "Michael Chen", role: "Director, GreenStart", quote: "Their expertise in green technology helped us achieve carbon neutrality ahead of schedule." },
            { name: "Emma Davis", role: "Founder, InnovateCo", quote: "Outstanding service and results. They truly understand the balance between profit and sustainability." },
          ].map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100 hover:shadow-xl transition-all duration-300"
            >
              <Quote className="text-primary-500 mb-4" size={32} />
              <p className="text-slate-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of innovative companies leveraging our solutions to build a better, more sustainable future.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              state={{ interest: 'quote' }}
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-slate-900 text-white font-bold text-lg hover:bg-slate-800 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Get a Free Quote <ArrowRight size={20} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-white text-slate-900 border-2 border-slate-200 font-bold text-lg hover:border-slate-300 hover:shadow-xl transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </Section>
    </>
  );
};

export default Home;
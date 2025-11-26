import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Zap, Shield, Globe } from 'lucide-react';
import Section from '../components/UI/Section';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-blue-50 to-emerald-50 opacity-60 rounded-bl-[10rem] -z-10" />
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-tr from-blue-50 to-transparent rounded-tr-[10rem] -z-10" />

        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="md:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Innovating for tomorrow
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                Building a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">Sustainable</span> Future Together.
              </h1>
              <p className="text-lg text-slate-600 mt-6 leading-relaxed max-w-lg">
                We provide cutting-edge solutions for modern organizations. From strategic consulting to green technology implementation, we are your partners in growth.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to="/contact"
                  state={{ interest: 'quote' }}
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-semibold shadow-lg shadow-primary-500/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
                >
                  Get Started <ArrowRight size={18} />
                </Link>
                <Link
                  to="/about"
                  className="px-8 py-3.5 rounded-full bg-white text-slate-700 border border-slate-200 font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/800/600?random=1"
                alt="Modern Office"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden lg:block">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-emerald-100 rounded-full text-emerald-600">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Verified Success</h4>
                  <p className="text-xs text-slate-500">100% Client Satisfaction</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brief Intro / Features */}
      <Section id="intro" bgColor="white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose EcoCorp?</h2>
          <p className="text-slate-600">
            We combine industry expertise with innovative technology to deliver results that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Zap, title: "Fast Implementation", text: "Rapid deployment of solutions to get you running quickly." },
            { icon: Shield, title: "Secure & Reliable", text: "Enterprise-grade security standards for peace of mind." },
            { icon: Globe, title: "Global Reach", text: "Connecting your business to opportunities worldwide." },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-primary-500/20">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section bgColor="gradient" className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          Join hundreds of innovative companies leveraging our solutions to build a better future.
        </p>
        <Link
          to="/contact"
          state={{ interest: 'quote' }}
          className="inline-block px-10 py-4 rounded-full bg-slate-900 text-white font-bold text-lg hover:bg-slate-800 hover:shadow-2xl transition-all duration-300"
        >
          Get a Free Quote
        </Link>
      </Section>
    </>
  );
};

export default Home;
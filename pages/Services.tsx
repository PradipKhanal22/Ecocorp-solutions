import React from 'react';
import Section from '../components/UI/Section';
import { BarChart, Code, Leaf, PieChart, Smartphone, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { icon: BarChart, title: 'Strategic Consulting', desc: 'Data-driven insights to guide your decision-making and optimize operations.' },
  { icon: Code, title: 'Custom Development', desc: 'Tailored software solutions built with the latest technologies to meet your unique needs.' },
  { icon: Leaf, title: 'Sustainability Audits', desc: 'Comprehensive assessments to reduce your carbon footprint and improve efficiency.' },
  { icon: PieChart, title: 'Financial Planning', desc: 'Expert financial advice to ensure sustainable growth and profitability.' },
  { icon: Smartphone, title: 'Mobile Solutions', desc: 'Engaging mobile applications that connect you with customers anywhere.' },
  { icon: Globe, title: 'Global Expansion', desc: 'Strategies and support for taking your business into new international markets.' },
];

const Services: React.FC = () => {
  return (
    <div className="pt-20">
       <div className="bg-slate-50 py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Services</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive solutions designed to propel your business forward.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.desc}</p>
              <Link to="/contact" className="text-blue-600 font-semibold text-sm hover:underline">
                Learn more &rarr;
              </Link>
            </div>
          ))}
        </div>
      </Section>
      
      <Section bgColor="gradient" className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Need a custom solution?</h2>
          <p className="text-slate-600 mb-8">We specialize in solving complex problems. Let's talk about your specific needs.</p>
           <Link
            to="/contact"
            state={{ interest: 'quote' }}
            className="px-8 py-3 rounded-full bg-white text-primary-600 font-bold border border-primary-200 hover:bg-primary-50 transition-colors"
          >
            Get in Touch
          </Link>
      </Section>
    </div>
  );
};

export default Services;
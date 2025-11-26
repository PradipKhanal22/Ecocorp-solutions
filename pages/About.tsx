import React from 'react';
import Section from '../components/UI/Section';
import { Target, Lightbulb, Users } from 'lucide-react';

const teamMembers = [
  { id: '1', name: 'Sarah Johnson', role: 'CEO & Founder', imageUrl: 'https://picsum.photos/300/300?random=10' },
  { id: '2', name: 'David Chen', role: 'Chief Technology Officer', imageUrl: 'https://picsum.photos/300/300?random=11' },
  { id: '3', name: 'Emily Davis', role: 'Head of Sustainability', imageUrl: 'https://picsum.photos/300/300?random=12' },
  { id: '4', name: 'Michael Wilson', role: 'Strategy Director', imageUrl: 'https://picsum.photos/300/300?random=13' },
];

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/50 to-secondary-900/50" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Driven by purpose, powered by innovation. Learn about who we are and where we're going.
          </p>
        </div>
      </div>

      {/* Mission Vision Values */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: Target, title: "Our Mission", text: "To empower organizations with sustainable strategies that drive long-term growth and positive environmental impact." },
            { icon: Lightbulb, title: "Our Vision", text: "A world where business success and ecological stewardship go hand in hand, creating a thriving future for all." },
            { icon: Users, title: "Our Values", text: "Integrity, innovation, collaboration, and a relentless commitment to excellence in everything we do." },
          ].map((item, i) => (
            <div key={i} className="text-center p-6">
              <div className="w-16 h-16 mx-auto bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-6">
                <item.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Story / Context */}
      <Section bgColor="light">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
             <img src="https://picsum.photos/600/400?random=20" alt="Team meeting" className="rounded-2xl shadow-xl w-full" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Journey</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Founded in 2015, EcoCorp started with a simple idea: that technology could be the greatest enabler of sustainability. What began as a small consultancy has grown into a global firm serving Fortune 500 companies.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We believe that the best solutions are those that solve today's problems without compromising tomorrow. Our team of experts works tirelessly to bridge the gap between ambitious goals and actionable reality.
            </p>
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
          <p className="text-slate-600">The passionate individuals behind our success.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="group relative overflow-hidden rounded-xl bg-white shadow-lg border border-slate-100">
              <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                <p className="text-primary-600 font-medium text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default About;
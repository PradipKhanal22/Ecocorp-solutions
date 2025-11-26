import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Section from '../components/UI/Section';
import { Sparkles, Grid3x3, Layout, ExternalLink, Award } from 'lucide-react';

const projects = [
  { id: 1, title: "Urban Eco-Park", category: "Landscape", img: "https://picsum.photos/600/400?random=30", desc: "Transforming urban spaces into green sanctuaries" },
  { id: 2, title: "Solar Tech Hub", category: "Architecture", img: "https://picsum.photos/600/400?random=31", desc: "Next-generation sustainable building design" },
  { id: 3, title: "Clean Water Initiative", category: "Community", img: "https://picsum.photos/600/400?random=32", desc: "Bringing clean water to underserved areas" },
  { id: 4, title: "Green Transport", category: "Infrastructure", img: "https://picsum.photos/600/400?random=33", desc: "Eco-friendly transportation solutions" },
  { id: 5, title: "Smart City Grid", category: "Technology", img: "https://picsum.photos/600/400?random=34", desc: "Intelligent energy distribution systems" },
  { id: 6, title: "Sustainable Housing", category: "Residential", img: "https://picsum.photos/600/400?random=35", desc: "Affordable green living spaces" },
  { id: 7, title: "Renewable Energy Farm", category: "Technology", img: "https://picsum.photos/600/400?random=36", desc: "Large-scale solar and wind integration" },
  { id: 8, title: "Coastal Restoration", category: "Landscape", img: "https://picsum.photos/600/400?random=37", desc: "Protecting and rebuilding coastal ecosystems" },
  { id: 9, title: "Innovation Center", category: "Architecture", img: "https://picsum.photos/600/400?random=38", desc: "Hub for sustainable innovation" },
];

const categories = ["All", "Architecture", "Landscape", "Community", "Infrastructure", "Technology", "Residential"];

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const navigate = useNavigate();

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80" 
            alt="Project showcase" 
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
              Our Work
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6">
              Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Gallery</span>
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              A showcase of our impactful projects and the positive change we're creating for communities worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <Section bgColor="white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '150+', label: 'Projects Completed' },
            { value: '45+', label: 'Countries Reached' },
            { value: '2M+', label: 'Lives Impacted' },
            { value: '98%', label: 'Success Rate' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500 mb-2">
                {stat.value}
              </div>
              <p className="text-slate-600 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Filter Section */}
      <Section bgColor="light">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Explore Our Projects</h2>
          <p className="text-slate-600 text-lg mb-8">Filter by category to find what interests you most</p>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-500 text-white shadow-lg shadow-primary-500/30'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-primary-300 hover:text-primary-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              onClick={() => navigate(`/gallery/${project.id}`)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-primary-600 text-xs font-bold shadow-lg">
                  {project.category}
                </div>

                {/* Award Badge - Shows on hover */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: hoveredId === project.id ? 1 : 0, scale: hoveredId === project.id ? 1 : 0 }}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg"
                >
                  <Award size={20} className="text-white" />
                </motion.div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: hoveredId === project.id ? 0 : 20, opacity: hoveredId === project.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-slate-300 text-sm mb-2">{project.desc}</p>
                  </motion.div>
                  <h3 className="text-white text-2xl font-bold mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                    View Project <ExternalLink size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-slate-500 text-lg">No projects found in this category.</p>
          </motion.div>
        )}
      </Section>

      {/* CTA Section */}
      <Section bgColor="gradient" className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-slate-700 text-sm font-semibold mb-6">
            <Grid3x3 size={16} />
            Let's Collaborate
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            We'd love to hear about your vision and explore how we can bring it to life together.
          </p>
          <a
            href="/#/contact"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-slate-900 text-white font-bold text-lg hover:bg-slate-800 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            Start Your Project <ExternalLink size={20} />
          </a>
        </motion.div>
      </Section>
    </div>
  );
};

export default Gallery;
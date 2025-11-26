import React from 'react';
import Section from '../components/UI/Section';

const projects = [
  { id: 1, title: "Urban Eco-Park", category: "Landscape", img: "https://picsum.photos/600/400?random=30" },
  { id: 2, title: "Solar Tech Hub", category: "Architecture", img: "https://picsum.photos/600/400?random=31" },
  { id: 3, title: "Clean Water Initiative", category: "Community", img: "https://picsum.photos/600/400?random=32" },
  { id: 4, title: "Green Transport", category: "Infrastructure", img: "https://picsum.photos/600/400?random=33" },
  { id: 5, title: "Smart City Grid", category: "Technology", img: "https://picsum.photos/600/400?random=34" },
  { id: 6, title: "Sustainable Housing", category: "Residential", img: "https://picsum.photos/600/400?random=35" },
];

const Gallery: React.FC = () => {
  return (
    <div className="pt-20">
      <Section>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Projects</h1>
          <p className="text-slate-600">A showcase of our recent work and community impact.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group relative rounded-xl overflow-hidden cursor-pointer">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-emerald-400 text-sm font-medium mb-1">{project.category}</span>
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Gallery;
import React from 'react';
import Section from '../components/UI/Section';
import { Calendar, User } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: "The Future of Renewable Energy in 2024",
    excerpt: "Exploring the latest trends and innovations shaping the renewable energy landscape this year.",
    date: "Oct 15, 2023",
    author: "Dr. Emily Chen",
    image: "https://picsum.photos/600/400?random=40"
  },
  {
    id: 2,
    title: "How to Build a Sustainable Business Strategy",
    excerpt: "Key steps to integrating sustainability into your core business model without sacrificing profitability.",
    date: "Oct 02, 2023",
    author: "Mark Johnson",
    image: "https://picsum.photos/600/400?random=41"
  },
  {
    id: 3,
    title: "Community Impact: The Green Initiative",
    excerpt: "A look back at our recent community outreach program and the lives it touched.",
    date: "Sep 28, 2023",
    author: "Sarah Davis",
    image: "https://picsum.photos/600/400?random=42"
  }
];

const Blog: React.FC = () => {
  return (
    <div className="pt-20">
      <Section bgColor="light">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Latest News</h1>
          <p className="text-slate-600">Insights, updates, and stories from our team.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                  <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 hover:text-primary-600 cursor-pointer transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 mb-4 flex-1">{post.excerpt}</p>
                <button className="text-primary-600 font-semibold text-sm self-start hover:underline">
                  Read Article
                </button>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Blog;
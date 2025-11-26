import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/UI/Section';
import { Calendar, User, Clock, ArrowRight, Sparkles, TrendingUp, Tag } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: "The Future of Renewable Energy in 2025",
    excerpt: "Exploring the latest trends and innovations shaping the renewable energy landscape this year.",
    date: "Nov 15, 2025",
    author: "Dr. Emily Chen",
    image: "https://picsum.photos/600/400?random=40",
    category: "Energy",
    readTime: "5 min",
    featured: true
  },
  {
    id: 2,
    title: "How to Build a Sustainable Business Strategy",
    excerpt: "Key steps to integrating sustainability into your core business model without sacrificing profitability.",
    date: "Nov 02, 2025",
    author: "Mark Johnson",
    image: "https://picsum.photos/600/400?random=41",
    category: "Business",
    readTime: "7 min",
    featured: false
  },
  {
    id: 3,
    title: "Community Impact: The Green Initiative",
    excerpt: "A look back at our recent community outreach program and the lives it touched.",
    date: "Oct 28, 2025",
    author: "Sarah Davis",
    image: "https://picsum.photos/600/400?random=42",
    category: "Community",
    readTime: "4 min",
    featured: false
  },
  {
    id: 4,
    title: "Smart Cities: Technology Meets Sustainability",
    excerpt: "How IoT and AI are revolutionizing urban planning and creating greener cities.",
    date: "Oct 20, 2025",
    author: "David Lee",
    image: "https://picsum.photos/600/400?random=43",
    category: "Technology",
    readTime: "6 min",
    featured: false
  },
  {
    id: 5,
    title: "Carbon Neutrality: A Practical Guide",
    excerpt: "Step-by-step strategies for businesses aiming to achieve carbon neutrality by 2030.",
    date: "Oct 12, 2025",
    author: "Dr. Emily Chen",
    image: "https://picsum.photos/600/400?random=44",
    category: "Sustainability",
    readTime: "8 min",
    featured: false
  },
  {
    id: 6,
    title: "Financial Benefits of Going Green",
    excerpt: "Discover how sustainable practices can boost your bottom line and attract investors.",
    date: "Oct 05, 2025",
    author: "Mark Johnson",
    image: "https://picsum.photos/600/400?random=45",
    category: "Business",
    readTime: "5 min",
    featured: false
  }
];

const categories = ["All", "Energy", "Business", "Community", "Technology", "Sustainability"];

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  const filteredPosts = selectedCategory === "All"
    ? regularPosts
    : regularPosts.filter(p => p.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&q=80"
            alt="Blog"
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
              Insights & Updates
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">News</span>
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              Insights, updates, and stories from our team about sustainability, innovation, and positive change.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <Section bgColor="white">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="text-primary-600" size={24} />
            <h2 className="text-2xl font-bold text-slate-900">Featured Article</h2>
          </div>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gradient-to-br from-slate-50 to-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100"
          >
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-gradient-to-r from-primary-600 to-secondary-500 text-white text-xs font-bold shadow-lg">
                Featured
              </div>
            </div>

            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold mb-4 w-fit">
                <Tag size={12} />
                {featuredPost.category}
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 hover:text-primary-600 cursor-pointer transition-colors">
                {featuredPost.title}
              </h3>

              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <div className="flex items-center gap-6 text-sm text-slate-500 mb-6">
                <span className="flex items-center gap-2">
                  <Calendar size={16} className="text-primary-500" />
                  {featuredPost.date}
                </span>
                <span className="flex items-center gap-2">
                  <User size={16} className="text-primary-500" />
                  {featuredPost.author}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={16} className="text-primary-500" />
                  {featuredPost.readTime}
                </span>
              </div>

              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-semibold hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300 hover:-translate-y-0.5 w-fit">
                Read Full Article <ArrowRight size={18} />
              </button>
            </div>
          </motion.article>
        </Section>
      )}

      {/* Blog Posts with Filter */}
      <Section bgColor="light">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">All Articles</h2>
          <p className="text-slate-600 text-lg mb-8">Explore our latest thoughts and insights</p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${selectedCategory === category
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-500 text-white shadow-lg shadow-primary-500/30'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-primary-300 hover:text-primary-600'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-primary-600 text-xs font-bold shadow-lg">
                  {post.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} className="text-primary-500" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} className="text-primary-500" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 cursor-pointer transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-slate-600 mb-4 flex-1 line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <User size={16} className="text-primary-500" />
                    <span>{post.author}</span>
                  </div>
                  <button className="text-primary-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all duration-300">
                    Read <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-slate-500 text-lg">No articles found in this category.</p>
          </motion.div>
        )}
      </Section>
    </div>
  );
};

export default Blog;
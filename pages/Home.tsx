import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Zap, Shield, Globe, Award, Users, TrendingUp, Sparkles, Star, Quote, Briefcase, Code, Leaf, DollarSign, Smartphone, Map, Calendar, Clock, User, ExternalLink, MapPin } from 'lucide-react';
import Section from '../components/UI/Section';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Briefcase,
      title: "Strategic Consulting",
      desc: "Data-driven insights and strategic planning to optimize your business operations and drive growth",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Code,
      title: "Custom Development",
      desc: "Tailored software solutions built with cutting-edge technology to meet your unique needs",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Leaf,
      title: "Sustainability Audits",
      desc: "Comprehensive environmental assessments to reduce your carbon footprint and improve efficiency",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      icon: DollarSign,
      title: "Financial Planning",
      desc: "Expert financial advice and planning strategies to ensure sustainable growth and profitability",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      desc: "Engaging mobile applications with intuitive design and seamless user experiences",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50"
    },
    {
      icon: Map,
      title: "Global Expansion",
      desc: "Strategic guidance and support to help you enter new markets confidently and successfully",
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-50"
    },
  ];

  const featuredBlogs = [
    {
      id: 1,
      title: "The Future of Renewable Energy in 2025",
      excerpt: "Exploring the latest trends and innovations shaping the renewable energy landscape this year.",
      date: "Nov 15, 2025",
      author: "Dr. Emily Chen",
      image: "https://picsum.photos/600/400?random=40",
      category: "Energy",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "How to Build a Sustainable Business Strategy",
      excerpt: "Key steps to integrating sustainability into your core business model without sacrificing profitability.",
      date: "Nov 02, 2025",
      author: "Mark Johnson",
      image: "https://picsum.photos/600/400?random=41",
      category: "Business",
      readTime: "7 min"
    },
    {
      id: 3,
      title: "Smart Cities: Technology Meets Sustainability",
      excerpt: "How IoT and AI are revolutionizing urban planning and creating greener cities.",
      date: "Oct 20, 2025",
      author: "David Lee",
      image: "https://picsum.photos/600/400?random=43",
      category: "Technology",
      readTime: "6 min"
    }
  ];

  const featuredProjects = [
    {
      id: 1,
      title: "Urban Eco-Park",
      category: "Landscape",
      img: "https://picsum.photos/600/400?random=30",
      desc: "Transforming urban spaces into green sanctuaries",
      location: "Portland, Oregon"
    },
    {
      id: 2,
      title: "Solar Tech Hub",
      category: "Architecture",
      img: "https://picsum.photos/600/400?random=31",
      desc: "Next-generation sustainable building design",
      location: "Austin, Texas"
    },
    {
      id: 3,
      title: "Clean Water Initiative",
      category: "Community",
      img: "https://picsum.photos/600/400?random=32",
      desc: "Bringing clean water to underserved areas",
      location: "Rural Kenya"
    },
    {
      id: 4,
      title: "Green Transport",
      category: "Infrastructure",
      img: "https://picsum.photos/600/400?random=33",
      desc: "Eco-friendly transportation solutions",
      location: "Copenhagen, Denmark"
    }
  ];

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center pt-32 overflow-hidden">
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
              <div className="inline-flex mt-3 items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Innovating for Tomorrow
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-white mb-6">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
              <Sparkles size={16} />
              What We Offer
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Core Services</h2>
            <p className="text-lg text-slate-600">
              Comprehensive solutions designed to drive your business forward and create lasting impact
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => navigate('/services')}
              className="p-8 bg-white rounded-2xl border border-slate-100 hover:shadow-2xl hover:border-primary-200 transition-all duration-300 group cursor-pointer"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                <service.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-4">{service.desc}</p>
              <div className="flex items-center gap-2 text-primary-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <ArrowRight size={16} />
              </div>
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

      {/* Featured Projects/Gallery */}
      <Section bgColor="white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
              <Award size={16} />
              Our Work
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Featured Projects</h2>
            <p className="text-lg text-slate-600">
              Showcasing our most impactful sustainability and innovation projects
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => navigate(`/gallery/${project.id}`)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-primary-600 text-xs font-bold shadow-lg">
                  {project.category}
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="transform translate-y-0 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <div className="flex items-center gap-2 text-emerald-400 text-sm mb-2">
                      <MapPin size={14} />
                      <span>{project.location}</span>
                    </div>
                    <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-slate-300 text-sm mb-3">{project.desc}</p>
                    <div className="flex items-center gap-2 text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      View Project <ExternalLink size={16} />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 text-white font-bold text-lg hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            Explore All Projects <ArrowRight size={20} />
          </Link>
        </div>
      </Section>

      {/* Featured Blog Posts */}
      <Section bgColor="light">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
              <TrendingUp size={16} />
              Latest Insights
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">From Our Blog</h2>
            <p className="text-lg text-slate-600">
              Stay informed with our latest articles on sustainability and innovation
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredBlogs.map((blog, idx) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => navigate(`/blog/${blog.id}`)}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col group cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-primary-600 text-xs font-bold shadow-lg">
                  {blog.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} className="text-primary-500" />
                    {blog.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} className="text-primary-500" />
                    {blog.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 cursor-pointer transition-colors line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-slate-600 mb-4 flex-1 line-clamp-3">{blog.excerpt}</p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <User size={16} className="text-primary-500" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="text-primary-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                    Read <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-bold text-lg hover:shadow-xl hover:shadow-primary-500/40 hover:-translate-y-1 transition-all duration-300"
          >
            Read More Articles <ArrowRight size={20} />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">
              <Quote size={16} />
              Client Stories
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">What Our Clients Say</h2>
            <p className="text-lg text-slate-600">
              Don't just take our word for it - hear from our satisfied partners
            </p>
          </motion.div>
        </div>

        {/* Scrolling Testimonials Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling Track */}
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {/* First set of testimonials */}
            {[
              { 
                name: "Sarah Johnson", 
                role: "CEO, TechVision", 
                company: "TechVision Inc.",
                quote: "EcoCorp transformed our operations with sustainable solutions that boosted efficiency by 40%. Their team's expertise and dedication exceeded all expectations.",
                image: "https://i.pravatar.cc/150?img=5"
              },
              { 
                name: "Michael Chen", 
                role: "Director, GreenStart", 
                company: "GreenStart Solutions",
                quote: "Their expertise in green technology helped us achieve carbon neutrality ahead of schedule. The ROI has been remarkable, and our employees love the new initiatives.",
                image: "https://i.pravatar.cc/150?img=12"
              },
              { 
                name: "Emma Davis", 
                role: "Founder, InnovateCo", 
                company: "InnovateCo Ltd.",
                quote: "Outstanding service and results. They truly understand the balance between profit and sustainability. Our brand reputation has never been stronger.",
                image: "https://i.pravatar.cc/150?img=9"
              },
              { 
                name: "James Rodriguez", 
                role: "VP Operations, EcoTech", 
                company: "EcoTech Industries",
                quote: "Working with EcoCorp has been a game-changer for our business. Their innovative approach to sustainability has helped us reduce costs while improving our environmental impact.",
                image: "https://i.pravatar.cc/150?img=33"
              },
              { 
                name: "Lisa Anderson", 
                role: "Sustainability Director", 
                company: "Global Innovations",
                quote: "The team's commitment to excellence is unmatched. They delivered beyond our expectations and continue to provide outstanding support.",
                image: "https://i.pravatar.cc/150?img=20"
              },
              { 
                name: "Robert Kim", 
                role: "CEO, Future Systems", 
                company: "Future Systems Corp.",
                quote: "EcoCorp's strategic consulting helped us navigate complex sustainability challenges. Their data-driven approach delivered measurable results that impressed our board.",
                image: "https://i.pravatar.cc/150?img=15"
              },
            ].map((testimonial, idx) => (
              <div
                key={`first-${idx}`}
                className="flex-shrink-0 w-[500px] p-8 bg-gradient-to-br from-slate-50 via-white to-primary-50/30 rounded-3xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <Quote className="text-primary-500 mb-4" size={40} />
                
                <p className="text-slate-700 text-lg mb-8 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-gradient-to-br from-primary-500 to-secondary-500 shadow-lg">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center border-2 border-white">
                      <CheckCircle2 size={14} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-primary-600 font-semibold">{testimonial.role}</p>
                    <p className="text-xs text-slate-500">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {[
              { 
                name: "Sarah Johnson", 
                role: "CEO, TechVision", 
                company: "TechVision Inc.",
                quote: "EcoCorp transformed our operations with sustainable solutions that boosted efficiency by 40%. Their team's expertise and dedication exceeded all expectations.",
                image: "https://i.pravatar.cc/150?img=5"
              },
              { 
                name: "Michael Chen", 
                role: "Director, GreenStart", 
                company: "GreenStart Solutions",
                quote: "Their expertise in green technology helped us achieve carbon neutrality ahead of schedule. The ROI has been remarkable, and our employees love the new initiatives.",
                image: "https://i.pravatar.cc/150?img=12"
              },
              { 
                name: "Emma Davis", 
                role: "Founder, InnovateCo", 
                company: "InnovateCo Ltd.",
                quote: "Outstanding service and results. They truly understand the balance between profit and sustainability. Our brand reputation has never been stronger.",
                image: "https://i.pravatar.cc/150?img=9"
              },
              { 
                name: "James Rodriguez", 
                role: "VP Operations, EcoTech", 
                company: "EcoTech Industries",
                quote: "Working with EcoCorp has been a game-changer for our business. Their innovative approach to sustainability has helped us reduce costs while improving our environmental impact.",
                image: "https://i.pravatar.cc/150?img=33"
              },
              { 
                name: "Lisa Anderson", 
                role: "Sustainability Director", 
                company: "Global Innovations",
                quote: "The team's commitment to excellence is unmatched. They delivered beyond our expectations and continue to provide outstanding support.",
                image: "https://i.pravatar.cc/150?img=20"
              },
              { 
                name: "Robert Kim", 
                role: "CEO, Future Systems", 
                company: "Future Systems Corp.",
                quote: "EcoCorp's strategic consulting helped us navigate complex sustainability challenges. Their data-driven approach delivered measurable results that impressed our board.",
                image: "https://i.pravatar.cc/150?img=15"
              },
            ].map((testimonial, idx) => (
              <div
                key={`second-${idx}`}
                className="flex-shrink-0 w-[500px] p-8 bg-gradient-to-br from-slate-50 via-white to-primary-50/30 rounded-3xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <Quote className="text-primary-500 mb-4" size={40} />
                
                <p className="text-slate-700 text-lg mb-8 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-gradient-to-br from-primary-500 to-secondary-500 shadow-lg">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center border-2 border-white">
                      <CheckCircle2 size={14} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-primary-600 font-semibold">{testimonial.role}</p>
                    <p className="text-xs text-slate-500">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
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
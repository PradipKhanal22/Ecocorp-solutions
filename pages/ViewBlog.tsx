import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Section from '../components/UI/Section';
import { Calendar, User, Clock, ArrowLeft, Share2, Heart, Bookmark, Tag, TrendingUp, MessageCircle } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "The Future of Renewable Energy in 2025",
    excerpt: "Exploring the latest trends and innovations shaping the renewable energy landscape this year.",
    date: "Nov 15, 2025",
    author: "Dr. Emily Chen",
    authorRole: "Chief Energy Advisor",
    image: "https://picsum.photos/1200/600?random=40",
    category: "Energy",
    readTime: "5 min",
    featured: true,
    content: `
      <p>The renewable energy sector is experiencing unprecedented growth and innovation in 2025. With global commitment to carbon neutrality strengthening, we're witnessing transformative changes across solar, wind, and emerging technologies.</p>
      
      <h2>Solar Power Breakthroughs</h2>
      <p>Perovskite solar cells have finally reached commercial viability, offering 30% efficiency rates at a fraction of traditional silicon costs. This breakthrough is democratizing solar energy access worldwide, particularly in developing nations where energy infrastructure is limited.</p>
      
      <h2>Wind Energy Innovation</h2>
      <p>Offshore wind farms are utilizing AI-driven predictive maintenance systems, reducing downtime by 40% and increasing overall energy output. Floating wind turbines are now operating in previously inaccessible deep-water locations.</p>
      
      <h2>Energy Storage Solutions</h2>
      <p>Grid-scale battery storage has become economically competitive with natural gas peaker plants. Solid-state battery technology is enabling longer-duration storage, solving the intermittency challenges that have long plagued renewable energy adoption.</p>
      
      <h2>Policy and Investment</h2>
      <p>Governments worldwide are accelerating renewable energy mandates. The U.S., EU, and China have collectively committed over $2 trillion in renewable energy investments through 2030, creating millions of green jobs and reshaping global energy markets.</p>
      
      <h2>Looking Ahead</h2>
      <p>The trajectory is clear: renewable energy is not just sustainable—it's economically superior. As costs continue to decline and technology improves, we're approaching a tipping point where clean energy becomes the default choice, not the alternative.</p>
    `,
    tags: ["Renewable Energy", "Solar Power", "Wind Energy", "Sustainability", "Innovation"]
  },
  {
    id: 2,
    title: "How to Build a Sustainable Business Strategy",
    excerpt: "Key steps to integrating sustainability into your core business model without sacrificing profitability.",
    date: "Nov 02, 2025",
    author: "Mark Johnson",
    authorRole: "Business Strategy Director",
    image: "https://picsum.photos/1200/600?random=41",
    category: "Business",
    readTime: "7 min",
    featured: false,
    content: `
      <p>Sustainability is no longer a corporate buzzword—it's a business imperative. Companies that successfully integrate sustainable practices into their core operations are outperforming competitors and attracting top talent and investors.</p>
      
      <h2>Start with Assessment</h2>
      <p>Begin by conducting a comprehensive sustainability audit. Identify your company's environmental footprint across operations, supply chain, and product lifecycle. Understanding your baseline is crucial for setting meaningful targets.</p>
      
      <h2>Set Clear, Measurable Goals</h2>
      <p>Establish specific sustainability KPIs aligned with frameworks like the UN Sustainable Development Goals or Science-Based Targets. Make these goals public to drive accountability and stakeholder confidence.</p>
      
      <h2>Engage Your Supply Chain</h2>
      <p>Sustainability cannot stop at your company's doors. Work with suppliers to improve their environmental practices. Leading companies are offering training, resources, and incentives to help partners meet sustainability standards.</p>
      
      <h2>Innovate Your Products</h2>
      <p>Design products with circular economy principles. Consider recyclability, durability, and repairability from the outset. Companies like Patagonia have shown that sustainable products can command premium pricing.</p>
      
      <h2>Communicate Authentically</h2>
      <p>Avoid greenwashing by being transparent about both successes and challenges. Consumers and investors value honesty and continuous improvement over perfection.</p>
      
      <h2>The Business Case</h2>
      <p>Sustainable businesses enjoy lower operational costs, reduced regulatory risks, enhanced brand reputation, and better access to capital. The question is no longer whether to pursue sustainability, but how quickly you can integrate it.</p>
    `,
    tags: ["Business Strategy", "Sustainability", "ESG", "Corporate Responsibility", "Innovation"]
  },
  {
    id: 3,
    title: "Community Impact: The Green Initiative",
    excerpt: "A look back at our recent community outreach program and the lives it touched.",
    date: "Oct 28, 2025",
    author: "Sarah Davis",
    authorRole: "Community Relations Manager",
    image: "https://picsum.photos/1200/600?random=42",
    category: "Community",
    readTime: "4 min",
    featured: false,
    content: `
      <p>Our Green Initiative has completed its first year, and the results have exceeded our most optimistic projections. This community-driven program has transformed neighborhoods and created lasting positive impact.</p>
      
      <h2>Program Overview</h2>
      <p>The Green Initiative focused on three pillars: urban greening, renewable energy education, and waste reduction. We partnered with 25 communities across 10 cities, engaging over 5,000 residents directly.</p>
      
      <h2>Urban Greening Success</h2>
      <p>We planted 10,000 trees and created 15 community gardens. These green spaces have reduced local temperatures by an average of 3°C during summer months and provided fresh produce to food-insecure families.</p>
      
      <h2>Education and Empowerment</h2>
      <p>Our renewable energy workshops trained 500 individuals in solar panel installation and maintenance. Many graduates have started their own green businesses, creating local employment opportunities.</p>
      
      <h2>Waste Reduction Impact</h2>
      <p>Through our composting and recycling programs, participating communities reduced landfill waste by 40%. We established 30 recycling centers and distributed 2,000 composting bins to households.</p>
      
      <h2>Personal Stories</h2>
      <p>The most rewarding aspect has been hearing personal stories. Families sharing how community gardens brought neighbors together. Individuals who found new careers in the green economy. Children excited about environmental stewardship.</p>
      
      <h2>Looking Forward</h2>
      <p>Building on this success, we're expanding the Green Initiative to 50 new communities in 2026. Together, we're proving that grassroots environmental action creates meaningful, lasting change.</p>
    `,
    tags: ["Community", "Social Impact", "Urban Greening", "Education", "Sustainability"]
  },
  {
    id: 4,
    title: "Smart Cities: Technology Meets Sustainability",
    excerpt: "How IoT and AI are revolutionizing urban planning and creating greener cities.",
    date: "Oct 20, 2025",
    author: "David Lee",
    authorRole: "Smart City Technology Lead",
    image: "https://picsum.photos/1200/600?random=43",
    category: "Technology",
    readTime: "6 min",
    featured: false,
    content: `
      <p>Smart city technology is transforming how we think about urban sustainability. By leveraging IoT sensors, AI analytics, and integrated systems, cities are becoming more efficient, livable, and environmentally friendly.</p>
      
      <h2>Intelligent Energy Grids</h2>
      <p>Smart grids use real-time data to optimize energy distribution, reducing waste by up to 30%. AI algorithms predict demand patterns and automatically balance loads, integrating renewable sources seamlessly.</p>
      
      <h2>Traffic and Transportation</h2>
      <p>IoT-enabled traffic management systems reduce congestion by 25% in pilot cities. Real-time route optimization, synchronized traffic lights, and integrated public transit information improve mobility while cutting emissions.</p>
      
      <h2>Water Management</h2>
      <p>Smart water systems detect leaks instantly, saving millions of gallons annually. Sensors monitor water quality in real-time, ensuring safety while optimizing treatment processes.</p>
      
      <h2>Waste Collection Optimization</h2>
      <p>Smart bins with fill-level sensors enable dynamic collection routes, reducing fuel consumption by 40% and improving service reliability. AI-powered sorting systems increase recycling rates.</p>
      
      <h2>Air Quality Monitoring</h2>
      <p>Dense networks of air quality sensors provide granular data on pollution levels. This information drives targeted interventions and helps residents make informed decisions about outdoor activities.</p>
      
      <h2>Challenges and Opportunities</h2>
      <p>While technology offers tremendous potential, success requires addressing digital equity, data privacy, and infrastructure costs. Cities that navigate these challenges effectively will lead the sustainable urban future.</p>
    `,
    tags: ["Smart Cities", "IoT", "AI", "Urban Planning", "Technology"]
  },
  {
    id: 5,
    title: "Carbon Neutrality: A Practical Guide",
    excerpt: "Step-by-step strategies for businesses aiming to achieve carbon neutrality by 2030.",
    date: "Oct 12, 2025",
    author: "Dr. Emily Chen",
    authorRole: "Chief Energy Advisor",
    image: "https://picsum.photos/1200/600?random=44",
    category: "Sustainability",
    readTime: "8 min",
    featured: false,
    content: `
      <p>Achieving carbon neutrality is a complex but attainable goal. This guide provides a practical roadmap for businesses committed to eliminating their net carbon emissions by 2030.</p>
      
      <h2>Step 1: Measure Your Carbon Footprint</h2>
      <p>Conduct a comprehensive greenhouse gas inventory covering Scope 1 (direct emissions), Scope 2 (energy indirect), and Scope 3 (supply chain) emissions. Use recognized standards like the GHG Protocol for consistency.</p>
      
      <h2>Step 2: Set Science-Based Targets</h2>
      <p>Establish reduction targets aligned with climate science—typically 45-50% reduction by 2030. The Science Based Targets initiative provides validation and credibility for your commitments.</p>
      
      <h2>Step 3: Reduce Energy Consumption</h2>
      <p>Implement energy efficiency measures: LED lighting, HVAC optimization, building insulation, and equipment upgrades. Most businesses can reduce energy use 20-30% through operational improvements alone.</p>
      
      <h2>Step 4: Transition to Renewable Energy</h2>
      <p>Switch to renewable electricity through PPAs, RECs, or on-site generation. Solar and wind power are now cost-competitive with fossil fuels in most markets.</p>
      
      <h2>Step 5: Optimize Transportation</h2>
      <p>Electrify vehicle fleets, optimize logistics routes, and promote remote work. Transportation often represents 20-40% of corporate carbon footprints.</p>
      
      <h2>Step 6: Engage Your Supply Chain</h2>
      <p>Work with suppliers on emission reductions. Leading companies are requiring sustainability commitments as part of procurement contracts.</p>
      
      <h2>Step 7: Offset Remaining Emissions</h2>
      <p>After maximizing reductions, purchase high-quality carbon offsets for unavoidable emissions. Prioritize verified projects with clear additionality and permanence.</p>
      
      <h2>Step 8: Report and Verify</h2>
      <p>Publish annual sustainability reports with third-party verification. Transparency builds trust and demonstrates genuine commitment.</p>
    `,
    tags: ["Carbon Neutrality", "Climate Action", "Sustainability", "Business", "Net Zero"]
  },
  {
    id: 6,
    title: "Financial Benefits of Going Green",
    excerpt: "Discover how sustainable practices can boost your bottom line and attract investors.",
    date: "Oct 05, 2025",
    author: "Mark Johnson",
    authorRole: "Business Strategy Director",
    image: "https://picsum.photos/1200/600?random=45",
    category: "Business",
    readTime: "5 min",
    featured: false,
    content: `
      <p>Sustainability is no longer just an environmental imperative—it's a financial advantage. Companies embracing green practices are seeing measurable improvements in profitability, valuation, and investment appeal.</p>
      
      <h2>Operational Cost Savings</h2>
      <p>Energy efficiency investments typically deliver 15-30% annual returns. LED lighting, smart HVAC systems, and renewable energy reduce utility costs permanently, improving margins year after year.</p>
      
      <h2>Risk Mitigation</h2>
      <p>Sustainable businesses face lower regulatory risks, supply chain disruptions, and reputational hazards. Insurance premiums are decreasing for companies with strong ESG profiles.</p>
      
      <h2>Access to Capital</h2>
      <p>ESG-focused investment funds now manage over $35 trillion globally. Companies with strong sustainability credentials access capital more easily and at lower costs. Green bonds offer favorable interest rates.</p>
      
      <h2>Revenue Growth</h2>
      <p>66% of consumers prefer buying from sustainable brands, with 73% willing to pay premium prices. Sustainability-marketed products grow 5.6 times faster than conventional alternatives.</p>
      
      <h2>Talent Attraction and Retention</h2>
      <p>70% of job seekers, especially millennials and Gen Z, consider environmental commitment when choosing employers. Sustainable companies report 25% lower turnover rates, reducing recruitment costs.</p>
      
      <h2>Enhanced Valuation</h2>
      <p>Public companies with strong ESG ratings trade at premium valuations—15-20% higher price-to-earnings ratios on average. Private equity increasingly uses sustainability as a value creation lever.</p>
      
      <h2>Competitive Advantage</h2>
      <p>Early sustainability adopters establish market leadership, influencing regulations and industry standards. This first-mover advantage creates lasting competitive moats.</p>
      
      <h2>The Bottom Line</h2>
      <p>Sustainability drives profitability through multiple channels: cost reduction, revenue growth, risk management, and valuation enhancement. The financial case for going green is overwhelming.</p>
    `,
    tags: ["Finance", "ESG", "Business", "Investment", "Profitability"]
  }
];

const ViewBlog: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<typeof blogPosts[0] | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<typeof blogPosts>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const foundBlog = blogPosts.find(post => post.id === Number(id));
    if (foundBlog) {
      setBlog(foundBlog);
      
      // Get 3 related posts from same category
      const related = blogPosts
        .filter(post => post.id !== foundBlog.id && post.category === foundBlog.category)
        .slice(0, 3);
      
      // If not enough, fill with other posts
      if (related.length < 3) {
        const additional = blogPosts
          .filter(post => post.id !== foundBlog.id && post.category !== foundBlog.category)
          .slice(0, 3 - related.length);
        setRelatedPosts([...related, ...additional]);
      } else {
        setRelatedPosts(related);
      }
    } else {
      navigate('/blog');
    }
  }, [id, navigate]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section with Featured Image */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/30" />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 h-full flex items-end relative z-10 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Blog
            </Link>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm font-semibold">
                {blog.category}
              </span>
              <span className="text-white/60">•</span>
              <span className="text-white/80 text-sm">{blog.readTime} read</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {blog.title}
            </h1>
            
            <div className="flex items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span className="text-sm">{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span className="text-sm">{blog.date}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <Section bgColor="white">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-8"
            >
              {/* Author Info */}
              <div className="flex items-center gap-4 p-6 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  {blog.author.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">{blog.author}</h3>
                  <p className="text-slate-600 text-sm">{blog.authorRole}</p>
                </div>
              </div>

              {/* Article Body */}
              <div 
                className="prose prose-lg max-w-none
                  prose-headings:text-slate-900 prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4
                  prose-h2:text-2xl prose-h2:border-b prose-h2:border-slate-200 prose-h2:pb-3
                  prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-6
                  prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-slate-900 prose-strong:font-semibold
                  prose-ul:my-6 prose-li:text-slate-700"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium hover:bg-slate-200 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share Section */}
              <div className="mt-8 p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl">
                <h3 className="font-bold text-slate-900 mb-4">Share this article</h3>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-6 py-3 bg-white rounded-xl text-slate-700 font-semibold hover:shadow-lg transition-all">
                    <Share2 size={18} />
                    Share
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 bg-white rounded-xl text-slate-700 font-semibold hover:shadow-lg transition-all">
                    <Heart size={18} />
                    Like
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 bg-white rounded-xl text-slate-700 font-semibold hover:shadow-lg transition-all">
                    <Bookmark size={18} />
                    Save
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-4"
            >
              {/* Quick Info Card */}
              <div className="p-6 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100 mb-6 sticky top-24">
                <h3 className="font-bold text-slate-900 mb-4">Article Info</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-slate-600">
                    <Clock size={18} className="text-primary-500" />
                    <span>{blog.readTime} read</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <Calendar size={18} className="text-primary-500" />
                    <span>Published {blog.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <Tag size={18} className="text-primary-500" />
                    <span>{blog.category}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <MessageCircle size={18} className="text-primary-500" />
                    <span>15 Comments</span>
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </Section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <Section bgColor="light">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Related Articles</h2>
              <p className="text-slate-600">Continue exploring similar topics</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((post, idx) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onClick={() => navigate(`/blog/${post.id}`)}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-primary-600 text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-slate-900 text-lg mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} /> {post.readTime}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Newsletter CTA */}
      <Section bgColor="gradient">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <TrendingUp size={48} className="mx-auto mb-6 text-primary-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Never Miss an Update
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Subscribe to our newsletter for the latest insights on sustainability and innovation.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-bold hover:shadow-xl transition-all"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default ViewBlog;

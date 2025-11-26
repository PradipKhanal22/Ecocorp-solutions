import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Section from '../components/UI/Section';
import { ArrowLeft, Calendar, MapPin, Users, Award, CheckCircle2, ExternalLink, Share2, Heart } from 'lucide-react';

const galleryProjects = [
  {
    id: 1,
    title: "Urban Eco-Park",
    category: "Landscape",
    img: "https://picsum.photos/1200/800?random=30",
    thumbnail: "https://picsum.photos/600/400?random=30",
    desc: "Transforming urban spaces into green sanctuaries",
    location: "Portland, Oregon",
    date: "June 2025",
    client: "City of Portland",
    duration: "8 months",
    budget: "$2.5M",
    team: "15 professionals",
    overview: "The Urban Eco-Park project transformed a 12-acre abandoned industrial site into a thriving community green space. This ambitious project demonstrates how sustainable design can revitalize urban areas while providing essential ecosystem services.",
    challenge: "The site was heavily contaminated with industrial pollutants and required extensive soil remediation. Additionally, the location experienced chronic flooding during storm events, making traditional landscaping approaches unfeasible.",
    solution: "We implemented a comprehensive bioremediation strategy using phytoremediation plants to naturally clean the soil over 18 months. The park design incorporates rain gardens, bioswales, and permeable surfaces to manage stormwater naturally. Native plant species were selected for their resilience and low maintenance requirements.",
    results: [
      "Reduced local flooding incidents by 65%",
      "Created habitat for 47 bird species",
      "Attracts 10,000+ monthly visitors",
      "Lowered local temperatures by 4°C in summer",
      "Removed 850 tons of CO2 annually",
      "Generated 25 permanent jobs"
    ],
    features: [
      "2.5 miles of walking trails",
      "Community garden plots",
      "Outdoor amphitheater",
      "Native plant showcase",
      "Educational signage",
      "Bike repair stations",
      "Solar-powered lighting",
      "Rainwater harvesting system"
    ],
    images: [
      "https://picsum.photos/800/600?random=30",
      "https://picsum.photos/800/600?random=130",
      "https://picsum.photos/800/600?random=230",
      "https://picsum.photos/800/600?random=330"
    ],
    awards: ["Green Infrastructure Award 2025", "Community Impact Award"],
    testimonial: {
      text: "This park has transformed our neighborhood. It's become the heart of our community.",
      author: "Maria Rodriguez",
      role: "Local Resident & Community Leader"
    }
  },
  {
    id: 2,
    title: "Solar Tech Hub",
    category: "Architecture",
    img: "https://picsum.photos/1200/800?random=31",
    thumbnail: "https://picsum.photos/600/400?random=31",
    desc: "Next-generation sustainable building design",
    location: "Austin, Texas",
    date: "September 2025",
    client: "Tech Innovations Inc.",
    duration: "14 months",
    budget: "$8.7M",
    team: "32 professionals",
    overview: "The Solar Tech Hub is a 45,000 sq ft innovation center designed to achieve net-zero energy consumption. This LEED Platinum certified building showcases cutting-edge sustainable architecture and serves as a living laboratory for green building technologies.",
    challenge: "Create a high-tech facility that achieves net-zero energy in a climate with extreme summer temperatures, while maintaining occupant comfort and productivity. The building needed to accommodate sensitive electronic equipment requiring precise climate control.",
    solution: "We designed an integrated building system combining passive and active strategies. The building envelope features advanced insulation, electrochromic windows, and strategically placed thermal mass. A 250kW rooftop solar array combined with battery storage provides energy independence. Smart building systems optimize energy use in real-time.",
    results: [
      "100% renewable energy powered",
      "45% reduction in energy use vs baseline",
      "Zero operational carbon emissions",
      "75% natural daylight throughout",
      "LEED Platinum certification",
      "$125,000 annual energy savings"
    ],
    features: [
      "250kW solar photovoltaic array",
      "300kWh battery storage system",
      "Geothermal heating & cooling",
      "Rainwater harvesting (50,000 gal)",
      "Green roof with native plants",
      "Smart building automation",
      "EV charging stations (20 ports)",
      "Recycled material construction (80%)"
    ],
    images: [
      "https://picsum.photos/800/600?random=31",
      "https://picsum.photos/800/600?random=131",
      "https://picsum.photos/800/600?random=231",
      "https://picsum.photos/800/600?random=331"
    ],
    awards: ["Architecture Excellence Award 2025", "Innovation in Sustainability"],
    testimonial: {
      text: "Our building is now our best recruitment tool. Employees love working here, and clients are impressed.",
      author: "James Chen",
      role: "CEO, Tech Innovations Inc."
    }
  },
  {
    id: 3,
    title: "Clean Water Initiative",
    category: "Community",
    img: "https://picsum.photos/1200/800?random=32",
    thumbnail: "https://picsum.photos/600/400?random=32",
    desc: "Bringing clean water to underserved areas",
    location: "Rural Kenya",
    date: "March 2025",
    client: "Global Health Partners",
    duration: "10 months",
    budget: "$1.2M",
    team: "12 professionals + 80 local workers",
    overview: "The Clean Water Initiative brought sustainable water access to 15 rural communities in Kenya, impacting over 25,000 people. This project combined appropriate technology, community engagement, and capacity building to ensure long-term success.",
    challenge: "Communities lacked access to clean water, forcing residents (primarily women and children) to walk up to 4 hours daily to collect water from contaminated sources. High rates of waterborne illness severely impacted health and economic development.",
    solution: "We installed 15 solar-powered deep well pumps with community water distribution points. Each system includes filtration, storage tanks, and distribution taps. Local technicians received comprehensive training for maintenance and repairs. Water committees were established for governance and fee collection.",
    results: [
      "25,000+ people gained clean water access",
      "85% reduction in waterborne diseases",
      "4 hours daily time savings per household",
      "Girls' school attendance increased 40%",
      "Income generation from water sales",
      "100% local maintenance capability"
    ],
    features: [
      "15 solar-powered pumps",
      "Multi-stage water filtration",
      "45,000L storage capacity per site",
      "Community distribution networks",
      "Water quality monitoring systems",
      "Maintenance training programs",
      "Hygiene education initiatives",
      "Income-generating water kiosks"
    ],
    images: [
      "https://picsum.photos/800/600?random=32",
      "https://picsum.photos/800/600?random=132",
      "https://picsum.photos/800/600?random=232",
      "https://picsum.photos/800/600?random=332"
    ],
    awards: ["Humanitarian Project Award 2025", "Sustainable Development Prize"],
    testimonial: {
      text: "Clean water has changed everything. My daughters now attend school instead of walking for water.",
      author: "Grace Wanjiku",
      role: "Community Member & Mother"
    }
  },
  {
    id: 4,
    title: "Green Transport",
    category: "Infrastructure",
    img: "https://picsum.photos/1200/800?random=33",
    thumbnail: "https://picsum.photos/600/400?random=33",
    desc: "Eco-friendly transportation solutions",
    location: "Copenhagen, Denmark",
    date: "July 2025",
    client: "Copenhagen Municipality",
    duration: "18 months",
    budget: "$15M",
    team: "45 professionals",
    overview: "The Green Transport project created 25km of protected bike lanes and electric bus corridors, integrating seamlessly with existing transportation networks. This infrastructure upgrade supports Copenhagen's goal of becoming carbon-neutral by 2025.",
    challenge: "Retrofit dense urban streets to prioritize sustainable transport while maintaining vehicle access, minimizing construction disruption, and ensuring safety for all users including pedestrians, cyclists, and motorists.",
    solution: "Phased construction approach rebuilt streets with protected bike lanes, bus-only lanes, and pedestrian zones. Smart traffic signals prioritize buses and bikes. Electric bus charging infrastructure was integrated throughout. Green stormwater management features were incorporated into street design.",
    results: [
      "30% increase in cycling trips",
      "40% faster bus transit times",
      "25% reduction in car traffic",
      "Zero cyclist fatalities since opening",
      "15,000 tons CO2 reduced annually",
      "Improved local air quality by 35%"
    ],
    features: [
      "25km protected bike lanes",
      "Smart traffic signal system",
      "15 electric bus charging stations",
      "Bike parking facilities (2,000 spaces)",
      "Green stormwater infrastructure",
      "Real-time transport information",
      "Accessible pedestrian crossings",
      "Public art installations"
    ],
    images: [
      "https://picsum.photos/800/600?random=33",
      "https://picsum.photos/800/600?random=133",
      "https://picsum.photos/800/600?random=233",
      "https://picsum.photos/800/600?random=333"
    ],
    awards: ["Sustainable Infrastructure Award 2025", "Urban Design Excellence"],
    testimonial: {
      text: "These improvements have made cycling the fastest and most pleasant way to travel across the city.",
      author: "Lars Nielsen",
      role: "Copenhagen City Planner"
    }
  },
  {
    id: 5,
    title: "Smart City Grid",
    category: "Technology",
    img: "https://picsum.photos/1200/800?random=34",
    thumbnail: "https://picsum.photos/600/400?random=34",
    desc: "Intelligent energy distribution systems",
    location: "Singapore",
    date: "November 2025",
    client: "Singapore Energy Authority",
    duration: "24 months",
    budget: "$45M",
    team: "65 professionals",
    overview: "The Smart City Grid project modernized Singapore's energy infrastructure with AI-powered management, renewable integration, and demand response capabilities. This system serves as a model for next-generation urban energy networks.",
    challenge: "Upgrade aging grid infrastructure to accommodate distributed renewable energy, enable two-way power flow, optimize energy distribution in real-time, and improve resilience against disruptions—all while maintaining 99.9% reliability.",
    solution: "Deployed 50,000 smart meters, installed grid-edge controllers, and implemented AI-powered energy management platform. System enables real-time monitoring, predictive maintenance, automated demand response, and seamless renewable energy integration. Battery storage provides grid stability.",
    results: [
      "25% improvement in grid efficiency",
      "40% renewable energy integration",
      "50% reduction in outage duration",
      "Peak demand reduced by 18%",
      "$30M annual operational savings",
      "60% lower maintenance costs"
    ],
    features: [
      "50,000 smart meters deployed",
      "AI energy management platform",
      "100MW battery storage capacity",
      "Automated demand response",
      "Predictive maintenance system",
      "Real-time grid monitoring",
      "Cybersecurity framework",
      "Consumer energy dashboard"
    ],
    images: [
      "https://picsum.photos/800/600?random=34",
      "https://picsum.photos/800/600?random=134",
      "https://picsum.photos/800/600?random=234",
      "https://picsum.photos/800/600?random=334"
    ],
    awards: ["Smart Grid Innovation Award 2025", "Technology Excellence Prize"],
    testimonial: {
      text: "This smart grid positions Singapore as a global leader in sustainable energy management.",
      author: "Dr. Wei Zhang",
      role: "Director, Singapore Energy Authority"
    }
  },
  {
    id: 6,
    title: "Sustainable Housing",
    category: "Residential",
    img: "https://picsum.photos/1200/800?random=35",
    thumbnail: "https://picsum.photos/600/400?random=35",
    desc: "Affordable green living spaces",
    location: "Vancouver, Canada",
    date: "August 2025",
    client: "Vancouver Housing Authority",
    duration: "20 months",
    budget: "$22M",
    team: "38 professionals",
    overview: "The Sustainable Housing project delivered 150 affordable housing units designed to Passive House standards. These homes provide healthy, comfortable living while minimizing environmental impact and energy costs for residents.",
    challenge: "Provide high-quality affordable housing that meets Passive House standards without exceeding budget constraints. Address concerns about construction costs, long-term durability, and occupant comfort in a climate with wet winters.",
    solution: "Used prefabricated construction to control costs and quality. Super-insulated building envelope, triple-glazed windows, and heat recovery ventilation create comfortable, energy-efficient homes. Solar panels and heat pumps eliminate fossil fuel use. Community spaces and gardens foster resident connections.",
    results: [
      "90% reduction in heating energy",
      "100% powered by renewables",
      "50% lower utility costs for residents",
      "Superior indoor air quality",
      "Zero fossil fuel consumption",
      "High resident satisfaction (95%)"
    ],
    features: [
      "150 Passive House certified units",
      "Rooftop solar arrays",
      "Heat pump heating/cooling",
      "Heat recovery ventilation",
      "Community garden spaces",
      "EV charging infrastructure",
      "Bike storage facilities",
      "Rainwater harvesting"
    ],
    images: [
      "https://picsum.photos/800/600?random=35",
      "https://picsum.photos/800/600?random=135",
      "https://picsum.photos/800/600?random=235",
      "https://picsum.photos/800/600?random=335"
    ],
    awards: ["Affordable Housing Innovation 2025", "Green Building Award"],
    testimonial: {
      text: "My energy bills are a fraction of what I paid before, and the apartment is always comfortable.",
      author: "Jennifer Martinez",
      role: "Resident"
    }
  },
  {
    id: 7,
    title: "Renewable Energy Farm",
    category: "Technology",
    img: "https://picsum.photos/1200/800?random=36",
    thumbnail: "https://picsum.photos/600/400?random=36",
    desc: "Large-scale solar and wind integration",
    location: "West Texas",
    date: "October 2025",
    client: "Renewable Power Corporation",
    duration: "16 months",
    budget: "$180M",
    team: "120 professionals",
    overview: "The Renewable Energy Farm combines 200MW of solar and 150MW of wind generation with 100MW battery storage. This hybrid facility demonstrates the viability of large-scale renewable energy with grid stability.",
    challenge: "Design an integrated renewable energy facility that can provide reliable baseload power despite intermittency of solar and wind resources. Minimize land use impacts and environmental disruption while maximizing energy production.",
    solution: "Strategically positioned solar arrays and wind turbines to optimize land use. Advanced weather forecasting and AI-powered dispatch system coordinates generation and storage. Co-locating solar and wind leverages complementary generation patterns. Native vegetation maintains habitat value.",
    results: [
      "350MW clean energy capacity",
      "Powers 75,000 homes annually",
      "Displaces 400,000 tons CO2/year",
      "95% capacity factor with storage",
      "300 construction jobs created",
      "45 permanent operations jobs"
    ],
    features: [
      "200MW solar photovoltaic",
      "150MW wind turbines (50 units)",
      "100MW/400MWh battery storage",
      "AI-powered energy management",
      "Weather prediction integration",
      "Wildlife corridor preservation",
      "Native grassland restoration",
      "Educational visitor center"
    ],
    images: [
      "https://picsum.photos/800/600?random=36",
      "https://picsum.photos/800/600?random=136",
      "https://picsum.photos/800/600?random=236",
      "https://picsum.photos/800/600?random=336"
    ],
    awards: ["Renewable Energy Project of the Year 2025", "Grid Innovation Award"],
    testimonial: {
      text: "This facility proves renewables can provide reliable, affordable power at utility scale.",
      author: "Robert Thompson",
      role: "CEO, Renewable Power Corporation"
    }
  },
  {
    id: 8,
    title: "Coastal Restoration",
    category: "Landscape",
    img: "https://picsum.photos/1200/800?random=37",
    thumbnail: "https://picsum.photos/600/400?random=37",
    desc: "Protecting and rebuilding coastal ecosystems",
    location: "Louisiana Coast",
    date: "May 2025",
    client: "Coastal Protection Authority",
    duration: "22 months",
    budget: "$12M",
    team: "28 professionals",
    overview: "The Coastal Restoration project rebuilt 800 acres of degraded wetlands using natural and nature-based features. This living shoreline protects communities from storm surge while restoring critical habitat for fish, birds, and wildlife.",
    challenge: "Restore rapidly eroding coastal wetlands that protect inland communities from hurricanes and storm surge. Address subsidence, sea level rise, and historical loss of sediment supply while working in challenging marine environment.",
    solution: "Constructed living shorelines using oyster reefs, marsh grass plantings, and strategic sediment placement. Created channels to improve tidal exchange and marsh health. Oyster reefs break wave energy while providing habitat. Marsh grasses stabilize sediments and build elevation.",
    results: [
      "800 acres of wetlands restored",
      "60% reduction in wave energy",
      "500% increase in fish abundance",
      "Nesting habitat for 35 bird species",
      "Protects 2,500 homes from flooding",
      "Sequesters 1,200 tons CO2 annually"
    ],
    features: [
      "Living shoreline construction",
      "5 miles of oyster reef",
      "Marsh grass planting (2M plants)",
      "Tidal channel restoration",
      "Sediment management",
      "Long-term monitoring program",
      "Community education center",
      "Recreational fishing access"
    ],
    images: [
      "https://picsum.photos/800/600?random=37",
      "https://picsum.photos/800/600?random=137",
      "https://picsum.photos/800/600?random=237",
      "https://picsum.photos/800/600?random=337"
    ],
    awards: ["Coastal Resilience Award 2025", "Ecosystem Restoration Prize"],
    testimonial: {
      text: "These restored wetlands are our first line of defense against hurricanes. They're invaluable.",
      author: "Captain Mike Bernard",
      role: "Local Fisherman & Community Leader"
    }
  },
  {
    id: 9,
    title: "Innovation Center",
    category: "Architecture",
    img: "https://picsum.photos/1200/800?random=38",
    thumbnail: "https://picsum.photos/600/400?random=38",
    desc: "Hub for sustainable innovation",
    location: "Boston, Massachusetts",
    date: "December 2025",
    client: "Innovation District Partnership",
    duration: "26 months",
    budget: "$35M",
    team: "55 professionals",
    overview: "The Innovation Center is a 75,000 sq ft mixed-use facility fostering collaboration among startups, corporations, and researchers focused on sustainability solutions. The building itself showcases sustainable design innovations.",
    challenge: "Create a flexible, inspiring space that encourages collaboration and innovation while achieving aggressive sustainability targets including net-zero energy, zero waste, and exemplary occupant health metrics in a constrained urban site.",
    solution: "Designed adaptable floor plates with abundant natural light, variety of collaborative spaces, and cutting-edge sustainable systems. Mass timber structure sequesters carbon. Façade integrated photovoltaics generate power. Greywater recycling and composting achieve zero waste. Biophilic design enhances wellbeing.",
    results: [
      "Net-zero energy and carbon",
      "Zero waste operations achieved",
      "WELL Building Platinum certified",
      "Houses 75 sustainability startups",
      "$50M in startup funding raised",
      "350 green jobs created"
    ],
    features: [
      "Mass timber construction",
      "Building-integrated photovoltaics",
      "Greywater recycling system",
      "Composting & recycling program",
      "Flexible collaboration spaces",
      "Green roof & terrace",
      "Air purification system",
      "Electric shuttle service"
    ],
    images: [
      "https://picsum.photos/800/600?random=38",
      "https://picsum.photos/800/600?random=138",
      "https://picsum.photos/800/600?random=238",
      "https://picsum.photos/800/600?random=338"
    ],
    awards: ["Innovation in Green Building 2025", "LEED Platinum Certification"],
    testimonial: {
      text: "The Innovation Center has become the epicenter of Boston's cleantech ecosystem.",
      author: "Dr. Sarah Kim",
      role: "Director, Innovation District Partnership"
    }
  }
];

const ViewGallery: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<typeof galleryProjects[0] | null>(null);
  const [relatedProjects, setRelatedProjects] = useState<typeof galleryProjects>([]);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const foundProject = galleryProjects.find(proj => proj.id === Number(id));
    if (foundProject) {
      setProject(foundProject);
      
      // Get 3 related projects from same category
      const related = galleryProjects
        .filter(proj => proj.id !== foundProject.id && proj.category === foundProject.category)
        .slice(0, 3);
      
      // If not enough, fill with other projects
      if (related.length < 3) {
        const additional = galleryProjects
          .filter(proj => proj.id !== foundProject.id && proj.category !== foundProject.category)
          .slice(0, 3 - related.length);
        setRelatedProjects([...related, ...additional]);
      } else {
        setRelatedProjects(related);
      }
    } else {
      navigate('/gallery');
    }
  }, [id, navigate]);

  if (!project) {
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
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 h-full flex items-end relative z-10 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Link 
              to="/gallery"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Gallery
            </Link>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm font-semibold">
                {project.category}
              </span>
              {project.awards.map((award, idx) => (
                <span key={idx} className="flex items-center gap-1 text-yellow-400 text-sm">
                  <Award size={16} />
                  <span className="hidden sm:inline">{award}</span>
                </span>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {project.title}
            </h1>
            
            <p className="text-xl text-white/90 mb-6">{project.desc}</p>
            
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span className="text-sm">{project.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span className="text-sm">{project.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={18} />
                <span className="text-sm">{project.team}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <Section bgColor="white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Project Info Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid sm:grid-cols-2 gap-6"
              >
                <div className="p-6 bg-gradient-to-br from-primary-50 to-white rounded-2xl border border-primary-100">
                  <h3 className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">Client</h3>
                  <p className="text-lg font-bold text-slate-900">{project.client}</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-secondary-50 to-white rounded-2xl border border-secondary-100">
                  <h3 className="text-sm font-semibold text-secondary-600 uppercase tracking-wider mb-2">Duration</h3>
                  <p className="text-lg font-bold text-slate-900">{project.duration}</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100">
                  <h3 className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-2">Budget</h3>
                  <p className="text-lg font-bold text-slate-900">{project.budget}</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-emerald-100">
                  <h3 className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-2">Team Size</h3>
                  <p className="text-lg font-bold text-slate-900">{project.team}</p>
                </div>
              </motion.div>

              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Project Overview</h2>
                <p className="text-lg text-slate-700 leading-relaxed">{project.overview}</p>
              </motion.div>

              {/* Challenge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-8 bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-100"
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-4">The Challenge</h2>
                <p className="text-slate-700 leading-relaxed">{project.challenge}</p>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100"
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Solution</h2>
                <p className="text-slate-700 leading-relaxed">{project.solution}</p>
              </motion.div>

              {/* Image Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Project Gallery</h2>
                
                {/* Main Image */}
                <div className="mb-4 rounded-2xl overflow-hidden">
                  <img 
                    src={project.images[selectedImage]} 
                    alt={`${project.title} - Image ${selectedImage + 1}`}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                
                {/* Thumbnails */}
                <div className="grid grid-cols-4 gap-4">
                  {project.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`rounded-xl overflow-hidden border-4 transition-all ${
                        selectedImage === idx 
                          ? 'border-primary-500 shadow-lg' 
                          : 'border-transparent hover:border-slate-200'
                      }`}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-24 object-cover" />
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="p-8 bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-emerald-100"
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Key Results</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.results.map((result, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={24} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{result}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Testimonial */}
              {project.testimonial && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl text-white"
                >
                  <div className="text-4xl text-primary-400 mb-4">"</div>
                  <p className="text-xl italic mb-6 leading-relaxed">{project.testimonial.text}</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center font-bold">
                      {project.testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold">{project.testimonial.author}</p>
                      <p className="text-sm text-slate-300">{project.testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Features */}
              <div className="p-6 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100 sticky top-24">
                <h3 className="font-bold text-slate-900 mb-4 text-lg">Key Features</h3>
                <ul className="space-y-3">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 size={16} className="text-primary-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Awards */}
              <div className="p-6 bg-gradient-to-br from-yellow-50 to-white rounded-2xl border border-yellow-100">
                <h3 className="font-bold text-slate-900 mb-4 text-lg flex items-center gap-2">
                  <Award size={20} className="text-yellow-600" />
                  Awards
                </h3>
                <ul className="space-y-2">
                  {project.awards.map((award, idx) => (
                    <li key={idx} className="text-sm text-slate-700 font-medium">
                      • {award}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Share */}
              <div className="p-6 bg-gradient-to-br from-primary-50 to-white rounded-2xl border border-primary-100">
                <h3 className="font-bold text-slate-900 mb-4">Share Project</h3>
                <div className="flex flex-col gap-3">
                  <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white rounded-xl text-slate-700 font-semibold hover:shadow-lg transition-all border border-slate-200">
                    <Share2 size={18} />
                    Share
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white rounded-xl text-slate-700 font-semibold hover:shadow-lg transition-all border border-slate-200">
                    <Heart size={18} />
                    Save
                  </button>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </Section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <Section bgColor="light">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Related Projects</h2>
              <p className="text-slate-600">Explore similar work from our portfolio</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedProjects.map((proj, idx) => (
                <motion.div
                  key={proj.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onClick={() => navigate(`/gallery/${proj.id}`)}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={proj.thumbnail} 
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-primary-600 text-xs font-semibold">
                        {proj.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-primary-600 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4">{proj.desc}</p>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <MapPin size={14} />
                      <span>{proj.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* CTA */}
      <Section bgColor="gradient">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Let's collaborate to create impactful, sustainable solutions for your organization.
            </p>
            <Link
              to="/contact"
              state={{ interest: 'quote' }}
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-bold hover:shadow-xl transition-all"
            >
              Get Started <ExternalLink size={20} />
            </Link>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default ViewGallery;

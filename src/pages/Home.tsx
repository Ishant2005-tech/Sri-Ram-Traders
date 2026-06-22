import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Truck, 
  BadgeCheck, 
  IndianRupee, 
  Package, 
  MessageCircle, 
  CheckCircle2, 
  Flame, 
  Droplet, 
  ShieldCheck, 
  Star, 
  ArrowRight,
  Info,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Import our custom-generated high-fidelity product imagery
import imgBirlaUnique from '../assets/images/mp_birla_unique_1782118694389.jpg';
import imgBirlaSamrat from '../assets/images/mp_birla_samrat_1782118711789.jpg';
import imgBirlaPerfect from '../assets/images/mp_birla_perfect_1782118726206.jpg';
import imgSteelRebars from '../assets/images/kamdhenu_jsw_steel_1782118741453.jpg';
import imgGraniteGravels from '../assets/images/granite_gravels_1782118754192.jpg';
import imgJswRod from '../assets/images/jsw_steel_rod_1782164111927.jpg';
import imgShyamRod from '../assets/images/shyam_steel_rod_1782164124336.jpg';
import imgKamdhenuRod from '../assets/images/kamdhenu_steel_rod_1782164137289.jpg';

interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  image: string;
  specs: { label: string; value: string }[];
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "mp-birla-unique",
    title: "MP Birla Cement Unique",
    subtitle: "Premium Weather-Resistant Cement",
    description: "Premium fly-ash based pozzolana cement offering superior concrete density, low permeability, and advanced chemical shielding to prevent corrosion in structural slabs.",
    tag: "High-Reactive PPC",
    image: imgBirlaUnique,
    specs: [
      { label: "Grade", value: "Premium PPC" },
      { label: "Strength", value: "Continuous Cure" },
      { label: "Finishing", value: "Silky Plaster Coat" }
    ]
  },
  {
    id: "mp-birla-samrat",
    title: "MP Birla Cement Samrat",
    subtitle: "Complete Solid Strength PPC",
    description: "Finely milled with active silicate particles, Samrat PPC delivers rapid initial structural binding. Excellent for columns, heavy masonry, plaster, and home slabs.",
    tag: "Best-Seller PPC",
    image: imgBirlaSamrat,
    specs: [
      { label: "Grade", value: "Premium Pozzolana (IS 1489)" },
      { label: "Best For", value: "High-Load Foundations" },
      { label: "Setting", value: "Rapid Bonding Index" }
    ]
  },
  {
    id: "mp-birla-perfect",
    title: "MP Birla Perfect Cement",
    subtitle: "Pore-Filling Waterproof Shield",
    description: "Infused with specialized hydrophobic compounds. Active shielding particles block capillary action, completely protecting walls, basements, and slabs from dampness.",
    tag: "Water Shield Premium",
    image: imgBirlaPerfect,
    specs: [
      { label: "Technology", value: "Hydrophobic Pore-Blocker" },
      { label: "Damp Prevention", value: "99.8% Efflorescence Immune" },
      { label: "Rust Prevention", value: "Anti-Corrosion Moisture Seal" }
    ]
  },
  {
    id: "rebar-steel",
    title: "JSW & Kamdhenu Steel Rods",
    subtitle: "High-Ductility Seismic Rebars",
    description: "Thermo-mechanically treated reinforcement bars with structural rib profiling. Offers ultimate yield ratio, bendability, and earthquake resistant safety for massive frame concrete layouts.",
    tag: "Super Fe 550D / Fe 600",
    image: imgSteelRebars,
    specs: [
      { label: "Grade", value: "Fe 550D High Weldability" },
      { label: "Seismic Strength", value: "Seismic Zone IV & V Certified" },
      { label: "Forming Profile", value: "Extreme Grip Ribbing" }
    ]
  },
  {
    id: "gravels",
    title: "Premium Construction Gravels",
    subtitle: "Crushed Black Granite Aggregates",
    description: "Multi-graded hard basalt granite aggregates. Washed clean from fine silt and dust to guarantee strong mechanical adhesion with cement pastes for slab castings.",
    tag: "Aggregates",
    image: imgGraniteGravels,
    specs: [
      { label: "Sizes Available", value: "10mm, 20mm, 40mm" },
      { label: "Density", value: "Ultra-High Compressive Strength" },
      { label: "Impurity Ratio", value: "< 0.5% Clay & Silt Content" }
    ]
  }
];

interface Product {
  id: string;
  name: string;
  brand: string;
  type: 'Cement' | 'Steel';
  badge: string;
  description: string;
  features: string[];
  applications: string[];
  specs: {
    grade: string;
    setting: string;
    highlights: string;
  };
  image: string;
}

const PRODUCTS: Product[] = [
  {
    id: 'mp-birla-unique',
    name: 'MP Birla Unique',
    brand: 'MP Birla Cement',
    type: 'Cement',
    badge: 'Premium High-Reactive PPC',
    description: 'Premium fly-ash based pozzolana cement offering superior concrete density, low permeability, and advanced chemical shielding to prevent corrosion in structural slabs.',
    features: ['High weather resistance', 'Exceptional smooth finish', 'Optimized chemical shield'],
    applications: ['Slab Casting', 'Wall Plastering', 'Brickwork Joining'],
    specs: {
      grade: 'Premium Portland Pozzolana (IS 1489)',
      setting: 'Initial: 120 mins | Final: 280 mins',
      highlights: 'Active weather protective coat, high long-term strength'
    },
    image: imgBirlaUnique
  },
  {
    id: 'mp-birla-samrat',
    name: 'MP Birla Samrat',
    brand: 'MP Birla Cement',
    type: 'Cement',
    badge: 'Complete Solid Strength PPC',
    description: 'Finely milled with active silicate particles, Samrat PPC delivers rapid initial structural binding. Excellent for columns, heavy masonry, plaster, and home slabs.',
    features: ['Rapid initial setting', 'High compressive strength', 'Excellent workability'],
    applications: ['High-Load Foundations', 'Pillars & Columns', 'Heavy Masonry'],
    specs: {
      grade: 'Standard Pozzolana Cement (IS 1489)',
      setting: 'Initial: 95 mins | Final: 245 mins',
      highlights: 'Engineered for dense concrete structures and heavy foundational columns'
    },
    image: imgBirlaSamrat
  },
  {
    id: 'mp-birla-perfect',
    name: 'MP Birla Perfect',
    brand: 'MP Birla Cement',
    type: 'Cement',
    badge: 'Water Shield Premium Waterproof',
    description: 'Infused with specialized hydrophobic compounds. Active shielding particles block capillary action, completely protecting walls, basements, and slabs from dampness.',
    features: ['Hydrophobic pore blocker', '99.8% Efflorescence Immune', 'Rusty moisture seal protection'],
    applications: ['Basement Concreting', 'Roof Slabs', 'Water Retaining Walls'],
    specs: {
      grade: 'Hydrophobic Premium PPC Special',
      setting: 'Initial: 135 mins | Final: 295 mins',
      highlights: 'Complete dampness protection with rust-resistant moisture barrier'
    },
    image: imgBirlaPerfect
  },
  {
    id: 'jsw-rod',
    name: 'JSW Rod',
    brand: 'JSW Neosteel',
    type: 'Steel',
    badge: 'Fe 550D / Fe 600 Grade',
    description: 'Premium thermo-mechanically treated (TMT) steel reinforcement bars from JSW Neosteel with outstanding strength, high elasticity, and high seismic zone safety rating.',
    features: ['Seismic Zone V approved', 'High weldability & corrosion resistance', 'Uniform thick rib pattern'],
    applications: ['High-Rise Columns', 'Heavy Bridges', 'Complex Foundation Meshes'],
    specs: {
      grade: 'Fe 550D High Ductility TMT',
      setting: 'Yield Strength: 550+ MPa',
      highlights: 'Precision-rolled for extreme load bearing capability and earthquake resistance'
    },
    image: imgJswRod
  },
  {
    id: 'shyam-steel-rod',
    name: 'Shyam Steel Rod',
    brand: 'Shyam Steel',
    type: 'Steel',
    badge: 'Premium Flexi-TMT Bars',
    description: 'Highly uniform Fe 550D TMT reinforcement steel bars from Shyam Steel, engineered for excellent ductility, high bendability, and anti-corrosive properties to protect structural integrity.',
    features: ['Excellent bendability', 'Enhanced chemical rust resistance', 'Ultimate concrete bounding grip'],
    applications: ['Slab Rebars', 'Residential Building Beams', 'Industrial Footing Meshes'],
    specs: {
      grade: 'Premium Fe 550D Structural Grade',
      setting: 'Yield Strength: 550D Series',
      highlights: 'Preferred choice of top steel engineers for flexible framing bend-ratios'
    },
    image: imgShyamRod
  },
  {
    id: 'kamdhenu-rod',
    name: 'Kamdhenu Rod',
    brand: 'Kamdhenu TMT',
    type: 'Steel',
    badge: 'Double-Ribbed TMT Steel',
    description: 'Kamdhenu TMT Steel rods engineered with high-yield strength and unique double-helix rib pattern. Provides ultimate bonding traction with cement mixtures.',
    features: ['Double-helix rib design', 'Unmatched concrete grip', 'High fatigue resistance'],
    applications: ['Residential Lintels', 'Staircases Concreting', 'Foundation Gridwork'],
    specs: {
      grade: 'Fe 500 / 550D High Bonding TMT',
      setting: 'Yield Strength: High Ductility Ribs',
      highlights: 'Superior traction grid layout prevents air gaps in reinforced concrete columns'
    },
    image: imgKamdhenuRod
  }
];

export function Home() {
  const [requirement, setRequirement] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [selectedType, setSelectedType] = useState<string>("All");
  
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/products') {
      const el = document.getElementById('products-section');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 120);
      }
    } else if (location.hash) {
      const id = location.hash.substring(1);
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 120);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const handleInquiry = (productName: string, brand: string) => {
    setRequirement(`Hello Sri Ram Traders, I am interested in requesting a quote for:
Product: ${productName}
Brand: ${brand}
Approximate Quantity (Bags): 150 Bags
Delivery Location: `);
    
    const el = document.getElementById('quote');
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      return;
    }
    setSubmitted(true);
  };

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const menuFilters = [
    { name: 'All Products', value: 'All' },
    { name: 'MP Birla Cements', value: 'Cement' },
    { name: 'Steel TMT Rods', value: 'Steel' }
  ];

  const filteredProducts = PRODUCTS.filter(
    (prod) => selectedType === 'All' || prod.type === selectedType
  );

  const currentHeroSlide = HERO_SLIDES[activeSlideIndex];

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-6 md:px-12 flex items-center min-h-[95vh] overflow-hidden bg-white/50 border-b border-gray-150">
        {/* Sliding Background Image with Smooth Fades */}
        <div className="absolute inset-0 z-0">
          {HERO_SLIDES.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                idx === activeSlideIndex ? "opacity-15" : "opacity-0"
              }`}
              style={{ backgroundImage: `url("${slide.image}")` }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/98 to-white/60"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Hand Text Info */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-block w-fit px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-450/10 text-amber-700 font-extrabold text-xs tracking-wider uppercase mb-6 shadow-sm">
                Premium Building Materials Dealership
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#111] leading-[1.12] mb-6 tracking-tight">
                Trusted Cement Supplier for Homes, Commercial Buildings <br className="hidden md:block"/> & Infrastructure Projects
              </h1>
              
              <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-xl leading-relaxed">
                We supply authorized high-grade cement alongside premium steel and bulk construction materials with secure scheduled logistics.
              </p>
              
              <div className="flex flex-wrap items-center gap-3.5 mb-10">
                <a href="tel:+918539914204" className="px-7 py-3.5 bg-yellow-400 text-black font-extrabold rounded-lg hover:bg-yellow-500 transition-all text-base shadow-lg shadow-yellow-400/10 cursor-pointer">
                  Call Now
                </a>
                <a href="#quote" className="px-7 py-3.5 bg-neutral-150 border border-gray-250 text-[#111] font-extrabold rounded-lg hover:bg-neutral-200 transition-colors text-base cursor-pointer">
                  Get Quote
                </a>
                <a href="https://wa.me/918539914204" target="_blank" rel="noopener noreferrer" className="px-5 py-3.5 bg-emerald-600 border border-emerald-500 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2 text-base cursor-pointer">
                  <MessageCircle size={18} fill="currentColor" />
                  WhatsApp Us
                </a>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="bg-[#fcfcfc]/90 backdrop-blur-sm border border-gray-200/80 rounded-2xl p-4 w-40 shadow-sm">
                  <div className="text-amber-600 text-2xl font-black mb-0.5">Bulk</div>
                  <div className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">Supply Capacity</div>
                </div>
                <div className="bg-[#fcfcfc]/90 backdrop-blur-sm border border-gray-200/80 rounded-2xl p-4 w-40 shadow-sm">
                  <div className="text-amber-600 text-2xl font-black mb-0.5">100%</div>
                  <div className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">Genuine Quality</div>
                </div>
              </div>
            </div>

            {/* Right Hand Sliding Carousel Preview Card */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-white border border-gray-200/80 rounded-[32px] overflow-hidden shadow-xl relative">
                {/* Image Showcase */}
                <div className="relative h-60 md:h-64 overflow-hidden bg-gray-50">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentHeroSlide.id}
                      src={currentHeroSlide.image}
                      alt={currentHeroSlide.title}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
                  
                  {/* Category Type Tag */}
                  <div className="absolute top-4 left-4 bg-amber-50 border border-amber-200 text-amber-850 font-extrabold text-[10px] tracking-wider uppercase px-3.5 py-1.5 rounded-full shadow-sm z-10">
                    {currentHeroSlide.tag}
                  </div>

                  {/* Manual Carousel Navigation Chevrons */}
                  <div className="absolute inset-y-0 inset-x-3 flex items-center justify-between pointer-events-none z-10">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setActiveSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
                      }}
                      className="w-9 h-9 bg-white/90 hover:bg-white text-[#111] rounded-full flex items-center justify-center transition-colors pointer-events-auto border border-gray-200/80 cursor-pointer shadow-md"
                      title="Previous Material"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setActiveSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
                      }}
                      className="w-9 h-9 bg-white/90 hover:bg-white text-[#111] rounded-full flex items-center justify-center transition-colors pointer-events-auto border border-gray-200/80 cursor-pointer shadow-md"
                      title="Next Material"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Text Context & Details */}
                <div className="p-7">
                  <div className="min-h-[135px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentHeroSlide.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-amber-600 text-xs font-bold tracking-widest uppercase block mb-1">
                          {currentHeroSlide.subtitle}
                        </span>
                        <h4 className="text-xl md:text-2xl font-black text-[#111] tracking-tight mb-2.5">
                          {currentHeroSlide.title}
                        </h4>
                        <p className="text-[#555] text-xs md:text-sm leading-relaxed">
                          {currentHeroSlide.description}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Tech Specs Summary Table */}
                  <div className="bg-gray-50 rounded-2xl p-4 border border-gray-150 space-y-2 mb-5">
                    {currentHeroSlide.specs.map((item, i) => (
                      <div key={i} className="flex justify-between items-center text-xs">
                        <span className="text-gray-500 font-bold">{item.label}</span>
                        <span className="text-[#111] font-extrabold">{item.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action row in slide card */}
                  <div className="flex items-center justify-between pt-3.5 border-t border-gray-150">
                    <span className="text-xs text-amber-600 font-bold flex items-center gap-1">
                      <CheckCircle2 size={12} className="text-emerald-500" /> Active Stock
                    </span>
                    <button
                      onClick={() => handleInquiry(currentHeroSlide.title, "Specialty Sliding Spotlight")}
                      className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black text-xs font-extrabold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-md"
                    >
                      Instant Quote Inquiry
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>

                {/* Progress Indicators (Dots) */}
                <div className="pb-5 pt-1 flex justify-center gap-1.5 z-10 relative">
                  {HERO_SLIDES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveSlideIndex(i)}
                      className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                        activeSlideIndex === i 
                          ? "w-5 bg-amber-500" 
                          : "w-1 bg-gray-300 hover:bg-gray-400"
                      }`}
                      title={`Go to slide ${i+1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">About Sri Ram Traders</h3>
            <h2 className="text-4xl md:text-5xl font-black text-[#111] leading-[1.15] mb-6 tracking-tight">
              A dependable cement partner for every stage of construction.
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed max-w-lg font-medium">
              Sri Ram Traders supplies trusted cement brands to homeowners, contractors, builders, and commercial projects with clear pricing, fresh stock, and coordinated delivery.
            </p>
          </div>
          
          <div className="bg-amber-50 border border-amber-200 text-[#111] rounded-3xl p-10 md:p-14 shadow-xl">
            <h3 className="text-3xl md:text-4xl font-black mb-6 leading-tight text-amber-900">
              Building Trust, Delivering Strength
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              From single-home requirements to bulk project supply, our priority is the same: genuine material, quick response, and dependable delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 md:px-12 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h3 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">Why Choose Us</h3>
            <h2 className="text-4xl md:text-5xl font-black text-[#111] leading-[1.15] tracking-tight">
              Strong supply support for fast-moving construction sites.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow">
              <Truck size={32} className="text-[#111] mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-bold text-[#111] mb-3">Fast Delivery</h3>
              <p className="text-gray-500 leading-relaxed text-base font-medium">
                Site-ready delivery coordination for planned pours and daily requirements.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow">
              <BadgeCheck size={32} className="text-[#111] mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-bold text-[#111] mb-3">Genuine Products</h3>
              <p className="text-gray-500 leading-relaxed text-base font-medium">
                Verified fresh stock from trusted cement brands and dealers.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow">
              <IndianRupee size={32} className="text-[#111] mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-bold text-[#111] mb-3">Competitive Pricing</h3>
              <p className="text-gray-500 leading-relaxed text-base font-medium">
                Clear quotes for retail, contractor, and bulk project requirements.
              </p>
            </div>

            <div className="bg-yellow-400/10 border border-yellow-500/25 rounded-2xl p-8 shadow-sm flex flex-col items-start hover:-translate-y-1 transition-transform duration-300">
              <Package size={32} className="text-amber-700 mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-black text-amber-950 mb-3 tracking-tight">Bulk Supply Available</h3>
              <p className="text-amber-900 leading-relaxed text-base font-medium">
                Support for large orders, scheduled delivery, and multiple-site planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Merged Product Catalog Section */}
      <section id="products-section" className="py-24 px-6 md:px-12 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1 rounded-full border border-gray-200 bg-gray-50 text-gray-500 text-xs tracking-wider uppercase font-extrabold mb-4">
              Our Products Catalog
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#111] leading-tight tracking-tight mb-4">
              Premium Cements & Steel Rebars For Ultimate Durability
            </h2>
            <p className="text-gray-500 text-lg">
              Fresh warehouse stock from India's most respected manufacturer brands. Filter by product type below to choose authentic construction materials for your project.
            </p>
          </div>

          {/* Interactive Filters */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {menuFilters.map((btn) => (
              <button
                key={btn.value}
                onClick={() => setSelectedType(btn.value)}
                className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-200 text-sm cursor-pointer shadow-sm ${
                  selectedType === btn.value
                    ? 'bg-[#111] text-white ring-2 ring-brand-yellow'
                    : 'bg-[#fafafa] border border-gray-200 text-gray-600 hover:bg-gray-100 hover:text-black'
                }`}
              >
                {btn.name}
              </button>
            ))}
          </div>

          {/* Product Items Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProducts.map((p) => (
              <div 
                key={p.id}
                className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row group"
              >
                {/* Visual Cover */}
                <div className="w-full md:w-2/5 relative h-64 md:h-auto overflow-hidden bg-gray-900">
                  <img 
                    src={p.image} 
                    alt={p.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute top-4 left-4 bg-[#111] text-white text-xs font-bold tracking-wider px-3.5 py-1.5 rounded-full uppercase border border-white/10 shadow-md">
                    {p.brand}
                  </div>
                  {p.id === 'mp-birla-perfect' && (
                    <div className="absolute bottom-4 left-4 bg-blue-600 text-white text-xs font-black tracking-wide px-3 py-1 rounded flex items-center gap-1.5 shadow-md">
                      <Droplet size={14} fill="currentColor" />
                      HYDROPHOBIC
                    </div>
                  )}
                </div>

                {/* Content Side */}
                <div className="p-8 w-full md:w-3/5 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-2xl font-extrabold text-[#111] tracking-tight group-hover:text-amber-500 transition-colors">
                        {p.name}
                      </h3>
                    </div>

                    <div className="inline-block px-2.5 py-1 text-xs font-bold rounded bg-brand-yellow/15 text-[#854d0e] mb-4">
                      {p.badge}
                    </div>

                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                      {p.description}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-2 mb-6">
                      {p.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-gray-700 font-medium">
                          <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Specifications table */}
                    <div className="bg-gray-50/80 rounded-xl p-4 mb-6 border border-gray-100 text-xs space-y-2 font-medium">
                      <div className="flex justify-between border-b border-gray-100 pb-1.5 text-gray-500">
                        <span>Classification</span>
                        <span className="text-[#111] font-bold">{p.specs.grade}</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-100 pb-1.5 text-gray-500">
                        <span>Setting Time</span>
                        <span className="text-[#111] font-bold">{p.specs.setting}</span>
                      </div>
                      <div className="flex items-start gap-1 pb-0.5 text-gray-400 font-normal leading-normal">
                        <Info size={14} className="mt-0.5 text-blue-500 flex-shrink-0" />
                        <span className="text-[11px] text-gray-500 italic"><strong className="text-gray-700 not-italic">Note: </strong>{p.specs.highlights}</span>
                      </div>
                    </div>
                  </div>

                  {/* Pricing and inquiry triggers */}
                  <div className="pt-4 border-t border-gray-50 flex items-center justify-between mt-auto">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-gray-400 block font-bold">Price Inquiry</span>
                      <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                        <IndianRupee size={12} strokeWidth={2.5} /> Wholesale rates
                      </span>
                    </div>

                    <button 
                      onClick={() => handleInquiry(p.name, p.brand)}
                      className="px-5 py-2.5 bg-[#111] hover:bg-brand-yellow hover:text-black text-white text-xs font-bold rounded-lg transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-md shadow-black/5"
                    >
                      Inquire Now
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-gray-50 border border-gray-100 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-sm font-medium text-gray-600 flex items-center justify-center gap-2">
              <CheckCircle2 size={18} className="text-emerald-500" />
              Not sure which cement or steel reinforcement variant meets your structural specifications?
            </p>
            <p className="text-xs text-gray-400 mt-1.5">
              Contact our sales desk at <a href="tel:+918539914204" className="text-black font-semibold underline underline-offset-2">+91 8539914204</a> for architectural consultancy and load strength details.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section id="quote" className="py-24 px-6 md:px-12 bg-[#fafafa] border-y border-gray-150 text-[#111] scroll-mt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-450/10 text-amber-700 font-extrabold text-xs tracking-wider uppercase mb-5 font-mono">Request a Quote</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] tracking-tight text-[#111]">
              Need supply for a site this week?
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-md">
              Send your brand, quantity, and delivery location. Our team will get back with pricing and availability.
            </p>

            {/* Custom static highlight list */}
            <div className="mt-10 space-y-4 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 font-bold text-sm">1</div>
                <div>
                  <h4 className="font-extrabold text-sm text-[#111]">Tell Us Your Requirements</h4>
                  <p className="text-xs text-gray-500">Specify the brand, quantity and site location.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 font-bold text-sm">2</div>
                <div>
                  <h4 className="font-extrabold text-sm text-[#111]">Instant Wholesale Estimation</h4>
                  <p className="text-xs text-gray-500">Our logistics team checks stock density and pricing.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 font-bold text-sm">3</div>
                <div>
                  <h4 className="font-extrabold text-sm text-[#111]">Dispatched and Handled</h4>
                  <p className="text-xs text-gray-500">Coordinated deliveries at low turnaround times.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white text-[#111] rounded-[32px] p-8 md:p-10 shadow-2xl border border-gray-150 transition-all duration-300 relative overflow-hidden">
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center animate-fade-in">
                <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mb-6 border border-emerald-100">
                  <CheckCircle2 size={44} />
                </div>
                <h3 className="text-3xl font-black mb-2 tracking-tight">Inquiry Received!</h3>
                <p className="text-[#555] font-semibold text-lg mb-1">{name}</p>
                <p className="text-gray-500 text-sm max-w-sm leading-relaxed mb-6">
                  Thank you for contacting us. We have received your query for the cement stock. Our manager will reply/phone you at <strong className="text-black">{phone}</strong> within 30 minutes with our wholesale price card.
                </p>
                <div className="bg-gray-50 rounded-xl p-4 text-xs text-left w-full border border-gray-100">
                  <span className="text-gray-400 block uppercase font-bold text-[10px] mb-1">Your Selected Requirement</span>
                  <p className="text-gray-600 leading-relaxed font-mono whitespace-pre-wrap">{requirement || 'General bulk supply inquiry.'}</p>
                </div>
                <button 
                  onClick={() => {
                    setName("");
                    setPhone("");
                    setRequirement("");
                    setSubmitted(false);
                  }}
                  className="mt-8 px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-[#111] text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleFormSubmit}>
                <div>
                  <label className="block text-sm font-bold tracking-wide text-[#111] mb-2 uppercase">Name</label>
                  <input 
                    type="text" 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name" 
                    className="w-full bg-[#f9f9f9] border border-gray-200 rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition-all placeholder:text-gray-400 text-lg"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold tracking-wide text-[#111] mb-2 uppercase">Phone / WhatsApp</label>
                  <input 
                    type="text" 
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 Your Phone Number" 
                    className="w-full bg-[#f9f9f9] border border-gray-200 rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition-all placeholder:text-gray-400 text-lg"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold tracking-wide text-[#111] mb-2 uppercase">Requirement</label>
                  <textarea 
                    rows={4}
                    value={requirement}
                    onChange={(e) => setRequirement(e.target.value)}
                    placeholder="E.g., Brand name, quantity (bags/tonnages), delivery site pincode..." 
                    className="w-full bg-[#f9f9f9] border border-gray-200 rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition-all placeholder:text-gray-400 text-lg resize-none min-h-[100px]"
                  ></textarea>
                </div>
                
                <button type="submit" className="w-full bg-brand-yellow hover:bg-yellow-500 text-[#111] font-bold text-lg py-4 rounded-lg transition-colors mt-2 cursor-pointer shadow-lg shadow-yellow-500/10">
                  Send Quote Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-[#111] mb-10 tracking-tight">Service Areas</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Local city supply", 
              "Residential construction zones", 
              "Commercial project sites", 
              "Industrial areas", 
              "Nearby towns", 
              "Contractor site locations"
            ].map((area) => (
              <span key={area} className="px-6 py-3 rounded-full border border-gray-200 text-[#111] font-medium bg-[#fafafa] hover:bg-gray-100 transition-colors shadow-sm text-sm md:text-base">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

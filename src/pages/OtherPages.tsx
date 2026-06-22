import React, { useState } from 'react';
import { 
  Building2, 
  ChevronRight, 
  Truck, 
  ShieldCheck, 
  BadgePercent, 
  Contact2, 
  Coins, 
  CheckCircle, 
  ArrowRight, 
  PhoneCall, 
  MessageCircle, 
  Users2, 
  PackageCheck, 
  Check, 
  HardHat, 
  Calendar,
  Layers,
  ArrowUpRight,
  MapPin,
  Award,
  Target,
  Shield,
  Info,
  Mail,
  Clock,
  Sparkles,
  ThumbsUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Import our custom generated high-fidelity product imagery
import imgBirlaUnique from '../assets/images/mp_birla_unique_1782118694389.jpg';
import imgBirlaSamrat from '../assets/images/mp_birla_samrat_1782118711789.jpg';
import imgBirlaPerfect from '../assets/images/mp_birla_perfect_1782118726206.jpg';
import imgSteelRebars from '../assets/images/kamdhenu_jsw_steel_1782118741453.jpg';
import imgGraniteGravels from '../assets/images/granite_gravels_1782118754192.jpg';

// Import our custom-generated high-fidelity projects and supply imagery
import imgProjResidential from '../assets/images/project_residential_1782123659484.jpg';
import imgProjCommercial from '../assets/images/project_commercial_1782123678596.jpg';
import imgProjIndustrial from '../assets/images/project_industrial_1782123695984.jpg';
import imgProjRoads from '../assets/images/project_roads_1782123711168.jpg';
import imgProjGovernment from '../assets/images/project_government_1782123727350.jpg';
import imgProjInstitutional from '../assets/images/project_institutional_1782123741616.jpg';

// Import dealership about aerial visual
import imgAboutAerial from '../assets/images/dealership_about_aerial_1782157876223.jpg';

export function Projects() {
  const stats = [
    { value: "500+", label: "Happy Customers", desc: "Unwavering retail & commercial house builder satisfaction" },
    { value: "1000+ Tons", label: "Material Supplied", desc: "Foundations, continuous slabs & heavy structural rebars" },
    { value: "50+", label: "Contractors Served", desc: "Authorized dealers backing statewide builders & engineers" },
    { value: "5+ Years", label: "of Trust", desc: "Unyielding product authenticity and delivery speed" },
  ];

  const projectList = [
    {
      id: "residential",
      title: "Residential Construction",
      desc: "Supplying high-density pore-filling cement and premium high-ductility seismic rebars for modern multi-story apartments, luxury duplexes, and housing communities.",
      image: imgProjResidential,
      materials: ["Birla Cement (Unique PPC & Samrat)", "Kamdhenu Steel TMT Bars", "ACC Gold Shield Cement"],
      highlight: "Continuous Slab Resilience"
    },
    {
      id: "commercial",
      title: "Commercial Buildings",
      desc: "Delivering rapid initial structural binding and heavy load compatibility for metropolitan business malls, commercial avenues, and corporate glass towers.",
      image: imgProjCommercial,
      materials: ["ACC Cement Shield", "JSW Neosteel TMT Bars (Fe 550D)", "MP Birla Perfect Cement"],
      highlight: "High Compressibility Index"
    },
    {
      id: "industrial",
      title: "Industrial Infrastructure",
      desc: "Engineered specifically to resist constant vibrations, high load weight, and environmental exposure for heavy factories, warehouses, cold climates, and storage silos.",
      image: imgProjIndustrial,
      materials: ["MP Birla Cement Unique PPC", "JSW Steel Rebars (Fe 600)", "Premium Construction Gravels"],
      highlight: "Chemical Corrosion Shield"
    },
    {
      id: "roads",
      title: "Roads & Highways",
      desc: "Supplying bulk high-grade pozzolana cement and extreme-yield structural engineering steel for regional highway bridges, flyovers, and heavy logistically active roads.",
      image: imgProjRoads,
      materials: ["MP Birla PPC Bulk Loaders", "ACC Premium Concrete Cement", "Heavy JSW Neosteel Rods"],
      highlight: "Seismic Zone Approved"
    },
    {
      id: "government",
      title: "Government Projects",
      desc: "Complying strictly to rigorous public works department (PWD) material tolerances and certifications for state administration buildings, courts, and urban offices.",
      image: imgProjGovernment,
      materials: ["MP Birla Samrat PPC", "Kamdhenu Steel Fe 550D", "ACC Premium Shield Cement"],
      highlight: "Strict PWD Audit Compliant"
    },
    {
      id: "institutional",
      title: "Schools, Hospitals & Community Buildings",
      desc: "Prioritizing hydrophobic weatherproofing parameters and high safety coefficients to guarantee structural health in modern hospitals, study academies, and temples.",
      image: imgProjInstitutional,
      materials: ["MP Birla Perfect Cement (Waterproof)", "Kamdhenu Double-Rib Steel", "ACC Super Gold Cement"],
      highlight: "Anti-Dampness Protection"
    }
  ];

  return (
    <div className="bg-[#fafafa] text-[#111] min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 bg-white overflow-hidden border-b border-gray-150">
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#fafafa] to-transparent z-0 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left">
          <span className="inline-flex items-center gap-1.5 px-4.5 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-450/10 text-amber-700 font-extrabold text-xs tracking-wider uppercase mb-6 shadow-sm">
            <Building2 className="w-3.5 h-3.5" /> Project Portfolio Showcase
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-sans lg:leading-[1.12] font-black tracking-tight text-[#111] mb-6">
            Trusted Construction Material Partner for <span className="text-amber-600 font-black">Bihar Infrastructure</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mb-10 mx-auto lg:mx-0 font-medium">
            For decades, Sri Ram Traders has supplied certified cement and premium reinforcement steel bars for robust, long-lasting residential, commercial, and structural project layouts across Bihar.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4">
            <a href="#projects-list" className="px-6 py-3.5 bg-yellow-400 hover:bg-yellow-500 text-neutral-950 font-black text-sm rounded-lg transition-all shadow-lg shadow-yellow-400/10 cursor-pointer">
              Explore Supplied Sectors
            </a>
            <a href="/contractors#inquiry-form" className="px-6 py-3.5 bg-neutral-150 border border-gray-250 hover:bg-neutral-200 text-[#111] font-extrabold text-sm rounded-lg transition-all flex items-center gap-2 cursor-pointer shadow-sm">
              Apply for Contractor Pricing <ArrowRight className="w-4 h-4 text-amber-600" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. Project Statistics Section */}
      <section className="relative z-10 -mt-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-white border border-gray-200 rounded-3xl p-8 shadow-xl backdrop-blur-md">
            {stats.map((s, idx) => (
              <div key={idx} className="flex flex-col p-4 border-b sm:border-b-0 border-gray-100 last:border-0 sm:even:border-l-0 lg:border-l lg:first:border-l-0 border-dashed">
                <span className="text-3xl md:text-4xl font-black text-amber-650 tracking-tight block mb-1">
                  {s.value}
                </span>
                <span className="text-neutral-850 text-sm font-extrabold uppercase tracking-wide block mb-1 font-sans">
                  {s.label}
                </span>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Materials We Supply / 6 Premium Project Cards */}
      <section id="projects-list" className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-16">
        <div className="text-center lg:text-left mb-16 max-w-3xl">
          <span className="text-amber-600 text-xs font-black tracking-widest uppercase block mb-3 font-mono">SUPPLY ARCHITECTURE</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#111] mb-4">
            Commercial Supply Sectors
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Each physical layout we back is supplied with strict compliance to national material codes, ensuring seamless mechanical cohesion under pressure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((proj) => (
            <div 
              key={proj.id}
              className="bg-white rounded-[28px] border border-gray-200 overflow-hidden shadow-md hover:shadow-xl hover:border-amber-500/20 hover:scale-[1.01] transition-all duration-300 flex flex-col group justify-between"
            >
              <div>
                {/* Visual Header */}
                <div className="h-52 overflow-hidden relative bg-gray-50">
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" 
                  />
                  <div className="absolute top-4 right-4 bg-white/95 border border-gray-200 text-amber-650 font-extrabold text-[9px] tracking-widest uppercase px-3.5 py-1.5 rounded-full shadow-md">
                    {proj.highlight}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6.5">
                  <h3 className="text-xl md:text-2xl font-black text-[#111] tracking-tight mb-3 group-hover:text-amber-600 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6">
                    {proj.desc}
                  </p>
                </div>
              </div>

              {/* Footer materials list */}
              <div className="p-6.5 pt-0 mt-auto">
                <div className="border-t border-gray-100 mt-auto pt-5.5">
                  <span className="text-gray-400 font-bold uppercase tracking-wider text-[10px] block mb-2.5">
                    Materials Supplied:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.materials.map((mat, i) => (
                      <span 
                        key={i} 
                        className="bg-[#fafafa] border border-gray-200 text-[10px] text-neutral-800 font-semibold px-2.5 py-1.5 rounded-md flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. High-conversion Region Banner (Aesthetic & structural) */}
      <section className="bg-white border-y border-gray-200 py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.02),transparent_60%)] pointer-events-none z-0"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mx-auto mb-6 border border-amber-200 shadow-sm">
            <Truck className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#111] mb-6">
            Supplying Quality Construction Materials Across Bihar
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10 text-balance font-medium font-sans">
            Our established dealership guarantees timely batch shipments to sites anywhere in Bihar—whether your project demands single site drop-offs or scheduled multiple drops for high-performance concrete plans.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="tel:+918539914204" 
              className="w-full sm:w-auto px-9 py-3.5 bg-yellow-400 hover:bg-yellow-500 text-neutral-950 font-black rounded-lg transition-colors cursor-pointer text-sm shadow-lg shadow-yellow-400/10 flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" /> Call Supply Coordinator
            </a>
            <a 
              href="https://wa.me/918539914204" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto px-9 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-lg transition-colors cursor-pointer text-sm flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" fill="currentColor" /> Chat via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export function Contractors() {
  // Inquiry form states
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    mobileNumber: '',
    projectLocation: '',
    materialRequired: 'MP Birla Cement Unique',
    quantityRequired: '',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName.trim() || !formData.contactPerson.trim() || !formData.mobileNumber.trim()) {
      return;
    }
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      companyName: '',
      contactPerson: '',
      mobileNumber: '',
      projectLocation: '',
      materialRequired: 'MP Birla Cement Unique',
      quantityRequired: '',
      notes: ''
    });
    setIsSubmitted(false);
  };

  const benefits = [
    {
      icon: <BadgePercent className="w-6 h-6 text-yellow-500" />,
      title: "Bulk Order Discounts",
      desc: "Tiered commercial pricing matrix custom calibrated to your direct order quantities."
    },
    {
      icon: <Truck className="w-6 h-6 text-yellow-500" />,
      title: "Priority Delivery",
      desc: "Guaranteed express dispatch from our core distribution channels straight to your active site."
    },
    {
      icon: <Coins className="w-6 h-6 text-yellow-500" />,
      title: "Competitive Pricing",
      desc: "Direct dealer wholesale tariffs bypassing intermediary brokers for optimal project budget margins."
    },
    {
      icon: <Contact2 className="w-6 h-6 text-yellow-500" />,
      title: "Dedicated Support",
      desc: "Assigned account executives coordinating dispatch, testing logs, and structured billing logs."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-yellow-500" />,
      title: "Genuine Products",
      desc: "100% genuine factory sealed inventory sourced directly from authorized brand plants."
    },
    {
      icon: <Layers className="w-6 h-6 text-yellow-500" />,
      title: "Flexible Order Quantities",
      desc: "Empowering micro planners and mega build contractors with dynamically scalable logistics volume."
    }
  ];

  const materials = [
    {
      img: imgBirlaUnique,
      brand: "MP Birla Cement",
      name: "MP Birla Premium Unique",
      type: "High-Reactive PPC",
      desc: "Weather-resistant silica enriched concrete matrix optimized for continuous slab strength.",
      metric: "Ideal for high-vibration casting & columns"
    },
    {
      img: imgBirlaSamrat,
      brand: "MP Birla Cement",
      name: "MP Birla Samrat PPC",
      type: "High-Strength PPC",
      desc: "Super-fine active particle blend delivering quick setting and robust mechanical integrity.",
      metric: "Best utility cement for masonry & brickwork"
    },
    {
      img: imgBirlaPerfect,
      brand: "MP Birla Cement",
      name: "MP Birla Perfect Cement",
      type: "Waterproofing PPC",
      desc: "Hydrophobic composite cement that dynamically blocks moisture ingress inside concrete.",
      metric: "Engineered for basement & damp protection"
    },
    {
      img: imgSteelRebars,
      brand: "JSW Neosteel",
      name: "JSW Neosteel TMT Bars",
      type: "Seismic Steel Fe 550D / Fe 600",
      desc: "Thermo-mechanically treated rebars delivering unmatched bendability and grip index.",
      metric: "Premium choice for heavy frame pillars"
    },
    {
      img: imgSteelRebars,
      brand: "Kamdhenu Steel",
      name: "Kamdhenu TMT Steel",
      type: "High Yield Rebars",
      desc: "Cost efficient, rust resistance structural steel featuring advanced double-rib profiling.",
      metric: "Exceptional concrete bonding strength"
    }
  ];

  const valueAxioms = [
    { title: "Timely Delivery", desc: "No delays. We operate a fleet of self-owned heavy logistics trucks to match your batch production schedules." },
    { title: "Consistent Stock Availability", desc: "Never halt work. We maintain vast inventory buffers across various storage warehouses." },
    { title: "Direct Dealer Pricing", desc: "Highest savings. Sourced straight from companies, giving you clean marginal advantages." },
    { title: "Universal Project Support", desc: "Structured supplies calibrated for residential structures, high-rises, commercial blocks, and roadworks." }
  ];

  const metrics = [
    { icon: <Building2 className="w-8 h-8 text-yellow-500" />, count: "50+", label: "Contractors Served" },
    { icon: <PackageCheck className="w-8 h-8 text-yellow-500" />, count: "1000+ Tons", label: "Material Supplied" },
    { icon: <Users2 className="w-8 h-8 text-yellow-500" />, count: "500+", label: "Happy Customers" },
    { icon: <Truck className="w-8 h-8 text-yellow-500" />, count: "Statewide", label: "Service Across Bihar" }
  ];

  return (
    <div className="bg-[#fafafa] text-[#111] min-h-screen">
      {/* 1. Hero Section with Industrial Accents */}
      <section className="relative pt-32 pb-24 px-6 md:px-12 bg-white overflow-hidden border-b border-gray-150">
        <div className="absolute inset-0 z-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: `url("${imgBirlaSamrat}")` }}></div>
        <div className="absolute inset-0 bg-white/90 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-1.5 px-4.5 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-450/10 text-amber-700 font-extrabold text-xs tracking-wider uppercase mb-6 shadow-sm">
              <HardHat className="w-3.5 h-3.5" /> B2B Commercial Supply Division
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-sans lg:leading-[1.1] font-black tracking-tight text-[#111] mb-6">
              Trusted Construction Material Partner for <span className="text-amber-650 font-black">Contractors & Builders</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              Reliable wholesale supply of premium cement, structural steel, and high-strength construction materials scaled precisely for projects of every size.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#inquiry-form" className="px-7 py-3.5 bg-yellow-400 hover:bg-yellow-500 text-black font-black text-sm rounded-lg transition-all shadow-lg shadow-yellow-400/10 cursor-pointer">
                Submit Bulk Inquiry
              </a>
              <a href="tel:+918539914204" className="px-7 py-3.5 bg-neutral-100 border border-gray-250 hover:bg-neutral-200 text-[#111] font-extrabold text-sm rounded-lg transition-all flex items-center gap-2 cursor-pointer shadow-sm">
                <PhoneCall className="w-4 h-4 text-amber-600" /> Dial Sales Desk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Statistics Section (Integrated cleanly as an active bridge) */}
      <section className="bg-white border-b border-gray-200/80 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((m, i) => (
              <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left p-4">
                <div className="mb-3.5 bg-[#fafafa] p-3 rounded-2xl border border-gray-200 shadow-sm">
                  {m.icon}
                </div>
                <div className="text-3xl md:text-4xl font-black text-[#111] tracking-tight">
                  {m.count}
                </div>
                <div className="text-gray-500 text-xs md:text-sm font-semibold tracking-wide uppercase mt-1">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Benefits for Contractors */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center lg:text-left mb-16 max-w-3xl">
          <span className="text-amber-605 text-xs font-black tracking-widest uppercase block mb-3 font-mono">CONSTRUCTION ADVANTAGES</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#111] mb-4">
            Custom Calibrated Benefits for Licensed Builders
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            We streamline material logistics so your engineering talent can focus purely on raising high-performance concrete foundations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div 
              key={i} 
              className="bg-white hover:bg-gray-50 border border-gray-200 hover:border-amber-500/20 rounded-2xl p-7 transition-all duration-300 group shadow-sm"
            >
              <div className="mb-5 p-3.5 bg-[#fafafa] rounded-xl w-fit border border-gray-200 group-hover:border-amber-500/20 transition-colors">
                {b.icon}
              </div>
              <h3 className="text-xl font-bold tracking-tight text-[#111] mb-2.5 group-hover:text-amber-655 transition-colors">
                {b.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Project Support Section (Framed Quote block) */}
      <section className="bg-gray-100/60 border-y border-gray-200 py-14 px-6">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="bg-amber-100 text-amber-700 p-3 rounded-full mb-5 border border-amber-200 shadow-sm animate-pulse">
            <Calendar className="w-6 h-6" />
          </div>
          <p className="text-xl md:text-2xl font-black italic tracking-tight text-[#111] leading-relaxed max-w-3xl mb-4 text-balance">
            "We assist contractors in planning material requirements, scheduling deliveries, and ensuring uninterrupted project execution."
          </p>
          <span className="text-gray-500 text-xs uppercase tracking-widest font-black">
            - Sri Ram Traders Logistics & Engineering Support
          </span>
        </div>
      </section>

      {/* 3. Materials We Supply */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="max-w-2xl">
              <span className="text-amber-600 text-xs font-black tracking-widest uppercase block mb-3 font-mono">AUTHORIZED INVENTORY</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#111]">
                Premium Construction Materials We Supply
              </h2>
            </div>
            <p className="text-gray-550 text-sm md:text-base max-w-xs mt-4 md:mt-0 font-medium font-sans">
              Only authorized tier-one cement and heavy reinforcement steel sourced directly from manufacturing plants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {materials.map((m, i) => (
              <div 
                key={i} 
                className="bg-[#fafafa] rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md hover:border-amber-500/20 transition-all duration-300 flex flex-col"
              >
                <div className="h-48 overflow-hidden relative bg-gray-100">
                  <img src={m.img} alt={m.name} referrerPolicy="no-referrer" className="w-full h-full object-cover opacity-95 hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-4 left-4 bg-white/95 border border-gray-205 text-neutral-800 font-extrabold text-[10px] tracking-wider uppercase px-3 py-1 rounded shadow-sm">
                    {m.brand}
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-amber-600 text-[10px] font-black tracking-wider uppercase block mb-1">
                      {m.type}
                    </span>
                    <h3 className="text-lg font-black tracking-tight text-[#111] mb-2 font-sans">
                      {m.name}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed mb-4">
                      {m.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <span className="text-gray-400 text-[10px] uppercase font-bold block mb-1">Project Match</span>
                    <span className="text-[#111] text-xs font-bold flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-500" /> {m.metric}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Contractors Choose Us */}
      <section className="py-24 px-6 md:px-12 bg-[#fafafa] border-y border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="text-amber-600 text-xs font-black tracking-widest uppercase block mb-3 font-mono">OUR CORE COMMITMENTS</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#111] mb-6 leading-tight">
              Why Prestigious Bihar Contractors Choose Us
            </h2>
            <p className="text-gray-650 text-sm md:text-base leading-relaxed mb-6 font-medium">
              When projects carry complex engineering deadlines, material shortages are not an option. We coordinate with multiple cement plants daily to back your continuous concrete pours on site.
            </p>
            <div className="p-4 rounded-2xl bg-white border border-gray-200 text-xs shadow-sm">
              <span className="text-[#111] font-bold block mb-1">Logistics Coverage</span>
              <p className="text-gray-500">Comprehensive distribution channels spanning Patna, Muzaffarpur, Gaya, Darbhanga, Bhagalpur, and remote constructions across Bihar.</p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {valueAxioms.map((axiom, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6.5 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-4.5">
                  <Check className="w-4.5 h-4.5" strokeWidth={3} />
                </div>
                <h4 className="text-lg font-black text-[#111] mb-1.5">{axiom.title}</h4>
                <p className="text-neutral-400 text-xs leading-relaxed">{axiom.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bulk Order Inquiry Form Section */}
      <section id="inquiry-form" className="py-24 px-6 md:px-12 max-w-6xl mx-auto scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Support Briefing Column */}
          <div className="lg:col-span-5">
            <span className="text-amber-600 text-xs font-black tracking-widest uppercase block mb-3 font-mono">GET A QUOTE</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#111] mb-6 font-sans">
              Establish Commercial Contractor Tariffs
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Submit your project layout details, target delivery site, and average monthly requirements. Our corporate dispatch coordinators will compile a custom wholesale rate-card within 30 minutes.
            </p>

            <div className="bg-white border border-gray-200 p-6 rounded-2xl space-y-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 bg-amber-50 border border-amber-200 text-amber-655 rounded-full flex items-center justify-center text-xs font-extrabold flex-shrink-0 mt-0.5 animate-pulse">1</div>
                <div>
                  <h4 className="text-sm font-bold text-[#111]">Direct-to-Plant Freight</h4>
                  <p className="text-xs text-gray-550">We optimize factory loads straight to major projects to minimize layovers.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 bg-amber-50 border border-amber-200 text-amber-655 rounded-full flex items-center justify-center text-xs font-extrabold flex-shrink-0 mt-0.5 animate-pulse">2</div>
                <div>
                  <h4 className="text-sm font-bold text-[#111]">Full-Grade Certification</h4>
                  <p className="text-xs text-gray-550">We provide company laboratory batch certificates on demand for quality safety audits.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Interactive Box */}
          <div className="lg:col-span-7 bg-white border border-gray-205 rounded-3xl p-8 relative overflow-hidden shadow-2xl">
            {isSubmitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 bg-emerald-50 border border-emerald-105 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-6 shadow-sm">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-[#111] mb-2 font-sans">B2B Lead Registered!</h3>
                <p className="text-amber-750 text-sm font-semibold mb-4 font-mono">Attention: {formData.contactPerson}</p>
                <p className="text-gray-650 text-xs md:text-sm max-w-md mx-auto leading-relaxed mb-6">
                  We received the bulk quote request for <strong className="text-black">{formData.companyName}</strong>. Our corporate account manager will reach out via mobile <strong className="text-black">{formData.mobileNumber}</strong> to provide our wholesale catalog for {formData.materialRequired}.
                </p>
                
                <div className="bg-gray-50 p-5 rounded-2xl border border-gray-150 text-left text-xs mb-8">
                  <span className="text-gray-400 font-bold block uppercase tracking-wider text-[10px] mb-2 font-sans">Lead details</span>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <span className="text-gray-500 block">Deliver to:</span>
                      <span className="text-black font-bold">{formData.projectLocation || "Bihar General Site"}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Required Volume:</span>
                      <span className="text-black font-bold">{formData.quantityRequired || "Unspecified Bulk Shipment"}</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-[#111] text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  Submit new material requirement
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitInquiry} className="space-y-5">
                <div>
                  <h3 className="text-lg font-black text-[#111] tracking-tight leading-none mb-1 font-sans">Commercial Quote Desk</h3>
                  <p className="text-xs text-gray-500">All fields marked with an asterisk must be complete.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase font-black text-gray-500 tracking-wider mb-2">
                      Contractor / Company Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                      placeholder="E.g., Builders Pvt Ltd" 
                      className="w-full bg-[#fafafa] border border-gray-200 focus:border-yellow-500 focus:outline-none rounded-lg px-4 py-3 text-sm text-[#111] placeholder-gray-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-black text-gray-500 tracking-wider mb-2">
                      Contact Person *
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                      placeholder="Engineer / Architect Name" 
                      className="w-full bg-[#fafafa] border border-gray-200 focus:border-yellow-500 focus:outline-none rounded-lg px-4 py-3 text-sm text-[#111] placeholder-gray-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase font-black text-gray-500 tracking-wider mb-2">
                      Mobile Number *
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.mobileNumber}
                      onChange={(e) => setFormData({...formData, mobileNumber: e.target.value})}
                      placeholder="+91 Your Phone Number" 
                      className="w-full bg-[#fafafa] border border-gray-200 focus:border-yellow-500 focus:outline-none rounded-lg px-4 py-3 text-sm text-[#111] placeholder-gray-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-black text-gray-500 tracking-wider mb-2">
                      Project Location *
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.projectLocation}
                      onChange={(e) => setFormData({...formData, projectLocation: e.target.value})}
                      placeholder="Delivery site city/pincode" 
                      className="w-full bg-[#fafafa] border border-gray-200 focus:border-yellow-500 focus:outline-none rounded-lg px-4 py-3 text-sm text-[#111] placeholder-gray-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase font-black text-gray-500 tracking-wider mb-2">
                      Material Required *
                    </label>
                    <select 
                      value={formData.materialRequired}
                      onChange={(e) => setFormData({...formData, materialRequired: e.target.value})}
                      className="w-full bg-[#fafafa] border border-gray-200 focus:border-yellow-500 focus:outline-none rounded-lg px-4 py-3 text-sm text-[#111] transition-colors cursor-pointer"
                    >
                      <option value="MP Birla Cement Unique">MP Birla Premium Unique</option>
                      <option value="MP Birla Cement Samrat">MP Birla Samrat PPC</option>
                      <option value="MP Birla Perfect Cement">MP Birla Perfect Cement</option>
                      <option value="ACC Cement Gold Shield">ACC Cement Gold Shield</option>
                      <option value="Kamdhenu TMT Steel">Kamdhenu TMT Steel</option>
                      <option value="JSW Neosteel TMT Bars">JSW Neosteel TMT Bars</option>
                      <option value="Mixed Cement & Steel Supply">Mixed Cement + Steel Supply</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-black text-gray-500 tracking-wider mb-2">
                      Quantity Required *
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.quantityRequired}
                      onChange={(e) => setFormData({...formData, quantityRequired: e.target.value})}
                      placeholder="E.g., 200 bags, 10 Tons steel" 
                      className="w-full bg-[#fafafa] border border-gray-200 focus:border-yellow-500 focus:outline-none rounded-lg px-4 py-3 text-sm text-[#111] placeholder-gray-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-black text-gray-500 tracking-wider mb-2">
                    Additional Instructions / Timelines (Optional)
                  </label>
                  <textarea 
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    placeholder="E.g., Require delivery scheduled across 3 separate weeks..." 
                    className="w-full bg-[#fafafa] border border-gray-200 focus:border-yellow-500 focus:outline-none rounded-lg px-4 py-3 text-xs text-[#111] placeholder-gray-400 transition-colors resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4.5 bg-yellow-400 hover:bg-yellow-550 text-neutral-950 font-black text-sm rounded-lg transition-colors cursor-pointer shadow-lg shadow-yellow-450/10 flex items-center justify-center gap-1.5"
                >
                  Submit Contractor Inquiry <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 8. Strong Call-to-Action Section */}
      <section className="bg-white border-t border-gray-200 py-24 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.015),transparent_50%)] z-0 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-amber-600 text-xs font-black tracking-widest uppercase block mb-3 font-mono">IMMEDIATE RATE-CARD PROCUREMENT</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-[#111] mb-6">
            Get a Bulk Price Quote Today
          </h2>
          <p className="text-gray-650 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-sans font-medium">
            Skip catalog delays. Connect instantly with our wholesale trading agents via call or WhatsApp message to check standard transport timelines and rates.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="tel:+918539914204" 
              className="w-full sm:w-auto px-10 py-4 bg-yellow-400 hover:bg-yellow-500 text-neutral-950 font-black rounded-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-lg shadow-yellow-400/10 text-base"
            >
              <PhoneCall className="w-5 h-5 text-neutral-950" />
              Call Now
            </a>
            
            <a 
              href="https://wa.me/918539914204" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto px-10 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-lg shadow-emerald-600/10 text-base"
            >
              <MessageCircle className="w-5 h-5 text-white" fill="currentColor" />
              WhatsApp Business
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export function About() {
  const whyChooseUs = [
    {
      title: "100% Genuine Products",
      desc: "Every single bag of cement and steel bar we supply comes under strict factory security seals and original batch certifications."
    },
    {
      title: "Authorized Dealer Network",
      desc: "Official tier-one premium trade partnership with industry giants: MP Birla Cement, ACC Cement, Kamdhenu, and JSW Neosteel."
    },
    {
      title: "Competitive Market Prices",
      desc: "Direct dealer wholesale rate charts. We eliminate third-party commission brokers to secure the best profit margins for your project."
    },
    {
      title: "Fast & Reliable Delivery",
      desc: "Custom heavy-truck logistics network delivering bulk shipments directly from manufacturer silos onto your local construction site."
    },
    {
      title: "Bulk Order Support",
      desc: "Scaling dynamically with architectural constraints. Whether you need 100 bags or 50 metric tons, we schedule hassle-free deliveries."
    },
    {
      title: "Trusted by Contractors & Builders",
      desc: "The gold standard materials supplier for registered builders, PWD contractors, structural developers, and state engineers throughout Nalanda."
    }
  ];

  const productsWeSupply = [
    {
      name: "MP Birla Unique",
      desc: "Premium weather-resistant waterproofing pozzolana cement crafted to block porous capillaries.",
      image: imgBirlaUnique,
      tag: "Premium High-Reactive PPC"
    },
    {
      name: "MP Birla Samrat",
      desc: "Finely milled silicate active binder designed for columns, high-rise plaster, and dense foundations.",
      image: imgBirlaSamrat,
      tag: "Complete Strength PPC"
    },
    {
      name: "MP Birla Perfect",
      desc: "Advanced weatherproofing defense formula preventing moisture bleed inside interior walls.",
      image: imgBirlaPerfect,
      tag: "Shield Seal Waterproofing"
    },
    {
      name: "JSW Rod",
      desc: "Heavy-duty load bearing high tensile reinforcement bars with superior yield limits.",
      image: imgSteelRebars,
      tag: "Neosteel TMT Bars"
    },
    {
      name: "Shyam Steel Rod",
      desc: "Premium high-flexibility ductility rods designed specifically for earthquake-resistant load-distribution.",
      image: imgSteelRebars,
      tag: "Flexi-Ductile TMT Rebars"
    },
    {
      name: "Kamdhenu Rod",
      desc: "Seismic proof double-helix profile binding rebars producing extreme concrete grip strength.",
      image: imgSteelRebars,
      tag: "Ultra-Bonding TMT Steel"
    }
  ];

  const stats = [
    { count: "500+", label: "Happy Customers" },
    { count: "50+", label: "Contractors Served" },
    { count: "1000+ Tons", label: "Material Supplied" },
    { count: "Trusted", label: "Across Bihar" }
  ];

  return (
    <div className="bg-white text-[#111] min-h-screen">
      {/* 1. Hero Cover Header */}
      <section className="relative pt-32 pb-24 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-white overflow-hidden border-b border-gray-200">
        <div className="absolute inset-0 z-0 opacity-15 bg-cover bg-center mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("${imgAboutAerial}")` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent z-0 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Title Block */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-400/10 text-amber-900 font-extrabold text-xs tracking-wider uppercase mb-5 font-mono">
                <Award className="w-3.5 h-3.5 text-amber-700" /> Authorized Trade Dealer
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-[#111] mb-6 font-sans">
                About <span className="text-yellow-600">Sri Ram Traders</span>
              </h1>
              <p className="text-gray-650 text-base md:text-lg leading-relaxed max-w-2xl mb-8 font-medium">
                Building trust and delivering structural cement & reinforcement steel strength across Nalanda and regional Bihar.
              </p>

              {/* Corporate Metadata Brief */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                <div className="flex gap-2.5 items-start">
                  <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-400 text-[10px] font-black uppercase tracking-wider block font-mono">Head Office Location</span>
                    <p className="text-gray-700 text-xs font-semibold leading-relaxed">
                      Near Station Road, Muraura, Bihar Sharif, District Nalanda, Bihar – 803101
                    </p>
                  </div>
                </div>
                <div className="flex gap-2.5 items-start">
                  <Building2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-400 text-[10px] font-black uppercase tracking-wider block font-mono">Specialty Industry</span>
                    <p className="text-gray-700 text-xs font-semibold leading-relaxed">
                      Cement, TMT Steel Rebars & Heavy Construction Materials
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Hero Block */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[32px] overflow-hidden border border-gray-200 shadow-2xl bg-white p-2">
                <img 
                  src={imgAboutAerial} 
                  alt="Sri Ram Traders Distribution Warehouse" 
                  referrerPolicy="no-referrer"
                  className="rounded-[24px] w-full h-80 object-cover opacity-95 hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md border border-gray-150 rounded-2xl p-5 shadow-lg">
                  <span className="text-amber-600 text-[10px] font-black uppercase tracking-widest block mb-1 font-mono">PROVEN HERITAGE</span>
                  <p className="text-[#111] text-xs font-bold leading-relaxed">
                    Connecting premium state manufacturing mills to real estate developers securely daily.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. About Us & Our Mission Cards split */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* About Us Description Card */}
          <div className="bg-white border border-gray-200 rounded-[32px] p-8 md:p-10 flex flex-col justify-between hover:border-gray-300 transition-colors shadow-sm">
            <div>
              <div className="w-11 h-11 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6.5 border border-amber-200">
                <Info className="w-5.5 h-5.5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-[#111] tracking-tight mb-5 leading-none font-sans">
                Who We Are
              </h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 font-medium">
                Sri Ram Traders is a trusted supplier of premium cement and construction materials serving homeowners, contractors, builders, and infrastructure projects across Bihar. We are committed to delivering genuine products, competitive pricing, and reliable service.
              </p>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                By bridging state manufacturing lines directly with local developers, we ensure that Bihar's infrastructural evolution rests upon high-fidelity materials representing unmatched chemical and mechanical safety.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200 text-xs flex items-center gap-1.5 text-gray-500">
              <CheckCircle className="w-4 h-4 text-emerald-500" /> Fully Insured & PWD Standard Authorized
            </div>
          </div>

          {/* Our Mission Card with Target graphic theme */}
          <div className="bg-amber-50/40 border border-amber-200/60 rounded-[32px] p-8 md:p-10 flex flex-col justify-between hover:border-amber-300 transition-colors relative overflow-hidden group shadow-sm">
            <div className="absolute top-0 right-0 w-44 h-44 bg-yellow-400/[0.03] rounded-full blur-3xl pointer-events-none"></div>
            <div>
              <div className="w-11 h-11 bg-amber-100 text-amber-900 rounded-xl flex items-center justify-center mb-6.5 border border-amber-250">
                <Target className="w-5.5 h-5.5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-amber-955 tracking-tight mb-5 leading-none font-sans">
                Our Core Mission
              </h2>
              <p className="text-amber-900 text-base md:text-lg font-black leading-relaxed max-w-md italic mb-6">
                "To provide high-quality construction materials that help build strong, durable, and long-lasting structures."
              </p>
              <p className="text-amber-800/80 text-xs md:text-sm leading-relaxed">
                We design our materials procurement, bulk logistics, and financial billing pipelines to completely eradicate supply chain friction for local builders—guaranteeing that cement set delays become a thing of the past.
              </p>
            </div>
            
            <div className="mt-10 bg-yellow-400/10 border border-yellow-500/20 rounded-2xl p-4.5 flex gap-3.5 items-center">
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 animate-ping"></span>
              <span className="text-amber-950 text-xs font-bold uppercase tracking-wider font-mono">
                Active statewide delivery monitoring enabled
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Why Choose Us Grid */}
      <section className="py-24 bg-[#fafafa] border-y border-gray-205 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center lg:text-left mb-16 max-w-4xl">
            <span className="text-amber-600 text-xs font-black tracking-widest uppercase block mb-3 font-mono">AUTHORIZED ASSURANCE</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#111] mb-4 font-sans">
              Why Engineers & Prominent Architects Choose Us
            </h2>
            <p className="text-gray-600 text-base md:text-lg font-medium">
              We stand apart through clean, unyielding standards governing weight calibration, batch timelines, and genuine brand direct-dealer channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-200 rounded-2xl p-6.5 hover:border-amber-400/50 transition-all duration-300 relative group shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-700 border border-amber-205 flex items-center justify-center font-bold text-sm mb-4.5 group-hover:bg-yellow-400 group-hover:text-[#111] group-hover:border-yellow-400 transition-all">
                  <Check className="w-4 h-4" strokeWidth={3} />
                </div>
                <h4 className="text-lg font-black text-[#111] tracking-tight mb-2.5 font-sans">
                  {item.title}
                </h4>
                <p className="text-gray-550 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Products We Supply (Bento Showcase) */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center lg:text-left mb-16 max-w-3xl">
          <span className="text-amber-600 text-xs font-black tracking-widest uppercase block mb-3 font-mono">SUPPLY DOMAIN</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#111] mb-4 font-sans">
            Heavy Building Materials We Supply
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            From premier weatherproofing hydrophobic cements to high-tensile earthquake-resistant TMT steel reinforcement rebars, our supply floor handles extreme structural demand.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsWeSupply.map((p, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-amber-400 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-lg"
            >
              <div className="h-48 bg-gray-50 overflow-hidden relative border-b border-gray-100">
                <img 
                  src={p.image} 
                  alt={p.name} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-95 hover:scale-[1.03] transition-transform duration-500" 
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md border border-gray-200 text-[#111] font-black text-[8px] tracking-wider uppercase px-2 py-0.5 rounded">
                  AUTHORIZED STOCK
                </div>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-amber-600 text-[10px] font-black tracking-widest uppercase block mb-1 font-mono">
                    {p.tag}
                  </span>
                  <h4 className="text-base font-black text-[#111] tracking-tight leading-snug mb-1 font-sans">
                    {p.name}
                  </h4>
                </div>
                <p className="text-gray-500 text-[11px] leading-relaxed mt-2.5">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Our Commitment Block & 6. Statistics integrated */}
      <section className="py-24 bg-[#fafafa] px-6 md:px-12 border-t border-gray-205">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Commitment Text Card */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-amber-605 text-xs font-black tracking-widest uppercase block font-mono">QUALITY SEAL</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-[#111] mb-2 leading-tight font-sans">
              Our Material Authenticity Pledge
            </h2>
            <p className="text-gray-650 text-base leading-relaxed">
              Every bag of cement and every steel bar supplied by Sri Ram Traders comes from trusted manufacturers, ensuring quality, strength, and reliability for every construction project.
            </p>
            <div className="flex gap-4 p-5 bg-white rounded-2xl border border-gray-200 relative overflow-hidden shadow-sm">
              <div className="absolute right-0 bottom-0 translate-y-3 translate-x-3 text-gray-100 font-bold text-8xl pointer-events-none font-sans">100</div>
              <Shield className="w-12 h-12 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-extrabold text-[#111]">Full Manufacturer Indemnity</h4>
                <p className="text-gray-500 text-xs leading-relaxed mt-1">
                  We secure and pass-on certified chemical tests showing load capacity limits directly from standard factories.
                </p>
              </div>
            </div>
          </div>

          {/* Statistics Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {stats.map((s, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 md:p-8 rounded-3xl border border-gray-200 flex flex-col justify-center items-center text-center hover:border-amber-400 transition-colors shadow-sm"
              >
                <span className="text-2xl md:text-4xl font-black text-amber-600 mb-1 tracking-tight font-sans">
                  {s.count}
                </span>
                <span className="text-gray-400 font-extrabold tracking-wider uppercase text-[10px] md:text-xs font-mono">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Closing Banner ("Building Trust, Delivering Strength") */}
      <section className="bg-white py-24 px-6 text-center relative overflow-hidden border-t border-gray-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.015),transparent_55%)] pointer-events-none z-0"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center mx-auto mb-6 shadow-sm">
            <Building2 className="w-6 h-6" />
          </div>
          
          <span className="text-amber-600 text-xs font-black tracking-widest uppercase block mb-3 font-mono">SRI RAM TRADERS</span>
          
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-[#111] mb-6 font-sans">
            "Building Trust, Delivering Strength"
          </h2>
          
          <p className="text-gray-650 text-xs md:text-sm max-w-xl mx-auto mb-10 leading-relaxed text-balance font-medium">
            Connect directly with Nalanda's premium bulk construction materials dealership desk. Let our dispatch engineers review your blueprints today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a 
              href="tel:+918539914204" 
              className="w-full sm:w-auto px-10 py-4 bg-yellow-400 hover:bg-yellow-500 text-neutral-950 font-black rounded-lg transition-colors cursor-pointer text-sm shadow-lg shadow-yellow-400/15 flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" /> Call Sales Coordinator
            </a>
            <a 
              href="https://wa.me/918539914204" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto px-10 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-lg transition-colors cursor-pointer text-sm flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" fill="currentColor" /> Chat via WhatsApp
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    email: '',
    productRequired: 'MP Birla Cement Unique',
    quantity: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.mobileNumber.trim()) {
      return;
    }
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      mobileNumber: '',
      email: '',
      productRequired: 'MP Birla Cement Unique',
      quantity: '',
      message: ''
    });
    setIsSubmitted(false);
  };

  const contactInquiryBenefits = [
    {
      icon: <Clock className="w-5 h-5 text-amber-600" />,
      title: "Fast Response",
      desc: "Get initial direct-plant pricing proposals within 30 minutes of submitting your load requirements."
    },
    {
      icon: <Coins className="w-5 h-5 text-amber-600" />,
      title: "Competitive Pricing",
      desc: "Authorized dealership wholesale rate margins with custom rebates for scheduled multiple-dump projects."
    },
    {
      icon: <Layers className="w-5 h-5 text-amber-600" />,
      title: "Bulk Order Support",
      desc: "Hassle-free shipping on massive commercial projects—delivering high-tonnage loads on flexible calendars."
    },
    {
      icon: <HardHat className="w-5 h-5 text-amber-600" />,
      title: "Contractor Assistance",
      desc: "Dedicated coordinates to plan structural reinforcement layouts and continuous concrete batches smoothly."
    }
  ];

  return (
    <div className="bg-white text-[#111] min-h-screen font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-white overflow-hidden border-b border-gray-200">
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent z-0 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left">
          <span className="inline-flex items-center gap-1.5 px-4.5 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-400/10 text-amber-900 font-extrabold text-xs tracking-wider uppercase mb-6 shadow-sm font-mono">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" /> Sri Ram Traders Dealership Desk
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-sans lg:leading-[1.12] font-black tracking-tight text-[#111] mb-6">
            Contact <span className="text-yellow-600">Sri Ram Traders</span>
          </h1>
          <p className="text-gray-650 text-lg md:text-xl leading-relaxed max-w-2xl mb-1 font-medium">
            Get the best prices for cement, TMT steel, and construction materials.
          </p>
        </div>
      </section>

      {/* Main Form + Info Content Grid */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Contact Form & Form Handler */}
          <div className="lg:col-span-7 bg-white border border-gray-200 rounded-[32px] p-8 md:p-10 relative overflow-hidden shadow-sm">
            {isSubmitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/5">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-[#111] mb-4 font-sans">
                  Thank you for contacting Sri Ram Traders.
                </h3>
                <p className="text-amber-600 text-base font-black mb-4">
                  Our team will contact you shortly.
                </p>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-150 text-left space-y-3.5 max-w-md mx-auto mb-8">
                  <span className="text-gray-400 font-black text-[10px] tracking-wider uppercase block border-b border-gray-200 pb-2 font-mono">Registered Inquiry Details</span>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-gray-400 font-mono">Contact:</span>
                      <p className="text-[#111] font-bold">{formData.name}</p>
                    </div>
                    <div>
                      <span className="text-gray-400 font-mono">Mobile:</span>
                      <p className="text-[#111] font-bold">{formData.mobileNumber}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-gray-400 font-mono">Material Requested:</span>
                      <p className="text-[#111] font-bold">{formData.productRequired}</p>
                    </div>
                    <div>
                      <span className="text-gray-400 font-mono">Volume Level:</span>
                      <p className="text-[#111] font-bold">{formData.quantity || "Unspecified Load"}</p>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={handleReset}
                  className="px-8 py-3 bg-gray-100 hover:bg-gray-200 text-[#111] hover:text-amber-700 text-xs font-black rounded-lg transition-all cursor-pointer box-border border border-gray-200"
                >
                  Submit Another Project Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-black text-[#111] tracking-tight font-sans">Direct Pricing Inquiry</h2>
                  <p className="text-xs text-gray-500 mt-1">Please provide accurate construction parameters for exact logistics calculation.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] uppercase font-black text-gray-450 tracking-wider mb-2 font-mono">
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Enter your name" 
                      className="w-full bg-white border border-gray-200 focus:border-amber-400 focus:outline-none rounded-lg px-4 py-3.5 text-sm text-[#111] placeholder-gray-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-black text-gray-450 tracking-wider mb-2 font-mono">
                      Mobile Number *
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.mobileNumber}
                      onChange={(e) => setFormData({...formData, mobileNumber: e.target.value})}
                      placeholder="e.g. +91 8539914204" 
                      className="w-full bg-white border border-gray-200 focus:border-amber-400 focus:outline-none rounded-lg px-4 py-3.5 text-sm text-[#111] placeholder-gray-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] uppercase font-black text-gray-455 tracking-wider mb-2 font-mono">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your.email@example.com" 
                      className="w-full bg-white border border-gray-200 focus:border-amber-400 focus:outline-none rounded-lg px-4 py-3.5 text-sm text-[#111] placeholder-gray-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-black text-gray-455 tracking-wider mb-2 font-mono">
                      Est. Quantity Required
                    </label>
                    <input 
                      type="text" 
                      value={formData.quantity}
                      onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                      placeholder="e.g. 500 bags cement or 5 Tons" 
                      className="w-full bg-white border border-gray-200 focus:border-amber-400 focus:outline-none rounded-lg px-4 py-3.5 text-sm text-[#111] placeholder-gray-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-black text-gray-455 tracking-wider mb-2 font-mono">
                    Primary Product Required *
                  </label>
                  <select 
                    value={formData.productRequired}
                    onChange={(e) => setFormData({...formData, productRequired: e.target.value})}
                    className="w-full bg-white border border-gray-200 focus:border-amber-400 focus:outline-none rounded-lg px-4 py-3.5 text-sm text-[#111] transition-colors cursor-pointer"
                  >
                    <option value="MP Birla cement Unique">MP Birla Unique</option>
                    <option value="MP Birla cement Samrat">MP Birla Samrat</option>
                    <option value="MP Birla cement Perfect">MP Birla Perfect</option>
                    <option value="JSW Rod">JSW Rod</option>
                    <option value="Shyam Steel Rod">Shyam Steel Rod</option>
                    <option value="Kamdhenu Rod">Kamdhenu Rod</option>
                    <option value="Mixed Supply Requirements">Mixed Bulk Cement & Steel</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-black text-gray-455 tracking-wider mb-2 font-mono">
                    Project Requirements / Message
                  </label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Enter site location, delivery deadlines, or additional structural instructions here..." 
                    className="w-full bg-white border border-gray-200 focus:border-amber-400 focus:outline-none rounded-lg px-4 py-3.5 text-xs text-[#111] placeholder-gray-400 transition-colors resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4.5 bg-yellow-400 hover:bg-yellow-550 text-neutral-950 font-black text-sm rounded-lg transition-colors cursor-pointer shadow-lg shadow-yellow-400/10 flex items-center justify-center gap-2"
                >
                  Submit Inquiry Details <ArrowRight className="w-4 h-4 ml-0.5" />
                </button>
              </form>
            )}
          </div>

          {/* Right Side: Contact Information Cards & Benefits & Maps */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* 3. Contact Information Card */}
            <div className="bg-[#fafafa] border border-gray-205 rounded-[32px] p-8 shadow-sm space-y-6">
              <div>
                <span className="text-amber-600 text-[10px] font-black uppercase tracking-widest block mb-1 font-mono">CONNECT DIRECTLY</span>
                <h3 className="text-2xl font-black text-[#111] tracking-tight font-sans">Dealership Hotline</h3>
              </div>

              <div className="space-y-4">
                {/* Phone Item */}
                <div className="flex items-center gap-4.5 p-4 bg-white border border-gray-200 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 border border-amber-205">
                    <PhoneCall className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-gray-400 text-[9px] font-black uppercase tracking-wider block font-mono">Authorized Calling Line</span>
                    <a href="tel:+918539914204" className="text-[#111] text-base font-extrabold hover:text-amber-700 transition-colors">
                      +91 8539914204
                    </a>
                  </div>
                </div>

                {/* Email Item */}
                <div className="flex items-center gap-4.5 p-4 bg-white border border-gray-200 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 border border-amber-205">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-gray-400 text-[9px] font-black uppercase tracking-wider block font-mono">Corporate Box Support</span>
                    <a href="mailto:support.sriramtraders@gmail.com" className="text-[#111] text-xs sm:text-sm font-extrabold hover:text-amber-700 transition-colors break-all">
                      support.sriramtraders@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="grid grid-cols-2 gap-3.5 pt-2">
                <a 
                  href="tel:+918539914204" 
                  className="px-4 py-3.5 bg-yellow-400 hover:bg-yellow-500 text-neutral-950 font-black rounded-xl text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <PhoneCall className="w-3.5 h-3.5" /> Call Now
                </a>
                <a 
                  href="https://wa.me/918539914204" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm shadow-emerald-600/10"
                >
                  <MessageCircle className="w-3.5 h-3.5" fill="currentColor" /> WhatsApp Us
                </a>
              </div>
            </div>

            {/* 4. Inquiry Benefits Section */}
            <div className="bg-[#fafafa] border border-gray-205 rounded-[32px] p-8 shadow-sm">
              <span className="text-amber-600 text-[10px] font-black uppercase tracking-widest block mb-4.5 font-mono">INQUIRY PRIVILEGES</span>
              
              <div className="space-y-5">
                {contactInquiryBenefits.map((b, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-lg bg-white border border-gray-150 flex items-center justify-center text-amber-600 shrink-0 shadow-sm">
                      {b.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#111] mb-0.5 font-sans">{b.title}</h4>
                      <p className="text-gray-500 text-[11px] leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder Location Frame */}
            <div className="bg-white border border-gray-200 rounded-[32px] overflow-hidden p-2.5 shadow-sm relative">
              <div className="h-44 bg-gray-50 rounded-[22px] overflow-hidden relative flex items-center justify-center text-center">
                
                {/* Modern subtle technical grid or pattern representation of maps */}
                <div className="absolute inset-0 z-0 opacity-15 bg-cover bg-center mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("${imgAboutAerial}")` }}></div>
                <div className="absolute inset-0 bg-white/70 z-0 pointer-events-none"></div>
                
                <div className="relative z-10 px-4">
                  <MapPin className="w-8 h-8 text-amber-600 mx-auto mb-3 animate-bounce" />
                  <span className="text-amber-700 text-[9px] font-black uppercase tracking-widest block mb-1 font-mono">Bihar Sharif, District Nalanda</span>
                  <p className="text-[#111] text-xs font-bold leading-relaxed max-w-xs mx-auto font-sans">
                    Near Station Road, Muraura, Bihar Sharif, Bihar – 803101
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}


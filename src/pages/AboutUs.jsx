import React from 'react'
import { motion } from 'framer-motion'
import {
  Ship, Plane, ShieldCheck, Globe, Award, CheckCircle2, Lock, Zap,
  Headphones, ArrowRight, ArrowUpRight, Activity, TrendingUp, Check, Anchor
} from 'lucide-react'


export function AboutUs({ t, onOpenQuote }) {
  

  const heroStats = [
    { num: "142", label: "ACTIVE VESSELS", sub: "Ocean & Air Fleet" },
    { num: "68", label: "AIR FREIGHT HUBS", sub: "Daily Dispatchers" },
    { num: "54", label: "PORT TERMINALS", sub: "Global Hubs" },
    { num: "99.8%", label: "ON-TIME RATE", sub: "Fleet Transit" }
  ]

  const coreValues = [
    {
      num: "1.",
      title: "Reliability",
      desc: "Uncompromising commitment to scheduled vessel departures, guaranteed delivery windows, and zero-damage cargo integrity.",
      link: "Explore SLA guarantees ->"
    },
    {
      num: "2.",
      title: "Safety & Security",
      desc: "Stringent HACCP & C-TPAT safety protocols, tamperproof cryptographic seals, and accredited international cargo security specialists.",
      link: "View security standards ->"
    },
    {
      num: "3.",
      title: "Speed & Velocity",
      desc: "Optimized multimodal dispatches, priority airport airlifts, and direct EDI-backed electronic customs clearances.",
      link: "Peak SLA velocity ->"
    },
    {
      num: "4.",
      title: "Client Satisfaction",
      desc: "Dedicated enterprise account desks, transparent live telemetry dashboards, and proactive exception resolution.",
      link: "Get dedicated desk ->"
    }
  ]

  const timelineSteps = [
  {
    year: "2012",
    title: "Founding & Coastal Hub",
    desc: "Inaugurated our first premier maritime staging hub with 10 reefer units and deep-berth container landing.",
    badge: "Terminal Operational",
    active: false
  },
  {
    year: "2016",
    title: "Multimodal Air & Rail",
    desc: "Chartered transcontinental scheduled air freight lanes and cross-border road truck fleets.",
    badge: "Tri-Modal Integration",
    active: false
  },
  {
    year: "2019",
    title: "Telemetry Platform Launch",
    desc: "Rolled out proprietary IoT container tracking, continuous environmental sensors, and predictive ETA algorithms.",
    badge: "Digital Telemetry Core",
    active: false
  },
  {
    year: "2022",
    title: "50+ Global Port Hubs",
    desc: "Expanded enterprise charter networks into 50+ sovereign markets including Dubai, Karachi, Shanghai, and Hamburg.",
    badge: "Global Network Scale",
    active: false
  },
  {
    year: "2026",
    title: "Next-Generation Logistics",
    desc: "Advancing intelligent logistics through real-time visibility, smarter automation, and connected global supply chain operations.",
    badge: "Future Logistics Network",
    active: false
  }
]

  return (
    <div className="bg-[#060b13] text-slate-100 min-h-screen">

      {/* ==================== 1. HERO SECTION ==================== */}
      <section className="relative bg-dark-hero bg-cyber-grid pt-12 pb-20 overflow-hidden border-b border-white/10">
        <div className="container mx-auto px-4 md:px-8 relative z-10 space-y-10">

          <div className="max-w-4xl space-y-5">
            <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-widest uppercase">
              MARITIME • AIR • CONTINENTAL
            </span>
            <h1 className="text-4xl sm:text-6xl font-black font-poppins text-white tracking-tight leading-[1.1]">
              Decades of Maritime & Global <br className="hidden sm:block" />
              <span className="text-gradient-cyan">Freight Excellence</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-3xl">
              Built on trust, speed, and precision engineering of global supply chain networks. We operate multimodal routes across ocean corridors, oceanic docks, and continental highways with telemetry.
            </p>
          </div>

          {/* Top 4 Stat Badges Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {heroStats.map((stat, idx) => (
              <div key={idx} className="glass-dark-card p-5 rounded-2xl border border-white/10 bg-[#091122]/90 space-y-1">
                <span className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider block">{stat.label}</span>
                <div className="text-3xl font-black text-white font-poppins">{stat.num}</div>
                <span className="text-xs text-slate-400 font-light">{stat.sub}</span>
              </div>
            ))}
          </div>

          {/* Featured Telemetry Image Box */}
          <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl group">
            <img
              src="/Assets/about.jpg"
              alt="Global Freight Telemetry Network"
              className="w-full h-[380px] md:h-[480px] object-cover filter brightness-[0.75] contrast-[1.1] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060b13] via-transparent to-black/40"></div>

            {/* Floating Radar Node Badges */}
            <div className="absolute top-6 left-6 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span> AIR HUB NORTH AMERICA
            </div>
            <div className="absolute top-6 right-6 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 border border-emerald-400/40 text-emerald-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span> OCEAN FREIGHT PACIFIC
            </div>

            {/* Bottom Info Overlay */}
            <div className="absolute bottom-6 inset-x-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
              <div className="glass-dark-card p-5 rounded-2xl border-white/20 bg-slate-950/80 max-w-lg space-y-1 backdrop-blur-xl">
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block">INT. SHIPMENT TELEMETRY • AIR & SEA</span>
                <h3 className="text-lg font-bold text-white font-poppins">Dynamic Synchronization from Sea Lanes to Sky Corridors</h3>
                <p className="text-xs text-slate-300 font-light">From maritime docks, ocean vessels, and chartered freighters to continental road fleets, providing continuous temperature & location monitoring.</p>
              </div>

              <div className="px-5 py-3 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 backdrop-blur-xl flex items-center gap-3">
                <Ship className="w-6 h-6 text-cyan-300 animate-pulse" />
                <div>
                  <span className="text-base font-black text-white font-mono block">1,294 VESSELS</span>
                  <span className="text-[10px] text-cyan-200 uppercase font-semibold">Active Telemetry Tracked Online</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ==================== 2. FROM REGIONAL COASTLINES TO CONTINENTAL TRADE ==================== */}
      <section className="py-24 bg-slate-950 border-b border-white/10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Left Column Text & Quote */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">OUR HISTORY & MISSION</span>
              <h2 className="text-3xl sm:text-5xl font-black font-poppins text-white tracking-tight leading-tight">
                From Regional Coastlines to the Pulse of Continental Trade
              </h2>
              <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed">
                Founded on the simple premise that enterprise commerce demands unyielding integrity, Afaq Al Bahr Shipping began as a specialized maritime freight chartering firm. Through continuous capital investment in heavy logistics machinery, deep-sea port terminals, and proprietary telemetry software, we transformed into a transcontinental logistics architecture provider.
              </p>
              <p className="text-sm text-slate-400 font-light leading-relaxed">
                Today, we manage end-to-end multimodal routes, chartered container vessel berths, and customs clearance protocols across 50+ sovereign markets. We don't simply move freight; we serve as the operational backbone of global enterprises.
              </p>

              {/* Founder Quote Card */}
              <div className="glass-dark-card p-6 md:p-8 rounded-3xl border border-white/15 bg-[#091224] relative space-y-4 shadow-xl">
                <span className="text-5xl text-cyan-400/30 font-serif absolute top-4 right-6 pointer-events-none">“</span>
                <p className="text-xs md:text-sm text-slate-200 font-medium italic leading-relaxed">
                  "With over two decades of experience in global logistics, I founded AFAQ AL BAHR SHIPPING L.L.C. to bridge the gap between continents. Our commitment is to provide seamless, secure, and efficient shipping solutions that empower businesses to reach their full potential on the global stage."
                </p>
                <div className="flex items-center gap-4 pt-2">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-400 shadow-md">
                    <img src="/Assets/onwer.jpeg" alt="Muhammad Arif" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-poppins">Muhammad Arif</h4>
                    <span className="text-xs text-cyan-400 font-mono">Founder & CEO, Afaq Al Bahr Shipping</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 4 Image/Metric Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">

              {/* Card 1: Deepwater Docks Image */}
              <div className="relative rounded-2xl overflow-hidden border border-white/15 h-44 group">
                <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=400&q=80" alt="Deepwater Docks" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                <span className="absolute bottom-3 left-3 text-xs font-bold text-white font-poppins">Deepwater Docks</span>
              </div>

              {/* Card 2: 99.4% Customs Card */}
              <div className="glass-dark-card p-5 rounded-2xl border border-emerald-500/40 bg-emerald-950/40 flex flex-col justify-between h-44">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-2xl font-black text-emerald-400 font-poppins block">99.4%</span>
                  <span className="text-xs font-bold text-white block">Customs Dispatch</span>
                  <span className="text-[10px] text-slate-400 font-light leading-tight block">Fast-track clearance protocols.</span>
                </div>
              </div>

              {/* Card 3: 4.2M sq ft Bonded Warehousing */}
              <div className="glass-dark-card p-5 rounded-2xl border border-cyan-500/40 bg-cyan-950/40 flex flex-col justify-between h-44">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <Anchor className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-2xl font-black text-cyan-400 font-poppins block">4.2M sq. ft.</span>
                  <span className="text-xs font-bold text-white block">Bonded Warehousing</span>
                  <span className="text-[10px] text-slate-400 font-light leading-tight block">Climate-controlled hubs.</span>
                </div>
              </div>

              {/* Card 4: Airfreight Lifts Image */}
              <div className="relative rounded-2xl overflow-hidden border border-white/15 h-44 group">
                <img src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=400&q=80" alt="Airfreight Cargo Lifts" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                <span className="absolute bottom-3 left-3 text-xs font-bold text-white font-poppins">Airfreight Lifts</span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ==================== 3. PURPOSE & VISION CARDS ==================== */}
      <section className="py-16 bg-slate-900 border-b border-white/10">
        <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-8">

          {/* Card 1: Purpose (Light Card) */}
          <div className="glass-light-card p-8 rounded-3xl space-y-4">
            <span className="text-[11px] uppercase tracking-widest text-slate-500 font-bold block">PROTECTING GLOBAL COMMERCE</span>
            <h3 className="text-2xl font-bold text-slate-950 font-poppins">
              "To power international trade through transparent, carbon-conscious, and technology-driven cargo solutions that empower global enterprises."
            </h3>
            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800">Our Green Fleet Commitment</span>
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
            </div>
          </div>

          {/* Card 2: Vision (Dark Card) */}
          <div className="glass-dark-card p-8 rounded-3xl border border-white/20 bg-[#091428] space-y-4">
            <span className="text-[11px] uppercase tracking-widest text-cyan-400 font-bold block">BUILDING FUTURE VISION</span>
            <h3 className="text-2xl font-bold text-white font-poppins leading-snug">
              "To be the world's most trusted logistics partner, setting benchmarks for reliability, real-time visibility, and customer satisfaction."
            </h3>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-bold text-cyan-300">Next-Gen Telemetry Roadmap</span>
              <Zap className="w-5 h-5 text-cyan-400 animate-pulse" />
            </div>
          </div>

        </div>
      </section>

      {/* ==================== 4. THE CORE VALUES GOVERNING EVERY MILE ==================== */}
        <section
          className="py-24 text-slate-950 relative bg-cover bg-center bg-no-repeat"
          style={{
          backgroundImage: "url('/Assets/corevalues-bg.jpg')",
          }}
        >
        {/* Background Overlay */}
            <div className="absolute inset-0 bg-white/10"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="space-y-3 mb-16">
                   <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      OPERATIONAL TENETS
                   </div>
                  <h2 className="text-3xl sm:text-6xl font-black font-poppins tracking-tight text-white">
                      The Core{" "}
                      <span className="bg-gradient-to-r from-[#27C7E8] via-[#31C7C1] to-[#34D399] bg-clip-text text-transparent">
                      Values Governing
                      </span>{" "}
                      Every Mile
                  </h2> 
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {coreValues.map((val, idx) => (
                    <div key={idx} className="group relative">

                      {/* Glass Glow */}
                      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 to-emerald-500 opacity-5 blur-xl transition-opacity duration-300 group-hover:opacity-12"></div>

                      {/* Glass Card */}
                      <div
                        className="
                          relative p-8 rounded-3xl space-y-5
                          flex flex-col justify-between
                          border border-white/20
                          bg-[#091122]/30
                          backdrop-blur-xl
                          shadow-2xl
                          transition-all duration-300
                          hover:border-cyan-400/60
                          hover:shadow-cyan-500/20
                          hover:scale-[1.02]
                        "
                      >

                        <div className="space-y-4">

                          {/* Number */}
                          <div
                            className="
                              w-12 h-12 rounded-2xl
                              bg-white/10
                              border border-white/10
                              text-cyan-300
                              flex items-center justify-center
                              font-bold text-lg
                              transition-all duration-300
                              group-hover:bg-cyan-400
                              group-hover:text-[#091122]
                              group-hover:border-cyan-400
                            "
                          >
                            {val.num}
                          </div>

                          {/* Title */}
                          <h3
                            className="
                              text-2xl font-bold font-poppins
                              text-white
                              transition-colors duration-300
                              group-hover:text-cyan-300
                            "
                          >
                            {val.title}
                          </h3>

                          {/* Description */}
                          <p
                            className="
                              text-xs text-slate-400
                              leading-relaxed font-light
                              transition-colors duration-300
                              group-hover:text-slate-300
                            "
                          >
                            {val.desc}
                          </p>

                        </div>

                        {/* Bottom */}
                        <div
                          className="
                            pt-4
                            border-t border-white/10
                            flex items-center justify-between
                            transition-colors duration-300
                            group-hover:border-cyan-400/30
                          "
                        >
                          <span
                            className="
                              text-xs font-bold text-slate-300
                              transition-colors duration-300
                              group-hover:text-cyan-300
                            "
                          >
                            {val.link}
                          </span>

                          <ArrowUpRight
                            className="
                              w-4 h-4 text-slate-400
                              transition-all duration-300
                              group-hover:text-cyan-400
                              group-hover:translate-x-1
                              group-hover:-translate-y-1
                            "
                          />
                        </div>

                      </div>
                    </div>
                  ))}
                </div>
              </div>
        </section>

      {/* ==================== 5. A DECADE OF TECHNOLOGICAL EXPANSION (TIMELINE) ==================== */}
      
      <section className="py-24 bg-white text-slate-950 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-8">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-bold tracking-widest uppercase">
              HISTORICAL TRAJECTORY
            </span>

            <h2 className="text-3xl sm:text-5xl font-black font-poppins text-slate-950 tracking-tight">
              A Decade of Technological Expansion
            </h2>

            <p className="text-base text-slate-600 font-light leading-relaxed">
              From a single port berth provider to a global transcontinental logistics network managing billions in freight.
            </p>
          </div>

          {/* Timeline Cards */}
          <div
            className="grid md:grid-cols-2 lg:grid-cols-5 gap-6"
            style={{ direction: "rtl" }}
          >
            {timelineSteps.map((step, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-3xl transition-all duration-300 space-y-6 flex flex-col justify-between bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-cyan-300 hover:-translate-y-1"
                style={{ direction: "ltr" }}
              >

                {/* Card Content */}
                <div className="space-y-4">

                  {/* Year + Dot */}
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-black font-poppins text-slate-400 group-hover:text-cyan-600 transition-colors duration-300">
                      {step.year}
                    </span>

                    <span className="w-3 h-3 rounded-full bg-slate-300 group-hover:bg-cyan-500 group-hover:shadow-lg group-hover:shadow-cyan-500/40 transition-all duration-300"></span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-poppins text-slate-950 group-hover:text-[#093C5D] transition-colors duration-300">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    {step.desc}
                  </p>

                </div>

                {/* Badge */}
                <div className="pt-4 border-t border-slate-200">
                  <span className="text-[10px] uppercase font-mono font-bold text-slate-500 group-hover:text-cyan-600 transition-colors duration-300">
                    {step.badge}
                  </span>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
      {/* ==================== 6. WHY MULTINATIONALS ENTRUST THEIR CRITICAL FREIGHT ==================== */}
      <section className="py-24 bg-slate-900 text-slate-100">
        <div className="container mx-auto px-4 md:px-8 space-y-16">

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">PROVEN PERFORMANCE METRICS</span>
            <h2 className="text-3xl sm:text-5xl font-black font-poppins text-white tracking-tight">
              Why Multinationals Entrust Their Critical Freight to Afaq Al Bahr
            </h2>
            <p className="text-base text-slate-400 font-light">
              Institutional reliability, modern cargo telemetry, and tier-1 port berth integration.
            </p>
          </div>

          {/* 3 Metric Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* Card 1: $2.4B+ */}
            <div className="glass-dark-card p-8 rounded-3xl border border-white/15 bg-slate-950/80 space-y-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">VALUATION SECURED</span>
              <div className="text-4xl font-black text-white font-poppins">$2.4B+</div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                High-value electronics, sensitive pharmaceuticals, and aerospace parts safely routed across sea and sky corridors.
              </p>
              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-emerald-400">
                <Check className="w-4 h-4" /> Fully insured cargo protection
              </div>
            </div>

            {/* Card 2: 99.4% On-time */}
            <div className="glass-dark-card p-8 rounded-3xl border border-emerald-500/30 bg-slate-950/80 space-y-4">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">ON-TIME PERFORMANCE</span>
              <div className="text-4xl font-black text-emerald-400 font-poppins">99.4%</div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Consistently outperforming global benchmarks with precision container integrity and real-time automated status alerts.
              </p>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Monthly SLA Transit Trend</span>
                <TrendingUp className="w-4 h-4 text-emerald-400" />
              </div>
            </div>

            {/* Card 3: Tier-1 Direct Slots */}
            <div className="glass-dark-card p-8 rounded-3xl border border-white/15 bg-slate-950/80 space-y-4">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">DIRECT PORT ALLOCATIONS</span>
              <div className="text-2xl font-black text-white font-poppins">Tier-1 Direct Slots</div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Reserved vessel allocations across major global shipping alliances (Maersk, MSC, CMA CGM, HMM).
              </p>
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2 text-[10px]">
                <span className="px-2.5 py-1 rounded bg-white/5 text-slate-300 border border-white/10">Maersk Direct</span>
                <span className="px-2.5 py-1 rounded bg-white/5 text-slate-300 border border-white/10">CMA CGM Line</span>
                <span className="px-2.5 py-1 rounded bg-white/5 text-slate-300 border border-white/10">Pacific Ocean Priority</span>
              </div>
            </div>

          </div>

          {/* Security Accreditations Banner Container */}
          <div className="glass-dark-card p-8 rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-[#091830] to-[#050c18] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-[10px] uppercase font-bold text-cyan-400 tracking-widest block">HIGHEST OPERATIONAL SECURITY</span>
              <h3 className="text-xl md:text-2xl font-bold text-white font-poppins">
                ISO 9001, TAPA TSR Level I & C-TPAT Certified Freight Routes
              </h3>
              <p className="text-xs text-slate-300 font-light">
                Every facility, schedule, and trailer adheres to international safety standards, automated biometric perimeter controls, and digital bill-of-lading security.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/15 text-center">
                <span className="text-xs font-bold text-white block">ISO 9001:2026</span>
                <span className="text-[9px] text-slate-400">Quality Management</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/15 text-center">
                <span className="text-xs font-bold text-emerald-400 block">TAPA TSR Level 1</span>
                <span className="text-[9px] text-slate-400">Highest Security Clearance</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/15 text-center">
                <span className="text-xs font-bold text-cyan-400 block">AEO / C-TPAT</span>
                <span className="text-[9px] text-slate-400">Intl. Trade Compliance</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ==================== 7. READY TO STREAMLINE YOUR SUPPLY LINES? ==================== */}
      {/* <section className="py-20 bg-gradient-to-r from-[#061224] via-[#0b203e] to-[#061224] text-white relative border-t border-white/10">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl space-y-6">
          <span className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-widest uppercase">
            ENTERPRISE FREIGHT ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-poppins tracking-tight">
            Ready to Streamline Your Continental or Oceanic Supply Lines?
          </h2>
          <p className="text-base text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
            Connect directly with our logistics specialists to configure custom shipping schedules, dedicated container charter allocations, or integrated telemetry API webhooks.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
            <button
              onClick={onOpenQuote}
              className="bg-cyan-button px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider shadow-xl shadow-cyan-500/30 hover:scale-105 transition-transform"
            >
              Request Route Audit
            </button>
            <button
              onClick={onOpenQuote}
              className="px-8 py-4 rounded-full bg-white/5 border border-white/20 text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              Explore Services
            </button>
          </div>
        </div>
      </section> */}

    </div>
  )
}

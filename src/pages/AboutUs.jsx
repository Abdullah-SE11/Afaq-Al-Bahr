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
    year: "2013",
    title: "Regional Expansion",
    desc: "Expanded regional freight operations and strengthened connections with key coastal and inland trade routes.",
    badge: "Regional Network",
    active: false
  },
  {
    year: "2014",
    title: "Fleet Development",
    desc: "Expanded our logistics fleet and improved road freight capabilities to support growing cargo volumes.",
    badge: "Fleet Expansion",
    active: false
  },
  {
    year: "2015",
    title: "Integrated Logistics",
    desc: "Introduced integrated freight coordination across maritime, road, and warehouse operations.",
    badge: "Integrated Operations",
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
    year: "2017",
    title: "Global Trade Connections",
    desc: "Strengthened international trade corridors and expanded partnerships across major commercial markets.",
    badge: "Global Connectivity",
    active: false
  },
  {
    year: "2018",
    title: "Smart Cargo Operations",
    desc: "Modernized cargo handling processes with improved tracking, documentation, and operational visibility.",
    badge: "Smart Operations",
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
    year: "2020",
    title: "Digital Logistics Transformation",
    desc: "Accelerated digital logistics operations with connected shipment monitoring and improved remote coordination.",
    badge: "Digital Transformation",
    active: false
  },
  {
    year: "2021",
    title: "Supply Chain Resilience",
    desc: "Expanded operational capabilities and strengthened supply chain continuity across international freight routes.",
    badge: "Resilient Supply Chain",
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
    year: "2023",
    title: "Advanced Cargo Visibility",
    desc: "Enhanced real-time shipment visibility and connected logistics workflows across global transportation networks.",
    badge: "Real-Time Visibility",
    active: false
  },
  {
    year: "2024",
    title: "Intelligent Logistics Systems",
    desc: "Advanced automation, data-driven planning, and connected logistics systems to improve cargo coordination.",
    badge: "Intelligent Logistics",
    active: false
  },
  {
    year: "2025",
    title: "Connected Global Operations",
    desc: "Expanded connected logistics capabilities with smarter monitoring, automation, and integrated supply chain management.",
    badge: "Connected Operations",
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
<section
  className="relative bg-dark-hero bg-cyber-grid pt-12 pb-20 overflow-hidden border-b border-white/10 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/Assets/about-bg.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Dark Image Overlay */}
  <div className="absolute inset-0 bg-[#060b13]/85"></div>

  {/* Subtle Cyan Glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#093C5D]/30 via-transparent to-[#5DF8D8]/10"></div>

  <div className="container mx-auto px-4 md:px-8 relative z-10 space-y-10">

    <div className="max-w-4xl space-y-5">
      <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-widest uppercase">
        MARITIME • AIR • CONTINENTAL
      </span>

      <h1 className="text-4xl sm:text-6xl font-black font-poppins text-white tracking-tight leading-[1.1]">
        Decades of Maritime & Global <br className="hidden sm:block" />
        <span className="text-gradient-cyan">
          Freight Excellence
        </span>
      </h1>

      <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-3xl">
        Built on trust, speed, and precision engineering of global supply chain networks. We operate multimodal routes across ocean corridors, oceanic docks, and continental highways with telemetry.
      </p>
    </div>

    {/* Top 4 Stat Badges Bar */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {heroStats.map((stat, idx) => (
        <div
          key={idx}
          className="glass-dark-card p-5 rounded-2xl border border-white/10 bg-[#091122]/80 backdrop-blur-xl space-y-1"
        >
          <span className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider block">
            {stat.label}
          </span>

          <div className="text-3xl font-black text-white font-poppins">
            {stat.num}
          </div>

          <span className="text-xs text-slate-400 font-light">
            {stat.sub}
          </span>
        </div>
      ))}
    </div>

    {/* Featured Telemetry Image Box */}
    <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl group">

      <img
        src="/Assets/Featured Telemetry.jpg"
        alt="Global Freight Telemetry Network"
        className="w-full h-[380px] md:h-[480px] object-cover filter brightness-[0.75] contrast-[1.1] group-hover:scale-105 transition-transform duration-700"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#060b13] via-transparent to-black/40"></div>

      {/* Floating Radar Node Badges */}
      <div className="absolute top-6 left-6 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-mono">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
        AIR HUB NORTH AMERICA
      </div>

      <div className="absolute top-6 right-6 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 border border-emerald-400/40 text-emerald-300 text-xs font-mono">
        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
        OCEAN FREIGHT PACIFIC
      </div>

      {/* Bottom Info Overlay */}
      <div className="absolute bottom-6 inset-x-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">

        <div className="glass-dark-card p-5 rounded-2xl border-white/20 bg-slate-950/80 max-w-lg space-y-1 backdrop-blur-xl">
          <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block">
            INT. SHIPMENT TELEMETRY • AIR & SEA
          </span>

          <h3 className="text-lg font-bold text-white font-poppins">
            Dynamic Synchronization from Sea Lanes to Sky Corridors
          </h3>

          <p className="text-xs text-slate-300 font-light">
            From maritime docks, ocean vessels, and chartered freighters to continental road fleets, providing continuous temperature & location monitoring.
          </p>
        </div>

        <div className="px-5 py-3 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 backdrop-blur-xl flex items-center gap-3">
          <Ship className="w-6 h-6 text-cyan-300 animate-pulse" />

          <div>
            <span className="text-base font-black text-white font-mono block">
              1,294 VESSELS
            </span>

            <span className="text-[10px] text-cyan-200 uppercase font-semibold">
              Active Telemetry Tracked Online
            </span>
          </div>
        </div>

      </div>
    </div>

  </div>
</section>

      {/* ==================== 2. FROM REGIONAL COASTLINES TO CONTINENTAL TRADE ==================== */}
      <section className="py-24 bg-white text-slate-950 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">

              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                OUR HISTORY & MISSION
              </span>

              <h2 className="text-3xl sm:text-5xl font-black font-poppins text-slate-950 tracking-tight leading-tight">
                From Regional Coastlines to the Pulse of Continental Trade
              </h2>

              <p className="text-sm md:text-base text-slate-600 font-normal leading-relaxed">
                Founded on the simple premise that enterprise commerce demands unyielding integrity, Afaq Al Bahr Shipping began as a specialized maritime freight chartering firm. Through continuous capital investment in heavy logistics machinery, deep-sea port terminals, and proprietary telemetry software, we transformed into a transcontinental logistics architecture provider.
              </p>

              <p className="text-sm text-slate-500 font-normal leading-relaxed">
                Today, we manage end-to-end multimodal routes, chartered container vessel berths, and customs clearance protocols across 50+ sovereign markets. We don't simply move freight; we serve as the operational backbone of global enterprises.
              </p>

              {/* Founder Quote */}
              <div className="relative p-6 md:p-8 rounded-3xl bg-[#EEF4FF] border border-[#DCE8FA] space-y-4 shadow-sm">

                <span className="text-6xl text-[#D9E7FF] font-serif absolute top-2 right-6 pointer-events-none">
                  “
                </span>

                <p className="text-xs md:text-sm text-slate-700 font-medium italic leading-relaxed relative z-10">
                  "With over two decades of experience in global logistics, I founded AFAQ AL BAHR SHIPPING L.L.C. to bridge the gap between continents. Our commitment is to provide seamless, secure, and efficient shipping solutions that empower businesses to reach their full potential on the global stage."
                </p>

                <div className="flex items-center gap-4 pt-2">

                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <img
                      src="/Assets/onwer.jpeg"
                      alt="Muhammad Arif"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-slate-950 font-poppins">
                      Muhammad Arif
                    </h4>

                    <span className="text-xs text-slate-500 font-mono">
                      Founder & CEO, Afaq Al Bahr Shipping
                    </span>
                  </div>

                </div>
              </div>

            </div>


            {/* Right Column */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 ">

              {/* Card 1 - Image */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 h-44 group shadow-sm">

                <img
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=400&q=80"
                  alt="Deepwater Docks"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

                <span className="absolute bottom-3 left-3 text-xs font-bold text-white font-poppins">
                  Deepwater Docks
                </span>

              </div>


              {/* Card 2 - Customs */}
              <div className="p-5 rounded-2xl border border-[#BFE8E8] bg-[#EAF8F8]/80 backdrop-blur-xl flex flex-col justify-between h-44 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-cyan-300">

                <div className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-700 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>

                <div>
                  <span className="text-2xl font-black text-[#159A9C] font-poppins block">
                    99.4%
                  </span>

                  <span className="text-xs font-bold text-slate-950 block">
                    Customs Dispatch
                  </span>

                  <span className="text-[10px] text-slate-500 font-normal leading-tight block">
                    Fast-track clearance protocols.
                  </span>
                </div>

              </div>


              {/* Card 3 - Warehouse */}
              <div className="p-5 rounded-2xl border border-[#C9DDF8] bg-[#EEF4FF]/90 backdrop-blur-xl flex flex-col justify-between h-44 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-300">

                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                  <Anchor className="w-5 h-5" />
                </div>

                <div>
                  <span className="text-2xl font-black text-[#3678B8] font-poppins block">
                    4.2M sq. ft.
                  </span>

                  <span className="text-xs font-bold text-slate-950 block">
                    Bonded Warehousing
                  </span>

                  <span className="text-[10px] text-slate-500 font-normal leading-tight block">
                    Climate-controlled hubs.
                  </span>
                </div>

              </div>


              {/* Card 4 - Airfreight */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 h-44 group shadow-sm">

                <img
                  src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=400&q=80"
                  alt="Airfreight Cargo Lifts"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

                <span className="absolute bottom-3 left-3 text-xs font-bold text-white font-poppins">
                  Airfreight Lifts
                </span>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ==================== 3. PURPOSE & VISION CARDS ==================== */}
      <section className="py-16 bg-[#EAF2FF] border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-8">

          {/* Card 1: Purpose */}
          <div className="group relative">

            {/* Glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-400 to-emerald-400 opacity-5 blur-xl transition-opacity duration-300 group-hover:opacity-7"></div>

            {/* Glass Card */}
            <div className="relative p-8 rounded-3xl space-y-4
              bg-white/70 backdrop-blur-xl
              border border-slate-200
              shadow-lg
              transition-all duration-300
              hover:border-cyan-300
              hover:shadow-2xl hover:shadow-cyan-500/10
              hover:scale-[1.02]"
            >
              <span className="text-[11px] uppercase tracking-widest text-slate-500 font-bold block transition-colors duration-300 group-hover:text-cyan-600">
                PROTECTING GLOBAL COMMERCE
              </span>

              <h3 className="text-2xl font-bold text-slate-950 font-poppins leading-snug transition-colors duration-300 group-hover:text-[#093C5D]">
                "To power international trade through transparent, carbon-conscious, and technology-driven cargo solutions that empower global enterprises."
              </h3>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between transition-colors duration-300 group-hover:border-cyan-200">
                <span className="text-xs font-bold text-slate-800 group-hover:text-[#093C5D] transition-colors">
                  Our Green Fleet Commitment
                </span>

                <ShieldCheck className="w-5 h-5 text-emerald-600 group-hover:text-emerald-500 group-hover:scale-110 transition-all" />
              </div>
            </div>
          </div>


          {/* Card 2: Vision */}
          <div className="group relative">

            {/* Glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 to-emerald-500 opacity-5 blur-xl transition-opacity duration-300 group-hover:opacity-10"></div>

            {/* Glass Card */}
            <div className="relative p-8 rounded-3xl space-y-4
              bg-[#091428]/90 backdrop-blur-xl
              border border-white/15
              shadow-2xl
              transition-all duration-300
              hover:border-cyan-400/60
              hover:shadow-cyan-500/20
              hover:scale-[1.02]"
            >
              <span className="text-[11px] uppercase tracking-widest text-cyan-400 font-bold block">
                BUILDING FUTURE VISION
              </span>

              <h3 className="text-2xl font-bold text-white font-poppins leading-snug">
                "To be the world's most trusted logistics partner, setting benchmarks for reliability, real-time visibility, and customer satisfaction."
              </h3>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between transition-colors duration-300 group-hover:border-cyan-400/30">
                <span className="text-xs font-bold text-cyan-300 group-hover:text-[#5DF8D8] transition-colors">
                  Next-Gen Telemetry Roadmap
                </span>

                <Zap className="w-5 h-5 text-cyan-400 animate-pulse group-hover:text-[#5DF8D8] transition-colors" />
              </div>
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

          {/* Timeline Cards Animated Flow (Left to Right, Pause on Hover) */}
          <div className="relative w-full overflow-hidden pause-on-hover py-4">
            {/* Edge Fade Gradients */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 md:w-36 z-10 bg-gradient-to-r from-white via-white/80 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 md:w-36 z-10 bg-gradient-to-l from-white via-white/80 to-transparent" />

            {/* Seamless Animated Track */}
            <div className="animate-timeline-marquee flex gap-6">
              {[...timelineSteps, ...timelineSteps].map((step, idx) => (
                <div
                  key={idx}
                  className="w-[280px] sm:w-[320px] md:w-[360px] flex-shrink-0 group p-8 rounded-3xl transition-all duration-300 space-y-6 flex flex-col justify-between bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-cyan-300 hover:-translate-y-1 cursor-pointer"
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

        </div>
      </section>
      {/* ==================== 6. WHY MULTINATIONALS ENTRUST THEIR CRITICAL FREIGHT ==================== */}
      <section className="py-20 md:py-24 bg-[#EAF2FF] text-[#071525]">
        <div className="container mx-auto px-4 md:px-8 space-y-10">

          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-[9px] md:text-[10px] font-bold text-[#5B7892] uppercase tracking-[0.18em] ">
              PROVEN OPERATIONAL BENCHMARKS
            </span>

            <h2 className="text-3xl sm:text-5xl font-black font-poppins text-[#071525] tracking-tight leading-tight ">
              Why Multinationals Entrust Their Critical
              <br className="hidden md:block" />
              Freight to Afaq Al Bahr
            </h2>

            <p className="text-base text-slate-600 font-light leading-relaxed">
              Institutional certifications, massive cargo volume visibility, and elite Tier-1 carrier integration.
            </p>
          </div>


          {/* 3 Metric Cards */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-5">

            {/* Card 1 */}
            <div className="bg-white rounded-xl border border-[#DCE5F0] shadow-[0_4px_14px_rgba(20,50,80,0.05)] p-6 md:p-7 min-h-[270px] flex flex-col">

              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-[#E7EFF8] flex items-center justify-center mb-5">
                <Check className="w-5 h-5 text-[#174D6C]" />
              </div>

              <span className="text-[9px] font-bold text-[#708398] uppercase tracking-wider">
                ANNUAL FREIGHT HANDLED
              </span>

              <div className="text-4xl md:text-[42px] leading-none font-black text-[#071525] font-poppins mt-2">
                $2.4B+
              </div>

              <p className="text-[10px] md:text-[11px] text-[#718196] leading-relaxed font-light mt-4">
                High-value electronics, sensitive pharmaceuticals, and aerospace components
                safely routed across sea and sky corridors.
              </p>

              <div className="mt-auto pt-5 flex items-center gap-2 text-[9px] text-[#668098]">
                <Check className="w-3.5 h-3.5 text-[#4C718A]" />
                Fully insured cargo protection
              </div>
            </div>


            {/* Card 2 */}
            <div className="bg-white rounded-xl border border-[#DCE5F0] shadow-[0_4px_14px_rgba(20,50,80,0.05)] p-6 md:p-7 min-h-[270px] flex flex-col">

              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-[#062A49] flex items-center justify-center mb-5">
                <div className="w-5 h-5 rounded-full border-2 border-[#38E7D0]" />
              </div>

              <span className="text-[9px] font-bold text-[#708398] uppercase tracking-wider">
                LOSS PREVENTION
              </span>

              <div className="text-4xl md:text-[42px] leading-none font-black text-[#071525] font-poppins mt-2">
                99.4%
              </div>

              <p className="text-[10px] md:text-[11px] text-[#718196] leading-relaxed font-light mt-4">
                Consistently outperforming industry averages with flawless container
                integrity and rigorous automated seal checks at terminal gates.
              </p>

              {/* Trend */}
              <div className="mt-auto pt-4">
                <div className="flex items-center justify-between mb-2 text-[8px] text-[#708398]">
                  <span>Claims-Free Trend</span>
                  <span>+9.4% YoY</span>
                </div>

                <div className="relative h-7">
                  <svg
                    viewBox="0 0 240 40"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                  >
                    <polyline
                      points="5,31 45,26 80,28 120,19 155,17 190,12 235,5"
                      fill="none"
                      stroke="#24617F"
                      strokeWidth="2"
                    />

                    <circle cx="235" cy="5" r="3" fill="#24617F" />
                  </svg>
                </div>
              </div>
            </div>


            {/* Card 3 */}
            <div className="bg-white rounded-xl border border-[#DCE5F0] shadow-[0_4px_14px_rgba(20,50,80,0.05)] p-6 md:p-7 min-h-[270px] flex flex-col">

              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-[#E7EFF8] flex items-center justify-center mb-5">
                <span className="text-lg">◇</span>
              </div>

              <span className="text-[9px] font-bold text-[#708398] uppercase tracking-wider">
                CARRIER ALLIANCES
              </span>

              <div className="text-[25px] md:text-[27px] leading-tight font-black text-[#071525] font-poppins mt-2">
                Tier-1 Direct Slots
              </div>

              <p className="text-[10px] md:text-[11px] text-[#718196] leading-relaxed font-light mt-4">
                Guaranteed vessel and carrier capacity across global shipping
                alliances including Maersk, CMA CGM, HMM, and MSC.
              </p>

              {/* Alliance Tags */}
              <div className="mt-auto pt-4 grid grid-cols-2 gap-2">
                <span className="text-[8px] text-center font-medium text-[#526B81] bg-[#EAF1FC] rounded-md px-2 py-2">
                  Maersk Direct
                </span>

                <span className="text-[8px] text-center font-medium text-[#526B81] bg-[#EAF1FC] rounded-md px-2 py-2">
                  CMA CGM Line
                </span>

                <span className="text-[8px] text-center font-medium text-[#526B81] bg-[#EAF1FC] rounded-md px-2 py-2">
                  MSC Express Space
                </span>

                <span className="text-[8px] text-center font-medium text-[#526B81] bg-[#EAF1FC] rounded-md px-2 py-2">
                  Flexi Priority
                </span>
              </div>
            </div>

          </div>


          {/* Security Banner */}
          <div className="bg-[#032B43] rounded-xl border border-[#071525] shadow-[0_5px_16px_rgba(4,25,40,0.18)] px-6 py-6 md:px-7 md:py-6">

            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

              {/* Left Content */}
              <div className="flex-1 space-y-2">
                <span className="text-[8px] md:text-[9px] uppercase font-bold text-[#45E7D2] tracking-[0.16em]">
                  HIGHEST OPERATIONAL SECURITY
                </span>

                <h3 className="text-lg md:text-xl font-bold text-white font-poppins leading-tight">
                  ISO 9001, TAPA TSR Level 1 & C-TPAT Certified Facilities
                </h3>

                <p className="text-[9px] md:text-[10px] text-[#B8CBD7] font-light leading-relaxed max-w-2xl">
                  Every facility adheres to international customs enforcement standards,
                  automated biometric perimeter controls, and digital chain-of-custody protocols.
                </p>
              </div>


              {/* Certification Badges */}
              <div className="flex flex-wrap justify-center lg:justify-end gap-2 max-w-md">

                <div className="bg-[#0A4565] border border-[#155776] rounded-lg px-4 py-2.5 min-w-[135px]">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#0B5C78] flex items-center justify-center">
                      <span className="text-[#45E7D2] text-[10px]">✥</span>
                    </div>

                    <div>
                      <span className="text-[9px] font-bold text-white block">
                        ISO 9001:2015
                      </span>
                      <span className="text-[7px] text-[#A8C2D0]">
                        Quality Management
                      </span>
                    </div>
                  </div>
                </div>


                <div className="bg-[#0A4565] border border-[#155776] rounded-lg px-4 py-2.5 min-w-[135px]">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#0B5C78] flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#45E7D2]" />
                    </div>

                    <div>
                      <span className="text-[9px] font-bold text-white block">
                        TAPA TSR Tier 1
                      </span>
                      <span className="text-[7px] text-[#A8C2D0]">
                        Highest Security Protocol
                      </span>
                    </div>
                  </div>
                </div>


                <div className="bg-[#0A4565] border border-[#155776] rounded-lg px-4 py-2.5 min-w-[135px]">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#0B5C78] flex items-center justify-center">
                      <span className="text-[#45E7D2] text-[10px]">✥</span>
                    </div>

                    <div>
                      <span className="text-[9px] font-bold text-white block">
                        AEO / C-TPAT
                      </span>
                      <span className="text-[7px] text-[#A8C2D0]">
                        Intl. Trade Pre-Check
                      </span>
                    </div>
                  </div>
                </div>

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

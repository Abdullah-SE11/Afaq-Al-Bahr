import React from 'react'
import { motion } from 'framer-motion'
import {
  Ship,Plane,Clock3, ShieldCheck, Globe, Award, CheckCircle2, Lock, Zap,
  Headphones, ArrowRight, ArrowUpRight, Activity, TrendingUp, Check, Anchor
} from 'lucide-react'



export function AboutUs({ t, onOpenQuote }) {
  const [selectedCertificate, setSelectedCertificate] = React.useState(null)

  const {
    certificateItems = [],
    heroStats = [],
    coreValues = [],
    timelineSteps = []
  } = t.about || {}

  const heroStatIconMap = {
    ship: Ship,
    plane: Plane,
    anchor: Anchor,
    clock: Clock3,
  }

  const heroStatsMapped = heroStats.map((stat) => ({
    ...stat,
    icon: heroStatIconMap[stat.icon] || Clock3,
  }))

  return (
    <div className="bg-[#060b13] text-slate-100 min-h-screen">

      {/* ==================== 1. HERO SECTION ==================== */}
      <section className="relative pt-12 pb-20 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <video
            className="h-full w-full object-cover object-center"
            src="/Assets/about hero.mp4"
            poster="/Assets/about-bg.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
        </div>

        {/* Dark Video Overlay */}
        <div className="absolute inset-0 bg-[#060b13]/40 z-10"></div>

        {/* Subtle Cyan Glow */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-[#093C5D]/30 via-transparent to-[#5DF8D8]/10"></div> */}

        {/* ==================== HERO CONTENT ==================== */}
        <div className="container mx-auto px-4 md:px-8 relative z-20 space-y-10">

          {/* Hero Text */}
          <div className="max-w-4xl space-y-5">

            {/* Heading */}
            <h1 className="text-4xl sm:text-6xl font-black font-poppins text-white tracking-tight leading-[1.1]">
              Decades of Maritime & Global{" "}
              <br className="hidden sm:block" />

              <span className="text-gradient-cyan">
                Freight Excellence
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-3xl">
              Built on trust, speed, and precision engineering of global supply
              chain networks. We operate multimodal routes across ocean corridors,
              oceanic docks, and continental highways with telemetry.
            </p>
          </div>

            {/* ==================== TOP 4 STAT BADGES ==================== */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {heroStatsMapped.map((stat, idx) => {
              const Icon = stat.icon

              return (
                <div
                  key={idx}
                  className="
                    group
                    glass-dark-card
                    relative
                    space-y-1
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-[#091122]/80
                    p-5
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-cyan-400/40
                    hover:bg-[#0b172d]/90
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      absolute
                      right-4
                      top-4
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-cyan-400/20
                      bg-cyan-400/10
                      text-cyan-400
                      transition-all
                      duration-300
                      group-hover:scale-110
                      group-hover:bg-cyan-400/20
                      group-hover:text-cyan-300
                    "
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>

                  {/* Label */}
                  <span className="block pr-10 text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                    {stat.label}
                  </span>

                  {/* Number */}
                  <div className="font-poppins text-3xl font-black text-white">
                    {stat.num}
                  </div>

                  {/* Description */}
                  <span className="text-xs font-light text-slate-400">
                    {stat.sub}
                  </span>

                  {/* Bottom glow */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -bottom-8
                      left-1/2
                      h-16
                      w-24
                      -translate-x-1/2
                      rounded-full
                      bg-cyan-400/10
                      blur-2xl
                      transition-opacity
                      duration-300
                      group-hover:bg-cyan-400/20
                    "
                  />
                </div>
              )
            })}
          </div>

          {/* ==================== FEATURED TELEMETRY IMAGE ==================== */}
          <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl group">

            {/* Main Image */}
            <img
              src="/Assets/Featured Telemetry.jpg"
              alt="Global Freight Telemetry Network"
              className="w-full h-[380px] md:h-[480px] object-cover opacity-50 filter brightness-[0.75] contrast-[1.1] transition-all duration-700 group-hover:scale-105 group-hover:opacity-65"
            />

            {/* Image Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#060b13] via-transparent to-black/40"></div>

            {/* ==================== BOTTOM INFO OVERLAY ==================== */}
            <div className="absolute bottom-6 inset-x-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">

              {/* Information Card */}
              <div className="glass-dark-card p-5 rounded-2xl border-white/20 bg-slate-950/80 max-w-lg space-y-1 backdrop-blur-xl">

                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block">
                  INT. SHIPMENT TELEMETRY • AIR & SEA
                </span>

                <h3 className="text-lg font-bold text-white font-poppins">
                  Dynamic Synchronization from Sea Lanes to Sky Corridors
                </h3>

                <p className="text-xs text-slate-300 font-light">
                  From maritime docks, ocean vessels, and chartered freighters to
                  continental road fleets, providing continuous temperature &
                  location monitoring.
                </p>

              </div>

              {/* Vessel Status */}
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

      <div className='bg-[#EAF1FC]'>
      {/* ==================== 3. PURPOSE & VISION CARDS ==================== */}
      <section className="py-16  border-b border-slate-200">
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
      <section className="py-18 md:py-22 lg:py-24  text-slate-950 relative">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">

          {/* Section Heading */}
          <div className="space-y-3 mb-10 md:mb-12">

            <span className="text-[9px] sm:text-[10px] md:text-[11px] font-bold text-[#6B8298] uppercase tracking-[0.18em]">
              OPERATIONAL TENETS
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] font-black font-poppins tracking-tight text-[#071525] leading-[1.1]">
              The Core{" "}
              <span className="text-[#071525]">
                Values Governing
              </span>{" "}
              Every Mile
            </h2>

          </div>


          {/* Core Values Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">

            {coreValues.map((val, idx) => (

              <div key={idx} className="group relative">

                {/* ================= CARD ================= */}
                <div
                  className="
                    relative
                    min-h-[210px]
                    md:min-h-[220px]
                    lg:min-h-[225px]
                    p-6
                    md:p-7
                    rounded-xl

                    bg-white
                    border
                    border-[#E1E7EF]
                    shadow-[0_4px_14px_rgba(30,60,90,0.05)]

                    flex
                    flex-col
                    justify-between

                    transition-all
                    duration-300

                    hover:bg-[#06283D]
                    hover:border-[#5DF8D8]
                    hover:shadow-[0_0_25px_rgba(93,248,216,0.25)]
                    hover:-translate-y-1
                  "
                >

                  {/* ================= TOP CONTENT ================= */}
                  <div className="space-y-4">

                    {/* Number / Icon */}
                    <div
                      className="
                        w-10 h-10
                        md:w-11 md:h-11
                        rounded-lg

                        bg-[#EAF1FC]
                        border
                        border-[#DCE6F2]
                        text-[#315B78]

                        flex
                        items-center
                        justify-center

                        font-bold
                        text-sm
                        md:text-base

                        group-hover:bg-[#093C5D]
                        group-hover:border-[#5DF8D8]/40
                        group-hover:text-[#5DF8D8]
                        group-hover:shadow-[0_0_15px_rgba(93,248,216,0.2)]
                        group-hover:scale-105

                        transition-all
                        duration-300
                      "
                    >
                      {val.num}
                    </div>


                    {/* Title */}
                    <h3
                      className="
                        text-base
                        md:text-[17px]
                        lg:text-[18px]
                        font-bold
                        font-poppins

                        text-[#071525]

                        leading-tight

                        group-hover:text-white

                        transition-colors
                        duration-300
                      "
                    >
                      {val.title}
                    </h3>


                    {/* Description */}
                    <p
                      className="
                        text-[10px]
                        md:text-[11px]
                        lg:text-xs

                        text-[#718196]

                        leading-relaxed
                        font-light

                        group-hover:text-slate-300

                        transition-colors
                        duration-300
                      "
                    >
                      {val.desc}
                    </p>

                  </div>


                  {/* ================= BOTTOM ================= */}
                  <div
                    className="
                      pt-4
                      mt-5

                      border-t
                      border-[#E8EDF3]

                      group-hover:border-white/10

                      flex
                      items-center
                      justify-between

                      transition-colors
                      duration-300
                    "
                  >

                    <span
                      className="
                        text-[9px]
                        md:text-[10px]
                        font-bold

                        text-[#668098]

                        uppercase
                        tracking-wide

                        group-hover:text-[#5DF8D8]

                        transition-colors
                        duration-300
                      "
                    >
                      {val.link}
                    </span>


                    <ArrowUpRight
                      className="
                        w-4
                        h-4

                        text-[#7A91A5]

                        group-hover:text-[#5DF8D8]
                        group-hover:translate-x-1
                        group-hover:-translate-y-1

                        transition-all
                        duration-300
                      "
                    />

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>
      </div>

      {/* ==================== 5. A DECADE OF TECHNOLOGICAL EXPANSION (TIMELINE) ==================== */}    
      <section className="py-24 bg-white text-slate-950 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-8">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] sm:text-xs font-bold tracking-widest uppercase">
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
      <section className="py-20 md:py-24 lg:py-28 bg-[#EAF2FF] text-[#071525]">
        <div className="container mx-auto px-4 md:px-8 lg:px-10 space-y-12">

          {/* Section Heading */}
          <div className="text-center max-w-4xl mx-auto space-y-4">

            <span className="text-[10px] md:text-[11px] font-bold text-[#5B7892] uppercase tracking-[0.2em]">
              PROVEN OPERATIONAL BENCHMARKS
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-black font-poppins text-[#071525] tracking-tight leading-[1.08]">
              Why Multinationals Entrust Their Critical
              <br className="hidden md:block" />
              Freight to Afaq Al Bahr
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
              Institutional certifications, massive cargo volume visibility, and elite
              Tier-1 carrier integration.
            </p>
          </div>


          {/* 3 Metric Cards */}
          <div className="grid md:grid-cols-3 gap-5 lg:gap-6">

            {/* Card 1 */}
            <div className="bg-white rounded-2xl border border-[#DCE5F0] shadow-[0_6px_20px_rgba(20,50,80,0.06)] p-6 md:p-7 lg:p-8 min-h-[290px] flex flex-col">

              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-[#E7EFF8] flex items-center justify-center mb-6">
                <Check className="w-5 h-5 text-[#174D6C]" />
              </div>

              <span className="text-[10px] font-bold text-[#708398] uppercase tracking-[0.12em]">
                ANNUAL FREIGHT HANDLED
              </span>

              <div className="text-4xl md:text-[44px] lg:text-[46px] leading-none font-black text-[#071525] font-poppins mt-2">
                $2.4B+
              </div>

              <p className="text-[11px] md:text-xs text-[#718196] leading-relaxed font-light mt-5 max-w-md">
                High-value electronics, sensitive pharmaceuticals, and aerospace
                components safely routed across sea and sky corridors.
              </p>

              <div className="mt-auto pt-6 flex items-center gap-2 text-[10px] md:text-[11px] text-[#668098]">
                <Check className="w-4 h-4 text-[#4C718A]" />
                Fully insured cargo protection
              </div>
            </div>


            {/* Card 2 */}
            <div className="bg-white rounded-2xl border border-[#DCE5F0] shadow-[0_6px_20px_rgba(20,50,80,0.06)] p-6 md:p-7 lg:p-8 min-h-[290px] flex flex-col">

              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-[#062A49] flex items-center justify-center mb-6">
                <div className="w-5 h-5 rounded-full border-2 border-[#38E7D0]" />
              </div>

              <span className="text-[10px] font-bold text-[#708398] uppercase tracking-[0.12em]">
                LOSS PREVENTION
              </span>

              <div className="text-4xl md:text-[44px] lg:text-[46px] leading-none font-black text-[#071525] font-poppins mt-2">
                99.4%
              </div>

              <p className="text-[11px] md:text-xs text-[#718196] leading-relaxed font-light mt-5 max-w-md">
                Consistently outperforming industry averages with flawless container
                integrity and rigorous automated seal checks at terminal gates.
              </p>

              <div className="mt-auto pt-6 flex items-center gap-2 text-[10px] md:text-[11px] text-[#668098]">
                <Check className="w-4 h-4 text-[#4C718A]" />
                Claims-free performance benchmark
              </div>
            </div>


            {/* Card 3 */}
            <div className="bg-white rounded-2xl border border-[#DCE5F0] shadow-[0_6px_20px_rgba(20,50,80,0.06)] p-6 md:p-7 lg:p-8 min-h-[290px] flex flex-col">

              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-[#E7EFF8] flex items-center justify-center mb-6">
                <span className="text-xl text-[#174D6C]">◇</span>
              </div>

              <span className="text-[10px] font-bold text-[#708398] uppercase tracking-[0.12em]">
                CARRIER ALLIANCES
              </span>

              <div className="text-2xl md:text-[28px] lg:text-[30px] leading-tight font-black text-[#071525] font-poppins mt-2">
                Tier-1 Direct Slots
              </div>

              <p className="text-[11px] md:text-xs text-[#718196] leading-relaxed font-light mt-5 max-w-md">
                Guaranteed vessel and carrier capacity across global shipping
                alliances including Maersk, CMA CGM, HMM, and MSC.
              </p>

              {/* Alliance Tags */}
              <div className="mt-auto pt-5 grid grid-cols-2 gap-2.5">

                <span className="text-[9px] md:text-[10px] text-center font-medium text-[#526B81] bg-[#EAF1FC] rounded-lg px-2.5 py-2.5">
                  Maersk Direct
                </span>

                <span className="text-[9px] md:text-[10px] text-center font-medium text-[#526B81] bg-[#EAF1FC] rounded-lg px-2.5 py-2.5">
                  CMA CGM Line
                </span>

                <span className="text-[9px] md:text-[10px] text-center font-medium text-[#526B81] bg-[#EAF1FC] rounded-lg px-2.5 py-2.5">
                  MSC Express Space
                </span>

                <span className="text-[9px] md:text-[10px] text-center font-medium text-[#526B81] bg-[#EAF1FC] rounded-lg px-2.5 py-2.5">
                  Flexi Priority
                </span>

              </div>
            </div>

          </div>


          {/* Security Banner */}
          <div className="bg-[#032B43] rounded-2xl border border-[#071525] shadow-[0_8px_24px_rgba(4,25,40,0.2)] px-6 py-7 md:px-8 md:py-8">

            <div className="flex flex-col lg:flex-row items-center justify-between gap-7">

              {/* Left Content */}
              <div className="flex-1 space-y-3">

                <span className="text-[9px] md:text-[10px] uppercase font-bold text-[#45E7D2] tracking-[0.18em]">
                  HIGHEST OPERATIONAL SECURITY
                </span>

                <h3 className="text-xl md:text-2xl font-bold text-white font-poppins leading-tight">
                  ISO 9001, TAPA TSR Level 1 & C-TPAT Certified Facilities
                </h3>

                <p className="text-[10px] md:text-[11px] text-[#B8CBD7] font-light leading-relaxed max-w-2xl">
                  Every facility adheres to international customs enforcement standards,
                  automated biometric perimeter controls, and digital chain-of-custody protocols.
                </p>

              </div>


              {/* Certification Badges */}
              <div className="flex flex-wrap justify-center lg:justify-end gap-2.5 max-w-lg">
                {certificateItems.map((item) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setSelectedCertificate(item)}
                    className="group bg-[#0A4565] border border-[#155776] rounded-xl px-4 py-3 min-w-[145px] text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#5DE8D5] hover:shadow-lg hover:shadow-cyan-500/10"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-full bg-[#0B5C78] flex items-center justify-center">
                        <span className="text-[11px]" style={{ color: item.accent }}>
                          {item.title.includes('ISO') ? '✥' : '✓'}
                        </span>
                      </div>

                      <div>
                        <span className="text-[10px] font-bold text-white block">
                          {item.title}
                        </span>

                        <span className="text-[8px] text-[#A8C2D0]">
                          {item.subtitle}
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {selectedCertificate && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-[#021019]/50 px-3 py-6"
              onClick={() => setSelectedCertificate(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 20 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-[520px] overflow-hidden rounded-[24px] border border-white/10 bg-[#F8FBFF] shadow-[0_25px_70px_rgba(0,0,0,0.45)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(69,231,210,0.12),_transparent_42%)]" />

                <div className="relative p-4 sm:p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#2F6F8B]">
                        Certification Preview
                      </span>
                      <h3 className="mt-1 text-xl font-black text-[#071525] font-poppins">
                        {selectedCertificate.title}
                      </h3>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedCertificate(null)}
                      className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[10px] font-semibold text-slate-600 hover:bg-slate-100"
                    >
                      Close
                    </button>
                  </div>

                  <div className="rounded-[18px] border-[5px] border-[#0A4565] bg-white p-3 shadow-inner shadow-slate-200">
                    <div className="rounded-[14px] border-2 border-[#D9EAF3] bg-[linear-gradient(135deg,#F9FDFF_0%,#EAF6FF_100%)] p-4 sm:p-5">
                      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#3A6F8E]">
                            Afaq Al Bahr Shipping
                          </p>
                          <p className="mt-1 text-[10px] text-slate-500">Global Logistics & Freight Solutions</p>
                        </div>

                        <div
                          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#0A4565] bg-white text-base font-black"
                          style={{ color: selectedCertificate.accent }}
                        >
                          ✓
                        </div>
                      </div>

                      <div className="space-y-3 pt-4">
                        <div className="text-center">
                          <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#3A6F8E]">
                            Certificate of Compliance
                          </p>
                          <h4 className="mt-2 text-xl sm:text-2xl font-black text-[#071525] font-poppins">
                            {selectedCertificate.title}
                          </h4>
                        </div>

                        <div className="grid gap-2.5 sm:grid-cols-2">
                          <div className="rounded-xl border border-slate-200 bg-white px-3 py-2.5">
                            <p className="text-[8px] uppercase tracking-[0.2em] text-slate-500">Scope</p>
                            <p className="mt-1 text-xs font-semibold text-slate-800">{selectedCertificate.subtitle}</p>
                          </div>

                          <div className="rounded-xl border border-slate-200 bg-white px-3 py-2.5">
                            <p className="text-[8px] uppercase tracking-[0.2em] text-slate-500">Issued</p>
                            <p className="mt-1 text-xs font-semibold text-slate-800">{selectedCertificate.year}</p>
                          </div>
                        </div>

                        <div className="rounded-xl border border-[#C6E6E2] bg-[#F1FBFA] px-3 py-2.5 text-xs leading-relaxed text-slate-700">
                          {selectedCertificate.detail}
                        </div>

                        <div className="flex items-center justify-between border-t border-slate-200 pt-3">
                          <div>
                            <p className="text-[8px] uppercase tracking-[0.2em] text-slate-500">Authorized by</p>
                            <p className="mt-1 text-xs font-bold text-[#071525]">Operations & Compliance Board</p>
                          </div>

                          <div className="text-right">
                            <div className="mx-auto mb-1 h-8 w-8 rounded-full border-2 border-[#0A4565] bg-[#EAF9F9]" />
                            <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#3A6F8E]">Certified</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

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

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Ship, Plane, Truck, Globe, Package, Anchor, ArrowRight, X,
  Search, User, CheckCircle2, Activity, Zap, ShieldCheck, Headphones, Compass,
  BarChart3, Check, ArrowUpRight
} from 'lucide-react'

export function Home({ t, onOpenQuote }) {
  const [trackingId, setTrackingId] = useState('')
  const [trackingResult, setTrackingResult] = useState(null)
  const [isTrackingLoading, setIsTrackingLoading] = useState(false)
  const [calculatedRate, setCalculatedRate] = useState(null)
  const [rateLoading, setRateLoading] = useState(false)

  const handleTrackSubmit = (e) => {
    e.preventDefault()
    if (!trackingId.trim()) return

    setIsTrackingLoading(true)
    setTimeout(() => {
      setIsTrackingLoading(false)
      setTrackingResult({
        id: trackingId.toUpperCase(),
        status: 'In Transit',
        origin: 'Dubai Port (AE-DXB)',
        destination: 'Karachi Port (PK-KHI)',
        carrier: 'Afaq Al Bahr Telemetry Vessel #409',
        eta: 'Tomorrow at 14:30 PKT',
        cargoType: 'Temperature-Controlled Container (FCL)',
        temp: '4.2°C (Optimal)',
        progress: 78
      })
    }, 800)
  }

  const handleRateCalculate = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const weight = parseFloat(formData.get('weight')) || 1000

    setRateLoading(true)
    setTimeout(() => {
      setRateLoading(false)
      const baseRate = Math.round(weight * 1.85 + 450)
      setCalculatedRate({
        estimatedUSD: baseRate,
        transitDays: '4 - 6 Days',
        mode: formData.get('modality') || 'Ocean Freight (FCL/LCL)',
        origin: formData.get('origin') || 'Shanghai (CN-SHA)',
        destination: formData.get('destination') || 'Hamburg (DE-HAM)'
      })
    }, 700)
  }

  return (
    <div className="space-y-0">

      {/* HERO SECTION */}
      <section
        className="relative bg-dark-hero bg-cyber-grid min-h-[90vh] flex items-center pt-8 pb-16 overflow-hidden bg-cover bg-center pt-32 pb-24"
        style={{
          backgroundImage: "url('/Assets/Hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >

        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                {t.hero.telemetry}
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-poppins leading-[1.08] tracking-tight text-white">
                {t.hero.title_main}{' '}
                <span className="text-gradient-cyan">{t.hero.title_highlight}</span>{' '}
                {t.hero.title_end}
              </h1>

              <p className="text-base font-bold sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl">
                {t.hero.description}
              </p>

              {/* Tracking Box */}
              {/* <div className="pt-2">
                <form onSubmit={handleTrackSubmit} className="relative max-w-xl">
                  <div className="glass-dark-card p-2 rounded-2xl md:rounded-full flex flex-col md:flex-row items-center gap-2 border border-white/15 focus-within:border-cyan-400 transition-colors shadow-2xl">
                    <div className="flex items-center gap-3 px-4 w-full md:w-auto flex-1 py-2 md:py-0">
                      <Search className="w-5 h-5 text-slate-400 flex-shrink-0" />
                      <input
                        type="text"
                        value={trackingId}
                        onChange={(e) => setTrackingId(e.target.value)}
                        placeholder={t.hero.track_placeholder}
                        className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isTrackingLoading}
                      className="w-full md:w-auto bg-cyan-button px-6 py-3 rounded-xl md:rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 flex-shrink-0"
                    >
                      {isTrackingLoading ? (
                        <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <Package className="w-4 h-4" />
                          {t.hero.track_button}
                        </>
                      )}
                    </button>
                  </div>
                </form>
                <p className="text-[11px] text-slate-400 mt-3 font-medium px-2">
                  {t.hero.popular_searches}
                </p>
              </div> */}

              {/* Tracking Result */}
              {/* <AnimatePresence>
                {trackingResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="glass-dark-card p-5 rounded-2xl border-emerald-500/40 bg-slate-900/90 max-w-xl relative"
                  >
                    <button
                      onClick={() => setTrackingResult(null)}
                      className="absolute top-3 right-3 text-slate-400 hover:text-white"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold block">Tracking ID</span>
                        <span className="text-base font-bold text-emerald-400 font-mono">{trackingResult.id}</span>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                        {trackingResult.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="text-slate-400 block">Origin:</span>
                        <span className="font-semibold text-slate-200">{trackingResult.origin}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Destination:</span>
                        <span className="font-semibold text-slate-200">{trackingResult.destination}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">ETA:</span>
                        <span className="font-semibold text-cyan-300">{trackingResult.eta}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Temp Status:</span>
                        <span className="font-semibold text-emerald-400">{trackingResult.temp}</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence> */}

              {/* Action Buttons */}
              {/* <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={onOpenQuote}
                  className="bg-cyan-button px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-cyan-500/25 hover:scale-[1.02] transition-transform"
                >
                  {t.hero.btn_quote}
                </button>
                <a
                  href="#services"
                  className="px-7 py-3.5 rounded-full bg-white/5 border border-white/15 text-xs font-bold uppercase tracking-wider text-slate-200 hover:bg-white/10 hover:border-white/30 transition-all flex items-center gap-2"
                >
                  {t.hero.btn_services}
                  <ArrowRight className="w-4 h-4" />
                </a>
               </div> */}
            </div>

            {/* Right Column: Radar Widget */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 to-emerald-500 opacity-20 blur-xl"></div>
                <div className="relative glass-dark-card p-6 md:p-8 rounded-3xl border border-white/15 bg-[#091122]/90 space-y-6 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></div>
                      <div>
                        <h3 className="text-sm font-bold text-white font-poppins">{t.hero.radar_title}</h3>
                        <p className="text-[11px] text-slate-400">{t.hero.radar_subtitle}</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold border border-emerald-500/30">
                      ● 7.9% SPEED
                    </span>
                  </div>

                  <div className="space-y-4 pt-2">
                    <div className="flex justify-between items-center text-xs font-bold text-slate-300">
                      <span className="flex items-center gap-1.5 text-emerald-400"><span className="w-2 h-2 rounded-full bg-emerald-400"></span> Ocean</span>
                      <span className="flex items-center gap-1.5 text-emerald-400"><span className="w-2 h-2 rounded-full bg-emerald-400"></span> Ports</span>
                      <span className="flex items-center gap-1.5 text-cyan-400"><span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span> Destination</span>
                      <span className="flex items-center gap-1.5 text-slate-500"><span className="w-2 h-2 rounded-full bg-slate-600"></span> Final Delivery</span>
                    </div>

                    <div className="relative h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-[72%] bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-[10px] uppercase text-slate-400 font-semibold block mb-1">Est. Destination</span>
                      <span className="text-xs font-bold text-white">{t.hero.radar_dest}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-[10px] uppercase text-slate-400 font-semibold block mb-1">Int. Cargo Temp</span>
                      <span className="text-xs font-bold text-emerald-400">{t.hero.radar_temp}</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-white/10 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3">
                      <Ship className="w-5 h-5 text-cyan-400" />
                      <div>
                        <span className="font-bold text-slate-200 block">AFB Telemetry Stream #882</span>
                        <span className="text-[10px] text-slate-400">Live Satellite Uplink Syncing</span>
                      </div>
                    </div>
                    <Activity className="w-5 h-5 text-emerald-400 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {t.hero.stats.map((stat, idx) => (
              <div key={idx} className="glass-dark-card p-6 rounded-2xl border border-white/10 bg-slate-900/60 space-y-2 hover:border-cyan-500/40 transition-all">
                <span className="text-3xl font-black text-white font-poppins text-gradient-cyan">{stat.val}</span>
                <h4 className="text-sm font-bold text-slate-200">{stat.title}</h4>
                <p className="text-xs text-slate-400 font-light">{stat.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHY US SECTION */}
      <section className="py-24 bg-white text-slate-950 relative overflow-hidden border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-8 relative z-10">

          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-bold tracking-widest uppercase">
              {t.trust.badge}
            </span>

            <h2 className="text-3xl sm:text-5xl font-black font-poppins text-slate-950 tracking-tight">
              {t.trust.title}
            </h2>

            <p className="text-base text-slate-600 font-light leading-relaxed">
              {t.trust.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.trust.cards.map((card, idx) => {
              const icons = [
                <Zap className="w-6 h-6 text-cyan-600" />,
                <Compass className="w-6 h-6 text-emerald-600" />,
                <ShieldCheck className="w-6 h-6 text-cyan-600" />,
                <Headphones className="w-6 h-6 text-emerald-600" />
              ]

              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-3xl space-y-5 flex flex-col justify-between group border border-slate-200 shadow-sm hover:shadow-xl hover:border-cyan-300 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="space-y-4">

                    <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center group-hover:bg-cyan-500 transition-all duration-300">
                      <div className="group-hover:text-white transition-colors">
                        {icons[idx]}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold font-poppins text-slate-950">
                      {card.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  <a
                    href="#services"
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-800 group-hover:text-cyan-600 transition-colors pt-2"
                  >
                    {card.link}
                  </a>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* MULTIMODAL SERVICES PREVIEW */}
      <section id="services" className="py-24 text-white relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/Assets/corevalues-bg.jpg')" }}>
        {/* Dark overlay */}
        <div className="absolute inset-0 z-0 bg-slate-950/15"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 ">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-3 max-w-2xl">
               <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                {t.services.badge}
              </div>
              <h2 className="text-3xl sm:text-6xl font-black font-poppins tracking-tight text-white">
                Multimodal{" "}
                <span className="bg-gradient-to-r from-[#27C7E8] via-[#31C7C1] to-[#34D399] bg-clip-text text-transparent">
                  Freight
                </span>{" "}
                    Services
              </h2>
              <p className="text-base font-bold sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl">{t.services.subtitle}</p>
            </div>
            <a href="#estimator" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#34D399] transition-colors">
              {t.services.action_link}
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {t.services.cards.map((card, idx) => {
              const serviceIcons = [
                <Truck className="w-6 h-6 text-cyan-600" />,
                <Anchor className="w-6 h-6 text-emerald-600" />,
                <Plane className="w-6 h-6 text-cyan-600" />,
                <Package className="w-6 h-6 text-slate-800" />,
                <Zap className="w-6 h-6 text-emerald-600" />,
                <Globe className="w-6 h-6 text-cyan-600" />
              ]
              return (
          <div
            key={idx}
            className="relative group"
          >
            <div className="relative p-8 rounded-3xl space-y-5
                          flex flex-col justify-between
                          border border-white/20
                          bg-[#091122]/30
                          backdrop-blur-xl
                          shadow-2xl
                          transition-all duration-300
                          hover:border-cyan-400/60
                          hover:shadow-cyan-500/20
                          hover:scale-[1.02]">

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                  {serviceIcons[idx]}
                </div>

                <span className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                  {card.tag}
                </span>
              </div>

              <h3 className="text-2xl font-bold font-poppins text-white">
                {card.title}
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                {card.desc}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-300">
                {card.link}
              </span>

              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
            </div>

            </div>
          </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* WORKFLOW SECTION */}
      <section className="py-24 bg-white text-slate-950 relative border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-8">

          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold tracking-widest uppercase">
              {t.workflow.badge}
            </span>

            <h2 className="text-3xl sm:text-5xl font-black font-poppins text-slate-950 tracking-tight">
              {t.workflow.title}
            </h2>

            <p className="text-base text-slate-600 font-light leading-relaxed">
              {t.workflow.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.workflow.steps.map((step, idx) => {
              return (
                <div
                  key={idx}
                  className="group p-8 rounded-3xl transition-all duration-300 space-y-6 bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-cyan-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">

                    <span className="text-2xl font-black font-poppins text-slate-400 transition-colors duration-300 group-hover:text-cyan-600">
                      {step.step}
                    </span>

                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-cyan-50 border border-cyan-100 text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                      {idx === 0 && <BarChart3 className="w-5 h-5" />}
                      {idx === 1 && <Package className="w-5 h-5" />}
                      {idx === 2 && <ShieldCheck className="w-5 h-5" />}
                      {idx === 3 && <CheckCircle2 className="w-5 h-5" />}
                    </div>

                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold font-poppins text-slate-950">
                      {step.title}
                    </h3>

                    <p className="text-xs text-slate-600 font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ESTIMATOR SECTION */}
      <section
        id="estimator"
        className="py-24 bg-slate-950 text-slate-100 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Assets/estimator-bg1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-slate-900/60 backdrop-blur-sm border border-white/15 rounded-3xl p-8 md:p-12 lg:p-16 grid lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-6 space-y-6">
              <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-widest uppercase">
                {t.estimator.badge}
              </span>
              <h2 className="text-3xl sm:text-5xl font-black font-poppins text-white tracking-tight">{t.estimator.title}</h2>
              <p className="text-base text-slate-300 font-light leading-relaxed">{t.estimator.subtitle}</p>

              <div className="space-y-4 pt-4">
                {t.estimator.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs text-slate-300 font-medium">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <form onSubmit={handleRateCalculate} className="p-6 md:p-8 rounded-3xl border border-white/35 space-y-4 bg-white/5 backdrop-blur-md shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] uppercase text-slate-400 font-bold block mb-1.5">{t.estimator.form.origin}</label>
                    <input type="text" name="origin" required placeholder={t.estimator.form.origin_ph} className="w-full bg-white text-slate-900 px-4 py-3 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-400" />
                  </div>
                  <div>
                    <label className="text-[11px] uppercase text-slate-400 font-bold block mb-1.5">{t.estimator.form.destination}</label>
                    <input type="text" name="destination" required placeholder={t.estimator.form.dest_ph} className="w-full bg-white text-slate-900 px-4 py-3 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-400" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] uppercase text-slate-400 font-bold block mb-1.5">{t.estimator.form.modality}</label>
                    <select name="modality" className="w-full bg-white text-slate-900 px-4 py-3 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-400">
                      <option value="Ocean Freight (FCL/LCL)">Ocean Freight (FCL/LCL)</option>
                      <option value="Air Freight Charter">Air Freight Charter</option>
                      <option value="Road Fleet (FTL/LTL)">Road Fleet (FTL/LTL)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] uppercase text-slate-400 font-bold block mb-1.5">{t.estimator.form.weight}</label>
                    <input type="text" name="weight" required placeholder={t.estimator.form.weight_ph} className="w-full bg-white text-slate-900 px-4 py-3 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-400" />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] uppercase text-slate-400 font-bold block mb-1.5">{t.estimator.form.email}</label>
                  <input type="email" name="email" required placeholder={t.estimator.form.email_ph} className="w-full bg-white text-slate-900 px-4 py-3 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-400" />
                </div>

                <button
                  type="submit"
                  disabled={rateLoading}
                  className="w-full bg-[#051329] hover:bg-[#081e3f] text-white py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors border border-white/20 flex items-center justify-center gap-2"
                >
                  {rateLoading ? <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div> : t.estimator.form.submit}
                </button>

                {calculatedRate && (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-center space-y-2 mt-4">
                    <span className="text-[10px] text-emerald-400 uppercase font-bold tracking-widest block">Guaranteed Rate Result</span>
                    <div className="text-3xl font-black text-white font-poppins">${calculatedRate.estimatedUSD} USD</div>
                    <div className="text-xs text-slate-300">Transit Duration: <span className="font-bold text-emerald-400">{calculatedRate.transitDays}</span></div>
                  </motion.div>
                )}
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      {/* <section className="py-20 bg-gradient-to-r from-[#061224] via-[#0b203e] to-[#061224] text-white relative border-t border-white/10 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl space-y-6 relative z-10">
          <span className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-widest uppercase">
            {t.cta.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-poppins tracking-tight">{t.cta.title}</h2>
          <p className="text-base text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">{t.cta.subtitle}</p>
          <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
            <button onClick={onOpenQuote} className="bg-cyan-button px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider shadow-xl shadow-cyan-500/30 hover:scale-105 transition-transform">
              {t.cta.btn_primary}
            </button>
          </div>
        </div>
      </section> */}

    </div>
  )
}

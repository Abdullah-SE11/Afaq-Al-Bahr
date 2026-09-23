import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Ship, Plane, Truck, Globe, Package, Anchor, ArrowRight, X,
  Search, User, CheckCircle, CheckCircle2, Activity, Zap, ShieldCheck, Headphones, Compass,
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
      <section className="relative isolate min-h-screen overflow-hidden text-slate-50 flex flex-col">

        {/* ── Background: Hero.jpg with layered overlays ── */}
        <div className="absolute inset-0 -z-20">
          <img
            src="/Assets/Hero.jpg"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center"
          />
        </div>
        {/* Deep ocean gradient overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#020d18]/95 via-[#032a40]/85 to-[#041e30]/90" />
        {/* Radial teal glow – upper right */}
        <div className="absolute -z-10 top-0 right-0 w-[55vw] h-[55vw] max-w-[900px] max-h-[900px] rounded-full bg-[radial-gradient(circle,rgba(81,229,210,.18)_0%,transparent_65%)]" />
        {/* Subtle cyber-grid */}
        <div className="absolute inset-0 -z-10 opacity-80 [background-image:linear-gradient(rgba(67,201,213,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(67,201,213,.12)_1px,transparent_1px)] [background-size:52px_52px]" />
        {/* Bottom vignette fade */}
        <div className="absolute bottom-0 inset-x-0 h-48 -z-10 bg-gradient-to-t from-[#020d18] to-transparent" />

        {/* ── Main content ── */}
        <div className="relative flex-1 flex flex-col justify-center px-5 pt-28 pb-12 sm:px-10 lg:px-20 lg:pt-36 lg:pb-20">
          <div className="mx-auto w-full max-w-[1440px]">

            {/* Content grid */}
            <div className="grid items-center gap-10 xl:gap-16 lg:grid-cols-[1.1fr_0.9fr]">

              {/* ── LEFT: Text + tracking ── */}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {/* Live telemetry badge */}
                <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#51e5d2]/30 bg-[#051e30]/70 px-4 py-2 backdrop-blur-sm">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#51e5d2] opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#51e5d2]" />
                  </span>
                  <span className="text-[10px] font-extrabold uppercase tracking-[.1em] text-[#72f1df]">
                    {t.hero.telemetry}
                  </span>
                </div>

                {/* Headline */}
                <h1 className="max-w-[700px] text-5xl font-black leading-[0.95] tracking-[-0.04em] sm:text-6xl xl:text-[5.5rem] font-poppins">
                  <span className="inline text-white">{t.hero.title_main}</span>
                  <span className="block bg-gradient-to-r from-[#51e5d2] via-[#38bdf8] to-[#34d399] bg-clip-text text-transparent">
                    {t.hero.title_highlight}
                  </span>
                  <span className="text-white">{t.hero.title_end}</span>
                </h1>

                <p className="mt-6 max-w-[620px] text-sm leading-7 text-slate-300 sm:text-base">
                  {t.hero.description}
                </p>

                {/* Tracking bar */}
                <div className="mt-8 max-w-[680px]">
                  <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-2 shadow-2xl shadow-black/30 backdrop-blur-md sm:flex-row">
                    <div className="relative flex-1 flex items-center gap-3 rounded-xl bg-white px-4 py-3">
                      <Search className="h-4 w-4 shrink-0 text-slate-400" />
                      <input
                        id="hero-tracking-input"
                        aria-label="Cargo tracking number"
                        placeholder={t.hero.track_placeholder}
                        value={trackingId}
                        onChange={(e) => setTrackingId(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleTrackSubmit(e)}
                        className="min-w-0 flex-1 bg-transparent text-sm text-[#0f2e44] outline-none placeholder:text-slate-400"
                      />
                    </div>
                    <button
                      id="hero-track-btn"
                      onClick={handleTrackSubmit}
                      disabled={isTrackingLoading}
                      className="flex items-center justify-center gap-2 bg-[#5DF8D8] hover:bg-[#34D399] text-[#062b40] rounded-xl px-6 py-3.5 text-sm font-bold text-[#041e2e] shadow-lg shadow-cyan-500/25 transition-all hover:brightness-110 hover:shadow-cyan-400/40 active:scale-[0.97] disabled:opacity-70"
                    >
                      {isTrackingLoading
                        ? <div className="h-4 w-4 rounded-full border-2 border-[#041e2e] border-t-transparent animate-spin" />
                        : <><Anchor className="h-4 w-4" /> {t.hero.track_button}</>
                      }
                    </button>
                  </div>
                  <p className="mt-2.5 text-[11px] text-slate-400">
                    {t.hero.popular_searches}
                  </p>
                </div>

                {/* Tracking result */}
                <AnimatePresence>
                  {trackingResult && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-4 max-w-[680px] rounded-xl border border-[#51e5d2]/30 bg-[#041e30]/80 p-4 backdrop-blur-md text-xs space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#51e5d2]">#{trackingResult.id}</span>
                        <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-[10px] font-bold text-amber-400">{trackingResult.status}</span>
                        <button onClick={() => setTrackingResult(null)} className="text-slate-400 hover:text-white"><X className="h-3.5 w-3.5" /></button>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-white/10">
                        <div className="h-full rounded-full bg-gradient-to-r from-[#51e5d2] to-[#38bdf8]" style={{ width: `${trackingResult.progress}%` }} />
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-slate-300">
                        <span>From: <strong className="text-white">{trackingResult.origin}</strong></span>
                        <span>To: <strong className="text-white">{trackingResult.destination}</strong></span>
                        <span>ETA: <strong className="text-[#51e5d2]">{trackingResult.eta}</strong></span>
                        <span>Temp: <strong className="text-[#51e5d2]">{trackingResult.temp}</strong></span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* CTA buttons */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    id="hero-quote-btn"
                    onClick={onOpenQuote}
                    className="flex items-center gap-2 rounded-xl bg-[#5DF8D8] hover:bg-[#34D399] text-[#062b40] px-6 py-3.5 text-sm font-bold text-[#041e2e] shadow-lg shadow-cyan-500/25 transition-all hover:brightness-110 hover:shadow-cyan-400/40 active:scale-[0.97]"
                  >
                    {t.hero.btn_quote} <ArrowRight className="h-4 w-4" />
                  </button>
                  <a
                    href="#services"
                    id="hero-services-btn"
                    className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-slate-100 backdrop-blur-sm transition-all hover:border-[#51e5d2]/50 hover:bg-white/10"
                  >
                    {t.hero.btn_services} <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>

              {/* ── RIGHT: Telemetry radar card ── */}
            <motion.aside
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="
                w-full
                max-w-[430px]
                rounded-2xl
                border border-[#51e5d2]/20
                bg-[#03253A]/95
                p-4
                md:p-5
                shadow-[0_15px_45px_rgba(0,0,0,0.35)]
                backdrop-blur-xl
                overflow-hidden
                relative
              "
            >
              {/* Subtle background glow */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#51e5d2]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">

                {/* ================= HEADER ================= */}
                <div className="flex items-start justify-between gap-3">

                  <div className="flex items-start gap-2.5">

                    {/* Radar Icon */}
                    <div className="w-7 h-7 rounded-md bg-[#0A4058] border border-[#51e5d2]/20 flex items-center justify-center shrink-0">
                      <Activity className="w-4 h-4 text-[#51e5d2]" />
                    </div>

                    <div>
                      <h2 className="text-[11px] md:text-xs font-bold text-white leading-tight">
                        Global Dispatch Radar
                      </h2>

                      <p className="mt-0.5 text-[7px] md:text-[8px] text-slate-400">
                        Real-time fleet & cargo visibility
                      </p>
                    </div>

                  </div>


                  {/* Synced */}
                  <div
                    className="
                      flex items-center gap-1.5
                      rounded-full
                      border border-[#51e5d2]/20
                      bg-[#051E30]
                      px-2
                      py-1
                    "
                  >
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#51e5d2] opacity-60" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#51e5d2]" />
                    </span>

                    <span className="text-[7px] font-bold tracking-[0.08em] text-[#51e5d2]">
                      SYNCED
                    </span>
                  </div>

                </div>


                {/* ================= STATUS ROW ================= */}
                <div className="mt-3 flex items-center justify-between">

                  <div className="flex items-center gap-1.5">
                    <Zap className="w-3 h-3 text-[#51e5d2]" />

                    <span className="text-[7px] md:text-[8px] font-semibold text-slate-400 uppercase tracking-wide">
                      {t.hero.radar_speed || "LIVE TRACKING"}
                    </span>
                  </div>

                  <span className="text-[7px] md:text-[8px] text-[#51e5d2] font-bold">
                    STATUS: ON ROUTE
                  </span>

                </div>


                {/* ================= VESSEL INFO ================= */}
                <div className="mt-3 flex items-center justify-between">

                  <span className="text-[7px] md:text-[8px] font-bold text-slate-400 uppercase tracking-[0.06em]">
                    VESSEL: OCEAN ENDURANCE
                  </span>

                  <span className="text-[8px] font-black text-[#51e5d2]">
                    82%
                  </span>

                </div>


                {/* ================= PROGRESS LINE ================= */}
                <div className="relative mt-3">

                  {/* Background line */}
                  <div className="absolute left-[8%] right-[8%] top-[5px] h-[2px] bg-white/10 rounded-full" />

                  {/* Active progress */}
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "78%" }}
                    transition={{ duration: 1.4, delay: 0.5 }}
                    className="
                      absolute
                      left-[8%]
                      top-[5px]
                      h-[2px]
                      rounded-full
                      bg-gradient-to-r
                      from-[#51e5d2]
                      to-[#38bdf8]
                    "
                  />

                  {/* Stops */}
                  <div className="relative grid grid-cols-4">

                    {[
                      { name: "Busan", active: true },
                      { name: "Suez", active: true },
                      { name: "Rotterdam", active: true },
                      { name: "New York", active: false },
                    ].map((stop, idx) => (

                      <div
                        key={stop.name}
                        className="flex flex-col items-center"
                      >

                        {/* Stop Dot */}
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.6 + idx * 0.15,
                          }}
                          className={`
                            relative
                            z-10
                            w-2.5
                            h-2.5
                            rounded-full
                            border
                            ${
                              stop.active
                                ? "border-[#51e5d2] bg-[#51e5d2] shadow-[0_0_8px_rgba(81,229,210,0.6)]"
                                : "border-slate-600 bg-[#03253A]"
                            }
                          `}
                        />

                        <span
                          className={`
                            mt-2
                            text-[7px]
                            md:text-[8px]
                            font-semibold
                            ${
                              stop.active
                                ? "text-white"
                                : "text-slate-500"
                            }
                          `}
                        >
                          {stop.name}
                        </span>

                      </div>

                    ))}

                  </div>

                </div>


                {/* ================= INFORMATION BOXES ================= */}
                <div className="mt-4 grid grid-cols-2 gap-2.5">

                  {/* Destination */}
                  <div
                    className="
                      rounded-lg
                      border border-white/8
                      bg-[#041B2B]
                      px-3
                      py-2.5
                    "
                  >

                    <p className="text-[7px] text-slate-500 uppercase tracking-wider">
                      Est. Destination
                    </p>

                    <strong className="mt-1 block text-[9px] md:text-[10px] text-white font-bold">
                      {t.hero.radar_dest
                        ? t.hero.radar_dest.replace("Est. Destination: ", "")
                        : "Tomorrow • 06:40 UTC"}
                    </strong>

                  </div>


                  {/* Cargo Temperature */}
                  <div
                    className="
                      rounded-lg
                      border border-[#51e5d2]/15
                      bg-[#041B2B]
                      px-3
                      py-2.5
                    "
                  >

                    <p className="text-[7px] text-slate-500 uppercase tracking-wider">
                      Cargo Temp
                    </p>

                    <strong className="mt-1 block text-[9px] md:text-[10px] text-[#51e5d2] font-bold">
                      {t.hero.radar_temp
                        ? t.hero.radar_temp.replace("Int. Cargo Temp: ", "")
                        : "4°C (Optimal)"}
                    </strong>

                  </div>

                </div>


                {/* ================= DIVIDER ================= */}
                <div className="my-4 border-t border-white/8" />


                {/* ================= LIVE METRICS ================= */}
                <div className="grid grid-cols-3 gap-2">

                  {[
                    {
                      val: "2,130",
                      label: "Live Vessels",
                      icon: Ship,
                    },
                    {
                      val: "50+",
                      label: "Countries",
                      icon: Globe,
                    },
                    {
                      val: "99%",
                      label: "On-Time",
                      icon: CheckCircle,
                    },
                  ].map((metric) => {

                    const Icon = metric.icon;

                    return (
                      <div
                        key={metric.label}
                        className="
                          rounded-lg
                          border border-white/8
                          bg-white/[0.025]
                          py-2
                          text-center
                          transition-all
                          duration-300
                          hover:border-[#51e5d2]/20
                          hover:bg-[#51e5d2]/5
                        "
                      >

                        <Icon className="mx-auto mb-1 w-3 h-3 text-[#51e5d2]" />

                        <strong className="block text-[12px] md:text-[13px] font-black text-white">
                          {metric.val}
                        </strong>

                        <span className="text-[6px] md:text-[7px] font-semibold uppercase tracking-[0.08em] text-slate-500">
                          {metric.label}
                        </span>

                      </div>
                    );

                  })}

                </div>

              </div>
            </motion.aside>
            </div>

            {/* ── Stats strip ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-14 lg:mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {t.hero.stats.map((stat, idx) => {
                const statIcons = [Package, Globe, ShieldCheck, Headphones];
                const Icon = statIcons[idx % statIcons.length];

                return (
                  <article
                    key={stat.title}
                    className="group relative overflow-hidden rounded-2xl border border-[#51e5d2]/15 bg-white/5 backdrop-blur-sm p-5 transition-all duration-300 hover:border-[#51e5d2]/40 hover:bg-white/10 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 flex flex-col justify-between min-h-[140px]"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,rgba(81,229,210,0.1),transparent_70%)] pointer-events-none" />

                    {/* Top Row: Value & Icon Badge */}
                    <div className="flex items-start justify-between gap-3 relative z-10">
                      <strong className="block text-3xl font-black tracking-[-0.04em] text-white font-poppins">
                        {stat.val}
                      </strong>

                      <div className="w-10 h-10 rounded-xl bg-[#0a3652]/80 border border-[#51e5d2]/25 flex items-center justify-center text-[#51e5d2] group-hover:bg-[#5DF8D8] group-hover:text-[#06283D] group-hover:shadow-[0_0_16px_rgba(93,248,216,0.35)] group-hover:scale-105 transition-all duration-300 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Bottom: Title and Description */}
                    <div className="mt-3 relative z-10">
                      <p className="text-xs font-bold text-[#51e5d2] font-poppins">{stat.title}</p>
                      <small className="mt-0.5 text-[10px] text-slate-400 leading-relaxed block">{stat.desc}</small>
                    </div>
                  </article>
                );
              })}
            </motion.div>

          </div>
        </div>
      </section>

      {/* WHY US SECTION */}
      <section className="py-20 md:py-24 lg:py-28 bg-white text-slate-950 relative overflow-hidden border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-8 relative z-10">

          {/* ================= HEADER ================= */}
          <div className="text-center max-w-3xl mx-auto space-y-5 mb-12 md:mb-16">

            {/* Badge */}
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-[10px] sm:text-xs font-bold tracking-widest uppercase">
              {t.trust.badge}
            </span>


            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black font-poppins text-slate-950 tracking-tight leading-[1.1]">
              {t.trust.title}
            </h2>


            {/* Description */}
            <p className="text-sm sm:text-base md:text-[17px] text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
              {t.trust.subtitle}
            </p>

          </div>


          {/* ================= TRUST CARDS ================= */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">

            {t.trust.cards.map((card, idx) => {

              const icons = [
                <Zap className="w-5 h-5 md:w-6 md:h-6" />,
                <Compass className="w-5 h-5 md:w-6 md:h-6" />,
                <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />,
                <Headphones className="w-5 h-5 md:w-6 md:h-6" />
              ];

              return (

                <div
                  key={idx}
                  className="
                    group
                    p-6
                    md:p-7
                    lg:p-8
                    min-h-[245px]
                    rounded-2xl
                    md:rounded-3xl
                    space-y-5
                    flex
                    flex-col
                    justify-between

                    bg-white
                    border
                    border-slate-200
                    shadow-sm

                    hover:bg-[#06283D]
                    hover:border-[#5DF8D8]
                    hover:shadow-[0_0_25px_rgba(93,248,216,0.25)]
                    hover:-translate-y-1

                    transition-all
                    duration-300
                  "
                >

                  {/* ================= TOP CONTENT ================= */}
                  <div className="space-y-4">

                    {/* Icon */}
                    <div
                      className="
                        w-11 h-11
                        md:w-12 md:h-12
                        rounded-xl
                        md:rounded-2xl

                        bg-cyan-50
                        border
                        border-cyan-100

                        flex
                        items-center
                        justify-center

                        text-cyan-600

                        group-hover:bg-[#093C5D]
                        group-hover:border-[#5DF8D8]/40
                        group-hover:text-[#5DF8D8]
                        group-hover:scale-105
                        group-hover:shadow-[0_0_15px_rgba(93,248,216,0.2)]

                        transition-all
                        duration-300
                      "
                    >
                      {icons[idx]}
                    </div>


                    {/* Title */}
                    <h3
                      className="
                        text-lg
                        md:text-xl
                        lg:text-[21px]
                        font-bold
                        font-poppins
                        text-slate-950
                        leading-tight

                        group-hover:text-white

                        transition-colors
                        duration-300
                      "
                    >
                      {card.title}
                    </h3>


                    {/* Description */}
                    <p
                      className="
                        text-xs
                        sm:text-[13px]
                        md:text-sm
                        text-slate-600
                        leading-relaxed

                        group-hover:text-slate-300

                        transition-colors
                        duration-300
                      "
                    >
                      {card.desc}
                    </p>

                  </div>


                  {/* ================= BOTTOM LINK ================= */}
                  <a
                    href="#services"
                    className="
                      inline-flex
                      items-center
                      gap-2

                      text-[10px]
                      sm:text-[11px]
                      md:text-xs

                      font-bold
                      text-slate-800

                      group-hover:text-[#5DF8D8]

                      pt-3
                      border-t
                      border-slate-100

                      group-hover:border-white/10

                      transition-all
                      duration-300

                      group-hover:translate-x-1
                    "
                  >
                    {card.link}

                  </a>

                </div>

              );
            })}

          </div>

        </div>
      </section>

      {/* MULTIMODAL SERVICES PREVIEW */}
      <section
        id="services"
        className="py-20 md:py-24 bg-[#EAF1FC] text-slate-900"
      >
        <div className="container mx-auto px-4 md:px-8">

          {/* ================= HEADER ================= */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">

            <div className="space-y-4 max-w-3xl">

              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#D8E8FA] border border-[#C5DCF5] text-[#53718A] text-[10px] sm:text-[11px] font-bold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#3B7597]"></span>
                {t.services.badge}
              </div>


              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black font-poppins tracking-tight text-[#09152b] leading-[1.08]">
                Multimodal{" "}
                <span className="text-[#09152b]">
                  Freight
                </span>{" "}
                Services
              </h2>


              {/* Description */}
              <p className="text-sm sm:text-base md:text-[17px] text-slate-500 font-normal leading-relaxed max-w-2xl">
                {t.services.subtitle}
              </p>

            </div>


            {/* Action Link */}
            <a
            
              href="#estimator"
              className="inline-flex items-center gap-2.5 text-sm sm:text-base font-bold text-slate-700 hover:text-[#3B7597] transition-colors shrink-0 "
            >
              {t.services.action_link}

              {/* <ArrowUpRight className="w-5 h-5" /> */}
            </a>

          </div>


          {/* ================= SERVICE CARDS ================= */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {t.services.cards.map((card, idx) => {

              const serviceIcons = [
                <Truck className="w-6 h-6 text-[#3678B8]" />,
                <Anchor className="w-6 h-6 text-[#3678B8]" />,
                <Plane className="w-6 h-6 text-[#20BFA9]" />,
                <Package className="w-6 h-6 text-[#3678B8]" />,
                <Zap className="w-6 h-6 text-[#20BFA9]" />,
                <Globe className="w-6 h-6 text-[#3678B8]" />
              ];

              const iconBackgrounds = [
                "bg-[#DCEBFF]",
                "bg-[#DCEBFF]",
                "bg-[#CFF9F1]",
                "bg-[#DCEBFF]",
                "bg-[#CFF9F1]",
                "bg-[#DCEBFF]"
              ];

              return (

                <div
                  key={idx}
                  className="
                    group
                    bg-white
                    rounded-2xl
                    border border-white
                    p-6
                    md:p-7
                    min-h-[260px]
                    flex flex-col
                    justify-between
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1.5
                    hover:shadow-xl
                    hover:border-[#C9DDF8]
                  "
                >

                  {/* Top Content */}
                  <div className="space-y-5">

                    {/* Icon + Tag */}
                    <div className="flex items-center justify-between gap-4">

                      <div
                        className={`
                          w-12 h-12
                          rounded-xl
                          ${iconBackgrounds[idx]}
                          flex items-center justify-center
                          transition-transform duration-300
                          group-hover:scale-105
                        `}
                      >
                        {serviceIcons[idx]}
                      </div>


                      {/* Tag */}
                      <span className="px-3 py-1.5 rounded-full bg-[#EEF3FA] text-[9px] sm:text-[10px] font-bold text-[#53718A] uppercase tracking-wide">
                        {card.tag}
                      </span>

                    </div>


                    {/* Title */}
                    <h3 className="text-xl md:text-[22px] font-bold font-poppins text-[#09152b] leading-tight">
                      {card.title}
                    </h3>


                    {/* Description */}
                    <p className="text-xs sm:text-[13px] md:text-sm text-slate-500 leading-relaxed font-normal">
                      {card.desc}
                    </p>

                  </div>


                  {/* Bottom */}
                  <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">

                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wide">
                      {card.link}
                    </span>

                    <ArrowUpRight
                      className="
                        w-5 h-5
                        text-[#53718A]
                        group-hover:text-[#20BFA9]
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                        transition-all
                        duration-300
                      "
                    />

                  </div>

                </div>

              );
            })}

          </div>

        </div>
      </section>

      {/* WORKFLOW SECTION */}
      <section className="py-20 md:py-24 lg:py-28 bg-white text-slate-950 relative border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-8">

          {/* ================= HEADER ================= */}
          <div className="text-center max-w-3xl mx-auto space-y-5 mb-12 md:mb-16">

            {/* Badge */}
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] sm:text-xs font-bold tracking-widest uppercase">
              {t.workflow.badge}
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black font-poppins text-slate-950 tracking-tight leading-[1.1]">
              {t.workflow.title}
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-[17px] text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
              {t.workflow.subtitle}
            </p>

          </div>


          {/* ================= WORKFLOW CARDS ================= */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">

            {t.workflow.steps.map((step, idx) => {
              return (

                <div
                  key={idx}
                  className="
                    group
                    relative
                    p-6
                    md:p-7
                    lg:p-8
                    min-h-[245px]
                    rounded-2xl
                    md:rounded-3xl
                    transition-all
                    duration-300
                    flex
                    flex-col
                    justify-between
                    bg-white
                    border
                    border-slate-200
                    shadow-sm

                    hover:bg-[#06283D]
                    hover:border-[#5DF8D8]
                    hover:shadow-[0_0_25px_rgba(93,248,216,0.25)]
                    hover:-translate-y-1
                  "
                >

                  {/* ================= TOP ROW ================= */}
                  <div className="flex items-center justify-between">

                    {/* Step Number */}
                    <span
                      className="
                        w-10
                        h-10
                        md:w-11
                        md:h-11
                        rounded-full
                        flex
                        items-center
                        justify-center
                        text-lg
                        md:text-xl
                        font-black
                        font-poppins
                        bg-transparent
                        text-slate-300

                        group-hover:bg-[#5DF8D8]
                        group-hover:text-[#06283D]
                        group-hover:shadow-[0_0_18px_rgba(93,248,216,0.45)]

                        transition-all
                        duration-300
                      "
                    >
                      {step.step}
                    </span>


                    {/* Icon */}
                    <div
                      className="
                        w-11
                        h-11
                        md:w-12
                        md:h-12
                        rounded-xl
                        flex
                        items-center
                        justify-center

                        bg-cyan-50
                        border
                        border-cyan-100
                        text-cyan-600

                        group-hover:bg-[#093C5D]
                        group-hover:border-[#5DF8D8]/40
                        group-hover:text-[#5DF8D8]
                        group-hover:shadow-[0_0_15px_rgba(93,248,216,0.2)]
                        group-hover:scale-105

                        transition-all
                        duration-300
                      "
                    >

                      {idx === 0 && (
                        <BarChart3 className="w-5 h-5 md:w-6 md:h-6" />
                      )}

                      {idx === 1 && (
                        <Package className="w-5 h-5 md:w-6 md:h-6" />
                      )}

                      {idx === 2 && (
                        <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />
                      )}

                      {idx === 3 && (
                        <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />
                      )}

                    </div>

                  </div>


                  {/* ================= CONTENT ================= */}
                  <div className="space-y-3 md:space-y-4 mt-8">

                    {/* Title */}
                    <h3
                      className="
                        text-lg
                        md:text-xl
                        lg:text-[21px]
                        font-bold
                        font-poppins
                        text-slate-950
                        leading-tight

                        group-hover:text-white

                        transition-colors
                        duration-300
                      "
                    >
                      {step.title}
                    </h3>


                    {/* Description */}
                    <p
                      className="
                        text-xs
                        sm:text-[13px]
                        md:text-sm
                        text-slate-600
                        font-light
                        leading-relaxed

                        group-hover:text-slate-300

                        transition-colors
                        duration-300
                      "
                    >
                      {step.desc}
                    </p>

                  </div>

                </div>

              );
            })}

          </div>

        </div>
      </section>

      {/* ESTIMATOR SECTION */}
      <section
        id="estimator"
        className="py-14 md:py-18 bg-[#F4F6FA] text-slate-900"
      >
        <div className="container mx-auto px-4 md:px-8">

          {/* Main Card */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-xl p-6 md:p-8 lg:p-9 grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* ================= LEFT CONTENT ================= */}
            <div className="lg:col-span-6 space-y-5">

              {/* Badge */}
              <span className="inline-flex items-center px-3 py-1.5 rounded-md bg-[#EEF4FF] border border-[#D9E5F7] text-[#53718A] text-[9px] md:text-[10px] font-bold tracking-widest uppercase">
                {t.estimator.badge}
              </span>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-[42px] font-black font-poppins text-[#111827] tracking-tight leading-[1.1]">
                {t.estimator.title}
              </h2>

              {/* Description */}
              <p className="text-sm md:text-[15px] text-slate-500 font-normal leading-relaxed max-w-xl">
                {t.estimator.subtitle}
              </p>


              {/* Bullet Points */}
              <div className="space-y-3 pt-2">

                {t.estimator.bullets.map((bullet, idx) => (

                  <div
                    key={idx}
                    className="flex items-center gap-3"
                  >

                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>

                    <span className="text-[11px] md:text-xs text-slate-500 font-medium">
                      {bullet}
                    </span>

                  </div>

                ))}

              </div>

            </div>


            {/* ================= FORM ================= */}
            <div className="lg:col-span-6">

              <form
                onSubmit={handleRateCalculate}
                className="p-5 md:p-6 rounded-xl border border-[#DCE5F2] space-y-4 bg-[#EEF4FF] shadow-sm"
              >

                {/* Origin + Destination */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <div>

                    <label className="text-[9px] md:text-[10px] uppercase text-slate-500 font-bold block mb-1.5">
                      {t.estimator.form.origin}
                    </label>

                    <input
                      type="text"
                      name="origin"
                      required
                      placeholder={t.estimator.form.origin_ph}
                      className="w-full h-10 bg-white border border-slate-200 text-slate-800 px-3.5 rounded-md text-[11px] md:text-xs font-medium focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400"
                    />

                  </div>


                  <div>

                    <label className="text-[9px] md:text-[10px] uppercase text-slate-500 font-bold block mb-1.5">
                      {t.estimator.form.destination}
                    </label>

                    <input
                      type="text"
                      name="destination"
                      required
                      placeholder={t.estimator.form.dest_ph}
                      className="w-full h-10 bg-white border border-slate-200 text-slate-800 px-3.5 rounded-md text-[11px] md:text-xs font-medium focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400"
                    />

                  </div>

                </div>


                {/* Modality + Weight */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <div>

                    <label className="text-[9px] md:text-[10px] uppercase text-slate-500 font-bold block mb-1.5">
                      {t.estimator.form.modality}
                    </label>

                    <select
                      name="modality"
                      className="w-full h-10 bg-white border border-slate-200 text-slate-800 px-3.5 rounded-md text-[11px] md:text-xs font-medium focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400"
                    >
                      <option value="Ocean Freight (FCL/LCL)">
                        Ocean Freight (FCL/LCL)
                      </option>

                      <option value="Air Freight Charter">
                        Air Freight Charter
                      </option>

                      <option value="Road Fleet (FTL/LTL)">
                        Road Fleet (FTL/LTL)
                      </option>
                    </select>

                  </div>


                  <div>

                    <label className="text-[9px] md:text-[10px] uppercase text-slate-500 font-bold block mb-1.5">
                      {t.estimator.form.weight}
                    </label>

                    <input
                      type="text"
                      name="weight"
                      required
                      placeholder={t.estimator.form.weight_ph}
                      className="w-full h-10 bg-white border border-slate-200 text-slate-800 px-3.5 rounded-md text-[11px] md:text-xs font-medium focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400"
                    />

                  </div>

                </div>


                {/* Email */}
                <div>

                  <label className="text-[9px] md:text-[10px] uppercase text-slate-500 font-bold block mb-1.5">
                    {t.estimator.form.email}
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={t.estimator.form.email_ph}
                    className="w-full h-10 bg-white border border-slate-200 text-slate-800 px-3.5 rounded-md text-[11px] md:text-xs font-medium focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400"
                  />

                </div>


                {/* Calculate Button */}
                <button
                  type="submit"
                  disabled={rateLoading}
                  className="w-full h-11 bg-[#062B43] hover:bg-[#0A3D5C] text-white rounded-md text-[10px] md:text-xs font-bold uppercase tracking-wider transition-all border border-[#062B43] flex items-center justify-center gap-2 shadow-sm"
                >

                  {rateLoading ? (
                    <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      {t.estimator.form.submit}

                      <span className="text-[10px]">▣</span>
                    </>
                  )}

                </button>


                {/* Calculated Rate */}
                {calculatedRate && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.95
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1
                    }}
                    className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-center space-y-1.5 mt-2"
                  >

                    <span className="text-[9px] text-emerald-600 uppercase font-bold tracking-widest block">
                      Guaranteed Rate Result
                    </span>

                    <div className="text-2xl font-black text-slate-900 font-poppins">
                      ${calculatedRate.estimatedUSD} USD
                    </div>

                    <div className="text-[10px] text-slate-500">
                      Transit Duration:{" "}
                      <span className="font-bold text-emerald-600">
                        {calculatedRate.transitDays}
                      </span>
                    </div>

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


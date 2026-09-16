import React, { useState } from 'react'
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  CheckCircle2,
  Ship,
  Activity,
  Building2,
  Globe2,
  Radio,
  ArrowUpRight,
} from 'lucide-react'

export function Contact({ t }) {
  const [activeFaq, setActiveFaq] = useState(null)
  const [selectedHub, setSelectedHub] = useState(0)

  const directLines = [
    { label: "Dispatch Line 1 (Dubai)", num: "056 826 2134", wa: "971568262134" },
    { label: "Dispatch Line 2 (Dubai)", num: "055 935 9616", wa: "971559359616" },
    { label: "Dispatch Line 3 (Dubai)", num: "055 536 5465", wa: "971555365465" }
  ]

  const hubsData = [
    {
      name: 'New York Hub',
      code: 'TER-UNY-04',
      status: 'Berths Open',
      title: 'New York Operations',
      desc: 'Direct coastal access point handling Tier-1 transatlantic maritime routes, high-speed rail transfer, and direct customs bonded warehouses.',
      volume: '124,000 TEU / Mo',
      dwell: '14.2 Hours',
      manager: 'Elena Rostova',
      coord: 'SYS: 40.7128°N, 74.0060°W'
    },
    {
      name: 'Rotterdam Port',
      code: 'TER-NLD-02',
      status: 'High Velocity',
      title: 'Rotterdam Gateway',
      desc: 'Deep-water berths accommodating largest container vessels, automated robotic gantry systems, and European inland barge connections.',
      volume: '310,000 TEU / Mo',
      dwell: '11.8 Hours',
      manager: 'Dirk Van Dijk',
      coord: 'SYS: 51.9244°N, 4.4777°E'
    },
    {
      name: 'Singapore Gateway',
      code: 'TER-SGP-01',
      status: 'Optimal Flow',
      title: 'Singapore Maritime Hub',
      desc: 'Strategic Indo-Pacific transshipment epicenter operating 24/7 smart IoT berthing corridors and rapid customs clearance.',
      volume: '480,000 TEU / Mo',
      dwell: '9.4 Hours',
      manager: 'Wei Zhang',
      coord: 'SYS: 1.3521°N, 103.8198°E'
    },
    {
      name: 'Dubai Terminal',
      code: 'TER-DXB-04',
      status: 'HQ Command',
      title: 'Dubai Maritime City HQ',
      desc: 'Global central dispatch center, multimodal maritime-air sea hub connecting Middle East, South Asia, Africa, and European trade corridors.',
      volume: '295,000 TEU / Mo',
      dwell: '10.5 Hours',
      manager: 'Capt. Tariq Al-Mansoor',
      coord: 'SYS: 25.276987°N, 55.296249°E'
    }
  ]

  const faqs = [
    {
      q: "How can I track my shipment status in real time?",
      a: "Enter your Container or Bill of Lading (B/L) tracking code into our home page tracking portal. Our satellite telemetry system updates cargo location, temperature, and estimated arrival every 15 minutes."
    },
    {
      q: "What documents are required for UAE to Pakistan cargo transit?",
      a: "Our customs team will handle your Bill of Lading, Commercial Invoice, Packing List, Certificate of Origin, and Customs Export Clearance. Simply provide your shipment details, and our customs brokers will process the paperwork."
    },
    {
      q: "Do you provide temperature-controlled reefer containers?",
      a: "Yes! We operate multi-temperature refrigerated trailers and reefers equipped with IoT thermal sensors maintaining precision temperatures from -25°C to +25°C."
    },
    {
      q: "What is your typical transit time for sea freight?",
      a: "Ocean container sailings between UAE ports and Karachi average 4 to 6 days. Express air cargo charter takes 24 to 48 hours."
    }
  ]

  return (
    <div className="min-h-screen bg-[#f4f7fb] text-slate-950">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#06334d] text-white">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(93,248,216,0.14),transparent_40%),radial-gradient(circle_at_20%_80%,rgba(111,209,215,0.12),transparent_40%)]"></div>

        <div className="container mx-auto px-4 md:px-8 py-16 md:py-24 relative z-10">
          <div className="max-w-5xl space-y-6">

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                DIRECT DISPATCH & TELEMETRY
                <span className="text-slate-400">•</span>
                Avg. Response Time: 42 mins
              </div>
        </div>

            <h2 className="text-3xl sm:text-6xl font-black font-poppins tracking-tight text-white">
              Let's Move{" "}
              <span className="bg-gradient-to-r from-[#27C7E8] via-[#31C7C1] to-[#34D399] bg-clip-text text-transparent">
                Your Cargo
              </span>{" "}
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-3xl">
              Reach our international freight specialists. Get an instant freight
              quote, access precision intermodal routes, or speak directly to a
              regional operations manager.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              {[
                ['LIVE DUTY HUB', 'New York Hub (EST)'],
                ['ACTIVE FREIGHTERS', '142 In-Transit'],
                ['CUSTOMS CLEARANCE', '99.84% Green Stream'],
                ['INSTANT QUOTES', 'Available 24/7'],
              ].map(([label, value], idx) => (
                <div
                  key={idx}
                  className="bg-[#0b4564]/80 border border-white/15 rounded-2xl px-5 py-4 shadow-lg backdrop-blur-md"
                >
                  <span className="block text-[11px] sm:text-xs uppercase tracking-wider text-slate-300 font-bold">
                    {label}
                  </span>
                  <span className="block text-sm sm:text-base md:text-lg font-black text-white mt-1.5 font-poppins">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ================= MAIN CONTACT AREA ================= */}
      <section className="py-20 md:py-28 bg-[#f4f7fb]">
  <div className="container mx-auto px-4 md:px-8">

    <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">

      {/* ================= WHATSAPP CONTACT ================= */}
      <div className="lg:col-span-7">
        <div className="relative">

          {/* Glow */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#5DF8D8] to-[#6FD1D7] opacity-20 blur-xl"></div>

          {/* WhatsApp Card */}
          <div className="relative bg-[#06334d] rounded-3xl p-7 md:p-9 lg:p-10 border border-[#3B7597]/50 shadow-2xl">

            {/* Header */}
            <div className="flex items-center gap-4 md:gap-5 mb-7">

              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#25D366] flex items-center justify-center shadow-lg shadow-emerald-500/30 shrink-0">

                <svg
                  viewBox="0 0 24 24"
                  className="w-8 h-8 md:w-9 md:h-9 fill-white"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.67-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>

              </div>

              <div>
                <span className="text-xs sm:text-sm uppercase tracking-widest text-[#5DF8D8] font-bold">
                  DIRECT COMMUNICATION
                </span>

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black font-poppins text-white leading-tight mt-1">
                  Contact Us on WhatsApp
                </h2>
              </div>

            </div>


            {/* Main Text */}
            <div className="space-y-3 mb-7">

              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white font-poppins">
                Speak directly with Afaq Al Bahr Shipping
              </h3>

              <p className="text-sm md:text-base lg:text-lg text-slate-300 leading-relaxed">
                Get quick assistance with freight inquiries, shipping quotes,
                shipment tracking, cargo details, and logistics support.
              </p>

            </div>


            {/* WhatsApp Numbers */}
            <div className="space-y-4">

              {directLines.map((line, idx) => (
                <a
                  key={idx}
                  href={`https://wa.me/${line.wa}?text=Hello%20Afaq%20Al%20Bahr%20Shipping,%20I%20have%20a%20freight%20inquiry`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 md:p-5 rounded-2xl bg-white/10 border border-white/10 hover:bg-[#25D366]/15 hover:border-[#25D366]/60 transition-all duration-300 hover:scale-[1.02]"
                >

                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-300 shrink-0">

                      <svg
                        viewBox="0 0 24 24"
                        className="w-6 h-6 fill-white"
                        aria-hidden="true"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.67-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      </svg>

                    </div>


                    <div>
                      <span className="block text-xs sm:text-sm uppercase tracking-wider text-slate-400 font-bold">
                        {line.label}
                      </span>

                      <span className="block text-lg sm:text-xl md:text-2xl font-black text-white font-poppins">
                        {line.num}
                      </span>
                    </div>

                  </div>


                  <span className="text-[#5DF8D8] text-xl md:text-2xl font-bold group-hover:translate-x-1.5 transition-transform">
                    →
                  </span>

                </a>
              ))}

            </div>


            {/* Bottom Information */}
            <div className="mt-7 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">

              <div>
                <span className="block text-xs uppercase tracking-widest text-slate-400 font-bold">
                  Response Channel
                </span>

                <span className="text-sm md:text-base font-semibold text-slate-200">
                  Fast WhatsApp Assistance (Under 15 Mins)
                </span>
              </div>


              <div className="flex items-center gap-2 text-sm font-bold text-[#5DF8D8]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse"></span>
                Available for Inquiries
              </div>

            </div>

          </div>
        </div>
      </div>


      {/* ================= RIGHT INFORMATION ================= */}
      <div className="lg:col-span-5 space-y-5">


        {/* ================= EMERGENCY ================= */}
        <div className="bg-[#06334d] text-white rounded-3xl p-6 md:p-7 shadow-2xl border border-[#3B7597]/50 space-y-4">

          <div className="flex items-center justify-between gap-3">

            <span className="px-3 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 text-xs font-bold uppercase tracking-wider">
              ● Active 24/7 Dispatch
            </span>

            <span className="text-xs text-[#5DF8D8] font-bold tracking-wide">
              Priority Routing
            </span>

          </div>


          <h3 className="text-xl md:text-2xl font-bold font-poppins text-white">
            Emergency 24/7 Dispatch Hotline
          </h3>


          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
            Live escalation for in-transit maritime re-routing, air expedited
            diversions, and port clearance bottlenecks.
          </p>


          <a
            href={`tel:${directLines[0].num}`}
            className="inline-flex items-center gap-3 w-full justify-center bg-[#5DF8D8] hover:bg-[#34D399] text-[#062b40] px-5 py-3.5 rounded-2xl text-sm md:text-base font-black transition-all hover:scale-[1.02] shadow-lg shadow-emerald-500/20"
          >
            <Phone className="w-5 h-5" />
            {directLines[0].num}
          </a>

        </div>


        {/* ================= COMMUNICATION ================= */}
        <div className="bg-white rounded-3xl p-6 md:p-7 border border-slate-200 shadow-xl space-y-4">

          <div className="flex items-center gap-4">

            <div className="w-11 h-11 rounded-2xl bg-[#eaf5fa] text-[#06334d] flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-[#06334d]" />
            </div>


            <div>
              <span className="text-xs uppercase tracking-wider text-slate-500 font-bold block">
                Communication Arrays
              </span>

              <h3 className="text-lg md:text-xl font-bold text-slate-900 font-poppins">
                Freight Inquiries & Tenders
              </h3>
            </div>

          </div>


          <div className="space-y-3">

            <div className="bg-[#eef3fd] rounded-2xl p-4 flex items-center justify-between hover:bg-[#e4ecfa] transition-colors">

              <div>
                <span className="block text-xs text-slate-500 font-medium">
                  Rate Quotes & RFQs
                </span>

                <span className="text-sm sm:text-base font-bold text-slate-900 font-poppins">
                  quotes@afaqalbahr.com
                </span>
              </div>

              <Mail className="w-5 h-5 text-[#06334d]" />

            </div>


            <div className="bg-[#eef3fd] rounded-2xl p-4 flex items-center justify-between hover:bg-[#e4ecfa] transition-colors">

              <div>
                <span className="block text-xs text-slate-500 font-medium">
                  Customer & Port Support
                </span>

                <span className="text-sm sm:text-base font-bold text-slate-900 font-poppins">
                  support@afaqalbahr.com
                </span>
              </div>

              <Globe2 className="w-5 h-5 text-[#06334d]" />

            </div>

          </div>

        </div>


        {/* ================= COMMAND CENTER ================= */}
        <div className="bg-white rounded-3xl p-6 md:p-7 border border-slate-200 shadow-xl space-y-4">

          <div className="flex items-center gap-4">

            <div className="w-11 h-11 rounded-2xl bg-[#eaf5fa] text-[#06334d] flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5 text-[#06334d]" />
            </div>


            <div>
              <span className="text-xs uppercase tracking-wider text-slate-500 font-bold block">
                Command Center
              </span>

              <h3 className="text-lg md:text-xl font-bold text-slate-900 font-poppins">
                Global Operations HQ
              </h3>
            </div>

          </div>


          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Terminal 4, Dubai Maritime City, Port Rashid, Dubai, United Arab Emirates
          </p>


          <div className="bg-[#eef3fd] rounded-2xl p-4 space-y-2.5">

            <div className="flex items-center justify-between text-xs sm:text-sm gap-3">

              <span className="text-slate-500 font-medium">
                Customer Service
              </span>

              <span className="font-bold text-slate-900 text-right">
                Mon - Sat: 07:00 - 21:00
              </span>

            </div>


            <div className="flex items-center justify-between text-xs sm:text-sm gap-3">

              <span className="text-slate-500 font-medium">
                Cargo Terminal
              </span>

              <span className="font-bold text-emerald-600 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                24/7 / 365 Days
              </span>

            </div>

          </div>

        </div>


      </div>

    </div>

  </div>
</section>

      {/* ================= TELEMETRY SECTION ================= */}
      <section className="py-20 md:py-24 bg-[#073d5a] text-white relative overflow-hidden">

        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_30%,#6FD1D7,transparent_30%),radial-gradient(circle_at_80%_70%,#5DF8D8,transparent_30%)]"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">

            <div>
              <span className="text-xs sm:text-sm uppercase tracking-widest text-[#5DF8D8] font-bold">
                GEOSPATIAL TELEMETRY
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-poppins mt-2">
                Interactive Regional Logistics Hubs
              </h2>

              <p className="text-sm sm:text-base text-slate-200 mt-3 max-w-2xl leading-relaxed">
                Select a core maritime terminal to view channel throughput,
                real-time weather clearance, and docking status.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {hubsData.map((hub, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedHub(idx)}
                  className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md ${
                    selectedHub === idx
                      ? 'bg-[#5DF8D8] text-[#062b40] scale-105 shadow-cyan-400/20'
                      : 'bg-[#052e46] text-slate-200 hover:bg-[#0b4c68]'
                  }`}
                >
                  {hub.name}
                </button>
              ))}
            </div>

          </div>


          <div className="grid lg:grid-cols-12 gap-6">

            {/* Map */}
            <div className="lg:col-span-7 xl:col-span-8 bg-[#052f48] rounded-3xl border border-white/15 p-6 shadow-2xl">

              <div className="flex justify-between items-center mb-5">
                <span className="text-xs sm:text-sm uppercase tracking-wider text-slate-200 font-bold flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#5DF8D8] animate-pulse"></span>
                  LIVE SATELLITE TELEMETRY
                </span>

                <span className="text-xs sm:text-sm text-[#5DF8D8] font-mono font-bold">
                  {hubsData[selectedHub].coord}
                </span>
              </div>

              <div className="h-72 sm:h-80 md:h-96 rounded-2xl bg-[#0b3b55] relative overflow-hidden border border-white/10">

                {/* Map grid background */}
                <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_center,#6FD1D7,transparent_60%)]"></div>

                {/* Radar sweep effect */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_45%,rgba(93,248,216,0.08)_50%,transparent_55%)] animate-pulse"></div>

                {/* Hub Pin 1: New York */}
                <div
                  onClick={() => setSelectedHub(0)}
                  className="absolute top-[32%] left-[22%] cursor-pointer group"
                >
                  <div className={`w-4 h-4 rounded-full ${selectedHub === 0 ? 'bg-[#5DF8D8] ring-4 ring-cyan-300/40 animate-bounce' : 'bg-slate-300'} shadow-lg transition-all`}></div>
                  <span className="absolute left-6 -top-1 whitespace-nowrap text-xs sm:text-sm font-bold text-white bg-[#06334d]/90 px-2.5 py-1 rounded-lg border border-white/15">
                    New York (NY)
                  </span>
                </div>

                {/* Hub Pin 2: Rotterdam */}
                <div
                  onClick={() => setSelectedHub(1)}
                  className="absolute top-[28%] left-[48%] cursor-pointer group"
                >
                  <div className={`w-4 h-4 rounded-full ${selectedHub === 1 ? 'bg-[#5DF8D8] ring-4 ring-cyan-300/40 animate-bounce' : 'bg-slate-300'} shadow-lg transition-all`}></div>
                  <span className="absolute left-6 -top-1 whitespace-nowrap text-xs sm:text-sm font-bold text-white bg-[#06334d]/90 px-2.5 py-1 rounded-lg border border-white/15">
                    Rotterdam Gateway
                  </span>
                </div>

                {/* Hub Pin 3: Dubai */}
                <div
                  onClick={() => setSelectedHub(3)}
                  className="absolute top-[52%] left-[64%] cursor-pointer group"
                >
                  <div className={`w-4 h-4 rounded-full ${selectedHub === 3 ? 'bg-[#5DF8D8] ring-4 ring-cyan-300/40 animate-bounce' : 'bg-slate-300'} shadow-lg transition-all`}></div>
                  <span className="absolute left-6 -top-1 whitespace-nowrap text-xs sm:text-sm font-bold text-white bg-[#06334d]/90 px-2.5 py-1 rounded-lg border border-white/15">
                    Dubai Jebel HQ
                  </span>
                </div>

                {/* Hub Pin 4: Singapore */}
                <div
                  onClick={() => setSelectedHub(2)}
                  className="absolute top-[65%] left-[82%] cursor-pointer group"
                >
                  <div className={`w-4 h-4 rounded-full ${selectedHub === 2 ? 'bg-[#5DF8D8] ring-4 ring-cyan-300/40 animate-bounce' : 'bg-slate-300'} shadow-lg transition-all`}></div>
                  <span className="absolute left-6 -top-1 whitespace-nowrap text-xs sm:text-sm font-bold text-white bg-[#06334d]/90 px-2.5 py-1 rounded-lg border border-white/15">
                    Singapore Port
                  </span>
                </div>

              </div>

            </div>


            {/* Hub Information */}
            <div className="lg:col-span-5 xl:col-span-4 bg-[#052f48] rounded-3xl border border-white/15 p-6 md:p-8 flex flex-col justify-between shadow-2xl space-y-6">

              <div>

                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-slate-300 font-bold">
                    {hubsData[selectedHub].code}
                  </span>

                  <span className="px-3 py-1 rounded-full bg-emerald-400/20 border border-emerald-400/30 text-[#5DF8D8] text-xs font-bold">
                    {hubsData[selectedHub].status}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold font-poppins mt-3 text-white">
                  {hubsData[selectedHub].title}
                </h3>

                <p className="text-sm md:text-base text-slate-300 leading-relaxed mt-3">
                  {hubsData[selectedHub].desc}
                </p>

                <div className="space-y-3 mt-6">

                  <div className="bg-[#0b4564] rounded-xl px-4 py-3 flex justify-between items-center">
                    <span className="text-xs md:text-sm text-slate-300 font-medium">
                      Throughput Volume
                    </span>
                    <span className="text-xs md:text-sm font-bold text-white font-poppins">
                      {hubsData[selectedHub].volume}
                    </span>
                  </div>

                  <div className="bg-[#0b4564] rounded-xl px-4 py-3 flex justify-between items-center">
                    <span className="text-xs md:text-sm text-slate-300 font-medium">
                      Average Dwell Time
                    </span>
                    <span className="text-xs md:text-sm font-bold text-[#5DF8D8] font-poppins">
                      {hubsData[selectedHub].dwell}
                    </span>
                  </div>

                  <div className="bg-[#0b4564] rounded-xl px-4 py-3 flex justify-between items-center">
                    <span className="text-xs md:text-sm text-slate-300 font-medium">
                      Duty Desk Manager
                    </span>
                    <span className="text-xs md:text-sm font-bold text-white font-poppins">
                      {hubsData[selectedHub].manager}
                    </span>
                  </div>

                </div>

              </div>

              <a
                href={`tel:${directLines[0].num}`}
                className="w-full text-center bg-[#5DF8D8] hover:bg-[#34D399] text-[#062b40] py-4 rounded-xl text-sm md:text-base font-bold transition-all hover:scale-[1.02] shadow-lg shadow-cyan-400/20 block"
              >
                <Radio className="w-5 h-5 inline mr-2" />
                Connect with Terminal Radio
              </a>

            </div>

          </div>
        </div>
      </section>


      {/* ================= FAQ ================= */}
      <section className="py-20 md:py-28 bg-[#f4f7fb]">

        <div className="container mx-auto px-4 md:px-8 max-w-4xl">

          <div className="text-center mb-12 space-y-3">

            <span className="px-4 py-1.5 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-800 text-xs sm:text-sm font-bold uppercase tracking-widest inline-block">
              OPERATIONAL CLARITY
            </span>

            <h2 className="text-3xl sm:text-5xl font-black font-poppins text-[#09152b] tracking-tight">
              Frequently Asked Questions
            </h2>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Comprehensive answers on freight pricing models, satellite telemetry,
              international customs documentation, and cargo insurance.
            </p>

          </div>


          <div className="space-y-4">

            {faqs.map((faq, idx) => (

              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-300 hover:border-cyan-300 hover:shadow-md"
                onClick={() =>
                  setActiveFaq(activeFaq === idx ? null : idx)
                }
              >

                <div className="px-6 py-5 flex items-center justify-between cursor-pointer">

                  <span className="text-base md:text-lg font-bold text-slate-900 font-poppins pr-4">
                    {idx + 1}. {faq.q}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 transition-transform shrink-0 ${
                      activeFaq === idx
                        ? 'rotate-180 text-cyan-600'
                        : 'text-slate-400'
                    }`}
                  />

                </div>

                {activeFaq === idx && (
                  <div className="px-6 pb-6 pt-2 text-sm md:text-base text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}

              </div>

            ))}

          </div>

        </div>
      </section>

    </div>
  )
}


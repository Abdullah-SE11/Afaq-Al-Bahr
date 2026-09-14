import React, { useState } from 'react'
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
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
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [activeFaq, setActiveFaq] = useState(null)

  const directLines = [
    { label: "Dispatch Line 1 (Dubai)", num: "056 826 2134", wa: "971568262134" },
    { label: "Dispatch Line 2 (Dubai)", num: "055 935 9616", wa: "971559359616" },
    { label: "Dispatch Line 3 (Dubai)", num: "055 536 5465", wa: "971555365465" }
  ]

  const globalOffices = [
    {
      city: "Dubai Headquarters",
      address: "Terminal 4, Dubai Maritime City, Port Rashid, Dubai, UAE",
      phone: "+971 4 888 9200",
      email: "dubai@afaqalbahr.com",
      hours: "24/7 Operations Desk"
    },
    {
      city: "Abu Dhabi Operational Hub",
      address: "Khalifa Port Logistics Zone, Building 12, Abu Dhabi, UAE",
      phone: "+971 2 674 1100",
      email: "abudhabi@afaqalbahr.com",
      hours: "08:00 - 22:00 GST"
    },
    {
      city: "Karachi Port Terminal Hub",
      address: "Maritime Tower, West Wharf, Port of Karachi, Pakistan",
      phone: "+92 21 3241 8000",
      email: "karachi@afaqalbahr.com",
      hours: "24/7 Dispatch Desk"
    },
    {
      city: "Shanghai Cargo Terminal",
      address: "Pudong Maritime Logistics Park, Shanghai, China",
      phone: "+86 21 6888 4300",
      email: "shanghai@afaqalbahr.com",
      hours: "08:00 - 20:00 CST"
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

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      e.target.reset()
    }, 4000)
  }

  return (
  <div className="min-h-screen bg-[#f4f7fb] text-slate-950">

    {/* ================= HERO ================= */}
    <section className="relative overflow-hidden bg-[#06334d] text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(93,248,216,0.12),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(111,209,215,0.10),transparent_35%)]"></div>

      <div className="container mx-auto px-4 md:px-8 py-14 md:py-20 relative z-10">
        <div className="max-w-5xl space-y-5">

          <div className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-[#5DF8D8]">
            <span className="w-2 h-2 rounded-full bg-[#5DF8D8] animate-pulse"></span>
            DIRECT DISPATCH & RATE TELEMETRY
            <span className="text-slate-400">•</span>
            Avg. Response Time: 42 mins
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-poppins tracking-tight leading-[1.05]">
            Let's Move{' '}
            <span className="text-[#5DF8D8]">
              Your Cargo
            </span>
          </h1>

          <p className="max-w-2xl text-sm md:text-base text-slate-300 font-light leading-relaxed">
            Reach our international freight specialists. Get an instant freight
            quote, access precision intermodal routes, or speak directly to a
            regional operations manager.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4">
            {[
              ['LIVE DUTY HUB', 'New York Hub (EST)'],
              ['ACTIVE FREIGHTERS', '142 In-Transit'],
              ['CUSTOMS CLEARANCE', '99.84% Green Stream'],
              ['INSTANT QUOTES', 'Available 24/7'],
            ].map(([label, value], idx) => (
              <div
                key={idx}
                className="bg-[#0b4564]/70 border border-white/10 rounded-xl px-4 py-3"
              >
                <span className="block text-[8px] uppercase tracking-wider text-slate-400 font-bold">
                  {label}
                </span>
                <span className="block text-[10px] md:text-xs font-bold text-white mt-1">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>


    {/* ================= MAIN CONTACT AREA ================= */}
    <section className="py-12 md:py-16 bg-[#f4f7fb]">
      <div className="container mx-auto px-4 md:px-8">

        <div className="grid lg:grid-cols-12 gap-6 items-start">

          {/* ================= CONTACT FORM ================= */}
          <div className="lg:col-span-7">
            <div className="relative">

              {/* Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#6FD1D7] to-[#5DF8D8] opacity-20 blur-xl"></div>

              <div className="relative bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-xl">

                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest font-bold text-[#3B7597]">
                      FAST LANE QUOTATION
                    </span>

                    <h2 className="text-2xl md:text-3xl font-bold font-poppins text-[#09152b] leading-tight mt-1">
                      Request a Shipping Quote or Consultation
                    </h2>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-[#eaf5fa] text-[#3B7597] flex items-center justify-center">
                    <Send className="w-5 h-5" />
                  </div>
                </div>

                {formSubmitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                    <h3 className="text-lg font-bold text-slate-900">
                      Inquiry Received!
                    </h3>
                    <p className="text-xs text-slate-600">
                      Thank you. An Afaq Al Bahr logistics specialist is reviewing
                      your inquiry.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">

                    <div className="grid md:grid-cols-2 gap-4">

                      <div>
                        <label className="text-[9px] uppercase text-slate-500 font-bold block mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Captain Marcus Vance"
                          className="w-full bg-[#eef3fd] text-slate-900 px-4 py-3 rounded-xl text-xs font-medium border border-transparent focus:border-[#6FD1D7] focus:outline-none focus:ring-2 focus:ring-[#6FD1D7]/20"
                        />
                      </div>

                      <div>
                        <label className="text-[9px] uppercase text-slate-500 font-bold block mb-1.5">
                          Corporate Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="m.vance@enterprisecargo.com"
                          className="w-full bg-[#eef3fd] text-slate-900 px-4 py-3 rounded-xl text-xs font-medium border border-transparent focus:border-[#6FD1D7] focus:outline-none focus:ring-2 focus:ring-[#6FD1D7]/20"
                        />
                      </div>

                    </div>

                    <div className="grid md:grid-cols-2 gap-4">

                      <div>
                        <label className="text-[9px] uppercase text-slate-500 font-bold block mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+1 (555) 890-2341"
                          className="w-full bg-[#eef3fd] text-slate-900 px-4 py-3 rounded-xl text-xs font-medium border border-transparent focus:border-[#6FD1D7] focus:outline-none focus:ring-2 focus:ring-[#6FD1D7]/20"
                        />
                      </div>

                      <div>
                        <label className="text-[9px] uppercase text-slate-500 font-bold block mb-1.5">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          placeholder="Vance Global Heavy Industries"
                          className="w-full bg-[#eef3fd] text-slate-900 px-4 py-3 rounded-xl text-xs font-medium border border-transparent focus:border-[#6FD1D7] focus:outline-none focus:ring-2 focus:ring-[#6FD1D7]/20"
                        />
                      </div>

                    </div>

                    <div>
                      <label className="text-[9px] uppercase text-slate-500 font-bold block mb-1.5">
                        Required Service Type *
                      </label>

                      <select
                        className="w-full bg-[#eef3fd] text-slate-900 px-4 py-3 rounded-xl text-xs font-medium border border-transparent focus:border-[#6FD1D7] focus:outline-none"
                      >
                        <option>Sea Freight (FCL - Full Container Load)</option>
                        <option>Road Freight</option>
                        <option>Air Freight</option>
                        <option>Express Delivery</option>
                        <option>Supply Chain Management</option>
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">

                      <div>
                        <label className="text-[9px] uppercase text-slate-500 font-bold block mb-1.5">
                          Origin / Pickup Location *
                        </label>

                        <input
                          required
                          placeholder="e.g. Port of Los Angeles, CA"
                          className="w-full bg-[#eef3fd] text-slate-900 px-4 py-3 rounded-xl text-xs font-medium border border-transparent focus:border-[#6FD1D7] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-[9px] uppercase text-slate-500 font-bold block mb-1.5">
                          Destination / Delivery Location *
                        </label>

                        <input
                          required
                          placeholder="e.g. Rotterdam Gateway"
                          className="w-full bg-[#eef3fd] text-slate-900 px-4 py-3 rounded-xl text-xs font-medium border border-transparent focus:border-[#6FD1D7] focus:outline-none"
                        />
                      </div>

                    </div>

                    <div className="grid md:grid-cols-2 gap-4">

                      <div>
                        <label className="text-[9px] uppercase text-slate-500 font-bold block mb-1.5">
                          Est. Gross Weight
                        </label>

                        <input
                          placeholder="e.g. 18,400 kg"
                          className="w-full bg-[#eef3fd] text-slate-900 px-4 py-3 rounded-xl text-xs font-medium border border-transparent focus:border-[#6FD1D7] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-[9px] uppercase text-slate-500 font-bold block mb-1.5">
                          Dimensions or Containers
                        </label>

                        <input
                          placeholder="e.g. 2 × 40ft High Cube / 12 Pallets"
                          className="w-full bg-[#eef3fd] text-slate-900 px-4 py-3 rounded-xl text-xs font-medium border border-transparent focus:border-[#6FD1D7] focus:outline-none"
                        />
                      </div>

                    </div>

                    <div>
                      <label className="text-[9px] uppercase text-slate-500 font-bold block mb-1.5">
                        Cargo Specifications & Handling Directives
                      </label>

                      <textarea
                        rows={3}
                        placeholder="Specify hazmat classifications, cold-chain temperature ranges, customs priority, or target arrival windows..."
                        className="w-full bg-[#eef3fd] text-slate-900 px-4 py-3 rounded-xl text-xs font-medium border border-transparent focus:border-[#6FD1D7] focus:outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#5DF8D8] hover:bg-[#34D399] text-[#062b40] py-4 rounded-xl text-xs font-bold transition-all duration-300 shadow-lg shadow-emerald-500/20"
                    >
                      Send Inquiry & Get Quote
                      <span className="ml-2">→</span>
                    </button>

                    <p className="text-[9px] text-slate-500 text-center">
                      We respond within <strong>60 minutes</strong> during business
                      hours. All quotes are completely free and non-binding.
                    </p>

                  </form>
                )}

              </div>
            </div>
          </div>


          {/* ================= RIGHT INFORMATION ================= */}
          <div className="lg:col-span-5 space-y-4">

            {/* Emergency */}
            <div className="bg-[#06334d] text-white rounded-2xl p-6 shadow-xl border border-[#3B7597]/40">

              <div className="flex items-center justify-between mb-3">
                <span className="px-2 py-1 rounded bg-red-500 text-white text-[8px] font-bold uppercase">
                  ● Active Dispatch
                </span>

                <span className="text-[8px] text-[#5DF8D8] font-bold">
                  Priority Routing
                </span>
              </div>

              <h3 className="text-xl font-bold font-poppins">
                Emergency 24/7 Dispatch Hotline
              </h3>

              <p className="text-[10px] text-slate-300 leading-relaxed mt-2">
                Live escalation for in-transit maritime re-routing, air expedited
                diversions, and port clearance bottlenecks.
              </p>

              <a
                href={`tel:${directLines[0].num}`}
                className="inline-flex items-center gap-2 mt-4 bg-[#5DF8D8] hover:bg-[#34D399] text-[#062b40] px-4 py-3 rounded-xl text-xs font-bold transition-colors"
              >
                <Phone className="w-4 h-4" />
                {directLines[0].num}
              </a>

            </div>


            {/* Communication */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#eaf5fa] text-[#3B7597] flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>

                <div>
                  <span className="text-[8px] uppercase tracking-wider text-slate-400 font-bold">
                    Communication Arrays
                  </span>

                  <h3 className="text-sm font-bold text-slate-900">
                    Freight Inquiries & Tenders
                  </h3>
                </div>
              </div>

              <div className="space-y-2">

                <div className="bg-[#eef3fd] rounded-xl p-3 flex items-center justify-between">
                  <div>
                    <span className="block text-[8px] text-slate-500">
                      Rate Quotes & RFQs
                    </span>
                    <span className="text-[10px] font-bold text-slate-800">
                      quotes@afaqalbahr.com
                    </span>
                  </div>
                  <Mail className="w-3 h-3 text-[#3B7597]" />
                </div>

                <div className="bg-[#eef3fd] rounded-xl p-3 flex items-center justify-between">
                  <div>
                    <span className="block text-[8px] text-slate-500">
                      Customer & Port Support
                    </span>
                    <span className="text-[10px] font-bold text-slate-800">
                      support@afaqalbahr.com
                    </span>
                  </div>
                  <Globe2 className="w-3 h-3 text-[#3B7597]" />
                </div>

              </div>
            </div>


            {/* Command Center */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#eaf5fa] text-[#3B7597] flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>

                <div>
                  <span className="text-[8px] uppercase tracking-wider text-slate-400 font-bold">
                    Command Center
                  </span>

                  <h3 className="text-sm font-bold text-slate-900">
                    Global Operations HQ
                  </h3>
                </div>
              </div>

              <p className="text-[10px] text-slate-500 leading-relaxed">
                Terminal 4, Dubai Maritime City,
                Port Rashid, Dubai, UAE
              </p>

              <div className="mt-4 bg-[#eef3fd] rounded-xl p-3 space-y-2">

                <div className="flex items-center justify-between text-[9px]">
                  <span className="text-slate-500">Customer Service</span>
                  <span className="font-bold text-slate-800">
                    Mon - Sat: 07:00 - 21:00
                  </span>
                </div>

                <div className="flex items-center justify-between text-[9px]">
                  <span className="text-slate-500">Cargo Terminal</span>
                  <span className="font-bold text-slate-800">
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
    <section className="py-16 bg-[#073d5a] text-white relative overflow-hidden">

      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_30%,#6FD1D7,transparent_25%),radial-gradient(circle_at_80%_70%,#5DF8D8,transparent_25%)]"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">

          <div>
            <span className="text-[9px] uppercase tracking-widest text-[#5DF8D8] font-bold">
              GEOSPATIAL TELEMETRY
            </span>

            <h2 className="text-3xl md:text-4xl font-black font-poppins mt-2">
              Interactive Regional Logistics Hubs
            </h2>

            <p className="text-xs text-slate-300 mt-2 max-w-xl">
              Select a core maritime terminal to view channel throughput,
              real-time weather clearance, and docking status.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {['New York Hub', 'Rotterdam Port', 'Singapore Gateway', 'Dubai Terminal'].map(
              (hub, idx) => (
                <button
                  key={idx}
                  className={`px-4 py-2 rounded-lg text-[9px] font-bold transition-colors ${
                    idx === 0
                      ? 'bg-[#5DF8D8] text-[#062b40]'
                      : 'bg-[#052e46] text-slate-300 hover:bg-[#0b4c68]'
                  }`}
                >
                  {hub}
                </button>
              )
            )}
          </div>

        </div>


        <div className="grid lg:grid-cols-12 gap-5">

          {/* Map */}
          <div className="lg:col-span-8 bg-[#052f48] rounded-2xl border border-white/10 p-4">

            <div className="flex justify-between items-center mb-4">
              <span className="text-[8px] uppercase tracking-wider text-slate-300 font-bold">
                ● LIVE SATELLITE TRANSLATION
              </span>

              <span className="text-[8px] text-[#5DF8D8] font-mono">
                SYS: 24.892°N, 71.021°E
              </span>
            </div>

            <div className="h-64 md:h-72 rounded-xl bg-[#0b3b55] relative overflow-hidden">

              {/* Simple map visualization */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,#6FD1D7,transparent_55%)]"></div>

              <div className="absolute top-[35%] left-[25%]">
                <div className="w-3 h-3 rounded-full bg-[#5DF8D8] shadow-lg shadow-cyan-300/50"></div>
                <span className="absolute left-5 top-0 whitespace-nowrap text-[8px] text-white">
                  New York (NY)
                </span>
              </div>

              <div className="absolute top-[32%] left-[50%]">
                <div className="w-3 h-3 rounded-full bg-[#6FD1D7]"></div>
                <span className="absolute left-5 top-0 whitespace-nowrap text-[8px] text-white">
                  Rotterdam Gateway
                </span>
              </div>

              <div className="absolute top-[55%] left-[65%]">
                <div className="w-3 h-3 rounded-full bg-[#5DF8D8]"></div>
                <span className="absolute left-5 top-0 whitespace-nowrap text-[8px] text-white">
                  Dubai Jebel
                </span>
              </div>

              <div className="absolute top-[65%] left-[80%]">
                <div className="w-3 h-3 rounded-full bg-[#6FD1D7]"></div>
                <span className="absolute left-5 top-0 whitespace-nowrap text-[8px] text-white">
                  Singapore Port
                </span>
              </div>

            </div>

          </div>


          {/* Hub Information */}
          <div className="lg:col-span-4 bg-[#052f48] rounded-2xl border border-white/10 p-5 flex flex-col justify-between">

            <div>

              <div className="flex items-center justify-between">
                <span className="text-[8px] uppercase tracking-wider text-slate-400 font-bold">
                  TER-UNY-04
                </span>

                <span className="px-2 py-1 rounded bg-emerald-400/20 text-[#5DF8D8] text-[8px] font-bold">
                  Berths Open
                </span>
              </div>

              <h3 className="text-xl font-bold font-poppins mt-3">
                New York Operations
              </h3>

              <p className="text-[10px] text-slate-400 leading-relaxed mt-2">
                Direct coastal access point handling Tier-1 transatlantic
                maritime routes, high-speed rail transfer, and direct customs
                bonded warehouses.
              </p>

              <div className="space-y-2 mt-5">

                <div className="bg-[#0b4564] rounded-lg px-3 py-2 flex justify-between">
                  <span className="text-[9px] text-slate-400">
                    Throughput Volume
                  </span>
                  <span className="text-[10px] font-bold">
                    124,000 TEU / Mo
                  </span>
                </div>

                <div className="bg-[#0b4564] rounded-lg px-3 py-2 flex justify-between">
                  <span className="text-[9px] text-slate-400">
                    Average Dwell Time
                  </span>
                  <span className="text-[10px] font-bold text-[#5DF8D8]">
                    14.2 Hours
                  </span>
                </div>

                <div className="bg-[#0b4564] rounded-lg px-3 py-2 flex justify-between">
                  <span className="text-[9px] text-slate-400">
                    Duty Desk Manager
                  </span>
                  <span className="text-[10px] font-bold">
                    Elena Rostova
                  </span>
                </div>

              </div>

            </div>

            <button className="mt-5 w-full bg-[#315b70] hover:bg-[#3B7597] py-3 rounded-lg text-[10px] font-bold transition-colors">
              <Radio className="w-4 h-4 inline mr-2 text-[#5DF8D8]" />
              Connect with Terminal Radio
            </button>

          </div>

        </div>
      </div>
    </section>


    {/* ================= FAQ ================= */}
    <section className="py-16 bg-[#f4f7fb]">

      <div className="container mx-auto px-4 md:px-8 max-w-4xl">

        <div className="text-center mb-10">

          <span className="text-[9px] uppercase tracking-widest text-[#3B7597] font-bold">
            OPERATIONAL CLARITY
          </span>

          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#09152b] mt-2">
            Frequently Asked Questions
          </h2>

          <p className="text-xs text-slate-500 mt-3">
            Comprehensive answers on freight pricing models, satellite telemetry,
            international customs documentation, and cargo insurance.
          </p>

        </div>


        <div className="space-y-3">

          {faqs.map((faq, idx) => (

            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden"
              onClick={() =>
                setActiveFaq(activeFaq === idx ? null : idx)
              }
            >

              <div className="px-5 py-4 flex items-center justify-between cursor-pointer">

                <span className="text-sm font-semibold text-slate-900">
                  {idx + 1}. {faq.q}
                </span>

                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    activeFaq === idx
                      ? 'rotate-180 text-[#3B7597]'
                      : 'text-slate-400'
                  }`}
                />

              </div>

              {activeFaq === idx && (
                <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
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

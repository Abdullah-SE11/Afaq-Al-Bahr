import React from 'react'
import {
  Ship,
  Plane,
  Truck,
  Warehouse,
  Network,
  ArrowRight,
  CheckCircle2,
  Zap,
  Globe,
} from 'lucide-react'

export function Services({ t, onOpenQuote }) {

  const services = t?.services?.items || t?.services?.cards || []

  return (
    <div className="min-h-screen bg-[#F5F7FC] text-[#102033]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#062B43] py-16 md:py-20">

        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(67,205,219,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(67,205,219,0.12) 1px, transparent 1px)',
              backgroundSize: '55px 55px',
            }}
          />
        </div>

        <div className="absolute -right-20 top-10 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

            <div className="max-w-3xl">

            <div className="lg:col-span-7 mb-6 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                 GLOBAL MULTIMODAL NETWORK 2025
              </div>
            </div>

              <h2 className="text-3xl sm:text-6xl font-black font-poppins tracking-tight text-white">
                Complete{" "}
                <span className="bg-gradient-to-r from-[#27C7E8] via-[#31C7C1] to-[#34D399] bg-clip-text text-transparent ">
                  Logistics
                </span>{" "}
                Solutions
              </h2> 

              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-3xl mt-4">
                End-to-end multimodal transport, precision freight forwarding,
                and smart warehousing engineered for modern global commerce.
                Synchronized across sky, ocean, and continent.
              </p>

            </div>

            <div className="flex gap-2 shrink-0">

              <div className="bg-[#0C4565] border border-[#17617F] rounded-xl px-5 py-4 min-w-[135px]">
                <p className="text-[7px] uppercase tracking-wider text-slate-300">
                  ACTIVE SHIPMENTS
                </p>

                <div className="flex items-center gap-1">
                  <span className="text-2xl font-black text-white">
                    14,892
                  </span>

                  <Globe className="w-4 h-4 text-cyan-300" />
                </div>

                <p className="text-[8px] text-cyan-200">
                  Real-time GPS Lock
                </p>
              </div>

              <div className="bg-[#0C4565] border border-[#17617F] rounded-xl px-5 py-4 min-w-[135px]">
                <p className="text-[7px] uppercase tracking-wider text-slate-300">
                  ON-TIME DELIVERY
                </p>

                <div className="flex items-center gap-1">
                  <span className="text-2xl font-black text-white">
                    99.82%
                  </span>

                  <CheckCircle2 className="w-4 h-4 text-cyan-300" />
                </div>

                <p className="text-[8px] text-cyan-200">
                  On-Schedule SLA
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* SERVICES */}
      <section className="py-16 md:py-20 bg-[#F5F7FC]">

        <div className="container mx-auto px-4 md:px-8">

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {services.map((service, index) => (

                <div
                key={index}
                className="
                    group
                    bg-white
                    rounded-2xl
                    border border-[#DCE3ED]
                    shadow-[0_4px_14px_rgba(30,55,80,0.08)]
                    overflow-hidden
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_12px_28px_rgba(30,55,80,0.14)]
                    hover:border-[#9CCDD8]
                "
                >

                {/* IMAGE */}
                <div className="relative mx-4 mt-4 h-44 rounded-xl overflow-hidden">

                    <img
                    src={service.image}
                    alt={service.title}
                    className="
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                    "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#062B43]/60 to-transparent" />

                    {/* SERVICE TAG */}
                    <div className="
                    absolute
                    top-3
                    left-3
                    flex
                    items-center
                    gap-2
                    bg-[#063D59]/95
                    border
                    border-cyan-300/40
                    rounded-full
                    px-3.5
                    py-2
                    ">

                    <span className="text-cyan-300">
                        {service.icon}
                    </span>

                    <span className="text-[10px] font-bold text-white tracking-wide">
                        {service.tag}
                    </span>

                    </div>

                </div>


                {/* CONTENT */}
                <div className="p-6">

                    {/* TITLE */}
                    <h3 className="
                    text-2xl
                    font-bold
                    text-[#111E2D]
                    font-poppins
                    leading-tight
                    ">
                    {service.title}
                    </h3>


                    {/* DESCRIPTION */}
                    <p className="
                    mt-3
                    text-sm
                    text-[#697789]
                    leading-relaxed
                    min-h-[72px]
                    ">
                    {service.desc}
                    </p>


                    {/* HIGHLIGHTS */}
                    <div className="
                    mt-5
                    bg-[#EEF4FD]
                    rounded-xl
                    px-4
                    py-4
                    ">

                    <p className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-wider
                        text-[#53718A]
                        mb-3
                    ">
                        SERVICE HIGHLIGHTS
                    </p>


                    <div className="space-y-2">

                        {service.highlights.map((item, i) => (

                        <div
                            key={i}
                            className="flex items-center gap-2.5"
                        >

                            <CheckCircle2
                            className="
                                w-4
                                h-4
                                text-[#245A78]
                                shrink-0
                            "
                            />

                            <span className="text-sm text-[#536477]">
                            {item}
                            </span>

                        </div>

                        ))}

                    </div>

                    </div>


                    {/* FOOTER */}
                    <div className="
                    mt-5
                    pt-4
                    border-t
                    border-[#E7ECF2]
                    flex
                    items-center
                    justify-between
                    gap-3
                    ">

                    <span className="text-[10px] text-[#748293]">
                        {service.footer}
                    </span>


                    <button
                        onClick={onOpenQuote}
                        className="
                        flex
                        items-center
                        gap-1.5
                        text-sm
                        font-semibold
                        text-[#102C3E]
                        hover:text-[#00AFAF]
                        transition-colors
                        whitespace-nowrap
                        "
                    >
                        Learn More

                        <ArrowRight className="w-4 h-4" />

                    </button>

                    </div>

                </div>

                </div>

            ))}

            </div>

        </div>

        </section>


      {/* COMPARISON */}
        <section className="py-20 md:py-24 bg-[#EAF1FC]">

        <div className="container mx-auto px-4 md:px-8">

            {/* Section Heading */}
            <div className="mb-10">

            <span className="text-xs font-bold text-[#53718A] uppercase tracking-[0.18em]">
                STRATEGIC MODAL TRADE-OFFS
            </span>

            <h2 className="text-3xl md:text-4xl font-black font-poppins text-[#102033] mt-3 leading-tight">
                Freight Comparison Matrix & Simulator
            </h2>

            <p className="text-sm md:text-base text-[#718095] mt-3 max-w-3xl leading-relaxed">
                Evaluate lead-time against cost parameters and greenhouse
                impact to orchestrate an optimized logistics deployment.
            </p>

            </div>


            {/* Comparison Table */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-[0_6px_24px_rgba(30,55,80,0.10)] border border-[#DCE5F0]">

            {/* Table Header */}
            <div className="grid grid-cols-1 md:grid-cols-4 bg-[#DDE8F8] px-6 md:px-8 py-5 gap-3 md:gap-6">

                <span className="text-xs md:text-sm font-bold uppercase tracking-wide text-[#526A80]">
                Logistics Mode
                </span>

                <span className="text-xs md:text-sm font-bold uppercase tracking-wide text-[#526A80]">
                Transit Time
                </span>

                <span className="text-xs md:text-sm font-bold uppercase tracking-wide text-[#526A80]">
                Cost
                </span>

                <span className="text-xs md:text-sm font-bold uppercase tracking-wide text-[#526A80]">
                Best Fit
                </span>

            </div>


            {/* Table Rows */}
            {[
                ['Air Freight', '1 – 3 Days', 'Premium', 'Urgent / High Value'],
                ['Sea Freight', '18 – 35 Days', 'Lowest', 'Heavy / High Volume'],
                ['Road Freight', '2 – 6 Days', 'Moderate', 'Regional Delivery'],
                ['Express Delivery', '12 – 24 Hours', 'Critical', 'Mission Critical'],
            ].map((row, index) => (

                <div
                key={index}
                className="
                    grid
                    grid-cols-1
                    md:grid-cols-4
                    gap-3
                    md:gap-6
                    px-6
                    md:px-8
                    py-6
                    border-b
                    border-[#EDF1F5]
                    last:border-0
                    hover:bg-[#F8FAFD]
                    transition-colors
                "
                >

                <span className="text-base md:text-lg font-bold text-[#26384A]">
                    {row[0]}
                </span>

                <span className="text-sm md:text-base text-[#657487]">
                    {row[1]}
                </span>

                <span className="text-sm md:text-base text-[#657487]">
                    {row[2]}
                </span>

                <span className="text-sm md:text-base text-[#657487]">
                    {row[3]}
                </span>

                </div>

            ))}

            </div>

        </div>

        </section>


      {/* CTA */}
      <section className="py-14 bg-[#F5F7FC]">

        <div className="container mx-auto px-4 md:px-8">

          <div className="bg-[#032D45] rounded-xl px-6 py-9 md:px-8">

            <div className="flex flex-col lg:flex-row items-center justify-between gap-7">

              <div className="max-w-2xl">

                <span className="text-[8px] font-bold text-cyan-300 uppercase tracking-wider">
                  15-MINUTE GUARANTEED QUOTE DISPATCH
                </span>

                <h2 className="text-3xl font-black font-poppins text-white mt-2">
                  Have Cargo to Move?
                </h2>

                <p className="mt-2 text-[10px] text-slate-300 leading-relaxed">
                  Get custom freight rates tailored to your cargo dimensions,
                  timeline, and destination within 15 minutes.
                </p>

              </div>


              <button
                onClick={onOpenQuote}
                className="
                  px-7
                  py-3
                  rounded-lg
                  bg-[#50E6D2]
                  hover:bg-[#34D399]
                  text-[#063344]
                  text-sm
                  font-bold
                  transition-all
                  hover:-translate-y-0.5
                  shadow-lg
                "
              >
                Request a Quote
              </button>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}
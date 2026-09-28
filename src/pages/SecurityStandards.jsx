import React from 'react'
import { ShieldCheck, Lock, CheckCircle2, ChevronRight, Globe, Radar } from 'lucide-react'

export function SecurityStandards({ navigateTo, t }) {
    const standards = t?.security?.standards || []

    return (
        <div className="min-h-screen bg-[#f4f7fb] text-slate-900">
        <section className="relative overflow-hidden bg-[#06334d] text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(93,248,216,0.14),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(111,209,215,0.12),transparent_35%)]" />

            <div className="relative z-10 container mx-auto px-4 py-16 md:px-8 md:py-24">
            <div className="max-w-4xl">
                <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl font-poppins">
                Security Standards
                </h1>
                <p className="mt-5 max-w-2xl text-base text-slate-300 md:text-lg">
                Afaq Al Bahr Shipping LLC maintains operational, procedural, and communication safeguards to protect cargo movement, stakeholder information, and service continuity.
                </p>
                <div className="mt-6 flex flex-wrap gap-4 text-xs text-slate-300">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">Effective Date: 01 January 2026</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">Last Updated: 29 September 2026</span>
                </div>
            </div>
            </div>
        </section>

        <section className="container mx-auto px-4 py-14 md:px-8 md:py-20">
            <div className="mb-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0f9bbd]">Security Commitment</p>
            <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                Afaq Al Bahr Shipping LLC is committed to protecting cargo, data, business relationships, and operational continuity through secure systems, verified processes, and disciplined risk management across all logistics functions.
            </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="space-y-6">
                {standards.map((item) => (
                <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] md:p-8">
                    <h2 className="text-xl font-bold text-[#06334d] md:text-2xl">{item.title}</h2>
                    <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">{item.text}</p>
                </div>
                ))}
            </div>

            <aside className="space-y-6">
                <div className="rounded-3xl border border-slate-200 bg-[#06334d] p-6 text-white shadow-[0_20px_60px_rgba(6,51,77,0.2)]">
                <div className="flex items-center gap-3 text-[#5DF8D8]">
                    <Radar className="h-5 w-5" />
                    <h3 className="text-lg font-bold">Security Controls</h3>
                </div>
                <ul className="mt-5 space-y-3 text-sm text-slate-200">
                    <li className="flex gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#5DF8D8]" /> Verified document handling procedures.</li>
                    <li className="flex gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#5DF8D8]" /> Controlled access to shipment and client information.</li>
                    <li className="flex gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#5DF8D8]" /> Risk review across freight, customs, and transport milestones.</li>
                </ul>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
                <div className="flex items-center gap-3 text-[#06334d]">
                    <Lock className="h-5 w-5" />
                    <h3 className="text-lg font-bold">Operational Assurance</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                    Security and compliance are integrated into our logistics planning, customer communication, and partner coordination at every stage of the supply chain.
                </p>
                </div>

                <button
                type="button"
                onClick={() => navigateTo?.('contact')}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#5DF8D8] px-5 py-3.5 text-sm font-bold text-[#06334d] shadow-lg shadow-cyan-500/20 transition hover:bg-[#34D399]"
                >
                Request a Security Review
                <ChevronRight className="h-4 w-4" />
                </button>
            </aside>
            </div>

            <div className="mt-10 rounded-3xl border border-slate-200 bg-[#eaf7fb] p-6 text-sm leading-7 text-slate-700 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <p className="font-bold uppercase tracking-[0.16em] text-[#06334d]">Operational Assurance</p>
            <p className="mt-3">
                These security standards are intended to support the safe execution of logistics services and strengthen confidence in our operational procedures. The company may revise this document over time to reflect evolving risk conditions, regulatory changes, and improvements in its control environment.
            </p>
            </div>
        </section>
        </div>
    )
}

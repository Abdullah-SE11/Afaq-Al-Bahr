import React from 'react'
import { Lock, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react'

export function PrivacyPolicy({ navigateTo, t }) {
    const sections = t?.privacy?.sections || []

    return (
        <div className="min-h-screen bg-[#f4f7fb] text-slate-900">
        <section className="relative overflow-hidden bg-[#06334d] text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(93,248,216,0.14),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(111,209,215,0.12),transparent_35%)]" />

            <div className="relative z-10 container mx-auto px-4 py-16 md:px-8 md:py-24">
            <div className="max-w-4xl">
                <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl font-poppins">
                Privacy Policy
                </h1>
                <p className="mt-5 max-w-2xl text-base text-slate-300 md:text-lg">
                We are committed to protecting the confidentiality, security, and lawful use of information entrusted to our logistics operations.
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0f9bbd]">Company Notice</p>
            <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                Afaq Al Bahr Shipping LLC, operating as a regional and international freight and logistics provider, maintains this policy to document how it collects, processes, stores, and protects information used in business operations, customer support, and supply chain coordination.
            </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="space-y-6">
                {sections.map((section) => (
                <div key={section.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] md:p-8">
                    <h2 className="text-xl font-bold text-[#06334d] md:text-2xl">{section.title}</h2>
                    <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">{section.text}</p>
                </div>
                ))}
            </div>

            <aside className="space-y-6">
                <div className="rounded-3xl border border-slate-200 bg-[#06334d] p-6 text-white shadow-[0_20px_60px_rgba(6,51,77,0.2)]">
                <div className="flex items-center gap-3 text-[#5DF8D8]">
                    <Lock className="h-5 w-5" />
                    <h3 className="text-lg font-bold">Data Protection</h3>
                </div>
                <ul className="mt-5 space-y-3 text-sm text-slate-200">
                    <li className="flex gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#5DF8D8]" /> Access limited to authorized personnel only.</li>
                    <li className="flex gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#5DF8D8]" /> Shipment records shared only when operationally required.</li>
                    <li className="flex gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#5DF8D8]" /> Confidentiality maintained across all business channels.</li>
                </ul>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
                <div className="flex items-center gap-3 text-[#06334d]">
                    <ShieldCheck className="h-5 w-5" />
                    <h3 className="text-lg font-bold">Need Help?</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                    For questions about privacy practices, document handling, or data requests, our team is available to assist through the support channels on the site.
                </p>
                </div>

                <button
                type="button"
                onClick={() => navigateTo?.('contact')}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#5DF8D8] px-5 py-3.5 text-sm font-bold text-[#06334d] shadow-lg shadow-cyan-500/20 transition hover:bg-[#34D399]"
                >
                Contact Support
                <ChevronRight className="h-4 w-4" />
                </button>
            </aside>
            </div>

            <div className="mt-10 rounded-3xl border border-slate-200 bg-[#eaf7fb] p-6 text-sm leading-7 text-slate-700 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <p className="font-bold uppercase tracking-[0.16em] text-[#06334d]">Policy Statement</p>
            <p className="mt-3">
                This Privacy Policy may be updated from time to time to reflect operational changes, regulatory developments, or improvements in business practices. The most recent version is maintained on this website and applies to information collected through our channels, digital platforms, and business interactions.
            </p>
            </div>
        </section>
        </div>
    )
}

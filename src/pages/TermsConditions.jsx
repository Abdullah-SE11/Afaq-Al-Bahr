import React from 'react'
import {
    ShieldCheck,
    Scale,
    CheckCircle2,
    ChevronRight,
    Globe,
    Clock3,
    Lock,
} from 'lucide-react'

export function TermsConditions({ navigateTo, t }) {
    const sections = t?.terms?.sections || []

    return (
    <div className="min-h-screen bg-[#f4f7fb] text-slate-900">
        <section className="relative overflow-hidden bg-[#06334d] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(93,248,216,0.14),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(111,209,215,0.12),transparent_35%)]" />

        <div className="relative z-10 container mx-auto px-4 md:px-8 py-16 md:py-24">
            <div className="max-w-4xl">
            <h1 className="mt-0 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl font-poppins">
                Terms & Conditions
            </h1>

            <p className="mt-5 max-w-2xl text-base text-slate-300 md:text-lg">
                These terms define the responsibilities, service boundaries, and commercial framework for our logistics and freight partnerships.
            </p>
            </div>
        </div>
        </section>

        <section className="container mx-auto px-4 md:px-8 py-14 md:py-20">
        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="space-y-6">
            {sections.map((section) => (
                <div
                key={section.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] md:p-8"
                >
                <h2 className="text-xl font-bold text-[#06334d] md:text-2xl">
                    {section.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                    {section.text}
                </p>
                </div>
            ))}
            </div>

            <aside className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
                <h3 className="text-lg font-bold text-[#06334d]">Policies & Security</h3>
                <div className="mt-4 space-y-3">
                <button
                    type="button"
                    onClick={() => navigateTo?.('privacy')}
                    className="flex w-full items-center gap-3 rounded-2xl border border-slate-200 p-4 text-left transition hover:border-[#5DF8D8] hover:bg-[#f4fbfc]"
                >
                    <Lock className="h-5 w-5 shrink-0 text-[#0f9bbd]" />
                    <span className="font-semibold text-[#06334d]">Privacy Policy</span>
                    <ChevronRight className="ml-auto h-4 w-4 text-slate-400" />
                </button>
                <button
                    type="button"
                    onClick={() => navigateTo?.('security')}
                    className="flex w-full items-center gap-3 rounded-2xl border border-slate-200 p-4 text-left transition hover:border-[#5DF8D8] hover:bg-[#f4fbfc]"
                >
                    <ShieldCheck className="h-5 w-5 shrink-0 text-[#0f9bbd]" />
                    <span className="font-semibold text-[#06334d]">Security Standards</span>
                    <ChevronRight className="ml-auto h-4 w-4 text-slate-400" />
                </button>
                </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-[#06334d] p-6 text-white shadow-[0_20px_60px_rgba(6,51,77,0.2)]">
                <div className="flex items-center gap-3 text-[#5DF8D8]">
                <ShieldCheck className="h-5 w-5" />
                <h3 className="text-lg font-bold">Compliance Overview</h3>
                </div>

                <ul className="mt-5 space-y-3 text-sm text-slate-200">
                <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#5DF8D8]" />
                    Service scope defined in writing before execution.
                </li>
                <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#5DF8D8]" />
                    Client documents and approvals remain the responsibility of the client.
                </li>
                <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#5DF8D8]" />
                    Commercial disputes follow UAE jurisdiction as applicable.
                </li>
                </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
                <div className="flex items-center gap-3 text-[#06334d]">
                <Scale className="h-5 w-5" />
                <h3 className="text-lg font-bold">Important Notes</h3>
                </div>

                <div className="mt-4 space-y-4 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                    <Globe className="mt-0.5 h-4 w-4 text-[#0f9bbd]" />
                    <p>Operational routes and delivery timing are affected by port, customs, and transit conditions.</p>
                </div>
                <div className="flex items-start gap-3">
                    <Clock3 className="mt-0.5 h-4 w-4 text-[#0f9bbd]" />
                    <p>Claims and complaints should be reported promptly to enable effective review and resolution.</p>
                </div>
                </div>
            </div>

            <button
                type="button"
                onClick={() => navigateTo?.('contact')}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#5DF8D8] px-5 py-3.5 text-sm font-bold text-[#06334d] shadow-lg shadow-cyan-500/20 transition hover:bg-[#34D399]"
            >
                Talk to our team
                <ChevronRight className="h-4 w-4" />
            </button>
            </aside>
        </div>
        </section>
    </div>
    )
}

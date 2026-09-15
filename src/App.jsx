import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { translations } from './data/translations'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { WhatsAppWidget } from './components/WhatsAppWidget'
import { Home } from './pages/Home'
import { AboutUs } from './pages/AboutUs'
import { Services } from './pages/Services'
import { Contact } from './pages/Contact'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [lang, setLang] = useState('en')
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)

  const t = translations[lang]

  const navigateTo = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const waLines = [
    { label: "Dispatch Line 1", num: "056 826 2134", wa: "971568262134" },
    { label: "Dispatch Line 2", num: "055 935 9616", wa: "971559359616" },
    { label: "Customer Support", num: "055 536 5465", wa: "971555365465" }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* NAVBAR */}
      <Navbar
        currentPage={currentPage}
        navigateTo={navigateTo}
        t={t}
      />

      {/* PAGE CONTENT */}
      <main className="flex-1">
        {currentPage === 'home' && <Home t={t} onOpenQuote={() => setQuoteModalOpen(true)} />}
        {currentPage === 'about' && <AboutUs t={t} onOpenQuote={() => setQuoteModalOpen(true)} />}
        {currentPage === 'services' && <Services t={t} onOpenQuote={() => setQuoteModalOpen(true)} />}
        {currentPage === 'contact' && <Contact t={t} />}
      </main>

      {/* FLOATING WHATSAPP WIDGET */}
      <WhatsAppWidget />

      {/* FOOTER */}
      <Footer navigateTo={navigateTo} t={t} />

      {/* GET A QUOTE MODAL — Direct WhatsApp Contact */}
      <AnimatePresence>
        {quoteModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
            onClick={() => setQuoteModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md p-6 md:p-8 rounded-3xl bg-[#091122] border border-white/20 relative space-y-5 shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={() => setQuoteModalOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="flex items-center gap-3 pr-8">
                <img src="as/logo.png" alt="ABS Logo" className="h-10 w-auto object-contain bg-white p-1 rounded-lg" />
                <div>
                  <h3 className="text-lg font-bold font-poppins text-white leading-tight">Contact Afaq Al Bahr</h3>
                  <p className="text-xs text-slate-400">Choose a line to chat directly on WhatsApp</p>
                </div>
              </div>

              {/* Live badge */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-[11px] text-emerald-300 font-semibold">Dubai Operations Desk — Online 24/7</span>
              </div>

              {/* WhatsApp Lines */}
              <div className="space-y-3">
                {waLines.map((line, idx) => (
                  <a
                    key={idx}
                    href={`https://wa.me/${line.wa}?text=Hello%20Afaq%20Al%20Bahr%20Shipping,%20I%20have%20a%20freight%20inquiry`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/30">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wide block">{line.label}</span>
                        <span className="text-base font-bold text-white font-mono">{line.num}</span>
                      </div>
                    </div>
                    <svg className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>

              <p className="text-[10px] text-slate-500 text-center">
                Tap any line to open WhatsApp chat instantly
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  )
}

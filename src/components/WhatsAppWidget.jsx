import React, { useState } from 'react'
import { X, ChevronRight } from 'lucide-react'

function WhatsAppIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.98-.14.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.16-.47-.28z" />
    </svg>
  )
}

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)

  const lines = [
    { num: "056 826 2134", wa: "971568262134", label: "Dispatch Line 1" },
    { num: "055 935 9616", wa: "971559359616", label: "Dispatch Line 2" },
    { num: "055 536 5465", wa: "971555365465", label: "Customer Support" }
  ]

  return (
    <div className="fixed bottom-6 end-6 z-50 flex flex-col items-end gap-3">
      
      {/* POPUP SELECTOR MENU */}
      {isOpen && (
        <div className="bg-[#091122]/95 backdrop-blur-xl border border-emerald-500/40 p-4 rounded-3xl shadow-2xl w-72 space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-300 text-left">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
              <span className="text-xs font-bold text-white uppercase tracking-wider">Afaq Al Bahr WhatsApp</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-slate-300 font-light leading-snug">
            Click any line to start a direct WhatsApp chat with our Dubai dispatch team:
          </p>

          <div className="space-y-2">
            {lines.map((l, idx) => (
              <a
                key={idx}
                href={`https://wa.me/${l.wa}?text=Hello%20Afaq%20Al%20Bahr%20Shipping,%20I%20have%20an%20inquiry`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold">
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold block">{l.label}</span>
                    <span className="text-xs font-bold text-white font-mono">{l.num}</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* FLOATING BUTTON */}
      <div className="relative group">
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-60 animate-ping pointer-events-none"></span>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-emerald-500 text-white p-4 rounded-full shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all flex items-center justify-center border border-emerald-300/30"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon className="w-7 h-7 text-white" />
        </button>
      </div>

    </div>
  )
}

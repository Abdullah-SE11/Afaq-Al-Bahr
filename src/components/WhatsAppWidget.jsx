import React, { useState } from 'react'
import { MessageCircle, X, ChevronRight, Phone } from 'lucide-react'

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
                  <div className="w-8 h-8 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center font-bold">
                    <MessageCircle className="w-4 h-4 fill-current" />
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
          className="relative bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-emerald-500 text-white p-3.5 md:p-4 rounded-full shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all flex items-center gap-2.5 border border-emerald-300/30"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 md:w-7 md:h-7 fill-current" />
          <span className="hidden md:inline text-xs font-bold uppercase tracking-wider pr-1">
            WhatsApp Support
          </span>
        </button>
      </div>

    </div>
  )
}

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

export function Navbar({ currentPage, navigateTo, t }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeNav, setActiveNav] = useState(currentPage)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

 const handleNavClick = (page) => {
  setActiveNav(page)
  navigateTo(page)
  setMobileMenuOpen(false)
}

  return (
<header
  className={`relative w-full z-50 flex-shrink-0 transition-all duration-300 ${
    scrolled
      ? 'bg-white shadow-md border-b border-slate-200 py-2'
      : 'bg-white border-b border-slate-200 py-3'
  }`}
>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between  ">

        {/* Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group text-left"
        >
          <div className="group-hover:scale-105 transition-transform flex items-center justify-center">
            <img
              src="/Assets/logo.png"
              alt="Afaq Al Bahr Shipping Logo"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>

          <div>
            <span className="text-lg md:text-xl font-extrabold tracking-tight text-[#093C5D] font-poppins block leading-none">
              AFAQ AL BAHR
            </span>

            <span className="text-[10px] font-semibold tracking-widest text-[#3B7597] uppercase">
              SHIPPING L.L.C.
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-3 text-sm font-medium text-slate-700">

          <button
            onClick={() => handleNavClick('home')}
            className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
              activeNav === 'home'
                ? 'bg-[#093C5D] text-white shadow-md'
                : 'text-slate-700 hover:bg-[#093C5D] hover:text-white'
            }`}
          >
            {t.navbar.home}
          </button>

          <button
            onClick={() => handleNavClick('about')}
            className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
              activeNav === 'about'
                ? 'bg-[#093C5D] text-white shadow-md'
                : 'text-slate-700 hover:bg-[#093C5D] hover:text-white'
            }`}
          >
            {t.navbar.about}
          </button>

          <button
                    onClick={() => handleNavClick('services')}
                    className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                      activeNav === 'services'
                        ? 'bg-[#093C5D] text-white shadow-md'
                        : 'text-slate-700 hover:bg-[#093C5D] hover:text-white'
            }`}
          >
            {t.navbar.services}
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
              activeNav === 'contact'
                ? 'bg-[#093C5D] text-white shadow-md'
                : 'text-slate-700 hover:bg-[#093C5D] hover:text-white'
            }`}
          >
            {t.navbar.contact}
          </button>

          <button
            onClick={() => handleNavClick('terms')}
            className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
              activeNav === 'terms'
                ? 'bg-[#093C5D] text-white shadow-md'
                : 'text-slate-700 hover:bg-[#093C5D] hover:text-white'
            }`}
          >
            Terms & Conditions
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className="ml-2 px-5 py-2.5 rounded-full bg-[#5DF8D8] text-[#093C5D] text-xs font-bold shadow-sm hover:bg-[#34D399] hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
          >
            Get a Quote
          </button>

        </nav>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#093C5D] text-white hover:bg-[#3B7597] transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-200 px-6 py-6 space-y-3 shadow-lg"
          >

            <button
              onClick={() => handleNavClick('home')}
              className="block w-full text-left px-4 py-3 rounded-lg text-slate-700 font-medium hover:bg-slate-100 hover:text-[#093C5D] transition-colors"
            >
              {t.navbar.home}
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className="block w-full text-left px-4 py-3 rounded-lg text-slate-700 font-medium hover:bg-slate-100 hover:text-[#093C5D] transition-colors"
            >
              {t.navbar.about}
            </button>

            <button
              onClick={() => handleNavClick('services')}
              className="block w-full text-left px-4 py-3 rounded-lg text-slate-700 font-medium hover:bg-slate-100 hover:text-[#093C5D] transition-colors"
            >
              {t.navbar.services}
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className="block w-full text-left px-4 py-3 rounded-lg bg-[#093C5D] text-white font-semibold"
            >
              {t.navbar.contact}
            </button>

            <button
              onClick={() => handleNavClick('terms')}
              className="block w-full text-left px-4 py-3 rounded-lg text-slate-700 font-medium hover:bg-slate-100 hover:text-[#093C5D] transition-colors"
            >
              Terms & Conditions
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className="w-full mt-2 px-5 py-3 rounded-full bg-[#5DF8D8] text-[#093C5D] font-bold hover:bg-[#34D399] transition-colors"
            >
              Get a Quote
            </button>

          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
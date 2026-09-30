import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export function Navbar({ currentPage, navigateTo, t }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const headerRef = useRef(null)

  useEffect(() => {
    if (!mobileMenuOpen) return

    const handlePointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) {
        setMobileMenuOpen(false)
      }
    }
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMobileMenuOpen(false)
    }
    const handleResize = () => {
      if (window.matchMedia('(min-width: 1280px)').matches) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [mobileMenuOpen])

  const handleNavClick = (event, page) => {
    event.preventDefault()

    navigateTo(page)
    setMobileMenuOpen(false)

    // Scroll to top when changing page
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const navItems = [
    {
      id: 'home',
      label: t.navbar.home,
    },
    {
      id: 'about',
      label: t.navbar.about,
    },
    {
      id: 'services',
      label: t.navbar.services,
    },
    {
      id: 'contact',
      label: t.navbar.contact,
    },
    {
      id: 'terms',
      label: 'Terms & Conditions',
    },
  ]

  return (
    <header ref={headerRef} className="relative z-40 w-full bg-transparent py-3 sm:py-4">
      <div className="container mx-auto flex min-h-11 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="group flex min-w-0 items-center gap-3 text-left"
        >
          <div className="flex shrink-0 items-center justify-center transition-transform duration-200 group-hover:scale-105">
            <img
              src="/Assets/logo.png"
              alt="Afaq Al Bahr Shipping Logo"
              className="h-9 w-auto object-contain sm:h-10"
            />
          </div>

          <div className="min-w-0">
            <span className="block truncate font-poppins text-[15px] font-extrabold leading-none text-[#093C5D] sm:text-base">
              AFAQ AL BAHR
            </span>

            <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              SHIPPING L.L.C.
            </span>
          </div>
        </a>

        <nav aria-label="Main navigation" className="relative hidden w-auto items-center gap-1 p-0 xl:flex">
          {navItems.map((item) => {
            const isActive = currentPage === item.id

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative rounded-md px-3 py-2.5 text-sm font-medium transition-colors duration-200 after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:origin-center after:rounded-full after:bg-[#159A9C] after:transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#159A9C] focus-visible:ring-offset-2 ${isActive ? 'text-[#093C5D] after:scale-x-100' : 'text-slate-600 after:scale-x-0 hover:text-[#093C5D] hover:after:scale-x-100'}`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="flex shrink-0 items-center xl:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-controls="mobile-navigation"
            aria-expanded={mobileMenuOpen}
            className="rounded-full border border-slate-300/80 bg-transparent p-2.5 text-[#093C5D] transition-colors hover:border-[#159A9C] hover:text-[#0b7890] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#159A9C] focus-visible:ring-offset-2 active:scale-95"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{
              opacity: 1,
              height: 'auto',
              y: 0,
              transition: {
                height: { duration: 0.32, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.2, ease: 'easeOut' },
                y: { duration: 0.28, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            exit={{
              opacity: 0,
              height: 0,
              y: -6,
              transition: {
                height: { duration: 0.24, ease: [0.4, 0, 1, 1] },
                opacity: { duration: 0.16, ease: 'easeIn' },
                y: { duration: 0.2, ease: [0.4, 0, 1, 1] },
              },
            }}
            className="absolute inset-x-0 top-full z-50 overflow-hidden border-y border-slate-200/70 bg-white/85 shadow-xl backdrop-blur-xl xl:hidden"
          >
            <nav id="mobile-navigation" aria-label="Mobile navigation" className="relative mx-auto grid w-full max-w-7xl gap-1 px-4 pb-2 pt-3 sm:px-6 sm:pb-3">
              {navItems.map((item) => {
                const isActive = currentPage === item.id

                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex w-full items-center rounded-md px-4 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#159A9C] focus-visible:ring-inset ${isActive ? 'bg-[#E5F6F4] font-bold text-[#07556B] shadow-[inset_3px_0_0_#159A9C]' : 'text-slate-600 hover:bg-slate-100/70 hover:text-[#093C5D]'}`}
                  >
                    {item.label}
                  </a>
                )
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  )
}
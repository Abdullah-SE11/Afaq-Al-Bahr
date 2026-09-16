import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export function Navbar({ currentPage, navigateTo, t }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeNav, setActiveNav] = useState(currentPage)

  // Keep active navigation synced with current page
  useEffect(() => {
    setActiveNav(currentPage)
  }, [currentPage])

  // Header scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleNavClick = (event, page) => {
    event.preventDefault()

    setActiveNav(page)
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
    // {
    //   id: 'terms',
    //   label: 'Terms & Conditions',
    // },
  ]

  return (
    <header
      className={`relative w-full z-50 flex-shrink-0 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md border-b border-slate-200 py-2'
          : 'bg-white border-b border-slate-200 py-3'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">

        {/* =====================================================
            LOGO
        ====================================================== */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
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
        </a>


        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}
        <nav className="hidden lg:flex items-center gap-2">

          {navItems.map((item) => {

            const isActive = activeNav === item.id

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`
                  relative
                  px-4
                  py-2
                  rounded-md
                  text-sm
                  font-medium
                  transition-all
                  duration-200
                  select-none
                  ${
                    isActive
                      ? 'bg-[#093C5D] text-white shadow-md'
                      : 'text-slate-700 hover:bg-[#093C5D] hover:text-white hover:shadow-md'
                  }
                `}
              >
                {item.label}
              </a>
            )
          })}


          {/* Get Quote */}
          {/* <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="
              ml-2
              px-5
              py-2.5
              rounded-full
              bg-[#5DF8D8]
              text-[#093C5D]
              text-xs
              font-bold
              shadow-sm
              hover:bg-[#34D399]
              hover:shadow-lg
              hover:-translate-y-0.5
              active:scale-95
              transition-all
              duration-200
            "
          >
            Get a Quote
          </a> */}

        </nav>


        {/* =====================================================
            MOBILE MENU BUTTON
        ====================================================== */}
        <div className="flex lg:hidden items-center">

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="
              p-2
              rounded-lg
              bg-[#093C5D]
              text-white
              hover:bg-[#3B7597]
              hover:shadow-md
              active:scale-95
              transition-all
              duration-200
            "
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

        </div>

      </div>


      {/* =====================================================
          MOBILE NAVIGATION
      ====================================================== */}
      <AnimatePresence>

        {mobileMenuOpen && (

          <motion.div
            initial={{
              opacity: 0,
              height: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              height: 'auto',
              y: 0,
            }}
            exit={{
              opacity: 0,
              height: 0,
              y: -10,
            }}
            transition={{
              duration: 0.25,
              ease: 'easeOut',
            }}
            className="
              lg:hidden
              overflow-hidden
              bg-white
              border-t
              border-slate-200
              shadow-lg
            "
          >

            <nav className="px-5 py-5 space-y-2">

              {navItems.map((item) => {

                const isActive = activeNav === item.id

                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`
                      flex
                      items-center
                      w-full
                      px-4
                      py-3
                      rounded-lg
                      text-sm
                      font-medium
                      transition-all
                      duration-200
                      ${
                        isActive
                          ? 'bg-[#093C5D] text-white shadow-md'
                          : 'text-slate-700 hover:bg-[#093C5D] hover:text-white hover:shadow-md hover:translate-x-1'
                      }
                    `}
                  >
                    {item.label}
                  </a>
                )
              })}


              {/* Mobile Get Quote */}
              {/* <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="
                  flex
                  items-center
                  justify-center
                  w-full
                  mt-3
                  px-5
                  py-3
                  rounded-full
                  bg-[#5DF8D8]
                  text-[#093C5D]
                  font-bold
                  text-sm
                  shadow-sm
                  hover:bg-[#34D399]
                  hover:shadow-lg
                  active:scale-95
                  transition-all
                  duration-200
                "
              >
                Get a Quote
              </a> */}

            </nav>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  )
}
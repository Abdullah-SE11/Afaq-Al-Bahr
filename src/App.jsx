import React, { useState, useEffect } from 'react'

import { motion } from 'framer-motion'
import { Ship, Plane, Globe, Package, Truck, Anchor, Menu, Facebook, Linkedin, ArrowRight, ExternalLink, Phone, MessageCircle } from 'lucide-react'
import { SocialLinks } from './components/SocialLinks'
import { translations } from './data/translations'



function Navbar({ lang, setLang, t }) {
    const [scrolled, setScrolled] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false)


    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (showDropdown && !event.target.closest('.dropdown-container')) {
                setShowDropdown(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [showDropdown])

    const navLinks = [
        { name: t.navbar.solutions, href: '#services' },
        { name: t.navbar.network, href: '#about' },
        { name: t.navbar.about, href: '#about' },
        { name: t.navbar.track, href: '#track' }
    ]

    return (
        <header className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-white shadow-xl py-2' : 'bg-white/90 backdrop-blur-md py-4'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-6">
                    <img src="/logo.png" alt="ABS Logo" className="h-8 md:h-12 w-auto object-contain" />
                    <button
                        onClick={() => setLang(lang === 'en' ? 'ur' : 'en')}
                        className="px-3 py-1 rounded-md bg-slate-100 text-slate-700 font-bold text-[10px] md:text-xs hover:bg-slate-200 transition-colors"
                    >
                        {lang === 'en' ? 'URDU' : 'ENGLISH'}
                    </button>

                    <nav className="hidden lg:flex items-center gap-8 ms-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-bold text-slate-600 hover:text-afaq-blue transition-colors uppercase tracking-widest"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden md:block relative dropdown-container">
                        <button
                            onClick={() => setShowDropdown(!showDropdown)}
                            className="bg-gradient-to-r from-afaq-green to-emerald-600 hover:from-emerald-600 hover:to-afaq-green text-white px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            {t.navbar.contact}
                        </button>

                        {showDropdown && (
                            <div className="absolute top-full end-0 mt-4 w-80 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-4 duration-300">
                                <div className="p-4 bg-slate-50/50 border-b border-slate-100">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Immediate Assistance</p>
                                </div>
                                {[
                                    { num: "056 826 2134", wa: "971568262134" },
                                    { num: "055 935 9616", wa: "971559359616" },
                                    { num: "055 536 5465", wa: "971555365465" }
                                ].map((c, i) => (
                                    <div key={i} className="px-2 py-1">
                                        <a
                                            href={`https://wa.me/${c.wa}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-4 p-3 hover:bg-green-50/50 rounded-xl transition-all duration-300 group"
                                        >
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-green-400 blur-md opacity-0 group-hover:opacity-40 transition-opacity rounded-full" />
                                                <div className="relative p-2 bg-green-500 rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                                                    <MessageCircle size={16} className="text-white" />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Line {i + 1}</p>
                                                <p className="text-sm font-bold text-slate-700">{c.num}</p>
                                            </div>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                </div>
            </div>

        </header>
    )
}

function App() {
    const [shippingMode, setShippingMode] = useState('air')
    const [lang, setLang] = useState('en')
    const t = translations[lang]

    const handleWhatsAppSubmit = (e) => {
        e.preventDefault()
        const name = e.target.elements[0].value
        const phone = e.target.elements[1].value
        const message = e.target.elements[2].value

        const whatsappMsg = `*New Inquiry from Website*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Message:* ${message}`
        window.open(`https://wa.me/971555365465?text=${whatsappMsg}`, '_blank')
    }

    return (
        <div dir={lang === 'ur' ? 'rtl' : 'ltr'} className={`relative min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden ${lang === 'ur' ? 'font-urdu' : ''}`}>


            <Navbar lang={lang} setLang={setLang} t={t} />

            <main className="relative z-10 pt-0">
                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
                    {/* World Map Overlay */}
                    <div className="absolute inset-0 bg-world-map z-0 pointer-events-none"></div>

                    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
                        {/* Left Column: Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="max-w-2xl"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="inline-flex items-center gap-2 bg-afaq-light/10 text-afaq-light px-4 py-2 rounded-full text-xs font-bold tracking-[0.2em] mb-8 uppercase border border-afaq-light/20"
                            >
                                <Ship size={14} /> {t.hero.tag}
                            </motion.div>

                            <h1 className="text-4xl sm:text-5xl lg:text-8xl font-black text-white leading-[1.1] md:leading-[1.05] mb-6 md:mb-8 font-poppins italic tracking-tight">
                                {t.hero.title_line1} {lang === 'ur' ? ' ' : <br />}
                                <span className="text-afaq-light">{t.hero.title_line2_1}</span> <span className="text-white">{t.hero.title_line2_2}</span> <br />
                                <span className="text-afaq-green">{t.hero.title_line3}</span>
                            </h1>

                            <p className="text-xl text-slate-300 mb-12 max-w-lg leading-relaxed font-light">
                                {t.hero.description}
                            </p>





                            <div className="mt-10 md:mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 border-t border-white/10 pt-8 md:pt-10">
                                <div className="flex -space-x-3 space-x-reverse">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-afaq-blue bg-slate-800 flex items-center justify-center overflow-hidden">
                                            <img src={`https://i.pravatar.cc/40?u=${i}`} alt="user" />
                                        </div>
                                    ))}
                                </div>
                                <p className="text-sm text-slate-400 font-medium">{lang === 'en' ? <>Trusted by <span className="text-white">5,000+</span> global enterprises</> : <>قابل اعتماد <span className="text-white">5,000+</span> عالمی کاروباری ادارے</>}</p>
                            </div>
                        </motion.div>

                        {/* Right Column: Imagery */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, x: 50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative lg:h-[700px] flex items-center justify-center"
                        >
                            {/* Decorative Elements */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-afaq-blue/20 rounded-full blur-[120px] -z-10"></div>

                            <div className="relative z-10 w-full">
                                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 group">
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                                    <img
                                        src="/hero-image.jpg"
                                        alt="Shipping Docks with Plane"
                                        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                                    />

                                    {/* Glass Metrics on Image */}
                                    {/* Shipping Option Selector */}
                                    <div className="absolute bottom-4 md:bottom-8 inset-x-4 md:inset-x-8">
                                        <div className="glass-panel p-4 md:p-5 rounded-2xl md:rounded-3xl border-white/20 backdrop-blur-xl shadow-2xl">
                                            <div className="flex justify-between items-center mb-4">
                                                <p className="text-white/80 text-xs font-bold uppercase tracking-widest ps-1">{t.hero.shipping_method}</p>
                                                <div className="flex gap-1 opacity-50">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                                                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                                                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-3 gap-3">
                                                <motion.div
                                                    whileTap={{ scale: 0.95 }}
                                                    onClick={() => setShippingMode('air')}
                                                    className={`p-3 rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-300 border ${shippingMode === 'air' ? 'bg-afaq-green text-white border-transparent shadow-lg' : 'bg-white/5 text-slate-400 border-white/10 hover:bg-white/10'}`}
                                                >
                                                    <div className={`p-2 rounded-lg ${shippingMode === 'air' ? 'bg-white/20' : 'bg-white/5'}`}>
                                                        <Plane size={20} />
                                                    </div>
                                                    <div className="text-center">
                                                        <p className="text-[9px] uppercase font-bold tracking-wider opacity-70">{t.hero.methods.air.tag}</p>
                                                        <p className="font-bold text-xs">{t.hero.methods.air.title}</p>
                                                    </div>
                                                </motion.div>

                                                <motion.div
                                                    whileTap={{ scale: 0.95 }}
                                                    onClick={() => setShippingMode('sea')}
                                                    className={`p-3 rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-300 border ${shippingMode === 'sea' ? 'bg-afaq-light text-white border-transparent shadow-lg' : 'bg-white/5 text-slate-400 border-white/10 hover:bg-white/10'}`}
                                                >
                                                    <div className={`p-2 rounded-lg ${shippingMode === 'sea' ? 'bg-white/20' : 'bg-white/5'}`}>
                                                        <Ship size={20} />
                                                    </div>
                                                    <div className="text-center">
                                                        <p className="text-[9px] uppercase font-bold tracking-wider opacity-70">{t.hero.methods.sea.tag}</p>
                                                        <p className="font-bold text-xs">{t.hero.methods.sea.title}</p>
                                                    </div>
                                                </motion.div>

                                                <motion.div
                                                    whileTap={{ scale: 0.95 }}
                                                    onClick={() => setShippingMode('ground')}
                                                    className={`p-3 rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-300 border ${shippingMode === 'ground' ? 'bg-afaq-blue text-white border-transparent shadow-lg' : 'bg-white/5 text-slate-400 border-white/10 hover:bg-white/10'}`}
                                                >
                                                    <div className={`p-2 rounded-lg ${shippingMode === 'ground' ? 'bg-white/20' : 'bg-white/5'}`}>
                                                        <Truck size={20} />
                                                    </div>
                                                    <div className="text-center">
                                                        <p className="text-[9px] uppercase font-bold tracking-wider opacity-70">{t.hero.methods.ground.tag}</p>
                                                        <p className="font-bold text-xs">{t.hero.methods.ground.title}</p>
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Badge */}
                                <motion.div
                                    animate={{ y: [0, -20, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-10 -end-10 glass-panel p-6 rounded-3xl shadow-2xl border border-white/20 hidden xl:block"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-afaq-green rounded-full flex items-center justify-center text-white font-black text-xl italic shadow-lg">99%</div>
                                        <div>
                                            <p className="text-xs text-slate-400 font-bold uppercase">{t.hero.badge.label}</p>
                                            <p className="text-sm font-black text-afaq-blue">{t.hero.badge.sub}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </section >

                {/* Counter Section */}
                < div className="bg-afaq-blue py-12 relative overflow-hidden" >
                    <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                        <Globe size={400} className="absolute -right-20 -top-20 text-white" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {t.stats.map((stat, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-white text-3xl font-bold font-poppins mb-1">{stat.val}</div>
                                    <div className="text-white/60 text-[10px] uppercase font-bold tracking-tighter">{stat.lab}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div >

                {/* Solutions Grid */}
                <section id="solutions" className="py-20 md:py-24 lg:py-32 bg-slate-50/50">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl mb-20">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-afaq-blue mb-6 font-poppins">{t.solutions.title}</h2>
                            <p className="text-slate-600 text-lg leading-relaxed">{t.solutions.description}</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {t.solutions.items.map((service, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -8 }}
                                    className="bg-white p-10 rounded-[12px] shadow-sm hover:shadow-2xl transition-all border border-slate-100 group"
                                >
                                    <div className={`${service.color} w-14 h-14 rounded-xl flex items-center justify-center text-afaq-blue mb-8 group-hover:bg-afaq-blue group-hover:text-white transition-all`}>
                                        {React.cloneElement(service.icon, { size: 28 })}
                                    </div>
                                    <h3 className="text-xl font-bold text-afaq-blue mb-4 font-poppins">{service.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-8">
                                        {service.desc}
                                    </p>
                                    <a href="#contact" className="text-afaq-light font-bold text-sm tracking-wide flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer">
                                        {t.solutions.proceed} {lang === 'ur' ? <ArrowRight size={14} className="rotate-180" /> : <ArrowRight size={14} />}
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section >

                {/* About Section */}
                <section id="about" className="py-20 md:py-24 lg:py-32 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-12 items-center">
                            <div className="relative group max-w-sm mx-auto lg:mx-0">
                                <div className="aspect-[16/10] bg-slate-50 rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 relative group-hover:shadow-2xl transition-all duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-100 to-transparent"></div>
                                    <div className="flex items-center justify-center h-full p-12 touch-none select-none">
                                        <img
                                            src="/logo.png"
                                            alt="AFAQ AL BAHR Logo"
                                            className="w-3/4 h-3/4 object-contain drop-shadow-xl hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                                        />
                                    </div>
                                </div>
                                <div className="absolute -bottom-6 -end-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[180px] hidden xl:block">
                                    <div className="text-afaq-green mb-2"><Package size={24} /></div>
                                    <p className="text-[10px] leading-tight text-slate-700 font-bold mb-0">{t.about.established}</p>
                                </div>
                            </div>

                            <div className="lg:max-w-xl">
                                <h2 className="text-3xl md:text-5xl font-extrabold text-afaq-blue mb-6 font-poppins leading-tight">{t.about.title}</h2>
                                <p className="text-lg text-slate-600 mb-10 leading-relaxed font-normal">
                                    {t.about.description}
                                </p>
                                <div className="space-y-6 mb-12">
                                    {t.about.list.map((list, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <div className="w-6 h-6 rounded-full bg-afaq-green/10 flex items-center justify-center text-afaq-green">
                                                <ExternalLink size={12} />
                                            </div>
                                            <span className="font-bold text-slate-700">{list}</span>
                                        </div>
                                    ))}
                                </div>
                                <button className="bg-afaq-blue text-white px-12 py-5 rounded-xl font-bold shadow-xl hover:bg-slate-800 transition-all text-sm tracking-widest uppercase">
                                    {t.about.button}
                                </button>
                            </div>
                        </div>
                    </div>
                </section >

                {/* Leadership Section */}
                <section className="py-20 lg:py-32 bg-slate-50 overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-world-map opacity-[0.03]"></div>
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-5xl mx-auto">
                            <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden grid md:grid-cols-5 items-stretch">
                                <div className="md:col-span-2 bg-afaq-blue relative min-h-[350px] md:min-h-[400px]">
                                    <div className="absolute inset-0 bg-gradient-to-br from-afaq-blue to-slate-900"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-full h-full p-4 md:p-6">
                                            <div className="w-full h-full rounded-2xl border border-white/10 overflow-hidden bg-slate-800 shadow-2xl relative group/image">
                                                <img
                                                    src="/onwer.jpeg"
                                                    alt={t.about.leadership.name}
                                                    className="w-full h-full object-cover object-top scale-110 group-hover/image:scale-100 transition-transform duration-1000"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-afaq-blue/60 via-transparent to-transparent opacity-60"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-8 md:bottom-10 inset-x-8 md:inset-x-10">
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2 font-poppins">{t.about.leadership.name}</h3>
                                        <p className="text-afaq-green font-bold text-[10px] md:text-xs tracking-widest uppercase">{t.about.leadership.role}</p>
                                    </div>
                                </div>
                                <div className="md:col-span-3 p-8 md:p-12 lg:p-20 flex flex-col justify-center">
                                    <div className="mb-6 md:mb-10 text-afaq-blue/20">
                                        <svg width="45" height="34" viewBox="0 0 60 45" fill="currentColor" className="md:w-[60px] md:h-[45px]">
                                            <path d="M13.3333 45L0 31.6667V0H26.6667V31.6667H13.3333V45ZM46.6667 45L33.3333 31.6667V0H60V31.6667H46.6667V45Z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-afaq-blue mb-6 md:mb-8 font-poppins">{t.about.leadership.title}</h2>
                                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed italic font-medium mb-8 md:mb-10">
                                        "{t.about.leadership.message}"
                                    </p>
                                    <div className="flex items-center gap-4 md:gap-6">
                                        <div className="w-8 md:w-12 h-0.5 bg-afaq-green"></div>
                                        <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] md:text-xs">Excellence in Global Logistics</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-20 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12 md:mb-16">
                                <h2 className="text-3xl md:text-5xl font-extrabold text-afaq-blue mb-4 md:mb-6 font-poppins">{t.contact.title}</h2>
                                <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                                    {t.contact.description}
                                </p>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
                                {/* Contact Form */}
                                <div className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-slate-100">
                                    <h3 className="text-2xl font-bold text-afaq-blue mb-8 font-poppins">{t.contact.form_title}</h3>
                                    <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">{t.contact.labels.name}</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-afaq-blue focus:outline-none transition-colors"
                                                placeholder={t.contact.labels.name_placeholder}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">{t.contact.labels.phone}</label>
                                            <input
                                                type="tel"
                                                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-afaq-blue focus:outline-none transition-colors"
                                                placeholder="+971 XX XXX XXXX"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">{t.contact.labels.message}</label>
                                            <textarea
                                                rows="5"
                                                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-afaq-blue focus:outline-none transition-colors resize-none"
                                                placeholder={t.contact.labels.msg_placeholder}
                                            ></textarea>
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-afaq-green to-emerald-600 hover:from-emerald-600 hover:to-afaq-green text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                                        >
                                            {t.contact.labels.submit}
                                        </button>
                                    </form>
                                </div>

                                {/* Contact Information */}
                                <div className="space-y-8">
                                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-afaq-blue/10 rounded-xl">
                                                <Globe size={28} className="text-afaq-blue" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-afaq-blue mb-2 text-lg">{t.contact.office_title}</h4>
                                                <p className="text-slate-600">
                                                    {t.contact.office_desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-slate-900 to-afaq-blue p-8 rounded-[2.5rem] shadow-2xl border border-white/10 relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-afaq-green/10 blur-[80px] rounded-full -mr-20 -mt-20 group-hover:bg-afaq-green/20 transition-colors duration-700" />

                                        <h4 className="font-bold text-white mb-8 text-xl font-poppins relative z-10 flex items-center gap-3">
                                            <span className="w-8 h-1 bg-afaq-green rounded-full shadow-[0_0_15px_rgba(14,143,106,0.5)]" />
                                            {t.contact.quick_title}
                                        </h4>

                                        <div className="grid gap-6 relative z-10">
                                            {[
                                                { num: "056 826 2134", wa: "971568262134" },
                                                { num: "055 935 9616", wa: "971559359616" },
                                                { num: "055 536 5465", wa: "971555365465" }
                                            ].map((c, i) => (
                                                <div key={i} className="group/item">
                                                    <a
                                                        href={`https://wa.me/${c.wa}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center justify-between p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-afaq-green/40 transition-all duration-500 group-hover/item:-translate-y-1 shadow-lg"
                                                    >
                                                        <div className="flex items-center gap-5">
                                                            <div className="relative">
                                                                <div className="absolute inset-0 bg-afaq-green blur-[10px] opacity-20 animate-pulse" />
                                                                <div className="relative p-4 bg-afaq-green rounded-xl shadow-[0_0_20px_rgba(14,143,106,0.3)]">
                                                                    <MessageCircle size={24} className="text-white" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <p className="text-[10px] font-black text-afaq-green uppercase tracking-[0.2em] mb-1">Service Line {i + 1}</p>
                                                                <p className="text-lg font-bold text-white tracking-wider">{c.num}</p>
                                                            </div>
                                                        </div>
                                                        <div className="p-3 rounded-full bg-white/5 group-hover/item:bg-afaq-green transition-colors duration-500">
                                                            <ArrowRight size={20} className="text-white" />
                                                        </div>
                                                    </a>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-8 pt-8 border-t border-white/5 text-center">
                                            <p className="text-slate-400 text-xs font-medium uppercase tracking-[0.3em]">Direct WhatsApp Connect</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >

                <footer dir="ltr" className="bg-slate-900 pt-16 md:pt-24 pb-10 md:pb-12 text-white text-left">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-24">
                            <div className="col-span-1 lg:col-span-2">
                                <div className="flex items-center gap-3 mb-8 md:mb-10 bg-white p-2 rounded-lg inline-block w-fit">
                                    <img src="/logo.png" alt="AFAQ AL BAHR" className="h-10 md:h-16 w-auto" />
                                </div>
                                <p className="text-slate-400 leading-relaxed mb-10 max-w-md text-lg">
                                    Premium logistics, freight forwarding, and integrated supply chain management solutions since 2022.
                                </p>
                                <SocialLinks facebookUrl="https://www.facebook.com/profile.php?id=61582700610000" linkedinUrl="https://www.linkedin.com/company/afaq-al-bahr-shipping-l-l-c/about/?viewAsMember=true" />
                            </div>

                            <div>
                                <h4 className="text-xl font-bold mb-8 font-poppins underline underline-offset-8 decoration-afaq-green decoration-4">{t.navbar.solutions}</h4>
                                <ul className="space-y-4 text-slate-400 font-medium">
                                    <li><a href="#" className="hover:text-afaq-light transition-colors">{t.navbar.solutions}</a></li>
                                    <li><a href="#" className="hover:text-afaq-light transition-colors">{t.navbar.network}</a></li>
                                    <li><a href="#" className="hover:text-afaq-light transition-colors">{t.navbar.about}</a></li>
                                    <li><a href="#" className="hover:text-afaq-light transition-colors">{t.navbar.track}</a></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-xl font-bold mb-8 font-poppins underline underline-offset-8 decoration-afaq-light decoration-4">{t.navbar.connect}</h4>
                                <div className="space-y-6 text-slate-400">
                                    <div className="flex gap-4">
                                        <Globe size={20} className="text-afaq-light shrink-0" />
                                        <p className="text-sm">{t.contact.office_desc}</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <ExternalLink size={20} className="text-afaq-light shrink-0" />
                                        <p className="text-sm">{t.contact.contact_desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-slate-500 text-xs font-medium tracking-widest uppercase">{t.navbar.rights}</p>
                            <div className="flex gap-8 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                                <a href="#" className="hover:text-white transition-colors">{t.navbar.privacy}</a>
                                <a href="#" className="hover:text-white transition-colors">{t.navbar.legal}</a>
                                <a href="#" className="hover:text-white transition-colors">{t.navbar.cookies}</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </main >
        </div >
    )
}

export default App

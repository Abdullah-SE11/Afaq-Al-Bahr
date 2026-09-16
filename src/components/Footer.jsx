import React from 'react'
import { Globe, Phone, MessageCircle, Mail, MapPin, Facebook, Linkedin } from 'lucide-react'

export function Footer({ navigateTo, t }) {
  return (
 <footer className="bg-[#06334d] text-white py-12 border-t border-white/10">

  <div className="container mx-auto px-4 md:px-8">

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

      {/* Company */}
      <div>
        <div
          onClick={() => navigateTo?.('home')}
          className="flex items-center gap-3.5 mb-4 cursor-pointer group w-fit"
        >
          <img
            src="/Assets/logo.png"
            alt="Afaq Al Bahr"
            className="h-12 md:h-14 w-auto object-contain bg-white rounded-xl group-hover:scale-105 transition-transform duration-300"
          />
          {/* <div>
            <span className="text-xl md:text-2xl font-black tracking-tight text-white font-poppins block leading-tight">
              AFAQ AL BAHR
            </span>
            <span className="text-[11px] font-bold tracking-widest text-[#5DF8D8] uppercase block">
              SHIPPING L.L.C.
            </span>
          </div> */}
        </div>

        <p className="text-sm text-slate-300 leading-relaxed mt-4 max-w-xs">
          Pioneering global supply chain solutions with speed, precision,
          and state of the art tracking intelligence across 50+ countries.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-3 mt-5">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-9 h-9 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#06334d] hover:bg-[#5DF8D8] hover:border-[#5DF8D8] hover:scale-105 transition-all duration-300 shadow-sm"
          >
            <Facebook className="w-4 h-4" />
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#06334d] hover:bg-[#5DF8D8] hover:border-[#5DF8D8] hover:scale-105 transition-all duration-300 shadow-sm"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>


      {/* Quick Links */}
      <div>
        <h4 className="text-1xl font-bold mb-4 text-white">
          Quick Links
        </h4>

        <div className="space-y-2 text-sm text-slate-300">
          <p
            onClick={() => navigateTo?.('home')}
            className="hover:text-[#5DF8D8] cursor-pointer transition-colors"
          >
            Home
          </p>

          <p
            onClick={() => navigateTo?.('about')}
            className="hover:text-[#5DF8D8] cursor-pointer transition-colors"
          >
            About Us
          </p>

          <p
            onClick={() => navigateTo?.('about')}
            className="hover:text-[#5DF8D8] cursor-pointer transition-colors"
          >
            Global Network
          </p>

          <p
            onClick={() => navigateTo?.('home')}
            className="hover:text-[#5DF8D8] cursor-pointer transition-colors"
          >
            Track Shipment
          </p>

          <p
            onClick={() => navigateTo?.('contact')}
            className="hover:text-[#5DF8D8] cursor-pointer transition-colors"
          >
            Careers
          </p>

          <p
            onClick={() => navigateTo?.('about')}
            className="hover:text-[#5DF8D8] cursor-pointer transition-colors"
          >
            News & Insights
          </p>
        </div>
      </div>


      {/* Services */}
      <div>
        <h4 className="text-1xl font-bold mb-4 text-white">
          Services
        </h4>

        <div className="space-y-2 text-sm text-slate-300">
          <p
            onClick={() => navigateTo?.('services')}
            className="hover:text-[#5DF8D8] cursor-pointer transition-colors"
          >
            Road Freight
          </p>

          <p
            onClick={() => navigateTo?.('services')}
            className="hover:text-[#5DF8D8] cursor-pointer transition-colors"
          >
            Sea Freight
          </p>

          <p
            onClick={() => navigateTo?.('services')}
            className="hover:text-[#5DF8D8] cursor-pointer transition-colors"
          >
            Air Freight
          </p>

          <p
            onClick={() => navigateTo?.('services')}
            className="hover:text-[#5DF8D8] cursor-pointer transition-colors"
          >
            Warehousing & Distribution
          </p>

          <p
            onClick={() => navigateTo?.('services')}
            className="hover:text-[#5DF8D8] cursor-pointer transition-colors"
          >
            Express Delivery
          </p>

          <p
            onClick={() => navigateTo?.('services')}
            className="hover:text-[#5DF8D8] cursor-pointer transition-colors"
          >
            Supply Chain Management
          </p>
        </div>
      </div>


      {/* Contact */}
      <div>
        <h4 className="text-1xl font-bold mb-4 text-white">
          Contact & Global Operations
        </h4>

        <div className="space-y-3 text-sm text-slate-300">

          <p className="flex gap-2 items-center">
            <Phone className="w-4 h-4 text-[#5DF8D8] flex-shrink-0" />
            24/7 Operations Desk
          </p>

          <p className="flex gap-2 items-center">
            <Mail className="w-4 h-4 text-[#5DF8D8] flex-shrink-0" />
            support@afaqalbahr.com
          </p>

          <p className="flex gap-2 items-center">
            <Phone className="w-4 h-4 text-[#5DF8D8] flex-shrink-0" />
            +971 4 888 9200
          </p>

          <p className="flex gap-2 items-start">
            <MapPin className="w-4 h-4 text-[#5DF8D8] flex-shrink-0 mt-0.5" />

            <span>
              Global Logistics Hub Terminal 4,
              Port Rashid, Dubai
            </span>
          </p>

        </div>
      </div>

    </div>


    {/* Bottom Bar */}
    <div className="border-t border-white/10 mt-10 pt-5 flex flex-col md:flex-row justify-between gap-3 text-xs text-slate-400">

      <span>
      © {new Date().getFullYear()} Afaq Al Bahr Logistics Inc. All rights reserved.
      </span>

      <div className="flex flex-wrap gap-4">

        <span className="hover:text-[#5DF8D8] cursor-pointer transition-colors">
          Terms & Conditions
        </span>

        <span className="hover:text-[#5DF8D8] cursor-pointer transition-colors">
          Privacy Policy
        </span>

        <span className="hover:text-[#5DF8D8] cursor-pointer transition-colors">
          Security Standards
        </span>

      </div>

    </div>

  </div>
</footer>
  )
}

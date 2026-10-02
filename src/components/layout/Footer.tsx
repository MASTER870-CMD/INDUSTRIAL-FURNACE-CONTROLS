import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#15191C] text-white pt-16 pb-8 border-t-4 border-[#C96F2C]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1 */}
          <div>
            <div className="flex flex-col mb-4">
              <span className="text-xl font-bold text-white leading-tight tracking-tight">
                INDUSTRIAL FURNACE
              </span>
              <span className="text-[#C96F2C] text-sm font-semibold tracking-widest">
                & CONTROLS
              </span>
            </div>
            <p className="text-[#E6EAEC] text-sm leading-relaxed opacity-80">
              Industrial and laboratory heating solutions, furnaces, ovens, controls, sensors and heating systems.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Products</h4>
            <ul className="space-y-2">
              <li><Link href="/products/furnaces" className="text-[#E6EAEC] text-sm opacity-80 hover:opacity-100 hover:text-[#C96F2C] transition-colors">Furnaces</Link></li>
              <li><Link href="/products/ovens" className="text-[#E6EAEC] text-sm opacity-80 hover:opacity-100 hover:text-[#C96F2C] transition-colors">Ovens</Link></li>
              <li><Link href="/products/process-control" className="text-[#E6EAEC] text-sm opacity-80 hover:opacity-100 hover:text-[#C96F2C] transition-colors">Process & Controls</Link></li>
              <li><Link href="/products/thermocouples-rtds" className="text-[#E6EAEC] text-sm opacity-80 hover:opacity-100 hover:text-[#C96F2C] transition-colors">Thermocouples / RTDs</Link></li>
              <li><Link href="/products/industrial-heaters" className="text-[#E6EAEC] text-sm opacity-80 hover:opacity-100 hover:text-[#C96F2C] transition-colors">Industrial Heaters</Link></li>
              <li><Link href="/products/furnace-accessories" className="text-[#E6EAEC] text-sm opacity-80 hover:opacity-100 hover:text-[#C96F2C] transition-colors">Accessories</Link></li>
              <li><Link href="/products/wax-heating-systems" className="text-[#E6EAEC] text-sm opacity-80 hover:opacity-100 hover:text-[#C96F2C] transition-colors">Wax Heating Systems</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-[#E6EAEC] text-sm opacity-80 hover:opacity-100 hover:text-[#C96F2C] transition-colors">About</Link></li>
              <li><Link href="/clients" className="text-[#E6EAEC] text-sm opacity-80 hover:opacity-100 hover:text-[#C96F2C] transition-colors">Clients</Link></li>
              <li><Link href="/certificates" className="text-[#E6EAEC] text-sm opacity-80 hover:opacity-100 hover:text-[#C96F2C] transition-colors">Certificates</Link></li>
              <li><Link href="/gallery" className="text-[#E6EAEC] text-sm opacity-80 hover:opacity-100 hover:text-[#C96F2C] transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="text-[#E6EAEC] text-sm opacity-80 hover:opacity-100 hover:text-[#C96F2C] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contact</h4>
            <address className="not-italic text-[#E6EAEC] text-sm opacity-80 space-y-2">
              <p className="font-semibold text-white opacity-100">Mr. D. B. Jain</p>
              <p>+91 99001-29807</p>
              <p>+91-80-2347 9840</p>
              <p>jain@indfurnace.com</p>
              <div className="pt-2">
                <p>SB 47, 1st Cross, 1st Stage,</p>
                <p>Peenya Industrial Estate,</p>
                <p>Bangalore – 560058, Karnataka, India</p>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-[#252D32] pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#66727A]">
          <p>&copy; {new Date().getFullYear()} Industrial Furnace & Controls. All rights reserved.</p>
          <p className="mt-2 md:mt-0 italic">Website concept / redesign demonstration.</p>
        </div>
      </div>
    </footer>
  );
}

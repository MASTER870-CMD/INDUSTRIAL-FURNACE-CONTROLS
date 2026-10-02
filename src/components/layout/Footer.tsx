import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#F7F8FA] text-[#17191C] pt-16 pb-8 border-t-[3px] border-[#0000FF]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-12">
          {/* Column 1 */}
          <div>
            <div className="flex flex-col mb-4">
              <span className="text-xl md:text-2xl font-bold text-[#0000FF] leading-tight tracking-tight">
                INDUSTRIAL FURNACE <span className="text-[#17191C]">& CONTROLS</span>
              </span>
              <span className="text-[#F59625] text-xs font-semibold tracking-wide">
                Low Power and More Heat Is Our Motto
              </span>
            </div>
            <p className="text-[#5B6268] text-sm leading-relaxed">
              Industrial and laboratory heating solutions, furnaces, ovens, controls, sensors and heating systems.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#0000FF]">Products</h4>
            <ul className="space-y-3">
              <li><Link href="/products/furnaces" className="text-[#5B6268] text-sm font-semibold hover:text-[#F59625] transition-colors">Furnaces</Link></li>
              <li><Link href="/products/ovens" className="text-[#5B6268] text-sm font-semibold hover:text-[#F59625] transition-colors">Ovens</Link></li>
              <li><Link href="/products/process-control" className="text-[#5B6268] text-sm font-semibold hover:text-[#F59625] transition-colors">Process & Controls</Link></li>
              <li><Link href="/products/thermocouples-rtds" className="text-[#5B6268] text-sm font-semibold hover:text-[#F59625] transition-colors">Thermocouples / RTDs</Link></li>
              <li><Link href="/products/industrial-heaters" className="text-[#5B6268] text-sm font-semibold hover:text-[#F59625] transition-colors">Industrial Heaters</Link></li>
              <li><Link href="/products/furnace-accessories" className="text-[#5B6268] text-sm font-semibold hover:text-[#F59625] transition-colors">Accessories</Link></li>
              <li><Link href="/products/wax-heating-systems" className="text-[#5B6268] text-sm font-semibold hover:text-[#F59625] transition-colors">Wax Heating Systems</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#0000FF]">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-[#5B6268] text-sm font-semibold hover:text-[#F59625] transition-colors">About</Link></li>
              <li><Link href="/applications" className="text-[#5B6268] text-sm font-semibold hover:text-[#F59625] transition-colors">Applications</Link></li>
              <li><Link href="/clients" className="text-[#5B6268] text-sm font-semibold hover:text-[#F59625] transition-colors">Clients & Markets</Link></li>
              <li><Link href="/certificates" className="text-[#5B6268] text-sm font-semibold hover:text-[#F59625] transition-colors">Certificates</Link></li>
              <li><Link href="/gallery" className="text-[#5B6268] text-sm font-semibold hover:text-[#F59625] transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="text-[#5B6268] text-sm font-semibold hover:text-[#F59625] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#0000FF]">Contact</h4>
            <address className="not-italic text-[#5B6268] text-sm space-y-3 font-medium">
              <p className="font-bold text-[#17191C]">Mr. D. B. Jain</p>
              <p className="flex flex-col">
                <a href="tel:+919900129807" className="hover:text-[#0000FF]">+91 99001-29807</a>
                <a href="tel:+918023479840" className="hover:text-[#0000FF]">+91-80-2347 9840</a>
              </p>
              <p><a href="mailto:jain@indfurnace.com" className="hover:text-[#0000FF]">jain@indfurnace.com</a></p>
              <div className="pt-2">
                <p>SB 47, 1st Cross, 1st Stage,</p>
                <p>Peenya Industrial Estate,</p>
                <p>Bangalore – 560058, Karnataka, India</p>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-[#E3E6E8] pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#5B6268]">
          <p>&copy; {new Date().getFullYear()} Industrial Furnace & Controls. All rights reserved.</p>
          <p className="mt-2 md:mt-0 italic">Website redesign concept / demonstration.</p>
        </div>
      </div>
    </footer>
  );
}

"use client";
import React from 'react';
import { MessageCircle, Phone, FileText } from 'lucide-react';
import Link from 'next/link';

export default function FloatingActions() {
  return (
    <>
      {/* Desktop Floating WhatsApp */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col gap-3">
        <a 
          href="/contact?quote=true"
          className="bg-[#252D32] text-white p-3 rounded-full shadow-lg hover:bg-[#15191C] hover:scale-110 transition-all flex items-center justify-center group relative"
          title="Request Quote"
        >
          <FileText className="w-6 h-6" />
          <span className="absolute right-full mr-4 bg-[#252D32] text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Request Quote
          </span>
        </a>
        <a 
          href="https://wa.me/919900129807"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#128C7E] hover:scale-110 transition-all flex items-center justify-center group relative"
          title="WhatsApp Us"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute right-full mr-4 bg-[#25D366] text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            WhatsApp Us
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 border-t border-[#E6EAEC] flex justify-between">
        <a href="tel:+919900129807" className="flex-1 flex flex-col items-center justify-center py-3 text-[#252D32] active:bg-[#F7F7F4] border-r border-[#E6EAEC]">
          <Phone className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-bold">CALL</span>
        </a>
        <a href="https://wa.me/919900129807" target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col items-center justify-center py-3 text-[#25D366] active:bg-[#F7F7F4] border-r border-[#E6EAEC]">
          <MessageCircle className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-bold">WHATSAPP</span>
        </a>
        <Link href="/contact?quote=true" className="flex-1 flex flex-col items-center justify-center py-3 text-[#C96F2C] active:bg-[#F7F7F4]">
          <FileText className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-bold">QUOTE</span>
        </Link>
      </div>
    </>
  );
}

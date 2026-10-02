"use client";
import React from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, FileText } from 'lucide-react';

export default function FloatingActions() {
  return (
    <>
      {/* Desktop Floating WhatsApp */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col gap-3">
        <a 
          href="https://wa.me/919900129807" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all duration-300 ease-out z-50"
          aria-label="WhatsApp Us"
        >
          <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-40"></div>
          <MessageCircle className="w-7 h-7 relative z-10" />
        </a>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 flex shadow-[0_-4px_12px_rgba(0,0,0,0.05)] text-sm font-bold bg-white">
        <a 
          href="tel:+919900129807" 
          className="flex-1 flex flex-col items-center justify-center py-3 text-[#17191C] hover:bg-[#F7F8FA] border-t-2 border-[#E3E6E8] active:bg-[#E3E6E8]"
        >
          <Phone className="w-5 h-5 mb-1 text-[#0000FF]" />
          CALL
        </a>
        <a 
          href="https://wa.me/919900129807" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-3 text-[#17191C] hover:bg-[#F7F8FA] border-t-2 border-[#E3E6E8] border-l border-[#E3E6E8] active:bg-[#E3E6E8]"
        >
          <MessageCircle className="w-5 h-5 mb-1 text-[#25D366]" />
          WHATSAPP
        </a>
        <Link 
          href="/contact?quote=true"
          className="flex-1 flex flex-col items-center justify-center py-3 text-white bg-[#0000FF] border-t-2 border-[#0000FF] active:bg-[#0000CC]"
        >
          <FileText className="w-5 h-5 mb-1 text-white" />
          QUOTE
        </Link>
      </div>
    </>
  );
}

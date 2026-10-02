"use client";
import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a 
        href="https://wa.me/919900129807" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all duration-300 ease-out"
        aria-label="WhatsApp Us"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}

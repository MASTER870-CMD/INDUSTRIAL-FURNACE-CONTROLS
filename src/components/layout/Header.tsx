"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { categories } from '@/data/categories';
import { Button } from '../ui/Button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-[#F7F7F4] py-5 border-b border-[#E6EAEC]'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
        <Link href="/" className="flex flex-col">
          <span className="text-xl md:text-2xl font-bold text-[#15191C] leading-tight tracking-tight">
            INDUSTRIAL FURNACE
          </span>
          <span className="text-[#C96F2C] text-sm md:text-base font-semibold tracking-widest">
            & CONTROLS
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-sm font-semibold text-[#252D32] hover:text-[#C96F2C] transition-colors">HOME</Link>
          <Link href="/about" className="text-sm font-semibold text-[#252D32] hover:text-[#C96F2C] transition-colors">ABOUT</Link>
          
          {/* Mega Menu Trigger */}
          <div 
            className="relative group"
            onMouseEnter={() => setMegaMenuOpen(true)}
            onMouseLeave={() => setMegaMenuOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-semibold text-[#252D32] hover:text-[#C96F2C] transition-colors py-2">
              PRODUCTS <ChevronDown className="w-4 h-4" />
            </button>
            
            {/* Mega Menu Dropdown */}
            {megaMenuOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] bg-white shadow-xl border border-[#E6EAEC] p-8 grid grid-cols-3 gap-6 rounded-sm">
                {categories.map(cat => (
                  <div key={cat.id}>
                    <Link href={`/products/${cat.slug}`} className="block font-bold text-[#15191C] mb-2 hover:text-[#C96F2C]">
                      {cat.title}
                    </Link>
                    <ul className="space-y-1">
                      {cat.products.slice(0, 4).map(prod => (
                        <li key={prod.slug}>
                          <Link href={`/products/${cat.slug}/${prod.slug}`} className="text-sm text-[#66727A] hover:text-[#C96F2C]">
                            {prod.name}
                          </Link>
                        </li>
                      ))}
                      {cat.products.length > 4 && (
                        <li>
                          <Link href={`/products/${cat.slug}`} className="text-xs font-semibold text-[#C96F2C] mt-1 inline-block">
                            View All {cat.title} →
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link href="/applications" className="text-sm font-semibold text-[#252D32] hover:text-[#C96F2C] transition-colors">APPLICATIONS</Link>
          <Link href="/clients" className="text-sm font-semibold text-[#252D32] hover:text-[#C96F2C] transition-colors">CLIENTS</Link>
          <Link href="/gallery" className="text-sm font-semibold text-[#252D32] hover:text-[#C96F2C] transition-colors">GALLERY</Link>
          <Link href="/contact" className="text-sm font-semibold text-[#252D32] hover:text-[#C96F2C] transition-colors">CONTACT</Link>
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact?quote=true" variant="primary" size="sm">
            Request Quote
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-[#15191C]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-[#E6EAEC] max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col p-4 space-y-4">
            <Link href="/" className="font-semibold text-[#252D32]" onClick={() => setMobileMenuOpen(false)}>HOME</Link>
            <Link href="/about" className="font-semibold text-[#252D32]" onClick={() => setMobileMenuOpen(false)}>ABOUT</Link>
            <div className="font-semibold text-[#252D32] border-b border-[#E6EAEC] pb-2">PRODUCTS</div>
            <div className="pl-4 flex flex-col space-y-3">
              {categories.map(cat => (
                <Link key={cat.id} href={`/products/${cat.slug}`} className="text-sm text-[#66727A]" onClick={() => setMobileMenuOpen(false)}>
                  {cat.title}
                </Link>
              ))}
            </div>
            <Link href="/applications" className="font-semibold text-[#252D32]" onClick={() => setMobileMenuOpen(false)}>APPLICATIONS</Link>
            <Link href="/contact" className="font-semibold text-[#252D32]" onClick={() => setMobileMenuOpen(false)}>CONTACT</Link>
            <Button href="/contact?quote=true" variant="primary" className="w-full justify-center">
              Request Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

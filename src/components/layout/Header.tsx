"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { categories } from '@/data/categories';
import { Button } from '../ui/Button';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white ${
        isScrolled ? 'shadow-sm py-3 border-b border-[#E3E6E8]' : 'py-4 border-b border-[#E3E6E8]'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#0000FF] rounded-full flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-xl">IF</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-bold text-[#0000FF] leading-tight tracking-tight">
              INDUSTRIAL FURNACE <span className="text-[#17191C]">& CONTROLS</span>
            </span>
            <span className="text-[#F59625] text-xs font-semibold tracking-wide">
              Low Power and More Heat Is Our Motto
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-8">
          <Link href="/" className="text-sm font-semibold text-[#17191C] hover:text-[#0000FF] transition-colors">HOME</Link>
          <Link href="/about" className="text-sm font-semibold text-[#17191C] hover:text-[#0000FF] transition-colors">ABOUT</Link>
          
          {/* Mega Menu Trigger */}
          <div 
            className="relative group"
            onMouseEnter={() => setMegaMenuOpen(true)}
            onMouseLeave={() => setMegaMenuOpen(false)}
          >
            <Link href="/products" className="flex items-center gap-1 text-sm font-semibold text-[#17191C] hover:text-[#0000FF] transition-colors py-2">
              PRODUCTS <ChevronDown className="w-4 h-4" />
            </Link>
            
            {/* Mega Menu Dropdown */}
            {megaMenuOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[900px] bg-white shadow-xl border border-[#E3E6E8] p-8 grid grid-cols-4 gap-6 rounded-sm">
                {categories.map(cat => (
                  <div key={cat.id}>
                    <Link href={`/products/${cat.slug}`} className="block font-bold text-[#0000FF] mb-3 hover:text-[#F59625] text-sm uppercase">
                      {cat.title}
                    </Link>
                    <ul className="space-y-2">
                      {cat.products.slice(0, 5).map(prod => (
                        <li key={prod.slug}>
                          <Link href={`/products/${cat.slug}/${prod.slug}`} className="text-sm text-[#5B6268] hover:text-[#0000FF] transition-colors">
                            {prod.name}
                          </Link>
                        </li>
                      ))}
                      {cat.products.length > 5 && (
                        <li>
                          <Link href={`/products/${cat.slug}`} className="text-xs font-semibold text-[#F59625] mt-2 inline-block hover:underline">
                            View All →
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link href="/applications" className="text-sm font-semibold text-[#17191C] hover:text-[#0000FF] transition-colors">APPLICATIONS</Link>
          <Link href="/clients" className="text-sm font-semibold text-[#17191C] hover:text-[#0000FF] transition-colors">CLIENTS</Link>
          <Link href="/gallery" className="text-sm font-semibold text-[#17191C] hover:text-[#0000FF] transition-colors">GALLERY</Link>
          <Link href="/contact" className="text-sm font-semibold text-[#17191C] hover:text-[#0000FF] transition-colors">CONTACT</Link>
        </nav>

        <div className="hidden xl:block">
          <Button href="/contact?quote=true" variant="primary" size="sm">
            REQUEST A QUOTE
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="xl:hidden p-2 text-[#0000FF]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-lg border-b border-[#E3E6E8] max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col p-6 space-y-5">
            <Link href="/" className="font-bold text-[#17191C] text-lg" onClick={() => setMobileMenuOpen(false)}>HOME</Link>
            <Link href="/about" className="font-bold text-[#17191C] text-lg" onClick={() => setMobileMenuOpen(false)}>ABOUT</Link>
            
            <div className="font-bold text-[#0000FF] text-lg border-b border-[#E3E6E8] pb-2">PRODUCTS</div>
            <div className="pl-4 flex flex-col space-y-4">
              {categories.map(cat => (
                <Link key={cat.id} href={`/products/${cat.slug}`} className="text-base text-[#5B6268] font-semibold" onClick={() => setMobileMenuOpen(false)}>
                  {cat.title}
                </Link>
              ))}
            </div>
            
            <Link href="/applications" className="font-bold text-[#17191C] text-lg" onClick={() => setMobileMenuOpen(false)}>APPLICATIONS</Link>
            <Link href="/clients" className="font-bold text-[#17191C] text-lg" onClick={() => setMobileMenuOpen(false)}>CLIENTS</Link>
            <Link href="/gallery" className="font-bold text-[#17191C] text-lg" onClick={() => setMobileMenuOpen(false)}>GALLERY</Link>
            <Link href="/contact" className="font-bold text-[#17191C] text-lg" onClick={() => setMobileMenuOpen(false)}>CONTACT</Link>
            
            <Button href="/contact?quote=true" variant="primary" className="w-full justify-center py-4 mt-4 text-lg">
              REQUEST A QUOTE
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

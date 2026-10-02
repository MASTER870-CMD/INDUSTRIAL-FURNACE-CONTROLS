"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { categories } from '@/data/categories';
import { Button } from '../ui/Button';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/' && pathname !== '/') return false;
    return pathname.startsWith(path);
  };
  
  const navLinkClass = (path: string) => `
    relative group text-[13px] font-semibold tracking-wide uppercase py-2 transition-colors
    ${isActive(path) ? 'text-[#0000FF]' : 'text-[#17191C] hover:text-[#0000FF]'}
  `;
  
  const underlineClass = (path: string) => `
    absolute bottom-0 left-0 h-[2px] bg-[#0000FF] transition-all duration-300 ease-out
    ${isActive(path) ? 'w-full' : 'w-0 group-hover:w-full'}
  `;

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
        <Link href="/" className="flex items-center shrink-0">
          <Image src="/images/ifc/brand/logo.jpg" alt="Industrial Furnace & Controls" width={220} height={45} className="object-contain" priority />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-8">
          <Link href="/" className={navLinkClass('/')}>
            HOME
            <span className={underlineClass('/')}></span>
          </Link>
          <Link href="/about" className={navLinkClass('/about')}>
            ABOUT
            <span className={underlineClass('/about')}></span>
          </Link>
          
          {/* Mega Menu Trigger */}
          <div 
            className="relative group/mega"
            onMouseEnter={() => setMegaMenuOpen(true)}
            onMouseLeave={() => setMegaMenuOpen(false)}
          >
            <Link href="/products" className={`flex items-center gap-1 ${navLinkClass('/products')}`}>
              PRODUCTS <ChevronDown className="w-4 h-4" />
              <span className={underlineClass('/products')}></span>
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

          <Link href="/applications" className={navLinkClass('/applications')}>
            APPLICATIONS
            <span className={underlineClass('/applications')}></span>
          </Link>
          <Link href="/clients" className={navLinkClass('/clients')}>
            CLIENTS
            <span className={underlineClass('/clients')}></span>
          </Link>
          <Link href="/gallery" className={navLinkClass('/gallery')}>
            GALLERY
            <span className={underlineClass('/gallery')}></span>
          </Link>
          <Link href="/contact" className={navLinkClass('/contact')}>
            CONTACT
            <span className={underlineClass('/contact')}></span>
          </Link>
        </nav>

        <div className="hidden xl:block">
          <Button href="/contact?quote=true" variant="primary" size="sm" className="whitespace-nowrap">
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
            <Link href="/" className={`font-bold text-lg ${isActive('/') ? 'text-[#0000FF]' : 'text-[#17191C]'}`} onClick={() => setMobileMenuOpen(false)}>HOME</Link>
            <Link href="/about" className={`font-bold text-lg ${isActive('/about') ? 'text-[#0000FF]' : 'text-[#17191C]'}`} onClick={() => setMobileMenuOpen(false)}>ABOUT</Link>
            
            <div className={`font-bold text-lg border-b border-[#E3E6E8] pb-2 ${isActive('/products') ? 'text-[#0000FF]' : 'text-[#17191C]'}`}>PRODUCTS</div>
            <div className="pl-4 flex flex-col space-y-4">
              {categories.map(cat => (
                <Link key={cat.id} href={`/products/${cat.slug}`} className={`text-base font-semibold ${pathname === `/products/${cat.slug}` ? 'text-[#0000FF]' : 'text-[#5B6268]'}`} onClick={() => setMobileMenuOpen(false)}>
                  {cat.title}
                </Link>
              ))}
            </div>
            
            <Link href="/applications" className={`font-bold text-lg ${isActive('/applications') ? 'text-[#0000FF]' : 'text-[#17191C]'}`} onClick={() => setMobileMenuOpen(false)}>APPLICATIONS</Link>
            <Link href="/clients" className={`font-bold text-lg ${isActive('/clients') ? 'text-[#0000FF]' : 'text-[#17191C]'}`} onClick={() => setMobileMenuOpen(false)}>CLIENTS</Link>
            <Link href="/gallery" className={`font-bold text-lg ${isActive('/gallery') ? 'text-[#0000FF]' : 'text-[#17191C]'}`} onClick={() => setMobileMenuOpen(false)}>GALLERY</Link>
            <Link href="/contact" className={`font-bold text-lg ${isActive('/contact') ? 'text-[#0000FF]' : 'text-[#17191C]'}`} onClick={() => setMobileMenuOpen(false)}>CONTACT</Link>
            
            <Button href="/contact?quote=true" variant="primary" className="w-full justify-center py-4 mt-4 text-lg">
              REQUEST A QUOTE
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { ChevronRight, ShieldCheck, Globe, Settings, Factory, ArrowRight, Zap, Thermometer, Box, FileText } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* 2. HERO */}
      <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] flex items-center bg-[#15191C] overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 opacity-50">
          <PlaceholderImage text="High-Quality Heat-Treatment Furnace Image" icon={false} className="w-full h-full object-cover border-none bg-[#252D32] text-white opacity-40" />
        </div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-blueprint opacity-20 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C96F2C]/10 border border-[#C96F2C]/30 text-[#D8943D] text-xs font-bold tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-[#C96F2C] animate-pulse"></span>
              1400–1800°C | CUSTOM ENGINEERING
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Industrial Heating & Furnace Solutions, <br className="hidden md:block" />
              <span className="text-[#E6EAEC]">Engineered Around Your Process</span>
            </h1>
            <p className="text-lg md:text-xl text-[#E6EAEC] mb-10 max-w-2xl opacity-90 leading-relaxed text-balance">
              Industrial and laboratory furnaces, ovens, heating elements, process controls, thermocouples and customized heating systems for demanding industrial applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact?quote=true" size="lg" className="shadow-lg shadow-[#C96F2C]/20">
                Request a Technical Quote
              </Button>
              <Button href="/products/furnaces" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#15191C]">
                Explore Products
              </Button>
            </div>
            <p className="text-[#66727A] text-sm mt-6 font-medium tracking-wide">
              * Custom-built solutions available
            </p>
          </div>
        </div>
      </section>

      {/* 3. TRUST / CAPABILITY STRIP */}
      <section className="bg-white border-b border-[#E6EAEC]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
            <div className="flex flex-col">
              <Settings className="w-8 h-8 text-[#C96F2C] mb-3" strokeWidth={1.5} />
              <h3 className="text-[#15191C] font-bold text-sm tracking-widest mb-2 uppercase">Custom Engineering</h3>
              <p className="text-[#66727A] text-sm">Designed around application requirements</p>
            </div>
            <div className="flex flex-col lg:border-l lg:border-[#E6EAEC] lg:pl-8">
              <Factory className="w-8 h-8 text-[#C96F2C] mb-3" strokeWidth={1.5} />
              <h3 className="text-[#15191C] font-bold text-sm tracking-widest mb-2 uppercase">Industrial & Laboratory</h3>
              <p className="text-[#66727A] text-sm">Solutions across industrial and laboratory applications</p>
            </div>
            <div className="flex flex-col lg:border-l lg:border-[#E6EAEC] lg:pl-8">
              <Thermometer className="w-8 h-8 text-[#C96F2C] mb-3" strokeWidth={1.5} />
              <h3 className="text-[#15191C] font-bold text-sm tracking-widest mb-2 uppercase">Process Control</h3>
              <p className="text-[#66727A] text-sm">PID, control panels and temperature monitoring</p>
            </div>
            <div className="flex flex-col lg:border-l lg:border-[#E6EAEC] lg:pl-8">
              <Globe className="w-8 h-8 text-[#C96F2C] mb-3" strokeWidth={1.5} />
              <h3 className="text-[#15191C] font-bold text-sm tracking-widest mb-2 uppercase">Export Capability</h3>
              <p className="text-[#66727A] text-sm">International customers across multiple regions</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. & 5. FEATURED PRODUCT SOLUTIONS */}
      <section className="py-20 lg:py-28 bg-[#F7F7F4] bg-blueprint">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#15191C] mb-6 tracking-tight">Engineered Heating Solutions</h2>
            <p className="text-lg text-[#66727A] text-balance">
              Explore our range of furnaces, ovens, controls, heating elements and temperature-sensing solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Furnaces", desc: "High-temperature chamber, pit, and bogie hearth furnaces.", link: "/products/furnaces" },
              { title: "Industrial Ovens", desc: "Precision hot air, ageing, and conveyor ovens.", link: "/products/ovens" },
              { title: "Process & Control Panels", desc: "PID and thyristor based control systems.", link: "/products/process-control" },
              { title: "Heating Elements", desc: "MoSi2, SiC, and Kanthal elements.", link: "/products/furnace-accessories" },
              { title: "Thermocouples & RTDs", desc: "Industrial and molten metal sensing.", link: "/products/thermocouples-rtds" },
              { title: "Industrial Heaters", desc: "Immersion, air, and custom heaters.", link: "/products/industrial-heaters" },
              { title: "Furnace Accessories", desc: "Ceramic fibers, crucibles, and tubes.", link: "/products/furnace-accessories" },
              { title: "Wax Heating Systems", desc: "Tanks and systems for wax processing.", link: "/products/wax-heating-systems" },
            ].map((card, i) => (
              <Link href={card.link} key={i} className="group bg-white border border-[#E6EAEC] hover:border-[#C96F2C] transition-all flex flex-col h-full rounded-sm overflow-hidden hover:shadow-xl hover:-translate-y-1">
                <div className="h-48 relative overflow-hidden bg-[#E6EAEC]">
                  <PlaceholderImage text={`IFC ${card.title}`} className="group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-[#15191C] mb-2">{card.title}</h3>
                  <p className="text-[#66727A] text-sm flex-grow mb-6">{card.desc}</p>
                  <div className="flex items-center text-[#C96F2C] text-sm font-bold uppercase tracking-wide group-hover:gap-2 transition-all">
                    View Solutions <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FEATURED FURNACES SECTION */}
      <section className="py-20 lg:py-28 bg-[#15191C] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">High-Temperature Furnace Systems</h2>
              <p className="text-[#E6EAEC] opacity-80 text-lg">
                Engineered for thermal uniformity and precision. Configurable dimensions, capacities and heating profiles based on specific application requirements.
              </p>
            </div>
            <Button href="/products/furnaces" variant="primary">
              View All Furnaces
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Bottom Loading Furnace', 'Muffle Furnace', 'Bogie Hearth Furnace', 'Chamber / Pit Furnace', 'Aluminium Melting Furnace', 'Sealed Quench Furnace'].map((furnace, i) => (
              <Link href={`/products/furnaces`} key={i} className="group flex flex-col">
                <div className="aspect-[4/3] bg-[#252D32] relative overflow-hidden mb-4 border border-[#252D32] group-hover:border-[#C96F2C] transition-colors rounded-sm">
                  <PlaceholderImage text={furnace} className="bg-transparent border-none text-white opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute top-4 right-4 w-8 h-8 bg-[#C96F2C] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-sm">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">{furnace}</h3>
                <p className="text-[#66727A] text-sm">Industrial & Laboratory Series</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TECHNICAL HIGHLIGHT */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#E6EAEC]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#15191C] mb-8 tracking-tight">Built for Controlled Thermal Processing</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-[#F7F7F4] flex items-center justify-center shrink-0 border border-[#E6EAEC]">
                    <Settings className="w-5 h-5 text-[#C96F2C]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#15191C] mb-1">Temperature Control</h4>
                    <p className="text-[#66727A]">PID / programmable control integration for precise thermal management.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-[#F7F7F4] flex items-center justify-center shrink-0 border border-[#E6EAEC]">
                    <Thermometer className="w-5 h-5 text-[#C96F2C]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#15191C] mb-1">Thermal Uniformity</h4>
                    <p className="text-[#66727A]">Specifically designed for controlled heating across the entire working volume.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-[#F7F7F4] flex items-center justify-center shrink-0 border border-[#E6EAEC]">
                    <Zap className="w-5 h-5 text-[#C96F2C]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#15191C] mb-1">Energy Efficiency</h4>
                    <p className="text-[#66727A]">Advanced insulation and heating-element engineering to minimize heat loss.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-[#F7F7F4] flex items-center justify-center shrink-0 border border-[#E6EAEC]">
                    <Box className="w-5 h-5 text-[#C96F2C]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#15191C] mb-1">Customization</h4>
                    <p className="text-[#66727A]">Dimensions, capacity and configuration built based on your specific requirements.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] w-full border border-[#E6EAEC] rounded-sm overflow-hidden p-2 bg-[#F7F7F4]">
              <PlaceholderImage text="Control Panel Diagram / Interior Layout" className="border border-[#d2d7da] shadow-sm" />
              {/* Technical markers overlay */}
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#C96F2C] rounded-full shadow-[0_0_0_4px_rgba(201,111,44,0.3)] animate-pulse"></div>
              <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-[#C96F2C] rounded-full shadow-[0_0_0_4px_rgba(201,111,44,0.3)] animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FEATURED TECHNICAL SPECIFICATIONS */}
      <section className="py-20 lg:py-28 bg-[#F7F7F4] border-b border-[#E6EAEC]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#15191C] mb-4 tracking-tight">Published Example Configurations</h2>
            <p className="text-[#66727A]">
              Representative technical specifications for standard models. Configurations can be customized to application requirements. Contact IFC for a technical specification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Spec Card 1 */}
            <div className="bg-white border border-[#E6EAEC] p-8 rounded-sm shadow-sm hover:border-[#C96F2C] transition-colors">
              <div className="flex justify-between items-start border-b border-[#E6EAEC] pb-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-[#15191C]">Bottom Loading Furnace</h3>
                  <p className="text-sm text-[#66727A] mt-1">Typical Published Configuration</p>
                </div>
                <span className="bg-[#15191C] text-white text-xs font-bold px-3 py-1 rounded-sm">up to 1650°C</span>
              </div>
              <ul className="space-y-3 text-sm text-[#252D32]">
                <li className="flex justify-between border-b border-dashed border-[#E6EAEC] pb-2">
                  <span className="font-semibold">Standard working temperature</span>
                  <span>1600°C</span>
                </li>
                <li className="flex justify-between border-b border-dashed border-[#E6EAEC] pb-2">
                  <span className="font-semibold">Chamber example</span>
                  <span>200 × 200 × 200 mm / 8 litre</span>
                </li>
                <li className="flex justify-between border-b border-dashed border-[#E6EAEC] pb-2">
                  <span className="font-semibold">Temperature control</span>
                  <span>30-step programmable / PID</span>
                </li>
                <li className="flex justify-between border-b border-dashed border-[#E6EAEC] pb-2">
                  <span className="font-semibold">Heating rate</span>
                  <span>0–10°C/min</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span className="font-semibold">Heating element</span>
                  <span>MoSi2</span>
                </li>
              </ul>
              <Button href="/contact?quote=true" variant="outline" className="w-full mt-6">Request Technical Quote</Button>
            </div>

            {/* Spec Card 2 */}
            <div className="bg-white border border-[#E6EAEC] p-8 rounded-sm shadow-sm hover:border-[#C96F2C] transition-colors">
              <div className="flex justify-between items-start border-b border-[#E6EAEC] pb-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-[#15191C]">Sealed Quench Furnace</h3>
                  <p className="text-sm text-[#66727A] mt-1">Typical Published Configuration</p>
                </div>
                <span className="bg-[#15191C] text-white text-xs font-bold px-3 py-1 rounded-sm">Straight-through</span>
              </div>
              <ul className="space-y-3 text-sm text-[#252D32]">
                <li className="flex justify-between border-b border-dashed border-[#E6EAEC] pb-2">
                  <span className="font-semibold">Net charge example</span>
                  <span>400 kg</span>
                </li>
                <li className="flex justify-between border-b border-dashed border-[#E6EAEC] pb-2">
                  <span className="font-semibold">Effective chamber</span>
                  <span>1230 × 650 × 750 mm</span>
                </li>
                <li className="flex justify-between border-b border-dashed border-[#E6EAEC] pb-2">
                  <span className="font-semibold">Max working temperature</span>
                  <span>950°C</span>
                </li>
                <li className="flex justify-between border-b border-dashed border-[#E6EAEC] pb-2">
                  <span className="font-semibold">Heating load</span>
                  <span>80 kW (18 radiant-tubes)</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span className="font-semibold">Control</span>
                  <span>PID on/off control</span>
                </li>
              </ul>
              <Button href="/contact?quote=true" variant="outline" className="w-full mt-6">Request Technical Quote</Button>
            </div>
          </div>
        </div>
      </section>

      {/* 10. HEATING ELEMENTS / SENSORS / HEATERS (Combined Grid) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-[#15191C] mb-2 tracking-tight">Components & Accessories</h2>
              <p className="text-[#66727A]">Industrial heating elements, precision sensors and bespoke heaters.</p>
            </div>
            <Link href="/products" className="text-[#C96F2C] font-bold text-sm hover:underline flex items-center">
              View Product Range <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/products/furnace-accessories" className="block border border-[#E6EAEC] hover:border-[#C96F2C] transition-colors p-6 rounded-sm">
              <div className="h-40 bg-[#F7F7F4] mb-6 flex items-center justify-center relative overflow-hidden">
                <PlaceholderImage text="Heating Elements" className="border-none" />
              </div>
              <h3 className="text-lg font-bold text-[#15191C] mb-2">Heating Elements</h3>
              <p className="text-sm text-[#66727A] mb-4">MoSi2, SiC, and Kanthal / Nichrome variants capable of high surface loading and robust high-temperature performance.</p>
              <span className="text-xs font-bold text-[#15191C] border-b border-[#15191C] pb-0.5 inline-block">EXPLORE ELEMENTS</span>
            </Link>
            
            <Link href="/products/thermocouples-rtds" className="block border border-[#E6EAEC] hover:border-[#C96F2C] transition-colors p-6 rounded-sm">
              <div className="h-40 bg-[#F7F7F4] mb-6 flex items-center justify-center relative overflow-hidden">
                <PlaceholderImage text="Thermocouples" className="border-none" />
              </div>
              <h3 className="text-lg font-bold text-[#15191C] mb-2">Thermocouples & RTDs</h3>
              <p className="text-sm text-[#66727A] mb-4">Pt/PtRh, K-type, MI and specific molten aluminium thermocouples with specialized protective sheaths.</p>
              <span className="text-xs font-bold text-[#15191C] border-b border-[#15191C] pb-0.5 inline-block">EXPLORE SENSORS</span>
            </Link>

            <Link href="/products/industrial-heaters" className="block border border-[#E6EAEC] hover:border-[#C96F2C] transition-colors p-6 rounded-sm">
              <div className="h-40 bg-[#F7F7F4] mb-6 flex items-center justify-center relative overflow-hidden">
                <PlaceholderImage text="Industrial Heaters" className="border-none" />
              </div>
              <h3 className="text-lg font-bold text-[#15191C] mb-2">Industrial Heaters</h3>
              <p className="text-sm text-[#66727A] mb-4">Immersion (1kW to 18kW+), air, finned, duct, cartridge and barrel heaters available on request.</p>
              <span className="text-xs font-bold text-[#15191C] border-b border-[#15191C] pb-0.5 inline-block">EXPLORE HEATERS</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 11 & 12. INTERNATIONAL MARKETS / ISO / CREDIBILITY */}
      <section className="py-20 bg-[#15191C] border-b-4 border-[#C96F2C]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">Organizations & Industries Served</h2>
              <p className="text-[#E6EAEC] text-sm opacity-80 mb-6 leading-relaxed">
                Selected organizations and industries listed by Industrial Furnace & Controls.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-[#E6EAEC] font-semibold text-sm">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#C96F2C] rounded-full"></div> Hindustan Aeronautics Limited (HAL)</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#C96F2C] rounded-full"></div> National Aerospace Laboratories / NAL</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#C96F2C] rounded-full"></div> Indian Space Research Organisation (ISRO)</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#C96F2C] rounded-full"></div> Gas Turbine Research Establishment (GTRE)</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#C96F2C] rounded-full"></div> Tata group of Companies</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#C96F2C] rounded-full"></div> Thermal Power Plants</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#C96F2C] rounded-full"></div> Aditya Birla Group & L&T</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#C96F2C] rounded-full"></div> Hinduja Group & IT Companies</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">International Markets Served</h2>
              <div className="flex flex-wrap gap-3 mb-10">
                {['Al-Khobar', 'Jordan', 'Dubai', 'Abu Dhabi', 'Singapore', 'South Africa', 'Uganda', 'Sri Lanka', 'Muscat/Oman', 'Egypt', 'UAE', 'Saudi Arabia'].map(market => (
                  <span key={market} className="px-3 py-1 bg-[#252D32] border border-[#66727A] text-[#E6EAEC] text-xs font-semibold rounded-sm">
                    {market}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-sm">
                <ShieldCheck className="w-12 h-12 text-[#C96F2C]" />
                <div>
                  <h3 className="text-white font-bold text-lg">ISO 9001:2015</h3>
                  <p className="text-sm text-[#E6EAEC] opacity-80">Certified Quality Management System</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 14. REQUEST QUOTE CTA */}
      <section className="py-24 bg-[#E6EAEC] relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-50 pointer-events-none"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-[#15191C] mb-6 tracking-tight">Ready to Discuss Your Requirement?</h2>
          <p className="text-lg text-[#66727A] mb-10">
            Contact IFC engineers to discuss custom configurations, capacities, and thermal profiles built specifically for your application.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact?quote=true" size="lg">
              Send Technical Enquiry
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="bg-white">
              Talk to an Engineer
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

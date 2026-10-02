import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { categories } from '@/data/categories';
import { ArrowRight, Settings2, ShieldCheck, Factory, GaugeCircle, BarChart3, Thermometer, Box } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function HomePage() {
  const furnaces = categories.find(c => c.slug === 'furnaces');
  const ovens = categories.find(c => c.slug === 'ovens');
  const controls = categories.find(c => c.slug === 'process-control');
  const elements = categories.find(c => c.slug === 'heating-elements');
  const thermocouples = categories.find(c => c.slug === 'thermocouples-rtds');
  
  return (
    <div className="flex flex-col w-full bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full bg-white pt-12 pb-20 border-b border-[#E3E6E8]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center max-w-xl">
              <ScrollReveal delay={0}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-[2px] bg-[#F59625]"></div>
                  <span className="text-[#5B6268] font-bold text-xs uppercase tracking-[0.2em]">
                    Industrial Heating Solutions
                  </span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="text-4xl lg:text-[46px] font-extrabold text-[#17191C] leading-[1.15] mb-6 tracking-tight">
                  Industrial Furnace & Heating Solutions Built Around Your <span className="text-[#0000FF] relative whitespace-nowrap">Process<span className="absolute bottom-2 left-0 w-full h-3 bg-[#0000FF]/10 -z-10 rounded-sm"></span></span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-lg text-[#5B6268] mb-8 leading-relaxed max-w-lg">
                  Industrial and laboratory furnaces, ovens, heating elements, process controls, thermocouples and customized heating systems for demanding applications.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto">
                  <Button href="/contact?quote=true" variant="primary" size="md" className="w-full sm:w-auto shadow-lg shadow-[#F59625]/20 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                    REQUEST A TECHNICAL QUOTE
                  </Button>
                  <Button href="/products" variant="outline" size="md" className="w-full sm:w-auto hover:-translate-y-1 transition-all duration-300 bg-white">
                    EXPLORE PRODUCTS
                  </Button>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <p className="text-sm text-[#5B6268] font-medium border-t border-[#E3E6E8] pt-5">
                  Furnaces • Ovens • Process Control • Heating Elements • Temperature Sensors
                </p>
              </ScrollReveal>
            </div>
            
            {/* Right Image */}
            <ScrollReveal delay={0.3} direction="left" className="relative h-[400px] lg:h-[550px] w-full">
              <div className="absolute inset-0 bg-[#0000FF]/5 rounded-2xl translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6"></div>
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border-[6px] border-white bg-white">
                <PlaceholderImage src="/images/ifc/brand/electrical_oven.png" text="High-Temperature Furnace" className="h-full object-contain p-6" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. TRUST / CAPABILITY BAND */}
      <section className="bg-[#F7F8FA] border-b border-[#E3E6E8] py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-[#E3E6E8]">
            <div className="px-4">
              <div className="text-[#0000FF] mb-2 flex justify-center"><Settings2 className="w-6 h-6" /></div>
              <h3 className="font-bold text-[#17191C] text-sm mb-1 uppercase tracking-wider">Custom Engineering</h3>
              <p className="text-[#5B6268] text-xs">Designed around application requirements</p>
            </div>
            <div className="px-4">
              <div className="text-[#0000FF] mb-2 flex justify-center"><Factory className="w-6 h-6" /></div>
              <h3 className="font-bold text-[#17191C] text-sm mb-1 uppercase tracking-wider">Industrial & Lab</h3>
              <p className="text-[#5B6268] text-xs">Solutions across diverse environments</p>
            </div>
            <div className="px-4">
              <div className="text-[#0000FF] mb-2 flex justify-center"><GaugeCircle className="w-6 h-6" /></div>
              <h3 className="font-bold text-[#17191C] text-sm mb-1 uppercase tracking-wider">Process Control</h3>
              <p className="text-[#5B6268] text-xs">PID, panels and temperature monitoring</p>
            </div>
            <div className="px-4">
              <div className="text-[#0000FF] mb-2 flex justify-center"><ShieldCheck className="w-6 h-6" /></div>
              <h3 className="font-bold text-[#17191C] text-sm mb-1 uppercase tracking-wider">Export Capability</h3>
              <p className="text-[#5B6268] text-xs">Serving international markets</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMPANY INTRODUCTION */}
      <section className="py-24 bg-white border-b border-[#E3E6E8]">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal delay={0.2} direction="up">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <h2 className="text-3xl md:text-4xl font-bold text-[#17191C] leading-tight">
                  Engineering Solutions for Controlled Heating
                </h2>
              </div>
              <div className="lg:col-span-7 flex flex-col items-start justify-center">
                <p className="text-lg text-[#5B6268] mb-6 leading-relaxed">
                  Industrial Furnace & Controls manufactures and supplies industrial and laboratory furnaces, ovens, thermocouples, industrial heating systems, process automation and control panels, heating elements, industrial heaters and wax heating systems.
                </p>
                <p className="text-lg text-[#5B6268] mb-8 leading-relaxed">
                  With a strong commitment to quality and technical precision, our equipment is designed and manufactured according to customer requirements to meet rigorous thermal processing demands.
                </p>
                <Button href="/about" variant="outline" className="hover:-translate-y-1 transition-transform">
                  ABOUT INDUSTRIAL FURNACE & CONTROLS
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. PRODUCT SHOWCASE */}
      <section className="py-24 bg-[#F7F8FA] border-b border-[#E3E6E8]">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal delay={0.1} direction="up">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#17191C] mb-4">Our Product Range</h2>
              <p className="text-lg text-[#5B6268]">
                From high-temperature furnace systems to process controls and temperature sensing, IFC provides equipment for a wide range of industrial and laboratory applications.
              </p>
            </div>
          </ScrollReveal>

          {/* Featured Category: FURNACES */}
          <ScrollReveal delay={0.2} direction="up">
            <div className="bg-white border border-[#E3E6E8] p-8 lg:p-12 mb-12 shadow-sm rounded-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-6 bg-[#0000FF]"></div>
                  <h3 className="text-2xl font-bold text-[#17191C] uppercase">Furnace Systems</h3>
                </div>
                <p className="text-[#5B6268] mb-8">
                  Engineered for precision heat treatment, material processing, and laboratory research with controlled thermal uniformity.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-8">
                  {furnaces?.products.map((p, i) => (
                    <li key={i} className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-[#F59625] mr-2 mt-1 shrink-0" />
                      <Link href={`/products/furnaces/${p.slug}`} className="text-[#17191C] font-semibold hover:text-[#0000FF] transition-colors">
                        {p.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Button href="/products/furnaces" variant="secondary">
                  VIEW ALL FURNACES
                </Button>
              </div>
              <div className="order-1 lg:order-2 h-[350px] lg:h-[450px]">
                <PlaceholderImage src="/images/ifc/furnaces/chamberslide.jpg" text="High-Temperature Chamber Furnace" className="h-full" />
              </div>
            </div>
            </div>
          </ScrollReveal>

          {/* Editorial Smaller Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {categories.filter(c => c.slug !== 'furnaces').map((cat, index) => (
              <ScrollReveal delay={0.1 * index} direction="up" key={cat.slug} className="h-full">
                <Link href={`/products/${cat.slug}`} className="group h-full bg-white border border-[#E3E6E8] flex flex-col hover:border-[#0000FF] hover:shadow-lg transition-all duration-300 rounded-sm overflow-hidden hover:-translate-y-1">
                  <div className="h-48 border-b border-[#E3E6E8] bg-[#F7F8FA]">
                    <PlaceholderImage src={cat.image} alt={cat.title} className="h-full opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h4 className="font-bold text-lg text-[#17191C] mb-2 uppercase group-hover:text-[#0000FF] transition-colors">{cat.title}</h4>
                    <p className="text-sm text-[#5B6268] mb-4 flex-1 line-clamp-2">{cat.description}</p>
                    <span className="text-[#0000FF] font-semibold text-sm flex items-center group-hover:text-[#F59625] transition-colors">
                      Explore Category <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ENGINEERING / TECHNICAL CAPABILITY */}
      <section className="py-24 bg-white border-b border-[#E3E6E8]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal delay={0.2} direction="right" className="h-[400px] lg:h-[500px]">
              <PlaceholderImage src="/images/ifc/controls/controlpanel2.jpg" text="Engineering Control Panel" className="h-full rounded-sm" />
            </ScrollReveal>
            <ScrollReveal delay={0.3} direction="left">
              <h2 className="text-3xl font-bold text-[#17191C] mb-6">Process & Furnace Control</h2>
              <p className="text-[#5B6268] mb-6 text-lg">
                Furnace control panels can be configured for continuous-duty ratings from approximately 5 kW to 500 kW. Our systems integrate reliable instrumentation to maintain tight thermal uniformity and safety.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F59625] mt-2 mr-3 shrink-0"></div>
                  <span className="text-[#17191C] font-medium">Digital meters and advanced PID controllers</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F59625] mt-2 mr-3 shrink-0"></div>
                  <span className="text-[#17191C] font-medium">Thyristor controllers for precision power delivery</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F59625] mt-2 mr-3 shrink-0"></div>
                  <span className="text-[#17191C] font-medium">Furnace movement interlocking and limit switches</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F59625] mt-2 mr-3 shrink-0"></div>
                  <span className="text-[#17191C] font-medium">Integrated scanners and temperature recorders</span>
                </li>
              </ul>
              <Button href="/products/process-control" variant="secondary" className="hover:-translate-y-1 transition-transform">
                VIEW CONTROL SOLUTIONS
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 6. APPLICATIONS */}
      <section className="py-24 bg-[#F7F8FA] border-b border-[#E3E6E8]">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal delay={0.1} direction="up">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#17191C] mb-4">Industrial Applications</h2>
              <p className="text-[#5B6268] text-lg">
                Our equipment serves rigorous thermal processing demands across diverse sectors.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Heat Treatment", icon: Thermometer, desc: "Hardening, tempering, stress relieving, austempering, annealing." },
              { title: "Ceramics & Refractories", icon: Box, desc: "Firing, sintering, refractory and high-temperature testing." },
              { title: "Metal Processing", icon: Factory, desc: "Aluminium melting, non-ferrous metal applications and ageing." },
              { title: "Laboratory & R&D", icon: BarChart3, desc: "Sample ashing, laboratory heat treatment and materials testing." },
              { title: "Industrial Processing", icon: Settings2, desc: "Drying, baking, conditioning, sterilizing, evaporating and curing." },
              { title: "Wax / Investment Casting", icon: GaugeCircle, desc: "Wax melting, wax conditioning and wax transfer." }
            ].map((app, i) => (
              <ScrollReveal delay={0.1 * i} direction="up" key={i}>
                <div className="bg-white p-8 border border-[#E3E6E8] rounded-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <app.icon className="w-8 h-8 text-[#0000FF] mb-4" />
                  <h3 className="text-xl font-bold text-[#17191C] mb-3">{app.title}</h3>
                  <p className="text-[#5B6268] text-sm leading-relaxed">{app.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CLIENTS & ISO */}
      <section className="py-24 bg-white border-b border-[#E3E6E8]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Organizations Served */}
            <ScrollReveal delay={0.2} direction="right">
              <h2 className="text-2xl font-bold text-[#17191C] mb-8">Organizations & Industries Served</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {["Hindustan Aeronautics Limited (HAL)", "National Aerospace Laboratories (NAL)", "Indian Space Research Organisation (ISRO)", "Gas Turbine Research Est. (GTRE)", "Tata group of Companies", "Thermal Power Plants", "Aditya Birla Group", "L&T", "Hinduja Group", "IT Companies"].map((client, i) => (
                  <div key={i} className="bg-[#F7F8FA] border border-[#E3E6E8] p-4 flex items-center justify-center text-center rounded-sm hover:border-[#0000FF] transition-colors">
                    <span className="text-sm font-semibold text-[#5B6268]">{client}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <h3 className="text-lg font-bold text-[#17191C] mb-4">International Reach</h3>
                <p className="text-[#5B6268] leading-relaxed">
                  Al-Khobar, Jordan, Dubai, Abu Dhabi, Singapore, South Africa, Uganda, Sri Lanka, Muscat / Oman, Egypt, UAE, and Saudi Arabia.
                </p>
              </div>
            </ScrollReveal>
            
            {/* Quality & Process */}
            <ScrollReveal delay={0.4} direction="left" className="bg-[#F7F8FA] border border-[#E3E6E8] p-10 flex flex-col items-center justify-center text-center rounded-sm">
              <ShieldCheck className="w-16 h-16 text-[#0000FF] mb-6" />
              <h2 className="text-3xl font-bold text-[#17191C] mb-4">Quality & Process</h2>
              <p className="text-[#5B6268] text-lg mb-8 max-w-sm">
                Committed to delivering reliable and precision-engineered systems.
              </p>
              <div className="bg-white border-2 border-[#0000FF] px-8 py-4 font-bold text-xl text-[#0000FF] rounded-sm tracking-widest shadow-lg shadow-[#0000FF]/10">
                ISO 9001:2015
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="py-24 bg-[#0000FF]">
        <ScrollReveal delay={0.2} direction="up" className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Discuss Your Requirement
          </h2>
          <p className="text-white/80 text-lg mb-10">
            Contact our engineering team to receive a technical quote tailored to your application, temperature, and capacity requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact?quote=true" variant="primary" size="lg" className="hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/20 transition-all">
              REQUEST A TECHNICAL QUOTE
            </Button>
            <Button href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0000FF] hover:-translate-y-1 transition-all" size="lg">
              CONTACT OUR TEAM
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}

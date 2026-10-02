import React from 'react';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { ShieldCheck, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: "About Us | Industrial Furnace & Controls",
  description: "Learn about Industrial Furnace & Controls, a manufacturer and exporter of industrial and laboratory furnaces, ovens, thermocouples, and heating systems.",
};

export default function AboutPage() {
  return (
    <>
      <div className="bg-[#15191C] pt-20 pb-16 text-white border-b-4 border-[#C96F2C]">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">About Us</h1>
          <p className="text-lg text-[#E6EAEC] opacity-80 max-w-2xl">
            Manufacturer, supplier and exporter of industrial and laboratory furnaces, ovens, thermocouples and special heating systems.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#15191C] mb-6">Engineering Heat Treatment Solutions</h2>
              <div className="space-y-6 text-[#252D32] leading-relaxed">
                <p>
                  Industrial Furnace &amp; Controls is a recognized manufacturer and exporter specializing in industrial and laboratory furnaces, ovens, thermocouples, and special heating systems.
                </p>
                <p>
                  We design, manufacture and supply comprehensive heat-treatment furnaces and accessories. Our product range includes refractory products, ceramic fibres, blankets, boards, and high-performance heating elements. 
                </p>
                <p>
                  Our process control solutions integrate programmable PID controllers, thyristorised power packs, RS485 interfaces, and robust control panels to ensure thermal uniformity and energy efficiency. We also provide specialized wax heating systems engineered for reliability.
                </p>
                <p className="font-semibold text-[#15191C] border-l-4 border-[#C96F2C] pl-4 italic">
                  "We design and manufacture according to customer requirements."
                </p>
              </div>
            </div>
            <div className="h-[500px]">
              <PlaceholderImage text="Manufacturing Facility / Engineering Setup" className="rounded-sm" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F7F7F4] border-t border-[#E6EAEC]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white border border-[#E6EAEC] rounded-full flex items-center justify-center mb-6 shadow-sm">
                <Target className="w-8 h-8 text-[#C96F2C]" />
              </div>
              <h3 className="text-xl font-bold text-[#15191C] mb-3">Customization</h3>
              <p className="text-[#66727A] text-sm">Equipment engineered entirely around customer requirements and specific process applications.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white border border-[#E6EAEC] rounded-full flex items-center justify-center mb-6 shadow-sm">
                <ShieldCheck className="w-8 h-8 text-[#C96F2C]" />
              </div>
              <h3 className="text-xl font-bold text-[#15191C] mb-3">Quality Standard</h3>
              <p className="text-[#66727A] text-sm">ISO 9001:2015 certified commitment to manufacturing excellence and rigorous quality control.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white border border-[#E6EAEC] rounded-full flex items-center justify-center mb-6 shadow-sm">
                <Zap className="w-8 h-8 text-[#C96F2C]" />
              </div>
              <h3 className="text-xl font-bold text-[#15191C] mb-3">Complete Ecosystem</h3>
              <p className="text-[#66727A] text-sm">From thermal chambers and elements to advanced PID control panels and temperature sensing.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#15191C] text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Discuss Your Engineering Requirement</h2>
          <Button href="/contact" variant="primary" size="lg">Contact Our Team</Button>
        </div>
      </section>
    </>
  );
}

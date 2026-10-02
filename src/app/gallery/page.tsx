"use client";
import React, { useState } from 'react';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';

const galleryItems = [
  { category: 'Furnaces', title: 'Bottom Loading Furnace' },
  { category: 'Furnaces', title: 'Muffle Furnace' },
  { category: 'Furnaces', title: 'Bogie Hearth Furnace' },
  { category: 'Furnaces', title: 'Sealed Quench Furnace' },
  { category: 'Ovens', title: 'Lab Oven' },
  { category: 'Ovens', title: 'Industrial Conveyor Oven' },
  { category: 'Control Panels', title: 'PID Control Panel' },
  { category: 'Control Panels', title: 'Furnace Control System' },
  { category: 'Heating Elements', title: 'MoSi2 Elements' },
  { category: 'Heating Elements', title: 'SiC Elements' },
  { category: 'Thermocouples', title: 'K-Type Thermocouple' },
  { category: 'Industrial Heaters', title: 'Immersion Heater' },
  { category: 'Wax Heating Systems', title: '1 MT Wax Melting Tank' },
];

const categories = ['All', 'Furnaces', 'Ovens', 'Control Panels', 'Heating Elements', 'Thermocouples', 'Industrial Heaters', 'Wax Heating Systems'];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <>
      <div className="bg-[#15191C] pt-20 pb-16 text-white border-b-4 border-[#C96F2C]">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Gallery</h1>
          <p className="text-lg text-[#E6EAEC] opacity-80 max-w-2xl">
            Visual overview of our industrial furnaces, ovens, controls, and heating systems.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-sm font-semibold rounded-sm transition-colors ${
                  activeFilter === cat 
                    ? 'bg-[#252D32] text-white' 
                    : 'bg-[#F7F7F4] text-[#66727A] hover:bg-[#E6EAEC] hover:text-[#15191C]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-square bg-[#F7F7F4] overflow-hidden rounded-sm relative border border-[#E6EAEC] group-hover:border-[#C96F2C] transition-colors mb-3">
                  <PlaceholderImage text="Official IFC product image" className="group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-bold text-[#15191C] text-sm group-hover:text-[#C96F2C] transition-colors">{item.title}</h3>
                <p className="text-xs text-[#66727A]">{item.category}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

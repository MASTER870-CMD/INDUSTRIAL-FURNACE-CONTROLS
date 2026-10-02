import React from 'react';
import Link from 'next/link';
import { categories } from '@/data/categories';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: "Products & Solutions | Industrial Furnace & Controls",
  description: "Browse our complete range of industrial furnaces, ovens, process control panels, heating elements and thermocouples.",
};

export default function ProductsPage() {
  return (
    <>
      <div className="bg-[#15191C] pt-20 pb-16 text-white border-b-4 border-[#C96F2C]">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Products & Solutions</h1>
          <p className="text-lg text-[#E6EAEC] opacity-80 max-w-2xl">
            Engineered heating solutions for demanding industrial and laboratory applications.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white min-h-[50vh]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <Link key={cat.id} href={`/products/${cat.slug}`} className="group border border-[#E6EAEC] hover:border-[#C96F2C] transition-colors rounded-sm overflow-hidden flex flex-col">
                <div className="h-48 bg-[#F7F7F4] relative overflow-hidden">
                  <PlaceholderImage text={cat.title} className="group-hover:scale-105 transition-transform duration-500 border-none" />
                </div>
                <div className="p-6 flex-grow bg-white flex flex-col">
                  <h2 className="text-2xl font-bold text-[#15191C] mb-2">{cat.title}</h2>
                  <p className="text-[#66727A] mb-6 flex-grow">{cat.description}</p>
                  <div className="flex items-center text-[#C96F2C] text-sm font-bold uppercase tracking-wide group-hover:gap-2 transition-all">
                    View Range <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

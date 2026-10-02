import React from 'react';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: "Applications | Industrial Furnace & Controls",
  description: "Explore the various industrial, laboratory and manufacturing applications for our furnaces, ovens and heating systems.",
};

const applications = [
  {
    title: "HEAT TREATMENT",
    items: ["Hardening", "Tempering", "Stress Relieving", "Austempering", "Annealing", "Normalizing"]
  },
  {
    title: "CERAMICS & REFRACTORIES",
    items: ["Firing", "Sintering", "Refractory Testing", "High-Temperature Testing"]
  },
  {
    title: "MATERIALS / METAL PROCESSING",
    items: ["Aluminium Melting", "Non-Ferrous Metal Applications", "Crucible Melting", "Ageing"]
  },
  {
    title: "LABORATORY & R&D",
    items: ["Sample Ashing", "Laboratory Heat Treatment", "Materials Testing", "Temperature Measurement"]
  },
  {
    title: "INDUSTRIAL PROCESSING",
    items: ["Drying", "Baking", "Conditioning", "Sterilizing", "Evaporating", "Preheating", "Curing"]
  },
  {
    title: "WAX / INVESTMENT CASTING",
    items: ["Wax Melting", "Wax Conditioning", "Wax Transfer"]
  }
];

export default function ApplicationsPage() {
  return (
    <>
      <div className="bg-[#F7F8FA] text-[#17191C] pt-20 pb-16  border-b border-[#E3E6E8]">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Industrial Applications</h1>
          <p className="text-lg text-[#5B6268] max-w-2xl">
            Our systems are engineered for diverse thermal processing requirements across multiple industries.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, i) => (
              <div key={i} className="border border-[#E3E6E8] hover:border-[#0000FF] transition-colors rounded-sm overflow-hidden flex flex-col">
                <div className="h-48 bg-[#F7F8FA]">
                  <PlaceholderImage src="/images/ifc/brand/heating.png" alt={app.title} className="border-none group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex-grow bg-white">
                  <h3 className="text-lg font-bold text-[#17191C] mb-4 tracking-tight">{app.title}</h3>
                  <ul className="space-y-2">
                    {app.items.map((item, j) => (
                      <li key={j} className="flex items-start text-sm text-[#66727A]">
                        <span className="text-[#0000FF] mr-2 font-bold">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F7F8FA] border-t border-[#E3E6E8] text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-[#17191C] mb-4">Don't see your specific application?</h2>
          <p className="text-[#66727A] mb-8">
            We design and manufacture custom equipment according to unique customer requirements.
          </p>
          <Button href="/contact?quote=true" variant="primary">Discuss Your Application</Button>
        </div>
      </section>
    </>
  );
}

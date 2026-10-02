import React from 'react';

export const metadata = {
  title: "Clients & Industries | Industrial Furnace & Controls",
  description: "Organizations and international markets served by Industrial Furnace & Controls.",
};

const organizations = [
  "Hindustan Aeronautics Limited (HAL)",
  "National Aerospace Laboratories / NAL",
  "Indian Space Research Organisation (ISRO)",
  "Gas Turbine Research Establishment (GTRE)",
  "Tata group of Companies",
  "Thermal Power Plants",
  "Aditya Birla Group",
  "L&T",
  "Hinduja Group",
  "IT Companies"
];

const markets = [
  "Al-Khobar", "Jordan", "Dubai", "Abu Dhabi", 
  "Singapore", "South Africa", "Uganda", "Sri Lanka", 
  "Muscat/Oman", "Egypt", "UAE", "Saudi Arabia"
];

export default function ClientsPage() {
  return (
    <>
      <div className="bg-[#15191C] pt-20 pb-16 text-white border-b-4 border-[#C96F2C]">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Clients & Markets</h1>
          <p className="text-lg text-[#E6EAEC] opacity-80 max-w-2xl">
            Trusted by leading industrial, aerospace, and research organizations worldwide.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#15191C] mb-4">Organizations & Industries Served</h2>
            <p className="text-[#66727A] mb-10">Selected organizations and industries listed by Industrial Furnace & Controls.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
              {organizations.map((org, i) => (
                <div key={i} className="flex items-center gap-4 p-4 border border-[#E6EAEC] rounded-sm hover:border-[#C96F2C] transition-colors">
                  <div className="w-2 h-2 bg-[#C96F2C] rounded-full shrink-0"></div>
                  <span className="font-semibold text-[#252D32]">{org}</span>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-[#15191C] mb-4">International Markets Served</h2>
            <p className="text-[#66727A] mb-10">We export our engineering solutions to customers across multiple regions.</p>
            
            <div className="flex flex-wrap gap-4">
              {markets.map((market, i) => (
                <span key={i} className="px-6 py-3 bg-[#F7F7F4] border border-[#E6EAEC] text-[#252D32] font-semibold rounded-sm">
                  {market}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

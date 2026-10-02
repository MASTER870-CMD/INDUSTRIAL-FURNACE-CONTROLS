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
      <div className="bg-[#F7F8FA] text-[#17191C] pt-20 pb-16  border-b border-[#E3E6E8]">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Clients & Markets</h1>
          <p className="text-lg text-[#5B6268] max-w-2xl">
            Trusted by leading industrial, aerospace, and research organizations worldwide.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#17191C] mb-4">Organizations & Industries Served</h2>
            <p className="text-[#66727A] mb-10">Selected organizations and industries listed by Industrial Furnace & Controls.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
              {organizations.map((org, i) => (
                <div key={i} className="flex items-center gap-4 p-4 border border-[#E3E6E8] rounded-sm hover:border-[#0000FF] transition-colors">
                  <div className="w-2 h-2 bg-[#0000FF] rounded-full shrink-0"></div>
                  <span className="font-semibold text-[#5B6268]">{org}</span>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-[#17191C] mb-4">International Markets Served</h2>
            <p className="text-[#66727A] mb-10">We export our engineering solutions to customers across multiple regions.</p>
            
            <div className="flex flex-wrap gap-4">
              {markets.map((market, i) => (
                <span key={i} className="px-6 py-3 bg-[#F7F8FA] border border-[#E3E6E8] text-[#5B6268] font-semibold rounded-sm">
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

import React from 'react';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';

export const metadata = {
  title: "Certificates | Industrial Furnace & Controls",
  description: "View our ISO 9001:2015 certification for Quality Management System.",
};

export default function CertificatesPage() {
  return (
    <>
      <div className="bg-[#F7F8FA] text-[#17191C] pt-20 pb-16  border-b border-[#E3E6E8]">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Certificates & Quality</h1>
          <p className="text-lg text-[#5B6268] max-w-2xl">
            Our commitment to manufacturing excellence and rigorous quality control.
          </p>
        </div>
      </div>

      <section className="py-20 bg-[#F7F8FA] min-h-[50vh]">
        <div className="container mx-auto px-4 lg:px-8 flex justify-center">
          <div className="max-w-2xl w-full bg-white border border-[#E3E6E8] p-8 text-center rounded-sm shadow-sm">
            <h2 className="text-2xl font-bold text-[#17191C] mb-2">ISO 9001:2015</h2>
            <p className="text-[#66727A] mb-8">Certified Quality Management System</p>
            
            <div className="aspect-[1/1.4] max-w-md mx-auto bg-[#E3E6E8] relative overflow-hidden border border-[#d2d7da]">
              <PlaceholderImage src="/images/ifc/brand/ISO CERTIFICATE.png" alt="ISO 9001:2015 Certificate" />
            </div>
            
            <p className="text-sm text-[#66727A] mt-6 italic">
              * Official certificate image to be provided by client.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

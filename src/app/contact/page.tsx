"use client";
import React, { useState } from 'react';
import { MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In production, this would send data to a backend
  };

  return (
    <>
      <div className="bg-[#15191C] pt-20 pb-16 text-white border-b-4 border-[#C96F2C]">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Contact Us</h1>
          <p className="text-lg text-[#E6EAEC] opacity-80 max-w-2xl">
            Request a technical quote, discuss custom configurations, or get support from our engineering team.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#15191C] mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F7F7F4] border border-[#E6EAEC] rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#C96F2C]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#15191C] mb-1">Phone & WhatsApp</h3>
                    <p className="text-[#66727A] mb-1">Mr. D. B. Jain (Contact Person)</p>
                    <a href="tel:+919900129807" className="block text-[#C96F2C] hover:underline font-medium">+91 99001-29807</a>
                    <a href="tel:+918023479840" className="block text-[#C96F2C] hover:underline font-medium">+91-80-2347 9840</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F7F7F4] border border-[#E6EAEC] rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#C96F2C]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#15191C] mb-1">Email</h3>
                    <a href="mailto:jain@indfurnace.com" className="block text-[#C96F2C] hover:underline font-medium">jain@indfurnace.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F7F7F4] border border-[#E6EAEC] rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#C96F2C]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#15191C] mb-1">Works Address</h3>
                    <address className="text-[#66727A] not-italic leading-relaxed">
                      SB 47, 1st Cross, 1st Stage,<br />
                      Peenya Industrial Estate,<br />
                      Bangalore – 560058,<br />
                      Karnataka, India<br />
                      <span className="text-sm italic mt-1 block">Near Punjab National Bank.</span>
                    </address>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <div className="bg-[#F7F7F4] p-8 border border-[#E6EAEC] rounded-sm">
              <h2 className="text-2xl font-bold text-[#15191C] mb-6">Request Technical Quote</h2>
              
              {submitted ? (
                <div className="bg-white border border-[#25D366] text-center p-8 rounded-sm">
                  <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-[#15191C] mb-2">Enquiry Sent Successfully</h3>
                  <p className="text-[#66727A] mb-6">Our engineering team will review your technical requirements and contact you shortly.</p>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>Submit Another Enquiry</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-[#15191C] mb-1">Full Name *</label>
                      <input required type="text" id="name" className="w-full border border-[#E6EAEC] px-4 py-2 rounded-sm focus:outline-none focus:border-[#C96F2C]" />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-[#15191C] mb-1">Company Name *</label>
                      <input required type="text" id="company" className="w-full border border-[#E6EAEC] px-4 py-2 rounded-sm focus:outline-none focus:border-[#C96F2C]" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#15191C] mb-1">Business Email *</label>
                      <input required type="email" id="email" className="w-full border border-[#E6EAEC] px-4 py-2 rounded-sm focus:outline-none focus:border-[#C96F2C]" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-[#15191C] mb-1">Phone Number *</label>
                      <input required type="tel" id="phone" className="w-full border border-[#E6EAEC] px-4 py-2 rounded-sm focus:outline-none focus:border-[#C96F2C]" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="product" className="block text-sm font-semibold text-[#15191C] mb-1">Product / Solution *</label>
                    <select required id="product" className="w-full border border-[#E6EAEC] px-4 py-2 rounded-sm focus:outline-none focus:border-[#C96F2C] bg-white text-[#252D32]">
                      <option value="">Select a product category...</option>
                      <option value="furnaces">Furnaces</option>
                      <option value="ovens">Ovens</option>
                      <option value="process-control">Process & Control Panels</option>
                      <option value="thermocouples">Thermocouples / RTDs</option>
                      <option value="heaters">Industrial Heaters</option>
                      <option value="elements">Heating Elements / Accessories</option>
                      <option value="wax">Wax Heating Systems</option>
                      <option value="custom">Custom Configuration</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="temperature" className="block text-sm font-semibold text-[#15191C] mb-1">Required Temperature</label>
                      <input type="text" id="temperature" placeholder="e.g., 1200°C" className="w-full border border-[#E6EAEC] px-4 py-2 rounded-sm focus:outline-none focus:border-[#C96F2C]" />
                    </div>
                    <div>
                      <label htmlFor="capacity" className="block text-sm font-semibold text-[#15191C] mb-1">Required Capacity / Dimensions</label>
                      <input type="text" id="capacity" placeholder="e.g., 200kg or 500x500x500mm" className="w-full border border-[#E6EAEC] px-4 py-2 rounded-sm focus:outline-none focus:border-[#C96F2C]" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#15191C] mb-1">Message / Technical Requirement</label>
                    <textarea id="message" rows={4} className="w-full border border-[#E6EAEC] px-4 py-2 rounded-sm focus:outline-none focus:border-[#C96F2C] resize-none" placeholder="Please describe your application and specific requirements..."></textarea>
                  </div>

                  <Button type="submit" variant="primary" className="w-full">
                    Send Technical Enquiry
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

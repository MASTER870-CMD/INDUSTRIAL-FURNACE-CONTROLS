import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { categories } from '@/data/categories';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { Button } from '@/components/ui/Button';
import { ChevronRight, Settings2, CheckCircle2, Factory } from 'lucide-react';

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export default async function ProductDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const category = categories.find(c => c.slug === resolvedParams.category);
  const product = category?.products.find(p => p.slug === resolvedParams.slug);

  if (!category || !product) {
    notFound();
  }

  // Get some related products (up to 3) from the same category
  const relatedProducts = category.products.filter(p => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <div className="bg-[#F7F7F4] py-8 border-b border-[#E6EAEC]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center text-sm text-[#66727A] mb-4">
            <Link href="/" className="hover:text-[#C96F2C]">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2 shrink-0" />
            <Link href="/products" className="hover:text-[#C96F2C]">Products</Link>
            <ChevronRight className="w-4 h-4 mx-2 shrink-0" />
            <Link href={`/products/${category.slug}`} className="hover:text-[#C96F2C] whitespace-nowrap">{category.title}</Link>
            <ChevronRight className="w-4 h-4 mx-2 shrink-0" />
            <span className="text-[#15191C] font-semibold truncate">{product.name}</span>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* Product Image */}
            <div>
              <div className="aspect-[4/3] bg-[#F7F7F4] border border-[#E6EAEC] rounded-sm relative overflow-hidden mb-4 p-4">
                <PlaceholderImage text={`Official IFC Image: ${product.name}`} className="border-none shadow-sm" />
              </div>
              <p className="text-xs text-[#66727A] text-center italic">* Official product image to be updated.</p>
            </div>

            {/* Product Info */}
            <div>
              <span className="text-[#C96F2C] font-bold text-sm tracking-widest uppercase mb-2 block">
                {category.title}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-[#15191C] mb-6 tracking-tight">
                {product.name}
              </h1>
              
              <div className="text-[#252D32] leading-relaxed mb-8 border-l-4 border-[#E6EAEC] pl-4">
                Engineered for precision thermal processing. The {product.name} provides exceptional temperature uniformity, robust construction, and advanced process control for industrial and laboratory applications.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <div className="bg-[#F7F7F4] p-4 border border-[#E6EAEC] rounded-sm">
                  <Settings2 className="w-6 h-6 text-[#C96F2C] mb-2" />
                  <h3 className="font-bold text-[#15191C] text-sm mb-1">Custom Configuration</h3>
                  <p className="text-xs text-[#66727A]">Built to application requirements</p>
                </div>
                <div className="bg-[#F7F7F4] p-4 border border-[#E6EAEC] rounded-sm">
                  <Factory className="w-6 h-6 text-[#C96F2C] mb-2" />
                  <h3 className="font-bold text-[#15191C] text-sm mb-1">Industrial Grade</h3>
                  <p className="text-xs text-[#66727A]">Heavy-duty construction</p>
                </div>
              </div>

              <div className="p-6 bg-[#15191C] text-white rounded-sm shadow-xl">
                <h3 className="text-xl font-bold mb-2">Request Technical Specification</h3>
                <p className="text-[#E6EAEC] opacity-80 text-sm mb-6">
                  Contact our engineering team to discuss capabilities, capacities, and a customized quotation for your process.
                </p>
                <Button href={`/contact?quote=true&product=${product.slug}`} variant="primary" className="w-full">
                  Request Technical Quote
                </Button>
              </div>
            </div>
          </div>

          {/* Detailed Info Tabs / Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              
              <section>
                <h2 className="text-2xl font-bold text-[#15191C] mb-6 flex items-center">
                  <div className="w-1.5 h-6 bg-[#C96F2C] mr-3"></div>
                  Key Specifications
                </h2>
                <div className="bg-white border border-[#E6EAEC] rounded-sm">
                  <table className="w-full text-sm text-left">
                    <tbody>
                      <tr className="border-b border-[#E6EAEC]">
                        <th className="py-4 px-6 bg-[#F7F7F4] font-semibold text-[#15191C] w-1/3">Operating Temperature</th>
                        <td className="py-4 px-6 text-[#252D32]">Customizable based on model / application</td>
                      </tr>
                      <tr className="border-b border-[#E6EAEC]">
                        <th className="py-4 px-6 bg-[#F7F7F4] font-semibold text-[#15191C]">Capacity / Dimensions</th>
                        <td className="py-4 px-6 text-[#252D32]">Built according to customer requirements</td>
                      </tr>
                      <tr className="border-b border-[#E6EAEC]">
                        <th className="py-4 px-6 bg-[#F7F7F4] font-semibold text-[#15191C]">Control System</th>
                        <td className="py-4 px-6 text-[#252D32]">Programmable PID / Thyristor control options</td>
                      </tr>
                      <tr>
                        <th className="py-4 px-6 bg-[#F7F7F4] font-semibold text-[#15191C]">Power Supply</th>
                        <td className="py-4 px-6 text-[#252D32]">Configured to local industrial standards</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-[#66727A] mt-2 italic">* Note: Above are general capabilities. Final specifications depend on the requested custom configuration.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#15191C] mb-6 flex items-center">
                  <div className="w-1.5 h-6 bg-[#C96F2C] mr-3"></div>
                  Features & Capabilities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Excellent temperature uniformity",
                    "Advanced thermal insulation",
                    "Robust industrial construction",
                    "Precision process control",
                    "Energy efficient design",
                    "Customized dimensions",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#C96F2C] shrink-0 mr-3" />
                      <span className="text-[#252D32]">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>

            </div>

            {/* Sidebar Applications */}
            <div className="space-y-8">
              <div className="bg-[#F7F7F4] p-6 border border-[#E6EAEC] rounded-sm">
                <h3 className="font-bold text-[#15191C] mb-4 text-lg">Typical Applications</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-sm text-[#252D32]"><div className="w-1.5 h-1.5 bg-[#C96F2C] rounded-full mr-3"></div> Heat Treatment</li>
                  <li className="flex items-center text-sm text-[#252D32]"><div className="w-1.5 h-1.5 bg-[#C96F2C] rounded-full mr-3"></div> Laboratory R&D</li>
                  <li className="flex items-center text-sm text-[#252D32]"><div className="w-1.5 h-1.5 bg-[#C96F2C] rounded-full mr-3"></div> Material Testing</li>
                  <li className="flex items-center text-sm text-[#252D32]"><div className="w-1.5 h-1.5 bg-[#C96F2C] rounded-full mr-3"></div> Industrial Processing</li>
                </ul>
              </div>

              {/* Related Products */}
              {relatedProducts.length > 0 && (
                <div>
                  <h3 className="font-bold text-[#15191C] mb-4 text-lg">Related {category.title}</h3>
                  <div className="space-y-4">
                    {relatedProducts.map(rp => (
                      <Link href={`/products/${category.slug}/${rp.slug}`} key={rp.slug} className="group flex items-center p-3 border border-[#E6EAEC] hover:border-[#C96F2C] transition-colors rounded-sm bg-white">
                        <div className="w-12 h-12 bg-[#F7F7F4] shrink-0 mr-4 border border-[#E6EAEC]">
                          <PlaceholderImage text="" icon={false} className="border-none opacity-50" />
                        </div>
                        <h4 className="font-bold text-sm text-[#15191C] group-hover:text-[#C96F2C] transition-colors line-clamp-2">{rp.name}</h4>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { categories } from '@/data/categories';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface Props {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: Props) {
  const resolvedParams = await params;
  const category = categories.find(c => c.slug === resolvedParams.category);

  if (!category) {
    notFound();
  }

  return (
    <>
      <div className="bg-[#F7F8FA] py-8 border-b border-[#E3E6E8]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center text-sm text-[#66727A] mb-4">
            <Link href="/" className="hover:text-[#0000FF]">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link href="/products" className="hover:text-[#0000FF]">Products</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-[#17191C] font-semibold">{category.title}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#17191C] tracking-tight">{category.title}</h1>
          <p className="text-lg text-[#66727A] mt-4 max-w-2xl">{category.description}</p>
        </div>
      </div>

      <section className="py-20 bg-white min-h-[50vh]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.products.map((product, index) => (
              <ScrollReveal key={product.slug} delay={index * 0.05} direction="up">
                <Link href={`/products/${category.slug}/${product.slug}`} className="group flex items-center p-5 bg-white border border-[#E3E6E8] hover:border-transparent hover:shadow-[0_20px_40px_-15px_rgba(0,0,255,0.1)] transition-all duration-300 rounded-sm hover:-translate-y-1">
                  <div className="w-20 h-20 bg-[#F7F8FA] shrink-0 mr-5 rounded-full flex items-center justify-center p-3 border border-[#E3E6E8] group-hover:border-[#0000FF]/20 transition-colors">
                    <PlaceholderImage src={product.image} alt={product.name} className="border-none object-contain w-full h-full group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-lg text-[#17191C] group-hover:text-[#0000FF] transition-colors">{product.name}</h3>
                  </div>
                  <ArrowRight className="w-6 h-6 text-[#E3E6E8] group-hover:text-[#0000FF] group-hover:translate-x-1 transition-all duration-300 shrink-0" />
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

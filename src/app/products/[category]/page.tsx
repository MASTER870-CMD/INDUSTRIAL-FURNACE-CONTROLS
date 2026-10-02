import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { categories } from '@/data/categories';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { ArrowRight, ChevronRight } from 'lucide-react';

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
      <div className="bg-[#F7F7F4] py-8 border-b border-[#E6EAEC]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center text-sm text-[#66727A] mb-4">
            <Link href="/" className="hover:text-[#C96F2C]">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link href="/products" className="hover:text-[#C96F2C]">Products</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-[#15191C] font-semibold">{category.title}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#15191C] tracking-tight">{category.title}</h1>
          <p className="text-lg text-[#66727A] mt-4 max-w-2xl">{category.description}</p>
        </div>
      </div>

      <section className="py-20 bg-white min-h-[50vh]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.products.map((product) => (
              <Link key={product.slug} href={`/products/${category.slug}/${product.slug}`} className="group flex items-center p-4 border border-[#E6EAEC] hover:border-[#C96F2C] transition-colors rounded-sm">
                <div className="w-16 h-16 bg-[#F7F7F4] shrink-0 mr-4 border border-[#E6EAEC]">
                  <PlaceholderImage text="" icon={false} className="border-none opacity-50" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-[#15191C] group-hover:text-[#C96F2C] transition-colors">{product.name}</h3>
                </div>
                <ArrowRight className="w-5 h-5 text-[#E6EAEC] group-hover:text-[#C96F2C] transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

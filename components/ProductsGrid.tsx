import React from 'react';
import { Product } from '../types';
import { Maximize2 } from 'lucide-react';

interface ProductsGridProps {
  products: Product[];
  onSelect: (product: Product) => void;
  title?: string;
}

export const ProductsGrid: React.FC<ProductsGridProps> = ({
  products,
  onSelect,
  title = 'OUR PRODUCTS',
}) => {
  return (
    <section id="products" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center space-y-4">
          <span className="text-blue-500 font-black tracking-[0.3em] uppercase text-[10px]">
            Pure UAE Sourced
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col bg-zinc-950/50 border border-zinc-900 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-500"
            >
              {/* IMAGE AREA */}
              <div
                className="relative flex justify-center items-center bg-zinc-900"
                style={{ height: product.imageHeight ?? 400 }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: product.imageWidth ?? 200,
                    height: product.imageHeight ?? 400,
                  }}
                  className="
                    object-contain
                    transition-transform
                    duration-700
                    group-hover:scale-105
                    opacity-80
                    group-hover:opacity-100
                  "
                />

                {/* HOVER OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <button
                    onClick={() => onSelect(product)}
                    className="w-full py-3 bg-white text-black rounded-lg font-black uppercase text-xs tracking-tighter flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform"
                  >
                    <Maximize2 size={14} />
                    View Details & Pricing
                  </button>
                </div>
              </div>

              {/* PRODUCT INFO */}
              <div className="p-6 space-y-2 bg-[#0a0a0a]">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-lg tracking-tight leading-tight uppercase">
                    {product.name}
                  </h3>
                  <div className="text-right">
                    <span className="text-blue-500 font-black block">
                      {product.startingPrice}
                    </span>
                    <span className="text-[8px] text-zinc-600 font-black uppercase tracking-tighter">
                      + TAX 5%
                    </span>
                  </div>
                </div>
                <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">
                  {product.sizeLabel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import Link from 'next/link';
import { useShop } from '../context/ShopContext';

export default function ProductCard({ product }) {
  const { wishlist, toggleWishlist, addToCart, setQuickViewProduct } = useShop();
  const isWish = wishlist.includes(product.id);
  const discountPct = Math.round((1 - product.price / product.originalPrice) * 100);

  const formatINR = (val) => '₹' + Number(val).toLocaleString('en-IN');

  return (
    <div className="group relative bg-inkara-slate border border-gold-accent hover:border-inkara-gold rounded-xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-md">
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
        {product.isBestseller && (
          <span className="px-2.5 py-0.5 bg-inkara-gold text-inkara-black text-[9px] font-bold uppercase tracking-widest rounded shadow">Bestseller</span>
        )}
        {product.isNew && (
          <span className="px-2.5 py-0.5 bg-inkara-champagne text-inkara-black text-[9px] font-bold uppercase tracking-widest rounded shadow">New Arrival</span>
        )}
        <span className="px-2 py-0.5 bg-inkara-black/80 backdrop-blur-sm text-inkara-champagne border border-gold-accent/40 text-[9px] font-mono rounded">Save {discountPct}%</span>
      </div>

      <button
        onClick={() => toggleWishlist(product.id)}
        aria-label="Save to Wishlist"
        className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-inkara-black/70 backdrop-blur-sm border border-gold-accent flex items-center justify-center text-inkara-grey hover:text-inkara-gold hover:border-inkara-gold transition-colors"
      >
        <svg className={`w-4 h-4 ${isWish ? 'text-red-500 fill-current' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
      </button>

      <Link href={`/product/${product.id}`} className="relative h-64 overflow-hidden bg-inkara-charcoal cursor-pointer block">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-inkara-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
          <button
            onClick={(e) => { e.preventDefault(); setQuickViewProduct(product); }}
            className="w-full py-2 bg-inkara-black/90 backdrop-blur-sm border border-gold-accent text-inkara-champagne hover:border-inkara-gold text-[11px] uppercase tracking-widest font-semibold rounded transition-colors shadow"
          >
            Quick View
          </button>
        </div>
      </Link>

      <div className="p-5 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-[11px] text-inkara-gold mb-1">
            <span className="uppercase tracking-wider font-mono">{product.categoryName}</span>
            <span className="font-mono">&#9733; {product.rating}</span>
          </div>
          <Link href={`/product/${product.id}`} className="font-serif text-lg text-inkara-ivory hover:text-inkara-champagne cursor-pointer transition-colors font-medium block">
            {product.name}
          </Link>
          <p className="text-xs text-inkara-grey line-clamp-2 mt-1 leading-relaxed">{product.shortDescription}</p>
        </div>

        <div className="pt-4 border-t border-gold-accent/50 mt-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex gap-1.5">
              {product.colors.map(c => (
                <span key={c.name} className="w-3.5 h-3.5 rounded-full border border-gold-accent" style={{ backgroundColor: c.hex }} title={c.name}></span>
              ))}
            </div>
            <div className="text-right">
              <span className="font-mono text-base text-inkara-champagne font-semibold">{formatINR(product.price)}</span>
              <span className="font-mono text-xs text-inkara-grey line-through ml-1.5">{formatINR(product.originalPrice)}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => addToCart(product.id)}
              className="py-2.5 bg-gradient-to-r from-inkara-gold to-inkara-champagne text-inkara-black text-[11px] font-semibold uppercase tracking-wider rounded hover:brightness-110 transition-all shadow-sm flex items-center justify-center gap-1"
            >
              Add to Bag
            </button>
            <Link
              href={`/product/${product.id}`}
              className="py-2.5 border border-gold-accent hover:border-inkara-gold text-inkara-ivory text-[11px] uppercase tracking-wider rounded text-center transition-colors block"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

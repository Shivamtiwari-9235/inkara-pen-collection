import React, { useState } from 'react';
import Link from 'next/link';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen } = useShop();
  const [query, setQuery] = useState('');

  if (!isSearchOpen) return null;

  const q = query.toLowerCase().trim();
  const matches = PRODUCTS.filter(p => {
    return p.name.toLowerCase().includes(q) ||
           p.categoryName.toLowerCase().includes(q) ||
           p.shortDescription.toLowerCase().includes(q) ||
           p.colors.some(c => c.name.toLowerCase().includes(q));
  });

  const formatINR = (val) => '₹' + Number(val).toLocaleString('en-IN');

  return (
    <div className="fixed inset-0 z-50 bg-inkara-black/95 backdrop-blur-lg flex flex-col p-6 sm:p-12 overflow-y-auto">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex items-center justify-between pb-6 border-b border-gold-accent">
          <span className="font-serif text-lg tracking-widest uppercase text-inkara-gold">Search INKARA Catalog</span>
          <button onClick={() => setIsSearchOpen(false)} className="text-inkara-grey hover:text-inkara-ivory p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        <div className="relative mt-8">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            placeholder="Type a pen name, category, or finish (e.g. Noir, Fountain, Gold)..."
            className="w-full bg-transparent border-b-2 border-inkara-gold/40 text-2xl sm:text-3xl font-serif text-inkara-ivory py-4 px-2 focus:outline-none focus:border-inkara-gold transition-colors placeholder:text-inkara-grey/40"
          />
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {matches.length === 0 ? (
            <div className="col-span-full py-12 text-center text-inkara-grey">
              <p className="font-serif text-xl text-inkara-ivory mb-2">No instruments found matching "{query}"</p>
              <p className="text-xs">Try searching for "Fountain", "Rollerball", "Gold", or "Noir".</p>
            </div>
          ) : (
            matches.map(p => (
              <Link
                key={p.id}
                href={`/product/${p.id}`}
                onClick={() => setIsSearchOpen(false)}
                className="group cursor-pointer bg-inkara-charcoal/40 border border-gold-accent hover:border-inkara-gold p-4 rounded-lg transition-all flex items-center gap-4"
              >
                <img src={p.image} alt={p.name} className="w-16 h-16 object-cover rounded bg-inkara-black border border-gold-accent/50 group-hover:scale-105 transition-transform" />
                <div>
                  <span className="text-[10px] tracking-widest uppercase text-inkara-gold">{p.categoryName}</span>
                  <h4 className="font-serif text-base text-inkara-ivory group-hover:text-inkara-champagne transition-colors">{p.name}</h4>
                  <span className="font-mono text-sm text-inkara-champagne font-semibold">{formatINR(p.price)}</span>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

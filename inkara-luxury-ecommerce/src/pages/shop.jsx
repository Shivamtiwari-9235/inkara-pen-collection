import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/products';

export default function ShopPage() {
  const router = useRouter();
  const [category, setCategory] = useState('all');
  const [color, setColor] = useState('all');
  const [maxPrice, setMaxPrice] = useState(12000);
  const [sortBy, setSortBy] = useState('featured');
  const [bestsellerOnly, setBestsellerOnly] = useState(false);
  const [saleOnly, setSaleOnly] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (router.query.cat) {
      setCategory(router.query.cat);
    }
  }, [router.query]);

  const formatINR = (val) => '₹' + Number(val).toLocaleString('en-IN');

  const filtered = PRODUCTS.filter(p => {
    if (category !== 'all' && p.category !== category) return false;
    if (color !== 'all' && !p.colors.some(c => c.name.toLowerCase().includes(color.toLowerCase()))) return false;
    if (p.price > maxPrice) return false;
    if (bestsellerOnly && !p.isBestseller) return false;
    if (saleOnly && (p.originalPrice <= p.price)) return false;
    if (query) {
      const q = query.toLowerCase();
      if (!p.name.toLowerCase().includes(q) && !p.shortDescription.toLowerCase().includes(q)) return false;
    }
    return true;
  });

  if (sortBy === 'price-low') filtered.sort((a, b) => a.price - b.price);
  else if (sortBy === 'price-high') filtered.sort((a, b) => b.price - a.price);
  else if (sortBy === 'rating') filtered.sort((a, b) => b.rating - a.rating);
  else if (sortBy === 'newest') filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));

  const resetFilters = () => {
    setCategory('all');
    setColor('all');
    setMaxPrice(12000);
    setSortBy('featured');
    setBestsellerOnly(false);
    setSaleOnly(false);
    setQuery('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Head>
        <title>Shop Luxury Pens | INKARA Official Atelier</title>
      </Head>

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-serif uppercase tracking-[0.3em] text-inkara-gold block">&#10022; Complete Atelier Catalog</span>
        <h1 className="font-serif text-3xl sm:text-5xl text-inkara-ivory font-semibold">The Instruments of INKARA</h1>
        <p className="text-sm text-inkara-grey leading-relaxed">
          Filter our collection of handcrafted fountain pens, liquid rollerballs, and twist ballpoints by discipline, mechanism, and precious finish.
        </p>
      </div>

      <div className="bg-inkara-slate border border-gold-accent rounded-xl p-4 sm:p-6 space-y-6">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search instruments by name or finish..."
              className="w-full bg-inkara-black border border-gold-accent rounded-lg text-xs px-4 py-2.5 text-inkara-ivory placeholder:text-inkara-grey/50 focus:outline-none focus:border-inkara-gold"
            />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-end text-xs">
            <span className="text-inkara-grey shrink-0">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-inkara-black border border-gold-accent text-inkara-ivory rounded px-3 py-2 text-xs focus:outline-none focus:border-inkara-gold"
            >
              <option value="featured">Featured Instruments</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Customer Rating</option>
              <option value="newest">New Arrivals First</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gold-accent/50">
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: `All Instruments (${PRODUCTS.length})` },
              { id: 'fountain', label: 'Fountain Pens (4)' },
              { id: 'rollerball', label: 'Rollerball Pens (4)' },
              { id: 'ballpoint', label: 'Ballpoint Pens (4)' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setCategory(tab.id)}
                className={`px-4 py-1.5 text-xs rounded-full border transition-colors ${category === tab.id ? 'bg-inkara-gold text-inkara-black font-semibold border-inkara-gold' : 'border-gold-accent text-inkara-grey hover:text-inkara-ivory'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 text-xs text-inkara-grey">
            <label className="flex items-center gap-1.5 cursor-pointer hover:text-inkara-ivory">
              <input type="checkbox" checked={bestsellerOnly} onChange={(e) => setBestsellerOnly(e.target.checked)} className="accent-inkara-gold" />
              <span>Bestsellers Only</span>
            </label>
            <label className="flex items-center gap-1.5 cursor-pointer hover:text-inkara-ivory">
              <input type="checkbox" checked={saleOnly} onChange={(e) => setSaleOnly(e.target.checked)} className="accent-inkara-gold" />
              <span>Special Offers Only</span>
            </label>
            <button onClick={resetFilters} className="text-xs text-inkara-gold hover:underline">
              Reset Filters
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gold-accent/40 text-xs">
          <div className="space-y-1.5">
            <div className="flex justify-between text-inkara-grey">
              <span>Maximum Budget:</span>
              <span className="font-mono text-inkara-champagne font-semibold">{formatINR(maxPrice)}</span>
            </div>
            <input
              type="range"
              min="1999"
              max="11000"
              step="500"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-inkara-gold"
            />
          </div>

          <div className="space-y-1.5">
            <span className="text-inkara-grey block">Filter by Finish:</span>
            <div className="flex flex-wrap gap-2">
              {['all', 'black', 'gold', 'burgundy', 'blue', 'green', 'brass'].map(colorKey => (
                <button
                  key={colorKey}
                  onClick={() => setColor(colorKey)}
                  className={`px-2.5 py-1 text-[11px] rounded border capitalize transition-colors ${color === colorKey ? 'border-inkara-gold text-inkara-champagne bg-inkara-gold/10' : 'border-gold-accent text-inkara-grey hover:text-inkara-ivory'}`}
                >
                  {colorKey === 'all' ? 'All Colors' : colorKey}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="py-20 text-center text-inkara-grey space-y-4 bg-inkara-slate border border-gold-accent rounded-xl p-8">
          <p className="font-serif text-2xl text-inkara-ivory">No instruments match your specific filter criteria.</p>
          <button onClick={resetFilters} className="px-6 py-2.5 bg-gradient-to-r from-inkara-gold to-inkara-champagne text-inkara-black font-semibold text-xs uppercase tracking-widest rounded shadow">
            Reset All Filters
          </button>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center text-xs text-inkara-grey">
            <span>Showing <strong>{filtered.length}</strong> of {PRODUCTS.length} instruments</span>
            <span className="text-inkara-gold">&#10022; All items eligible for "Buy 3, Get 1 Free"</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

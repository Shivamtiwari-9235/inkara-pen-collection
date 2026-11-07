import React, { useState } from 'react';
import Link from 'next/link';
import { useShop } from '../context/ShopContext';

export default function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart } = useShop();
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedNibIndex, setSelectedNibIndex] = useState(0);
  const [activeImage, setActiveImage] = useState(null);

  if (!quickViewProduct) return null;
  const p = quickViewProduct;
  const currentImg = activeImage || p.image;
  const formatINR = (val) => '₹' + Number(val).toLocaleString('en-IN');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-3xl bg-inkara-slate border border-gold-accent rounded-xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col md:flex-row">
        <button onClick={() => setQuickViewProduct(null)} className="absolute top-4 right-4 z-10 p-2 text-inkara-grey hover:text-inkara-ivory bg-inkara-charcoal/80 rounded-full">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <div className="md:w-1/2 bg-inkara-black p-6 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-gold-accent">
          <img src={currentImg} alt={p.name} className="max-h-72 object-contain rounded-lg shadow-gold-subtle" />
          <div className="flex gap-2 mt-4">
            {p.gallery.map(img => (
              <img
                key={img}
                src={img}
                onClick={() => setActiveImage(img)}
                className="w-12 h-12 object-cover rounded border border-gold-accent hover:border-inkara-gold cursor-pointer transition-colors"
              />
            ))}
          </div>
        </div>

        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="text-inkara-gold tracking-widest uppercase font-medium">{p.categoryName}</span>
              <span className="text-inkara-champagne font-mono">&#9733; {p.rating} ({p.reviewsCount} reviews)</span>
            </div>
            <h2 className="font-serif text-2xl text-inkara-ivory mb-2">{p.name}</h2>
            <div className="flex items-baseline gap-3 mb-4">
              <span className="font-mono text-xl text-inkara-champagne font-semibold">{formatINR(p.price)}</span>
              <span className="font-mono text-sm text-inkara-grey line-through">{formatINR(p.originalPrice)}</span>
              <span className="text-xs text-inkara-gold border border-inkara-gold/40 px-2 py-0.5 rounded">Save {Math.round((1 - p.price / p.originalPrice) * 100)}%</span>
            </div>
            <p className="text-xs text-inkara-grey leading-relaxed mb-4">{p.shortDescription}</p>

            <div className="mb-4">
              <label className="block text-xs uppercase tracking-wider text-inkara-grey mb-1.5">Color Finish: <span className="text-inkara-ivory font-medium">{p.colors[selectedColorIndex].name}</span></label>
              <div className="flex gap-2">
                {p.colors.map((c, i) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColorIndex(i)}
                    className={`w-7 h-7 rounded-full border border-gold-accent transition-all flex items-center justify-center ${i === selectedColorIndex ? 'ring-2 ring-inkara-gold' : ''}`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  >
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: c.accent }}></span>
                  </button>
                ))}
              </div>
            </div>

            {p.nibs && (
              <div className="mb-6">
                <label className="block text-xs uppercase tracking-wider text-inkara-grey mb-1.5">Select Nib / Tip Grade:</label>
                <div className="flex flex-wrap gap-2">
                  {p.nibs.map((nib, i) => (
                    <button
                      key={nib}
                      onClick={() => setSelectedNibIndex(i)}
                      className={`text-xs px-3 py-1.5 rounded border transition-colors ${i === selectedNibIndex ? 'border-inkara-gold text-inkara-champagne bg-inkara-gold/10' : 'border-gold-accent text-inkara-grey'}`}
                    >
                      {nib}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-3 pt-4 border-t border-gold-accent">
            <button
              onClick={() => {
                addToCart(p.id, p.colors[selectedColorIndex].name, p.nibs ? p.nibs[selectedNibIndex] : 'Standard');
                setQuickViewProduct(null);
              }}
              className="w-full py-3 bg-gradient-to-r from-inkara-gold to-inkara-champagne text-inkara-black font-semibold text-xs tracking-widest uppercase rounded hover:brightness-110 transition-all shadow-gold-glow flex items-center justify-center gap-2"
            >
              Add to Shopping Bag
            </button>
            <Link
              href={`/product/${p.id}`}
              onClick={() => setQuickViewProduct(null)}
              className="w-full py-2.5 border border-gold-accent text-inkara-ivory hover:border-inkara-gold hover:text-inkara-gold text-xs uppercase tracking-widest font-medium rounded transition-colors text-center block"
            >
              View Full Specifications & Heritage &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

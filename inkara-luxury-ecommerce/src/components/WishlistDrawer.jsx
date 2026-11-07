import React from 'react';
import Link from 'next/link';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';

export default function WishlistDrawer() {
  const { isWishlistOpen, setIsWishlistOpen, wishlist, toggleWishlist, addToCart } = useShop();

  if (!isWishlistOpen) return null;
  const items = PRODUCTS.filter(p => wishlist.includes(p.id));
  const formatINR = (val) => '₹' + Number(val).toLocaleString('en-IN');

  return (
    <>
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-opacity" onClick={() => setIsWishlistOpen(false)}></div>
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-inkara-slate border-l border-gold-accent z-50 flex flex-col shadow-2xl">
        <div className="p-6 border-b border-gold-accent flex items-center justify-between bg-inkara-charcoal/50">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-inkara-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
            <h3 className="font-serif text-xl tracking-wider text-inkara-ivory">Saved Instruments ({items.length})</h3>
          </div>
          <button onClick={() => setIsWishlistOpen(false)} className="p-2 text-inkara-grey hover:text-inkara-ivory rounded-full hover:bg-inkara-charcoal">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="py-16 text-center text-inkara-grey space-y-4">
              <div className="w-16 h-16 rounded-full border border-gold-accent mx-auto flex items-center justify-center text-inkara-gold/60">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              </div>
              <p className="font-serif text-lg text-inkara-ivory">No saved instruments yet.</p>
              <p className="text-xs max-w-xs mx-auto">Click the heart icon on any pen to save it for future consideration.</p>
            </div>
          ) : (
            items.map(p => (
              <div key={p.id} className="p-3.5 bg-inkara-charcoal/50 border border-gold-accent rounded-lg flex gap-3.5 items-center">
                <img src={p.image} alt={p.name} className="w-16 h-16 object-cover rounded bg-inkara-black border border-gold-accent/40" />
                <div className="flex-grow min-w-0">
                  <h4 className="font-serif text-sm text-inkara-ivory truncate font-medium">{p.name}</h4>
                  <p className="font-mono text-xs text-inkara-champagne font-semibold mt-0.5">{formatINR(p.price)}</p>
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => { addToCart(p.id); toggleWishlist(p.id); }}
                      className="px-2.5 py-1 bg-inkara-gold text-inkara-black text-[11px] font-semibold uppercase tracking-wider rounded hover:bg-inkara-champagne transition-colors"
                    >
                      Move to Bag
                    </button>
                    <button onClick={() => toggleWishlist(p.id)} className="text-[11px] text-inkara-grey hover:text-red-400 transition-colors">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-6 border-t border-gold-accent bg-inkara-charcoal/40">
          <Link
            href="/shop"
            onClick={() => setIsWishlistOpen(false)}
            className="w-full py-3 border border-inkara-gold text-inkara-gold hover:bg-inkara-gold hover:text-inkara-black transition-colors rounded text-xs uppercase tracking-widest font-semibold block text-center"
          >
            Continue Browsing Catalog
          </Link>
        </div>
      </div>
    </>
  );
}

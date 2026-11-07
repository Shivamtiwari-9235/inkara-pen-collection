import React, { useState } from 'react';
import Link from 'next/link';
import { useShop } from '../context/ShopContext';

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cart, updateCartQty, removeCartItem, calculateCartTotals, promoCode, setPromoCode, showToast } = useShop();
  const [promoInput, setPromoInput] = useState('');

  if (!isCartOpen) return null;

  const totals = calculateCartTotals();
  const formatINR = (val) => '₹' + Number(val).toLocaleString('en-IN');

  const handleApplyPromo = () => {
    const code = promoInput.trim().toUpperCase();
    if (!code) return;
    if (code === 'BUY3GET1') {
      setPromoCode(code);
      showToast('BUY 3 GET 1 FREE activated: 4th pen is complimentary!');
    } else if (code === 'INKARA10' || code === 'WELCOME10') {
      setPromoCode(code);
      showToast(`Promo code ${code} applied: 10% privilege discount.`);
    } else {
      showToast('Invalid or expired promotional code.');
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-opacity" onClick={() => setIsCartOpen(false)}></div>
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-inkara-slate border-l border-gold-accent z-50 flex flex-col shadow-2xl">
        <div className="p-6 border-b border-gold-accent flex items-center justify-between bg-inkara-charcoal/50">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-inkara-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
            </svg>
            <h3 className="font-serif text-xl tracking-wider text-inkara-ivory">Your Shopping Bag ({totals.penCount})</h3>
          </div>
          <button onClick={() => setIsCartOpen(false)} className="p-2 text-inkara-grey hover:text-inkara-ivory rounded-full hover:bg-inkara-charcoal">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        {/* Promo banner */}
        <div className="px-6 py-3 bg-gradient-to-r from-inkara-charcoal via-inkara-card to-inkara-charcoal border-b border-gold-accent text-xs">
          {totals.penCount === 0 ? (
            <span className="text-inkara-grey">&#10022; Connoisseur Deal: Buy 3 pens, 4th pen is FREE.</span>
          ) : totals.penCount < 4 ? (
            <div>
              <div className="flex items-center justify-between">
                <span className="text-inkara-champagne font-medium">&#10022; Add <strong>{4 - totals.penCount} more pen{4 - totals.penCount > 1 ? 's' : ''}</strong> to receive the 4th pen FREE!</span>
                <Link href="/shop" onClick={() => setIsCartOpen(false)} className="text-inkara-gold underline font-semibold ml-2">Browse &rarr;</Link>
              </div>
              <div className="w-full bg-inkara-black h-1.5 rounded-full mt-2 overflow-hidden border border-gold-accent/50">
                <div className="bg-gradient-to-r from-inkara-gold to-inkara-champagne h-full rounded-full transition-all duration-500" style={{ width: `${(totals.penCount / 4) * 100}%` }}></div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between text-inkara-gold font-semibold">
              <span>&#10003; BUY 3 GET 1 FREE UNLOCKED ({totals.freeItemsCount} pen{totals.freeItemsCount > 1 ? 's' : ''} complimentary!)</span>
              <span className="text-inkara-champagne font-mono">-{formatINR(totals.freeItemDiscount)}</span>
            </div>
          )}
        </div>

        {/* Cart items */}
        <div className="flex-grow overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="py-16 text-center text-inkara-grey space-y-4">
              <div className="w-16 h-16 rounded-full border border-gold-accent mx-auto flex items-center justify-center text-inkara-gold/60">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
              </div>
              <p className="font-serif text-lg text-inkara-ivory">Your shopping bag is empty.</p>
              <Link href="/shop" onClick={() => setIsCartOpen(false)} className="inline-block px-6 py-2.5 bg-inkara-charcoal border border-inkara-gold text-inkara-gold text-xs uppercase tracking-widest font-semibold rounded hover:bg-inkara-gold hover:text-inkara-black transition-colors">
                Discover Collection
              </Link>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="p-3.5 bg-inkara-charcoal/50 border border-gold-accent rounded-lg flex gap-3.5 items-center relative group">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded bg-inkara-black border border-gold-accent/40" />
                <div className="flex-grow min-w-0">
                  <h4 className="font-serif text-sm text-inkara-ivory truncate font-medium">{item.name}</h4>
                  <p className="text-[11px] text-inkara-gold tracking-wider">{item.selectedColor} &bull; {item.selectedNib}</p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-gold-accent rounded bg-inkara-black">
                      <button onClick={() => updateCartQty(item.id, -1)} className="px-2 py-0.5 text-xs text-inkara-grey hover:text-inkara-gold">-</button>
                      <span className="px-2 text-xs font-mono text-inkara-ivory">{item.quantity}</span>
                      <button onClick={() => updateCartQty(item.id, 1)} className="px-2 py-0.5 text-xs text-inkara-grey hover:text-inkara-gold">+</button>
                    </div>
                    <span className="font-mono text-sm text-inkara-champagne font-semibold">{formatINR(item.price * item.quantity)}</span>
                  </div>
                </div>
                <button onClick={() => removeCartItem(item.id)} className="p-1.5 text-inkara-grey/60 hover:text-red-400 transition-colors self-start" title="Remove">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gold-accent bg-inkara-charcoal/40 space-y-4">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-inkara-grey">
              <span>Subtotal</span>
              <span className="font-mono text-inkara-ivory">{formatINR(totals.subtotal)}</span>
            </div>
            {totals.totalDiscount > 0 && (
              <div className="flex justify-between text-inkara-gold">
                <span>{totals.freeItemDiscount > 0 ? 'Buy 3 Get 1 Free Applied' : 'Privilege Code Discount'}</span>
                <span className="font-mono font-semibold">-{formatINR(totals.totalDiscount)}</span>
              </div>
            )}
            <div className="flex justify-between text-inkara-grey">
              <span>Insured Express Shipping</span>
              <span className="text-inkara-champagne font-medium">Complimentary</span>
            </div>
            <div className="flex justify-between text-base font-serif text-inkara-ivory pt-2 border-t border-gold-accent font-semibold">
              <span>Estimated Total</span>
              <span className="font-mono text-inkara-champagne text-lg">{formatINR(totals.finalTotal)}</span>
            </div>
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              value={promoInput}
              onChange={(e) => setPromoInput(e.target.value)}
              placeholder="Promo code (BUY3GET1, INKARA10)"
              className="bg-inkara-black border border-gold-accent text-xs px-3 py-2 rounded flex-grow text-inkara-ivory focus:outline-none focus:border-inkara-gold uppercase tracking-wider"
            />
            <button onClick={handleApplyPromo} className="px-4 py-2 bg-inkara-charcoal border border-gold-accent text-xs text-inkara-champagne hover:bg-inkara-gold hover:text-inkara-black transition-colors rounded uppercase font-semibold">
              Apply
            </button>
          </div>

          <Link
            href="/checkout"
            onClick={() => setIsCartOpen(false)}
            className="w-full py-3.5 bg-gradient-to-r from-inkara-gold to-inkara-champagne text-inkara-black font-semibold text-sm tracking-widest uppercase hover:brightness-110 transition-all rounded shadow-gold-glow flex items-center justify-center gap-2 block text-center"
          >
            Proceed to Checkout &rarr;
          </Link>
          <p className="text-[11px] text-center text-inkara-grey">Demo checkout environment &bull; No actual bank card charged</p>
        </div>
      </div>
    </>
  );
}

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useShop } from '../context/ShopContext';

export default function OffersPage() {
  const { addToCart, setPromoCode, showToast, setIsCartOpen } = useShop();

  const loadDemoOffer = () => {
    addToCart('noir-fountain');
    addToCart('slate-rollerball');
    addToCart('signature-ballpoint');
    addToCart('metro-ballpoint');
    showToast('Loaded 4 pens! Lowest priced pen is now free.');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      <Head>
        <title>Special Deals & Privilege Offers | INKARA</title>
      </Head>

      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-serif uppercase tracking-[0.3em] text-inkara-gold block">&#10022; Exclusive Atelier Privileges</span>
        <h1 className="font-serif text-4xl sm:text-6xl text-inkara-ivory font-semibold">Privilege Offers & Bundles</h1>
        <p className="text-sm text-inkara-grey leading-relaxed">
          Discover festive promotions, heirloom gift box combinations, and complimentary writing instruments.
        </p>
      </div>

      {/* Main Promotion */}
      <div className="relative bg-gradient-to-br from-inkara-charcoal via-inkara-card to-inkara-black border-2 border-inkara-gold rounded-2xl p-8 sm:p-14 shadow-gold-glow overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="px-3.5 py-1 bg-inkara-gold text-inkara-black text-xs font-bold uppercase tracking-widest rounded-full inline-block">
              Primary Campaign
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-inkara-champagne font-bold leading-tight">
              BUY 3 PENS, GET 1 FREE
            </h2>
            <p className="text-sm text-inkara-ivory/90 leading-relaxed">
              Select any four writing instruments across our entire catalog—mix and match Fountain, Rollerball, and Ballpoints. Upon adding four eligible instruments to your shopping bag, <strong>the lowest-priced item is automatically rendered 100% complimentary</strong>.
            </p>
            
            <div className="p-4 bg-inkara-black/60 border border-gold-accent rounded-lg text-xs space-y-2">
              <span className="text-inkara-gold font-semibold uppercase tracking-wider block">How the calculation operates:</span>
              <div className="flex items-center gap-2 text-inkara-grey">
                <span className="w-1.5 h-1.5 rounded-full bg-inkara-gold"></span>
                <span>4 pens selected: Lowest priced pen deducted at 100% discount.</span>
              </div>
              <div className="flex items-center gap-2 text-inkara-grey">
                <span className="w-1.5 h-1.5 rounded-full bg-inkara-gold"></span>
                <span>8 pens selected: Two lowest priced pens deducted at 100% discount.</span>
              </div>
              <div className="flex items-center gap-2 text-inkara-grey">
                <span className="w-1.5 h-1.5 rounded-full bg-inkara-gold"></span>
                <span>Calculated automatically in the shopping bag without code entry.</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <button onClick={loadDemoOffer} className="px-6 py-3.5 bg-gradient-to-r from-inkara-gold to-inkara-champagne text-inkara-black font-semibold text-xs uppercase tracking-widest rounded shadow-gold-glow hover:brightness-110 transition-all">
                Simulate Offer in Shopping Bag &rarr;
              </button>
              <Link href="/shop" className="px-6 py-3.5 border border-gold-accent hover:border-inkara-gold text-inkara-ivory text-xs uppercase tracking-widest rounded transition-colors block">
                Select 4 Pens Manually
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <img src="/images/imperial-gift-box.jpg" alt="Gift Box" className="w-72 h-72 object-cover rounded-xl border border-inkara-gold shadow-2xl" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 bg-inkara-slate border border-gold-accent rounded-xl space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <span className="text-[10px] text-inkara-gold uppercase tracking-widest font-mono">Promo Code: INKARA10</span>
            <h3 className="font-serif text-2xl text-inkara-ivory font-semibold">Pair & Save (10% Off 2 Pens)</h3>
            <p className="text-xs text-inkara-grey leading-relaxed">
              Purchase any two instruments and enjoy 10% off your entire bag. Perfect for matching fountain and rollerball executive pairings.
            </p>
          </div>
          <button
            onClick={() => { setPromoCode('INKARA10'); showToast('Code INKARA10 activated!'); setIsCartOpen(true); }}
            className="w-full py-2.5 border border-gold-accent hover:border-inkara-gold text-inkara-gold text-xs uppercase tracking-widest rounded transition-colors"
          >
            Apply INKARA10 to Bag
          </button>
        </div>

        <div className="p-8 bg-inkara-slate border border-gold-accent rounded-xl space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <span className="text-[10px] text-inkara-gold uppercase tracking-widest font-mono">Bespoke Suite</span>
            <h3 className="font-serif text-2xl text-inkara-ivory font-semibold">Calligrapher's Archival Set</h3>
            <p className="text-xs text-inkara-grey leading-relaxed">
              Includes the Noir Fountain Pen, 50ml archival ink bottle, screw piston converter, and solid brass pen cradle in a velvet lined chest.
            </p>
          </div>
          <button onClick={() => addToCart('imperial-fountain-set')} className="w-full py-2.5 bg-inkara-charcoal border border-inkara-gold text-inkara-champagne hover:bg-inkara-gold hover:text-inkara-black text-xs uppercase tracking-widest rounded transition-colors">
            Add Archival Set (₹8,999)
          </button>
        </div>

        <div className="p-8 bg-inkara-slate border border-gold-accent rounded-xl space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <span className="text-[10px] text-inkara-gold uppercase tracking-widest font-mono">Corporate Privilege</span>
            <h3 className="font-serif text-2xl text-inkara-ivory font-semibold">Executive Gifting Suite</h3>
            <p className="text-xs text-inkara-grey leading-relaxed">
              Orders of 5 or more instruments include complimentary diamond drag name engraving and personalized wax-sealed gift presentation.
            </p>
          </div>
          <button onClick={() => showToast('Corporate Concierge: Email concierge@inkara-pens.com for bespoke engraving.')} className="w-full py-2.5 border border-gold-accent hover:border-inkara-gold text-inkara-ivory text-xs uppercase tracking-widest rounded transition-colors">
            Inquire Corporate Suite
          </button>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import Link from 'next/link';
import { useShop } from '../context/ShopContext';

export default function Footer() {
  const { showToast, setIsQuizOpen } = useShop();

  return (
    <footer className="bg-inkara-slate border-t border-gold-accent mt-20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gold-accent">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-inkara-gold flex items-center justify-center bg-inkara-charcoal">
                <svg className="w-4 h-4 text-inkara-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="m12 2 4 7-4 13-4-13 4-7z"/>
                  <circle cx="12" cy="11" r="1.5" fill="currentColor"/>
                </svg>
              </div>
              <span className="font-serif text-2xl tracking-[0.2em] font-semibold text-inkara-ivory">INKARA</span>
            </div>
            <p className="text-xs tracking-widest uppercase text-inkara-gold font-medium">"Precision, Held in Hand."</p>
            <p className="text-sm text-inkara-grey max-w-sm leading-relaxed">
              Dedicated to the enduring power of handwriting. Every fountain, rollerball, and ballpoint is engineered with aerospace tolerances, solid brass cores, and hand-finished nibs for lifetime longevity.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs text-inkara-grey">
              <span className="flex items-center gap-1.5"><span className="text-inkara-gold">&#10003;</span> Lifetime Warranty</span>
              <span className="flex items-center gap-1.5"><span className="text-inkara-gold">&#10003;</span> Express Delivery</span>
              <span className="flex items-center gap-1.5"><span className="text-inkara-gold">&#10003;</span> 100% Solid Brass</span>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-base tracking-widest uppercase text-inkara-champagne mb-4">Explore</h4>
            <ul className="space-y-2.5 text-sm text-inkara-grey">
              <li><Link href="/" className="hover:text-inkara-gold transition-colors">Home Page</Link></li>
              <li><Link href="/shop" className="hover:text-inkara-gold transition-colors">All Instruments</Link></li>
              <li><Link href="/collections" className="hover:text-inkara-gold transition-colors">Collections Overview</Link></li>
              <li><Link href="/offers" className="hover:text-inkara-gold transition-colors">Special Deals & Bundles</Link></li>
              <li><Link href="/journal" className="hover:text-inkara-gold transition-colors">Writing Journal & Guides</Link></li>
              <li><Link href="/story" className="hover:text-inkara-gold transition-colors">Our Brand Heritage</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-base tracking-widest uppercase text-inkara-champagne mb-4">Categories</h4>
            <ul className="space-y-2.5 text-sm text-inkara-grey">
              <li><Link href="/shop?cat=fountain" className="hover:text-inkara-gold transition-colors">Fountain Pens</Link></li>
              <li><Link href="/shop?cat=rollerball" className="hover:text-inkara-gold transition-colors">Rollerball Pens</Link></li>
              <li><Link href="/shop?cat=ballpoint" className="hover:text-inkara-gold transition-colors">Ballpoint Pens</Link></li>
              <li><Link href="/offers" className="hover:text-inkara-gold transition-colors">Collector's Gift Sets</Link></li>
              <li><button onClick={() => setIsQuizOpen(true)} className="hover:text-inkara-gold transition-colors text-inkara-gold font-medium">&#10022; Pen Style Quiz</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-base tracking-widest uppercase text-inkara-champagne mb-4">Concierge</h4>
            <ul className="space-y-2.5 text-sm text-inkara-grey">
              <li><span>Atelier: New Delhi & Mumbai</span></li>
              <li><span className="text-inkara-ivory">concierge@inkara-pens.com</span></li>
              <li><span>Hours: Mon – Sat, 10 AM – 7 PM IST</span></li>
              <li><span className="text-xs text-inkara-gold">Complimentary Insured Shipping on All Orders</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-inkara-grey gap-4">
          <p>&copy; 2026 INKARA Luxury Writing Instruments. All rights reserved. Registered Trademark.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-inkara-gold cursor-pointer" onClick={() => showToast('Privacy Policy: All customer records are private and encrypted.')}>Privacy Policy</span>
            <span className="hover:text-inkara-gold cursor-pointer" onClick={() => showToast('Terms of Bespoke Service & Guarantee details')}>Terms of Service</span>
            <span className="hover:text-inkara-gold cursor-pointer" onClick={() => showToast('Lifetime Mechanical Guarantee included on all pens.')}>Lifetime Warranty</span>
            <span className="text-inkara-gold font-serif">Prices in Indian Rupees (₹)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useShop } from '../context/ShopContext';

export default function Navbar() {
  const router = useRouter();
  const { cart, wishlist, setIsCartOpen, setIsWishlistOpen, setIsSearchOpen, setIsQuizOpen } = useShop();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const wishCount = wishlist.length;

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Collections', href: '/collections' },
    { label: 'Offers', href: '/offers' },
    { label: 'Journal', href: '/journal' },
    { label: 'Our Story', href: '/story' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-inkara-black/90 backdrop-blur-md border-b border-gold-accent transition-all duration-300">
      {/* Announcement */}
      <div className="bg-gradient-to-r from-inkara-black via-inkara-charcoal to-inkara-black border-b border-gold-accent text-xs py-2 px-4 text-center tracking-widest uppercase font-medium flex items-center justify-center gap-3">
        <span className="inline-block w-2 h-2 rounded-full bg-inkara-gold animate-pulse"></span>
        <span className="text-inkara-champagne">Festive Connoisseur Offer:</span>
        <span className="text-inkara-ivory">Buy Any 3 Pens, Receive the 4th Pen Complimentary</span>
        <Link href="/offers" className="underline underline-offset-4 text-inkara-gold hover:text-inkara-champagne transition-colors ml-2 font-semibold">
          Explore Offer &rarr;
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border border-inkara-gold/50 flex items-center justify-center bg-gradient-to-b from-inkara-charcoal to-inkara-black shadow-gold-subtle group-hover:border-inkara-gold transition-colors">
            <svg className="w-5 h-5 text-inkara-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <path d="m12 2 4 7-4 13-4-13 4-7z"/>
              <circle cx="12" cy="11" r="1.5" fill="currentColor"/>
              <line x1="12" y1="12.5" x2="12" y2="20"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl sm:text-3xl tracking-[0.2em] font-semibold text-inkara-ivory group-hover:text-inkara-champagne transition-colors">INKARA</span>
            <span className="text-[9px] tracking-[0.3em] uppercase text-inkara-gold -mt-1 font-medium">THE ART OF WRITING</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => {
            const isActive = router.pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium tracking-wider transition-colors relative hover:text-inkara-champagne ${isActive ? 'text-inkara-champagne' : 'text-inkara-ivory'}`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-3 right-3 h-[2px] bg-inkara-gold transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0'}`}></span>
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <button onClick={() => setIsSearchOpen(true)} aria-label="Search pens" className="p-2 text-inkara-grey hover:text-inkara-champagne transition-colors rounded-full hover:bg-inkara-charcoal relative">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          <button onClick={() => setIsWishlistOpen(true)} aria-label="View Wishlist" className="p-2 text-inkara-grey hover:text-inkara-champagne transition-colors rounded-full hover:bg-inkara-charcoal relative">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            {wishCount > 0 && (
              <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-inkara-gold text-inkara-black text-[10px] font-bold rounded-full flex items-center justify-center leading-none">
                {wishCount}
              </span>
            )}
          </button>

          <button onClick={() => setIsCartOpen(true)} aria-label="Open Shopping Bag" className="p-2 text-inkara-grey hover:text-inkara-champagne transition-colors rounded-full hover:bg-inkara-charcoal relative">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            {cartCount > 0 && (
              <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-inkara-champagne text-inkara-black text-[10px] font-bold rounded-full flex items-center justify-center leading-none">
                {cartCount}
              </span>
            )}
          </button>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle mobile menu" className="md:hidden p-2 text-inkara-grey hover:text-inkara-ivory focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-inkara-black/95 border-b border-gold-accent px-6 py-6 space-y-4">
          {navLinks.map((link, idx) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left py-2 text-base font-serif tracking-widest text-inkara-ivory hover:text-inkara-gold"
            >
              {idx + 1}. {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-gold-accent flex items-center justify-between">
            <button
              onClick={() => { setIsMobileMenuOpen(false); setIsQuizOpen(true); }}
              className="text-xs uppercase tracking-widest text-inkara-gold flex items-center gap-2"
            >
              <span>&#10022;</span> Take Pen Match Quiz
            </button>
            <span className="text-xs text-inkara-grey">Currency: ₹ INR</span>
          </div>
        </div>
      )}
    </header>
  );
}

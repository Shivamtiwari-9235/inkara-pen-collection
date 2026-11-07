import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PenAnimation from '../components/PenAnimation';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import { ARTICLES } from '../data/articles';
import { REVIEWS } from '../data/reviews';
import { useShop } from '../context/ShopContext';

export default function HomePage() {
  const { showToast, setIsQuizOpen, addToCart } = useShop();
  const [emailInput, setEmailInput] = useState('');

  const featuredPens = PRODUCTS.slice(0, 4);
  const bestsellerPens = PRODUCTS.filter(p => p.isBestseller);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes('@')) {
      showToast('Please enter a valid email address.');
      return;
    }
    setEmailInput('');
    showToast('Welcome to Letters Worth Receiving. Check your inbox for your 10% welcome privilege.');
  };

  const loadDemoOffer = () => {
    addToCart('noir-fountain');
    addToCart('slate-rollerball');
    addToCart('signature-ballpoint');
    addToCart('metro-ballpoint');
    showToast('Loaded 4 pens! Lowest priced pen is now complimentary in your bag.');
  };

  return (
    <div className="space-y-24">
      <Head>
        <title>INKARA | Precision, Held in Hand — Luxury Writing Instruments</title>
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-gold-accent pt-8 pb-16 bg-gradient-to-b from-inkara-black via-inkara-slate to-inkara-black">
        <div className="absolute w-[600px] h-[600px] bg-inkara-gold/5 rounded-full blur-[140px] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-inkara-gold/40 bg-inkara-charcoal/60 text-xs uppercase tracking-widest text-inkara-gold">
              <span className="w-1.5 h-1.5 rounded-full bg-inkara-gold animate-ping"></span>
              <span>The Flagship Atelier Series</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-inkara-ivory leading-[1.08]">
              Precision,<br />
              <span className="gold-shimmer-text">Held in Hand.</span>
            </h1>
            <div className="w-16 h-0.5 bg-inkara-gold mx-auto lg:mx-0"></div>
            <p className="text-base sm:text-lg text-inkara-grey font-serif italic max-w-lg leading-relaxed">
              "Engineered nib. Effortless ink flow. A considered instrument for every word."
            </p>

            {/* 4 Qualities */}
            <div className="grid grid-cols-2 gap-4 pt-4 text-left border-t border-gold-accent/50">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full border border-inkara-gold flex items-center justify-center text-inkara-gold shrink-0 bg-inkara-charcoal/80">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="m12 2 4 7-4 13-4-13 4-7z"/>
                    <circle cx="12" cy="11" r="1.5" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-inkara-ivory block font-medium">Stainless steel nib</span>
                  <span className="text-[10px] text-inkara-grey block">Hand-tuned flex</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full border border-inkara-gold flex items-center justify-center text-inkara-gold shrink-0 bg-inkara-charcoal/80">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="7" y="2" width="10" height="20" rx="2"></rect>
                    <line x1="7" y1="8" x2="17" y2="8"></line>
                    <line x1="7" y1="14" x2="17" y2="14"></line>
                  </svg>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-inkara-ivory block font-medium">Refillable cartridge</span>
                  <span className="text-[10px] text-inkara-grey block">Piston converter</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full border border-inkara-gold flex items-center justify-center text-inkara-gold shrink-0 bg-inkara-charcoal/80">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 3v18M6 8l6-5 6 5M6 8a4 4 0 0 0 4 4m8-4a4 4 0 0 1-4 4"/>
                  </svg>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-inkara-ivory block font-medium">Balanced brass body</span>
                  <span className="text-[10px] text-inkara-grey block">38g optimum mass</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full border border-inkara-gold flex items-center justify-center text-inkara-gold shrink-0 bg-inkara-charcoal/80">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-inkara-ivory block font-medium">Lifetime warranty</span>
                  <span className="text-[10px] text-inkara-grey block">Mechanical guarantee</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Link href="/shop" className="px-8 py-4 bg-gradient-to-r from-inkara-gold to-inkara-champagne text-inkara-black font-semibold text-xs uppercase tracking-widest rounded shadow-gold-glow hover:brightness-110 transition-all flex items-center justify-center gap-2">
                <span>Discover the Collection</span>
                <span>&rarr;</span>
              </Link>
              <Link href="/story" className="px-8 py-4 border border-gold-accent text-inkara-ivory hover:border-inkara-gold hover:text-inkara-gold text-xs uppercase tracking-widest rounded transition-colors flex items-center justify-center">
                Explore Our Story
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col items-center justify-center">
            <PenAnimation />
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 bg-inkara-slate border border-gold-accent rounded-xl text-center">
          <div className="space-y-1">
            <span className="font-serif text-xl sm:text-2xl text-inkara-champagne block font-semibold">100% Solid Brass</span>
            <span className="text-xs text-inkara-grey tracking-wider uppercase">Turned Aerospace Metal</span>
          </div>
          <div className="space-y-1">
            <span className="font-serif text-xl sm:text-2xl text-inkara-champagne block font-semibold">German Iridium Nibs</span>
            <span className="text-xs text-inkara-grey tracking-wider uppercase">Individual Hand-Tuning</span>
          </div>
          <div className="space-y-1">
            <span className="font-serif text-xl sm:text-2xl text-inkara-champagne block font-semibold">Lifetime Guarantee</span>
            <span className="text-xs text-inkara-grey tracking-wider uppercase">Complimentary Servicing</span>
          </div>
          <div className="space-y-1">
            <span className="font-serif text-xl sm:text-2xl text-inkara-champagne block font-semibold">Insured Express</span>
            <span className="text-xs text-inkara-grey tracking-wider uppercase">Pan-India Velvet Box Delivery</span>
          </div>
        </div>
      </section>

      {/* 3 Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-serif uppercase tracking-[0.3em] text-inkara-gold block mb-2">&#10022; Primary Disciplines</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-inkara-ivory font-semibold">Three Expressions of the Line</h2>
          <div className="w-12 h-0.5 bg-inkara-gold mx-auto my-3"></div>
          <p className="text-sm text-inkara-grey leading-relaxed">
            Whether you prefer the expressive capillary flow of a nib, the rapid fluidity of ceramic liquid ink, or the instant permanence of a twist ballpoint.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group relative bg-inkara-slate border border-gold-accent hover:border-inkara-gold rounded-xl overflow-hidden transition-all duration-300 shadow-lg flex flex-col justify-between">
            <div className="p-8">
              <span className="text-[10px] tracking-widest uppercase text-inkara-gold font-mono block mb-2">Category 01</span>
              <h3 className="font-serif text-2xl text-inkara-ivory group-hover:text-inkara-champagne transition-colors mb-2">Fountain Pens</h3>
              <p className="text-xs text-inkara-grey leading-relaxed mb-6">
                Hand-slitted stainless steel nibs with iridium tipping. Features screw-type piston converters and universal cartridge interchangeability.
              </p>
            </div>
            <div className="relative h-56 overflow-hidden bg-inkara-charcoal">
              <img src="/images/fountain-journal.jpg" alt="Fountain Pens" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-inkara-black via-transparent to-transparent"></div>
              <Link href="/shop?cat=fountain" className="absolute bottom-4 left-6 right-6 py-2.5 bg-inkara-black/90 backdrop-blur-sm border border-gold-accent hover:border-inkara-gold text-inkara-champagne text-xs uppercase tracking-widest font-semibold rounded text-center transition-all block">
                Explore Fountain Collection &rarr;
              </Link>
            </div>
          </div>

          <div className="group relative bg-inkara-slate border border-gold-accent hover:border-inkara-gold rounded-xl overflow-hidden transition-all duration-300 shadow-lg flex flex-col justify-between">
            <div className="p-8">
              <span className="text-[10px] tracking-widest uppercase text-inkara-gold font-mono block mb-2">Category 02</span>
              <h3 className="font-serif text-2xl text-inkara-ivory group-hover:text-inkara-champagne transition-colors mb-2">Rollerball Pens</h3>
              <p className="text-xs text-inkara-grey leading-relaxed mb-6">
                Liquid ceramic ball delivery that produces rich, saturated strokes instantly. Engineered for rapid executive decision-making.
              </p>
            </div>
            <div className="relative h-56 overflow-hidden bg-inkara-charcoal">
              <img src="/images/rollerball-drafting.jpg" alt="Rollerball Pens" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-inkara-black via-transparent to-transparent"></div>
              <Link href="/shop?cat=rollerball" className="absolute bottom-4 left-6 right-6 py-2.5 bg-inkara-black/90 backdrop-blur-sm border border-gold-accent hover:border-inkara-gold text-inkara-champagne text-xs uppercase tracking-widest font-semibold rounded text-center transition-all block">
                Explore Rollerball Collection &rarr;
              </Link>
            </div>
          </div>

          <div className="group relative bg-inkara-slate border border-gold-accent hover:border-inkara-gold rounded-xl overflow-hidden transition-all duration-300 shadow-lg flex flex-col justify-between">
            <div className="p-8">
              <span className="text-[10px] tracking-widest uppercase text-inkara-gold font-mono block mb-2">Category 03</span>
              <h3 className="font-serif text-2xl text-inkara-ivory group-hover:text-inkara-champagne transition-colors mb-2">Ballpoint Pens</h3>
              <p className="text-xs text-inkara-grey leading-relaxed mb-6">
                Continuous fluid-damped twist deployment with high-density oil ink. Ready to write instantly in any environment or posture.
              </p>
            </div>
            <div className="relative h-56 overflow-hidden bg-inkara-charcoal">
              <img src="/images/burgundy-ballpoint.jpg" alt="Ballpoint Pens" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-inkara-black via-transparent to-transparent"></div>
              <Link href="/shop?cat=ballpoint" className="absolute bottom-4 left-6 right-6 py-2.5 bg-inkara-black/90 backdrop-blur-sm border border-gold-accent hover:border-inkara-gold text-inkara-champagne text-xs uppercase tracking-widest font-semibold rounded text-center transition-all block">
                Explore Ballpoint Collection &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-serif uppercase tracking-[0.3em] text-inkara-gold block mb-1">&#10022; Curated Selection</span>
            <h2 className="font-serif text-3xl text-inkara-ivory font-semibold">Featured Writing Instruments</h2>
          </div>
          <Link href="/shop" className="text-xs uppercase tracking-widest text-inkara-gold hover:text-inkara-champagne font-semibold flex items-center gap-2 group">
            <span>View Complete Catalog (12 Models)</span>
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPens.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Special Offers Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-r from-inkara-charcoal via-inkara-card to-inkara-charcoal border-2 border-inkara-gold/40 rounded-2xl p-8 sm:p-12 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-inkara-gold text-inkara-black text-xs font-bold uppercase tracking-widest rounded-full">
                Featured Connoisseur Campaign
              </div>
              <h3 className="font-serif text-3xl sm:text-5xl text-inkara-ivory font-semibold leading-tight">
                BUY 3 PENS, GET 1 FREE
              </h3>
              <p className="text-sm text-inkara-grey max-w-xl leading-relaxed">
                Curate an ensemble for yourself or thoughtful gifting for associates. When you add any four eligible pens to your shopping bag, the lowest-priced instrument is instantly deducted at 100% discount upon checkout.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button onClick={loadDemoOffer} className="px-6 py-3 bg-gradient-to-r from-inkara-gold to-inkara-champagne text-inkara-black font-semibold text-xs uppercase tracking-widest rounded shadow-gold-glow hover:brightness-110 transition-all">
                  Test Offer: Load 4 Pens into Bag
                </button>
                <Link href="/offers" className="px-6 py-3 border border-gold-accent hover:border-inkara-gold text-inkara-ivory text-xs uppercase tracking-widest rounded transition-colors">
                  View Terms & Gift Sets
                </Link>
              </div>
            </div>
            <div className="lg:col-span-4 flex justify-center">
              <img src="/images/imperial-gift-box.jpg" alt="Gift Box Offer" className="w-64 h-64 object-cover rounded-xl border border-gold-accent shadow-gold-subtle" />
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-inkara-charcoal/40 border border-gold-accent rounded-2xl p-8 sm:p-14">
          <div className="lg:col-span-6 relative">
            <img src="/images/craftsmanship-workshop.jpg" alt="Artisan Craftsmanship" className="w-full h-96 object-cover rounded-xl border border-gold-accent shadow-2xl" />
          </div>
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-serif uppercase tracking-[0.3em] text-inkara-gold block">&#10022; Heritage of the Atelier</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-inkara-ivory font-semibold leading-tight">
              Crafted for the Words That Will Outlive Us.
            </h2>
            <p className="text-sm text-inkara-grey leading-relaxed">
              In an era dominated by transient digital pings, writing with a physical instrument is a radical act of focus. We founded INKARA with a single conviction: that the tool you choose to record your decisions, vows, ideas, and manuscripts should be as deliberate as the thoughts themselves.
            </p>
            <div className="pt-2 flex items-center gap-6">
              <Link href="/story" className="px-6 py-3 bg-inkara-slate border border-inkara-gold text-inkara-gold hover:bg-inkara-gold hover:text-inkara-black transition-colors rounded text-xs uppercase tracking-widest font-semibold">
                Read Our Full Story &rarr;
              </Link>
              <button onClick={() => setIsQuizOpen(true)} className="text-xs text-inkara-champagne hover:underline flex items-center gap-1.5 font-medium">
                <span>&#10022;</span> Take the Pen Style Quiz
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-serif uppercase tracking-[0.3em] text-inkara-gold block mb-1">&#10022; Most Coveted</span>
          <h2 className="font-serif text-3xl text-inkara-ivory font-semibold">Client Favorites & Bestsellers</h2>
          <div className="w-12 h-0.5 bg-inkara-gold mx-auto my-3"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestsellerPens.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-serif uppercase tracking-[0.3em] text-inkara-gold block mb-1">&#10022; Connoisseur Testimonials</span>
          <h2 className="font-serif text-3xl text-inkara-ivory font-semibold">Endorsements in Ink</h2>
          <div className="w-12 h-0.5 bg-inkara-gold mx-auto my-3"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map(r => (
            <div key={r.author} className="p-6 bg-inkara-slate border border-gold-accent rounded-xl flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="text-inkara-gold text-xs font-mono">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <h4 className="font-serif text-base text-inkara-ivory font-medium">"{r.title}"</h4>
                <p className="text-xs text-inkara-grey leading-relaxed italic">"{r.comment}"</p>
              </div>
              <div className="pt-4 border-t border-gold-accent/50">
                <span className="text-xs font-serif text-inkara-champagne font-semibold block">{r.author}</span>
                <span className="text-[10px] text-inkara-grey block">{r.role}</span>
                <span className="text-[9px] text-inkara-gold uppercase tracking-wider mt-1 block">Verified: {r.product}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Journal Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-serif uppercase tracking-[0.3em] text-inkara-gold block mb-1">&#10022; The INKARA Journal</span>
            <h2 className="font-serif text-3xl text-inkara-ivory font-semibold">Thoughtful Guides for the Discerning Hand</h2>
          </div>
          <Link href="/journal" className="text-xs uppercase tracking-widest text-inkara-gold hover:text-inkara-champagne font-semibold">
            Read All Articles &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map(art => (
            <Link key={art.id} href={`/journal/${art.id}`} className="group cursor-pointer bg-inkara-slate border border-gold-accent hover:border-inkara-gold rounded-xl overflow-hidden transition-all flex flex-col block">
              <div className="h-48 overflow-hidden bg-inkara-charcoal relative">
                <img src={art.image} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 bg-inkara-black/80 backdrop-blur-sm px-2.5 py-1 text-[10px] uppercase tracking-wider text-inkara-gold border border-gold-accent rounded">
                  {art.category}
                </span>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex justify-between text-[11px] text-inkara-grey mb-1">
                    <span>{art.date}</span>
                    <span className="font-mono">{art.readTime}</span>
                  </div>
                  <h3 className="font-serif text-lg text-inkara-ivory group-hover:text-inkara-champagne transition-colors font-medium leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-xs text-inkara-grey mt-2 line-clamp-2 leading-relaxed">{art.excerpt}</p>
                </div>
                <span className="text-xs text-inkara-gold font-semibold uppercase tracking-wider pt-2 block">
                  Read Article &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 bg-gradient-to-b from-inkara-charcoal to-inkara-black border border-inkara-gold/40 rounded-2xl text-center space-y-6 shadow-gold-subtle">
          <span className="text-xs font-serif uppercase tracking-[0.3em] text-inkara-gold block">&#10022; Dispatch from the Atelier</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-inkara-ivory font-semibold">Letters Worth Receiving.</h2>
          <p className="text-sm text-inkara-grey max-w-md mx-auto leading-relaxed">
            Discover new collections, thoughtful writing guides and exclusive offers. We write infrequently, and only with intention.
          </p>
          <form onSubmit={handleNewsletter} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="Enter your preferred email address..."
              className="bg-inkara-slate border border-gold-accent text-xs px-4 py-3.5 rounded-lg text-inkara-ivory placeholder:text-inkara-grey/50 focus:outline-none focus:border-inkara-gold flex-grow"
            />
            <button type="submit" className="px-6 py-3.5 bg-gradient-to-r from-inkara-gold to-inkara-champagne text-inkara-black font-semibold text-xs uppercase tracking-widest rounded-lg hover:brightness-110 transition-all shrink-0">
              Subscribe
            </button>
          </form>
          <p className="text-[11px] text-inkara-grey">Complimentary 10% privilege code provided upon confirmation.</p>
        </div>
      </section>
    </div>
  );
}

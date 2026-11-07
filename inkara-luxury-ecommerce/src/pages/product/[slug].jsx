import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ProductCard from '../../components/ProductCard';
import { PRODUCTS } from '../../data/products';
import { useShop } from '../../context/ShopContext';

export default function ProductDetailPage() {
  const router = useRouter();
  const { slug } = router.query;
  const { addToCart, wishlist, toggleWishlist } = useShop();

  const p = PRODUCTS.find(item => item.id === slug) || PRODUCTS[0];
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedNibIndex, setSelectedNibIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(null);

  const isWish = wishlist.includes(p.id);
  const discountPct = Math.round((1 - p.price / p.originalPrice) * 100);
  const currentImg = activeImage || p.image;
  const related = PRODUCTS.filter(item => item.id !== p.id && item.category === p.category).slice(0, 3);
  const formatINR = (val) => '₹' + Number(val).toLocaleString('en-IN');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      <Head>
        <title>{p.name} | INKARA Luxury Writing Instruments</title>
      </Head>

      <nav className="flex items-center gap-2 text-xs text-inkara-grey">
        <Link href="/" className="hover:text-inkara-gold">Home</Link>
        <span>/</span>
        <Link href={`/shop?cat=${p.category}`} className="hover:text-inkara-gold">{p.categoryName}</Link>
        <span>/</span>
        <span className="text-inkara-champagne font-medium">{p.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 space-y-4">
          <div className="relative bg-inkara-slate border border-gold-accent rounded-2xl overflow-hidden p-6 sm:p-10 flex items-center justify-center shadow-2xl">
            <img src={currentImg} alt={p.name} className="max-h-[480px] w-full object-contain rounded-lg" />
            <span className="absolute top-4 left-4 px-3 py-1 bg-inkara-black/80 backdrop-blur-sm border border-gold-accent text-inkara-gold text-[10px] uppercase tracking-wider rounded">
              Official Atelier Photo
            </span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {p.gallery.map((img, i) => (
              <div
                key={img}
                onClick={() => setActiveImage(img)}
                className="cursor-pointer h-24 rounded-lg overflow-hidden border border-gold-accent hover:border-inkara-gold transition-colors bg-inkara-charcoal"
              >
                <img src={img} alt={`Angle ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6 bg-inkara-slate border border-gold-accent rounded-2xl p-6 sm:p-8 shadow-xl">
          <div>
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="text-inkara-gold uppercase tracking-widest font-mono font-medium">{p.categoryName}</span>
              <span className="text-inkara-champagne font-mono">&#9733; {p.rating} / 5.0 ({p.reviewsCount} Reviews)</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl text-inkara-ivory font-semibold mb-2">{p.name}</h1>
            <p className="text-xs text-inkara-champagne italic font-serif">{p.tagline}</p>
          </div>

          <div className="flex items-baseline gap-3 pb-4 border-b border-gold-accent">
            <span className="font-mono text-3xl text-inkara-champagne font-bold">{formatINR(p.price)}</span>
            <span className="font-mono text-base text-inkara-grey line-through">{formatINR(p.originalPrice)}</span>
            <span className="text-xs text-inkara-gold border border-inkara-gold/40 px-2 py-0.5 rounded font-medium">Save {discountPct}%</span>
          </div>

          <p className="text-xs text-inkara-grey leading-relaxed">{p.shortDescription}</p>

          <div>
            <label className="block text-xs uppercase tracking-wider text-inkara-grey mb-2">
              Available Finishes: <span className="text-inkara-ivory font-semibold">{p.colors[selectedColorIndex].name}</span>
            </label>
            <div className="flex gap-3">
              {p.colors.map((c, i) => (
                <button
                  key={c.name}
                  onClick={() => setSelectedColorIndex(i)}
                  className={`w-9 h-9 rounded-full border border-gold-accent flex items-center justify-center transition-all ${i === selectedColorIndex ? 'ring-2 ring-inkara-gold' : ''}`}
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                >
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c.accent }}></span>
                </button>
              ))}
            </div>
          </div>

          {p.nibs && (
            <div>
              <label className="block text-xs uppercase tracking-wider text-inkara-grey mb-2">Select Nib / Tip Specification:</label>
              <div className="flex flex-wrap gap-2">
                {p.nibs.map((nib, i) => (
                  <button
                    key={nib}
                    onClick={() => setSelectedNibIndex(i)}
                    className={`text-xs px-3.5 py-2 rounded border transition-colors ${i === selectedNibIndex ? 'border-inkara-gold text-inkara-champagne bg-inkara-gold/15' : 'border-gold-accent text-inkara-grey'}`}
                  >
                    {nib}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-3 pt-4 border-t border-gold-accent">
            <div className="flex gap-4 items-center">
              <div className="flex items-center border border-gold-accent rounded-lg bg-inkara-black px-2 py-1">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-2.5 py-1 text-sm text-inkara-grey hover:text-inkara-gold">-</button>
                <span className="px-3 text-sm font-mono text-inkara-ivory font-semibold">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-2.5 py-1 text-sm text-inkara-grey hover:text-inkara-gold">+</button>
              </div>

              <button
                onClick={() => addToCart(p.id, p.colors[selectedColorIndex].name, p.nibs ? p.nibs[selectedNibIndex] : 'Standard', quantity)}
                className="flex-grow py-3.5 bg-gradient-to-r from-inkara-gold to-inkara-champagne text-inkara-black font-semibold text-xs uppercase tracking-widest rounded-lg hover:brightness-110 transition-all shadow-gold-glow flex items-center justify-center gap-2"
              >
                Add to Shopping Bag
              </button>

              <button onClick={() => toggleWishlist(p.id)} className="p-3.5 border border-gold-accent hover:border-inkara-gold text-inkara-grey hover:text-inkara-gold rounded-lg transition-colors">
                <svg className={`w-5 h-5 ${isWish ? 'text-red-500 fill-current' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              </button>
            </div>

            <Link
              href="/checkout"
              onClick={() => addToCart(p.id, p.colors[selectedColorIndex].name, p.nibs ? p.nibs[selectedNibIndex] : 'Standard', quantity)}
              className="w-full py-3 bg-inkara-charcoal border border-inkara-gold text-inkara-champagne text-xs uppercase tracking-widest font-semibold rounded-lg hover:bg-inkara-gold hover:text-inkara-black transition-colors block text-center"
            >
              Buy Now & Proceed to Checkout
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2 text-[11px] text-inkara-grey">
            <span className="flex items-center gap-1.5"><span className="text-inkara-gold">&#10003;</span> Free Insured Delivery</span>
            <span className="flex items-center gap-1.5"><span className="text-inkara-gold">&#10003;</span> Velvet Presentation Box</span>
            <span className="flex items-center gap-1.5"><span className="text-inkara-gold">&#10003;</span> Lifetime Mechanical Guarantee</span>
            <span className="flex items-center gap-1.5"><span className="text-inkara-gold">&#10003;</span> Eligible for "Buy 3, Get 1 Free"</span>
          </div>
        </div>
      </div>

      <div className="bg-inkara-slate border border-gold-accent rounded-2xl p-6 sm:p-10 space-y-8">
        <div>
          <h3 className="font-serif text-2xl text-inkara-champagne mb-4">Detailed Description & Craftsmanship</h3>
          <p className="text-sm text-inkara-grey leading-relaxed max-w-4xl">{p.fullDescription}</p>
        </div>

        <div className="pt-6 border-t border-gold-accent">
          <h3 className="font-serif text-2xl text-inkara-champagne mb-4">Technical Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(p.specs).map(([k, v]) => (
              <div key={k} className="p-3 bg-inkara-black/50 border border-gold-accent/50 rounded flex justify-between text-xs">
                <span className="text-inkara-gold font-medium">{k}</span>
                <span className="text-inkara-ivory text-right font-mono">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="space-y-6">
          <h3 className="font-serif text-2xl text-inkara-ivory font-semibold">Related Instruments from the Atelier</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map(item => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

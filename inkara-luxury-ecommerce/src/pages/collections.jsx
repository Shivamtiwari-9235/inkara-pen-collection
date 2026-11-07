import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/products';

export default function CollectionsPage() {
  const fountains = PRODUCTS.filter(p => p.category === 'fountain');
  const rollerballs = PRODUCTS.filter(p => p.category === 'rollerball');
  const ballpoints = PRODUCTS.filter(p => p.category === 'ballpoint');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-20">
      <Head>
        <title>Pen Collections | INKARA Luxury Writing Instruments</title>
      </Head>

      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-serif uppercase tracking-[0.3em] text-inkara-gold block">&#10022; Atelier Disciplines</span>
        <h1 className="font-serif text-4xl sm:text-6xl text-inkara-ivory font-semibold">The Three Collections</h1>
        <p className="text-sm text-inkara-grey leading-relaxed">
          Each category represents a fundamentally distinct interaction between human posture, metal engineering, and ink dynamics. Understand the differences to select your definitive instrument.
        </p>
      </div>

      {/* Comparison table */}
      <div className="bg-inkara-slate border border-gold-accent rounded-xl p-6 overflow-x-auto shadow-lg">
        <h3 className="font-serif text-xl text-inkara-champagne mb-4">Quick Comparison Matrix</h3>
        <table className="w-full text-xs text-left">
          <thead className="border-b border-gold-accent text-inkara-gold font-mono uppercase tracking-wider">
            <tr>
              <th className="py-3 px-4">Feature</th>
              <th className="py-3 px-4">Fountain Pens</th>
              <th className="py-3 px-4">Rollerball Pens</th>
              <th className="py-3 px-4">Ballpoint Pens</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gold-accent/40 text-inkara-grey">
            <tr>
              <td className="py-3 px-4 font-semibold text-inkara-ivory">Ink Mechanism</td>
              <td className="py-3 px-4">Capillary action via slitted nib</td>
              <td className="py-3 px-4">Rotating micro-ceramic ball</td>
              <td className="py-3 px-4">Internal fluid-damped brass twist</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-semibold text-inkara-ivory">Ink Formulation</td>
              <td className="py-3 px-4">Aqueous dye & archival water-based</td>
              <td className="py-3 px-4">Ultra-fluid water/gel hybrid</td>
              <td className="py-3 px-4">High-density oil paste (zero smudge)</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-semibold text-inkara-ivory">Writing Pressure</td>
              <td className="py-3 px-4 text-inkara-gold font-semibold">Zero Downward Pressure</td>
              <td className="py-3 px-4">Light, effortless pressure</td>
              <td className="py-3 px-4">Moderate, firm tactile grip</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-semibold text-inkara-ivory">Best Suited For</td>
              <td className="py-3 px-4">Journaling, signatures, ritual writing</td>
              <td className="py-3 px-4">Executive meetings, drafting, notes</td>
              <td className="py-3 px-4">Everyday pocket carry, legal forms</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Fountain */}
      <section className="space-y-8 pt-6 border-t border-gold-accent">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono text-inkara-gold uppercase tracking-widest">Collection 01</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-inkara-ivory font-semibold">The Fountain Collection</h2>
            <p className="text-xs text-inkara-champagne font-serif italic">"The purest physical manifestation of handwriting."</p>
            <p className="text-sm text-inkara-grey leading-relaxed">
              Featuring hand-slitted German stainless steel nibs tipped with laser-welded iridium. Each fountain pen includes a screw-piston converter for bottled ink drawing, alongside standard international cartridge support.
            </p>
            <Link href="/shop?cat=fountain" className="inline-block px-6 py-2.5 bg-gradient-to-r from-inkara-gold to-inkara-champagne text-inkara-black text-xs font-semibold uppercase tracking-widest rounded shadow">
              Shop All Fountain Pens &rarr;
            </Link>
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {fountains.slice(0, 2).map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rollerball */}
      <section className="space-y-8 pt-10 border-t border-gold-accent">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {rollerballs.slice(0, 2).map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-4">
            <span className="text-xs font-mono text-inkara-gold uppercase tracking-widest">Collection 02</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-inkara-ivory font-semibold">The Rollerball Collection</h2>
            <p className="text-xs text-inkara-champagne font-serif italic">"Velvety liquid ink delivery with instant agility."</p>
            <p className="text-sm text-inkara-grey leading-relaxed">
              Engineered with magnetic or click-lock air seals to keep ink from vaporizing. The ceramic ball tip delivers dark, saturated lines across any corporate stationery without dragging.
            </p>
            <Link href="/shop?cat=rollerball" className="inline-block px-6 py-2.5 bg-gradient-to-r from-inkara-gold to-inkara-champagne text-inkara-black text-xs font-semibold uppercase tracking-widest rounded shadow">
              Shop All Rollerball Pens &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Ballpoint */}
      <section className="space-y-8 pt-10 border-t border-gold-accent">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono text-inkara-gold uppercase tracking-widest">Collection 03</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-inkara-ivory font-semibold">The Ballpoint Collection</h2>
            <p className="text-xs text-inkara-champagne font-serif italic">"The unyielding everyday heirloom."</p>
            <p className="text-sm text-inkara-grey leading-relaxed">
              Fluid-damped twist deployment and high-durability internal brass mechanisms. Uses archival hybrid ink that resists water, sun-bleaching, and temperature fluctuations.
            </p>
            <Link href="/shop?cat=ballpoint" className="inline-block px-6 py-2.5 bg-gradient-to-r from-inkara-gold to-inkara-champagne text-inkara-black text-xs font-semibold uppercase tracking-widest rounded shadow">
              Shop All Ballpoint Pens &rarr;
            </Link>
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ballpoints.slice(0, 2).map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

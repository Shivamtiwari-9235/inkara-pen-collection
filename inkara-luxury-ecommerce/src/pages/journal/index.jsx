import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ARTICLES } from '../../data/articles';

export default function JournalPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <Head>
        <title>The INKARA Journal | Writing Guides & Pen Care</title>
      </Head>

      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-serif uppercase tracking-[0.3em] text-inkara-gold block">&#10022; Editorial & Education</span>
        <h1 className="font-serif text-4xl sm:text-6xl text-inkara-ivory font-semibold">The INKARA Journal</h1>
        <p className="text-sm text-inkara-grey leading-relaxed">
          A repository of mechanical insights, maintenance guides, handwriting philosophy, and pen connoisseurship.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ARTICLES.map(art => (
          <Link key={art.id} href={`/journal/${art.id}`} className="group cursor-pointer bg-inkara-slate border border-gold-accent hover:border-inkara-gold rounded-xl overflow-hidden transition-all flex flex-col justify-between shadow-lg block">
            <div className="h-60 overflow-hidden bg-inkara-charcoal relative">
              <img src={art.image} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <span className="absolute top-4 left-4 bg-inkara-black/85 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-wider text-inkara-gold border border-gold-accent rounded">
                {art.category}
              </span>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
              <div>
                <div className="flex justify-between text-xs text-inkara-grey mb-1">
                  <span>{art.date}</span>
                  <span className="font-mono">{art.readTime}</span>
                </div>
                <h3 className="font-serif text-xl text-inkara-ivory group-hover:text-inkara-champagne transition-colors font-medium leading-snug">
                  {art.title}
                </h3>
                <p className="text-xs text-inkara-grey mt-2 leading-relaxed">{art.excerpt}</p>
              </div>
              <div className="pt-4 border-t border-gold-accent/50 flex items-center justify-between text-xs">
                <span className="text-inkara-grey text-[11px]">{art.author}</span>
                <span className="text-inkara-gold font-semibold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  Read Article &rarr;
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

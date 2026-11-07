import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ARTICLES } from '../../data/articles';
import { PRODUCTS } from '../../data/products';
import { useShop } from '../../context/ShopContext';

export default function ArticlePage() {
  const router = useRouter();
  const { slug } = router.query;
  const { addToCart } = useShop();

  const art = ARTICLES.find(a => a.id === slug) || ARTICLES[0];
  const formatINR = (val) => '₹' + Number(val).toLocaleString('en-IN');

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <Head>
        <title>{art.title} | The INKARA Journal</title>
      </Head>

      <Link href="/journal" className="text-xs uppercase tracking-widest text-inkara-gold hover:text-inkara-champagne flex items-center gap-2">
        <span>&larr;</span> Back to All Journal Articles
      </Link>

      <div className="space-y-4">
        <div className="flex items-center gap-3 text-xs text-inkara-gold uppercase tracking-widest">
          <span>{art.category}</span>
          <span>&bull;</span>
          <span>{art.readTime}</span>
          <span>&bull;</span>
          <span>{art.date}</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl text-inkara-ivory font-semibold leading-tight">
          {art.title}
        </h1>
        <p className="text-sm text-inkara-grey italic">Written by {art.author}</p>
      </div>

      <div className="h-96 rounded-2xl overflow-hidden border border-gold-accent shadow-2xl">
        <img src={art.image} alt={art.title} className="w-full h-full object-cover" />
      </div>

      <article
        className="prose prose-invert max-w-none text-inkara-ivory/90 leading-relaxed font-sans text-sm sm:text-base border-b border-gold-accent pb-12"
        dangerouslySetInnerHTML={{ __html: art.content }}
      />

      <div className="p-8 bg-inkara-slate border border-gold-accent rounded-xl space-y-4">
        <span className="text-xs font-serif uppercase tracking-widest text-inkara-gold block">&#10022; Recommended Instrument for This Guide</span>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src={PRODUCTS[0].image} alt={PRODUCTS[0].name} className="w-20 h-20 object-cover rounded-lg border border-gold-accent" />
            <div>
              <h4 className="font-serif text-lg text-inkara-ivory">{PRODUCTS[0].name}</h4>
              <p className="text-xs text-inkara-grey">{PRODUCTS[0].shortDescription}</p>
              <span className="font-mono text-sm text-inkara-champagne font-semibold mt-1 block">{formatINR(PRODUCTS[0].price)}</span>
            </div>
          </div>
          <button onClick={() => addToCart(PRODUCTS[0].id)} className="px-6 py-3 bg-gradient-to-r from-inkara-gold to-inkara-champagne text-inkara-black font-semibold text-xs uppercase tracking-widest rounded shadow shrink-0">
            Add to Bag &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}

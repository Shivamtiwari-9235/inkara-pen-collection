import React from 'react';
import Head from 'next/head';

export default function StoryPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      <Head>
        <title>Made for Words That Matter | Our Heritage — INKARA</title>
      </Head>

      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-serif uppercase tracking-[0.3em] text-inkara-gold block">&#10022; The INKARA Manifesto</span>
        <h1 className="font-serif text-4xl sm:text-6xl text-inkara-ivory font-semibold">Made for Words That Matter.</h1>
        <div className="w-16 h-0.5 bg-inkara-gold mx-auto"></div>
        <p className="text-base text-inkara-grey font-serif italic leading-relaxed">
          "A considered instrument for the thoughts that define who we are."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4 text-sm text-inkara-grey leading-relaxed">
          <h3 className="font-serif text-2xl text-inkara-champagne font-semibold">1. The Reclamation of Handwriting</h3>
          <p>
            We live in a society that measures human communication in microseconds, tap notifications, and autocorrected abbreviations. Yet when a founder signs their first term sheet, when a writer conceives the turning point of a novel, or when two lovers exchange a vow—no one opens a spreadsheet.
          </p>
          <p>
            The weight of physical ink on paper carries accountability. INKARA was created to honor that sacred threshold between transient electric thoughts and permanent physical legacy.
          </p>
        </div>
        <div className="h-80 rounded-xl overflow-hidden border border-gold-accent shadow-xl">
          <img src="/images/fountain-journal.jpg" alt="Pen on Journal" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="h-80 rounded-xl overflow-hidden border border-gold-accent shadow-xl order-2 md:order-1">
          <img src="/images/craftsmanship-workshop.jpg" alt="Nib Craftsman" className="w-full h-full object-cover" />
        </div>
        <div className="space-y-4 text-sm text-inkara-grey leading-relaxed order-1 md:order-2">
          <h3 className="font-serif text-2xl text-inkara-champagne font-semibold">2. Forty-Eight Precise Steps</h3>
          <p>
            Every INKARA pen begins life as an unyielding bar of solid brass. Milled to within a tolerance of 0.02 millimeters—one-quarter the thickness of a human hair—the chassis undergoes manual hand-deburring, ultrasonic degreasing, and multi-stage vacuum PVD coating.
          </p>
          <p>
            Finally, each stainless steel nib is ground by hand on diamond laps and inspected under 40x magnification by our master restorers before receiving its unique serial engraving.
          </p>
        </div>
      </div>

      <div className="bg-inkara-slate border border-gold-accent rounded-xl p-8 sm:p-12 space-y-8">
        <h3 className="font-serif text-3xl text-inkara-ivory text-center font-semibold">Our Unyielding Brand Pillars</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="space-y-2">
            <span className="text-inkara-gold font-serif text-3xl font-bold">I.</span>
            <h4 className="font-serif text-lg text-inkara-champagne font-medium">Refillable Longevity</h4>
            <p className="text-xs text-inkara-grey leading-relaxed">We refuse to engineer single-use plastic pens. Every component is serviceable and built to endure generations.</p>
          </div>
          <div className="space-y-2">
            <span className="text-inkara-gold font-serif text-3xl font-bold">II.</span>
            <h4 className="font-serif text-lg text-inkara-champagne font-medium">Tactile Authority</h4>
            <p className="text-xs text-inkara-grey leading-relaxed">A pen must have mass. Brass cores provide the grounding gravity that anchors your hand to the page.</p>
          </div>
          <div className="space-y-2">
            <span className="text-inkara-gold font-serif text-3xl font-bold">III.</span>
            <h4 className="font-serif text-lg text-inkara-champagne font-medium">Lifetime Custodianship</h4>
            <p className="text-xs text-inkara-grey leading-relaxed">Should your pen ever require realignment, tuning, or servicing, our New Delhi & Mumbai ateliers restore it without charge.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

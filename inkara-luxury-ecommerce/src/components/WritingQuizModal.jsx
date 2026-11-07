import React, { useState } from 'react';
import Link from 'next/link';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';

export default function WritingQuizModal() {
  const { isQuizOpen, setIsQuizOpen, addToCart } = useShop();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});

  if (!isQuizOpen) return null;

  const questions = [
    {
      id: 'purpose',
      question: 'What will be the primary ritual for your writing instrument?',
      subtitle: 'Choose the context where your pen will spend the most time.',
      options: [
        { label: 'Daily Journaling & Creative Reflection', tag: 'fountain' },
        { label: 'Executive Signing, Contracts & Boardrooms', tag: 'rollerball' },
        { label: 'Fast Everyday Note-Taking & Carry', tag: 'ballpoint' },
        { label: 'Calligraphy & Formal Manuscript Inking', tag: 'fountain' }
      ]
    },
    {
      id: 'sensation',
      question: 'What tactile sensation do you seek on paper?',
      subtitle: 'The interaction between tip and paper defines your handwriting.',
      options: [
        { label: 'Effortless zero-pressure capillary glide with expressive line variation', tag: 'fountain' },
        { label: 'Smooth wet liquid ink with sharp instantaneous response', tag: 'rollerball' },
        { label: 'Dependable, zero-smear continuous oil glide that never bleeds', tag: 'ballpoint' },
        { label: 'Rich tactile feedback with audible nib resonance', tag: 'fountain' }
      ]
    },
    {
      id: 'aesthetic',
      question: 'Which aesthetic harmony speaks to your personal style?',
      subtitle: 'A luxury instrument reflects your individual character.',
      options: [
        { label: 'Understated Matte Black with Brushed Antique Gold', color: 'black' },
        { label: 'Luminous Champagne Gold with Architectural Guilloche', color: 'gold' },
        { label: 'Deep Burgundy Piano Lacquer with Rose Gold Trim', color: 'burgundy' },
        { label: 'Raw Brushed Solid Brass that patinates with age', color: 'brass' }
      ]
    },
    {
      id: 'budget',
      question: 'What is your preferred investment range?',
      subtitle: 'All INKARA instruments include our lifetime mechanical guarantee.',
      options: [
        { label: 'Under ₹3,000 (Essential Luxury)', budget: 'low' },
        { label: '₹3,000 – ₹6,000 (Flagship Signature Series)', budget: 'mid' },
        { label: '₹6,000+ (Collector Sets & Precious Electroplating)', budget: 'high' }
      ]
    }
  ];

  const handleSelectOption = (qId, val) => {
    const updated = { ...answers, [qId]: val };
    setAnswers(updated);
    if (step < questions.length) {
      setStep(step + 1);
    } else {
      setStep(5); // result
    }
  };

  const getMatchedProduct = () => {
    if (answers.purpose === 'ballpoint' || answers.sensation === 'ballpoint') {
      return PRODUCTS.find(p => p.id === 'signature-ballpoint') || PRODUCTS[8];
    } else if (answers.purpose === 'rollerball' || answers.sensation === 'rollerball') {
      return PRODUCTS.find(p => p.id === 'slate-rollerball') || PRODUCTS[4];
    } else if (answers.budget === 'high') {
      return PRODUCTS.find(p => p.id === 'imperial-fountain-set') || PRODUCTS[3];
    } else if (answers.aesthetic === 'gold') {
      return PRODUCTS.find(p => p.id === 'aurum-fountain') || PRODUCTS[1];
    } else if (answers.aesthetic === 'brass') {
      return PRODUCTS.find(p => p.id === 'urban-brass-ballpoint') || PRODUCTS[11];
    }
    return PRODUCTS[0];
  };

  const formatINR = (val) => '₹' + Number(val).toLocaleString('en-IN');
  const matched = getMatchedProduct();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-inkara-slate border border-gold-accent rounded-xl p-8 sm:p-10 shadow-2xl max-h-[90vh] overflow-y-auto">
        <button onClick={() => setIsQuizOpen(false)} className="absolute top-4 right-4 p-2 text-inkara-grey hover:text-inkara-ivory rounded-full">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        {step <= 4 ? (
          <div className="space-y-6">
            <div className="flex items-center justify-between text-xs text-inkara-gold">
              <span className="uppercase tracking-widest">Question {step} of {questions.length}</span>
              <div className="flex gap-1.5">
                {questions.map((_, i) => (
                  <div key={i} className={`w-8 h-1 rounded-full ${i < step ? 'bg-inkara-gold' : 'bg-inkara-charcoal'}`}></div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-inkara-ivory mb-1">{questions[step - 1].question}</h3>
              <p className="text-xs text-inkara-grey">{questions[step - 1].subtitle}</p>
            </div>
            <div className="grid grid-cols-1 gap-3 pt-2">
              {questions[step - 1].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSelectOption(questions[step - 1].id, opt.tag || opt.color || opt.budget)}
                  className="p-4 text-left bg-inkara-charcoal/60 border border-gold-accent hover:border-inkara-gold hover:bg-inkara-gold/10 transition-all rounded-lg flex items-center justify-between group"
                >
                  <span className="text-sm font-medium text-inkara-ivory group-hover:text-inkara-champagne">{opt.label}</span>
                  <span className="text-inkara-gold opacity-0 group-hover:opacity-100 transition-opacity font-serif">&rarr;</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center space-y-6">
            <div className="inline-block px-3 py-1 border border-inkara-gold rounded-full text-xs uppercase tracking-widest text-inkara-gold">
              &#10022; Your Bespoke Writing Match
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-inkara-champagne font-semibold">{matched.name}</h3>
            <p className="text-sm text-inkara-grey max-w-md mx-auto leading-relaxed">
              Based on your preference for <strong>{matched.categoryName}</strong> and tactile balance, this handcrafted instrument will become your quintessential companion.
            </p>
            <div className="max-w-xs mx-auto p-4 bg-inkara-charcoal/60 border border-gold-accent rounded-xl shadow-gold-subtle">
              <img src={matched.image} alt={matched.name} className="w-full h-44 object-cover rounded-lg mb-3" />
              <div className="flex justify-between items-center text-sm font-serif">
                <span className="text-inkara-ivory">{matched.tagline}</span>
                <span className="text-inkara-champagne font-mono font-semibold">{formatINR(matched.price)}</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                onClick={() => { addToCart(matched.id); setIsQuizOpen(false); }}
                className="px-6 py-3 bg-gradient-to-r from-inkara-gold to-inkara-champagne text-inkara-black font-semibold text-xs uppercase tracking-widest rounded hover:brightness-110 shadow-gold-glow"
              >
                Add {matched.name} to Bag
              </button>
              <Link
                href={`/product/${matched.id}`}
                onClick={() => setIsQuizOpen(false)}
                className="px-6 py-3 border border-gold-accent text-inkara-ivory hover:border-inkara-gold text-xs uppercase tracking-widest rounded"
              >
                View Full Pen Profile
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

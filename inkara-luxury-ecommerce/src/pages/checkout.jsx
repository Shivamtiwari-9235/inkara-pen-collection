import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useShop } from '../context/ShopContext';

export default function CheckoutPage() {
  const { cart, calculateCartTotals, setCart, setPromoCode, showToast } = useShop();
  const [isOrdered, setIsOrdered] = useState(false);
  const [orderId, setOrderId] = useState('');

  const totals = calculateCartTotals();
  const formatINR = (val) => '₹' + Number(val).toLocaleString('en-IN');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      showToast('Your shopping bag is empty.');
      return;
    }
    const newOrderId = 'INK-2026-' + Math.floor(10000 + Math.random() * 90000);
    setOrderId(newOrderId);
    setIsOrdered(true);
    setCart([]);
    setPromoCode('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast(`Order #${newOrderId} authorized! Invoice dispatched.`);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Head>
        <title>Checkout | INKARA Luxury Writing Instruments</title>
      </Head>

      {!isOrdered ? (
        <div className="space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-serif uppercase tracking-widest text-inkara-gold block">&#10022; Demo Checkout Prototype</span>
            <h1 className="font-serif text-3xl sm:text-4xl text-inkara-ivory font-semibold">Finalize Your Acquisition</h1>
            <p className="text-xs text-inkara-grey">This is an interactive prototype checkout. No financial charges are made.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <form onSubmit={handleSubmit} className="lg:col-span-7 bg-inkara-slate border border-gold-accent rounded-xl p-6 sm:p-8 space-y-6">
              <h3 className="font-serif text-xl text-inkara-champagne border-b border-gold-accent pb-3">1. Delivery Destination</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="space-y-1">
                  <label className="text-inkara-grey block">Full Name *</label>
                  <input type="text" required defaultValue="Siddharth Malhotra" className="w-full bg-inkara-black border border-gold-accent rounded px-3 py-2 text-inkara-ivory focus:outline-none focus:border-inkara-gold" />
                </div>
                <div className="space-y-1">
                  <label className="text-inkara-grey block">Email Address *</label>
                  <input type="email" required defaultValue="siddharth.m@example.com" className="w-full bg-inkara-black border border-gold-accent rounded px-3 py-2 text-inkara-ivory focus:outline-none focus:border-inkara-gold" />
                </div>
                <div className="space-y-1">
                  <label className="text-inkara-grey block">Mobile Contact Number *</label>
                  <input type="tel" required defaultValue="+91 98765 43210" className="w-full bg-inkara-black border border-gold-accent rounded px-3 py-2 text-inkara-ivory focus:outline-none focus:border-inkara-gold" />
                </div>
                <div className="space-y-1">
                  <label className="text-inkara-grey block">PIN Code *</label>
                  <input type="text" required defaultValue="110001" className="w-full bg-inkara-black border border-gold-accent rounded px-3 py-2 text-inkara-ivory focus:outline-none focus:border-inkara-gold" />
                </div>
                <div className="col-span-full space-y-1">
                  <label className="text-inkara-grey block">Street Address / Estate *</label>
                  <input type="text" required defaultValue="Flat 4B, Heritage Heights, Barakhamba Road" className="w-full bg-inkara-black border border-gold-accent rounded px-3 py-2 text-inkara-ivory focus:outline-none focus:border-inkara-gold" />
                </div>
                <div className="space-y-1">
                  <label className="text-inkara-grey block">City *</label>
                  <input type="text" required defaultValue="New Delhi" className="w-full bg-inkara-black border border-gold-accent rounded px-3 py-2 text-inkara-ivory focus:outline-none focus:border-inkara-gold" />
                </div>
                <div className="space-y-1">
                  <label className="text-inkara-grey block">State *</label>
                  <input type="text" required defaultValue="Delhi" className="w-full bg-inkara-black border border-gold-accent rounded px-3 py-2 text-inkara-ivory focus:outline-none focus:border-inkara-gold" />
                </div>
              </div>

              <h3 className="font-serif text-xl text-inkara-champagne border-b border-gold-accent pb-3 pt-4">2. Payment Method (Demo Simulator)</h3>
              <div className="space-y-3 text-xs">
                <label className="flex items-center gap-3 p-3 bg-inkara-black/50 border border-gold-accent rounded cursor-pointer hover:border-inkara-gold">
                  <input type="radio" name="payment" defaultChecked className="accent-inkara-gold" />
                  <span className="text-inkara-ivory font-medium">UPI / Instant QR (Google Pay, PhonePe, Paytm)</span>
                </label>
                <label className="flex items-center gap-3 p-3 bg-inkara-black/50 border border-gold-accent rounded cursor-pointer hover:border-inkara-gold">
                  <input type="radio" name="payment" className="accent-inkara-gold" />
                  <span className="text-inkara-ivory font-medium">Credit / Debit Card (Visa, MasterCard, Amex)</span>
                </label>
                <label className="flex items-center gap-3 p-3 bg-inkara-black/50 border border-gold-accent rounded cursor-pointer hover:border-inkara-gold">
                  <input type="radio" name="payment" className="accent-inkara-gold" />
                  <span className="text-inkara-ivory font-medium">Cash on Delivery (Verified Signature upon Handover)</span>
                </label>
              </div>

              <button type="submit" className="w-full py-4 bg-gradient-to-r from-inkara-gold to-inkara-champagne text-inkara-black font-semibold text-xs tracking-widest uppercase rounded shadow-gold-glow hover:brightness-110 transition-all">
                Authorize Order ({formatINR(totals.finalTotal)})
              </button>
            </form>

            <div className="lg:col-span-5 bg-inkara-slate border border-gold-accent rounded-xl p-6 space-y-6">
              <h3 className="font-serif text-xl text-inkara-ivory border-b border-gold-accent pb-3">Order Summary ({totals.penCount} items)</h3>
              
              <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
                {cart.map(item => (
                  <div key={item.id} className="flex items-center justify-between text-xs py-2 border-b border-gold-accent/40">
                    <div>
                      <span className="text-inkara-ivory font-medium block">{item.name} &times; {item.quantity}</span>
                      <span className="text-[11px] text-inkara-gold">{item.selectedColor}</span>
                    </div>
                    <span className="font-mono text-inkara-champagne">{formatINR(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 text-xs pt-2">
                <div className="flex justify-between text-inkara-grey">
                  <span>Subtotal</span>
                  <span className="font-mono text-inkara-ivory">{formatINR(totals.subtotal)}</span>
                </div>
                {totals.totalDiscount > 0 && (
                  <div className="flex justify-between text-inkara-gold font-medium">
                    <span>Special Promotion Discount</span>
                    <span className="font-mono">-{formatINR(totals.totalDiscount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-inkara-grey">
                  <span>Insured Express Shipping</span>
                  <span className="text-inkara-champagne">Complimentary (₹0)</span>
                </div>
                <div className="flex justify-between text-inkara-grey">
                  <span>Goods & Services Tax (18% GST)</span>
                  <span className="text-inkara-ivory">Included</span>
                </div>
                <div className="flex justify-between text-base font-serif text-inkara-champagne font-bold pt-3 border-t border-gold-accent">
                  <span>Total Amount</span>
                  <span className="font-mono">{formatINR(totals.finalTotal)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center max-w-xl mx-auto py-12 space-y-6 bg-inkara-slate border border-inkara-gold rounded-2xl p-8 sm:p-12 shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-inkara-gold/20 border border-inkara-gold text-inkara-gold mx-auto flex items-center justify-center text-2xl font-bold">
            &#10003;
          </div>
          <span className="text-xs uppercase tracking-widest text-inkara-gold block font-mono">Official Acquisition Order</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-inkara-champagne font-semibold">Thank You for Your Patronage.</h2>
          <p className="text-xs text-inkara-grey leading-relaxed">
            Your order has been recorded into our atelier dispatch log. Our master pen custodians are preparing your instruments with velvet presentation cases and lifetime guarantee credentials.
          </p>

          <div className="p-6 bg-inkara-black border border-gold-accent rounded-xl text-left space-y-2 text-xs">
            <div className="flex justify-between border-b border-gold-accent/40 pb-2">
              <span className="text-inkara-grey">Order Reference:</span>
              <span className="font-mono text-inkara-gold font-bold">{orderId}</span>
            </div>
            <div className="flex justify-between border-b border-gold-accent/40 py-2">
              <span className="text-inkara-grey">Estimated Handover:</span>
              <span className="text-inkara-ivory font-medium">Within 2 to 4 Business Days</span>
            </div>
            <div className="flex justify-between pt-2">
              <span className="text-inkara-grey">Dispatch Atelier:</span>
              <span className="text-inkara-ivory font-medium">INKARA Central Atelier, New Delhi</span>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="px-6 py-3 bg-gradient-to-r from-inkara-gold to-inkara-champagne text-inkara-black font-semibold text-xs uppercase tracking-widest rounded shadow">
              Return to Atelier Home
            </Link>
            <Link href="/shop" className="px-6 py-3 border border-gold-accent text-inkara-ivory hover:border-inkara-gold text-xs uppercase tracking-widest rounded">
              Browse Other Pens
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

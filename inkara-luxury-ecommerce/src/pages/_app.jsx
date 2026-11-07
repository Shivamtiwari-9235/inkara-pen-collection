import '../styles/globals.css';
import Head from 'next/head';
import { ShopProvider, useShop } from '../context/ShopContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CartDrawer from '../components/CartDrawer';
import WishlistDrawer from '../components/WishlistDrawer';
import QuickViewModal from '../components/QuickViewModal';
import SearchModal from '../components/SearchModal';
import WritingQuizModal from '../components/WritingQuizModal';

function Toast() {
  const { toastMessage } = useShop();
  if (!toastMessage) return null;
  return (
    <div className="fixed bottom-6 right-6 z-50 bg-inkara-charcoal border border-inkara-gold text-inkara-ivory px-5 py-3.5 rounded-lg shadow-gold-glow flex items-center gap-3 animate-fade-in">
      <div className="w-6 h-6 rounded-full bg-inkara-gold/20 text-inkara-gold flex items-center justify-center text-xs font-bold">&#10003;</div>
      <div className="text-sm font-medium">{toastMessage}</div>
    </div>
  );
}

export default function App({ Component, pageProps }) {
  return (
    <ShopProvider>
      <Head>
        <title>INKARA | Luxury Writing Instruments — Precision, Held in Hand</title>
        <meta name="description" content="Discover INKARA luxury fountain pens, rollerballs, and ballpoints. Handcrafted solid brass core, German iridium nibs, and lifetime guarantee." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen flex flex-col bg-inkara-black text-inkara-ivory">
        <Navbar />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
        <CartDrawer />
        <WishlistDrawer />
        <QuickViewModal />
        <SearchModal />
        <WritingQuizModal />
        <Toast />
      </div>
    </ShopProvider>
  );
}

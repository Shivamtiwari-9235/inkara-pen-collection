import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS } from '../data/products';

const ShopContext = createContext();

export function ShopProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [promoCode, setPromoCode] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  // LocalStorage persistence
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('inkara_cart');
      if (savedCart) setCart(JSON.parse(savedCart));
      const savedWish = localStorage.getItem('inkara_wishlist');
      if (savedWish) setWishlist(JSON.parse(savedWish));
    } catch (e) {
      console.warn('LocalStorage unavailable', e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('inkara_cart', JSON.stringify(cart));
      localStorage.setItem('inkara_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.warn('LocalStorage save failed', e);
    }
  }, [cart, wishlist]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3200);
  };

  const addToCart = (productId, colorName, nibSize, qty = 1) => {
    const p = PRODUCTS.find(item => item.id === productId);
    if (!p) return;
    const selectedColor = colorName || p.colors[0].name;
    const selectedNib = nibSize || (p.nibs ? p.nibs[0] : 'Standard');
    const cartItemId = `${productId}_${selectedColor}_${selectedNib}`;

    setCart(prev => {
      const existing = prev.find(i => i.id === cartItemId);
      if (existing) {
        return prev.map(i => i.id === cartItemId ? { ...i, quantity: i.quantity + qty } : i);
      }
      return [...prev, {
        id: cartItemId,
        productId: p.id,
        name: p.name,
        category: p.categoryName,
        price: p.price,
        originalPrice: p.originalPrice,
        image: p.image,
        selectedColor,
        selectedNib,
        quantity: qty
      }];
    });

    setIsCartOpen(true);
    showToast(`Added "${p.name}" (${selectedColor}) to shopping bag.`);
  };

  const updateCartQty = (cartItemId, delta) => {
    setCart(prev => {
      return prev.map(i => {
        if (i.id === cartItemId) {
          const newQty = i.quantity + delta;
          return newQty > 0 ? { ...i, quantity: newQty } : null;
        }
        return i;
      }).filter(Boolean);
    });
  };

  const removeCartItem = (cartItemId) => {
    setCart(prev => prev.filter(i => i.id !== cartItemId));
    showToast('Item removed from shopping bag.');
  };

  const toggleWishlist = (productId) => {
    const p = PRODUCTS.find(item => item.id === productId);
    setWishlist(prev => {
      if (prev.includes(productId)) {
        showToast(`Removed "${p ? p.name : 'Pen'}" from wishlist.`);
        return prev.filter(id => id !== productId);
      } else {
        showToast(`Saved "${p ? p.name : 'Pen'}" to wishlist.`);
        return [...prev, productId];
      }
    });
  };

  const calculateCartTotals = () => {
    let subtotal = 0;
    let allUnits = [];
    cart.forEach(item => {
      subtotal += item.price * item.quantity;
      for (let i = 0; i < item.quantity; i++) {
        allUnits.push({ price: item.price, name: item.name });
      }
    });

    allUnits.sort((a, b) => a.price - b.price);
    const freeItemsCount = Math.floor(allUnits.length / 4);
    let freeItemDiscount = 0;
    for (let i = 0; i < freeItemsCount; i++) {
      freeItemDiscount += allUnits[i].price;
    }

    let codeDiscount = 0;
    if (promoCode === 'INKARA10' && allUnits.length >= 2) {
      codeDiscount = Math.round((subtotal - freeItemDiscount) * 0.10);
    } else if (promoCode === 'WELCOME10') {
      codeDiscount = Math.round((subtotal - freeItemDiscount) * 0.10);
    }

    const totalDiscount = freeItemDiscount + codeDiscount;
    const finalTotal = Math.max(0, subtotal - totalDiscount);

    return {
      subtotal,
      penCount: allUnits.length,
      freeItemsCount,
      freeItemDiscount,
      codeDiscount,
      totalDiscount,
      finalTotal
    };
  };

  return (
    <ShopContext.Provider value={{
      cart,
      wishlist,
      addToCart,
      updateCartQty,
      removeCartItem,
      toggleWishlist,
      calculateCartTotals,
      isCartOpen,
      setIsCartOpen,
      isWishlistOpen,
      setIsWishlistOpen,
      isSearchOpen,
      setIsSearchOpen,
      isQuizOpen,
      setIsQuizOpen,
      quickViewProduct,
      setQuickViewProduct,
      promoCode,
      setPromoCode,
      toastMessage,
      showToast,
      setCart
    }}>
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  return useContext(ShopContext);
}

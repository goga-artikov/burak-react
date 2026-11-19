import { useState } from "react";
import { CartItem } from "../../../lib/types/search";

const useBasket = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const cartJson = localStorage.getItem("cartData");
      const currentCart = cartJson ? JSON.parse(cartJson) : [];
      return Array.isArray(currentCart) ? currentCart : [];
    } catch {
      return [];
    }
  });

  const onAdd = (input: CartItem) => {
    const exist = cartItems.find(
      (item: CartItem) => item._id === input._id,
    );
    if (exist) {
      const cartUpdate = cartItems.map((item: CartItem) =>
        item._id === input._id
          ? { ...exist, quantity: exist.quantity + 1 }
          : item,
      );
      setCartItems(cartUpdate);
      localStorage.setItem("cartData", JSON.stringify(cartUpdate));
    } else {
      const cartUpdate = [...cartItems, { ...input }];
      setCartItems(cartUpdate);
      localStorage.setItem("cartData", JSON.stringify(cartUpdate));
    }
  };

  const onRemove = (input: CartItem) => {
    // savatda shu mahsulot bormi, tekshiramiz
    const exist = cartItems.find(
      (item: CartItem) => item._id === input._id,
    );
    if (!exist) return;
    if (exist.quantity === 1) {
      // Soni 1 ta bo'lsa: mahsulotni savatdan butunlay olib tashlaymiz
      const cartUpdate = cartItems.filter(
        (item: CartItem) => item._id !== input._id,
      );
      setCartItems(cartUpdate);
      localStorage.setItem("cartData", JSON.stringify(cartUpdate));
    } else {
      // Soni 1 dan ko'p bo'lsa: quantity'ni 1 ga kamaytiramiz
      const cartUpdate = cartItems.map((item: CartItem) =>
        item._id === input._id
          ? { ...exist, quantity: exist.quantity - 1 }
          : item,
      );
      setCartItems(cartUpdate);
      localStorage.setItem("cartData", JSON.stringify(cartUpdate));
    }
  };

  const onDelete = (input: CartItem) => {
    // shu mahsulotdan boshqa hammasini qoldiramiz
    const cartUpdate = cartItems.filter(
      (item: CartItem) => item._id !== input._id,
    );
    setCartItems(cartUpdate);
    localStorage.setItem("cartData", JSON.stringify(cartUpdate));
  };

  const onDeleteAll = () => {
    // savatni butunlay tozalaymiz
    setCartItems([]);
    localStorage.removeItem("cartData");
  };

  return {
    cartItems,
    onAdd,
    onRemove,
    onDelete,
    onDeleteAll,
  };
};

export default useBasket;

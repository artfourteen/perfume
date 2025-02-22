"use client";

import {
  PropsWithChildren,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { CartContext } from "./CartContext";
import { perfumes } from "@/shared/constants/perfumes";
import { ParfumeEntity } from "@/entities/parfume/model/parfume";

export interface CartItem {
  id: string;
  quantity: number;
  ml: number;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (id: string, ml: number, quantity?: number) => void;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  removeFromCart: (id: string, ml: number) => void;
  incrementQuantity: (id: string, ml: number) => void;
  decrementQuantity: (id: string, ml: number) => void;
  clearCart: () => void;
  getCartItemQuantity: (id: string) => number;
  getTotalPrice: () => number;
  getCartPerfumes: () => (ParfumeEntity & {
    cartQuantity: number;
    cartMl: number;
  })[];
}

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (id: string, ml: number, quantity: number = 1) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === id && item.ml === ml
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === id && item.ml === ml
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...currentItems, { id, quantity, ml }];
    });
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, cartItem) => {
      const perfume = perfumes.find((perfume) => perfume.id === cartItem.id);
      if (perfume) {
        const mlIndex = perfume.ml.indexOf(cartItem.ml);
        if (mlIndex !== -1) {
          const price = perfume.price[mlIndex];
          return total + price * cartItem.quantity;
        }
      }
      return total;
    }, 0);
  };

  const getCartPerfumes = () => {
    return cartItems.map((cartItem) => {
      const perfume = perfumes.find((perfume) => perfume.id === cartItem.id);
      if (!perfume) {
        throw new Error(`Perfume with id ${cartItem.id} not found`);
      }

      const mlIndex = perfume.ml.indexOf(cartItem.ml);
      const price = mlIndex !== -1 ? perfume.price[mlIndex] : 0;

      return {
        ...perfume,
        cartQuantity: cartItem.quantity,
        cartMl: cartItem.ml,
        cartPrice: price,
      };
    });
  };

  const removeFromCart = (id: string, ml: number) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => !(item.id === id && item.ml === ml))
    );
  };

  const incrementQuantity = (id: string, ml: number) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id && item.ml === ml
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrementQuantity = (id: string, ml: number) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === id && item.ml === ml && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartItemQuantity = (id: string) => {
    return cartItems.reduce((total, item) => {
      if (item.id === id) {
        return total + item.quantity;
      }
      return total;
    }, 0);
  };

  const value = {
    cartItems,
    addToCart,
    open,
    setOpen,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    clearCart,
    getCartItemQuantity,
    getCartPerfumes,
    getTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

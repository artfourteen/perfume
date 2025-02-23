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
import { phoneNumber as sitePhoneNumber } from "@/shared/constants/contacts";

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
  fullname: string;
  setFullname: Dispatch<SetStateAction<string>>;
  phoneNumber: string;
  setPhoneNumber: Dispatch<SetStateAction<string>>;
  countryCity: string;
  setCountryCity: Dispatch<SetStateAction<string>>;
  address: string;
  setAddress: Dispatch<SetStateAction<string>>;
  isOrderModalOpen: boolean;
  setIsOrderModalOpen: Dispatch<SetStateAction<boolean>>;
  sendWhatsAppMessage: () => void;
}

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState<boolean>(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [fullname, setFullname] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [countryCity, setCountryCity] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setCartItems(JSON.parse(localStorage.getItem("cart") || "[]"));
    setFullname(localStorage.getItem("fullname") || "");
    setPhoneNumber(localStorage.getItem("phoneNumber") || "");
    setCountryCity(localStorage.getItem("countryCity") || "");
    setAddress(localStorage.getItem("address") || "");
  }, []);

  useEffect(() => {
    if (isMounted) localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems, isMounted]);

  useEffect(() => {
    if (isMounted) localStorage.setItem("fullname", fullname);
  }, [fullname, isMounted]);

  useEffect(() => {
    if (isMounted) localStorage.setItem("phoneNumber", phoneNumber);
  }, [phoneNumber, isMounted]);

  useEffect(() => {
    if (isMounted) localStorage.setItem("countryCity", countryCity);
  }, [countryCity, isMounted]);

  useEffect(() => {
    if (isMounted) localStorage.setItem("address", address);
  }, [address, isMounted]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

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

  const sendWhatsAppMessage = () => {
    const cartDetails = cartItems
      .map((item, index) => {
        const perfume = perfumes.find((p) => p.id === item.id);
        if (!perfume) return null;

        return `${index + 1}) *${perfume.title}* (${perfume.brand})  
📦 Количество: ${item.quantity} шт  
💧 Объем: ${item.ml} мл`;
      })
      .filter(Boolean)
      .join("\n\n");

    const message = `✨ *Новый заказ!* ✨\n\n${cartDetails}\n\n📌 *Детали доставки:*\n👤 Имя: *${fullname}*  
📞 Телефон: *${phoneNumber}*  
🏠 Адрес: *${countryCity}, ${address}*\n\n💬 Пожалуйста, подтвердите заказ. Спасибо! 🙌`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${sitePhoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    clearCart,
    getCartItemQuantity,
    getCartPerfumes,
    getTotalPrice,
    open,
    setOpen,
    isOrderModalOpen,
    setIsOrderModalOpen,
    fullname,
    setFullname,
    phoneNumber,
    setPhoneNumber,
    countryCity,
    setCountryCity,
    address,
    setAddress,
    sendWhatsAppMessage,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

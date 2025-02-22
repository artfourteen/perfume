import { useContext } from "react";
import { CartContext } from "./CartContext";
import { CartContextType } from "./CartProvider";

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};

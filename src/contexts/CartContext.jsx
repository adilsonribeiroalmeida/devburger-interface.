import { createContext, useContext } from "react";
import { useCart } from "../hooks/useCart";

const CartContext = createContext(null);

export function CartProvider({ children }) {
     const cartData = useCart();

     return (
          <CartContext.Provider value={cartData}>
               {children}
          </CartContext.Provider>
     );
}

export function useCartContext() {
     const context = useContext(CartContext);

     if (!context) {
          throw new Error(
               "useCartContext deve ser usado dentro do CartProvider"
          );
     }

     return context;
}
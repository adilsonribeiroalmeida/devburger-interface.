import { useState } from "react";

export function useCart() {
     const [cart, setCart] = useState([]);

     function addToCart(product) {
          setCart((currentCart) => {
               const existingProduct = currentCart.find(
                    (item) => item.id === product.id
               );

               if (existingProduct) {
                    return currentCart.map((item) =>
                         item.id === product.id
                              ? { ...item, quantity: item.quantity + 1 }
                              : item
                    );
               }

               return [...currentCart, { ...product, quantity: 1 }];
          });
     }

     return { cart, addToCart };
}
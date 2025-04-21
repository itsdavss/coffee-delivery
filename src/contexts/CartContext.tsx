import { createContext, useState, useContext, ReactNode } from "react";

interface CartItem {
  id: number;
  name: string;
  image: string;
  value: number;
  coffeeQuantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeItem: (item: CartItem) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);

      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id
            ? { ...i, coffeeQuantity: i.coffeeQuantity + item.coffeeQuantity }
            : i
        );
      }

      return [...prevItems, item];
    });
  };

  const removeItem = (item: CartItem) => {
    setCartItems((prevItems) =>  prevItems.filter((i) => i.id != item.id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

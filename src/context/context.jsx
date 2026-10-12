import { createContext, useState, useEffect, Children } from "react";
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const addToCart = (product) => {
    setCart((PrevCart) => {
      const existingItem = PrevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return PrevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...PrevCart, { ...product, quantity: 1 }];
    });
  };
  const removeFromCart = (productId) => {
    setCart((PrevCart) => PrevCart.filter((item) => item.id !== productId));
  };
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart((PrevCart) =>
      PrevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };
  const totalItem = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalItem,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

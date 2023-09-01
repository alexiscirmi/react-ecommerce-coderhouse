import { useState, createContext } from "react"

export const CartContext = createContext()

export function CartContextComponent({ children }) {

  const [cartCount, setCartCount] = useState(0)

  const addCartCount = () => {
    setCartCount(cartCount + 1)
  }

  const subtractCartCount = () => {
    cartCount > 0 && setCartCount(cartCount - 1)
  }

  return (
    <CartContext.Provider value={{ cartCount, addCartCount, subtractCartCount }}>
      {children}
    </CartContext.Provider>
  )
}
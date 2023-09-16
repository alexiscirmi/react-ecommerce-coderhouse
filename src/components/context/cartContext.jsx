import { useState, createContext } from "react"

export const CartContext = createContext() // This context is used on CartWidget.jsx

export function CartContextComponent({ children }) { // This component is imported on Router.jsx

  const [cart, setCart] = useState([])

  // ELIMINAR //////////////
  console.log(cart)

  const isInCart = (itemId) => cart.some(item => item.id === itemId)

  const addItem = (item, quantity) => {
    isInCart(item)
      ? setCart(quantity += 1)
      : setCart([...cart, { ...item, quantity: 0 }])
  }

  const removeItem = (item) => {
    cart > 0 && setCart(cart - 1)
  }

  const clear = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, isInCart, addItem, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  )
}
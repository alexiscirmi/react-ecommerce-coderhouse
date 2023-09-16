import { useState, createContext } from "react"

export const CartContext = createContext() // This context is used on CartWidget.jsx

export function CartContextComponent({ children }) { // This component is imported on Router.jsx

  const [cart, setCart] = useState([])

  // ELIMINAR //////////////
  console.log(cart)

  const isInCart = (itemId) => cart.some(item => item.id === itemId)

  const addItem = (item, quantity) => {
    isInCart(item.id)
      ? setCart(cart[cart.findIndex(itemId => itemId.id === item)].quantity = quantity)
      : setCart([...cart, { ...item, quantity }])
  }

  const removeItem = (itemId, quantity) => {
    quantity >= 1
      ? setCart(quantity - 1)
      : setCart(cart.filter(item => item.id !== itemId))
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
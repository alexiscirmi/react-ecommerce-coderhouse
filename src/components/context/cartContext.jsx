import { useState, createContext } from "react"

export const CartContext = createContext() // This context is used on CartWidget.jsx & Cart.jsx

export function CartContextComponent({ children }) { // This component is imported on Router.jsx

  const [cart, setCart] = useState([])

  const cartWidgetAmount = cart.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0)

  const addItem = (item, quantity) => {
    setCart([...cart, { ...item, quantity }])
  }

  const removeItem = (item, quantity) => {
    quantity >= 1
      ? setCart([...cart.filter(itemId => itemId.id !== item.id), { ...item, quantity }])
      : setCart(cart.filter(itemId => itemId.id !== item.id))
  }

  const clear = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, cartWidgetAmount }}>
      {children}
    </CartContext.Provider>
  )
}
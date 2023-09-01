import { useState, useContext } from 'react'
import { CartContext } from '../context/cartContext'
import './_item-count.scss'

function ItemCount() {

  const [amount, setAmount] = useState(0)

  const { addCartCount, subtractCartCount } = useContext(CartContext)

  const subtractAmount = () => {
    amount > 0 && setAmount(amount - 1)
    subtractCartCount()
  }

  const addAmount = () => {
    setAmount(amount + 1)
    addCartCount()
  }

  return (
    <div>
      <button className='btn btn-primary' onClick={subtractAmount}>-</button>
      <span className='amount-counter'>{amount}</span>
      <button className='btn btn-primary' onClick={addAmount}>+</button>
    </div>
  )
}

export default ItemCount
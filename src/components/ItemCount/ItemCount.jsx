import { useState, useContext, useEffect } from 'react'
import { CartContext } from '../context/cartContext'
import styles from './ItemCount.module.scss'

function ItemCount({ detail }) {

  const { cart, addItem, removeItem } = useContext(CartContext)

  const [count, setCount] = useState(0)

  useEffect(() => {
    const itemInCart = cart.find(item => item.id === detail.id)
    itemInCart && setCount(itemInCart.quantity)
  }, [cart, detail.id])

  const subtractCount = () => {
    if (count > 0) {
      setCount(count - 1)
      removeItem(detail, count - 1)
    }
  }

  const addCount = () => {
    if (detail.stock > count) {
      setCount(count + 1)
      addItem(detail, count + 1)
    }
  }

  return (
    <div>
      <button className='btn btn-primary' onClick={subtractCount}>-</button>
      <span className={styles.amountCounter}>{count}</span>
      <button className='btn btn-primary' onClick={addCount}>+</button>
    </div>
  )
}

export default ItemCount
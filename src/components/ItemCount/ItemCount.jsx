import { useState, useContext } from 'react'
import { CartContext } from '../context/cartContext'
import styles from './ItemCount.module.scss'

function ItemCount({ detail }) {

  const [count, setCount] = useState(0)

  const { addItem, removeItem } = useContext(CartContext)

  const subtractCount = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const addCount = () => {
    if (detail.stock > count) {
      setCount(count + 1)
    }
  }

  const addButton = () => {
    count > 0 && addItem(detail, count)
  }

  return (
    <div>
      <button className='btn btn-primary' onClick={subtractCount}>-</button>
      <span className={styles.amountCounter}>{count}</span>
      <button className='btn btn-primary' onClick={addCount}>+</button>
      <button className='btn btn-primary ms-4' onClick={addButton}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount
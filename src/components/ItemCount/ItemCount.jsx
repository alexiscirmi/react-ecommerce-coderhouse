import { useState, useContext } from 'react'
import { CartContext } from '../context/cartContext'
import styles from './ItemCount.module.scss'

function ItemCount({ detail }) {

  const [itemCount, setItemCount] = useState(0)

  const { addItem, subtractItem } = useContext(CartContext)

  const subtractItemCount = () => {
    if (itemCount > 0) {
      setItemCount(itemCount - 1)
      subtractItem()
    }
  }

  const addItemCount = () => {
    if (detail.stock > itemCount) {
      setItemCount(itemCount + 1)
      addItem()
    }
  }

  return (
    <div>
      <button className='btn btn-primary' onClick={subtractItemCount}>-</button>
      <span className={styles.amountCounter}>{itemCount}</span>
      <button className='btn btn-primary' onClick={addItemCount}>+</button>
    </div>
  )
}

export default ItemCount
import { useContext } from 'react'
import { CartFill } from 'react-bootstrap-icons'
import { CartContext } from '../context/cartContext'
import styles from './CartWidget.module.scss'
import { Link } from 'react-router-dom'

function CartWidget() {

  // This component shows a cart icon, takes the cart array from CartContext and renders its length

  const { cartWidgetAmount } = useContext(CartContext)

  return (
    <Link to='/cart' className={styles.cartWidgetContainer}>
      <div className={styles.cartWidgetAmount}>
        {cartWidgetAmount}
      </div>
      <div>
        <CartFill className='fs-4' />
      </div>
    </Link >
  )
}

export default CartWidget
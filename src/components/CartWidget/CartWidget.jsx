import { useContext } from 'react'
import { CartFill } from 'react-bootstrap-icons'
import { CartContext } from '../context/cartContext'
import styles from './CartWidget.module.scss'

function CartWidget() {

  // This component shows a cart icon, takes the cart array from CartContext and renders its length

  const { cart } = useContext(CartContext)

  return (
    <div className={styles.cartWidgetContainer}>
      <div className={styles.cartWidgetAmount}>
        {cart.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0)}
      </div>
      <div>
        <CartFill className='fs-4' />
      </div>
    </div >
  )
}

export default CartWidget
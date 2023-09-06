import { useContext } from 'react'
import { CartFill } from 'react-bootstrap-icons'
import { CartContext } from '../context/cartContext'
import styles from './CartWidget.module.scss'

function CartWidget() {

  const { cartCount } = useContext(CartContext)

  return (
    <div className={styles.cartWidgetContainer}>
      <div className={styles.cartWidgetAmount}>
        {cartCount}
      </div>
      <div>
        <CartFill className='fs-4' />
      </div>
    </div >
  )
}

export default CartWidget
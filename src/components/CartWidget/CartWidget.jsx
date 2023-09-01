import { useContext } from 'react'
import { CartFill } from 'react-bootstrap-icons'
import { CartContext } from '../context/cartContext'
import './_cart-widget.scss'

function CartWidget() {

  const { cartCount } = useContext(CartContext)

  return (
    <div className='cart-widget-container'>
      <div className='cart-widget-amount'>
        {cartCount}
      </div>
      <div className='cart-icon-mobile'>
        <CartFill className='fs-4' />
      </div>
    </div >
  )
}

export default CartWidget
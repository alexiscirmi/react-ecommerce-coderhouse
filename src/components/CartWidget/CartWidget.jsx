import './_cart-widget.scss';
import { CartFill } from 'react-bootstrap-icons';

function CartWidget() {
  return (
    <div className='cart-widget-container'>
      <div className='cart-widget-amount'>7</div>
      <div className='cart-icon-mobile'>
        <CartFill className='fs-4' />
      </div>
    </div >
  );
}

export default CartWidget;
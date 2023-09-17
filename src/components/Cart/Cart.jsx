import { useContext } from 'react'
import { CartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';
import styles from './Cart.module.scss'

function Cart() {

  const { cart } = useContext(CartContext)

  return (
    <div className={`pb-5 ${styles.cart}`}>
      {
        cart.map((item) => {
          return (
            <div key={item.id} className={styles.cartItem}>
              <div className={styles.cartItemImage}>
                <img src={item.image} className={styles.img} />
              </div>
              <span>{item.title}</span>
              <span>Cantidad: {item.quantity}</span>
              <span>Precio: $ {item.price.toLocaleString("es-AR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              <span>Total: $ {(item.quantity * item.price).toLocaleString("es-AR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
          )
        })
      }

      <Link to='/checkout' className='mt-3 mx-auto btn btn-primary'>Continuar</Link>
    </div>
  );
}

export default Cart;
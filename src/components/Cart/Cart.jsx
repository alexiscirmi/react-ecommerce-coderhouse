import { useContext } from 'react'
import { CartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';
import styles from './Cart.module.scss'

function Cart() {

  const { cart, clear, addItem, removeItem } = useContext(CartContext)

  if (cart.length > 0) {
    return (
      <div className={`pb-5 ${styles.cart}`}>
        {
          cart.map((item) => {
            return (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.cartItemImage}>
                  <img src={item.image} className={styles.img} alt={item.title} />
                </div>
                <span>{item.title}</span>
                <span className='d-none d-lg-block'>Precio: $ {item.price.toLocaleString("es-AR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                <span>Total: $ {(item.quantity * item.price).toLocaleString("es-AR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                <div className='minusDisplayPlus d-flex flex-column d-md-block'>
                  <button className={`btn btn-primary`} onClick={() => removeItem(item, item.quantity)}>-</button>
                  <span>{item.quantity}</span>
                  <button className={`btn btn-primary`} onClick={() => addItem(item, item.quantity)}>+</button>
                </div>

              </div>
            )
          })
        }

        <div className='d-flex gap-3 justify-content-center mt-4'>
          <button className='btn btn-primary' onClick={clear}>Limpiar carrito</button>
          <Link to='/checkout' className='btn btn-primary'>Continuar</Link>
        </div>
      </div>
    )
  } else {
    return (
      <div className='d-flex flex-column align-items-center justify-content-center text-center h-100'>
        <h1 className='fs-4'>No hay ítems en el carrito</h1>
        <Link to='/' className='btn btn-primary mt-5'>Volver al inicio</Link>
      </div>
    )
  }


}

export default Cart;
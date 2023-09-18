import { useContext, useState } from 'react'
import { CartContext } from '../context/cartContext'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import styles from './Checkout.module.scss'

function Checkout() {

  const { cart, clear } = useContext(CartContext)

  const [name, setName] = useState('')
  const handleName = (e) => {
    setName(e.target.value)
  }

  const [phone, setPhone] = useState()
  const handlePhone = (e) => {
    setPhone(e.target.value)
  }

  const [email, setEmail] = useState('')
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const [orderId, setOrderId] = useState(undefined)

  const sendOrder = (e) => {
    e.preventDefault()
    const order = {
      buyer: { name: name, phone: phone, email: email },
      items: cart.map(item => {
        return { id: item.id, title: item.title, price: item.price }
      }),
      date: new Date(),
      total: cart.reduce((accumulator, currentValue) => accumulator + (currentValue.quantity * currentValue.price), 0)
    }

    const db = getFirestore()

    const ordersCollection = collection(db, 'orders')

    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id))

    clear()
  }

  return (
    <div className={styles.checkout}>
      <h1 className='fs-4 mt-3'>Finalizar compra</h1>
      <form action='' className={`mt-4 ${styles.form}`}>

        <fieldset className='form-group d-flex flex-column justify-content-center gap-2 my-4'>
          <label htmlFor='nombre'>Nombre</label>
          <input className='form-control' type='text' id='nombre' placeholder='Lionel Andrés Messi' required onChange={handleName} />
        </fieldset>

        <fieldset className='form-group d-flex flex-column justify-content-center gap-2 my-4'>
          <label htmlFor='telefono'>Teléfono</label>
          <input className='form-control' type='tel' id='telefono' maxLength='12' placeholder='541123456789' required onChange={handlePhone} />
        </fieldset>

        <fieldset className='form-group d-flex flex-column justify-content-center gap-2 my-4'>
          <label htmlFor='email'>Email</label>
          <input className='form-control' type='email' id='email' placeholder='linustorvalds@outlook.com' required onChange={handleEmail} />
        </fieldset>

        <div className='d-flex justify-content-center'>
          <button type='submit' className='btn btn-primary mt-4' onClick={sendOrder}>Realizar pedido</button>
        </div>

        {orderId && (
          <div className='mt-4'>
            <p>Order ID: {orderId}</p>
          </div>
        )}

      </form>
    </div>
  );
}

export default Checkout;
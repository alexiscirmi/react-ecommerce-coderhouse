import { useContext, useState } from 'react'
import { CartContext } from '../context/cartContext'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import Loader from '../Loader/Loader'
import styles from './Checkout.module.scss'

function Checkout() {
  const { cart, clear } = useContext(CartContext)

  const [loading, setLoading] = useState(false)

  const [name, setName] = useState(undefined)
  const handleName = (e) => {
    setName(e.target.value)
  }

  const [phone, setPhone] = useState(undefined)
  const handlePhone = (e) => {
    setPhone(e.target.value)
  }

  const [email, setEmail] = useState(undefined)
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const [orderId, setOrderId] = useState(undefined)

  const sendOrder = async (e) => {

    if (name && phone && phone.length === 12 && parseInt(phone) && email && email.includes('@')) {
      e.preventDefault()
      setLoading(true)

      if (cart.length > 0) {
        const order = {
          buyer: { name: name, phone: phone, email: email },
          items: cart.map(item => {
            return { id: item.id, title: item.title, price: item.price, quantity: item.quantity }
          }),
          date: new Date(),
          total: cart.reduce((accumulator, currentValue) => accumulator + (currentValue.quantity * currentValue.price), 0)
        }

        const db = getFirestore()

        const ordersCollection = collection(db, 'orders')

        try {
          const { id } = await addDoc(ordersCollection, order)
          setOrderId(id)
          clear()
          setLoading(false)
        } catch (error) {
          console.error('No se pudo crear la orden.')
          setLoading(false)
        }
      }
    } else {
      console.error('No se pudo crear la orden. Completar todos los campos requeridos.')
    }
  }


  if (!loading && !orderId) {
    return (
      <div className={styles.checkout}>
        <h1 className='fs-4 mt-3'>Finalizar compra</h1>
        <p className='mt-4 mx-4 text-center balance'>Complete el formulario con sus datos. Todos los campos son requeridos.</p>
        <form action='' className={`mt-1 ${styles.form}`}>

          <fieldset className='form-group d-flex flex-column justify-content-center gap-2 my-4'>
            <label htmlFor='nombre'>Nombre</label>
            <input className='form-control' type='text' id='nombre' placeholder='Linus Torvalds' required onChange={handleName} />
          </fieldset>

          <fieldset className='form-group d-flex flex-column justify-content-center gap-2 my-4'>
            <label htmlFor='telefono'>Teléfono (12 dígitos)</label>
            <input className='form-control' type='tel' id='telefono' minLength='12' maxLength='12' placeholder='541123456789' required onChange={handlePhone} />
          </fieldset>

          <fieldset className='form-group d-flex flex-column justify-content-center gap-2 my-4'>
            <label htmlFor='email'>Email</label>
            <input className='form-control' type='email' id='email' placeholder='linustorvalds@outlook.com' required onChange={handleEmail} />
          </fieldset>

          <div className='d-flex justify-content-center'>
            <button type='button' className='btn btn-primary mt-4' onClick={sendOrder}>Crear orden</button>
          </div>

        </form>
      </div>
    )
  } else {
    return (
      <>
        {loading && (
          <Loader message={'Creando orden...'} />
        )}

        {
          orderId && (
            <div className='d-flex h-100 justify-content-center align-items-center fs-4'>
              <p>Orden creada - ID: {orderId}</p>
            </div>
          )
        }
      </>
    )
  }
}

export default Checkout
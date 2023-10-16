import { useContext, useState } from 'react'
import { CartContext } from '../../context/cartContext'
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import { addDoc, collection, getFirestore, doc, updateDoc } from 'firebase/firestore'
import Loader from '../Loader/Loader'

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

    if (name && phone && phone.length === 10 && parseInt(phone) && email && email.includes('@')) {
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

          // Update item stock
          const itemsCollection = collection(db, 'items')
          cart.forEach(async (item) => {
            const itemRef = doc(itemsCollection, item.id)
            await updateDoc(itemRef, { stock: item.stock - item.quantity })
          })

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
      <CheckoutForm sendOrder={sendOrder} handleName={handleName} handlePhone={handlePhone} handleEmail={handleEmail} />
    )
  } else {
    return (
      <>
        {loading && (
          <Loader message={'Creando orden...'} />
        )}

        {
          orderId && (
            <div className='d-flex h-100 justify-content-center align-items-center text-center balance fs-4'>
              <p>Orden creada - ID: {orderId}</p>
            </div>
          )
        }
      </>
    )
  }
}

export default Checkout
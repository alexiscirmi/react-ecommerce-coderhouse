import Router from './router/Router'
import './assets/scss/_colors.scss'
import './App.scss'

// Firebase
import { db } from './firebase/client'
import { getDoc, doc, collection, query, where, limit } from 'firebase/firestore'
import { useEffect } from 'react'

function App() {

  // Firebase
  // Filtro
  const itemsRefFilter = query(
    collection(db, 'items'),
    where('categoryId', '==', 'pantalones'),
    where('stock', '<', 10),
    limit(1) // Limita la cantidad de la respuesta
  )

  // Ejecuta la función
  useEffect(() => {
    // getItem()
  }, [])

  return (
    <div className='App'>
      <Router />
    </div>
  )
}

export default App
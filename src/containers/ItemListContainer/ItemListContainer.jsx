import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/client'
import ItemList from '../../components/ItemList/ItemList'

function ItemListContainer() {

  const [list, setList] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {

    // Firebase - Get filtered products or all products if params are not being used

    const itemsRef = categoryId
      ? query(collection(db, 'items'), where('categoryId', '==', categoryId))
      : collection(db, 'items')

    const getItems = async () => {
      const data = await getDocs(itemsRef)
      const dataFiltrada = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      setList(dataFiltrada)
    }
    getItems()

  }, [categoryId])

  return (
    <ItemList list={list} />
  )
}

export default ItemListContainer
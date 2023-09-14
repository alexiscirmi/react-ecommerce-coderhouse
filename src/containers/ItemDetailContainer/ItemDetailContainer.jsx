import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

function ItemDetailContainer() {

  const [detail, setDetail] = useState({})
  const { itemId } = useParams()

  useEffect(() => {

    // Firebase - Get a specific document
    const db = getFirestore()
    const itemRef = doc(db, 'items',
      itemId)
    getDoc(itemRef)
      .then(snapshot => {
        if (snapshot.exists()) {
          setDetail({ id: snapshot.id, ...snapshot.data() })
        }
      })

  }, [itemId])

  return (
    <ItemDetail detail={detail} />
  )
}

export default ItemDetailContainer
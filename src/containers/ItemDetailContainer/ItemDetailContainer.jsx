import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

function ItemDetailContainer() {

  const [detail, setDetail] = useState({})
  const params = useParams()

  useEffect(() => {

    // Firebase - Get a specific document
    const db = getFirestore()
    const itemRef = doc(db, 'items',
      params)
    getDoc(itemRef)
      .then(snapshot => {
        if (snapshot.exists()) {
          setDetail({ id: snapshot.id, ...snapshot.data() })
        }
      })

  }, [params])

  return (
    <ItemDetail detail={detail} />
  )
}

export default ItemDetailContainer
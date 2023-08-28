import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './_item-detail-container.scss';

function ItemDetailContainer() {

  const [detail, setDetail] = useState({});
  const params = useParams();

  useEffect(() => {
    const getDetail = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const items = await response.json();
      const filteredDetail = items.find((item) => item.id === parseInt(params.id));
      setDetail(filteredDetail);
    };

    getDetail();
  }, [params]);

  return (
    <ItemDetail detail={detail} />
  )
}

export default ItemDetailContainer;
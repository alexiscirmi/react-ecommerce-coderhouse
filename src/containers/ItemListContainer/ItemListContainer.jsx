import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './_item-list-container.scss';

function ItemListContainer() {

  const [list, setList] = useState([]);
  const params = useParams();

  const getItems = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const items = await response.json();
    const filteredItems = items.filter((item) => item.category === params.id);
    setList(filteredItems.length > 0 ? filteredItems : items);
  };

  useEffect(() => {
    getItems();
    // eslint-disable-next-line
  }, [params]);

  return (
    <div className='item-list-container container-fluid container-lg'>
      <div className='d-flex flex-row flex-wrap row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center'>

        {
          list.map((item) => (
            <div key={item.id} className='d-flex col justify-content-center my-4'>
              <div className='card'>
                <div className='mt-1 image-container'>
                  <img src={item.image} className='card-img-top' alt='...' />
                </div>
                <div className='card-body d-flex flex-column justify-content-between'>
                  <h5 className='card-title'>{item.title}</h5>
                  <div className='border-top'>
                    <p className='card-text fs-4 mt-2 mb-3'>$ {item.price.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    <div className='d-flex justify-content-between'>
                      <div className='btn btn-primary'>Ver descripción</div>
                      <button className='btn btn-dark'>-</button>
                      <span className='btn'>0</span>
                      <button className='btn btn-dark'>+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }

      </div>
    </div >
  );
}

export default ItemListContainer;
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './_item-list-container.scss';

function ItemListContainer({ greeting }) {

  // const [list, setList] = useState([]);
  // const params = useParams();

  // const getItems = async () => {
  //   const response = await fetch('https://fakestoreapi.com/products');
  //   const items = await response.json();
  //   const filteredItems = items.filter((item) => item.category === params.id);
  //   setList(items);
  // };

  // useEffect(getItems(), [params]);

  return (
    <div className='item-list-container container-fluid container-lg'>
      <div className='d-flex flex-row flex-wrap row-cols-1 row-cols-md-2 row-cols-lg-3'>

        <div className='d-flex col justify-content-center my-4'>
          <div className='card'>
            <div className='mt-1'>
              <img src='https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg' className='card-img-top' alt='...' />
            </div>
            <div className='card-body'>
              <h5 className='card-title'>Card title</h5>
              <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className='d-flex justify-content-between'>
                <a href='#' className='btn btn-primary'>Ver descripción</a>
                <button className='btn btn-primary'>-</button>
                <span className='btn'>0</span>
                <button className='btn btn-primary'>+</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div >
  );
}

export default ItemListContainer;
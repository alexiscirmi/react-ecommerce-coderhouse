import './_item-list-container.scss';

function ItemListContainer({ greeting }) {
  return (
    <div className='item-list-container container'>
      <p>{greeting}</p>
    </div>
  );
}

export default ItemListContainer;
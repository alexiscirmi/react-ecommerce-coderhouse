import './_item-detail.scss'

function ItemDetail({ detail }) {
  return (
    <main className='item-detail container-fluid container-lg'>
      <div className='d-flex flex-row mt-4'>

        <div className='col-6'>
          <img src={detail.image} alt={detail.title} className='border rounded' />
        </div>

        <div className='col-6'>
          <h1 className='text-end'>{detail.title}</h1>
          <h2 className='text-end fs-5'>Categoría: {detail.category}</h2>
        </div>

      </div>
    </main>
  );
}

export default ItemDetail;
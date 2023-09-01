import ItemCount from '../ItemCount/ItemCount'
import './_item-detail.scss'

function ItemDetail({ detail }) {

  return (
    <main className='item-detail container'>
      <div className='d-block row d-md-flex flex-md-row mt-4'>

        <div className='text-center col-md-6'>
          <img src={detail.image} alt={detail.title} className='border rounded item-image' />
        </div>

        <div className='text-center text-md-end balance col-md-6 mt-4 mt-md-0 mb-5'>
          <h1 className='fs-2'>{detail.title}</h1>
          <h2 className='fs-5 item-category'>{detail.category}</h2>
          <p>{detail.description}</p>
          <p className='fs-4 item-price'>$ {parseFloat(detail.price).toLocaleString("es-AR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
          <ItemCount />
        </div>

      </div>
    </main>
  )
}

export default ItemDetail
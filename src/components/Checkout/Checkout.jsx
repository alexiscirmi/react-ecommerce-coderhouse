import styles from './Checkout.module.scss'

function Checkout() {
  return (
    <div className={styles.checkout}>
      <h1 className='fs-4 mt-3'>Finalizar compra</h1>
      <form action='' className='mt-4'>

        <fieldset className='form-group d-flex flex-column justify-content-center gap-2 my-4'>
          <label htmlFor='nombre'>Nombre</label>
          <input className='form-control' type='text' id='nombre' />
        </fieldset>

        <fieldset className='form-group d-flex flex-column justify-content-center gap-2 my-4'>
          <label htmlFor='telefono'>Teléfono</label>
          <input className='form-control' type='tel' id='telefono' />
        </fieldset>

        <fieldset className='form-group d-flex flex-column justify-content-center gap-2 my-4'>
          <label htmlFor='email'>Email</label>
          <input className='form-control' type='email' id='email' />
        </fieldset>

        <div className='d-flex justify-content-center'>
          <button type='submit' className='btn btn-primary mt-4'>Realizar pedido</button>
        </div>

      </form>
    </div>
  );
}

export default Checkout;
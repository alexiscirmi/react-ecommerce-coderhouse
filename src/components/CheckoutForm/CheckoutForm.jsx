import ReCAPTCHA from 'react-google-recaptcha'
import styles from './CheckoutForm.module.scss'

function CheckoutForm({ handleName, handlePhone, handleEmail, handleCaptcha, sendOrder }) {

  return (
    <div className={`pb-5 ${styles.checkout}`}>
      <h1 className='fs-4 mt-3'>Finalizar compra</h1>
      <p className='mt-4 mx-4 text-center balance'>Complete el formulario con sus datos. Todos los campos son requeridos.</p>
      <form action='' className={`mt-1 ${styles.form}`}>

        <fieldset className='d-flex flex-column justify-content-center gap-2 my-3'>
          <label className='form-label' htmlFor='nombre'>Nombre</label>
          <input className='form-control' type='text' id='nombre' placeholder='Linus Torvalds' required onChange={handleName} />
        </fieldset>

        <fieldset className='d-flex flex-column justify-content-center gap-2 my-3'>
          <label className='form-label' htmlFor='telefono'>Teléfono (10 dígitos)</label>
          <input className='form-control' type='tel' id='telefono' minLength='10' maxLength='10' placeholder='1123456789' required onChange={handlePhone} />
        </fieldset>

        <fieldset className='d-flex flex-column justify-content-center gap-2 my-3'>
          <label className='form-label' htmlFor='email'>Email</label>
          <input className='form-control' type='email' id='email' placeholder='linustorvalds@outlook.com' required onChange={handleEmail} />
        </fieldset>

        <ReCAPTCHA sitekey="6Ledm1soAAAAAGwoRJq8JOw5VBLOZgV0NUcZzt4v" onChange={handleCaptcha} />

        <div className='d-flex justify-content-center'>
          <button type='submit' className='btn btn-primary mt-4' onClick={sendOrder}>Crear orden</button>
        </div>

      </form>
    </div>
  )
}

export default CheckoutForm
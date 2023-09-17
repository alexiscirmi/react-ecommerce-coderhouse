function Loader() {
  return (
    <div className='d-flex h-100 justify-content-center text-center align-items-center'>
      <div className='spinner-border text-primary' role='status'></div>
      <span className="ms-3">Cargando...</span>
    </div>
  );
}

export default Loader;
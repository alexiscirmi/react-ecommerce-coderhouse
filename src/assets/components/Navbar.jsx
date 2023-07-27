function Navbar() {
  return (
    <div>
      <header className="navbar navbar-expand-lg fixed-top mb-4 border-bottom">

        <nav className="container-fluid d-flex align-items-center justify-content-around">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <ul className="collapse navbar-collapse navbar-nav col-lg-4 order-2 order-lg-0 justify-content-center gap-4 gap-lg-0 my-3 my-lg-0" id="navbarToggler">
            <li className="nav-item"><a href="#" className="nav-link px-2 link-secondary">Inicio</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 link-secondary">Galería</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 link-secondary">Precios</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 link-secondary">Contacto</a></li>
          </ul>

          <div className="col-lg-4 text-center">
            <a href="#" className="navbar-brand d-inline-flex link-body-emphasis text-decoration-none py-0 mx-0">
              Marcotel
            </a>
          </div>

          <div className="col-lg-4 text-center">
            <button type="button" className="btn btn-outline-secondary">Ingresar</button>
          </div>

        </nav>

      </header>
    </div>
  );
}

export default Navbar;
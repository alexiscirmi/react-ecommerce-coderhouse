function Navbar() {
  return (
    <div>
      <header className="navbar navbar-expand-lg d-flex flex-wrap align-items-center justify-content-center justify-content-md-between mb-4 border-bottom">

        <nav className="container-fluid container-lg">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <ul className="collapse navbar-collapse navbar-nav col-4 mb-2 justify-content-center mb-md-0" id="navbarToggler">
            <li className="nav-item"><a href="#" className="nav-link px-2 link-secondary">Inicio</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 link-secondary">Galería</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 link-secondary">Precios</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 link-secondary">Contacto</a></li>
          </ul>

          <div className="col-4 mb-2 mb-md-0 text-center">
            <a href="#" className="navbar-brand d-inline-flex link-body-emphasis text-decoration-none py-0 mx-0">
              Marcotel
            </a>
          </div>

          <div className="col-4 text-end">
            <button type="button" className="btn btn-outline-secondary me-2">Entrar</button>
            <button type="button" className="btn btn-outline-secondary">Registrarse</button>
          </div>

        </nav>

      </header>
    </div>
  );
}

export default Navbar;
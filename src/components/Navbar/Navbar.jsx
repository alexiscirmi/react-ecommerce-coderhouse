import './_navbar.scss';
import CartWidget from "../CartWidget/CartWidget";

function Navbar() {
  return (
    <header className="navbar navbar-expand-md fixed-top border-bottom" data-bs-theme="dark">

      <nav className="container-fluid d-flex align-items-center justify-content-around">

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <ul className="collapse navbar-collapse navbar-nav col-md-4 order-2 order-md-0 justify-content-center gap-4 gap-md-0 my-3 my-md-0" id="navbarToggler">
          <li className="nav-item"><a href="#" className="nav-link px-3">Inicio</a></li>
          <li className="nav-item dropdown">
            <button className="btn btn-dark dropdown-toggle nav-link px-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Productos
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Todo</a></li>
              <li><a className="dropdown-item" href="#">Celulares</a></li>
              <li><a className="dropdown-item" href="#">Computadoras</a></li>
              <li><a className="dropdown-item" href="#">Tablets</a></li>
            </ul>
          </li>
        </ul>

        <div className="col-md-4 text-center">
          <a href="#" className="navbar-brand d-inline-flex text-decoration-none py-0 mx-0">
            TECNOW
          </a>
        </div>

        <div className="col-md-4 text-center d-flex justify-content-center">
          <CartWidget />
        </div>

      </nav>

    </header>
  );
}

export default Navbar;
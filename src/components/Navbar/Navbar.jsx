import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import './_navbar.scss';

function Navbar() {
  return (
    <header className='navbar navbar-expand-md fixed-top border-bottom  mb-5' data-bs-theme='dark'>

      <nav className='container-fluid d-flex align-items-center justify-content-around' id='navbar'>

        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarToggler' aria-controls='navbarToggler' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <ul className='collapse navbar-collapse navbar-nav col-md-4 order-2 order-md-0 justify-content-center gap-4 gap-md-0 my-3 my-md-0' id='navbarToggler'>
          <Link to='/' className='nav-item nav-link px-3'>Inicio</Link>

          <Link to='/category/electronics' className='d-md-none nav-item nav-link'>Electrónica</Link>
          <Link to='/category/jewelery' className='d-md-none nav-item nav-link'>Joyería</Link>
          <Link to="/category/men's clothing" className='d-md-none nav-item nav-link'>Ropa de hombre</Link>
          <Link to="/category/women's clothing" className='d-md-none nav-item nav-link'>Ropa de mujer</Link>

          <li className='nav-item dropdown d-none d-md-block'>
            <button className='btn btn-dark dropdown-toggle nav-link px-3' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
              Categorías
            </button>
            <div className='dropdown-menu'>
              <Link to='/category/electronics' className='dropdown-item'>Electrónica</Link>
              <Link to='/category/jewelery' className='dropdown-item'>Joyería</Link>
              <Link to="/category/men's clothing" className='dropdown-item'>Ropa de hombre</Link>
              <Link to="/category/women's clothing" className='dropdown-item'>Ropa de mujer</Link>
            </div>
          </li>

        </ul>

        <div className='col-md-4 text-center'>
          <Link to='/' className='navbar-brand d-inline-flex text-decoration-none py-0 mx-0'>TECNOW</Link>
        </div>

        <div className='col-md-4 text-center d-flex justify-content-center'>
          <CartWidget />
        </div>

      </nav>

    </header>
  );
};

export default Navbar;
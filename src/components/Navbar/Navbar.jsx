import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'

function Navbar() {
  return (
    <header className={`navbar navbar-expand-md fixed-top border-bottom mb-5 ${styles.navbar}`} data-bs-theme='dark'>

      <nav className='container-fluid d-flex align-items-center justify-content-around' id='navbar'>

        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarToggler' aria-controls='navbarToggler' aria-expanded='false' aria-label='Toggle navigation'>
          <span className={`navbar-toggler-icon ${styles.navbarTogglerIcon}`}></span>
        </button>

        <ul className='collapse navbar-collapse navbar-nav col-md-4 order-2 order-md-0 justify-content-center gap-4 gap-md-0 my-3 my-md-0' id='navbarToggler'>
          <Link to='/' className={`nav-item nav-link px-3 ${styles.navLink}`}>Inicio</Link>

          {/* Categories on smaller screens */}

          <Link to='/category/celulares' className={`d-md-none nav-item nav-link ${styles.navLink}`}>Celulares</Link>
          <Link to='/category/computadoras' className={`d-md-none nav-item nav-link ${styles.navLink}`}>Computadoras</Link>
          <Link to="/category/tablets" className={`d-md-none nav-item nav-link ${styles.navLink}`}>Tablets</Link>

          {/* Categories on bigger screens */}

          <li className='nav-item dropdown d-none d-md-block'>
            <button className={`btn btn-dark dropdown-toggle nav-link px-3 ${styles.navLink}`} type='button' data-bs-toggle='dropdown' aria-expanded='false'>
              Categorías
            </button>
            <div className='dropdown-menu'>
              <Link to='/category/celulares' className='dropdown-item'>Celulares</Link>
              <Link to='/category/computadoras' className='dropdown-item'>Computadoras</Link>
              <Link to="/category/tablets" className='dropdown-item'>Tablets</Link>
            </div>
          </li>

        </ul>

        <div className='col-md-4 text-center'>
          <Link to='/' className={`navbar-brand d-inline-flex text-decoration-none py-0 mx-0 ${styles.navbarBrand}`}>TECNOW</Link>
        </div>

        <div className='col-md-4 text-center d-flex justify-content-center'>
          <CartWidget />
        </div>

      </nav>

    </header>
  )
}

export default Navbar
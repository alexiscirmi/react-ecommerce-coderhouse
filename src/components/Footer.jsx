function Footer() {
  return (
    <footer className='footer container d-flex flex-wrap justify-content-center align-items-center py-3 border-top mb-3'>

      <div className='d-flex'>
        <p className='text-body-secondary mb-0 me-5'>
          <i className='bi bi-c-circle' />
          <a href='https://github.com/cirmialexis/coderhouse-react-project' target='_blank' className='nav-link-footer ps-1 text-body-secondary'>Alexis Cirmi</a>
        </p>
      </div>

      |

      <ul className='nav justify-content-end list-unstyled d-flex'>
        <li className='ms-5'><a className='text-body-secondary' href='#'>
          <i className='bi bi-facebook fs-4' />
        </a></li>

        <li className='ms-3'><a className='text-body-secondary' href='#'>
          <i className='bi bi-instagram fs-4' />
        </a></li>

        <li className='ms-3'><a className='text-body-secondary' href='#'>
          <i className='bi bi-whatsapp fs-4' />
        </a></li>
      </ul>

    </footer>
  );
}

export default Footer;
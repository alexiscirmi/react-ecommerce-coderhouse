function Footer() {
  return (
    <footer className="footer container d-flex flex-wrap justify-content-between align-items-center py-3 border-top">

      <div className="col-md-4 d-flex align-items-center">
        <a href="#" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">

        </a>

        <p className="mb-3 mb-md-0 text-body-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-c-circle" viewBox="0 0 16 16">
            <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512Z" />
          </svg>
          <a href="https://github.com/cirmialexis/coderhouse-react-project" target="_blank" className="nav-link-footer ps-1 text-body-secondary">Alexis Cirmi</a>
        </p>

      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3"><a className="text-body-secondary" href="#">
          <i className="bi bi-facebook" />
        </a></li>

        <li className="ms-3"><a className="text-body-secondary" href="#">
          <i className="bi bi-instagram" />
        </a></li>

        <li className="ms-3"><a className="text-body-secondary" href="#">
          <i className="bi bi-whatsapp" />
        </a></li>
      </ul>

    </footer>
  );
}

export default Footer;
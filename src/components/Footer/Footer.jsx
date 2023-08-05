import './_footer.scss';
import { CCircle } from "react-bootstrap-icons";
import { Facebook } from "react-bootstrap-icons";
import { Instagram } from "react-bootstrap-icons";
import { Whatsapp } from "react-bootstrap-icons";

function Footer() {
  return (
    <footer className='footer container d-flex flex-wrap justify-content-center align-items-center py-3 border-top mb-3'>

      <div className='d-flex'>
        <p className='text-body-secondary mb-0 me-5'>
          <CCircle className="ccircle" />
          <a href='https://github.com/cirmialexis/coderhouse-react-project' target='_blank' className='nav-link-footer ps-1 text-body-secondary'>Alexis Cirmi</a>
        </p>
      </div>

      |

      <ul className='nav justify-content-end list-unstyled d-flex'>
        <li className='ms-5'><a className='text-body-secondary' href='#'>
          <Facebook className="fs-4" />
        </a></li>

        <li className='ms-3'><a className='text-body-secondary' href='#'>
          <Instagram className='fs-4' />
        </a></li>

        <li className='ms-3'><a className='text-body-secondary' href='#'>
          <Whatsapp className='fs-4' />
        </a></li>
      </ul>

    </footer>
  );
}

export default Footer;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import '../App.css'

function FooterComponent() {
  return (
    <Navbar className='headerFooter' expand="lg">
      <Container className="d-flex justify-content-around">
        <Navbar.Collapse id="basic-navbar-nav" className=''>
          <Nav className="w-100 d-flex justify-content-end">
            <div className='d-flex flex-column'>
                <Nav.Link className='p-1' href="#link"><u>Contact Us</u></Nav.Link>
                <Nav.Link className='p-1' href="#home"><u>Socials?</u></Nav.Link>
                <Nav.Link className='p-1' href="#home"><u>Terms & Services</u></Nav.Link>
            </div>
            <div className='d-flex background- flex-column'>
                <Nav.Link className='p-1' href="#home"><u>FAQ's</u></Nav.Link>
                <Nav.Link className='p-1' href="#home"><u>About</u></Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default FooterComponent;
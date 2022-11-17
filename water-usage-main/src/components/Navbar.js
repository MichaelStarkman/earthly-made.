import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import '../App.css'

function NavbarComponent() {
  return (
    <Navbar className='headerFooter' expand="lg">
      <Container className="d-flex justify-content-around">
        <Navbar.Brand className='give-absolute' href="#home">earthly made.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className=''>
          <Nav className="w-100 d-flex justify-content-between">
            <div className='d-flex flex-row'>
                <Nav.Link className='p-3' href="#link"><u>Map</u></Nav.Link>
                <Nav.Link className='p-3' href="#home"><u>Nav Item</u></Nav.Link>
                <Nav.Link className='p-3' href="#home"><u>Nav Item</u></Nav.Link>
            </div>

            <div className='d-flex flex-row'>
                <Nav.Link className='p-3' href="#home"><u>Nav Item</u></Nav.Link>
                <Nav.Link className='p-3' href="#home"><u>Nav Item</u></Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
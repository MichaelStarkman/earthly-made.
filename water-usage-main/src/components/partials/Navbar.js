import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LinkContainer from 'react-router-bootstrap/LinkContainer'
import '../../App.css'

function NavbarComponent() {
  return (
        <Navbar className='headerFooter navbar-custom' expand="lg">
            <Container className="d-flex navBar justify-content-around">
                <LinkContainer to='/'>
                    <Navbar.Brand className='give-absolute divotDown link-text' href="#home">earthly made.</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className=''>
                <Nav className="w-100 d-flex justify-content-between">
                    <div className='d-flex flex-row'>
                        <LinkContainer to={'/brands'}>
                            <Nav.Link><u className='link-text'>Brands</u></Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={'/articles'}>
                            <Nav.Link><u className='link-text'>Articles</u></Nav.Link>
                        </LinkContainer>
                    </div>
                    <div className='d-flex flex-row'>
                        {/* <LinkContainer to={'/contact'}>
                            <Nav.Link><u className='link-text'>Contact Us</u></Nav.Link>
                        </LinkContainer> */}
                        <LinkContainer to={'/about'}>
                            <Nav.Link><u className='link-text'>About Us</u></Nav.Link>
                        </LinkContainer>
                    </div>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    
  );
}

export default NavbarComponent;
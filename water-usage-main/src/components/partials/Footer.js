import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LinkContainer from 'react-router-bootstrap/LinkContainer'
import '../../App.css'

function FooterComponent() {
  return (
    <Navbar className='headerFooter' expand="lg">
      <Container className="d-flex justify-content-around">
          <Nav className="w-100 d-flex justify-content-end">
            <div className='d-flex flex-column'>
              <LinkContainer to={'/contact'}>
                <Nav.Link className='p-1' href="#link"><u>Contact Us</u></Nav.Link>
              </LinkContainer>
              <LinkContainer to={'/socials'}>
                <Nav.Link className='p-1' href="#home"><u>Socials?</u></Nav.Link>
              </LinkContainer>
                {/* <Nav.Link className='p-1' href="#home"><u>Terms & Services</u></Nav.Link> */}
            </div>
            <div className='d-flex background- flex-column'>
                {/* <Nav.Link className='p-1' href="#home"><u>FAQ's</u></Nav.Link> */}
                <LinkContainer to={'/about'}>
                  <Nav.Link className='p-1' href="#home"><u>About Us</u></Nav.Link>
                </LinkContainer>
            </div>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default FooterComponent;
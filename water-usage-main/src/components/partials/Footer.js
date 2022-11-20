import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LinkContainer from 'react-router-bootstrap/LinkContainer'
import '../../App.css'
import Email from './Email';

function FooterComponent() {
  return (
    <Navbar className='headerFooter navbar-custom' expand="lg">
      <Container>
          <Nav className="w-100 ">
            <div className='d-flex justify-content-evenly w-100'>
              <p>earthly made.</p>
              <div>
                <Email />
              </div>
              <div className='d-flex'>
                <LinkContainer to={'/contact'}>
                  <Nav.Link className='p-1' ><u>Contact Us</u></Nav.Link>
                </LinkContainer>
                <LinkContainer to={'/socials'}>
                  <Nav.Link className='p-1' ><u>Socials?</u></Nav.Link>
                </LinkContainer>
                <LinkContainer to={'/about'}>
                  <Nav.Link className='p-1' ><u>About Us</u></Nav.Link>
                </LinkContainer>
              </div>
            </div>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default FooterComponent;
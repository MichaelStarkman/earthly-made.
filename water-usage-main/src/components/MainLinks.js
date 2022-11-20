import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import LinkContainer from 'react-router-bootstrap/LinkContainer'


import hand from '../assets/hand.png'
import girlOnRock from '../assets/girlOnRock.png'

const MainLinks = () => {
  return (
    <Container>
        <Row>
            <Col className='display-flex flex-direction'>
                <br></br>
                <h2 style={{ 
                    fontWeight: '600'
                }}>Introducing a down to earth experience</h2>
                <h4>Reduce | Recyce | Reuse</h4>
                <br></br>
            </Col>
        </Row>
        <Row style={{
            alignItems: 'center',
        }}>
            <Col md={4}>
                <img 
                    style={{
                        width: "20vw",
                        height: '50vh',
                    }}
                    src={hand} />
            </Col>
            <Col  md={{ span: 4, offset: 3 }}>
                <div style={{
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    flexDirection: 'column',
                }} >
                    
                    <h3  style={{ 
                    fontWeight: '600'
                    }}>Sustainable Articles</h3>
                    <p>Read up about all what's happening today and stay up to date with the environment</p>
                    <br></br>
                    <LinkContainer to={'/articles'}>
                        <Button variant="dark">Learn More</Button>
                    </LinkContainer>
                </div>
            </Col>
        </Row>
        <Row  style={{
            alignItems: 'center',
        }}>
            <Col  md={4}>
                <div  style={{
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}>
                    <h3  style={{ 
                    fontWeight: '600'
                    }}>New Sustainable Brands!!</h3>
                    <p>Check out our selection of new sustainable clothing brands that are transparent and positively impact our society and environment!</p>
                    <br></br>
                    <LinkContainer to={'/brands'}>
                        <Button variant="dark">Learn More</Button>                
                    </LinkContainer>
                </div>
            </Col>
            <Col md={{ span: 3, offset: 4 }}>
                <div>
                    <img 
                        style={{
                            width: "20vw",
                            height: '50vh',
                        }}
                        src={girlOnRock} />
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div style={{
                    marginTop: '5em',
                }}>
                    <h3  style={{ 
                    fontWeight: '600'
                    }}>We're in this together!</h3>
                    <p>Donate now to help local<br></br>
                    communities and natural habitats<br></br>
                    stay afloat</p>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default MainLinks
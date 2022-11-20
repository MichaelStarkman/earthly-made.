import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

const MainLinks = () => {
  return (
    <Container>
        <Row>
            <Col className='display-flex flex-direction'>
                <h2>Introducing a down to earth experience</h2>
                <h3>Reduce | Recyce | Reuse</h3>
            </Col>
        </Row>
        <Row style={{
            alignItems: 'center',
        }}>
            <Col md={4}>
                <img 
                    style={{
                        width: "22vw",
                        height: '44vh',
                    }}
                    src='https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80' />
            </Col>
            <Col  md={{ span: 6, offset: 2 }}>
                <div style={{
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    flexDirection: 'column',
                }} >
                    
                    <h3>Sustainable Articles</h3>
                    <h4>Read up about all what's happening today and stay up to date with the environment</h4>
                    <Button variant="dark">Learn More</Button>
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
                    <h3>New Sustainable Brands!!</h3>
                    <h4>Check out our currated list of sustainable brands that are making a difference!</h4>
                    <Button variant="dark">Learn More</Button>
                </div>
            </Col>
            <Col md={{ span: 6, offset: 2 }}>
                <div>
                    <img 
                        style={{
                            width: "22vw",
                            height: '44vh',
                        }}
                        src='https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80' />
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div style={{
                    marginTop: '5em',
                }}>
                    <h2>We're in this together!</h2>
                    <h4>Donate now to help local</h4>
                    <h4>communities and natural habitats</h4>
                    <h4>stay afloat</h4>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default MainLinks
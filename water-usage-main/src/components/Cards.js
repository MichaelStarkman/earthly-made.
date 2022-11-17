import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CardDeck() {
  return (
    <Container>
        {/* <Row>
            <Col>
                <div className='container'>
                    <h1 className=''>
                        Why Sustainability matters?
                    </h1>
                </div>
            </Col>
        </Row> */}
        <Row>
            <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Title>Water Conservation</Card.Title>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1495774539583-885e02cca8c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                    <Card.Body>
                        <Card.Text>
                        I love water. water is good. Water water water water. I love water. water is good. Water water water water. I love water. water is good. Water water water water. 
                        </Card.Text>
                        <Button variant="primary">Learn about Water</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Title>Recycling</Card.Title>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                <Card.Body>
                    <Card.Text>
                    Something about recycling, and how great it is, and everyone should do it. Recycle recycle Recycle oh yeah recycle. Need more text to make it even. 
                    </Card.Text>
                    <Button variant="primary">Recycle!!!</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Title>Energy</Card.Title>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                    <Card.Body>
                        <Card.Text>
                        And the world is made of energy
                        and the world is electricity
                        and the world is made of energy
                        and there's a light inside of you
                        and there's a light inside of me
                        </Card.Text>
                        <Button variant="primary">Energy Button</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    
  );
}

export default CardDeck;
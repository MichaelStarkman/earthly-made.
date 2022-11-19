import React from 'react';
import { Card, Carousel, Stack, Button, CarouselItem } from 'react-bootstrap';

const BrandsCarousel = () => {




  const stacks = [
    {
      key: 1,
      brands: [
        {_id: 1, text: "abc"},
        {_id: 2, text: "def"},
        {_id: 3, text: "ghi"},
      ]
    },
    {
      key: 2,
      brands: [
        {key: 1, _id: 4, text: "jkl"},
        {key: 2, _id: 5, text: "mno"},
        {key: 3, _id: 6, text: "pqr"},
      ]
    }
]

  return (
    <>
    <div>
      <h1 className='text-center fw-bold my-5'>
        New Brands
      </h1>
      <div className='bg-dark bg-opacity-25 container-fluid'>
        <Carousel style={{ height: 500 }}>
          {stacks.map((stack, index) => {
            return (

              <Carousel.Item style={{height: 500 }}>
              <Stack
                direction='horizontal'
                className='h-100 justify-content-center align-items-center'
                gap={3}
              >
              {stack.brands.map((brand, key) => {
                return (
                  <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>{brand.text}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                )
                
                })}
              </Stack>
            </Carousel.Item> 
            )
    
          })}
        </Carousel>
      </div>
    </div>
    </>
  )
}

export default BrandsCarousel
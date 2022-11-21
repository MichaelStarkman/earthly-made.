import Button from 'react-bootstrap/Button';
import React from 'react'
import '../App.css'


const NewHero = () => {
  return (
    <div className='hero-container'>
      <div className='hero-text-container'>
        <h1 className='hero-text-main'>earthly made.</h1>
        <h2 style={{
          color: 'white',
        }}>Find your next destination for all things sustainable fashion</h2>
      </div>
      <a href='#map'>
        <Button variant="dark"  style={{marginTop: '25vh', border: 'solid 1px white'}}>Get Started</Button>
      </a>

    </div>
  )
}

export default NewHero
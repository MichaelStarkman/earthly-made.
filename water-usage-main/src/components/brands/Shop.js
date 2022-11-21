import React from 'react'
import { Button } from 'react-bootstrap'
import '../../Brand.css'

const Shop = (props) => {
  return (
    <Button variant='dark' className='shopButton'><a target={'_blank'} rel='noreferrer' href={props.link}>Visit Site</a></Button>
  )
}

export default Shop
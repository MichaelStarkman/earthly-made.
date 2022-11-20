import React from 'react'
import '../../Brand.css'

const Shop = (props) => {
  return (
    <button className='shopButton' variant='primary'><a href={props.link}>Shop</a></button>
  )
}

export default Shop
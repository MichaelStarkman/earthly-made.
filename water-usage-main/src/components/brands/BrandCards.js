import React from 'react'

const BrandCards = (props) => {
  return (
    <div>
        <div>
            <div>
                <h1>
                    {props.brand.name}
                </h1>
            </div>
            <div>
                <div>
                    <p>Best For | {props.brand.best}</p>
                    <p>Ethics | {props.brand.ethics}</p>
                    <p>Size Range | {props.brand.sizes}</p>
                    <p>Price Range | {props.brand.price}</p>
                </div>
                <div>
                    <p><u>{props.brand.name}</u>, {props.brand.blurb}</p>
                </div>
            </div>
        </div>
        <div className='cardImg'>
            <img className='cardImg' src={`${props.brand.image}`} alt={`${props.brand.name}`} />
        </div>
    </div>
  )
}

export default BrandCards
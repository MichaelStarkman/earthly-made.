import React from 'react'
import '../../Brand.css'

const BrandCards = (props) => {
  return (
    <div className='brandCard container'>
        <div className='row'>
            <div className='col'>
                <div className='brandContainer'>
                    <h1>
                        {props.i}. {props.brand.name}
                    </h1>
                </div>
                <div className='brandCardAbout'>
                    <p>Best For | {props.brand.best} <br />
                    Ethics | {props.brand.ethics} <br />
                    Size Range | {props.brand.sizes} <br />
                    Price Range | {props.brand.price}</p>
                </div>
                <div className='brandCardBlurb'>
                    <p><u>{props.brand.name}</u>, {props.brand.blurb}</p>
                </div>
            </div>
            <div className='brandImgContainer col'>
                <img className='brandCardImage' src={`${props.brand.image}`} alt={`${props.brand.name}`} />
            </div>
        </div>
    </div>
  )
}

export default BrandCards
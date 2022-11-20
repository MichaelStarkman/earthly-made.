import React from 'react'
import '../../Brand.css'
import Shop from './Shop'

const BrandCards = (props) => {
  return (
    <div className={`brandCard container`}>
        <div className={`row  ${props.i % 2 ===0? 'right' : 'left'} `}>
            <div className='brandImgContainer col'>
                <img className='brandCardImage' src={`${props.brand.image}`} alt={`${props.brand.name}`} />
            </div>
            <div className='col'>
                <div className='brandContainer' >
                    <div>
                        <h1>
                            {props.brand.name}
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
                    <Shop link={props.link} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default BrandCards
import React from 'react'
import '../../Brand.css'
import Shop from './Shop'

const BrandCards = (props) => {
  return (
    <div className='container'>
        <div className={`row bound ${props.i % 2 ===0? 'left' : 'right'} `}>
            <div className='brandImgContainer col-md'>
                <img className='brandCardImage' src={`${Object.values(props.brand.image)}`} alt={`${props.brand.name}`} />
            </div>
            <div className='col-md textBlock'>
                <div className='brandContainer' >
                    <div className='nameContainer'>
                        <h1>
                            {props.brand.name}
                        </h1>
                    </div>
                    <div className='brandCardAbout'>
                        <p>Best For | {props.brand.best} <br />
                        Ethics | {props.brand.ethics} <br />
                        Price Range | {props.brand.price}</p>
                    </div>
                    <div className='brandCardBlurb'>
                        <p><u>{props.brand.name}</u>, {props.brand.blurb}</p>
                    </div>
                    <div id='shop'>
                        <Shop link={props.link} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BrandCards
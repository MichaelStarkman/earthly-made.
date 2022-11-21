import React from 'react'
import farol from '../../assets/farol-106-qnEwPaRu9Es-unsplash.jpg'
import secondFarol from '../../assets/Screenshot 2022-11-20 at 11.01.22 AM.png'

import '../../Brand.css'

const Opening = () => {
  return (
    <div className='gridContainer'>

      <div className='opening'>
        <div >
          <img className='openImg' src={farol} alt='farol standing' />
        </div>
        <h2 className='opener oTop'>
          Sustainable
        </h2>
        <h2 className='opener oBot'>
          Brands
        </h2>
          <h3 className='oBlurb'>
          Who makes the clothes we wear every day and in what kind of conditions? Our spending—and non-spending—can help make a positive difference for the people and resources involved in the making of our clothing. Each fashion brand has made it a central part of its mission to approach garment production in an ethical and transparent way that considers both people and the planet. Many of these ethical clothing brands come with third-party sustainable and ethical certifications as well.
          </h3>
          <div>
          <img className='openImg' src={secondFarol} alt='farol standing' />
        </div>
      </div>
    </div>
  )
}

export default Opening
import React from 'react'
import farol from '../../assets/farol-106-qnEwPaRu9Es-unsplash.jpg'
import secondFarol from '../../assets/Screenshot 2022-11-20 at 11.01.22 AM.png'

import '../../Brand.css'

const Opening = () => {
  return (
      <div className='opening'>
        <div className='openHead'>
          <span>Sustainable</span>
          <span className='oh2'>Brands</span>
        </div>
        <h3 className='oBlurb'>
          Who makes the clothes we wear every day and in what kind of conditions? Our spending—and non-spending—can help make a positive difference for the people and resources involved in the making of our clothing. Each fashion brand has made it a central part of its mission to approach garment production in an ethical and transparent way that considers both people and the planet. Many of these ethical clothing brands come with third-party sustainable and ethical certifications as well.
        </h3>
        <img className='openImg openImg1' src={farol} alt='farol standing' />
        
        <img className='openImg2 openImg' src={secondFarol} alt='farol standing' />
          
        
      </div>
  )
}

export default Opening
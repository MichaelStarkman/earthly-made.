import React from 'react'
import '../../Brand.css'

// filter handle function to put aff/sus/inc at top of list.


const FilterBar = (props) => {

  

  return (
    <div className='filterBar'>
        <button className={`${props.active === 0? 'active' : ''}`} onClick={props.trending}>What's Trending</button>
        <button className={`${props.active === 1? 'active' : ''}`} value={1} onClick={props.affordable}>Best Affordable Brands</button>
        <button className={`${props.active === 2? 'active' : ''}`} value={2} onClick={props.best}>Best Basics</button>
    </div>
  )
}

export default FilterBar
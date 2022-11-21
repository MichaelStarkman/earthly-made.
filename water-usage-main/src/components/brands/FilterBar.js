import React from 'react'
import '../../Brand.css'

// filter handle function to put aff/sus/inc at top of list.


const FilterBar = (props) => {
  return (
    <div className='filterBar'>
        <button onClick={props.trending}>What's Trending</button>
        <button onClick={props.affordable}>Best Affordable Brands</button>
        <button onClick={props.best}>Best Basics</button>
    </div>
  )
}

export default FilterBar
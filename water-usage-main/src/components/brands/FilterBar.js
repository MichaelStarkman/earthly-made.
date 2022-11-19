import React from 'react'
import '../../Brand.css'

// filter handle function to put aff/sus/inc at top of list.


const FilterBar = () => {
  return (
    <div className='filterBar'>
        <button>Most Affordable</button>
        <button>Most Sustainable</button>
        <button>Most Inclusive</button>
    </div>
  )
}

export default FilterBar
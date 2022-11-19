import React from 'react'
import BrandCards from './BrandCards'
import CallToAction from './CallToAction'
import FilterBar from './FilterBar'
import Opening from './Opening'
import Shop from './Shop'

const testBrands = [

  {
    name: 'Patagonia',
    best: 'Fair trade outdoor clothing',
    ethics: 'Certified B Corp, Fair Trade Certified, organic cotton & recycled materials, environmental sustainability initiatives, secondhand shop',
    sizes: 'XXS–2XL; up to US 22',
    price: '$$',
    blurb: 'one of the earliest defenders of environmental ethics in the industry, was also one of the first to use recycled materials and switch to organic cotton. Patagonia continues to expand its commitment to labor ethics and works with US factories as often as it can, including in Texas and North Carolina. We admire Patagonia for the positive impact its fair trade factories have worldwide, its secondhand Worn Wear collection, and sustainable apparel for all.',
    image: 'https://1000logos.net/wp-content/uploads/2022/08/Patagonia-Logo.png',
    link: 'https://www.patagonia.com/'
  
  }, {
    name: 'Patagonia',
    best: 'Fair trade outdoor clothing',
    ethics: 'Certified B Corp, Fair Trade Certified, organic cotton & recycled materials, environmental sustainability initiatives, secondhand shop',
    sizes: 'XXS–2XL; up to US 22',
    price: '$$',
    blurb: 'one of the earliest defenders of environmental ethics in the industry, was also one of the first to use recycled materials and switch to organic cotton. Patagonia continues to expand its commitment to labor ethics and works with US factories as often as it can, including in Texas and North Carolina. We admire Patagonia for the positive impact its fair trade factories have worldwide, its secondhand Worn Wear collection, and sustainable apparel for all.',
    image: 'https://1000logos.net/wp-content/uploads/2022/08/Patagonia-Logo.png',
    link: 'https://www.patagonia.com/'
  
  }, {
    name: 'Patagonia',
    best: 'Fair trade outdoor clothing',
    ethics: 'Certified B Corp, Fair Trade Certified, organic cotton & recycled materials, environmental sustainability initiatives, secondhand shop',
    sizes: 'XXS–2XL; up to US 22',
    price: '$$',
    blurb: 'one of the earliest defenders of environmental ethics in the industry, was also one of the first to use recycled materials and switch to organic cotton. Patagonia continues to expand its commitment to labor ethics and works with US factories as often as it can, including in Texas and North Carolina. We admire Patagonia for the positive impact its fair trade factories have worldwide, its secondhand Worn Wear collection, and sustainable apparel for all.',
    image: 'https://1000logos.net/wp-content/uploads/2022/08/Patagonia-Logo.png',
    link: 'https://www.patagonia.com/'
  
  }, {
    name: 'Patagonia',
    best: 'Fair trade outdoor clothing',
    ethics: 'Certified B Corp, Fair Trade Certified, organic cotton & recycled materials, environmental sustainability initiatives, secondhand shop',
    sizes: 'XXS–2XL; up to US 22',
    price: '$$',
    blurb: 'one of the earliest defenders of environmental ethics in the industry, was also one of the first to use recycled materials and switch to organic cotton. Patagonia continues to expand its commitment to labor ethics and works with US factories as often as it can, including in Texas and North Carolina. We admire Patagonia for the positive impact its fair trade factories have worldwide, its secondhand Worn Wear collection, and sustainable apparel for all.',
    image: 'https://1000logos.net/wp-content/uploads/2022/08/Patagonia-Logo.png',
    link: 'https://www.patagonia.com/'
  
  },

]

const cards = testBrands.map((brand, i) => {
  return (
    <div key={`${brand.name}${i}`}>
      <BrandCards brand={brand} />
      <Shop link={brand.link} />
    </div>
  )
})


const Brands = () => {
  return (
    <div>
      <Opening />
      <CallToAction />
      <FilterBar />
      {cards}
    </div>
  )
}

export default Brands
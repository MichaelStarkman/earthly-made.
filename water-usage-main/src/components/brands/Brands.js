import React from 'react'
import BrandCards from './BrandCards'
import CallToAction from './CallToAction'
import FilterBar from './FilterBar'
import Opening from './Opening'
import Shop from './Shop'
import '../../Brand.css'

// const trending = [
//   {
//     name: '',
//     best: '',
//     ethics: '',
//     sizes:  '',
//     price: '',
//     blurb: '',
//     image: '',
//     link: '',
//   },
// ]

const affordable = [
  {
    name: 'Pact',
    best: 'Fair trade organic cotton basics',
    ethics: 'Fair Trade Certified, GOTS certified organic cotton',
    sizes:  'XS–2XL; up to US 20',
    price: '$–$$',
    blurb: 'Pact is pretty obsessed with making super-soft sustainable clothes for kids and adults that also make the world a better place.',
    image: '',
    link: '',
  },
  {
    name: 'Made Trade',
    best: 'Sustainable and fair trade essentials, dresses & loungewear',
    ethics: 'GOTS certified organic cotton, Fair Trade Certified, sustainable fabrics, Made in the USA, Climate Neutral Certified, ethical supply chains, supporting heritage techniques, woman-owned',
    sizes:  null,
    price: 'Women’s tees starting at $38.',
    blurb: 'Made Trade is your one-stop shop for beautifully designed sustainable clothing and accessories. We love that Made Trade’s team verifies and vets every single apparel brand for equity, sustainability, and transparency—so we can browse affordable and ethical clothing options with ease. ',
    image: '',
    link: '',
  },
  {
    name: 'Kotn',
    best: 'Loungewear',
    ethics: 'Certified B Corp, BCI certified organic cotton, safe & fair labor standards, plastic-free packaging, OEKO-TEX certified nontoxic dyes, gives back to Egyptian communities',
    sizes:  null,
    price: 'Women’s tees starting at $30',
    blurb: 'Known for its soft and remarkably breathable Egyptian cotton apparel, Kotn makes some of our favorite wardrobe staples in a fair and safe environment. Working directly with farmers, the brand pays fair prices for cotton and assists suppliers in making the switch to organic. ',
    image: '',
    link: '',
  },
  {
    name: 'Vetta',
    best: 'Chic, versatile capsules',
    ethics: 'Deadstock materials, GOTS certified organic fabrics, ethical production practices, recycled packaging',
    sizes:  null,
    price: 'Women’s tees starting at $49',
    blurb: "The California-based brand creates ready-to-buy mini wardrobes made up of five versatile pieces that can be mixed and matched to create a month's worth of outfits. VETTA is committed to using sustainable fabrics for its pieces—like linen, recycled polyester, and Tencel—and crafting them in responsible factories.",
    image: '',
    link: '',
  }
]

const best = [
  {
    name: '',
    best: '',
    ethics: '',
    sizes:  '',
    price: '',
    blurb: '',
    image: '',
    link: '',
  },
  {
    name: '',
    best: '',
    ethics: '',
    sizes:  '',
    price: '',
    blurb: '',
    image: '',
    link: '',
  },
  {
    name: '',
    best: '',
    ethics: '',
    sizes:  '',
    price: '',
    blurb: '',
    image: '',
    link: '',
  },
  {
    name: '',
    best: '',
    ethics: '',
    sizes:  '',
    price: '',
    blurb: '',
    image: '',
    link: '',
  },

]

const trending = [
  {
    name: 'Girlfriend Collective',
    best: 'Fair trade organic cotton basics',
    ethics: 'Fair Trade Certified, GOTS certified organic cotton',
    sizes:  'XS–2XL; up to US 20',
    price: '$–$$',
    blurb: 'Pact is pretty obsessed with making super-soft sustainable clothes for kids and adults that also make the world a better place.',
    image: '',
    link: '',
  },
  {
    name: 'Stella McCartney',
    best: 'Fair trade organic cotton basics',
    ethics: 'Fair Trade Certified, GOTS certified organic cotton',
    sizes:  'XS–2XL; up to US 20',
    price: '$–$$',
    blurb: 'Pact is pretty obsessed with making super-soft sustainable clothes for kids and adults that also make the world a better place.',
    image: '',
    link: '',
  },
  {
    name: 'Whimsy and Row',
    best: '',
    ethics: '',
    sizes:  '',
    price: '',
    blurb: '',
    image: '',
    link: '',
  },
  {
    name: '',
    best: '',
    ethics: '',
    sizes:  '',
    price: '',
    blurb: '',
    image: '',
    link: '',
  },
]

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
    <div className='fullCard' key={`${brand.name}${i}`}>
      <BrandCards i={i + 1} brand={brand} link={brand.link}/>
    </div>
  )
})


const Brands = () => {
  return (
    <div className='brandPage'>
      <div className='opening'>
          <Opening />
      </div>
      <div className='content'>
        <CallToAction />
        <FilterBar />
        {cards}
      </div>
    </div>
  )
}

export default Brands
import React, { useState } from 'react'
import BrandCards from './BrandCards'
import CallToAction from './CallToAction'
import FilterBar from './FilterBar'
import Opening from './Opening'
import '../../Brand.css'

// afford photos
import tentreeMan from '../../assets/Screenshot 2022-11-20 at 11.42.07 AM.png'
import MadeTradeWoman from '../../assets/Screenshot 2022-11-20 at 10.29.24 AM.png'
import allbirdsMan from '../../assets/Screenshot 2022-11-20 at 11.25.55 AM.png'
import ableWoman from '../../assets/Screenshot 2022-11-20 at 11.40.42 AM.png'

// trending photos
import girlfriendCollectiveGirl from '../../assets/Screenshot 2022-11-20 at 11.49.54 AM.png'
import outerknownMan from '../../assets/Screenshot 2022-11-20 at 11.29.50 AM.png'
import stellaMccartneyGal from '../../assets/Screenshot 2022-11-20 at 11.48.57 AM.png'
import eileenfisherWoman from '../../assets/Screenshot 2022-11-20 at 11.48.08 AM.png'

// best photos
import whiteMan from '../../assets/Screenshot 2022-11-20 at 11.25.41 AM.png'
import kotnChick from '../../assets/Screenshot 2022-11-20 at 10.28.46 AM.png'
import vettaGal from '../../assets/Screenshot 2022-11-20 at 10.28.54 AM.png'
import tradlandsLass from '../../assets/Screenshot 2022-11-20 at 12.12.58 PM.png'

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
    name: 'Tentree',
    best: 'Cozy, casual essentials',
    ethics: 'Certified B Corp, Climate Neutral Certified; WRAP, BSCI, SA8000, or Fair Trade certified ethical manufacturing',
    price: '$–$$',
    blurb: 'Tentree’s commitment to give back, 10 trees are planted for every item purchased—that’s 73+ million to date (with a goal of 1 billion by 2030)! Designed in Canada',
    image: {tentreeMan},
    link: 'https://www.tentree.com/',
  },
  {
    name: 'Made Trade',
    best: 'Sustainable and fair trade essentials, dresses & loungewear',
    ethics: 'GOTS certified organic cotton, Fair Trade Certified, sustainable fabrics, Made in the USA, Climate Neutral Certified, ethical supply chains, supporting heritage techniques, woman-owned',
    price: 'Women’s tees starting at $38.',
    blurb: 'Made Trade is your one-stop shop for beautifully designed sustainable clothing and accessories. We love that Made Trade’s team verifies and vets every single apparel brand for equity, sustainability, and transparency—so we can browse affordable and ethical clothing options with ease. ',
    image: {MadeTradeWoman},
    link: 'https://www.madetrade.com/',
  },
  {
    name: 'Allbirds',
    best: 'Sneakers & men’s activewear',
    ethics: 'Certified B Corp, eco-friendly & recycled materials, ethically made, carbon-neutral',
    price: '$58 (sports bra)–$170 (running shoes)',
    blurb: 'Using natural materials like wood pulp-derived Tencel Lyocell and responsibly sourced Merino wool and crab shells, Allbirds’ tees, sweaters, and outerwear are soft to the touch, cozy as can be, and meant to last. The B Corp is also carbon-neutral and uses recycled packaging. Plus, in partnership with Soles4Souls. ',
    image: {allbirdsMan},
    link: 'https://www.allbirds.com/',
  },
  {
    name: 'ABLE',
    best: 'Feminist brand supporting women',
    ethics: 'Certified B Corp, female artisan-made, fair labor practices & wages',
    price: '$–$$$',
    blurb: ['ABLE believes that to end cyclical poverty, you must create economic opportunities for people, especially women, to provide for themselves.', <br />,

    'ABLE offers free virtual styling, a try-before-you-buy program, and free returns, and free exchanges for any size fluctuations within a year.'],
    image: {ableWoman},
    link: 'https://www.ableclothing.com/',
  },
  
  
]

const best = [
  {
    name: 'Pact',
    best: 'Socks, tees, hoodies, boxers',
    ethics: 'Men’s basics, bottoms, outerwear',
    sizes:  'S-XL',
    price: '$14 (socks)–$90 (hoodie)',
    blurb: 'Pact is a sustainable apparel brand born out of Boulder, Colorado specializing in quality basics, all of which are made ethically in Fair Trade Certified factories with 100 percent organic cotton.',
    image: {whiteMan},
    link: 'https://wearpact.com',
  },
  {
    name: 'Kotn',
    best: 'Loungewear',
    ethics: 'Certified B Corp, BCI certified organic cotton, safe & fair labor standards, plastic-free packaging, OEKO-TEX certified nontoxic dyes, gives back to Egyptian communities',
    price: 'Women’s tees starting at $30',
    blurb: 'Known for its soft and remarkably breathable Egyptian cotton apparel, Kotn makes some of our favorite wardrobe staples in a fair and safe environment. Working directly with farmers, the brand pays fair prices for cotton and assists suppliers in making the switch to organic. ',
    image: {kotnChick},
    link: 'https://www.kotn.com/',
  },
  {
    name: 'Vetta',
    best: 'Chic, versatile capsules',
    ethics: 'Deadstock materials, GOTS certified organic fabrics, ethical production practices, recycled packaging',
    price: 'Women’s tees starting at $49',
    blurb: "The California-based brand creates ready-to-buy mini wardrobes made up of five versatile pieces that can be mixed and matched to create a month's worth of outfits. VETTA is committed to using sustainable fabrics for its pieces—like linen, recycled polyester, and Tencel—and crafting them in responsible factories.",
    image: {vettaGal},
    link: 'https://www.vettacapsule.com/',
  },
  
  {
    name: 'Tradlands',
    best: 'Cardigans & dresses',
    ethics: 'Ethical production, made in small-batches, secondhand shop, natural & deadstock materials, inclusive sizing',
    price: '$$–$$$$',
    blurb: ['Tradlands was created from a simple idea: to make high-quality, sustainable essentials for women, inspired by classic menswear.', <br />,

    'Tradlands also produces in small batches with ethical facilities, deadstock excess fabrics, and independent artisans to produce less waste.'],
    image: {tradlandsLass},
    link: "https://tradlands.com/",
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
    image: {girlfriendCollectiveGirl},
    link: 'https://girlfriend.com',
  },
  {
    name: 'Outerknown',
    best: 'Flannels, hoodies, swim trunks',
    ethics: 'Fair Trade Certified, GOTS certified organic cotton',
    price: '$48 (tee)–$328 (jacket)',
    blurb: 'Making garments in Peru, Mexico, and China, the brand is committed to the Fair Labor guidelines, building partnerships with suppliers worldwide, and taking every part of the supply chain into account when it comes to its environmental footprint.',
    image: {outerknownMan},
    link: 'https://www.outerknown.com/',
  },
  {
    name: 'Stella McCartney',
    best: 'Ready-to-wear fashion for all genders & ages, swimwear, sunglasses & bags',
    ethics: 'Cruelty-free—no fur or leather, re-engineered cashmere & ethically sourced wool, organic cotton & recycled textiles, 100 percent PVC-free, sustainable packaging',
    price: '$$-$$$',
    blurb: 'Stella McCartney continues to set the bar high for social and environmental sustainability in the fashion industry, Stella McCartney regularly conducts audits and measures impact, too. A member of the Ethical Trading Initiative as well.',
    image: {stellaMccartneyGal},
    link: 'https://www.stellamccartney.com/',
  },
  {
    name: 'Eileen Fisher',
    best: 'Inclusive & petite sizes for women, minimalist staples',
    ethics: 'Organic, recycled, & sustainable garments, natural dyes, secondhand shop',
    price: '$–$$',
    blurb: 'EILEEN FISHER brand is a certified B Corp with several sustainable initiatives like secondhand shops called Renew and Waste No More. The team also collaborates with environmental conservation orgs, supports artisans, and empowers women through the Eileen Fisher Leadership Institute.',
    image: {eileenfisherWoman},
    link: 'https://www.eileenfisher.com/',
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

const Brands = () => {
  
  
  const [set, setSet] = useState(affordable)

  const handleSetAffordable = () => {
    setSet(affordable)
  }
  
  const handleSetBest = () => {
    setSet(best)
  }
  
  const handleSetTrending = () => {
    setSet(trending)
  }

  const cards = set.map((brand, i) => {
    return (
      <div className='fullCard' key={`${brand.name}${i}`}>
        <BrandCards i={i + 1} brand={brand} link={brand.link}/>
      </div>
    )
  })


  return (
    <div className='brandPage'>
      <div className='opening'>
          <Opening />
      </div>
      <div className=''>
        <FilterBar best={handleSetBest} affordable={handleSetAffordable} trending={handleSetTrending} />
        {cards}
      </div>
      <div className='spacer'>

      </div>
    </div>
  )
}

export default Brands
import React from "react"
import { useState, useEffect, useRef } from "react"

import ArticleCarouselItem from "./ArticleCarouselItem"

const ArticleCarousel = (props) => {
	// set useState
	const [articles, setArticles] = useState([...props.articles])
	const [category] = useState(props.category)
	const [numItems, setNumItems] = useState(Math.round(props.articles.length / 3))
	const [carouselItems, setCarouselItems] = useState([])

	const genItems = () => {
		let itemProp = {}
		let itemInd = 1
		let artInd = 0
		let artArr = []

		// want Object{index:itemInd, articles:[artArr]}
		// add itemInd to Object
		// put 3 articles into artArr
		// put artArr into Object
		while (itemInd <= numItems) {
			// add itemInd to itemProp{index:{itemInd}}
			itemProp["index"] = itemInd - 1

			// add next three articles to artArr
			while (artInd < itemInd * 3 || artInd == 0) {
				if (articles[artInd]) {
					// console.log(` .  Adding articles[${artInd}]`);
					artArr.push(articles[artInd])
				} 

				artInd ++
			}

			// add artArr to the itemProp object
			itemProp[articles] = [...artArr]

			// add itemProp to carouselItems
			setCarouselItems([...carouselItems, itemProp])

			// clear local variabls after use
			artArr = []
			itemProp = {}
			// increment itemInd for next loop
			itemInd ++
		}
	}

	useEffect(() => {
		genItems()
	}, [])

	return (
		<>
			<div id={`carousel-category-${category}`} class="carousel slide" data-bs-ride="false" style={{height: 535 }}>

				<div class="carousel-inner" >
					{carouselItems.map((item) => {
						console.log(item);
						return (
							<div key={carouselItems.indexOf(item)}>
								<ArticleCarouselItem index={item.index} articles={item.articles}/>
							</div>
						)
					})}
				</div>

				<button class="carousel-control-prev" type="button" data-bs-target={`#carousel-category-${category}`} data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target={`#carousel-category-${category}`} data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>

			</div>
		</>
	)
}

export default ArticleCarousel
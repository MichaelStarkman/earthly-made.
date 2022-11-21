import React from "react"
import { useState, useEffect } from "react"

import ArticleCarouselItem from "./ArticleCarouselItem"

const ArticleCarousel = (props) => {

	const [articles, setArticles] = useState([...props.articles])
	const [category] = useState(props.category)
	const [numItems, setNumItems] = useState()
	const [carouselItems, setCarouselItems] = useState([])

	const generateCarouselItems = () => {
		let ni = 0
		let itemProps = {}
		let arr = []
		while (ni < numItems) {
			
			setCarouselItems([...carouselItems, ni])
			console.log(`created <CarouselItem> #${ni}`);

			ni ++
		}
	}

	useEffect(() => {
		setArticles([...props.articles])
		console.log(`${props.category} Carousel`);
		console.log(` There are ${articles.length} articles in state`);
		console.log(`There are ${carouselItems.length} <CarouselItems> created`);
		console.log(`Please create ${Math.round(articles.length/3)} <CarouselItems>`);
		setNumItems(Math.round(articles.length / 3))
		generateCarouselItems()
		
	}, [])

	return (
		<>
			{ !carouselItems.length ? generateCarouselItems() : null }
			<div id={`carousel-category-${category}`} class="carousel slide" data-bs-ride="false" style={{height: 535 }}>
				<div class="carousel-inner" >
					<ArticleCarouselItem index={0} article={props.articles[0]}/>
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
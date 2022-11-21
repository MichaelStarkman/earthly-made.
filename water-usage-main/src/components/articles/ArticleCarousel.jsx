import React from "react"
import { useState, useEffect } from "react"

import ArticleCarouselItem from "./ArticleCarouselItem"

const ArticleCarousel = (props) => {

	const [articles, setArticles] = useState([...props.articles])
	const [category] = useState(props.category)
	const [carouselItems, setCaroItems] = useState([])

	const generateCarouselItems = () => {
		let itemNum = 0
		let arts = []
		let itemProps = {}
		let id = 0
		while (itemNum < props.numItems) {
			console.log(`Created CarouselItem #${itemNum}`);
			while (id < itemNum * 3) {
				arts.push(id)
				id++
			}
			console.log(arts);
			// console.log(`  props {num:${itemNum}, articles:[${id}]} `);
			// console.log(caroItems[itemNum]);
			setCaroItems([...carouselItems, {num: itemNum, articles:arts}])
			arts = []
			itemProps = {}
			itemNum ++
		}

	}

	useEffect(() => {
		setArticles([...props.articles])
		console.log(`create ${Math.floor(articles.length)} CarouselItems`);
		generateCarouselItems()
	}, [])

	return (
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
	)
}

export default ArticleCarousel
import React from "react"
import { useState } from "react"
import { useEffect } from "react"

import ArticleCarouselIndicator from "./ArticleCarouselIndicator"
import ArticleCarouselItem from "./ArticleCarouselItem"

const ArticleCarousel = (props) => {

	const [articles] = useState([...props.articles])
	const [category] = useState(props.category)

	const [caroItems, setCaroItems] = useState([])

	const generateCarouselItems = () => {
		let itemNum = articles % 3
		let articleArr = []
		let activeTag = false
		for (let i = 0; i < itemNum; i++) {
			articleArr = []
			articleArr.push(articles[i * 3])
			articleArr.push(articles[i * 3 + 1])
			articleArr.push(articles[i * 3 + 2])
			console.log(articleArr);
			setCaroItems([...caroItems])
		}
	}

	useEffect(() => {
		generateCarouselItems()
	}, [])

	return (
		<div id={`carousel-category-${category}`} class="carousel slide" data-bs-ride="false" style={{height: 535 }}>
			<div class="carousel-inner" >
				{props.articles.map((article) => {
					return <ArticleCarouselItem index={props.articles.indexOf(article)} article={article}/>
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
	)
}

export default ArticleCarousel
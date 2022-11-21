import React from "react"
import { useState } from "react"

import ArticleCarouselIndicator from "./ArticleCarouselIndicator"
import ArticleCarouselItem from "./ArticleCarouselItem"

const ArticleCarousel = (props) => {

	const addCarouselItems = () => {
		let index = 0
		props.articles.map((article) => {
			index = props.article.indexOf(article)
			return (
				<ArticleCarouselItem index={index} image={article.iamge} title={article.title} summary={article.summary}/>
			)
		})
	}


	return (
		<div id="carousel-ArticlePage" class="carousel slide" data-bs-ride="false" style={{height: 535 }}>
			<div class="carousel-inner" >
				{props.articles.map((article) => {
					return <ArticleCarouselItem index={props.articles.indexOf(article)} article={article}/>
				})}
			</div>
			<button class="carousel-control-prev" type="button" data-bs-target="#carousel-ArticlePage" data-bs-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Previous</span>
			</button>
			<button class="carousel-control-next" type="button" data-bs-target="#carousel-ArticlePage" data-bs-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Next</span>
			</button>
		</div>
	)
}

export default ArticleCarousel
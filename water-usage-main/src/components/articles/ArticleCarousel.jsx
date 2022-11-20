import React from "react"

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
		<div id="carousel-ArticlePage" class="carousel slide" data-bs-ride="false">
			carousel goes here
			<div class="carousel-indicators" >
				{/* map articles to create carousel-indicator with appropriate tags */}
				{props.articles.map((article) => {
					return(
						<ArticleCarouselIndicator index={props.articles.indexOf(article)} ariaLabel={`Slide ${props.articles.indexOf(article) + 1}`} />
					)
				})}
			</div>
			<div class="carousel-inner" >
				{props.articles.map((article) => {
					return <ArticleCarouselItem index={props.articles.indexOf(article)} article={article}/>
				})}
			</div>
			<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Previous</span>
			</button>
			<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Next</span>
			</button>
		</div>
	)
}

export default ArticleCarousel
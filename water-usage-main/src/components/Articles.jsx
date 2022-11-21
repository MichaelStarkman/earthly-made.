import React from "react"
import { useState } from "react"
import { useEffect } from "react"

import ArticlePageTitle from "./articles/ArticlePageTitle.jsx"
import FeaturedArticles from "./articles/FeaturedArticles.jsx"
import ArticleCarousel from "./articles/ArticleCarousel.jsx"

// this is the array of articles
import ArticleIndex from "./articles/ArticleIndex.js"

// the first three articles in the array will be the featured articles
// const featuredArticles = {
// 	primary: ArticleIndex[0],
// 	rightTop: ArticleIndex[1],
// 	rightBottom: ArticleIndex[2]
// }


const Articles = () => {

	const [allArticles, setAllArticles] = useState([...ArticleIndex])
	const [waterArts, setWaterArts] = useState([]);
	const [energyArts, setEnergyArts] = useState([]);
	const [recycleArts, setRecycleArts] = useState([]);
	const [featureArts, setFeatureArts] = useState([]);
	const [sorted, setSorted] = useState(false)

	const sortArticles = () => {
		setAllArticles([...ArticleIndex])
		let waterArr = []
		let energyArr = []
		let recycleArr = []
		let featureArr = []
		allArticles.forEach((article) => {
			if (article.category.includes("water")) {
				waterArr.push(article)
			}
			if (article.category.includes('energy')) {
				energyArr.push(article)
			}
			if (article.category.includes("recycle")) {
				recycleArr.push(article)
			}
			if (article.category.includes("feature")) {
				featureArr.push(article)
			}
		})
		setWaterArts(...[waterArr])
		setEnergyArts(...[energyArr])
		setRecycleArts(...[recycleArr])
		setFeatureArts(...[featureArr])
		setSorted(true)
	}

	useEffect(() => {
		setAllArticles([...ArticleIndex])
		let waterArr = []
		let energyArr = []
		let recycleArr = []
		let featureArr = []
		allArticles.forEach((article) => {
			if (article.category.includes("water")) {
				waterArr.push(article)
			}
			if (article.category.includes('energy')) {
				energyArr.push(article)
			}
			if (article.category.includes("recycle")) {
				recycleArr.push(article)
			}
			if (article.category.includes("feature")) {
				featureArr.push(article)
			}
		})
		setWaterArts(...[waterArr])
		setEnergyArts(...[energyArr])
		setRecycleArts(...[recycleArr])
		setFeatureArts(...[featureArr])
		setSorted(true)
	}, [])

	return (
		<>
			{!sorted ? sortArticles() : null }
			<div class="container-lg">
				<div class="row">
					<div class="col ms-3">
						{/* Article Page Header */}
						<ArticlePageTitle />
					</div>
						
				</div>
				<br />
				<div class="row ms-1">
					<div class="col">
						{/* Featuerd Articles -- 3 Articles split into two columns */}
						{/* <FeaturedArticles articles={featureArts}/> */}
					</div>
				</div>
				<br />
				<div class="row" >
					<div class="col border-bottom border-3 border-dark mb-4" >
						<div class="fs-4">Topics</div>
					</div>
				</div>

				{/* Water Category Carousel*/}
				<div class="row">
					<div class="col fs-2 border-bottom border-1 border-secondary mb-4"> Water Conservation </div>
				</div>
				<div class="row">
					<div class="col">
						{/* {console.log(`articles:${waterArts.length} . numItems:${Math.round(waterArts.length / 3)}`)} */}
						<ArticleCarousel articles={waterArts} category="water" numItems={Math.round(waterArts.length / 3)}/>
					</div>
				</div>
				<div class="row">
					<div class="col fs-2 border-bottom border-2 border-secondary mb-4"></div>
				</div>

				{/* Energy Category Carousel*/} 
				<div class="row">
					<div class="col fs-2 border-bottom border-1 border-secondary mb-4"> Energy Saving </div>
				</div>
				<div class="row">
					<div class="col">
						{/* <ArticleCarousel articles={energyArts} category="energy"/> */}
					</div>
				</div>
				<div class="row">
					<div class="col fs-2 border-bottom border-2 border-secondary mb-4"></div>
				</div>

				{/* Recycle Category Carousel*/}
				<div class="row">
					<div class="col fs-2 border-bottom border-1 border-secondary mb-4"> Recycling </div>
				</div>
				<div class="row">
					<div class="col">
						{/* <ArticleCarousel articles={recycleArts} category="recycle"/> */}
					</div>
				</div>
				<div class="row">
					<div class="col fs-2 border-bottom border-2 border-secondary mb-4"></div>
				</div>
			</div>
			
		</>
	)
}

export default Articles
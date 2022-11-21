import React from "react"
import { useState } from "react"
import { useEffect } from "react"

import { Card, Button } from "react-bootstrap"

import ArticlePageTitle from "./articles/ArticlePageTitle.jsx"
import FeaturedArticles from "./articles/FeaturedArticles.jsx"

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

	const genItemBlocks = (array) => {

		let blocksArr = []

		let numBlocks = Math.round(array.length / 3)

		let itemBlock = {}
		let blockCount = 0
		let itemInd = 0
		let artInd = 0
		let artArr = []

		// want Object{index:itemInd, articles:[artArr]}
		// add itemInd to Object
		// put 3 articles into artArr
		// put artArr into Object
		while (itemInd < numBlocks) {
			// add itemInd to itemProp{index:{itemInd}}
			itemBlock["index"] = itemInd
			console.log(`craeting block #${itemInd}`);
			// add next three articles to artArr
			if (itemInd == 0) {
				artArr.push(array[artInd])
				artInd++
				artArr.push(array[artInd])
				artInd++
				artArr.push(array[artInd])
				artInd++
			}
			while (artInd < blockCount * 3 || artInd == 0) {
				console.log(artInd);
				if (array[artInd]) {
					console.log(`    Adding article #${artInd}`);
					artArr.push(array[artInd])
					artInd++
				} else {
					artInd += array.length
				}
			}
			

			// add artArr to the itemProp object
			itemBlock["articles"] = [...artArr]

			// make index 0 active
			if (itemInd == 0) {
				itemBlock["active"] = "active"
			} else {
				itemBlock["active"] = null
			}
			// add itemProp to carouselItems
			blocksArr.push(itemBlock)

			// clear local variabls after use
			artArr = []
			itemBlock = {}
			// increment itemInd for next loop
			itemInd ++
		}
		// return array of blocks of 3 articles {index: #, articles:[article1, article2, article3], active:""}
		return blocksArr
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
						<FeaturedArticles articles={featureArts}/>
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
						<div id={`carousel-category-water`} class="carousel slide" data-bs-ride="false" style={{height: 535 }}>
							<div class="carousel-inner" >
								{genItemBlocks(waterArts).map((block) => {
									return (
										<div key={block.index} class={`carousel-item ${block.active}`}>
											<div class="row gx-5">
												{
													block.articles.map((article) => {
														return (
															<div key={block.articles.indexOf(article)} class="col">
																<Card class="border border-0 rounded-0" style={{height: 500 }}>
																	<Card.Img variant="top" src={article.image} />
																	<Card.Body>
																		<Card.Title>{article.title}</Card.Title>
																		<Card.Text>
																			{article.summary}
																		</Card.Text>
																		<Button variant="dark" class="border border-0 rounded-0 btn btn-dark sticky-bottom">Read Full Article</Button>
																	</Card.Body>
																</Card>
															</div>	
														)		
													})
												}
											</div>
										</div>
									)
								})}
							</div>
								<button class="carousel-control-prev" type="button" data-bs-target={`#carousel-category-water`} data-bs-slide="prev">
									<span class="carousel-control-prev-icon" aria-hidden="true"></span>
									<span class="visually-hidden">Previous</span>
								</button>
								<button class="carousel-control-next" type="button" data-bs-target={`#carousel-category-water`} data-bs-slide="next">
									<span class="carousel-control-next-icon" aria-hidden="true"></span>
									<span class="visually-hidden">Next</span>
								</button>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col fs-2 border-bottom border-2 border-secondary mb-4"></div>
				</div>
				{/* Recycling Category Carousel*/}
				<div class="row">
					<div class="col fs-2 border-bottom border-1 border-secondary mb-4"> Recycling </div>
				</div>
				<div class="row">
					<div class="col">
						<div id={`carousel-category-recycle`} class="carousel slide" data-bs-ride="false" style={{height: 535 }}>
							<div class="carousel-inner" >
								{genItemBlocks(energyArts).map((block) => {
									return (
										<div key={block.index} class={`carousel-item ${block.active}`}>
											<div class="row gx-5">
												{
													block.articles.map((article) => {
														return (
															<div key={block.articles.indexOf(article)} class="col">
																<Card class="border border-0 rounded-0" style={{height: 500 }}>
																	<Card.Img variant="top" src={article.image} />
																	<Card.Body>
																		<Card.Title>{article.title}</Card.Title>
																		<Card.Text>
																			{article.summary}
																		</Card.Text>
																		<Button variant="dark" class="border border-0 rounded-0 btn btn-dark sticky-bottom">Read Full Article</Button>
																	</Card.Body>
																</Card>
															</div>	
														)		
													})
												}
											</div>
										</div>
									)
								})}
							</div>
								<button class="carousel-control-prev" type="button" data-bs-target={`#carousel-category-recycle`} data-bs-slide="prev">
									<span class="carousel-control-prev-icon" aria-hidden="true"></span>
									<span class="visually-hidden">Previous</span>
								</button>
								<button class="carousel-control-next" type="button" data-bs-target={`#carousel-category-recycle`} data-bs-slide="next">
									<span class="carousel-control-next-icon" aria-hidden="true"></span>
									<span class="visually-hidden">Next</span>
								</button>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col fs-2 border-bottom border-2 border-secondary mb-4"></div>
				</div>
				{/* Energy Category Carousel*/}
				<div class="row">
					<div class="col fs-2 border-bottom border-1 border-secondary mb-4"> Energy Usage </div>
				</div>
				<div class="row">
					<div class="col">
						<div id={`carousel-category-energy`} class="carousel slide" data-bs-ride="false" style={{height: 535 }}>
							<div class="carousel-inner" >
								{genItemBlocks(waterArts).map((block) => {
									return (
										<div key={block.index} class={`carousel-item ${block.active}`}>
											<div class="row gx-5">
												{
													block.articles.map((article) => {
														return (
															<div key={block.articles.indexOf(article)} class="col">
																<Card class="border border-0 rounded-0" style={{height: 500 }}>
																	<Card.Img variant="top" src={article.image} />
																	<Card.Body>
																		<Card.Title>{article.title}</Card.Title>
																		<Card.Text>
																			{article.summary}
																		</Card.Text>
																		<Button variant="dark" class="border border-0 rounded-0 btn btn-dark sticky-bottom">Read Full Article</Button>
																	</Card.Body>
																</Card>
															</div>	
														)		
													})
												}
											</div>
										</div>
									)
								})}
							</div>
								<button class="carousel-control-prev" type="button" data-bs-target={`#carousel-category-energy`} data-bs-slide="prev">
									<span class="carousel-control-prev-icon" aria-hidden="true"></span>
									<span class="visually-hidden">Previous</span>
								</button>
								<button class="carousel-control-next" type="button" data-bs-target={`#carousel-category-energy`} data-bs-slide="next">
									<span class="carousel-control-next-icon" aria-hidden="true"></span>
									<span class="visually-hidden">Next</span>
								</button>
						</div>
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
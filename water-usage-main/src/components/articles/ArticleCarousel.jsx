import React from "react"
import { useState, useEffect } from "react"

import ArticleCarouselItem from "./ArticleCarouselItem"

const ArticleCarousel = (props) => {
	// set useState
	const [articles, setArticles] = useState([...props.articles])
	const [category] = useState(props.category)
	const [numItems, setNumItems] = useState()
	const [carouselItems, setCarouselItems] = useState([])

	// will create an object{index:ai, articles:[]} to put into the CarouselItems array
	// ni is the index that will be passed to the child component to control the "active" tag
	// articles is the array to be passed to the child component
	const generateCarouselItems = () => {
		let ni = 0
		let ai = 0
		let itemProps = {}
		let arr = []
		if (!articles.length) {
			// check for articles and set state
			setArticles([...props.articles])
			// generate CarouselItems
			generateCarouselItems()
		} else {
			// runs number of time = articles.length / 3 (rounded up)
			// need to leave this as <= or it stops one too soon
			while (ni <= numItems) {
				// clear variables for new CarouselItem
				itemProps = {}
				arr = []
				// populated arr will be added to itemProps{} as {... articles:[arr]}
				while (ai < ni * 3) {
					// if there is an article at articles[ai], adds to arr
					// will skip if undefined
					// allows partial filling of CarouselItem if less than three articles available
					if (articles[ai]) {
						console.log(`    articles[${ai}] added to arr`);
						arr.push(articles[ai])
					} else {
						// escape while loop
						ai = ni * 3
					}
					ai ++
				}
				itemProps = {index: ni, articles: [...arr]}

				// created this to avoid odd behavior of creating an extra crousel item
				if (ni < numItems) {
					setCarouselItems([...carouselItems, itemProps])
					console.log(`craeted CarouselItem #${ni}`);
				}
				
				ni ++
			}
		}
		console.log(`There are ${carouselItems.length} CarouselItems created`);
	}

	useEffect(() => {
		// set articles from props into state (sometimes it misses)
		setArticles([...props.articles])
		// check to see if articles atually added to state
		if (articles.length) {
			// log category
			console.log(`${props.category} Carousel`);
			// log how many articles there are in state
			console.log(`    There are ${articles.length} articles in state`);
			// calculate number of CarouselItems to create
			setNumItems(Math.round(articles.length / 3))
			// log number of CarouselItems to create
			console.log(`    Please create ${numItems} <CarouselItems>`);
		} else {
			// if the articles are not in state, set State
			setArticles([...props.articles])
		}
		// runs the function to create the 
		generateCarouselItems()
	}, [])

	return (
		<>
			{/* If there are no carousel items, run generateCarouselItems function */}
			{ !carouselItems.length ? generateCarouselItems() : null }
			<div id={`carousel-category-${category}`} class="carousel slide" data-bs-ride="false" style={{height: 535 }}>
				<div class="carousel-inner" >
					{/* not passing the right props yet */}
					<ArticleCarouselItem index={0} articles={carouselItems[0]}/>
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
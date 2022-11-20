import { useEffect } from "react"

const ArticleCarousel = (props) => {

	////													  ////
	// Creates the carousel indicators for each article element //
	////													  ////
	const addCarouselIndicators = () => {
		let ariaLabel = ""
		let index = ""
		for (let i = 0; i < props.articles.length; i++) {
			// If statement to set the "active" tag to the first array element on page load //
			if (i === 0) {
				index = `${i}`
				ariaLabel = `Slide ${i + 1}`
				return(
					// active tag assigned at props.articles[0] on page load
					<button type="button" data-bs-target="#carousel-ArticlePage" data-bs-slide-to={index} class="active" aria-current="true" aria-label={ariaLabel}></button>
				)
			} else {
				return(
					// no active tag assigned
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
				)
			}
		}
	}


	useEffect(() => {
		addCarouselIndicators();

	}, [])

	return (
		<div id="carousel-ArticlePage" class="carousel slide" data-bs-ride="false">
			***Carousel Goes Here***
			<div class="carousel-indicators">
				
			</div>
		</div>
	)
}

export default ArticleCarousel
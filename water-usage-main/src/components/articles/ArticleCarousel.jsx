import CarouselIndicator from "./CarouselIndicator"

const ArticleCarousel = (props) => {

	////													  ////
	// Creates the carousel indicators for each article element //
	////													  ////
	const addCarouselIndicators = () => {
		let index = 0
		let ariaLabel = ""
		props.articles.map((article) => {
			index = props.articles.indexOf(article)
			ariaLabel = `Slide ${index + 1}`
			console.log(index, ariaLabel);
			return(
				<CarouselIndicator index={index.toString()} ariaLabel={ariaLabel} />
			)
		})
	}




	return (
		<div id="carousel-ArticlePage" class="carousel slide" data-bs-ride="false">
			carousel goes here
			<div class="carousel-indicators" >
			
			{addCarouselIndicators()}
			</div>
			
		</div>
	)
}

export default ArticleCarousel
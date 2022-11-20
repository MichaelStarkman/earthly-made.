const CarouselIndicator = (props) => {
	if(props.index === "0"){
		return (
			<button type="button" data-bs-target="#carousel-ArticlePage" data-bs-slide-to={props.index} class="active" aria-current="true" aria-label=""></button>
		)
	} else {
		return (
			<button type="button" data-bs-target="#carousel-ArticlePage" data-bs-slide-to={props.index} aria-current="true" aria-label={props.ariaLabel}></button>
		)
	}
	
}

export default CarouselIndicator
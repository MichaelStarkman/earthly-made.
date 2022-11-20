const ArticleCarouselIndicator = (props) => {

	return (
		<>
			{console.log("created carousel", props.ariaLabel)}
			{
				props.index == 0 ? 
				<button key={props.index} type="button" data-bs-target="#carousel-ArticlePage" data-bs-slide-to={props.index.toString()} class="active" aria-current="true" aria-label={props.ariaLabel}></button>
				:
				<button key={props.index} type="button" data-bs-target="#carousel-ArticlePage" data-bs-slide-to={props.index.toString()} aria-current="true" aria-label={props.ariaLabel}></button>
			}
		</>	
	)
	
}

export default ArticleCarouselIndicator
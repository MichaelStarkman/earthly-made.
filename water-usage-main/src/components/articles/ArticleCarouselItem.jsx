const ArticleCarouselItem = (props) => {
	return (
		<>
			{props.index === 0 ? 
				<div class="carousel-item active">
					<img src={props.article.image} class="d-block w-100" alt="..." />
					<div class="carousel-caption d-none d-md-block">
						<h5>{props.article.title}</h5>
						<p> {props.article.summary} </p>
					</div>
			  </div>
			:
				<div class="carousel-item">
					<img src={props.article.image} class="d-block w-100" alt="..." />
					<div class="carousel-caption d-none d-md-block">
						<h5>{props.article.title}</h5>
						<p> {props.article.summary} </p>
					</div>
				</div>
			}
		</>

	)
}

export default ArticleCarouselItem

{/* <div class="carousel-item">

</div> */}
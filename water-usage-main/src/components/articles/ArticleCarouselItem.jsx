import ArticleCarouselCard from "./ArticleCarouselCard"



// updating this section to match the hi-fi
// will have three items per carousel page

const ArticleCarouselItem = (props) => {
	return (
		<>
			{props.index === 0 ? 
				<div class="carousel-item active">
					<div class="row gx-5">
						<ArticleCarouselCard />
						<ArticleCarouselCard />
						<ArticleCarouselCard />
					</div>
					
				</div>
				
			:
				<div class="carousel-item">
					
				</div>
			}
		</>

	)
}

export default ArticleCarouselItem

{/* <div class="carousel-item">

</div> */}


{/* <img src={props.article.image} class="d-block w-100" alt="..." />
					<div class="carousel-caption d-none d-md-block">
						<h5>{props.article.title}</h5>
						<p> {props.article.summary} </p>
					</div> */}

{/* <img src={props.article.image} class="d-block w-100" alt="..." />
					<div class="carousel-caption d-none d-md-block">
						<h5>{props.article.title}</h5>
						<p> {props.article.summary} </p>
					</div> */}
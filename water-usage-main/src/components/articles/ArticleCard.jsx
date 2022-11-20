const ArticleCard = (props) => {
	return (
		<div class="container shadow-sm p-0">
			<div class="row">
				<div class="col">
					<img src={props.article.image} alt="" class="img-fluid mx-auto d-block"/>
					<div class="article-caption-sm d-flex flex-row justify-content-between">
						<p>{props.article.date}</p>
						<p>{props.article.author}</p>
					</div>
					<h4>{props.article.title}</h4>
					<p>{props.article.summary}</p>
					<a href={props.article.url}>
						<button type="button" class="btn btn-primary">Read Full Article</button>
					</a>
				</div>
			</div>
		</div>
	)
}

export default ArticleCard
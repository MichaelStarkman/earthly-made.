const MainArticle = (props) => {
	return (
				<div class="col">
					<img src={props.article.image} alt="" class="img-fluid"/>
					<div class="article-caption-lg d-flex flex-row justify-content-between">
						<p>{props.article.date}</p>
						<p>{props.article.author}</p>
					</div>
					<div class="article-text-lg">
						<h4>{props.article.title}</h4>
						<p>{props.article.summary}</p>
						<p>{props.article.body}</p>
					</div>
					<div class="article-btn">
						<a href={props.article.url}>
							<button type="button" class="btn btn-dark border border-0 rounded-0">Read Full Article</button>
						</a>
					</div>
				</div>
	)
}

export default MainArticle
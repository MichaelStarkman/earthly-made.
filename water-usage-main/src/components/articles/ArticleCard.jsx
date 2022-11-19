const ArticleCard = (props) => {
	return (
		<div class="article-wrapper-sm">
			<div class="article-img-sm">
				<img src={props.article.image} alt="" />
			</div>
			<div class="article-caption-sm d-flex flex-row justify-content-between">
				<p>{props.article.date}</p>
				<p>{props.article.author}</p>
			</div>
			<div class="article-text-sm">
				<h4>{props.article.title}</h4>
				<p>{props.article.summary}</p>
			</div>
		</div>
	)
}

export default ArticleCard
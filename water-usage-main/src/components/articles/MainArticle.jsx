const MainArticle = (props) => {
	return (
		<div class="article-wrapper-lg">
			<div class="article-img-lg">
				<img src={props.article.image} alt="" class="article-img"/>
			</div>
			<div class="article-caption-lg d-flex flex-row justify-content-between">
				<p>{props.article.date}</p>
				<p>{props.article.author}</p>
			</div>
			<div class="article-text-lg">
				<h4>{props.article.title}</h4>
				<p>{props.article.summary}</p>
			</div>
		</div>
	)
}

export default MainArticle
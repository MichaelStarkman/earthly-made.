const ArticleThumbnail = (props) => {
	return (
		<>
			<div class="card" style="width: 18rem;">
				<img src={props.articleImage} class="card-img-top" />
					<h5 class="card-title">{props.articleTitle}</h5>
					<p class="card-text">{props.articleText}</p>
					<a href={props.articleLink} class="btn btn-primary">Go somewhere</a>
			</div>
		</>
	)
}

export default ArticleThumbnail
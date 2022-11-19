import ArticlePageTitle from "./articles/ArticlePageTitle.jsx"
import FeaturedArticles from "./articles/FeaturedArticles.jsx"


const Articles = () => {
	return (
		<>
			<div class="container-lg">
				<div class="row">
						{/* Article Page Header */}
						<ArticlePageTitle />
				</div>
			
			<br />

			<div class="container-lg">
				<div class="row">
					{/* Featuerd Articles -- 3 Articles split into two columns */}
				<FeaturedArticles />
				</div>
				
			</div>
			
			</div>
			
		</>
	)
}

export default Articles
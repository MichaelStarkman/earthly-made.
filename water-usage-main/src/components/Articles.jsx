import ArticlePageTitle from "./articles/ArticlePageTitle.jsx"
import FeaturedArticles from "./articles/FeaturedArticles.jsx"
import ArticleCarousel from "./articles/ArticleCarousel.jsx"
import ArticleIndex from "./articles/ArticleIndex.js"

const featuredArticles = {
	primary: ArticleIndex[0],
	rightTop: ArticleIndex[1],
	rightBottom: ArticleIndex[2]
}

const Articles = () => {
	return (
		<>
			<div class="container-lg">
				<div class="row">
					<div class="col">
						{/* Article Page Header */}
						<ArticlePageTitle />
					</div>
						
				</div>
				<br />
				<div class="row ms-1">
					<div class="col">
						{/* Featuerd Articles -- 3 Articles split into two columns */}
						<FeaturedArticles articles={featuredArticles}/>
					</div>
				</div>
				<br />
				<div class="row">
					<div class="col col-10">
						{/* Carousel will loop through array of all articles */}
						<ArticleCarousel />
					</div>
				</div>
			</div>
			
		</>
	)
}

export default Articles
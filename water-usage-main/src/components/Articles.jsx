
import ArticlePageTitle from "./articles/ArticlePageTitle.jsx"
import FeaturedArticles from "./articles/FeaturedArticles.jsx"
import ArticleCarousel from "./articles/ArticleCarousel.jsx"

// this is the array of articles
import ArticleIndex from "./articles/ArticleIndex.js"

// the first three articles in the array will be the featured articles
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
					<div class="col ms-3">
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
				<div class="row" >
					<div class="col border-bottom border-3 border-dark" >
						<div class="fs-4">Topics</div>
					</div>
				</div>
				<br />
				<div class="row" style={{height: "400px"}} >
					<div class="col">
						<div class="fs-2 border-bottom border-dark mb-4">Water Usage</div>
						<div class="row">
							<div class="col">
								{/* Carousel will loop through array of all articles */}
								<ArticleCarousel articles={ArticleIndex}/>
							</div>
						</div>
						
					</div>
				</div>
			</div>
			
		</>
	)
}

export default Articles
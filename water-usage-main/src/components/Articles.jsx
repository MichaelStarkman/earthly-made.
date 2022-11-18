import ArticlePageTitle from "./articles/ArticlePageTitle.jsx"
import FeaturedArticles from "./articles/FeaturedArticles.jsx"


const Articles = () => {
	return (
		<>
			{/* Article Page Title */}
			<ArticlePageTitle />
			<br />
			{/* Featuerd Articles -- 3 Articles split into two columns */}
			<FeaturedArticles />
		</>
	)
}

export default Articles
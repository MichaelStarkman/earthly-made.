import ArticleCard from "./ArticleCard"

const testArticle = {
	url: 'https://www.thegoodtrade.com/features/fair-trade-clothing',
	image: 'https://images.squarespace-cdn.com/content/v1/61dcd32b3fb8bb4b5af9b560/1659998355568-GRO1WNHVIJT7EYS5CKCG/ethical-sustainable-clothing.jpeg',
	altText: '',
	title: '35 Sustainable Clothing Brands Betting Against Fast Fashion',
	summary: 'What is the most environmentally friendly fashion brand? Many of these ethical clothing brands come with third-party sustainable and ethical certifications as well.',
	date: "11/3/2022",
	author: "the good trade editors"
}

const FeaturedArticles = () => {
	return (
		<section>
			<div class="conatiner-lg">
				<div class="d-flex flex-row justify-content-around">
					<div class="">
						{/* Holds one article */}
						Main Article
					</div>
					<div class="d-flex flex-column">
						{/* Column with two smaller article cards */}
						<ArticleCard article={testArticle}/>

					</div>
				</div>
			</div>
		</section>
	)
}

export default FeaturedArticles
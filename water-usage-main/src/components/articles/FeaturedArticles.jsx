import ArticleCard from "./ArticleCard"

const testArticle = {
	url: 'https://www.thegoodtrade.com/features/fair-trade-clothing',
	image: 'https://cdn.shopify.com/s/files/1/0006/0420/9215/articles/famous_clothing_brands_philippines_1000_f46518b5-f293-4277-9ded-eb0247237bbd_1024x.jpg?v=1653882152',
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
						<br />
						<br />
						<ArticleCard article={testArticle}/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default FeaturedArticles
import ArticleCard from "./ArticleCard"
import MainArticle from "./MainArticle"

const testArticle1 = {
	url: 'https://www.thegoodtrade.com/features/fair-trade-clothing',
	image: 'https://cdn.shopify.com/s/files/1/0006/0420/9215/articles/famous_clothing_brands_philippines_1000_f46518b5-f293-4277-9ded-eb0247237bbd_1024x.jpg?v=1653882152',
	altText: '',
	title: '35 Sustainable Clothing Brands Betting Against Fast Fashion',
	summary: 'What is the most environmentally friendly fashion brand? Many of these ethical clothing brands come with third-party sustainable and ethical certifications as well.',
	body: 'As we’ve become more conscious about our purchases, we often wonder: Who makes the clothes we wear every day and in what kind of conditions? Documentaries like “The True Cost” shine a light on how the fast fashion industry depletes the earth’s resources and leverages labor to pass on a "cheap" cost to the end consumer.',
	date: "11/3/2022",
	author: "the good trade editors"
}
const testArticle2 = {
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
				<div class="row row-cols-2">
					<div class="col col-8 border-end">
						{/* Holds one article */}
						<MainArticle article={testArticle1}/>
					</div>
					<div class="col col-4">
						{/* Column with two smaller article cards */}
						<div class="container">
							<div class="row">
								<div class="col">
									<ArticleCard article={testArticle1}/>
									<br />
									<ArticleCard article={testArticle2}/>
								</div>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</section>
	)
}

export default FeaturedArticles
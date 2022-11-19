import ArticleCard from "./ArticleCard"
import MainArticle from "./MainArticle"

const testArticle1 = {
	url: 'https://www.thegoodtrade.com/features/fair-trade-clothing',
	image: 'https://cdn.shopify.com/s/files/1/0006/0420/9215/articles/famous_clothing_brands_philippines_1000_f46518b5-f293-4277-9ded-eb0247237bbd_1024x.jpg?v=1653882152',
	altText: '',
	title: '35 Sustainable Clothing Brands',
	summary: 'Many of these ethical clothing brands come with third-party sustainable and ethical certifications.',
	body: 'As we’ve become more conscious about our purchases, we often wonder: Who makes the clothes we wear every day and in what kind of conditions? Documentaries like “The True Cost” shine a light on how the fast fashion industry depletes the earth’s resources and leverages labor to pass on a "cheap" cost to the end consumer.',
	date: "11/3/2022",
	author: "the good trade editors"
}
const testArticle2 = {
	url: 'https://www.redressraleigh.org/sustainable-fashion?gclid=CjwKCAiAmuKbBhA2EiwAxQnt73KRoaWHtWg5YFbF2fhOip5eDu1nHGbobMtySd9xgw2rXWZm1boI2hoC6vYQAvD_BwE',
	image: 'https://images.squarespace-cdn.com/content/v1/581e74f2be659448b773a3b8/1552489244478-PO2NT52GB9SY2KPW4HB7/image-asset.jpeg?format=1000w',
	altText: '',
	title: 'What is Sustainable Fashion?',
	summary: 'Sustainable fashion (or clothing) uses textiles that are manufactured, constructed, and marketed in a responsible and conscious way that acknowledges and accounts for their environmental and socioeconomic impacts.',
	body: 'Sustainable fashion (or clothing) uses textiles that are manufactured, constructed, and marketed in a responsible and conscious way that acknowledges and accounts for their environmental and socioeconomic impacts. This is ideally done across a garment’s full life cycle, from creation to disposal. Responsible designers understand that everything they make has influence — from the materials they use to the way they treat the people producing their goods. ',
	date: " ",
	author: "Redress Raleigh"
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
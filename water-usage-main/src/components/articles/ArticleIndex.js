// This is the list of articles
// Each Article has:
				// url - link to article on host site
				// image - the url for the article image
				// altText - the alt text for the image
				// title - the title for the article
				// summary - a short blurb trimmed for formatting
				// body - an excerpt from the article
				// date - publication date(if applicable)
				// author - author name(if applicable), or outlet name(if no author name)


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//	NOTICE: The first three articles in the array will be featured
//	ArticleIndex[0] = Main Article
//	ArticleIndex[1] = Top Right Article
//	ArticleIndex[2] = Bottom Right Article

const ArticleIndex = [
	{
		url: 'https://www.thegoodtrade.com/features/fair-trade-clothing',
		image: 'https://cdn.shopify.com/s/files/1/0006/0420/9215/articles/famous_clothing_brands_philippines_1000_f46518b5-f293-4277-9ded-eb0247237bbd_1024x.jpg?v=1653882152',
		altText: '',
		title: '35 Sustainable Clothing Brands',
		summary: 'Many of these ethical clothing brands come with third-party sustainable and ethical certifications.',
		body: 'As we’ve become more conscious about our purchases, we often wonder: Who makes the clothes we wear every day and in what kind of conditions? Documentaries like “The True Cost” shine a light on how the fast fashion industry depletes the earth’s resources and leverages labor to pass on a "cheap" cost to the end consumer.',
		date: "11/3/2022",
		author: "the good trade editors"
	},
	{
		url: 'https://www.redressraleigh.org/sustainable-fashion?gclid=CjwKCAiAmuKbBhA2EiwAxQnt73KRoaWHtWg5YFbF2fhOip5eDu1nHGbobMtySd9xgw2rXWZm1boI2hoC6vYQAvD_BwE',
		image: 'https://images.squarespace-cdn.com/content/v1/581e74f2be659448b773a3b8/1552489244478-PO2NT52GB9SY2KPW4HB7/image-asset.jpeg?format=1000w',
		altText: '',
		title: 'What is Sustainable Fashion?',
		summary: 'Sustainable fashion (or clothing) uses textiles that are manufactured, constructed, and marketed in a responsible and conscious way that acknowledges and accounts for their environmental and socioeconomic impacts.',
		body: 'Sustainable fashion (or clothing) uses textiles that are manufactured, constructed, and marketed in a responsible and conscious way that acknowledges and accounts for their environmental and socioeconomic impacts. This is ideally done across a garment’s full life cycle, from creation to disposal. Responsible designers understand that everything they make has influence — from the materials they use to the way they treat the people producing their goods. ',
		date: " ",
		author: "Redress Raleigh"
	},
	{
		url: 'https://www.oxfordstudent.com/2022/11/09/can-fast-fashion-be-made-sustainable/',
		image: 'https://www.oxfordstudent.com/wp-content/uploads/2022/11/Fast-fashion-article_without-banner.png',
		altText: 'woman in red with bags',
		title: 'Can fast fashion be made sustainable?',
		summary: "How the failure of plastics recycling casts doubt on fashion's dream of a circular economy",
		body: 'The modern fashion industry is complicated. It relies on both political and economic processes that enable globalised supply chains and on human psychology, which drives us to desire new clothing on a regular basis. The industry is environmentally damaging in almost every possible way, on top of being notorious for greenwashing. There is a vague vision of building a circular economy, which aims to reuse and recycle existing products as long as possible, but upon closer inspection, this model bears strong resemblance to the failed project of plastic recycling.',
		date: "11/9/2022",
		author: "Christian McIntosh"
	}
]

export default ArticleIndex
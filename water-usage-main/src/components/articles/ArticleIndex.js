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
		author: "the good trade editors",
		category: ['water', 'energy']
	},
	{
		url: 'https://www.redressraleigh.org/sustainable-fashion?gclid=CjwKCAiAmuKbBhA2EiwAxQnt73KRoaWHtWg5YFbF2fhOip5eDu1nHGbobMtySd9xgw2rXWZm1boI2hoC6vYQAvD_BwE',
		image: 'https://images.squarespace-cdn.com/content/v1/581e74f2be659448b773a3b8/1552489244478-PO2NT52GB9SY2KPW4HB7/image-asset.jpeg?format=1000w',
		altText: '',
		title: 'What is Sustainable Fashion?',
		summary: 'Sustainable fashion (or clothing) uses textiles that are manufactured, constructed, and marketed in a responsible and conscious way that acknowledges and accounts for their environmental and socioeconomic impacts.',
		body: 'Sustainable fashion (or clothing) uses textiles that are manufactured, constructed, and marketed in a responsible and conscious way that acknowledges and accounts for their environmental and socioeconomic impacts. This is ideally done across a garment’s full life cycle, from creation to disposal. Responsible designers understand that everything they make has influence — from the materials they use to the way they treat the people producing their goods. ',
		date: " ",
		author: "Redress Raleigh",
		category: ['recycle', 'water', 'energy']
	},
	{
		url: 'https://www.oxfordstudent.com/2022/11/09/can-fast-fashion-be-made-sustainable/',
		image: 'https://www.oxfordstudent.com/wp-content/uploads/2022/11/Fast-fashion-article_without-banner.png',
		altText: 'woman in red with bags',
		title: 'Can fast fashion be made sustainable?',
		summary: "How the failure of plastics recycling casts doubt on fashion's dream of a circular economy",
		body: 'The modern fashion industry is complicated. It relies on both political and economic processes that enable globalised supply chains and on human psychology, which drives us to desire new clothing on a regular basis. The industry is environmentally damaging in almost every possible way, on top of being notorious for greenwashing. There is a vague vision of building a circular economy, which aims to reuse and recycle existing products as long as possible, but upon closer inspection, this model bears strong resemblance to the failed project of plastic recycling.',
		date: "11/9/2022",
		author: "Christian McIntosh",
		category: ['energy', 'recycle']
	},
	{
		url: 'https://www.google.com/search?q=sustainable+fashion&sxsrf=ALiCzsYIN4C9rwQnxEwjWGrAIAwdlLxigA%3A1668964026176&ei=ul56Y7ykCuKh5NoPwcWqqA4&ved=0ahUKEwi86bC_n737AhXiEFkFHcGiCuUQ4dUDCBE&uact=5&oq=sustainable+fashion&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIICAAQgAQQsQMyCwgAEIAEELEDEMkDMgsILhCABBDHARCvATIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6CggAEEcQ1gQQsAM6BAgjECc6BQgAEJECOgQIABBDOg4ILhCABBCxAxDHARDRAzoLCAAQgAQQsQMQgwE6BAguEEM6DggAEIAEELEDEIMBEMkDOgcILhDUAhBDOgcIABCxAxBDOgsILhCABBDHARDRA0oECEEYAEoECEYYAFD-CFi3JGDnJWgDcAF4AYABowGIAf8LkgEEMTcuMpgBAKABAcgBCMABAQ&sclient=gws-wiz-serp',
		image: 'https://images.unsplash.com/photo-1637852117014-7bb636c87a59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTh8fGVudmlyb25tZW50YWwlMjBwcm90ZWN0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
		altText: 'woman in red with bags',
		title: 'Can fast fashion be made sustainable?',
		summary: "How the failure of plastics recycling casts doubt on fashion's dream of a circular economy",
		body: 'The modern fashion industry is complicated. It relies on both political and economic processes that enable globalised supply chains and on human psychology, which drives us to desire new clothing on a regular basis. The industry is environmentally damaging in almost every possible way, on top of being notorious for greenwashing. There is a vague vision of building a circular economy, which aims to reuse and recycle existing products as long as possible, but upon closer inspection, this model bears strong resemblance to the failed project of plastic recycling.',
		date: "11/9/2022",
		author: "Christian McIntosh",
		category: ['water', 'recycle']
	},
	{
		url: 'https://www.google.com/search?q=sustainable+fashion&sxsrf=ALiCzsYIN4C9rwQnxEwjWGrAIAwdlLxigA%3A1668964026176&ei=ul56Y7ykCuKh5NoPwcWqqA4&ved=0ahUKEwi86bC_n737AhXiEFkFHcGiCuUQ4dUDCBE&uact=5&oq=sustainable+fashion&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIICAAQgAQQsQMyCwgAEIAEELEDEMkDMgsILhCABBDHARCvATIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6CggAEEcQ1gQQsAM6BAgjECc6BQgAEJECOgQIABBDOg4ILhCABBCxAxDHARDRAzoLCAAQgAQQsQMQgwE6BAguEEM6DggAEIAEELEDEIMBEMkDOgcILhDUAhBDOgcIABCxAxBDOgsILhCABBDHARDRA0oECEEYAEoECEYYAFD-CFi3JGDnJWgDcAF4AYABowGIAf8LkgEEMTcuMpgBAKABAcgBCMABAQ&sclient=gws-wiz-serp',
		image:	'https://plus.unsplash.com/premium_photo-1663045962823-0843412e0289?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU3fHxlbnZpcm9ubWVudGFsJTIwcHJvdGVjdGlvbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
		altText: 'woman in red with bags',
		title: 'Can fast fashion be made sustainable?',
		summary: "How the failure of plastics recycling casts doubt on fashion's dream of a circular economy",
		body: 'The modern fashion industry is complicated. It relies on both political and economic processes that enable globalised supply chains and on human psychology, which drives us to desire new clothing on a regular basis. The industry is environmentally damaging in almost every possible way, on top of being notorious for greenwashing. There is a vague vision of building a circular economy, which aims to reuse and recycle existing products as long as possible, but upon closer inspection, this model bears strong resemblance to the failed project of plastic recycling.',
		date: "11/9/2022",
		author: "Christian McIntosh",
		category: ['recycle', 'water', 'energy']
	},
	{
		url: 'https://www.google.com/search?q=sustainable+fashion&sxsrf=ALiCzsYIN4C9rwQnxEwjWGrAIAwdlLxigA%3A1668964026176&ei=ul56Y7ykCuKh5NoPwcWqqA4&ved=0ahUKEwi86bC_n737AhXiEFkFHcGiCuUQ4dUDCBE&uact=5&oq=sustainable+fashion&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIICAAQgAQQsQMyCwgAEIAEELEDEMkDMgsILhCABBDHARCvATIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6CggAEEcQ1gQQsAM6BAgjECc6BQgAEJECOgQIABBDOg4ILhCABBCxAxDHARDRAzoLCAAQgAQQsQMQgwE6BAguEEM6DggAEIAEELEDEIMBEMkDOgcILhDUAhBDOgcIABCxAxBDOgsILhCABBDHARDRA0oECEEYAEoECEYYAFD-CFi3JGDnJWgDcAF4AYABowGIAf8LkgEEMTcuMpgBAKABAcgBCMABAQ&sclient=gws-wiz-serp',
		image: 'https://images.unsplash.com/photo-1602500922233-0742bb44b130?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY0fHxlbnZpcm9ubWVudGFsJTIwcHJvdGVjdGlvbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
		altText: 'woman in red with bags',
		title: 'Can fast fashion be made sustainable?',
		summary: "How the failure of plastics recycling casts doubt on fashion's dream of a circular economy",
		body: 'The modern fashion industry is complicated. It relies on both political and economic processes that enable globalised supply chains and on human psychology, which drives us to desire new clothing on a regular basis. The industry is environmentally damaging in almost every possible way, on top of being notorious for greenwashing. There is a vague vision of building a circular economy, which aims to reuse and recycle existing products as long as possible, but upon closer inspection, this model bears strong resemblance to the failed project of plastic recycling.',
		date: "11/9/2022",
		author: "Christian McIntosh",
		category: ['energy', 'water']
	},
	{
		url: 'https://www.google.com/search?q=sustainable+fashion&sxsrf=ALiCzsYIN4C9rwQnxEwjWGrAIAwdlLxigA%3A1668964026176&ei=ul56Y7ykCuKh5NoPwcWqqA4&ved=0ahUKEwi86bC_n737AhXiEFkFHcGiCuUQ4dUDCBE&uact=5&oq=sustainable+fashion&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIICAAQgAQQsQMyCwgAEIAEELEDEMkDMgsILhCABBDHARCvATIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6CggAEEcQ1gQQsAM6BAgjECc6BQgAEJECOgQIABBDOg4ILhCABBCxAxDHARDRAzoLCAAQgAQQsQMQgwE6BAguEEM6DggAEIAEELEDEIMBEMkDOgcILhDUAhBDOgcIABCxAxBDOgsILhCABBDHARDRA0oECEEYAEoECEYYAFD-CFi3JGDnJWgDcAF4AYABowGIAf8LkgEEMTcuMpgBAKABAcgBCMABAQ&sclient=gws-wiz-serp',
		image: 'https://images.unsplash.com/photo-1663162891403-4cff15e3df65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjA0fHxlbnZpcm9ubWVudGFsJTIwcHJvdGVjdGlvbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
		altText: 'woman in red with bags',
		title: 'Can fast fashion be made sustainable?',
		summary: "How the failure of plastics recycling casts doubt on fashion's dream of a circular economy",
		body: 'The modern fashion industry is complicated. It relies on both political and economic processes that enable globalised supply chains and on human psychology, which drives us to desire new clothing on a regular basis. The industry is environmentally damaging in almost every possible way, on top of being notorious for greenwashing. There is a vague vision of building a circular economy, which aims to reuse and recycle existing products as long as possible, but upon closer inspection, this model bears strong resemblance to the failed project of plastic recycling.',
		date: "11/9/2022",
		author: "Christian McIntosh",
		category: ['water', 'energy']
	},
	{
		url: 'https://www.google.com/search?q=sustainable+fashion&sxsrf=ALiCzsYIN4C9rwQnxEwjWGrAIAwdlLxigA%3A1668964026176&ei=ul56Y7ykCuKh5NoPwcWqqA4&ved=0ahUKEwi86bC_n737AhXiEFkFHcGiCuUQ4dUDCBE&uact=5&oq=sustainable+fashion&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIICAAQgAQQsQMyCwgAEIAEELEDEMkDMgsILhCABBDHARCvATIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6CggAEEcQ1gQQsAM6BAgjECc6BQgAEJECOgQIABBDOg4ILhCABBCxAxDHARDRAzoLCAAQgAQQsQMQgwE6BAguEEM6DggAEIAEELEDEIMBEMkDOgcILhDUAhBDOgcIABCxAxBDOgsILhCABBDHARDRA0oECEEYAEoECEYYAFD-CFi3JGDnJWgDcAF4AYABowGIAf8LkgEEMTcuMpgBAKABAcgBCMABAQ&sclient=gws-wiz-serp',
		image: 'https://plus.unsplash.com/premium_photo-1664908289185-28d2499e020f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk5fHxlbnZpcm9ubWVudGFsJTIwcHJvdGVjdGlvbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
		altText: 'woman in red with bags',
		title: 'Can fast fashion be made sustainable?',
		summary: "How the failure of plastics recycling casts doubt on fashion's dream of a circular economy",
		body: 'The modern fashion industry is complicated. It relies on both political and economic processes that enable globalised supply chains and on human psychology, which drives us to desire new clothing on a regular basis. The industry is environmentally damaging in almost every possible way, on top of being notorious for greenwashing. There is a vague vision of building a circular economy, which aims to reuse and recycle existing products as long as possible, but upon closer inspection, this model bears strong resemblance to the failed project of plastic recycling.',
		date: "11/9/2022",
		author: "Christian McIntosh",
		category: ['recycle', 'energy']
	},
	{
		url: 'https://www.google.com/search?q=sustainable+fashion&sxsrf=ALiCzsYIN4C9rwQnxEwjWGrAIAwdlLxigA%3A1668964026176&ei=ul56Y7ykCuKh5NoPwcWqqA4&ved=0ahUKEwi86bC_n737AhXiEFkFHcGiCuUQ4dUDCBE&uact=5&oq=sustainable+fashion&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIICAAQgAQQsQMyCwgAEIAEELEDEMkDMgsILhCABBDHARCvATIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6CggAEEcQ1gQQsAM6BAgjECc6BQgAEJECOgQIABBDOg4ILhCABBCxAxDHARDRAzoLCAAQgAQQsQMQgwE6BAguEEM6DggAEIAEELEDEIMBEMkDOgcILhDUAhBDOgcIABCxAxBDOgsILhCABBDHARDRA0oECEEYAEoECEYYAFD-CFi3JGDnJWgDcAF4AYABowGIAf8LkgEEMTcuMpgBAKABAcgBCMABAQ&sclient=gws-wiz-serp',
		image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFzdCUyMGZhc2hpb258ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
		altText: 'woman in red with bags',
		title: 'Can fast fashion be made sustainable?',
		summary: "How the failure of plastics recycling casts doubt on fashion's dream of a circular economy",
		body: 'The modern fashion industry is complicated. It relies on both political and economic processes that enable globalised supply chains and on human psychology, which drives us to desire new clothing on a regular basis. The industry is environmentally damaging in almost every possible way, on top of being notorious for greenwashing. There is a vague vision of building a circular economy, which aims to reuse and recycle existing products as long as possible, but upon closer inspection, this model bears strong resemblance to the failed project of plastic recycling.',
		date: "11/9/2022",
		author: "Christian McIntosh",
		category: ['energy']
	},
	{
		url: 'https://www.google.com/search?q=sustainable+fashion&sxsrf=ALiCzsYIN4C9rwQnxEwjWGrAIAwdlLxigA%3A1668964026176&ei=ul56Y7ykCuKh5NoPwcWqqA4&ved=0ahUKEwi86bC_n737AhXiEFkFHcGiCuUQ4dUDCBE&uact=5&oq=sustainable+fashion&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIICAAQgAQQsQMyCwgAEIAEELEDEMkDMgsILhCABBDHARCvATIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6CggAEEcQ1gQQsAM6BAgjECc6BQgAEJECOgQIABBDOg4ILhCABBCxAxDHARDRAzoLCAAQgAQQsQMQgwE6BAguEEM6DggAEIAEELEDEIMBEMkDOgcILhDUAhBDOgcIABCxAxBDOgsILhCABBDHARDRA0oECEEYAEoECEYYAFD-CFi3JGDnJWgDcAF4AYABowGIAf8LkgEEMTcuMpgBAKABAcgBCMABAQ&sclient=gws-wiz-serp',
		image: 'https://images.unsplash.com/photo-1562347174-7370ad83dc47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGZhc3QlMjBmYXNoaW9ufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
		altText: 'woman in red with bags',
		title: 'Can fast fashion be made sustainable?',
		summary: "How the failure of plastics recycling casts doubt on fashion's dream of a circular economy",
		body: 'The modern fashion industry is complicated. It relies on both political and economic processes that enable globalised supply chains and on human psychology, which drives us to desire new clothing on a regular basis. The industry is environmentally damaging in almost every possible way, on top of being notorious for greenwashing. There is a vague vision of building a circular economy, which aims to reuse and recycle existing products as long as possible, but upon closer inspection, this model bears strong resemblance to the failed project of plastic recycling.',
		date: "11/9/2022",
		author: "Christian McIntosh",
		category: ['water']
	},
	{
		url: 'https://www.google.com/search?q=sustainable+fashion&sxsrf=ALiCzsYIN4C9rwQnxEwjWGrAIAwdlLxigA%3A1668964026176&ei=ul56Y7ykCuKh5NoPwcWqqA4&ved=0ahUKEwi86bC_n737AhXiEFkFHcGiCuUQ4dUDCBE&uact=5&oq=sustainable+fashion&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIICAAQgAQQsQMyCwgAEIAEELEDEMkDMgsILhCABBDHARCvATIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6CggAEEcQ1gQQsAM6BAgjECc6BQgAEJECOgQIABBDOg4ILhCABBCxAxDHARDRAzoLCAAQgAQQsQMQgwE6BAguEEM6DggAEIAEELEDEIMBEMkDOgcILhDUAhBDOgcIABCxAxBDOgsILhCABBDHARDRA0oECEEYAEoECEYYAFD-CFi3JGDnJWgDcAF4AYABowGIAf8LkgEEMTcuMpgBAKABAcgBCMABAQ&sclient=gws-wiz-serp',
		image: 'https://images.unsplash.com/photo-1605274281179-4de6641e30aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHN1c3RhaW5hYmxlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
		altText: 'woman in red with bags',
		title: 'Can fast fashion be made sustainable?',
		summary: "How the failure of plastics recycling casts doubt on fashion's dream of a circular economy",
		body: 'The modern fashion industry is complicated. It relies on both political and economic processes that enable globalised supply chains and on human psychology, which drives us to desire new clothing on a regular basis. The industry is environmentally damaging in almost every possible way, on top of being notorious for greenwashing. There is a vague vision of building a circular economy, which aims to reuse and recycle existing products as long as possible, but upon closer inspection, this model bears strong resemblance to the failed project of plastic recycling.',
		date: "11/9/2022",
		author: "Christian McIntosh",
		category: ['recycle', 'water']
	},
	{
		url: 'https://www.google.com/search?q=sustainable+fashion&sxsrf=ALiCzsYIN4C9rwQnxEwjWGrAIAwdlLxigA%3A1668964026176&ei=ul56Y7ykCuKh5NoPwcWqqA4&ved=0ahUKEwi86bC_n737AhXiEFkFHcGiCuUQ4dUDCBE&uact=5&oq=sustainable+fashion&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIICAAQgAQQsQMyCwgAEIAEELEDEMkDMgsILhCABBDHARCvATIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6CggAEEcQ1gQQsAM6BAgjECc6BQgAEJECOgQIABBDOg4ILhCABBCxAxDHARDRAzoLCAAQgAQQsQMQgwE6BAguEEM6DggAEIAEELEDEIMBEMkDOgcILhDUAhBDOgcIABCxAxBDOgsILhCABBDHARDRA0oECEEYAEoECEYYAFD-CFi3JGDnJWgDcAF4AYABowGIAf8LkgEEMTcuMpgBAKABAcgBCMABAQ&sclient=gws-wiz-serp',
		image: 'https://images.unsplash.com/photo-1597737413237-57dffb6f6b6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3VzdGFpbmFibGUlMjBmYXNoaW9ufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
		altText: 'woman in red with bags',
		title: 'Can fast fashion be made sustainable?',
		summary: "How the failure of plastics recycling casts doubt on fashion's dream of a circular economy",
		body: 'The modern fashion industry is complicated. It relies on both political and economic processes that enable globalised supply chains and on human psychology, which drives us to desire new clothing on a regular basis. The industry is environmentally damaging in almost every possible way, on top of being notorious for greenwashing. There is a vague vision of building a circular economy, which aims to reuse and recycle existing products as long as possible, but upon closer inspection, this model bears strong resemblance to the failed project of plastic recycling.',
		date: "11/9/2022",
		author: "Christian McIntosh",
		category: ['energy', 'water']
	}
		

]

export default ArticleIndex
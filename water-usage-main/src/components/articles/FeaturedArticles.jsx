import React from "react"
import { useState } from "react"

import ArticleCard from "./ArticleCard"
import MainArticle from "./MainArticle"

const FeaturedArticles = (props) => {

	return (
		<section>
			<div class="conatiner-lg">
				<div class="row row-cols-2">
					<div class="col col-8">
						{/* Holds one article */}
						<MainArticle article={props.articles[0]}/>
					</div>
					<div class="col col-4">
						{/* Column with two smaller article cards */}
						<div class="container">
							<div class="row">
								<div class="col">
									<ArticleCard article={props.articles[1]}/>
									<br />
									<ArticleCard article={props.articles[2]}/>
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
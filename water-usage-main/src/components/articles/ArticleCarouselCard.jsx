import React from "react"
import { useState } from "react";
import { Card, Button } from "react-bootstrap";

const ArticleCarouselCard = (props) => {


	return (
		<div class="col">
			<Card class="border border-0 rounded-0" style={{height: 500 }}>
				<Card.Img variant="top" src="https://images.unsplash.com/photo-1473861646675-0252edc45daa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN1c3RhaW5hYmxlJTIwZmFzaGlvbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"/>
				<Card.Body>
					<Card.Title>Article Title Goes Here</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text>
					<Button variant="dark" class="border border-0 rounded-0 btn btn-dark">Go somewhere</Button>
				</Card.Body>
			</Card>
		</div>
	)
}

export default ArticleCarouselCard
import React from "react";
import { Link } from "react-router-dom";

const Ready = () => {
	return (
		<section className="ready">
			<h2 className="ready__heading">Ready to get started?</h2>
			<Link to="/contact">
				<button>contact us</button>
			</Link>
			<img
				className="ready__bg"
				src="src/assets/bg-pattern-home-6-about-5.svg"
				alt="svg"
			/>
		</section>
	);
};

export default Ready;

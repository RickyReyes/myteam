import React from "react";

const Hero = () => {
	return (
		<section className="hero">
			<img
				className="hero__bg-top"
				src="../assets/bg-pattern-home-1.svg"
				alt=""
			/>
			<div className="hero__flex">
				<h1 className="hero__heading">
					Find the
					<br />
					best <span>talent</span>
				</h1>
				<div className="hero__line-and-p">
					<div className="hero__line-container">
						<div className="hero__line"></div>
					</div>
					<p className="hero__p">
						Finding the right people and building high performing
						teams can be hard. Most companies aren’t tapping into
						the abundance of global talent. We’re about to change
						that.
					</p>
				</div>
			</div>
			<img
				className="hero__bg-bottom"
				src="../assets/bg-pattern-home-2.svg"
				alt=""
			/>
		</section>
	);
};

export default Hero;

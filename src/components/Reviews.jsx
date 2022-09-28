import React from "react";

const Reviews = () => {
	return (
		<section className="reviews">
			<img
				className="reviews__bg-img-top"
				src="/public/assets/bg-pattern-home-4-about-3.svg"
				alt="logo"
			/>
			<h2>
				Delivering real results for top companies. Some of our{" "}
				<span>success stories.</span>
			</h2>{" "}
			<div className="review-container">
				<div className="review">
					<img
						className="icon-quotes"
						src="/public/assets/icon-quotes.svg"
						alt="icon"
					/>
					<p>
						“The team perfectly fit the specialized skill set
						required. They focused on the most essential features
						helping us launch the platform eight months faster than
						planned.”
					</p>
					<div className="review__name">Kady Baker</div>
					<i>Product Manager at Bookmark</i>
					<img
						className="review__photo"
						src="/public/assets/avatar-kady.jpg"
						alt="review avatar"
					/>
				</div>{" "}
				<div className="review">
					<img
						className="icon-quotes"
						src="/public/assets/icon-quotes.svg"
						alt="review avatar"
					/>
					<p>
						“We needed to automate our entire onboarding process.
						The team came in and built out the whole journey. Since
						going live, user retention has gone through the roof!”
					</p>
					<div className="review__name">Aiysha Reese</div>{" "}
					<i>Founder of Manage</i>
					<img
						className="review__photo"
						src="/public/assets/avatar-aiysha.jpg"
						alt="review avatar"
					/>
				</div>{" "}
				<div className="review">
					<img
						className="icon-quotes"
						src="/public/assets/icon-quotes.svg"
						alt=""
					/>
					<p>
						“Amazing. Our team helped us build an app that delivered
						a new experience for hiring a physio. The launch was an
						instant success with 100k downloads in the first month.”
					</p>
					<div className="review__name">Arthur Clarke</div>
					<i>Co-founder of MyPhysio</i>
					<img
						className="review__photo"
						src="/public/assets/avatar-arthur.jpg"
						alt=""
					/>
				</div>
			</div>
			<img
				className="reviews__bg-img-bottom"
				src="/public/assets/bg-pattern-home-5.svg"
				alt=""
			/>
		</section>
	);
};

export default Reviews;

import React from "react";
import Director from "./Director";
const Directors = () => {
	const directorData = [
		{
			name: "Nikita Marks",
			position: "Founder & CEO",
			imgPath: "avatar-nikita.jpg",
			quote: "It always amazes me how much talent there is in every corner of the globe.",
		},
		{
			name: "Christian Duncan",
			position: "Co-founder & COO",
			imgPath: "avatar-christian.jpg",
			quote: "Distributed teams required unique processes. You need to approach work in a new way.",
		},
		{
			name: "Cruz Hamer",
			position: "Co-founder & CTO",
			imgPath: "avatar-cruz.jpg",
			quote: "Technology is at the forefront of enabling distributed teams. That's where we come in.",
		},
		{
			name: "Drake Heaton",
			position: "Business Development Lead",
			imgPath: "avatar-drake.jpg",
			quote: "Hiring similar people from similar backgrounds is a surefire way to stunt innovation.",
		},
		{
			name: "Griffin Wise",
			position: "Lead Marketing",
			imgPath: "avatar-griffin.jpg",
			quote: "Unique perspectives shape unique products, which is what you need to survive these days.",
		},
		{
			name: "Aden Allan",
			position: "Head of Talent",
			imgPath: "avatar-aden.jpg",
			quote: "Empowered teams create truly amazing products. Set the north star and let them follow it.",
		},
	];
	return (
		<section className="about__directors">
			<img
				className="about__directors-bg-top"
				src="assets/bg-pattern-about-2-contact-1.svg"
				alt="svg"
			/>
			<h3>Meet the directors</h3>
			<ul className="about__director-container">
				{directorData.map((director) => (
					<Director key={director.name} {...director} />
				))}
			</ul>
			<img
				className="about__directors-bg-bottom"
				src="assets/bg-pattern-home-4-about-3.svg"
				alt="svg"
			/>
		</section>
	);
};

export default Directors;

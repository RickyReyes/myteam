import React from "react";

const Contact = () => {
	document.body.scrollTop = document.documentElement.scrollTop = 0;

	return (
		<section className="contact">
			<img
				className="contact__bg-top"
				src="src/assets/bg-pattern-about-2-contact-1.svg"
				alt="svg"
			/>
			<h1>Contact</h1>
			<h3>Ask us about</h3>
			<ul>
				<li>
					<img
						className="contact__icon"
						src="/src/assets/icon-person.svg"
						alt="icon"
					/>
					<p>The quality of our talent network</p>
				</li>
				<li>
					<img
						className="contact__icon"
						src="/src/assets/icon-cog.svg"
						alt="icon"
					/>
					<p>Usage & implementation of our software</p>
				</li>
				<li>
					<img
						className="contact__icon"
						src="/src/assets/icon-chart.svg"
						alt="icon"
					/>
					<p>How we help drive innovation</p>
				</li>
			</ul>
			<form action="#">
				<input type="text" placeholder="Name" />
				<input type="text" placeholder="Email Address" />
				<input type="text" placeholder="Company Name" />
				<input type="text" placeholder="Title" />
				<textarea type="text" placeholder="Message"></textarea>
				<button disabled aria-disabled>
					submit
				</button>
			</form>
			<img
				className="contact__bg-bottom"
				src="src/assets/bg-pattern-contact-2.svg"
				alt="svg"
			/>
		</section>
	);
};

export default Contact;

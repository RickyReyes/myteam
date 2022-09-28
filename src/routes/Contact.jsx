import React, { useState, useEffect } from "react";

const Contact = () => {
	useEffect(() => {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}, []);
	const [emailMissing, setEmailMissing] = useState(false);
	return (
		<section className="contact">
			<img
				className="contact__bg-top"
				src="/assets/bg-pattern-about-2-contact-1.svg"
				alt="svg"
			/>
			<div className="contact__flex-left">
				{" "}
				<h1>Contact</h1>
				<h3>Ask us about</h3>
				<ul>
					<li>
						<img
							className="contact__icon"
							src="/assets/icon-person.svg"
							alt="icon"
						/>
						<p>The quality of our talent network</p>
					</li>
					<li>
						<img
							className="contact__icon"
							src="/assets/icon-cog.svg"
							alt="icon"
						/>
						<p>Usage & implementation of our software</p>
					</li>
					<li>
						<img
							className="contact__icon"
							src="/assets/icon-chart.svg"
							alt="icon"
						/>
						<p>How we help drive innovation</p>
					</li>
				</ul>
			</div>
			<div className="contact__flex-right">
				<form action="#">
					<input type="text" placeholder="Name" />
					<input
						onChange={(e) => {
							e.preventDefault();
							setEmailMissing(e.target.validity.valueMissing);
						}}
						type="text"
						placeholder="Email Address"
						required
					/>
					<i
						className="field-required"
						style={{ display: emailMissing ? "block" : "none" }}
					>
						This field is required
					</i>
					<input type="text" placeholder="Company Name" />
					<input type="text" placeholder="Title" />
					<textarea type="text" placeholder="Message"></textarea>
					<button disabled aria-disabled>
						submit
					</button>
				</form>
			</div>
			<img
				className="contact__bg-bottom"
				src="/assets/bg-pattern-contact-2.svg"
				alt="svg"
			/>
		</section>
	);
};

export default Contact;

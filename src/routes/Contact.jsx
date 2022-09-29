import React, { useState, useEffect } from "react";

const Contact = () => {
	useEffect(() => {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}, []);
	const [nameMissing, setNameMissing] = useState(false);
	const [emailMissing, setEmailMissing] = useState(false);
	const [messageMissing, setMessageMissing] = useState(false);

	const [formData, setFormData] = useState({
		nameMissing: false,
		emailMissing: false,
		messageMissing: false,
		emailFormatCorrect: false,
	});

	let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

	console.log(formData);
	return (
		<section className="contact">
			<img
				className="contact__bg-top"
				src="assets/bg-pattern-about-2-contact-1.svg"
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
							src="assets/icon-person.svg"
							alt="icon"
						/>
						<p>The quality of our talent network</p>
					</li>
					<li>
						<img
							className="contact__icon"
							src="assets/icon-cog.svg"
							alt="icon"
						/>
						<p>Usage & implementation of our software</p>
					</li>
					<li>
						<img
							className="contact__icon"
							src="assets/icon-chart.svg"
							alt="icon"
						/>
						<p>How we help drive innovation</p>
					</li>
				</ul>
			</div>
			<div className="contact__flex-right">
				<form action="#">
					<input
						type="text"
						placeholder="Name"
						name="name"
						onChange={(e) => {
							e.preventDefault();
							setFormData((prevData) => ({
								...prevData,
								nameMissing: e.target.validity.valueMissing,
							}));
						}}
						required
					/>

					<i
						className="field-required"
						style={{
							display: formData.nameMissing ? "block" : "none",
						}}
					>
						This field is required
					</i>
					<input
						onChange={(e) => {
							e.preventDefault();
							setFormData((prevData) => ({
								...prevData,
								emailMissing: e.target.validity.valueMissing,
								emailFormatCorrect: emailReg.test(
									e.target.value
								),
							}));
						}}
						type="text"
						placeholder="Email Address"
						name="email"
						required
					/>
					<i
						className="field-required"
						style={{
							display: formData.emailMissing ? "block" : "none",
						}}
					>
						This field is required
					</i>
					<i
						className="field-required"
						style={{
							display: formData.emailFormatCorrect
								? "none"
								: "block",
						}}
					>
						Please use a valid email address.
					</i>
					<input
						type="text"
						placeholder="Company Name"
						name="company"
					/>
					<input type="text" placeholder="Title" name="title" />
					<textarea
						onChange={(e) => {
							e.preventDefault();
							setFormData((prevData) => ({
								...prevData,
								messageMissing: e.target.validity.valueMissing,
							}));
						}}
						type="text"
						placeholder="Message"
						required
					/>
					<i
						className="field-required"
						style={{
							display: formData.messageMissing ? "block" : "none",
						}}
					>
						This field is required
					</i>
					<button disabled aria-disabled>
						submit
					</button>
				</form>
			</div>
			<img
				className="contact__bg-bottom"
				src="assets/bg-pattern-contact-2.svg"
				alt="svg"
			/>
		</section>
	);
};

export default Contact;

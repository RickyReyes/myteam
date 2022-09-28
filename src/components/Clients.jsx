import React from "react";

const Clients = () => {
	return (
		<section className="clients">
			<img
				className="clients__bg"
				src="/bg-pattern-about-4.svg"
				alt="svg"
			/>
			<h3>Some of our clients</h3>
			<div className="clients__logos">
				<img src="/logo-the-verge.png" />
				<img src="/logo-jakarta-post.png" />
				<img src="/logo-the-guardian.png" />
				<img src="/logo-tech-radar.png" />
				<img src="/logo-gadgets-now.png" />
			</div>
		</section>
	);
};

export default Clients;

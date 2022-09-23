import React from "react";

const Clients = () => {
	return (
		<section className="clients">
			<img
				className="clients__bg"
				src="src/assets/bg-pattern-about-4.svg"
				alt="svg"
			/>
			<h3>Some of our clients</h3>
			<div className="clients__logos">
				<img src="/src/assets/logo-the-verge.png" />
				<img src="/src/assets/logo-jakarta-post.png" />
				<img src="/src/assets/logo-the-guardian.png" />
				<img src="/src/assets/logo-tech-radar.png" />
				<img src="/src/assets/logo-gadgets-now.png" />
			</div>
		</section>
	);
};

export default Clients;

import React from "react";

const Features = () => {
	return (
		<section className="features">
			<img
				className="features__bg-img"
				src="./src/assets/bg-pattern-about-4.svg"
				alt="svg"
			/>
			<div>
				<div className="features__pink-line"></div>
				<h2>Build & manage distributed teams like no one else.</h2>
			</div>
			<div className="feature-container">
				<div className="feature">
					<img src="./src/assets/icon-person.svg" alt="svg" />
					<div className="feature__name-and-p">
						<div className="feature__name">
							Experienced Individuals
						</div>
						<p>
							Our network is made up of highly experienced
							professionals who are passionate about what they do.
						</p>
					</div>
				</div>
				<div className="feature">
					<img src="./src/assets/icon-cog.svg" alt="svg" />
					<div className="feature__name-and-p">
						<div className="feature__name">Easy to Implement</div>
						<p>
							Our processes have been refined over years of
							implementation meaning our teams always deliver.
						</p>
					</div>
				</div>
				<div className="feature">
					<img src="./src/assets/icon-chart.svg" alt="svg" />
					<div className="feature__name-and-p">
						<div className="feature__name">
							Enhanced Productivity
						</div>
						<p>
							Our customized platform with in-built analytics
							helps you manage your distributed teams.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;

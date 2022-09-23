import Directors from "../components/Directors";
import Clients from "../components/Clients";
import Ready from "../components/Ready";

const About = () => {
	document.body.scrollTop = document.documentElement.scrollTop = 0;
	return (
		<div className="about">
			<section className="about__hero">
				<h1>About</h1>
				<p>
					We help companies build dynamic teams made up of top global
					talent. Using our network of passionate professionals we
					drive innovation and deliver incredible outcomes. Talented,
					diverse teams shape the best products and experiences. We’ll
					bring those teams to you.
				</p>
				<img
					className="about__hero-bg"
					src="src/assets/bg-pattern-about-1-mobile-nav-1.svg"
					alt="svg"
				/>
			</section>
			<Directors />
			<Clients />
			<Ready />
		</div>
	);
};

export default About;

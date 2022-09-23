import Hero from "../components/Hero";
import Features from "../components/Features";
import Reviews from "../components/Reviews";
import Ready from "../components/Ready";

const Home = () => {
	document.body.scrollTop = document.documentElement.scrollTop = 0;
	return (
		<>
			<Hero />
			<Features />
			<Reviews />
			<Ready />
		</>
	);
};

export default Home;

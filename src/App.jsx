import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";

import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";

import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
	const [showMobileNav, setShowMobileNav] = useState(false);
	return (
		<div className="App">
			{showMobileNav && (
				<MobileNav
					showMobileNav={showMobileNav}
					setShowMobileNav={setShowMobileNav}
				/>
			)}
			<Header
				showMobileNav={showMobileNav}
				setShowMobileNav={setShowMobileNav}
			/>
			<Routes>
				<Route
					path="/"
					element={
						<Home
							showMobileNav={showMobileNav}
							setShowMobileNav={setShowMobileNav}
						/>
					}
				></Route>
				<Route path="/about" element={<About />}></Route>
				<Route path="/contact" element={<Contact />}></Route>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;

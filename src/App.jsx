import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";

import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";

import { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
	const [showMobileNav, setShowMobileNav] = useState(false);

	/* Hide Mobile Nav when you click outside of it. */
	let navRef = useRef(null);
	useEffect(() => {
		let handler = (e) => {
			if (e.target.src && e.target.src.includes("icon-close.svg")) {
				setShowMobileNav(false);
			} else if (navRef.current && !navRef.current.contains(e.target)) {
				setShowMobileNav(false);
			}
		};
		document.addEventListener("mousedown", handler);
		return () => {
			document.removeEventListener("mousedown", handler);
		};
	}, []);
	return (
		<div
			className="App"
			style={{ position: showMobileNav ? "fixed" : "relative" }}
		>
			{showMobileNav && (
				<MobileNav
					navRef={navRef}
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

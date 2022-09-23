import React from "react";
import { Link } from "react-router-dom";

const MobileNav = ({ showMobileNav, setShowMobileNav }) => {
	return (
		<nav className={`mobile-nav ${showMobileNav ? "show" : "hidden"}`}>
			<ul>
				<li>
					<Link onClick={() => setShowMobileNav(false)} to="/">
						home
					</Link>
				</li>
				<li>
					<Link onClick={() => setShowMobileNav(false)} to="/about">
						about
					</Link>
				</li>
			</ul>
			<Link onClick={() => setShowMobileNav(false)} to="/contact">
				<button>contact us</button>
			</Link>
			<img
				className="mobile-nav__bg"
				src="/src/assets/bg-pattern-about-1-mobile-nav-1.png"
				alt="svg"
			/>
		</nav>
	);
};

export default MobileNav;

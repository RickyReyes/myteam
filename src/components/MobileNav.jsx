import React from "react";
import { Link } from "react-router-dom";

const MobileNav = ({ navRef, showMobileNav, setShowMobileNav }) => {
	return (
		<nav
			ref={navRef}
			className={`mobile-nav ${showMobileNav ? "show" : "hidden"}`}
		>
			<div
				onClick={() => setShowMobileNav(false)}
				className="mobile-nav__close-container"
			>
				<img
					className="mobile-nav__close"
					src="/icon-close.svg"
					alt="close icon"
				/>
			</div>
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
				src="/bg-pattern-about-1-mobile-nav-1.png"
				alt="svg"
			/>
		</nav>
	);
};

export default MobileNav;

import React from "react";
import { Link } from "react-router-dom";
const Header = ({ showMobileNav, setShowMobileNav }) => {
	return (
		<header>
			<div className="header__logo-and-nav">
				<Link className="logo-container" to="/">
					<img
						className="logo"
						src="/src/assets/logo.svg"
						alt="logo"
					/>
				</Link>
				<nav className="header__nav">
					<Link to="/">home</Link>
					<Link to="/about">about</Link>
				</nav>
			</div>
			<button className="header__btn">
				<Link to="/contact">contact us</Link>
			</button>
			<img
				onClick={() => setShowMobileNav((prev) => !prev)}
				className="header__toggle-btn"
				src={`/src/assets/icon-${
					showMobileNav ? "close" : "hamburger"
				}.svg`}
				alt="hamburger icon"
			/>
		</header>
	);
};

export default Header;

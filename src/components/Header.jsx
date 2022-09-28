import React from "react";
import { Link } from "react-router-dom";
const Header = ({ showMobileNav, setShowMobileNav }) => {
	return (
		<header>
			<div className="header__logo-and-nav">
				<Link className="logo-container" to="/">
					<img
						className="logo"
						src="/public/assets/logo.svg"
						alt="logo"
					/>
				</Link>
				<nav className="header__nav">
					<Link to="/">home</Link>
					<Link to="/about">about</Link>
				</nav>
			</div>

			<Link className="header__btn-container" to="/contact">
				<button className="header__btn">contact us</button>
			</Link>

			<img
				onClick={() => setShowMobileNav((prev) => !prev)}
				className="header__toggle-btn"
				src={`public/assets/icon-${
					showMobileNav ? "close" : "hamburger"
				}.svg`}
				alt="icon"
			/>
		</header>
	);
};

export default Header;

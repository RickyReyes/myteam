import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer>
			<div className="footer__top-flex">
				<div className="footer__logo-and-links">
					<Link to="/">
						<img
							className="footer__logo"
							src="/logo.svg"
							alt="logo"
						/>
					</Link>
					<ul className="footer__links">
						<li>
							<Link to="/">home</Link>
						</li>
						<li>
							<Link to="/about">about</Link>
						</li>
					</ul>
				</div>
				<ul className="footer__address">
					<li>987 Hillcrest Lane</li>
					<li>Irvine, CA</li>
					<li>California 92714</li>
					<li>Call Us: 949-833-7432</li>
				</ul>
			</div>
			<div className="footer__bottom-flex">
				<ul className="footer__icons">
					<li>
						<img
							className="footer__logo"
							src="/icon-facebook.svg"
							alt="facebook logo"
						/>
					</li>
					<li>
						<img
							className="footer__logo"
							src="/icon-pinterest.svg"
							alt="pinterest logo"
						/>
					</li>
					<li>
						<img
							className="footer__logo"
							src="/icon-twitter.svg"
							alt="twitter logo"
						/>
					</li>
				</ul>
				<p className="footer__copyright">
					Copyright 2022. All Rights Reserved
				</p>
			</div>
		</footer>
	);
};

export default Footer;

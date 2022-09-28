import React, { useState } from "react";

const Director = ({ name, position, imgPath, quote }) => {
	const [showQuote, setShowQuote] = useState(false);
	return (
		<li className="director">
			{showQuote ? (
				<>
					<p className="director__name">{name}</p>
					<p className="director__quote">“{quote}”</p>
					<ul className="director__icons">
						<li>
							<img src="/icon-twitter.svg" alt="" />
						</li>
						<li>
							<img src="/icon-linkedin.svg" alt="" />
						</li>
					</ul>
				</>
			) : (
				<>
					<img
						className="director__photo"
						src={`/${imgPath}`}
						alt="director headshot"
					/>
					<p className="director__name">{name}</p>
					<i>{position}</i>
				</>
			)}
			<img
				onClick={() => setShowQuote((prev) => !prev)}
				className={`director__${showQuote ? "close" : "cross"}`}
				src={`/icon-${showQuote ? "close" : "cross"}.svg`}
			/>
		</li>
	);
};

export default Director;

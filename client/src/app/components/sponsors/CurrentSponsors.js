import React, { useState, useEffect } from "react";
import getSheetsData from "app/services/google-sheets-handler";
import "./CurrentSponsors.scss";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function CurrentSponsors() {
	const [sponsors, setSponsors] = useState([]);

	useEffect(() => {
		getSheetsData("sponsors").then((data) => {
			setSponsors(data);
		});
	}, []);

	return (
		<div className="current-sponsors-container">
			<h2>Our Sponsors</h2>
			<p>
				Hack at UCI’s hackathons and events wouldn’t be possible without the aid
				from our amazing sponsors that have helped us over the years. Each
				donation goes right back into creating an outstanding experience for
				everyone who attends.
			</p>
			<Link className="sponsor-more-info" to="/sponsor-info">
				More Information <span className="chevron">&rsaquo;</span>
			</Link>

			<div className="sponsor-grid">
				{sponsors.map((sponsor) => (
					<a
						key={sponsor.name}
						href={sponsor.website}
						target="_blank"
						rel="noopener noreferrer"
						className="sponsor-logo"
					>
						<img src={sponsor.image} alt={sponsor.name} />
					</a>
				))}
			</div>
		</div>
	);
}

export default CurrentSponsors;

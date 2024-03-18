import graphicsLogo from "assets/icons/graphics-logo.svg";

function Graphics() {
	return (
		<>
			<img src={graphicsLogo} alt="Graphics logo" />
			<h3>Graphics</h3>
			<p>
				As a graphic designer, you will be responsible for creating graphics
				that represent our organization and events for various platforms, such
				as Facebook or Instagram. Designers also shape the theme and aesthetic
				for ZotHacks and IrvineHacks. Each design will follow general guidelines
				and have to be submitted for review before given deadlines. You must be
				detail-oriented and have proficient knowledge in visual design, color
				theory, and typography. You will also be working closely with the web
				development team, so experience with HTML and CSS is a plus, but not
				required.
			</p>
			<p>
				<strong>Key Qualifications</strong>
			</p>
			<ul>
				<li>Proficiency in graphic design</li>
				<li>
					Experience using a raster graphics editor (ex. Adobe Photoshop, Fire
					Alpaca, etc.)
				</li>
				<li>Creative and critical thinking abilities</li>
				<li>
					Experience using a vector graphics editor (ex. Adobe Illustrator,
					Inkscape, etc.)
				</li>
				<li>
					Willing to dedicate ~4 hours per week to Hack (meeting, content
					creation, etc.)
				</li>
			</ul>
		</>
	);
}

export default Graphics;

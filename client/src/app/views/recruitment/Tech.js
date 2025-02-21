import techLogo from "assets/icons/tech-logo.svg";

function Tech() {
	return (
		<>
			<img src={techLogo} alt="Tech logo" />
			<h3>Technology</h3>
			<p>
				Every year, thousands of students across the country apply to our annual
				hackathons on our website. In addition, our website also receives a huge
				amount of traffic from various companies who visit our website to obtain
				sponsorship information. By joining the Technology team, you not only
				get to work on a large-scale hackathon application tracking platform,
				but you also have the opportunity to build exciting internal tools for
				our organizers so that they can work more efficiently.
			</p>
			<p>
				As a general developer, you will design and develop an eye-catching user
				interface that delivers a good first impression to both attendees and
				sponsors. You will also be tasked with building our server-side
				application or setting up and maintaining databases.
			</p>
			<p>
				<strong>Key Qualifications</strong>
			</p>
			<ul>
				<li>Ability to write clean, well-documented code</li>
				<li>Proficiency in HTML, CSS and JavaScript</li>
				<li>Experience with modern JavaScript frameworks</li>
				<li>Experience with version control systems (e.g. Git)</li>
			</ul>
			<p>
				<strong>Preferred Qualifications</strong>
			</p>
			<ul>
				<li>
					Experience with front-end styling libraries (e.g. Tailwind, Radix,
					etc.)
				</li>
				<li>Experience developing web applications with React</li>
				<li>Experience with backend web frameworks (e.g. Express, FastAPI)</li>
				<li>Experience using cloud databases</li>
			</ul>
		</>
	);
}

export default Tech;

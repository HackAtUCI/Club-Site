import techLogo from "assets/icons/tech-logo.svg";

function Tech() {
	return (
		<>
			<img src={techLogo} alt="Tech logo" />
			<h3>Technology</h3>
			<p>
				Every year, thousands of students across the country apply to our annual
				HackUCI event on our website. In addition, our website also receives a
				huge amount of traffic from various companies who visit our website to
				obtain sponsorship information. By joining the Technology team, you not
				only get to work on a large-scale hackathon application tracking
				platform, but you also have the opportunity to build exciting internal
				tools for our organizers so that they can work more efficiently.
			</p>
			<p>
				As a general developer, your primary task is to design and develop an
				eye-catching user interface that delivers a good first impression to
				both attendees and sponsors. You will be streamlining the hackathon
				registration experience and utilize the latest frontend technologies to
				implement it. On occasion, you will be tasked with building onto our
				server-side application or setting up and maintaining databases.
			</p>
			<p>
				<strong>Key Qualifications</strong>
			</p>
			<ul>
				<li>Proficiency in HTML5, CSS3 and Javascript</li>
				<li>Experience in modern Javascript frameworks</li>
				<li>Ability to write clean, well documented code</li>
				<li>
					Experience with front-end styling frameworks (Bootstrap, Semantic UI,
					Material UI, etc.)
				</li>
			</ul>
			<p>
				<strong>Preferred Qualifications</strong>
			</p>
			<ul>
				<li>Experience in developing Node.js web applications</li>
				<li>Experience in setting up and maintaining MongoDB databases</li>
				<li>Experience with cloud technologies (AWS, GCP, Heroku)</li>
			</ul>
		</>
	);
}

export default Tech;

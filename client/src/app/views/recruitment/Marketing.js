import marketingLogo from "assets/icons/marketing-logo.svg";

function Marketing() {
	return (
		<>
			<img src={marketingLogo} alt="Marketing logo" />
			<h3>Marketing</h3>
			<p>
				As a marketing intern, your responsibilities vary from sending emails to
				making posts on social media platforms in a witty and creative manner.
				This role demands not only meeting strict deadlines but also excelling
				in communication, as effective engagement with the public is the essence
				of marketing.
			</p>
			<p>
				<strong>Key Qualifications</strong>
			</p>
			<ul>
				<li>Exceptional communication and writing skills</li>
				<li>
					Experience with email and social media marketing campaigns (Instagram,
					Discord, MailChimp)
				</li>
				<li>Creative and critical thinking abilities</li>
				<li>Drive to work in a fast-paced cross-functional team</li>
				<li>Photography and videography skills preferred</li>
			</ul>
		</>
	);
}

export default Marketing;

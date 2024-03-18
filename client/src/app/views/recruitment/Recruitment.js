import { Header } from "app/containers";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Corporate from "./Corporate";
import Logistics from "./Logistics";
import Marketing from "./Marketing";
import Graphics from "./Graphics";
import Tech from "./Tech";
import lightBulb from "assets/icons/light_bulb.svg";
import searchIcon from "assets/icons/search_icon.svg";
import gears from "assets/icons/gears.svg";
import "./Recruitment.scss";
import Button from "react-bootstrap/Button";


const COMMITTEES = {
	Corporate: <Corporate />,
	Logistics: <Logistics />,
	Marketing: <Marketing />,
	Graphics: <Graphics />,
	Technology: <Tech />,
};

function Recruitment() {
	return (
		<div className="Recruitment">
			<Header title="Recruitment" />
			<Container className="about">
				<Row>
					<Col lg>
						<img src={lightBulb} alt="Light bulb icon" />
						<h3 className="my-4">Learn</h3>
						<p>
							We host workshops and hackathons that support people as they learn
							industry-relevant skills.
						</p>
					</Col>
					<Col lg>
						<img src={searchIcon} alt="Search icon" />
						<h3 className="my-4">Explore</h3>
						<p>
							We provide professional events that help people to explore new
							technologies, ground-breaking ideas, and career paths.
						</p>
					</Col>
					<Col lg>
						<img src={gears} alt="Gears icon" />
						<h3 className="my-4">Create</h3>
						<p>
							We support the developer community at UCI to collaborate on
							innovative, technical products that have meaning.
						</p>
					</Col>
				</Row>
			</Container>
			<section className="committees">
				<Container>
					<h2 style={{ marginBottom: "3rem" }}>Our Committees</h2>
					<Tabs defaultActiveKey="corporate" justify>
						{Object.entries(COMMITTEES).map(([name, component], index) => (
							<Tab eventKey={name.toLowerCase()} key={index} title={name}>
								<Container className="committee">{component}</Container>
							</Tab>
						))}
					</Tabs>
					<Button
						href="https://airtable.com/appi73UpO0E7U0RwR/shrvkL0Up9bQVXz0l"
						target="_blank"
						rel="noreferrer noopener"
						className="apply"
					>
						<strong>Interested? Apply Now!</strong>
					</Button>
				</Container>
			</section>
			
		</div>
	);
}

export default Recruitment;

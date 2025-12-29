import { useState } from "react";
import Modal from "react-modal";
import PrimaryButton from "@/lib/components/PrimaryButton/PrimaryButton";

import "./NewsLetterSignupModal.css";

Modal.setAppElement("#root");

interface NewsletterSignupModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

export default function NewsletterSignupModal({
	isOpen,
	onRequestClose,
}: NewsletterSignupModalProps) {
	const [showAlert, setShowAlert] = useState(false);
	const [alertSuccess, setAlertSuccess] = useState(false);

	const [email, setEmail] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [graduationYear, setGraduationYear] = useState("");

	function handleCloseModal() {
		clearForm();
		onRequestClose();
	}

	function clearForm() {
		setShowAlert(false);
		setAlertSuccess(false);
		setEmail("");
		setFirstName("");
		setLastName("");
		setGraduationYear("");
	}

	function handleSubmit() {
		// Optimistic UI update
		setAlertSuccess(true);
		setShowAlert(true);
	}

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			className="newsletter-modal"
			overlayClassName="newsletter-modal-overlay"
		>
			<div className="newsletter-modal-content">
				<button className="newsletter-modal-close" onClick={handleCloseModal}>
					×
				</button>
				<div className="card">
					<h2>Join our newsletter!</h2>
					<form
						className="newsletter-form"
						action="https://uci.us13.list-manage.com/subscribe/post?u=5976872928cd5681fbaca89f6&amp;id=93333e11eb"
						method="post"
						name="mc-embedded-subscribe-form"
						target="_blank"
						onSubmit={handleSubmit}
					>
						<label>
							Graduating Year <span className="asterisk">*</span>
						</label>
						<input
							id="userYear"
							type="text"
							maxLength={4}
							className="form-control"
							name="MMERGE4"
							required
							value={graduationYear}
							onChange={(event) => setGraduationYear(event.target.value)}
						/>
						<br />
						<label>
							First Name <span className="asterisk">*</span>
						</label>
						<input
							id="userFName"
							type="text"
							className="form-control"
							name="FNAME"
							required
							value={firstName}
							onChange={(event) => setFirstName(event.target.value)}
						/>
						<br />
						<label>
							Last Name <span className="asterisk">*</span>
						</label>
						<input
							id="userLName"
							type="text"
							className="form-control"
							name="LNAME"
							required
							value={lastName}
							onChange={(event) => setLastName(event.target.value)}
						/>
						<br />
						<label>
							Email Address <span className="asterisk">*</span>
						</label>
						<input
							id="userEmail"
							type="email"
							className="form-control"
							name="EMAIL"
							required
							value={email}
							onChange={(event) => setEmail(event.target.value)}
						/>
						<br />
						<div className="d-flex text-center flex-center">
							<PrimaryButton type="submit" name="subscribe">
								Sign Up
							</PrimaryButton>
						</div>
						<br />
						{showAlert && (
							<div
								className={`newsletter-alert ${
									alertSuccess
										? "newsletter-alert-success"
										: "newsletter-alert-error"
								}`}
							>
								{alertSuccess ? (
									<>
										<h3>Successfully Submitted!</h3>
									</>
								) : (
									<>
										<h3>Submission Error!</h3>
										<p>
											Your request to subscribe has not been queued! You may
											have already submitted a request under this email. If you
											do not receive an invite email in 20 minutes, please
											contact us at{" "}
											<a href="mailto:hack@uci.edu">hack@uci.edu</a>.
										</p>
									</>
								)}
							</div>
						)}
					</form>
					<p className="newsletter-mailchimp-info">
						Mailchimp collects the following information for our sponsors and to
						ensure all newsletters are sent to the appropriate person.
					</p>
				</div>
			</div>
		</Modal>
	);
}

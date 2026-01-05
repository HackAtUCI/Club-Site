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
	const [email, setEmail] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [graduationYear, setGraduationYear] = useState("");

	function handleCloseModal() {
		clearForm();
		onRequestClose();
	}

	function clearForm() {
		setEmail("");
		setFirstName("");
		setLastName("");
		setGraduationYear("");
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
					>
						<div className="newletter-input-group">
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
						</div>

						<div className="newletter-input-group">
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
						</div>

						<div className="newletter-input-group">
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
						</div>

						<div className="newletter-input-group">
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
						</div>

						<div className="d-flex text-center flex-center">
							<PrimaryButton type="submit" name="subscribe">
								Sign Up
							</PrimaryButton>
						</div>
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

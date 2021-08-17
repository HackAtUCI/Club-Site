import React, { useState } from "react";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import "./Newsletter.scss";

function Newsletter(props) {
  const [showAlert, setShowAlert] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [graduationYear, setGraduationYear] = useState("");

  function submitDiscordSignUp(e) {
    axios
      .post("api/discord/signups", {
        email,
        firstName,
        lastName,
      })
      .then((response) => {
        setAlertSuccess(true);
        setShowAlert(true);
      })
      .catch((err) => {
        setAlertSuccess(false);
        setShowAlert(true);
      });
  }

  return (
    <div
      id="newsletter"
      className="jumbotron jumbotron-fluid newsletter"
      style={props.style}
    >
      <div id="discord" className="text-left newsletter-container">
        <div className="newsletter-left">
          <h2>Join our Discord and newsletter!</h2>
          <p className="newsletter-info">
            Get Involved! Just fill in your information and click "Sign Up".
            Hack at UCI will email you an invite link to our discord server and
            subscribe you to our newsletter for the club's updates and events.
          </p>
          <p className="newsletter-mailchimp-info">
            Mailchimp collects the following information for our sponsors and to
            ensure all newsletters are sent to the appropriate person.
          </p>
        </div>
        <form
          className="newsletter-form"
          action={
            "https://uci.us13.list-manage.com/subscribe/post?u=5976872928cd5681fbaca89f6&amp;id=93333e11eb"
          }
          method={"post"}
          name={"mc-embedded-subscribe-form"}
          target={"_blank"}
          onSubmit={submitDiscordSignUp}
        >
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
            Graduating Year <span className="asterisk">*</span>
          </label>
          <input
            id="userYear"
            type="text"
            maxLength="4"
            className="form-control"
            name="MMERGE4"
            required
            value={graduationYear}
            onChange={(event) => setGraduationYear(event.target.value)}
          />
          <br />
          <div className="d-flex text-left">
            <button className="newsletter-button" name="subscribe">
              Sign Up
            </button>
          </div>
          <br />
          <div className="d-flex text-left">
            <Alert
              show={showAlert}
              variant={alertSuccess ? "success" : "danger"}
            >
              {alertSuccess && (
                <React.Fragment>
                  <Alert.Heading>Successfully Submitted!</Alert.Heading>
                  <p>
                    You'll receive an invite link for our Discord server at the
                    email provided above within 5 minutes.
                  </p>
                </React.Fragment>
              )}
              {!alertSuccess && (
                <React.Fragment>
                  <Alert.Heading>Submission Error!</Alert.Heading>
                  <p>
                    Your request to subscribe has not been queued! You may have
                    already submitted a request under this email. If you do not
                    receive an invite email in 20 minutes, please contact us at{" "}
                    <a href="mailto:hackuci@gmail.com">hack@uci.edu</a>.
                  </p>
                </React.Fragment>
              )}
            </Alert>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;

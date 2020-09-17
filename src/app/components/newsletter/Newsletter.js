import React from "react";
import "./Newsletter.scss";

function Newsletter(props) {
  return (
    <div
      id="newsletter"
      className="jumbotron jumbotron-fluid newsletter"
      style={props.style}
    >
      <div className="container text-left newsletter-container">
        <h1 className="newsletter-left">
          <b>Subscribe to our newsletter!</b>
        </h1>
        <div className="newsletter-left">
          <p className="newsletter-info">
            Get Involved! By filling your information and clicking "Subscribe",
            Hack at UCI will send you emails about the club's updates and
            events.{" "}
          </p>
          <p className="newsletter-mailchimp-info">
            Mailchimp collects the following information for our sponsors and to
            ensure all newsletters are sent to the appropriate person.
          </p>
        </div>
        <form
          className="newsletter-form"
          action="https://uci.us13.list-manage.com/subscribe/post?u=5976872928cd5681fbaca89f6&amp;id=93333e11eb"
          method="post"
          name="mc-embedded-subscribe-form"
          target="_blank"
          noValidate
        >
          <label>
            Email Address <span className="asterisk">*</span>{" "}
          </label>
          <input
            id="userEmail"
            type="email"
            className="form-control"
            name="EMAIL"
          />{" "}
          <br />
          <label>First Name</label>
          <input
            id="userFName"
            type="text"
            className="form-control"
            name="FNAME"
          />{" "}
          <br />
          <label>Last Name</label>
          <input
            id="userLName"
            type="text"
            className="form-control"
            name="LNAME"
          />{" "}
          <br />
          <label>Graduating Year</label>
          <input
            id="userYear"
            type="text"
            maxLength="4"
            className="form-control"
            name="MMERGE4"
          />{" "}
          <br />
          <div className="d-flex text-left">
            <button className="involved-button" name="subscribe">
              <b>Subscribe</b>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;

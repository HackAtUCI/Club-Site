import React, { useState } from "react";
import "./CommitteeDropdown.scss";

import Collapse from "react-bootstrap/Collapse";
// import Button from "react-bootstrap/Button";
import Chevron from "assets/fa-icons/chevron.svg";

function CommitteeDropdownButton({committeeName, aboutText, keyQuals, prefQuals=[]}) {
    const [open, setOpen] = useState(false);

    return(
        <div>
            <button
                onClick={() => setOpen(!open)}
                aria-controls="collapse-text"
                aria-expanded={open}
                className="dropdown-btn"
            >
            {committeeName}
            <img src={Chevron} className="chevron"></img>
            </button>
            <Collapse in={open} className="dropdown-section">
                <div id="collapse-text">
                    <div className="description-section">
                        
                        <p>
                            <b>About</b>
                            <br/>
                            {aboutText}
                        </p>
                        <br/>
                        <p><b>Key Qualifications</b></p>
                        <ul>{keyQuals.map(text => <li>{text}</li>)}</ul>
                        { prefQuals.length > 0 ? <div>
                            <b>Preferred Qualifications</b>
                            <p>{prefQuals.map(text => <li>{text}</li>)}</p>
                        </div> : "" }
                    </div>
                    <button className="apply-committee-btn">{committeeName} Application</button>
                </div>
            </Collapse>
        </div>
    );
}

export default CommitteeDropdownButton;
import React, { useState, useEffect } from "react";
import getSheetsData from "app/services/google-sheets-handler";

import "./CurrentSponsors.scss";

function CurrentSponsors(props) {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    getSheetsData("sponsors").then((data) => {
      setSponsors(data);
    });
  }, []);

  return (
    <React.Fragment>
      <div className="container d-flex justify-content-center sponsor-current">
        Our Past Sponsors
      </div>
      <div className="sponsor-list">
        {sponsors.map((sponsor) => (
          <div className="sponsor-list-item">
            <a href={sponsor.website} target="_blank" rel="noopener noreferrer">
              <img src={sponsor.image} alt={sponsor.name} />
            </a>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default CurrentSponsors;

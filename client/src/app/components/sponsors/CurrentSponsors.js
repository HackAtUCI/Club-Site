import React, { useState, useEffect } from "react";

import getSheetsData from "app/services/google-sheets-handler";

import "./CurrentSponsors.scss";

function CurrentSponsors() {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    getSheetsData("sponsors").then((data) => {
      setSponsors(data);
    });
  }, []);

  return (
    <div className="sponsor-list">
      {sponsors.map((sponsor) => (
        <div key={sponsor.name} className="sponsor-list-item">
          <a href={sponsor.website} target="_blank" rel="noopener noreferrer">
            <img src={sponsor.image} alt={sponsor.name} />
          </a>
        </div>
      ))}
    </div>
  );
}

export default CurrentSponsors;

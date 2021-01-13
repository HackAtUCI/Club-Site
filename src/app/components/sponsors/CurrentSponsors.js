import React from "react";

import "./CurrentSponsors.scss";

import bentley from "assets/sponsors/bentley.png";
import mobilityware from "assets/sponsors/mobilityware-logo.png";
import gcp from "assets/sponsors/google-cloud-logo.png";
import crowdstrike from "assets/sponsors/crowdstrike.png";
import wayup from "assets/sponsors/wayup.png";
import linode from "assets/sponsors/linode.png";

// Clubs
import codepath from "assets/sponsors/codepath.png";
// import wics from "assets/sponsors/wics-website-logo.png";
// import aiuci from "assets/sponsors/ai-at-uci.png";
// import vgdc from "assets/sponsors/vgdc-logo.png";
// import cyber from "assets/sponsors/cyber-logo.png";
// import icssc from "assets/sponsors/icssc-logo.png";

const sponsors = [
  {
    name: "Bentley Systems",
    src: bentley,
    url: "https://www.bentley.com/en",
  },
  {
    name: "MobilityWare",
    src: mobilityware,
    url: "https://www.mobilityware.com/",
  },
  {
    name: "Google Cloud Platform",
    src: gcp,
    url: "https://cloud.google.com/",
  },
  {
    name: "CrowdStrike",
    src: crowdstrike,
    url: "https://www.crowdstrike.com/",
  },
  {
    name: "WayUp",
    src: wayup,
    url: "https://www.wayup.com/",
  },
  {
    name: "linode",
    src: linode,
    url: "https://www.linode.com/",
  },
  {
    name: "CodePath",
    src: codepath,
    url: "https://codepath.org/",
  },
  //   {
  //     name: "Postman",
  //     src: postman,
  //     url: "https://www.postman.com/",
  //   },

  //   {
  //     name: "WICS",
  //     src: wics,
  //     url: "https://wics.ics.uci.edu/",
  //   },
  //   {
  //     name: "AI @ UCI",
  //     src: aiuci,
  //     url: "https://aiclub.ics.uci.edu/",
  //   },
  //   {
  //     name: "VGDC",
  //     src: vgdc,
  //     url: "https://sites.google.com/uci.edu/vgdcuci/home",
  //   },
  //   {
  //     name: "Cyber @ UCI",
  //     src: cyber,
  //     url: "https://cyberclub.ics.uci.edu/",
  //   },
  //   {
  //     name: "ICSSC",
  //     src: icssc,
  //     url: "https://studentcouncil.ics.uci.edu/",
  //   },
];

function CurrentSponsors(props) {
  return (
    <React.Fragment>
      <div className="container d-flex justify-content-center sponsor-current">
        <b>Current Sponsors</b>
      </div>
      <div className="sponsor-list">
        {sponsors.map((sponsor) => (
          <div className="sponsor-list-item">
            <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
              <img src={sponsor.src} alt={sponsor.name} />
            </a>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default CurrentSponsors;

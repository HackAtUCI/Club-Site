import React from "react";

import "./Sponsorship.scss";
import HeaderCoord from "../../../assets/cord_1_kat.png";

function Sponsorship(props) {
  return (
    <div className="Sponsorship" style={props.style}>
        <div className="jumbotron jumbotron-fluid sponsor-header">
            <div className="home-header-coord"><img src={HeaderCoord} alt="usb-coord"/></div>
            <div className="container sponsor-header-container text-left">
                <p className="sponsor-header-font"><b>Gummi bears gingerbread danish donut danish jelly jelly beans liquorice chocolate chips. Topping poweder
                    desert oat cake. Chocolate jujubles pudding toffee candy canes. Chocolate bar candy cake icing.</b></p>
            </div>
        </div>
    </div>
  );
}

export default Sponsorship;

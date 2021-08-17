import React from "react";

import "./Header.scss";
import HeaderImage from "../../../assets/hackshapes_header.svg";

function Header(props) {
    if (props.type === "home") {
        return (
            <div className='jumbotron jumbotron-fluid global-header'>
                <h1 className='main-heading'>
                    Hack at UCI
                </h1>
                <div className='d-flex justify-content-center'>
                    <div className='involved-button'>
                        <a href='#newsletter'>Get Involved</a>
                    </div>
                </div>
                <div className="header-image">
                    <img src={HeaderImage} alt="header"/>
                </div>
            </div>
        )
    } else {
        return (
            <div className='jumbotron jumbotron-fluid global-header'>
                <h1 className='main-heading'>
                    {props.title}
                </h1>
                <div className="header-image">
                    <img src={HeaderImage} alt="header"/>
                </div>
            </div>
        )
    }
}

export default Header;

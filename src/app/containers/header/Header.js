import React from "react";

import "./Header.scss";
import HeaderImage from "../../../assets/hackshapes_header.svg";

function Header(props) {
    if (props.type === "home") {
        return (
            <div className='jumbotron jumbotron-fluid global-header'>
                <h1 className='header-font'>
                    <b>Hack at UCI</b>
                </h1>
                <div className='d-flex justify-content-center'>
                    <div className='involved-button'>
                        <b>
                            <a href='#newsletter'>Get Involved</a>
                        </b>
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
                <h1 className='header-font'>
                    <b>{props.title}</b>
                </h1>
                <div className="header-image">
                    <img src={HeaderImage} alt="header"/>
                </div>
            </div>
        )
    }
}

export default Header;

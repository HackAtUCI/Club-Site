import React from "react";
import Image from "react-bootstrap/Image";

import "./Header.scss";
import PrimaryButton from "app/components/primary-button/PrimaryButton";

import LogoWhite from "assets/header-logo/logo-white.png";
import LogoShadowBlue from "assets/header-logo/logo-shadow-blue.png";
import LogoShadowGreen from "assets/header-logo/logo-shadow-green.png";

function Header({ title }) {
	return (
		<header className="global-header">
			<Logo />
			<div className="header-items">
				<h1>{title}</h1>
				<PrimaryButton href="#newsletter" text="Get Involved" />
			</div>
		</header>
	);
}

// Logo with blue and green shadows
function Logo() {
	return (
		<div className="logo-wrapper">
			<Image
				src={LogoShadowGreen}
				alt="Hack at UCI logo"
				className="logo-shadow-green"
			/>
			<Image
				src={LogoShadowBlue}
				alt="Hack at UCI logo"
				className="logo-shadow-blue"
			/>

			<Image src={LogoWhite} alt="Hack at UCI logo" className="logo-white" />
		</div>
	);
}

export default Header;

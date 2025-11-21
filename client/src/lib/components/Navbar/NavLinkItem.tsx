import React from "react";
import { Link } from "react-router-dom";
import * as NavMenu from "@radix-ui/react-navigation-menu";

import "./Navbar.css";

const NavLinkItem = React.forwardRef<
	HTMLAnchorElement,
	React.ComponentPropsWithoutRef<typeof NavMenu.Link> & { to: string }
>(({ children, className, to, ...props }, forwardedRef) => {
	return (
		<NavMenu.Item>
			<NavMenu.Link
				className={`navMenuLink ${className}`}
				{...props}
				ref={forwardedRef}
				asChild
			>
				<Link to={to}>{children}</Link>
			</NavMenu.Link>
		</NavMenu.Item>
	);
});

NavLinkItem.displayName = "NavLinkItem";
export default NavLinkItem;

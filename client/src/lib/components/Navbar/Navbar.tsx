import { useState, type PropsWithChildren } from "react";
import * as NavMenu from "@radix-ui/react-navigation-menu";

import HackLogo from "@/assets/logos/hack_navbar.svg";
import hamburger from "@/assets/icons/navigation-icon.svg";
import useScrollFromTop from "@/lib/hooks/useScrollFromTop";
import NavLinkItem from "./NavLinkItem";

import "./Navbar.css";

const HamburgerMenu = ({ handleClick }: { handleClick: () => void }) => {
	return (
		<button
			type="button"
			className="ml-auto h-auto cursor-pointer md:hidden"
			onClick={handleClick}
		>
			<img src={hamburger} width="40" alt="Mobile hamburger menu" />
		</button>
	);
};

export default function BaseNavbar({ children }: PropsWithChildren) {
	const [listShown, setListShown] = useState(false);
	const [hidden, setHidden] = useState(true);

	const hasScrolledFromTop = useScrollFromTop();

	return (
		<NavMenu.Root
			className={`${hasScrolledFromTop ? "md:bg-black/50" : ""} ${
				hidden ? "max-md:h-[4rem] max-md:overflow-hidden" : ""
			} fixed z-50 flex w-full flex-col bg-black bg-black/0 transition-colors duration-0 ease-out md:flex-row md:items-center md:duration-700`}
		>
			<NavMenu.List className="flex bg-black bg-black/50 p-3 md:bg-black/0">
				<NavLinkItem to="/">
					<img src={HackLogo} alt="Hack at UCI Logo" width={40} height={40} />
				</NavLinkItem>
				<HamburgerMenu
					handleClick={() => {
						setListShown((listShown) => !listShown);
						setHidden(false);
					}}
				/>
			</NavMenu.List>
			<div className="navMenuListWrapper inline-block md:my-3 md:ml-auto md:flex md:items-center">
				<NavMenu.List
					className={`${hidden ? "opacity-0" : "opacity-100"} ${
						listShown ? "" : "-translate-y-full"
					} font-display gap-10 bg-black bg-black/50 p-5 pt-3 transition-transform duration-500 ease-in-out md:flex md:translate-y-0 md:items-center md:gap-0 md:bg-black/0 md:p-0 md:opacity-100 md:transition-none [&>*]:mr-10 [&>*]:mb-5 [&>*]:md:mb-0`}
					onTransitionEnd={() => setHidden(!listShown)}
				>
					<NavLinkItem to="/about">About</NavLinkItem>
					<NavLinkItem to="/events">Events</NavLinkItem>
					<NavLinkItem to="/recruitment">Recruitment</NavLinkItem>
					<NavLinkItem to="/contact">Contact Us</NavLinkItem>

					{children}
				</NavMenu.List>
			</div>
		</NavMenu.Root>
	);
}

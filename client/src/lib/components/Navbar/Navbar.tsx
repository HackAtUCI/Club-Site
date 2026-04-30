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
			className={`${hasScrolledFromTop ? "opacity-0" : "opacity-100"
               } hidden md:flex items-center justify-center fixed px-[50px] py-[25px] my-20 left-1/2 -translate-x-1/2 z-50 w-[700px] h-[60px] rounded-[25px] border border-[1.5px] border-white bg-black transition-opacity duration-300 ease-out`}
		>

			<NavMenu.List className="grid grid-cols-3 items-center w-full px-6">
				<div className="justify-self-start">
					<NavLinkItem to="/">
						<img src={HackLogo} alt="Hack at UCI Logo" width={34} height={34} />
					</NavLinkItem>
				</div>
				
				<div className="flex justify-center items-center gap-10 pt-2">
					<NavLinkItem to="/about">About</NavLinkItem>
					<NavLinkItem to="/events">Events</NavLinkItem>
					<NavLinkItem to="/recruitment">Recruitment</NavLinkItem>
				</div>
				<div className="justify-self-end ml-auto flex px-6 pt-3 pb-1 bg-[#333333] rounded-[12px]">
					<NavLinkItem to="/contact" className="flex justify-center items-center leading-none"
					>Join Us</NavLinkItem>
				</div>

				{children}
			</NavMenu.List>

		</NavMenu.Root>
	);
}

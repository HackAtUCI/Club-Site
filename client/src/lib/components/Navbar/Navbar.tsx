import { use, useState, type PropsWithChildren } from "react";
import * as NavMenu from "@radix-ui/react-navigation-menu";

import HackLogo from "@/assets/logos/hack_navbar.svg";
import hamburger from "@/assets/icons/navigation-icon.svg";
import useScrollDirection from "@/lib/hooks/useScrollDirection";
import NavLinkItem from "./NavLinkItem";

import "./Navbar.css";

const HamburgerMenu = ({ handleClick }: { handleClick: () => void }) => {
	return (
		<button
			type="button"
 			className="fixed bg-black p-4 top-16 right-8 rounded-[30px] h-auto border border-[1.5px] border-white cursor-pointer md:hidden"
			onClick={handleClick}
		>
			<img src={hamburger} width="40" alt="Mobile hamburger menu" />
		</button>
	);
};

const MobileDrawer = ({open, onClose, children}: PropsWithChildren<{open: boolean; onClose: () => void}>) => {
	return (
		<div className={`fixed top-0 right-0 z-50 h-full w-full bg-black flex flex-col transform transition-transform duration-300 ease-out md:hidden
		${open ? "translate-x-0" : "translate-x-full"}`}
		>
			<div className="flex flex-row items-center justify-between">
				<NavLinkItem to="/">
						<img src={HackLogo} alt="Hack at UCI Logo" width={34} height={34} />
				</NavLinkItem>
				<button
					onClick={onClose}
					className="text-white"
				>
					Back
				</button>
			</div>

			<NavMenu.List className="flex flex-col">
					<NavLinkItem to="/about">About</NavLinkItem>
					<NavLinkItem to="/events">Events</NavLinkItem>
					<NavLinkItem to="/sponsors">Sponsors</NavLinkItem>
					<NavLinkItem to="/recruitment">Join Us</NavLinkItem>
			</NavMenu.List>
			{children}
		</div>
	)
}

export default function BaseNavbar({ children }: PropsWithChildren) {
   const [drawerOpen, setDrawerOpen] = useState(false);

	const scrollDirection = useScrollDirection();

	return (
		<>
		<HamburgerMenu
           handleClick={() => {
               setDrawerOpen(prev => !prev);
           }}
       />

       <NavMenu.Root>
           <MobileDrawer open={drawerOpen} onClose={() =>  setDrawerOpen(false)}>
               {children}
           </MobileDrawer>
       </NavMenu.Root>

		<NavMenu.Root
			className={`${scrollDirection ? "opacity-0" : "opacity-100"
               } hidden md:flex items-center justify-center fixed px-12 py-6 my-20 left-1/2 -translate-x-1/2 z-50 w-[700px] h-[60px] rounded-[25px] border border-[1.5px] border-white bg-black transition-opacity duration-300 ease-out`}
		>
			<NavMenu.List className="flex justify-between items-center w-full gap-32">
				<div className="flex-shrink-0">
					<NavLinkItem to="/">
						<img src={HackLogo} alt="Hack at UCI Logo" width={34} height={34} />
					</NavLinkItem>
				</div>
				
				<div className="flex items-center gap-10 pt-2">
					<NavLinkItem to="/about">About</NavLinkItem>
					<NavLinkItem to="/events">Events</NavLinkItem>
					<NavLinkItem to="/sponsors">Sponsors</NavLinkItem>
				</div>
				<div className="flex-shrink-0 flex px-6 pt-2 bg-[#333333] rounded-xl">
					<NavLinkItem to="/recruitment">Join Us</NavLinkItem>
				</div>

				{children}
			</NavMenu.List>

		</NavMenu.Root>
		</>
	);
}

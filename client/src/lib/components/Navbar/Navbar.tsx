import { useEffect, useState, type PropsWithChildren } from "react";
import * as NavMenu from "@radix-ui/react-navigation-menu";

import HackLogo from "@/assets/logos/hack_navbar.svg";
import hamburger from "@/assets/icons/navigation-icon.svg";
import useScrollDirection from "@/lib/hooks/useScrollDirection";
import NavLinkItem from "./NavLinkItem";

import "./Navbar.css";

const navItems = [
	{ to: "/about", label: "About" },
	{ to: "/events", label: "Events" },
	{ to: "/sponsors", label: "Sponsors" },
]

const HamburgerMenu = ({ handleClick }: { handleClick: () => void }) => {
	return (
		<button
			type="button"
 			className="fixed z-50 bg-black p-4 top-6 right-5 rounded-[30px] h-auto border border-white cursor-pointer md:hidden"
			onClick={handleClick}
		>
			<img src={hamburger} width="35" alt="Mobile hamburger menu" />
		</button>
	);
};

const MobileDrawer = ({open, onClose, children}: PropsWithChildren<{open: boolean; onClose: () => void}>) => {
	return (
		<div className={`fixed top-0 right-0 z-50 h-full w-full bg-black flex flex-col transform transition-transform duration-300 ease-out md:hidden py-16 px-6
		${open ? "translate-x-0" : "translate-x-full"}`}
		>
			<div className="flex flex-row items-center justify-between">
				<NavLinkItem to="/" onClick={onClose}>
						<img src={HackLogo} alt="Hack at UCI Logo" width={50} height={50} />
				</NavLinkItem>
				<button onClick={onClose} className="text-white text-2xl">
					Back
				</button>
			</div>

			<NavMenu.List className="flex flex-col">
					<div className="flex flex-col items-end gap-8 my-18">
						{navItems.map(({ to, label }) => (
							<NavLinkItem key={to} to={to} className="text-4xl!" onClick={onClose}>{label}</NavLinkItem>
						))}
					</div>
					<div className="flex w-fit ml-auto px-12 py-4 bg-[#333333] rounded-3xl" onClick={onClose}>
						<NavLinkItem to="/recruitment" className="text-2xl! leading-none block">Join Us</NavLinkItem>
					</div>
			</NavMenu.List>
			{children}
		</div>
	)
}

export default function BaseNavbar({ children }: PropsWithChildren) {
   const [drawerOpen, setDrawerOpen] = useState(false);

	const scrollDirection = useScrollDirection();

	useEffect(() => {
		const handler = () => { if (window.innerWidth >= 768) setDrawerOpen(false);	}
		window.addEventListener("resize", handler);
		return () => window.removeEventListener("resize", handler);
	}, []);

	return (
		<>
		<HamburgerMenu handleClick={() => setDrawerOpen(prev => !prev)} />

       <NavMenu.Root>
           <MobileDrawer open={drawerOpen} onClose={() =>  setDrawerOpen(false)}>
               {children}
           </MobileDrawer>
       </NavMenu.Root>

		<NavMenu.Root
			className={`${scrollDirection ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
               } hidden md:flex items-center justify-center fixed px-12 py-6 my-10 left-1/2 -translate-x-1/2 z-50 w-[750px] h-[75px] rounded-3xl border border-white bg-black transition-all duration-300 ease-out`}
		>
			<NavMenu.List className="flex justify-between items-center w-full gap-32">
				<div className="shrink-0">
					<NavLinkItem to="/">
						<img src={HackLogo} alt="Hack at UCI Logo" className="transition-transform hover:scale-110 duration-300" width={34} height={34} />
					</NavLinkItem>
				</div>
				
				<div className="flex items-center gap-10 pt-2">
					{navItems.map(({ to, label }) => (
						<div className="pb-4 transition-transform hover:scale-110 duration-300">
						<NavLinkItem key={to} to={to}>{label}</NavLinkItem>
						</div>
					))}
				</div>
				<div className="shrink-0 flex px-6 pt-2 bg-[#333333] rounded-xl transition-transform hover:scale-110 duration-300">
					<NavLinkItem to="/recruitment">Join Us</NavLinkItem>
				</div>

				{children}
			</NavMenu.List>
		</NavMenu.Root>
		</>
	);
}

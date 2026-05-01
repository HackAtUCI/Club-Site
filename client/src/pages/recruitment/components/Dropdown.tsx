import { useState, type ReactNode } from "react";

interface DropdownProps {
	question: string;
	children: ReactNode;
}

export default function Dropdown({ question, children }: DropdownProps) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="text-[#1f1e2d]">
			<button
				type="button"
				onClick={() => setIsOpen((prev) => !prev)}
				aria-expanded={isOpen}
				className="flex w-full items-center gap-3 text-left text-sm md:text-base font-medium hover:opacity-80 transition-opacity cursor-pointer"
			>
				<svg
					width="10"
					height="12"
					viewBox="0 0 10 12"
					fill="currentColor"
					aria-hidden="true"
					className={`shrink-0 transition-transform duration-200 ${
						isOpen ? "rotate-90" : ""
					}`}
				>
					<path d="M0 0 L10 6 L0 12 Z" />
				</svg>
				<span>{question}</span>
			</button>

			{isOpen && (
				<div className="mt-2 ml-7 text-sm md:text-base text-[#1f1e2d]/80">
					{children}
				</div>
			)}
		</div>
	);
}

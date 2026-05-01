import React from "react";

type PillBaseProps = {
	children: React.ReactNode;
	className?: string;
	outerClassName?: string;
	innerClassName?: string;
	roundedClassName?: string;
};

type PillAsDivProps = PillBaseProps &
	React.HTMLAttributes<HTMLDivElement> & {
		as?: "div";
	};

type PillAsButtonProps = PillBaseProps &
	React.ButtonHTMLAttributes<HTMLButtonElement> & {
		as: "button";
	};

export type PillProps = PillAsDivProps | PillAsButtonProps;

export default function Pill(props: PillProps) {
	const {
		as = "div",
		children,
		className = "",
		outerClassName = "",
		innerClassName = "",
		roundedClassName = "rounded-[56px]",
		...rest
	} = props as PillProps & Record<string, unknown>;

	const outer = `hack-white-gradient ring-1 ring-black/10 ${roundedClassName} ${outerClassName}`.trim();
	const inner = `box-shadow bg-white/20 ${roundedClassName} ${innerClassName}`.trim();

	if (as === "button") {
		const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
		return (
			<button type="button" className={`${outer} ${className}`} {...buttonProps}>
				<div className={inner}>{children}</div>
			</button>
		);
	}

	const divProps = rest as React.HTMLAttributes<HTMLDivElement>;
	return (
		<div className={`${outer} ${className}`} {...divProps}>
			<div className={inner}>{children}</div>
		</div>
	);
}


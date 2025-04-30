import "./PrimaryButton.scss";

export default function PrimaryButton({ href, text, className }) {
	return (
		<a className={`primary-button ${className}`} href={href}>
			{text}
		</a>
	);
}

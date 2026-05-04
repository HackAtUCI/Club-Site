import GreenBlob from "@/assets/recruitment-decor/green-blob.svg";
import BlueBlob from "@/assets/recruitment-decor/blue-blob.svg";

export default function Background() {
	return (
		<>
			<img
				src={GreenBlob}
				alt=""
				aria-hidden="true"
				className="pointer-events-none absolute right-0 top-72 z-0 w-[85%] max-w-[1200px] select-none md:top-75 md:w-[78%]"
			/>

			<img
				src={BlueBlob}
				alt=""
				aria-hidden="true"
				className="pointer-events-none absolute left-0 bottom-288 z-0 w-[85%] max-w-[850px] select-none md:bottom-6 md:w-[75%]"
			/>
		</>
	);
}
import greenBlob from "@/assets/blobs/green-blob.svg";
import blueBlob from "@/assets/blobs/blue-blob.svg";
import whiteBlob from "@/assets/blobs/white-blob.svg";

export default function Background() {
    return (
        <div className="absolute inset-0 h-full">
            <img
				src={greenBlob}
				alt="Green blob background decoration"
				className="absolute right-0 top-[4%] z-0"
			/>
			<img
				src={blueBlob}
				alt="Blue blob background decoration"
				className="absolute left-0 top-[18%] z-0"
			/>
			<img
				src={whiteBlob}
				alt="White blob background decoration"
				className="absolute right-0 top-[60%] z-0"
			/>
        </div>
    );
}
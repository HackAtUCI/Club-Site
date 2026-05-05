import IHPic1 from "@/assets/images/irvinehacks/IHPic1.jpg";
import IHPic2 from "@/assets/images/irvinehacks/IHPic2.jpg";
import IHPic3 from "@/assets/images/irvinehacks/IHPic3.jpg";
import IHPic4 from "@/assets/images/irvinehacks/IHPic4.jpg";
import IHPic5 from "@/assets/images/irvinehacks/IHPic5.jpg";
import IHPic6 from "@/assets/images/irvinehacks/IHPic6.jpg";
import IHPic7 from "@/assets/images/irvinehacks/IHPic7.jpg";
import IHPic8 from "@/assets/images/irvinehacks/IHPic8.jpg";
import IHPic9 from "@/assets/images/irvinehacks/IHPic9.jpg";
import IHPic10 from "@/assets/images/irvinehacks/IHPic10.jpg";
import IHPic11 from "@/assets/images/irvinehacks/IHPic11.jpg";
import IHPic12 from "@/assets/images/irvinehacks/IHPic12.jpg";
import IHPic13 from "@/assets/images/irvinehacks/IHPic13.jpg";
import IHPic14 from "@/assets/images/irvinehacks/IHPic14.jpg";
import IHPic15 from "@/assets/images/irvinehacks/IHPic15.jpg";
import IHPic16 from "@/assets/images/irvinehacks/IHPic16.jpg";
import IHPic17 from "@/assets/images/irvinehacks/IHPic17.jpg";

import ZHPic1 from "@/assets/images/zothacks/ZHPic1.jpg";
import ZHPic2 from "@/assets/images/zothacks/ZHPic2.jpg";
import ZHPic3 from "@/assets/images/zothacks/ZHPic3.jpg";
import ZHPic4 from "@/assets/images/zothacks/ZHPic4.jpg";
import ZHPic5 from "@/assets/images/zothacks/ZHPic5.jpg";
import ZHPic6 from "@/assets/images/zothacks/ZHPic6.jpg";
import ZHPic7 from "@/assets/images/zothacks/ZHPic7.jpg";
import ZHPic8 from "@/assets/images/zothacks/ZHPic8.jpg";
import ZHPic9 from "@/assets/images/zothacks/ZHPic9.jpg";
import ZHPic10 from "@/assets/images/zothacks/ZHPic10.jpg";

import SustainabilityIcon from "@/assets/icons/tracks/SustainabilityIcon.png";
import ArduinoIcon from "@/assets/icons/tracks/ArduinoIcon.svg";
import RealEstateIcon from "@/assets/icons/tracks/RealEstateIcon.svg";
import UiUxIcon from "@/assets/icons/tracks/UiUxIcon.svg";
import AiSafetyIcon from "@/assets/icons/tracks/AiSafetyIcon.png";
import NeuroIcon from "@/assets/icons/tracks/NeuroIcon.png";

export const IRVINE_TRACKS = [
	{
		name: "Best Sustainable Hack",
		iconSrc: SustainabilityIcon,
	},
	{
		name: "Most innovative use of Arduino UNO Q Board - Qualcomm",
		iconSrc: ArduinoIcon,
	},
	{
		name: "Best Use of AI in Real Estate - First American",
		iconSrc: RealEstateIcon,
	},
	{
		name: "Best UI/UX Hack - Opennote",
		iconSrc: UiUxIcon,
	},
	{
		name: "Best AI Safety Hack - AI Safety at UCI",
		iconSrc: AiSafetyIcon,
	},
	{
		name: "Best Neuro Hack - Cognitive Science Association at UCI",
		iconSrc: NeuroIcon,
	},
];

export const IRVINE_HACKS_SHOWCASE = {
	title: "IrvineHacks 2026",
	previousLink: {
		text: "View Previous IrvineHacks",
		href: "https://irvinehacks.com/devpost",
	},
	stats: [
		{ value: "36", label: "Hours" },
		{ value: "$10,000+", label: "in Awarded Prizes" },
		{ value: "400", label: "Hackers" },
	],
	tracks: IRVINE_TRACKS,
	photos: [IHPic1, IHPic2, IHPic3, IHPic4, IHPic5, IHPic6, IHPic7, IHPic8, IHPic9, IHPic10, IHPic11, IHPic12, IHPic13, IHPic14, IHPic15, IHPic16, IHPic17],
};

export const ZOT_HACKS_SHOWCASE = {
	title: "ZotHacks 2025",
	previousLink: {
		text: "View Previous ZotHacks",
		href: "https://zothacks-2025.devpost.com/",
	},
	stats: [
		{ value: "50%", label: "Female Identifying Hackers" },
		{ value: "50%", label: "First Year Hackers" },
		{ value: "4:1", label: "Hackers to Mentors" },
	],
	photos: [ZHPic1, ZHPic2, ZHPic3, ZHPic4, ZHPic5, ZHPic6, ZHPic7, ZHPic8, ZHPic9, ZHPic10],
	showTracks: false,
};
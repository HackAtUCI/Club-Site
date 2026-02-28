export interface TeamMember {
	name: string;
	position: string;
	image: string;
	linkedInUrl?: string;
}

export type TeamMembers = Record<string, TeamMember[]>;

export const teamMembers: TeamMembers = {
	Communications: [
		{
			name: "Arnav Nigam",
			position: "Communications Director",
			image: "/team/arnavn.webp",
			linkedInUrl: "https://www.linkedin.com/in/just-arnav/",
		},
	],

	Corporate: [
		{
			name: "Alex Ngo",
			position: "Corporate Director",
			image: "/team/alex.webp",
			linkedInUrl: "https://www.linkedin.com/in/alexryanngo/",
		},
		{
			name: "Paige Townsend",
			position: "Corporate Director",
			image: "/team/paige.webp",
			linkedInUrl: "https://www.linkedin.com/in/ptownse/",
		},
		{
			name: "Eleni Arapostathis",
			position: "Corporate Organizer",
			image: "/team/eleni.webp",
			linkedInUrl: "https://www.linkedin.com/in/eleni-arapostathis-9b25a0369/",
		},
		{
			name: "Rishi Potipreddi",
			position: "Corporate Organizer",
			image: "/team/riship.webp",
			linkedInUrl: "https://www.linkedin.com/in/rishi-potipireddi/",
		},
		{
			name: "Rishita Dugar",
			position: "Corporate Organizer",
			image: "/team/rishita.webp",
			linkedInUrl: "https://www.linkedin.com/in/rishita-dugar/",
		},
		{
			name: "Shea Thomopoulos",
			position: "Corporate Organizer",
			image: "/team/blank.webp",
			linkedInUrl: "https://www.linkedin.com/in/shea-anastasia-thomopoulos/",
		},
		{
			name: "Trystan Vasquez",
			position: "Corporate Organizer",
			image: "/team/trystan.webp",
			linkedInUrl: "https://www.linkedin.com/in/trystan-camden-vasquez/",
		},
		{
			name: "Nathan Che",
			position: "Corporate Intern",
			image: "/team/nathanc.webp",
			linkedInUrl: "https://www.linkedin.com/in/nathan-che1/",
		},
		{
			name: "Anya Gupta",
			position: "Corporate Intern",
			image: "/team/blank.webp",
			linkedInUrl: "",
		},
		{
			name: "Felicia Leung",
			position: "Corporate Intern",
			image: "/team/felicia.webp",
			linkedInUrl: "https://www.linkedin.com/in/felicia-leung-81205426b/",
		},
		{
			name: "Travis Lee",
			position: "Corporate Intern",
			image: "/team/travis.webp",
			linkedInUrl: "https://www.linkedin.com/in/travis-lee73/",
		},
		{
			name: "Reneem Saadeh",
			position: "Corporate Intern",
			image: "/team/reneem.webp",
			linkedInUrl: "",
		},
	],

	Logistics: [
		{
			name: "Angelina Wang",
			position: "Logistics Director",
			image: "/team/angelina.webp",
			linkedInUrl: "https://www.linkedin.com/in/angelina-wangg/",
		},
		{
			name: "Sharmada Honnavalli",
			position: "Logistics Director",
			image: "/team/sharmada.webp",
			linkedInUrl: "https://www.linkedin.com/in/sharmada-honnavalli/",
		},
		{
			name: "Connie Yang",
			position: "Logistics Organizer",
			image: "/team/connie.webp",
			linkedInUrl: "https://www.linkedin.com/in/coyang/",
		},
		{
			name: "Ethan Chin",
			position: "Logistics Organizer",
			image: "/team/ethan.webp",
			linkedInUrl: "https://www.linkedin.com/in/ethan-chin/",
		},
		{
			name: "Grace Wang",
			position: "Logistics Organizer",
			image: "/team/grace.webp",
			linkedInUrl: "https://www.linkedin.com/in/grace-w-39b7131b1/",
		},
		{
			name: "Joshua Sullivan",
			position: "Logistics Organizer",
			image: "/team/josh.webp",
			linkedInUrl: "https://www.linkedin.com/in/joshua-micah-sullivan/",
		},
		{
			name: "Kailey Trinh",
			position: "Logistics Organizer",
			image: "/team/kailey.webp",
			linkedInUrl: "https://www.linkedin.com/in/kailey-trinh-5182a8244/",
		},
		{
			name: "Yousef Khan",
			position: "Logistics Organizer",
			image: "/team/yousef.webp",
			linkedInUrl: "https://www.linkedin.com/in/theyousefkhan/",
		},
		{
			name: "William Chan",
			position: "Logistics Intern",
			image: "/team/william.webp",
			linkedInUrl: "",
		},
		{
			name: "Jolene Chou",
			position: "Logistics Intern",
			image: "/team/jolene.webp",
			linkedInUrl: "https://www.linkedin.com/in/jolene-chou/",
		},
		{
			name: "Ronald Wen",
			position: "Logistics Intern",
			image: "/team/ronald.webp",
			linkedInUrl: "https://www.linkedin.com/in/ronaldwen/",
		},
	],

	Marketing: [
		{
			name: "Pavana Upadhyaya",
			position: "Marketing Director",
			image: "/team/blank.webp",
			linkedInUrl: "https://www.linkedin.com/in/pavana-upadhyaya/",
		},
		{
			name: "Jazib Rahim",
			position: "Marketing Organizer",
			image: "/team/blank.webp",
			linkedInUrl: "",
		},
		{
			name: "Lavanya Agarwal",
			position: "Marketing Organizer",
			image: "/team/blank.webp",
			linkedInUrl: "https://www.linkedin.com/in/lavanya-agarwal-25a56933b/",
		},
		{
			name: "Pragya Jhunjhunwala",
			position: "Marketing Organizer",
			image: "/team/pragya.webp",
			linkedInUrl: "https://www.linkedin.com/in/pragya-jhunjhunwala/",
		},
		{
			name: "Rithika Yalla",
			position: "Marketing Organizer",
			image: "/team/rithika.webp",
			linkedInUrl: "https://www.linkedin.com/in/rithika-yalla-96a490328/",
		},
		{
			name: "Sejal Pawar",
			position: "Marketing Organizer",
			image: "/team/blank.webp",
			linkedInUrl: "https://www.linkedin.com/in/sejal-pawar-3abb7a280/",
		},
		{
			name: "Tiffany Cheung",
			position: "Marketing Organizer",
			image: "/team/blank.webp",
			linkedInUrl: "https://www.linkedin.com/in/tifffanycheung/",
		},
		{
			name: "Tracy Newberry",
			position: "Marketing Organizer",
			image: "/team/tracy.webp",
			linkedInUrl: "https://www.linkedin.com/in/tracy-ann-newberry-5a348632a/",
		},
		{
			name: "Avinav Shreshta",
			position: "Marketing Intern",
			image: "/team/avinav.webp",
			linkedInUrl: "https://www.linkedin.com/in/avinav-shrestha-236b7623a/",
		},
	],

	Design: [
		{
			name: "Camille Oh",
			position: "Design Director",
			image: "/team/blank.webp",
			linkedInUrl: "https://www.linkedin.com/in/camilleoh/",
		},
		{
			name: "Annabel Wang",
			position: "Design Organizer",
			image: "/team/blank.webp",
			linkedInUrl: "https://www.linkedin.com/in/annabel-wang-794911298/",
		},
		{
			name: "Audrey Chen",
			position: "Design Organizer",
			image: "/team/blank.webp",
			linkedInUrl: "https://www.linkedin.com/in/audrey-loyola-chen-6233b6296/",
		},
		{
			name: "Elijah Smith",
			position: "Design Organizer",
			image: "/team/elijah.webp",
			linkedInUrl: "https://www.linkedin.com/in/elijah-smith-71319429a/",
		},
		{
			name: "Julia Modina",
			position: "Design Organizer",
			image: "/team/julia.webp",
			linkedInUrl: "https://www.linkedin.com/in/julia-modina/",
		},
		{
			name: "Evelyn Rodriguez",
			position: "Design Intern",
			image: "/team/blank.webp",
			linkedInUrl: "https://www.linkedin.com/in/evelyn-rodriguez-r/",
		},
	],

	Tech: [
		{
			name: "Ian Dai",
			position: "Tech Director",
			image: "/team/ian.webp",
			linkedInUrl: "https://www.linkedin.com/in/ian-dai/",
		},
		{
			name: "Andrew Hwang",
			position: "Tech Organizer",
			image: "/team/andrew.webp",
			linkedInUrl: "https://www.linkedin.com/in/andrew-hwang-78b375258/",
		},
		{
			name: "Cyril Joby",
			position: "Tech Organizer",
			image: "/team/blank.webp",
			linkedInUrl: "https://www.linkedin.com/in/cyril-joby/",
		},
		{
			name: "Jay Wu",
			position: "Tech Organizer",
			image: "/team/blank.webp",
			linkedInUrl: "https://www.linkedin.com/in/jayqw/",
		},
		{
			name: "Nathan Ong",
			position: "Tech Organizer",
			image: "/team/nathan.webp",
			linkedInUrl: "https://www.linkedin.com/in/nathan-ong17/",
		},
		{
			name: "Noah Kim",
			position: "Tech Organizer",
			image: "/team/blank.webp",
			linkedInUrl: "https://www.linkedin.com/in/noahkim004/",
		},
		{
			name: "Rishi Murumkar",
			position: "Tech Organizer",
			image: "/team/blank.webp",
			linkedInUrl: "https://www.linkedin.com/in/rishi-murumkar/",
		},
		{
			name: "Vishok Lakshmankumar",
			position: "Tech Organizer",
			image: "/team/blank.webp",
			linkedInUrl: "https://www.linkedin.com/in/vishokl/",
		},
		{
			name: "Colin Chen",
			position: "Tech Intern",
			image: "/team/blank.webp",
			linkedInUrl: "https://www.linkedin.com/in/collinchenn/",
		},
		{
			name: "Victoria Lee",
			position: "Tech Intern",
			image: "/team/blank.webp",
			linkedInUrl: "https://www.linkedin.com/in/victoria-lee13/",
		},
	],
};

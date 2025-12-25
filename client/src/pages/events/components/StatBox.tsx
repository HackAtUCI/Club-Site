import { UnspacedBox } from "@/lib/components/Box/Box";

export default function StatBox({
	count,
	text,
}: {
	count: number;
	text: string;
}) {
	return (
		<div className="mb-4 sm:mb-6 md:mb-8 flex items-center">
			<UnspacedBox className="mr-4 sm:mr-8 md:mr-10 lg:mr-14 flex h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-36 lg:w-36 flex-shrink-0 items-center justify-center">
				<span className="bg-gradient-to-r from-blue-400 to-green-300 bg-clip-text text-xl sm:text-2xl md:text-3xl font-bold text-transparent">
					{count}
				</span>
			</UnspacedBox>
			<span className="break-words text-2xl sm:text-lg md:text-3xl font-semibold">
				{text}
			</span>
		</div>
	);
}

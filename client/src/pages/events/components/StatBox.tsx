import { UnspacedBox } from "@/lib/components/Box/Box";

export default function StatBox({
    count,
    text,
}: {
    count: number;
    text: string;
}) {
    return (
        <div className="mb-8 flex items-center">
            <UnspacedBox className="mr-14 flex h-36 w-36 flex-shrink-0 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-400 to-green-300 bg-clip-text text-3xl font-bold text-transparent">
                    {count}
                </span>
            </UnspacedBox>
            <span className="text-subtitle break-words">{text}</span>
        </div>
    );
}

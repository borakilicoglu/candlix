import { Pattern } from "@/app/data/patterns";

export default function CardTitles({
  isSelected,
  selectedPattern,
}: {
  isSelected: boolean;
  selectedPattern: Pattern | null;
}) {
  return (
    <div className="flex flex-col">
      <p
        className={`[writing-mode:vertical-rl] rotate-180 flex-1 text-center text-2xl font-bold ${
          !isSelected
            ? "text-[#54e8b4]"
            : !selectedPattern || selectedPattern?.type === "bullish"
            ? "text-[#54e8b4]"
            : "text-[#54e8b4]/30"
        }`}
      >
        Bullish
      </p>
      <p
        className={`[writing-mode:vertical-rl] rotate-180 flex-1 text-center text-2xl font-bold ${
          !isSelected
            ? "text-[#d9304f]"
            : !selectedPattern || selectedPattern?.type === "bearish"
            ? "text-[#d9304f]"
            : "text-[#d9304f]/30"
        }`}
      >
        Bearish
      </p>
    </div>
  );
}

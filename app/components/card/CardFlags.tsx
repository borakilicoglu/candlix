import { Pattern } from "@/app/data/patterns";

export default function CardFlags({
  isSelected = false,
  selectedPattern,
}: {
  isSelected?: boolean;
  selectedPattern: Pattern | null;
}) {
  return (
    <div className="w-4 flex h-full flex-col">
      <div
        className={`w-4 flex-1 ${
          !isSelected
            ? "bg-[#54e8b4]"
            : !selectedPattern || selectedPattern?.type === "bullish"
            ? "bg-[#54e8b4]"
            : "bg-[#54e8b4]/30"
        }`}
      />
      <div
        className={`w-4 flex-1 ${
          !isSelected
            ? "bg-[#d9304f]"
            : !selectedPattern || selectedPattern?.type === "bearish"
            ? "bg-[#d9304f]"
            : "bg-[#d9304f]/30"
        }`}
      />
    </div>
  );
}

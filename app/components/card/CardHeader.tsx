import { Pattern } from "@/app/data/patterns";
import { PatternType, PatternTypeToColor } from "@/app/data/patterns";

export default function CardHeader({
  selectedPattern,
}: {
  selectedPattern: Pattern | null;
}) {
  const colorClass =
    selectedPattern?.type &&
    PatternTypeToColor[selectedPattern.type as PatternType];

  return (
    <div className="flex w-full items-center">
      <h5
        className={`text-2xl font-bold flex items-center gap-x-2 ${
          colorClass ?? "text-white"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>

        <span>{selectedPattern?.name} Formation</span>
      </h5>
    </div>
  );
}

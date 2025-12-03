import { Pattern, PatternCategory } from "./data/patterns";
import { DynamicPattern, getGridCols } from "./page";

function NormalGrid({
  block,
  setSelectedPattern,
}: {
  block: PatternCategory;
  setSelectedPattern: (data: { pattern: Pattern; blockTitle: string }) => void;
}) {
  return (
    <div className={`grid ${getGridCols(block.col)} grid-rows-2 w-full h-full`}>
      {block.patterns.map((pattern, index) => (
        <div
          className="flex"
          key={index}
          onClick={() =>
            setSelectedPattern({
              pattern,
              blockTitle: block.title,
            })
          }
        >
          <DynamicPattern title={pattern.name} />
        </div>
      ))}
    </div>
  );
}

export default NormalGrid;

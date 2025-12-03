import { Pattern } from "../data/patterns";
import { DynamicPattern } from "../page";

type Props = {
  patterns: Pattern[];
  blockTitle: string;
  setSelectedPattern: (data: { pattern: Pattern; blockTitle: string }) => void;
};

export default function NeutralGrid({
  patterns,
  blockTitle,
  setSelectedPattern,
}: Props) {
  return (
    <div className="flex flex-col items-center w-full gap-14 h-full justify-center">
      {/* Row 1 */}
      <div
        className="flex"
        onClick={() => setSelectedPattern({ pattern: patterns[0], blockTitle })}
      >
        <DynamicPattern title={patterns[0].name} />
      </div>

      {/* Row 2 */}
      <div className="flex flex-row justify-center gap-10">
        {/* Pattern 2 */}
        <div
          className="flex"
          onClick={() =>
            setSelectedPattern({ pattern: patterns[1], blockTitle })
          }
        >
          <DynamicPattern title={patterns[1].name} />
        </div>

        {/* Pattern 3 */}
        <div
          className="flex"
          onClick={() =>
            setSelectedPattern({ pattern: patterns[2], blockTitle })
          }
        >
          <DynamicPattern title={patterns[2].name} />
        </div>
      </div>

      {/* Row 3 */}
      <div
        className="flex"
        onClick={() => setSelectedPattern({ pattern: patterns[3], blockTitle })}
      >
        <DynamicPattern title={patterns[3].name} />
      </div>
    </div>
  );
}

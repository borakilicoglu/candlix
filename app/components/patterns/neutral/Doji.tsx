import { Candle } from "@/app/components/Candle";
import { PatternWrapper } from "@/app/components/PatternWrapper";

export default function Doji({ title }: { title?: string }) {
  return (
    <PatternWrapper title={title}>
      <Candle
        color="yellow"
        wickTop={26}
        bodyWidth={10}
        bodyHeight={2}
        wickBottom={26}
        offsetX={0}
        offsetY={0}
      />
    </PatternWrapper>
  );
}

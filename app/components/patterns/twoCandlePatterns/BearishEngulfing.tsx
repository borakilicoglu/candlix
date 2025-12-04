import { Candle } from "@/app/components/Candle";
import { PatternWrapper } from "@/app/components/patterns/PatternWrapper";

export default function BearishEngulfing({ title }: { title?: string }) {
  return (
    <PatternWrapper title={title}>
      {/* Green candle – left side */}
      <Candle
        color="green"
        wickTop={8}
        bodyWidth={10}
        bodyHeight={32}
        wickBottom={15}
        offsetX={0}
        offsetY={5}
      />

      {/* Red candle – right side, taller */}
      <Candle
        color="red"
        wickTop={8}
        bodyWidth={10}
        bodyHeight={60}
        wickBottom={10}
        offsetX={0} // move right
        offsetY={0} // same baseline
      />
    </PatternWrapper>
  );
}

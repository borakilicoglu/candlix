import { Candle } from "@/app/components/Candle";
import { PatternWrapper } from "@/app/components/patterns/PatternWrapper";

export default function BearishEngulfing({ title }: { title?: string }) {
  return (
    <PatternWrapper title={title}>
      <Candle
        color="green"
        wickTop={8}
        bodyWidth={10}
        bodyHeight={32}
        wickBottom={15}
        offsetX={0}
        offsetY={5}
      />
      <Candle
        color="red"
        wickTop={8}
        bodyWidth={10}
        bodyHeight={60}
        wickBottom={10}
        offsetX={0}
        offsetY={0}
      />
    </PatternWrapper>
  );
}

import { Candle } from "@/app/components/Candle";
import { PatternWrapper } from "@/app/components/patterns/PatternWrapper";

export default function Marubozu({ title }: { title?: string }) {
  return (
    <PatternWrapper title={title}>
      <Candle
        color="green"
        bodyWidth={10}
        bodyHeight={60}
        offsetX={0}
        offsetY={0}
      />
      <Candle
        color="red"
        bodyWidth={10}
        bodyHeight={60}
        offsetX={0}
        offsetY={0}
      />
    </PatternWrapper>
  );
}

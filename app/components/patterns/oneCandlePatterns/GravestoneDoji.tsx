import { Candle } from "@/app/components/Candle";
import { PatternWrapper } from "@/app/components/patterns/PatternWrapper";

export default function GravestoneDoji({ title }: { title?: string }) {
  return (
    <PatternWrapper title={title}>
      <Candle
        color="green"
        bodyWidth={10}
        bodyHeight={26}
        offsetX={0}
        offsetY={30}
      />
      <Candle
        color="green"
        bodyWidth={10}
        bodyHeight={26}
        offsetX={0}
        offsetY={18}
      />
      <Candle
        color="yellow"
        wickTop={40}
        bodyWidth={10}
        bodyHeight={2}
        offsetX={0}
        offsetY={-15}
      />
      <Candle
        color="red"
        bodyWidth={10}
        bodyHeight={17}
        offsetX={0}
        offsetY={14}
      />
      <Candle
        color="red"
        bodyWidth={10}
        bodyHeight={28}
        offsetX={0}
        offsetY={30}
      />
    </PatternWrapper>
  );
}

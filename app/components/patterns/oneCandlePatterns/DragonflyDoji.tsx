import { Candle } from "@/app/components/Candle";
import { PatternWrapper } from "@/app/components/patterns/PatternWrapper";

export default function DragonflyDoji({ title }: { title?: string }) {
  return (
    <PatternWrapper title={title}>
      <Candle
        color="red"
        bodyWidth={10}
        bodyHeight={30}
        offsetX={0}
        offsetY={-10}
      />
      <Candle
        color="red"
        bodyWidth={10}
        bodyHeight={30}
        offsetX={0}
        offsetY={5}
      />
      <Candle
        color="yellow"
        wickBottom={40}
        bodyWidth={10}
        bodyHeight={2}
        offsetX={0}
        offsetY={28}
      />
      <Candle
        color="green"
        bodyWidth={10}
        bodyHeight={30}
        offsetX={0}
        offsetY={10}
      />
      <Candle
        color="green"
        bodyWidth={10}
        bodyHeight={30}
        offsetX={0}
        offsetY={-10}
      />
    </PatternWrapper>
  );
}

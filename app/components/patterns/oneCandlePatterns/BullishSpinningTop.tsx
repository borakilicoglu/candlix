import { Candle } from "@/app/components/Candle";
import { PatternWrapper } from "@/app/components/PatternWrapper";

export default function BullishSpinningTop({ title }: { title?: string }) {
  return (
    <PatternWrapper title={title}>
      <Candle
        color="red"
        bodyWidth={10}
        bodyHeight={30}
        offsetX={0}
        offsetY={-10}
        hide
      />
      <Candle
        color="red"
        bodyWidth={10}
        bodyHeight={30}
        offsetX={0}
        offsetY={5}
        hide
      />
      <Candle
        color="green"
        wickTop={30}
        wickBottom={30}
        bodyWidth={10}
        bodyHeight={14}
        offsetX={0}
        offsetY={10}
      />
      <Candle
        color="green"
        bodyWidth={10}
        bodyHeight={30}
        offsetX={0}
        offsetY={10}
        hide
      />
      <Candle
        color="green"
        bodyWidth={10}
        bodyHeight={30}
        offsetX={0}
        offsetY={-10}
        hide
      />
    </PatternWrapper>
  );
}

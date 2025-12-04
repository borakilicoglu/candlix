import { Candle } from "@/app/components/Candle";
import { PatternWrapper } from "@/app/components/patterns/PatternWrapper";

export default function SpinningTop({ title }: { title?: string }) {
  return (
    <PatternWrapper title={title}>
      <Candle
        color="green"
        wickTop={20}
        bodyWidth={10}
        bodyHeight={14}
        wickBottom={20}
        offsetX={0}
        offsetY={0}
      />
      <Candle
        color="red"
        wickTop={20}
        bodyWidth={10}
        bodyHeight={14}
        wickBottom={20}
        offsetX={0}
        offsetY={0}
      />
    </PatternWrapper>
  );
}

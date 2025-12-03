import { Candle } from "@/app/components/Candle";
import { PatternWrapper } from "@/app/components/PatternWrapper";

export default function BullishKicker({ title }: { title?: string }) {
  return (
    <PatternWrapper title={title}>
      <Candle
        color="red"
        wickTop={8}
        bodyWidth={10}
        bodyHeight={42}
        wickBottom={8}
        offsetX={0}
        offsetY={25}
      />
      <Candle
        color="green"
        wickTop={8}
        bodyWidth={10}
        bodyHeight={42}
        wickBottom={8}
        offsetX={0}
        offsetY={-4}
      />
    </PatternWrapper>
  );
}

import { Candle } from "@/app/components/Candle";
import { PatternWrapper } from "@/app/components/patterns/PatternWrapper";

export default function PiercingLine({ title }: { title?: string }) {
  return (
    <PatternWrapper title={title}>
      <Candle
        color="red"
        wickTop={8}
        bodyWidth={10}
        bodyHeight={26}
        wickBottom={8}
        offsetX={0}
        offsetY={-10}
      />
      <Candle
        color="green"
        wickTop={8}
        bodyWidth={10}
        bodyHeight={40}
        wickBottom={14}
        offsetX={0}
        offsetY={20}
      />
    </PatternWrapper>
  );
}

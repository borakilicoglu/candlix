import { Candle } from "@/app/components/Candle";
import { PatternWrapper } from "@/app/components/PatternWrapper";

export default function BearishHarami({ title }: { title?: string }) {
  return (
    <PatternWrapper title={title}>
      <Candle
        color="green"
        wickTop={10}
        bodyWidth={10}
        bodyHeight={60}
        wickBottom={12}
        offsetX={0}
        offsetY={0}
      />
      <Candle
        color="red"
        wickTop={8}
        bodyWidth={10}
        bodyHeight={30}
        wickBottom={8}
        offsetX={0}
        offsetY={0}
      />
    </PatternWrapper>
  );
}

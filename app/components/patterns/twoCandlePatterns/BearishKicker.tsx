import { Candle } from "@/app/components/Candle";
import { PatternWrapper } from "@/app/components/PatternWrapper";

export default function BearishKicker({ title }: { title?: string }) {
  return (
    <PatternWrapper title={title}>
      <Candle
        color="green"
        wickTop={8}
        bodyWidth={10}
        bodyHeight={40}
        wickBottom={8}
        offsetX={0}
        offsetY={-10}
      />
      <Candle
        color="red"
        wickTop={8}
        bodyWidth={10}
        bodyHeight={20}
        wickBottom={8}
        offsetX={0}
        offsetY={30}
      />
    </PatternWrapper>
  );
}

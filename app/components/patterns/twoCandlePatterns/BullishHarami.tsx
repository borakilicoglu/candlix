import { Candle } from "@/app/components/Candle";
import { PatternWrapper } from "@/app/components/patterns/PatternWrapper";

export default function BullishHarami({ title }: { title?: string }) {
  return (
    <PatternWrapper title={title}>
      <Candle
        color="red"
        wickTop={8}
        bodyWidth={10}
        bodyHeight={62}
        wickBottom={15}
        offsetX={0}
        offsetY={11}
      />
      <Candle
        color="green"
        wickTop={10}
        bodyWidth={10}
        bodyHeight={30}
        wickBottom={10}
        offsetX={0}
        offsetY={10}
      />
    </PatternWrapper>
  );
}

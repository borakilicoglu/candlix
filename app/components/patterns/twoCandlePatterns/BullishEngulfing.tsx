import { Candle } from "@/app/components/Candle";
import { PatternWrapper } from "@/app/components/PatternWrapper";

export default function BullishEngulfing({ title }: { title?: string }) {
  return (
    <PatternWrapper title={title}>
      <Candle
        color="red"
        wickTop={8}
        bodyWidth={10}
        bodyHeight={32}
        wickBottom={16}
        offsetX={0}
        offsetY={18}
      />
      <Candle
        color="green"
        wickTop={8}
        bodyWidth={10}
        bodyHeight={62}
        wickBottom={15}
        offsetX={0}
        offsetY={11}
      />
    </PatternWrapper>
  );
}

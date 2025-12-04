import { Candle } from "@/app/components/Candle";
import { PatternWrapper } from "@/app/components/patterns/PatternWrapper";

export default function TweezerBottom({ title }: { title?: string }) {
  return (
    <PatternWrapper title={title}>
      <Candle
        color="green"
        wickTop={8}
        bodyWidth={10}
        bodyHeight={44}
        wickBottom={15}
        offsetY={11}
        offsetX={0}
      />
      <Candle
        color="red"
        wickTop={10}
        bodyWidth={10}
        bodyHeight={22}
        wickBottom={10}
        offsetY={-3}
        offsetX={0}
      />
    </PatternWrapper>
  );
}

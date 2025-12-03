import { Candle } from "@/app/components/Candle";
import { PatternWrapper } from "@/app/components/PatternWrapper";

export default function Hammer({ title }: { title?: string }) {
  return (
    <PatternWrapper title={title}>
      <Candle
        color="green"
        bodyWidth={2}
        bodyHeight={28}
        offsetX={0}
        offsetY={-18}
      />
      <Candle
        color="green"
        bodyWidth={2}
        bodyHeight={28}
        offsetX={0}
        offsetY={-8}
      />
      <Candle
        color="green"
        wickBottom={35}
        bodyHeight={14}
        offsetX={0}
        offsetY={25}
        stars={[{ position: "top-left" }, { position: "bottom-right" }]}
      />
      <Candle
        color="red"
        bodyWidth={2}
        bodyHeight={30}
        offsetX={0}
        offsetY={-8}
      />
      <Candle
        color="red"
        bodyWidth={2}
        bodyHeight={30}
        offsetX={0}
        offsetY={-20}
      />
    </PatternWrapper>
  );
}

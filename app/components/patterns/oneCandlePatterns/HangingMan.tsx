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
        offsetY={30}
      />
      <Candle
        color="green"
        bodyWidth={2}
        bodyHeight={28}
        offsetX={0}
        offsetY={20}
      />
      <Candle
        color="red"
        wickBottom={35}
        bodyHeight={14}
        offsetX={0}
        offsetY={0}
        stars={[{ position: "top-left" }, { position: "bottom-right" }]}
      />
      <Candle
        color="red"
        bodyWidth={2}
        bodyHeight={40}
        offsetX={0}
        offsetY={12}
      />
      <Candle
        color="red"
        bodyWidth={2}
        bodyHeight={40}
        offsetX={0}
        offsetY={24}
      />
    </PatternWrapper>
  );
}

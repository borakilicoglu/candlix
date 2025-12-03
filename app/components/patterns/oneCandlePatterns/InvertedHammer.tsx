import { Candle } from "@/app/components/Candle";
import { PatternWrapper } from "@/app/components/PatternWrapper";

export default function InvertedHummer({ title }: { title?: string }) {
  return (
    <PatternWrapper title={title}>
      <Candle
        color="red"
        bodyWidth={10}
        bodyHeight={30}
        offsetX={0}
        offsetY={-10}
      />
      <Candle
        color="red"
        bodyWidth={10}
        bodyHeight={30}
        offsetX={0}
        offsetY={5}
      />
      <Candle
        color="green"
        wickTop={35}
        bodyHeight={14}
        offsetX={0}
        offsetY={25}
        stars={[{ position: "top-left" }, { position: "bottom-right" }]}
      />
      <Candle
        color="green"
        bodyWidth={10}
        bodyHeight={40}
        offsetX={0}
        offsetY={15}
      />
      <Candle
        color="green"
        bodyWidth={10}
        bodyHeight={40}
        offsetX={0}
        offsetY={0}
      />
    </PatternWrapper>
  );
}

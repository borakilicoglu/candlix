import { PatternWrapper } from "../PatternWrapper";
import { Candle } from "../../Candle";

export default function ThreeLineStrikeBullish({ title }: { title?: string }) {
  return (
    <PatternWrapper title={title}>
      <Candle
        color="red"
        wickTop={8}
        wickBottom={8}
        bodyWidth={10}
        bodyHeight={22}
        offsetX={0}
        offsetY={-16}
        stars={[{ position: "top-left" }]}
      />
      <Candle
        color="red"
        wickTop={8}
        wickBottom={8}
        bodyWidth={10}
        bodyHeight={22}
        offsetX={0}
        offsetY={0}
      />
      <Candle
        color="red"
        wickTop={8}
        wickBottom={8}
        bodyWidth={10}
        bodyHeight={22}
        offsetX={0}
        offsetY={16}
        stars={[{ position: "bottom-right" }]}
      />
      <Candle
        color="green"
        wickTop={10}
        wickBottom={10}
        bodyWidth={10}
        bodyHeight={55}
        offsetX={0}
        offsetY={0}
      />
    </PatternWrapper>
  );
}

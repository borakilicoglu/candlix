import { PatternWrapper } from "../PatternWrapper";
import { Candle } from "../../Candle";

export default function MorningDojiStar({ title }: { title?: string }) {
  return (
    <PatternWrapper title={title}>
      <Candle
        color="green"
        wickTop={15}
        bodyWidth={2}
        bodyHeight={5}
        wickBottom={20}
        offsetX={0}
        offsetY={15}
      />
      <Candle
        color="green"
        wickTop={8}
        bodyHeight={35}
        wickBottom={8}
        offsetX={0}
        offsetY={-5}
        stars={[{ position: "top-left" }]}
      />
      <Candle
        color="red"
        wickTop={8}
        bodyHeight={35}
        wickBottom={8}
        offsetX={0}
        offsetY={-10}
        stars={[{ position: "bottom-right" }]}
      />
      <Candle
        color="red"
        wickTop={15}
        bodyWidth={2}
        bodyHeight={5}
        wickBottom={20}
        offsetX={0}
        offsetY={15}
      />
    </PatternWrapper>
  );
}

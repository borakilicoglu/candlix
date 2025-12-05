import { PatternWrapper } from "../PatternWrapper";
import { Candle } from "../../Candle";

export default function MorningDojiStar({ title }: { title?: string }) {
  return (
    <PatternWrapper title={title}>
      <Candle
        color="red"
        wickTop={6}
        wickBottom={6}
        bodyWidth={10}
        bodyHeight={35}
        offsetX={0}
        offsetY={-10}
        stars={[{ position: "top-left" }]}
      />
      <Candle
        color="red"
        wickTop={6}
        wickBottom={6}
        bodyWidth={10}
        bodyHeight={16}
        offsetX={0}
        offsetY={30}
      />
      <Candle
        color="green"
        wickTop={6}
        wickBottom={6}
        bodyWidth={10}
        bodyHeight={35}
        offsetX={0}
        offsetY={10}
        stars={[{ position: "bottom-right" }]}
      />
    </PatternWrapper>
  );
}

import { PatternWrapper } from "../PatternWrapper";
import { Candle } from "../../Candle";

export default function EveningDojiStar({ title }: { title?: string }) {
  return (
    <PatternWrapper title={title}>
      <Candle
        color="green"
        wickTop={4}
        wickBottom={12}
        bodyWidth={10}
        bodyHeight={42}
        offsetX={0}
        offsetY={10}
      />
      <Candle
        color="red"
        wickTop={4}
        wickBottom={6}
        bodyWidth={10}
        bodyHeight={2}
        offsetX={0}
        offsetY={-14}
      />
      <Candle
        color="red"
        wickTop={4}
        wickBottom={6}
        bodyWidth={10}
        bodyHeight={25}
        offsetX={0}
        offsetY={0}
      />
    </PatternWrapper>
  );
}

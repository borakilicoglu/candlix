import { PatternWrapper } from "../PatternWrapper";
import { Candle } from "../../Candle";

export default function ThreeBlackCrows({ title }: { title?: string }) {
  return (
    <PatternWrapper title={title}>
      <Candle
        color="red"
        wickTop={10}
        wickBottom={10}
        bodyWidth={10}
        bodyHeight={25}
        offsetX={0}
        offsetY={-16}
      />
      <Candle
        color="red"
        wickTop={10}
        wickBottom={10}
        bodyWidth={10}
        bodyHeight={25}
        offsetX={0}
        offsetY={0}
      />
      <Candle
        color="red"
        wickTop={10}
        wickBottom={10}
        bodyWidth={10}
        bodyHeight={25}
        offsetX={0}
        offsetY={16}
      />
    </PatternWrapper>
  );
}

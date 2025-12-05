import { PatternWrapper } from "../PatternWrapper";
import { Candle } from "../../Candle";

export default function ThreeWhiteSoldiers({ title }: { title?: string }) {
  return (
    <PatternWrapper title={title}>
      <Candle
        color="green"
        wickTop={10}
        wickBottom={10}
        bodyWidth={10}
        bodyHeight={25}
        offsetX={0}
        offsetY={16}
      />
      <Candle
        color="green"
        wickTop={10}
        wickBottom={10}
        bodyWidth={10}
        bodyHeight={25}
        offsetX={0}
        offsetY={0}
      />
      <Candle
        color="green"
        wickTop={10}
        wickBottom={10}
        bodyWidth={10}
        bodyHeight={25}
        offsetX={0}
        offsetY={-16}
      />
    </PatternWrapper>
  );
}

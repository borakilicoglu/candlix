import { PatternWrapper } from "../PatternWrapper";
import { Candle } from "../../Candle";

export default function ThreeInsideDown({ title }: { title?: string }) {
  return (
    <PatternWrapper title={title}>
      <Candle
        color="green"
        wickTop={10}
        bodyHeight={55}
        wickBottom={10}
        offsetX={0}
        offsetY={0}
      />
      <Candle
        color="red"
        wickTop={10}
        bodyHeight={30}
        wickBottom={10}
        offsetX={0}
        offsetY={0}
      />
      <Candle
        color="red"
        wickTop={10}
        bodyHeight={40}
        wickBottom={10}
        offsetX={0}
        offsetY={20}
      />
    </PatternWrapper>
  );
}

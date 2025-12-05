import { PatternWrapper } from "../PatternWrapper";
import { Candle } from "../../Candle";

export default function ThreeOutsideDown({ title }: { title?: string }) {
  return (
    <PatternWrapper title={title}>
      <Candle
        color="green"
        wickTop={8}
        bodyHeight={15}
        wickBottom={8}
        offsetX={0}
        offsetY={5}
      />
      <Candle
        color="red"
        wickTop={10}
        bodyHeight={55}
        wickBottom={10}
        offsetX={0}
        offsetY={5}
      />
      <Candle
        color="red"
        wickTop={10}
        bodyHeight={40}
        wickBottom={10}
        offsetX={0}
        offsetY={24}
      />
    </PatternWrapper>
  );
}

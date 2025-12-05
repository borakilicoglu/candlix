import { PatternWrapper } from "../PatternWrapper";
import { Candle } from "../../Candle";

export default function ThreeInsideUp({ title }: { title?: string }) {
  return (
    <PatternWrapper title={title}>
      <Candle
        color="red"
        wickTop={8}
        bodyHeight={55}
        wickBottom={10}
        offsetX={0}
        offsetY={14}
      />
      <Candle
        color="green"
        wickTop={8}
        bodyHeight={30}
        wickBottom={10}
        offsetX={0}
        offsetY={15}
      />
      <Candle
        color="green"
        wickTop={8}
        bodyHeight={40}
        wickBottom={10}
        offsetX={0}
        offsetY={-10}
      />
    </PatternWrapper>
  );
}

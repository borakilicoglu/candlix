import { PatternWrapper } from "../PatternWrapper";
import { Candle } from "../../Candle";

export default function EveningStar({ title }: { title?: string }) {
  return (
    <PatternWrapper title={title}>
      <Candle
        color="green"
        wickTop={10}
        wickBottom={10}
        bodyWidth={10}
        bodyHeight={35}
        offsetX={0}
        offsetY={20}
      />
      <Candle
        color="red"
        wickTop={6}
        wickBottom={8}
        bodyWidth={10}
        bodyHeight={12}
        offsetX={0}
        offsetY={-30}
      />
      <Candle
        color="red"
        wickTop={10}
        wickBottom={10}
        bodyWidth={10}
        bodyHeight={35}
        offsetX={0}
        offsetY={5}
      />
    </PatternWrapper>
  );
}

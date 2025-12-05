import { PatternWrapper } from "../PatternWrapper";
import { Candle } from "../../Candle";

export default function BearishAbandonedBaby({ title }: { title?: string }) {
  return (
    <PatternWrapper title={title}>
      <Candle
        color="green"
        wickTop={8}
        wickBottom={8}
        bodyWidth={10}
        bodyHeight={35}
        offsetX={0}
        offsetY={16}
      />
      <Candle
        color="red"
        wickTop={12}
        wickBottom={4}
        bodyHeight={10}
        bodyWidth={10}
        offsetX={0}
        offsetY={-30}
      />
      <Candle
        color="red"
        wickTop={8}
        wickBottom={8}
        bodyWidth={10}
        bodyHeight={35}
        offsetX={0}
        offsetY={23}
      />
    </PatternWrapper>
  );
}

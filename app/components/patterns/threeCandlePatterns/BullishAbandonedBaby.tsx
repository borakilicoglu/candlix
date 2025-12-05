import { PatternWrapper } from "../PatternWrapper";
import { Candle } from "../../Candle";

export default function BullishAbandonedBaby({ title }: { title?: string }) {
  return (
    <PatternWrapper title={title}>
      <Candle
        color="red"
        wickTop={8}
        wickBottom={8}
        bodyWidth={10}
        bodyHeight={35}
        offsetX={0}
        offsetY={-5}
      />
      <Candle
        color="green"
        wickTop={4}
        wickBottom={12}
        bodyWidth={10}
        bodyHeight={6}
        offsetX={0}
        offsetY={35}
      />
      <Candle
        color="green"
        wickTop={8}
        wickBottom={8}
        bodyWidth={10}
        bodyHeight={35}
        offsetX={0}
        offsetY={-10}
      />
    </PatternWrapper>
  );
}

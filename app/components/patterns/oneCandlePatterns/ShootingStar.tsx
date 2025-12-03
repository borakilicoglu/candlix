import { Candle } from "@/app/components/Candle";
import { PatternWrapper } from "@/app/components/PatternWrapper";

export default function ShootingStar({ title }: { title?: string }) {
  return (
    <PatternWrapper title={title}>
      <Candle
        color="green"
        wickTop={5}
        bodyWidth={10}
        bodyHeight={25}
        wickBottom={5}
        offsetX={0}
        offsetY={30}
      />
      <Candle
        color="green"
        wickTop={5}
        bodyWidth={10}
        bodyHeight={25}
        wickBottom={5}
        offsetX={0}
        offsetY={8}
      />
      <Candle
        color="red"
        wickTop={15}
        bodyHeight={10}
        offsetX={0}
        offsetY={-20}
      />
      <Candle
        color="red"
        wickTop={5}
        bodyWidth={10}
        bodyHeight={30}
        wickBottom={5}
        offsetX={0}
        offsetY={6}
      />
      <Candle
        color="red"
        wickTop={5}
        bodyWidth={10}
        bodyHeight={20}
        wickBottom={5}
        offsetX={0}
        offsetY={30}
      />
    </PatternWrapper>
  );
}

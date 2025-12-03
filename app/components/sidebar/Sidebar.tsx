import { CandleStick } from "@/app/components";

export default function Sidebar() {
  return (
    <div className="flex flex-col h-full grow max-w-70">
      <div className="flex flex-col h-[50%] bg-[#21c1a2] items-center justify-center p-10 gap-2">
        <h1 className="text-white font-black text-4xl text-center">
          Interactive Candlestick Patterns
        </h1>
        <h3 className="text-[#12372c] font-bold text-3xl text-center">
          Cheat Sheet
        </h3>
      </div>
      <div className="flex h-[50%] bg-[#5f6673] flex-col items-center justify-start">
        <h4 className="text-white font-bold text-2xl py-4 items-center flex text-left w-full px-4">
          Basics
        </h4>

        <div className="flex-1 w-full flex flex-col">
          <CandleStick color="red"></CandleStick>
          <CandleStick color="green"></CandleStick>
        </div>
      </div>
    </div>
  );
}

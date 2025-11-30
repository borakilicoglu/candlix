export default function CandleDiagram({ color }: { color: "red" | "green" }) {
  const candleColor = color === "red" ? "#d9304f" : "#54e8b4";

  return (
    <div className="flex-1 text-white w-full">
      <div className="flex flex-1 min-w-full">
        {color === "red" ? (
          <div className="flex flex-col flex-1 justify-between items-center">
            <span className="text-sm font-semibold">
              Upper <br /> Shadow
            </span>
            <span className="text-sm font-semibold">Real Body</span>
            <span className="text-sm font-semibold">
              Lower <br /> Shadow
            </span>
          </div>
        ) : (
          <div className="flex flex-col flex-1 justify-between items-center"></div>
        )}

        <div className="flex flex-col items-center shrink">
          <div
            className="w-1 h-8"
            style={{ backgroundColor: candleColor }}
          ></div>
          <div
            className="w-8 h-20"
            style={{ backgroundColor: candleColor }}
          ></div>
          <div
            className="w-1 h-8"
            style={{ backgroundColor: candleColor }}
          ></div>
        </div>

        <div className="flex flex-col flex-1 justify-between">
          <span
            className={`flex flex-col text-sm font-semibold h-6 w-full items-center justify-end relative ${
              color === "green" ? "opacity-0" : " "
            }`}
          >
            <span className="absolute -left-2.5 right-0 top-0 border-b border-white w-[70%]"></span>
            <span className="absolute -top-5 flex text-sm font-semibold">
              High
            </span>
          </span>
          <span className="flex flex-col h-20 justify-between items-center w-full relative">
            <span className="flex w-[60%] text-sm font-semibold border-b justify-end absolute -top-5 left-1">
              {color === "green" ? "Close" : "Open"}
            </span>
            <span className="flex w-[60%] text-sm font-semibold border-b justify-end absolute bottom-0 left-1">
              {color === "green" ? "Open" : "Close"}
            </span>
          </span>
          <span
            className={`flex flex-col text-sm font-semibold h-6 w-full items-center justify-end relative ${
              color === "green" ? " opacity-0" : ""
            }`}
          >
            <span className="flex text-sm font-semibold">Low</span>
            <span className="absolute -left-2.5 right-0 bottom-0 border-b border-white w-[70%]"></span>
          </span>
        </div>
      </div>
    </div>
  );
}

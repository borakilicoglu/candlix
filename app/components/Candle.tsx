const COLORS = {
  green: "#54e8b4",
  red: "#d9304f",
  yellow: "#fdc800",
};

export function Candle({
  color = "green",
  bodyHeight = 40,
  bodyWidth = 10,
  wickTop,
  wickBottom,
  wickWidth = 2,
  offsetX = 0,
  offsetY = 0,
  hide = false,
  stars = [],
}: {
  color?: "red" | "green" | "yellow";
  bodyHeight?: number;
  bodyWidth?: number;
  wickTop?: number;
  wickBottom?: number;
  wickWidth?: number;
  offsetX?: number;
  offsetY?: number;
  hide?: boolean;
  stars?: {
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
    color?: string;
    size?: number;
    widht?: number;
    height?: number;
  }[];
}) {
  if (hide) return null;

  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}
    >
      {/* Wick Top */}
      {wickTop && wickTop > 0 && (
        <div
          style={{
            width: wickWidth,
            height: wickTop,
            background: COLORS[color],
          }}
        />
      )}

      {/* BODY WRAPPER (relative needed for stars) */}
      <div
        className="relative"
        style={{
          width: bodyWidth,
          height: bodyHeight,
          background: COLORS[color],
        }}
      >
        {/* Render Stars */}
        {stars.map((star, i) => {
          const {
            position,
            color = COLORS["yellow"],
            size = 8,
            widht = 8,
            height = 8,
          } = star;

          const posClasses: Record<string, string> = {
            "top-left": "-top-2 -left-2",
            "top-right": "-top-2 -right-2",
            "bottom-left": "-bottom-2 -left-2",
            "bottom-right": "-bottom-2 -right-2",
          };

          return (
            <div
              key={i}
              className={`absolute text-center ${
                position ? posClasses[position] : ""
              }`}
              style={{
                lineHeight: "6px",
                color,
                fontSize: size,
                width: widht,
                height,
              }}
            >
              ✦
            </div>
          );
        })}
      </div>

      {/* Wick Bottom */}
      {wickBottom && wickBottom > 0 && (
        <div
          style={{
            width: wickWidth,
            height: wickBottom,
            background: COLORS[color],
          }}
        />
      )}
    </div>
  );
}

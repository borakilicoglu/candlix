export const blocks: Array<string> = [
  "One Candle Patterns",
  "Two Candle Patterns",
  "Neutral",
  "Three + Candle Patterns",
];

export const neutralPatterns = ["Star", "Spinning Top", "Doji", "Marubozu"];

export type Pattern = {
  name: string;
  type: "bullish" | "bearish" | "neutral";
  desc?: string;
};

export type PatternCategory = {
  title: string;
  col: number;
  patterns: Pattern[];
};

export enum PatternType {
  Bullish = "bullish",
  Bearish = "bearish",
  Neutral = "neutral",
}

export enum PatternColor {
  Bullish = "text-[#54e8b4]",
  Bearish = "text-[#d9304f]",
  Neutral = "text-white",
}

// Helper map
export const PatternTypeToColor: Record<PatternType, PatternColor> = {
  [PatternType.Bullish]: PatternColor.Bullish,
  [PatternType.Bearish]: PatternColor.Bearish,
  [PatternType.Neutral]: PatternColor.Neutral,
};

export const candlePatterns: PatternCategory[] = [
  {
    title: "One Candle Patterns",
    col: 4,
    patterns: [
      {
        name: "Hammer",
        type: "bullish",
        desc: "The Hammer is a bullish reversal pattern that forms at the bottom of downtrends. It has a small body at the top and a long lower shadow, indicating that sellers pushed prices down but buyers regained control, closing near the high. This rejection of lower prices suggests potential upward momentum.",
      },
      {
        name: "Inverted\nHammer",
        type: "bullish",
        desc: "The Inverted Hammer is a bullish reversal pattern that appears at the end of a downtrend. It features a small body at the bottom with a long upper shadow, showing that buyers attempted to push prices higher but faced resistance. Despite this, the presence of buying pressure suggests a potential trend reversal upward, especially when confirmed by the next candle.",
      },
      {
        name: "Dragonfly\nDoji",
        type: "bullish",
        desc: "The Dragonfly Doji is a bullish reversal signal that forms when the opening and closing prices are at or very near the high of the session, with a long lower shadow. This pattern shows that sellers pushed prices significantly lower during the session, but buyers fought back and drove prices back up to close near the opening level, indicating strong buying pressure and potential upward momentum.",
      },
      {
        name: "Bullish\nSpinning Top",
        type: "bullish",
        desc: "The Bullish Spinning Top is a candlestick pattern with a small green body and long upper and lower shadows of similar length. It indicates indecision in the market, where neither buyers nor sellers have clear control. When it appears after a downtrend, it can signal that selling pressure is weakening and a potential reversal to the upside may occur, though confirmation is needed.",
      },
      {
        name: "Hanging\nMan",
        type: "bearish",
        desc: "The Hanging Man is a bearish reversal pattern that appears at the top of an uptrend. It has a small body at the upper end with a long lower shadow and little to no upper shadow. While it looks similar to a Hammer, its position at the peak suggests that despite buyers pushing prices up, sellers managed to drive them back down, indicating potential weakness and a possible trend reversal downward.",
      },
      {
        name: "Shooting\nStar",
        type: "bearish",
        desc: "The Shooting Star is a bearish reversal pattern that forms at the top of an uptrend. It features a small body at the lower end with a long upper shadow, showing that buyers pushed prices significantly higher during the session, but sellers regained control and drove prices back down near the opening. This rejection of higher prices suggests weakening bullish momentum and a potential reversal to the downside.",
      },
      {
        name: "Gravestone\nDoji",
        type: "bearish",
        desc: "The Gravestone Doji is a bearish reversal pattern that appears at the top of an uptrend. The opening and closing prices are at or near the low of the session, with a long upper shadow. This pattern indicates that buyers tried to push prices higher, but sellers overwhelmed them and drove prices back down to close near the opening level, signaling strong selling pressure and potential downward reversal.",
      },
      {
        name: "Bearish\nSpinning Top",
        type: "bearish",
        desc: "The Bearish Spinning Top is a candlestick pattern with a small red body and long upper and lower shadows of similar length. It represents market indecision where neither buyers nor sellers dominate. When appearing after an uptrend, it suggests that buying pressure is weakening and uncertainty is increasing, potentially signaling a trend reversal to the downside, though further confirmation is typically required.",
      },
    ],
  },
  {
    title: "Two Candle Patterns",
    col: 5,
    patterns: [
      {
        name: "Bullish\nKicker",
        type: "bullish",
        desc: "The Bullish Engulfing pattern consists of two candles where a small bearish candle is followed by a larger bullish candle that completely engulfs the previous candle's body. This pattern suggests a strong shift from selling to buying pressure and often signals a potential upward reversal.",
      },
      {
        name: "Bullish\nEngulfing",
        type: "bullish",
        desc: "The Bearish Engulfing pattern consists of two candles where a small bullish candle is followed by a larger bearish candle that completely engulfs the previous candle's body. This indicates a strong shift from buying to selling pressure and often signals a potential downward reversal.",
      },
      {
        name: "Bullish\nHarami",
        type: "bullish",
        desc: "The Bearish Engulfing pattern consists of two candles where a small bullish candle is followed by a larger bearish candle that completely engulfs the previous candle's body. This indicates a strong shift from buying to selling pressure and often signals a potential downward reversal.",
      },
      {
        name: "Piercing\nLine",
        type: "bullish",
        desc: "The Bearish Engulfing pattern consists of two candles where a small bullish candle is followed by a larger bearish candle that completely engulfs the previous candle's body. This indicates a strong shift from buying to selling pressure and often signals a potential downward reversal.",
      },
      {
        name: "Tweezer\nBottom",
        type: "bullish",
        desc: "The Bullish Engulfing pattern consists of two candles where a small bearish candle is followed by a larger bullish candle that completely engulfs the previous candle's body. This pattern suggests a strong shift from selling to buying pressure and often signals a potential upward reversal.",
      },
      {
        name: "Bearish\nKicker",
        type: "bearish",
        desc: "The Bearish Engulfing pattern consists of two candles where a small bullish candle is followed by a larger bearish candle that completely engulfs the previous candle's body. This indicates a strong shift from buying to selling pressure and often signals a potential downward reversal.",
      },
      {
        name: "Bearish\nEngulfing",
        type: "bearish",
        desc: "The Bearish Engulfing pattern consists of two candles where a small bullish candle is followed by a larger bearish candle that completely engulfs the previous candle's body. This indicates a strong shift from buying to selling pressure and often signals a potential downward reversal.",
      },
      {
        name: "Bearish\nHarami",
        type: "bearish",
        desc: "The Bearish Engulfing pattern consists of two candles where a small bullish candle is followed by a larger bearish candle that completely engulfs the previous candle's body. This indicates a strong shift from buying to selling pressure and often signals a potential downward reversal.",
      },
      {
        name: "Dark Cloud\nCover",
        type: "bearish",
        desc: "The Bearish Engulfing pattern consists of two candles where a small bullish candle is followed by a larger bearish candle that completely engulfs the previous candle's body. This indicates a strong shift from buying to selling pressure and often signals a potential downward reversal.",
      },
      {
        name: "Tweezer\nTop",
        type: "bearish",
        desc: "The Bearish Engulfing pattern consists of two candles where a small bullish candle is followed by a larger bearish candle that completely engulfs the previous candle's body. This indicates a strong shift from buying to selling pressure and often signals a potential downward reversal.",
      },
    ],
  },
  {
    title: "Neutral",
    col: 2,
    patterns: [
      {
        name: "Star",
        type: "neutral",
        desc: "The Doji is a neutral candlestick pattern where the opening and closing prices are virtually equal, creating a cross or plus sign shape. It represents indecision in the market and can signal a potential trend reversal when appearing after a strong trend.",
      },
      {
        name: "Marubozu",
        type: "neutral",
        desc: "The Doji is a neutral candlestick pattern where the opening and closing prices are virtually equal, creating a cross or plus sign shape. It represents indecision in the market and can signal a potential trend reversal when appearing after a strong trend.",
      },
      {
        name: "Doji",
        type: "neutral",
        desc: "The Doji is a neutral candlestick pattern where the opening and closing prices are virtually equal, creating a cross or plus sign shape. It represents indecision in the market and can signal a potential trend reversal when appearing after a strong trend.",
      },
      {
        name: "Spinning\nTop",
        type: "neutral",
        desc: "The Doji is a neutral candlestick pattern where the opening and closing prices are virtually equal, creating a cross or plus sign shape. It represents indecision in the market and can signal a potential trend reversal when appearing after a strong trend.",
      },
    ],
  },
  {
    title: "Three + Candle Patterns",
    col: 7,
    patterns: [
      {
        name: "Morning\nStar",
        type: "bullish",
        desc: "The Morning Star is a three-candle bullish reversal pattern. It consists of a long bearish candle, followed by a small-bodied candle (indicating indecision), and then a long bullish candle. This pattern suggests that selling pressure is exhausted and buyers are taking control.",
      },
      {
        name: "Morning Doji\nStar",
        type: "bullish",
        desc: "The Evening Star is a three-candle bearish reversal pattern. It consists of a long bullish candle, followed by a small-bodied candle (indicating indecision), and then a long bearish candle. This pattern suggests that buying pressure is exhausted and sellers are taking control.",
      },
      {
        name: "Bullish Abandoned\nBaby",
        type: "bullish",
        desc: "The Morning Star is a three-candle bullish reversal pattern. It consists of a long bearish candle, followed by a small-bodied candle (indicating indecision), and then a long bullish candle. This pattern suggests that selling pressure is exhausted and buyers are taking control.",
      },
      {
        name: "Three White\nSoldiers",
        type: "bullish",
        desc: "The Evening Star is a three-candle bearish reversal pattern. It consists of a long bullish candle, followed by a small-bodied candle (indicating indecision), and then a long bearish candle. This pattern suggests that buying pressure is exhausted and sellers are taking control.",
      },
      {
        name: "Three Line\nStrike Bullish",
        type: "bullish",
        desc: "The Morning Star is a three-candle bullish reversal pattern. It consists of a long bearish candle, followed by a small-bodied candle (indicating indecision), and then a long bullish candle. This pattern suggests that selling pressure is exhausted and buyers are taking control.",
      },
      {
        name: "Three Inside\nUp",
        type: "bullish",
        desc: "The Evening Star is a three-candle bearish reversal pattern. It consists of a long bullish candle, followed by a small-bodied candle (indicating indecision), and then a long bearish candle. This pattern suggests that buying pressure is exhausted and sellers are taking control.",
      },
      {
        name: "Three Outside\nUp",
        type: "bullish",
        desc: "The Morning Star is a three-candle bullish reversal pattern. It consists of a long bearish candle, followed by a small-bodied candle (indicating indecision), and then a long bullish candle. This pattern suggests that selling pressure is exhausted and buyers are taking control.",
      },
      {
        name: "Evening\nStar",
        type: "bearish",
        desc: "The Morning Star is a three-candle bullish reversal pattern. It consists of a long bearish candle, followed by a small-bodied candle (indicating indecision), and then a long bullish candle. This pattern suggests that selling pressure is exhausted and buyers are taking control.",
      },
      {
        name: "Evening Doji\nStar",
        type: "bearish",
        desc: "The Evening Star is a three-candle bearish reversal pattern. It consists of a long bullish candle, followed by a small-bodied candle (indicating indecision), and then a long bearish candle. This pattern suggests that buying pressure is exhausted and sellers are taking control.",
      },
      {
        name: "Morning\nStar",
        type: "bearish",
        desc: "The Morning Star is a three-candle bullish reversal pattern. It consists of a long bearish candle, followed by a small-bodied candle (indicating indecision), and then a long bullish candle. This pattern suggests that selling pressure is exhausted and buyers are taking control.",
      },
      {
        name: "Evening\nStar",
        type: "bearish",
        desc: "The Evening Star is a three-candle bearish reversal pattern. It consists of a long bullish candle, followed by a small-bodied candle (indicating indecision), and then a long bearish candle. This pattern suggests that buying pressure is exhausted and sellers are taking control.",
      },
      {
        name: "Morning\nStar",
        type: "bearish",
        desc: "The Morning Star is a three-candle bullish reversal pattern. It consists of a long bearish candle, followed by a small-bodied candle (indicating indecision), and then a long bullish candle. This pattern suggests that selling pressure is exhausted and buyers are taking control.",
      },
      {
        name: "Evening\nStar",
        type: "bearish",
        desc: "The Evening Star is a three-candle bearish reversal pattern. It consists of a long bullish candle, followed by a small-bodied candle (indicating indecision), and then a long bearish candle. This pattern suggests that buying pressure is exhausted and sellers are taking control.",
      },
      {
        name: "Morning\nStar",
        type: "bearish",
        desc: "The Morning Star is a three-candle bullish reversal pattern. It consists of a long bearish candle, followed by a small-bodied candle (indicating indecision), and then a long bullish candle. This pattern suggests that selling pressure is exhausted and buyers are taking control.",
      },
    ],
  },
];

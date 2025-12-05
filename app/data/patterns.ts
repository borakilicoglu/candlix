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
        desc: "A bullish reversal pattern forming at the bottom of a downtrend. Its long lower shadow shows sellers drove prices down, but buyers regained control and pushed the close near the high, signaling rejection of lower prices.",
      },
      {
        name: "Inverted\nHammer",
        type: "bullish",
        desc: "A bullish reversal pattern appearing after a decline. The long upper shadow shows buyers attempted to push higher, and despite closing near the open, the buying pressure can signal a potential upward reversal when confirmed by the next candle.",
      },
      {
        name: "Dragonfly\nDoji",
        type: "bullish",
        desc: "A bullish reversal candle where the open and close occur near the high, leaving a long lower shadow. Strong rejection of lower prices indicates buyers stepping in aggressively, suggesting potential upward momentum.",
      },
      {
        name: "Bullish\nSpinning Top",
        type: "bullish",
        desc: "A small-bodied candle with long wicks on both sides, reflecting indecision. When it appears in a downtrend, it suggests weakening selling pressure and a potential shift toward bullish control if confirmed by the following candle.",
      },
      {
        name: "Hanging\nMan",
        type: "bearish",
        desc: "A bearish reversal pattern forming at the top of an uptrend. Its long lower shadow shows sellers tested control during the session, and the small body near the top signals weakening bullish momentum and possible trend reversal downward.",
      },
      {
        name: "Shooting\nStar",
        type: "bearish",
        desc: "A bearish reversal candle forming after an uptrend. A long upper shadow shows buyers attempted to push higher but failed as sellers forced the close near the open, indicating rejection of higher prices.",
      },
      {
        name: "Gravestone\nDoji",
        type: "bearish",
        desc: "A bearish reversal pattern with the open and close near the low and a long upper shadow. It signals that buyers pushed prices higher but were overwhelmed by sellers, suggesting strong downward pressure.",
      },
      {
        name: "Bearish\nSpinning Top",
        type: "bearish",
        desc: "A small-bodied candle with long wicks indicating indecision. After an uptrend, it reflects weakening buying strength and increasing uncertainty, often serving as an early warning of a potential bearish shift.",
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
        desc: "A powerful bullish reversal pattern where a bearish candle is immediately followed by a bullish candle that opens with a strong upward gap, signaling an abrupt shift in market sentiment.",
      },
      {
        name: "Bullish\nEngulfing",
        type: "bullish",
        desc: "A bullish reversal pattern where a small bearish candle is fully engulfed by a larger bullish candle, indicating strong buying pressure and a potential upward reversal.",
      },
      {
        name: "Bullish\nHarami",
        type: "bullish",
        desc: "A bullish reversal pattern where a small bullish candle forms entirely within the prior larger bearish candle’s body, suggesting weakening selling pressure and a possible trend shift upward.",
      },
      {
        name: "Piercing\nLine",
        type: "bullish",
        desc: "A bullish reversal pattern where a strong bearish candle is followed by a bullish candle that opens lower but closes above the midpoint of the previous candle, signaling buyer strength.",
      },
      {
        name: "Tweezer\nBottom",
        type: "bullish",
        desc: "A bullish reversal pattern formed when two consecutive candles share the same or very similar lows, suggesting strong support and rejection of lower prices.",
      },
      {
        name: "Bearish\nKicker",
        type: "bearish",
        desc: "A strong bearish reversal pattern where a bullish candle is followed by a bearish candle that opens with a sharp downward gap, reflecting a sudden dominance of sellers.",
      },
      {
        name: "Bearish\nEngulfing",
        type: "bearish",
        desc: "A bearish reversal pattern where a small bullish candle is fully engulfed by a larger bearish candle, indicating sellers have taken control and a potential decline may follow.",
      },
      {
        name: "Bearish\nHarami",
        type: "bearish",
        desc: "A bearish reversal pattern where a small bearish candle forms completely inside the prior bullish candle’s body, signaling weakening buying momentum.",
      },
      {
        name: "Dark Cloud\nCover",
        type: "bearish",
        desc: "A bearish reversal pattern where a bullish candle is followed by a bearish candle that opens higher but closes below the midpoint of the previous candle, indicating a shift toward selling pressure.",
      },
      {
        name: "Tweezer\nTop",
        type: "bearish",
        desc: "A bearish reversal pattern formed when two consecutive candles share the same or very similar highs, signaling strong resistance and rejection of higher prices.",
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
        desc: "A small-bodied candle that appears after a strong trend, signaling indecision and a potential shift in momentum depending on the following candle.",
      },
      {
        name: "Marubozu",
        type: "neutral",
        desc: "A candle with no visible wicks, representing strong one-directional momentum. A bullish Marubozu signals aggressive buying, while a bearish Marubozu shows dominant selling pressure.",
      },
      {
        name: "Doji",
        type: "neutral",
        desc: "A candle where the opening and closing prices are nearly equal, reflecting market indecision. Dojis often appear before major reversals or pauses in trend direction.",
      },
      {
        name: "Spinning\nTop",
        type: "neutral",
        desc: "A candle with a small body and long upper and lower wicks, indicating a balanced battle between buyers and sellers and often signaling a slowdown or potential reversal.",
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
        desc: "A three-candle bullish reversal pattern. A long bearish candle is followed by a small indecision candle and then a strong bullish candle, showing sellers are weakening and buyers are taking control.",
      },
      {
        name: "Morning Doji\nStar",
        type: "bullish",
        desc: "A bullish reversal variation of the Morning Star where the middle candle is a Doji, signaling strong indecision before buyers take over with a bullish candle.",
      },
      {
        name: "Bullish Abandoned\nBaby",
        type: "bullish",
        desc: "A rare bullish reversal pattern where a Doji gaps below a strong bearish candle and is followed by a strong bullish candle, indicating a sharp shift from selling to buying pressure.",
      },
      {
        name: "Three White\nSoldiers",
        type: "bullish",
        desc: "A strong bullish continuation or reversal pattern made of three consecutive long bullish candles, each closing near its high and above the previous candle.",
      },
      {
        name: "Three Line\nStrike Bullish",
        type: "bullish",
        desc: "A bullish reversal pattern where three bullish candles are followed by a large bearish candle that opens higher but closes below the first candle, often trapping sellers before the trend continues upward.",
      },
      {
        name: "Three Inside\nUp",
        type: "bullish",
        desc: "A bullish reversal pattern where a small bullish or bearish candle forms inside the previous bearish candle, followed by a strong bullish candle confirming upward reversal.",
      },
      {
        name: "Three Outside\nUp",
        type: "bullish",
        desc: "A stronger bullish reversal pattern where a bullish engulfing candle is followed by another bullish candle, confirming the shift in momentum to buyers.",
      },
      {
        name: "Evening\nStar",
        type: "bearish",
        desc: "A three-candle bearish reversal pattern. A strong bullish candle is followed by an indecision candle and then a strong bearish candle, signaling weakening buying pressure.",
      },
      {
        name: "Evening Doji\nStar",
        type: "bearish",
        desc: "A bearish Evening Star variation where the middle candle is a Doji, showing stronger indecision before sellers take control with a bearish candle.",
      },
      {
        name: "Bearish Abandoned\nBaby",
        type: "bearish",
        desc: "A rare bearish reversal pattern where a Doji gaps above a bullish candle and is followed by a strong bearish candle, signaling a sharp momentum shift to sellers.",
      },
      {
        name: "Three Black\nCrows",
        type: "bearish",
        desc: "A powerful bearish reversal pattern made of three long consecutive bearish candles, each opening within the previous candle and closing lower.",
      },
      {
        name: "Three Line\nStrike Bearish",
        type: "bearish",
        desc: "A bearish reversal pattern where three bearish candles are followed by a strong bullish candle that opens lower but closes above the first candle, often signaling a continuation lower afterward.",
      },
      {
        name: "Three Inside\nDown",
        type: "bearish",
        desc: "A bearish reversal pattern where a small candle forms inside the prior bullish candle and is followed by a strong bearish candle confirming the downward trend.",
      },
      {
        name: "Three Outside\nDown",
        type: "bearish",
        desc: "A strong bearish reversal pattern where a bearish engulfing candle is followed by another bearish candle confirming sellers' dominance.",
      },
    ],
  },
];

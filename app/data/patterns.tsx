export const blocks: Array<string> = [
  "One Candle Patterns",
  "Two Candle Patterns",
  "Neutral",
  "Three + Candle Patterns",
];

export type Pattern = {
  name: string;
  type: "bullish" | "bearish";
  desc?: string;
};

export const oneCandlePatterns: Pattern[] = [
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
];

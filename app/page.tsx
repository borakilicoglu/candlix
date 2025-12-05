"use client";

import React, { useState } from "react";

import { motion, AnimatePresence } from "motion/react";

import {
  Sidebar,
  CardTitles,
  CardFlags,
  CardHeader,
  CardDesc,
  Hammer,
  InvertedHammer,
  DragonflyDoji,
  GravestoneDoji,
  BullishSpinningTop,
  BearishSpinningTop,
  HangingMan,
  ShootingStar,
  BullishKicker,
  BullishEngulfing,
  BullishHarami,
  PiercingLine,
  TweezerBottom,
  BearishKicker,
  BearishEngulfing,
  BearishHarami,
  DarkCloudCover,
  TweezerTop,
  Star,
  Marubozu,
  Doji,
  SpinningTop,
  NeutralGrid,
  MorningStar,
  MorningDojiStar,
  BullishAbandonedBaby,
  ThreeWhiteSoldiers,
  ThreeInsideUp,
  ThreeOutsideUp,
  EveningStar,
  EveningDojiStar,
  BearishAbandonedBaby,
  ThreeBlackCrows,
  ThreeInsideDown,
  ThreeOutsideDown,
  ThreeLineStrikeBearish,
  ThreeLineStrikeBullish,
} from "@/app/components";

import {
  candlePatterns,
  neutralPatterns,
  Pattern,
  PatternCategory,
} from "./data/patterns";
import NormalGrid from "./NormalGrid";

const patterns: Record<string, React.ComponentType<{ title?: string }>> = {
  hammer: Hammer,
  invertedHammer: InvertedHammer,
  dragonflyDoji: DragonflyDoji,
  bullishSpinningTop: BullishSpinningTop,
  bearishSpinningTop: BearishSpinningTop,
  hangingMan: HangingMan,
  shootingStar: ShootingStar,
  gravestoneDoji: GravestoneDoji,
  bullishKicker: BullishKicker,
  bullishEngulfing: BullishEngulfing,
  bullishHarami: BullishHarami,
  piercingLine: PiercingLine,
  tweezerBottom: TweezerBottom,
  bearishKicker: BearishKicker,
  bearishEngulfing: BearishEngulfing,
  bearishHarami: BearishHarami,
  darkCloudCover: DarkCloudCover,
  tweezerTop: TweezerTop,
  // Neutral
  star: Star,
  marubozu: Marubozu,
  doji: Doji,
  spinningTop: SpinningTop,
  // Three Candle Patterns
  morningStar: MorningStar,
  morningDojiStar: MorningDojiStar,
  bullishAbandonedBaby: BullishAbandonedBaby,
  threeWhiteSoldiers: ThreeWhiteSoldiers,
  threeLineStrikeBullish: ThreeLineStrikeBullish,
  threeInsideUp: ThreeInsideUp,
  threeOutsideUp: ThreeOutsideUp,
  eveningStar: EveningStar,
  eveningDojiStar: EveningDojiStar,
  bearishAbandonedBaby: BearishAbandonedBaby,
  threeBlackCrows: ThreeBlackCrows,
  threeLineStrikeBearish: ThreeLineStrikeBearish,
  threeInsideDown: ThreeInsideDown,
  threeOutsideDown: ThreeOutsideDown,
};

export function DynamicPattern({ title }: { title: string }) {
  const key =
    title
      .replace(/[\s\n]+/g, "")
      .charAt(0)
      .toLowerCase() + title.replace(/[\s\n]+/g, "").slice(1);

  const Component = patterns[key];

  if (!Component) return <Hammer title="Hammer" />;

  return <Component title={title} />;
}

export const getGridCols = (cols: number) => {
  const gridClasses: Record<number, string> = {
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6",
    7: "grid-cols-7",
    8: "grid-cols-8",
  };
  return gridClasses[cols] || "grid-cols-4";
};

const isNeutralGroup = (block: PatternCategory) =>
  block.patterns.every((p: Pattern) =>
    neutralPatterns.includes(p.name.replace(/\s+/g, " "))
  );

export default function Home() {
  const [selectedPattern, setSelectedPattern] = useState<{
    pattern: Pattern;
    blockTitle: string;
  } | null>(null);

  return (
    <div className="flex h-screen items-center justify-center font-sans bg-black">
      <main className="flex h-full w-full bg-[#1e2025]">
        <Sidebar />
        <div className="flex flex-col w-[80%] bg-[#1e2025] p-6 gap-4">
          {[candlePatterns.slice(0, 2), candlePatterns.slice(2)].map(
            (group, groupIndex) => {
              const widths =
                groupIndex === 0
                  ? ["w-[45%]", "w-[55%]"]
                  : ["w-[25%]", "w-[75%]"];
              return (
                <div key={groupIndex} className="flex h-1/2 gap-4">
                  {group.map((block, index) => (
                    <div key={index} className={`flex ${widths[index]} h-full`}>
                      <div className="flex flex-col w-full gap-2">
                        <h4
                          className={`text-white font-bold text-2xl ${
                            groupIndex === 1 && index === 0 ? "ml-2" : "ml-20"
                          }`}
                        >
                          {block?.title}
                        </h4>
                        <div className="flex w-full h-full gap-x-2">
                          {!(groupIndex === 1 && index === 0) && (
                            <CardTitles
                              isSelected={
                                selectedPattern?.blockTitle === block?.title
                              }
                              selectedPattern={selectedPattern?.pattern ?? null}
                            />
                          )}
                          <div
                            className={`${
                              groupIndex === 1 && index === 0
                                ? ""
                                : "bg-[#2b2f36]"
                            } flex-1 flex overflow-hidden`}
                          >
                            {!(groupIndex === 1 && index === 0) && (
                              <CardFlags
                                isSelected={
                                  selectedPattern?.blockTitle === block?.title
                                }
                                selectedPattern={
                                  selectedPattern?.pattern ?? null
                                }
                              />
                            )}
                            <AnimatePresence mode="wait">
                              {selectedPattern?.blockTitle === block?.title ? (
                                <motion.div
                                  key="selectedPattern"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  transition={{
                                    duration: 0.4,
                                    ease: "easeInOut",
                                  }}
                                  className="flex flex-1 flex-col w-full bg-[#2b2f36] items-start justify-center p-8 gap-y-2 group cursor-pointer"
                                  onClick={() => setSelectedPattern(null)}
                                >
                                  <CardHeader
                                    selectedPattern={
                                      selectedPattern?.pattern ?? null
                                    }
                                  />
                                  <CardDesc
                                    selectedPattern={
                                      selectedPattern?.pattern ?? null
                                    }
                                  />
                                </motion.div>
                              ) : (
                                <motion.div
                                  key="grid"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  transition={{
                                    duration: 0.4,
                                    ease: "easeInOut",
                                  }}
                                  className="flex flex-col w-full"
                                >
                                  {(() => {
                                    if (isNeutralGroup(block)) {
                                      return (
                                        <NeutralGrid
                                          blockTitle={block.title}
                                          patterns={block?.patterns}
                                          setSelectedPattern={
                                            setSelectedPattern
                                          }
                                        />
                                      );
                                    }
                                    return (
                                      <NormalGrid
                                        block={block}
                                        setSelectedPattern={setSelectedPattern}
                                      />
                                    );
                                  })()}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              );
            }
          )}
        </div>
      </main>
    </div>
  );
}

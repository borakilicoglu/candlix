"use client";

import React, { useState } from "react";

import { motion, AnimatePresence } from "motion/react";

import {
  Hammer,
  InvertedHammer,
  DragonflyDoji,
  BullishSpinningTop,
  HangingMan,
  CandleStick,
} from "@/app/components";

import { blocks, oneCandlePatterns, Pattern } from "./data/patterns";

const patterns: Record<string, React.ComponentType<{ title?: string }>> = {
  hammer: Hammer,
  invertedHammer: InvertedHammer,
  dragonflyDoji: DragonflyDoji,
  bullishSpinningTop: BullishSpinningTop,
  hangingMan: HangingMan,
};

function DynamicPattern({ title }: { title: string }) {
  const key =
    title
      .replace(/[\s\n]+/g, "")
      .charAt(0)
      .toLowerCase() + title.replace(/[\s\n]+/g, "").slice(1);

  const Component = patterns[key];

  if (!Component) return <Hammer title="Hammer" />;

  return <Component title={title} />;
}

export default function Home() {
  const [drawer, setDrawer] = useState<Pattern | null>(null);

  return (
    <div className="flex h-screen items-center justify-center font-sans bg-black px-8 py-10">
      <main className="flex h-full w-full bg-[#1e2025]">
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
            <h4 className="text-white font-bold text-xl py-4 items-center flex text-left w-full px-4">
              Basics
            </h4>

            <div className="flex-1 w-full flex flex-col">
              <CandleStick color="red"></CandleStick>
              <CandleStick color="green"></CandleStick>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 w-[80%] bg-[#1e2025] p-6 gap-4">
          {blocks.map((block, index) => (
            <div key={index} className="flex w-full">
              <div key={index} className="flex flex-col w-full gap-2">
                <h4 className="text-white font-bold text-2xl ml-20">{block}</h4>
                <div className="flex w-full h-full">
                  <div className="flex flex-col">
                    <p
                      className={`[writing-mode:vertical-rl] rotate-180 flex-1 text-center text-2xl font-bold ${
                        !drawer || drawer.type === "bullish"
                          ? "text-[#54e8b4]"
                          : "text-[#54e8b4]/30"
                      }`}
                    >
                      Bullish
                    </p>
                    <p
                      className={`[writing-mode:vertical-rl] rotate-180 flex-1 text-center text-2xl font-bold ${
                        !drawer || drawer.type === "bearish"
                          ? "text-[#d9304f]"
                          : "text-[#d9304f]/30"
                      }`}
                    >
                      Bearish
                    </p>
                  </div>
                  <div className="bg-[#2b2f36] flex-1 flex overflow-hidden">
                    <div className="w-4 flex h-full flex-col">
                      <div
                        className={`w-4 flex-1 ${
                          !drawer || drawer.type === "bullish"
                            ? "bg-[#54e8b4]"
                            : "bg-[#54e8b4]/30"
                        }`}
                      ></div>
                      <div
                        className={`w-4 flex-1 ${
                          !drawer || drawer.type === "bearish"
                            ? "bg-[#d9304f]"
                            : "bg-[#d9304f]/30"
                        }`}
                      ></div>
                    </div>
                    <AnimatePresence mode="wait">
                      {drawer ? (
                        <motion.div
                          key="drawer"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="flex flex-1 flex-col w-full bg-[#2b2f36] items-start justify-center p-8 gap-y-2 group cursor-pointer"
                          onClick={() => setDrawer(null)}
                        >
                          <div className="flex w-full items-center">
                            <h5
                              className={`text-2xl font-bold flex items-center  gap-x-2 ${
                                drawer.type === "bullish"
                                  ? "text-[#54e8b4]"
                                  : "text-[#d9304f]"
                              }`}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                                />
                              </svg>
                              <span>{drawer?.name} Formation</span>
                            </h5>
                          </div>
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                          >
                            {drawer?.desc?.split("").map((char, index) => (
                              <motion.span
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                  duration: 0.05,
                                  delay: 0.6 + index * 0.02,
                                }}
                              >
                                {char}
                              </motion.span>
                            ))}
                          </motion.p>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="grid"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="flex flex-col w-full"
                        >
                          <div className="grid grid-cols-4 grid-rows-2 w-full h-full">
                            {oneCandlePatterns.map((pattern, index) => (
                              <div
                                className="flex"
                                key={index}
                                onClick={() => setDrawer && setDrawer(pattern)}
                              >
                                <DynamicPattern
                                  key={index}
                                  title={pattern?.name}
                                />
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

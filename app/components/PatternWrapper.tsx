import React from "react";
import { motion } from "motion/react";

export function PatternWrapper({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  const neutralPatterns = ["Star", "Spinning\nTop", "Doji", "Marubozu"];
  const isNeutral = neutralPatterns.includes(title ?? "");

  return isNeutral ? (
    <motion.button
      initial="hidden"
      animate="visible"
      whileHover={{
        y: [0, -5, 5, -5, 0],
        transition: { duration: 0.4 },
      }}
      variants={containerVariants}
      className={`flex ${
        !isNeutral ? "flex-col" : "gap-4"
      } items-center justify-center w-full cursor-pointer`}
    >
      {title && (
        <motion.div
          variants={itemVariants}
          className="flex h-[35%] items-center justify-center w-full"
        >
          <p className="text-center text-sm font-mono whitespace-pre-line">
            {title}
          </p>
        </motion.div>
      )}
      <div
        className={`h-[65%] w-full flex items-center justify-center ${
          title === "Star" ? "gap-3" : "gap-[5px]"
        }`}
      >
        {React.Children.map(children, (child, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="w-2.5 h-full flex items-center justify-center"
          >
            {child}
          </motion.div>
        ))}
      </div>
    </motion.button>
  ) : (
    <motion.button
      initial="hidden"
      animate="visible"
      whileHover={{
        y: [0, -5, 5, -5, 0],
        transition: { duration: 0.4 },
      }}
      variants={containerVariants}
      className={`flex ${
        !isNeutral ? "flex-col" : "gap-4"
      } items-center justify-center w-full cursor-pointer`}
    >
      <div
        className={`h-[65%] w-full flex items-center justify-center ${
          title === "Star" ? "gap-3" : "gap-[5px]"
        }`}
      >
        {React.Children.map(children, (child, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="w-2.5 h-full flex items-center justify-center"
          >
            {child}
          </motion.div>
        ))}
      </div>
      {title && (
        <motion.div
          variants={itemVariants}
          className="flex h-[35%] items-center justify-center w-full"
        >
          <p className="text-center text-sm font-mono whitespace-pre-line">
            {title}
          </p>
        </motion.div>
      )}
    </motion.button>
  );
}

import { motion } from "motion/react";

export default function BullishSpinningTop({ title }: { title?: string }) {
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

  return (
    <motion.button
      initial="hidden"
      animate="visible"
      whileHover={{
        y: [0, -5, 5, -5, 0], // Yukarı aşağı sallanma
        transition: { duration: 0.4 },
      }}
      variants={containerVariants}
      className="flex flex-col items-center justify-center w-full cursor-pointer"
    >
      {/* Chart Area */}
      <div className="flex h-[65%] items-center justify-center gap-2">
        {/* Hidden placeholders to sync stagger timing with DragonflyDoji */}
        <motion.div variants={itemVariants} className="hidden" />
        <motion.div variants={itemVariants} className="hidden" />

        {/* Center Hammer (Cyan) */}
        <div className="relative flex flex-col items-center">
          {/* Long shadow/wick below */}
          <motion.div
            variants={itemVariants}
            className="w-0.5 h-7 bg-[#54e8b4] mt-5"
          ></motion.div>
          {/* Body (square) */}
          <motion.div
            variants={itemVariants}
            className="w-2.5 h-4 bg-[#54e8b4]"
          ></motion.div>
          {/* Long shadow/wick below */}
          <motion.div
            variants={itemVariants}
            className="w-0.5 h-7 bg-[#54e8b4]"
          ></motion.div>
        </div>
      </div>
      <motion.div
        variants={itemVariants}
        className="flex h-[35%] items-center justify-center w-full"
      >
        <p className="text-center text-sm whitespace-pre-line">{title}</p>
      </motion.div>
    </motion.button>
  );
}

import { motion } from "motion/react";

export default function DragonflyDoji({ title }: { title?: string }) {
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
        {/* Left Red Line (tall) */}
        <motion.div
          variants={itemVariants}
          className="w-2.5 h-7 mb-5 bg-[#d9304f]"
        ></motion.div>

        <motion.div
          variants={itemVariants}
          className="w-2.5 h-6 mb-3 mt-6 bg-[#d9304f]"
        ></motion.div>

        {/* Center Hammer (Cyan) */}
        <motion.div
          variants={itemVariants}
          className="relative flex flex-col items-center"
        >
          {/* Body (square) */}
          <div className="w-3 h-0.5 bg-[#edb709] mt-17"></div>
          {/* Long shadow/wick below */}
          <div className="w-0.5 h-9 bg-[#edb709] mb-3"></div>
        </motion.div>

        {/* Right Green Line (medium) */}
        <motion.div
          variants={itemVariants}
          className="w-2.5 h-7 mt-6 bg-[#54e8b4]"
        ></motion.div>

        {/* Right Green Line (tall) */}
        <motion.div
          variants={itemVariants}
          className="w-2.5 h-7 mb-4 bg-[#54e8b4]"
        ></motion.div>
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

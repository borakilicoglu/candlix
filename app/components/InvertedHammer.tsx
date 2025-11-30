import { motion } from "motion/react";

export default function InvertedHammer({ title }: { title?: string }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Her element 0.15 saniye arayla gelsin
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
          className="w-2.5 h-8 mb-4 bg-[#d9304f]"
        ></motion.div>

        <motion.div
          variants={itemVariants}
          className="w-2.5 h-9 mb-3 mt-6 bg-[#d9304f]"
        ></motion.div>

        {/* Center Hammer (Cyan) */}
        <motion.div
          variants={itemVariants}
          className="relative flex flex-col items-center"
        >
          {/* Long shadow/wick below */}
          <div className="w-0.5 h-8 bg-[#54e8b4] mt-12"></div>
          {/* Body (square) */}
          <div className="w-2.5 h-2.5 bg-[#54e8b4]"></div>
          {/* Small yellow star near left lines */}
          <div className="text-yellow-400 text-[8px] absolute bottom-2 right-3">
            ✦
          </div>
          {/* Small yellow star near left lines */}
          <div className="text-yellow-400 text-[8px] absolute -bottom-2 left-3">
            ✦
          </div>
        </motion.div>

        {/* Right Green Line (medium) */}
        <motion.div
          variants={itemVariants}
          className="w-2.5 h-9 mt-8 bg-[#54e8b4]"
        ></motion.div>

        {/* Right Green Line (tall) */}
        <motion.div
          variants={itemVariants}
          className="w-2.5 h-9 mb-3 mt-6 bg-[#54e8b4]"
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

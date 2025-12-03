import { Pattern } from "../data/patterns";

import { motion } from "motion/react";

export default function CardDesc({
  selectedPattern,
}: {
  selectedPattern: Pattern | null;
}) {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      {selectedPattern?.desc?.split("").map((char, index) => (
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
  );
}

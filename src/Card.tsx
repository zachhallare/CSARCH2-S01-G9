import { useState } from "react";
import { motion } from "framer-motion";

function Card({ content }: { content: string }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="h-50 aspect-5/7 cursor-pointer"
      style={{ perspective: 1000 }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div
          className="absolute inset-0 bg-sky-500 rounded-lg"
          style={{
            backfaceVisibility: "hidden",
          }}
        ></div>

        <div
          className="absolute inset-0 bg-violet-500 rounded-lg flex items-center justify-center text-white font-bold"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {content}
        </div>
      </motion.div>
    </div>
  );
}

export default Card;

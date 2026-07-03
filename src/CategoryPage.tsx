import { motion } from "framer-motion";
import { armData, x86Data } from "./data";

const categories = ["Overview", "Performance", "Use Cases", "Key Devices", "Pros and Cons", "Comparison Table"];

function ChipPins({ accentColor }: { accentColor: string }) {
  return (
    <div className="flex gap-[2px] px-3 py-1">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="flex-1 h-[2px] rounded-full" style={{ backgroundColor: `${accentColor}18` }} />
      ))}
    </div>
  );
}

function ChipButton({ label, accentColor, onClick }: { label: string; accentColor: string; onClick: () => void }) {
  return (
    <motion.div
      layout
      className="rounded-xl cursor-pointer hover:scale-105 transition-transform duration-200"
      style={{ border: `1px solid ${accentColor}25`, backgroundColor: `${accentColor}06` }}
      onClick={onClick}
    >
      <ChipPins accentColor={accentColor} />
      <div
        className="mx-3 rounded-lg overflow-hidden bg-chip-grid"
        style={{ backgroundColor: "#0F1117", border: `1px solid ${accentColor}12`, minHeight: 70 }}
      >
        <div className="flex flex-col items-center justify-center h-full px-4 py-4">
          <div
            className="w-2 h-2 rounded-full mb-2 shrink-0"
            style={{ backgroundColor: accentColor, opacity: 0.45 }}
          />
          <span
            className="text-sm font-mono font-bold tracking-wider text-center"
            style={{ color: accentColor }}
          >
            {label}
          </span>
        </div>
      </div>
      <ChipPins accentColor={accentColor} />
    </motion.div>
  );
}

function CategoryPage({ arch, onBack, onSelect }: { arch: "arm" | "x86"; onBack: () => void; onSelect: (category: string) => void }) {
  const data = arch === "arm" ? armData : x86Data;
  const accentColor = arch === "arm" ? "#00C2D1" : "#FF8C42";

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -60 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="min-h-screen bg-pcb flex flex-col items-center py-10 px-4"
    >
      <div className="w-full max-w-2xl">
        <button
          onClick={onBack}
          className="text-gray-500 hover:text-white transition-colors mb-6 flex items-center gap-1 text-sm font-mono tracking-wide"
        >
          ← Back
        </button>

        <div
          className="rounded-xl p-6 mb-8"
          style={{ backgroundColor: `${accentColor}08`, border: `1px solid ${accentColor}25` }}
        >
          <h2 className="text-3xl font-bold text-white">{data.name}</h2>
          <p className="text-gray-400 text-xs mt-1 font-mono tracking-widest uppercase">{data.tagline}</p>
          <span
            className="inline-block mt-3 text-[10px] font-mono px-2 py-0.5 rounded tracking-widest"
            style={{ border: `1px solid ${accentColor}40`, color: accentColor }}
          >
            {data.isa}
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-4"
        >
          {categories.map((label) => {
            const key = label === "Use Cases" ? "useCases"
              : label === "Key Devices" ? "keyDevices"
              : label === "Pros and Cons" ? "prosAndCons"
              : label === "Comparison Table" ? "comparison"
              : label.toLowerCase();
            return (
              <ChipButton
                key={key}
                label={label}
                accentColor={accentColor}
                onClick={() => onSelect(key)}
              />
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default CategoryPage;

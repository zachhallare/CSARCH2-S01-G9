import { motion } from "framer-motion";
import AnimatedBars from "./AnimatedBars";
import { armData, x86Data } from "./data";

function ChipPins({ accentColor }: { accentColor: string }) {
  return (
    <div className="flex gap-[3px] px-6 py-2">
      {Array.from({ length: 14 }).map((_, i) => (
        <div key={i} className="flex-1 h-[2px] rounded-full" style={{ backgroundColor: `${accentColor}18` }} />
      ))}
    </div>
  );
}

function ProsCons({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (
    <div className="space-y-5">
      <div>
        <h4 className="font-semibold mb-3 flex items-center gap-2" style={{ color: "#00C2D1" }}>
          <span className="w-1 h-4 rounded-full inline-block" style={{ backgroundColor: "#00C2D1" }} />
          Pros
        </h4>
        <ul className="space-y-2">
          {pros.map((p, i) => (
            <li key={i} className="text-gray-300 flex gap-2 bg-arch-bg/40 rounded-lg p-3 border border-white/5">
              <span style={{ color: "#00C2D1" }} className="shrink-0 mt-0.5">✓</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-3 flex items-center gap-2" style={{ color: "#FF8C42" }}>
          <span className="w-1 h-4 rounded-full inline-block" style={{ backgroundColor: "#FF8C42" }} />
          Cons
        </h4>
        <ul className="space-y-2">
          {cons.map((c, i) => (
            <li key={i} className="text-gray-300 flex gap-2 bg-arch-bg/40 rounded-lg p-3 border border-white/5">
              <span style={{ color: "#FF8C42" }} className="shrink-0 mt-0.5">✗</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ComparisonTable({ data }: { data: typeof armData }) {
  return (
    <div className="overflow-hidden rounded-lg border border-white/5">
      <table className="w-full text-xs">
        <thead>
          <tr className="bg-arch-bg/60">
            <th className="text-left p-3 font-mono text-gray-300 font-medium border-b border-white/5">Attribute</th>
            <th className="text-left p-3 font-mono font-medium border-b border-white/5" style={{ color: "#00C2D1" }}>ARM</th>
            <th className="text-left p-3 font-mono font-medium border-b border-white/5" style={{ color: "#FF8C42" }}>x86</th>
          </tr>
        </thead>
        <tbody>
          {data.comparisonTable.map((row, i) => (
            <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]">
              <td className="p-3 text-gray-400 font-medium">{row.attribute}</td>
              <td className="p-3 text-gray-300">{row.arm}</td>
              <td className="p-3 text-gray-300">{row.x86}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DetailContent({ category, data }: { category: string; data: typeof armData }) {
  return (
    <div className="text-sm text-gray-300 space-y-3">
      {category === "overview" && <p className="leading-relaxed text-base">{data.overview}</p>}
      {category === "performance" && <AnimatedBars data={data.performance} />}
      {category === "useCases" && (
        <ul className="space-y-2">
          {data.useCases.map((item, i) => (
            <li key={i} className="bg-arch-bg/40 rounded-lg p-3 border border-white/5">{item}</li>
          ))}
        </ul>
      )}
      {category === "keyDevices" && (
        <div className="space-y-3">
          {data.keyDevices.map((device, i) => (
            <div key={i} className="bg-arch-bg/40 rounded-lg p-4 border border-white/5">
              <h4 className="text-white font-medium">{device.name}</h4>
              <p className="text-gray-400 text-xs mt-1">{device.description}</p>
            </div>
          ))}
        </div>
      )}
      {category === "prosAndCons" && <ProsCons pros={data.pros} cons={data.cons} />}
      {category === "comparison" && <ComparisonTable data={data} />}
    </div>
  );
}

function DetailPage({ arch, category, onBack }: { arch: "arm" | "x86"; category: string; onBack: () => void }) {
  const data = arch === "arm" ? armData : x86Data;
  const accentColor = arch === "arm" ? "#00C2D1" : "#FF8C42";

  const categoryLabel = category === "useCases" ? "Use Cases"
    : category === "keyDevices" ? "Key Devices"
    : category === "prosAndCons" ? "Pros and Cons"
    : category === "comparison" ? "Comparison Table"
    : category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -60 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="min-h-screen bg-pcb flex flex-col items-center py-10 px-4"
    >
      <div className="w-full max-w-xl">
        <button
          onClick={onBack}
          className="text-gray-500 hover:text-white transition-colors mb-6 flex items-center gap-1 text-sm font-mono tracking-wide"
        >
          ← Categories
        </button>

        <motion.div
          layout
          className="rounded-xl"
          style={{ border: `1px solid ${accentColor}25`, backgroundColor: `${accentColor}06` }}
        >
          <ChipPins accentColor={accentColor} />

          <div
            className="mx-5 rounded-xl overflow-hidden"
            style={{ backgroundColor: "#0F1117", border: `1px solid ${accentColor}12` }}
          >
            <div className="flex items-center gap-3 px-6 pt-5 pb-3">
              <div
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ backgroundColor: accentColor, opacity: 0.45 }}
              />
              <div className="w-1 h-5 rounded-full shrink-0" style={{ backgroundColor: accentColor }} />
              <span className="text-lg font-bold text-white font-mono tracking-wide">{categoryLabel}</span>
            </div>

            <div className="mx-6 mb-1 h-px" style={{ backgroundColor: `${accentColor}15` }} />

            <div className="px-6 py-4">
              <DetailContent category={category} data={data} />
            </div>
          </div>

          <ChipPins accentColor={accentColor} />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default DetailPage;

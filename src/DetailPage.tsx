import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedBars from "./AnimatedBars";
import { armData, x86Data } from "./data";

// ─── Skeleton Helpers ──────────────────────────────────────────────────────────

function SkeletonBlock({ className }: { className?: string }) {
  return <div className={`skeleton ${className ?? ""}`} />;
}

function DetailPageSkeleton() {
  return (
    <div className="w-full max-w-xl">
      {/* Back button placeholder */}
      <SkeletonBlock className="h-4 w-24 mb-6" />

      {/* Main chip card skeleton */}
      <div
        className="rounded-xl"
        style={{ border: "1px solid rgba(255,255,255,0.05)", backgroundColor: "#1A1F2B" }}
      >
        {/* Top pins */}
        <div className="flex gap-[3px] px-6 py-2">
          {Array.from({ length: 14 }).map((_, i) => (
            <div key={i} className="flex-1 h-[2px] rounded-full skeleton" />
          ))}
        </div>

        {/* Inner panel */}
        <div
          className="mx-5 rounded-xl overflow-hidden"
          style={{ backgroundColor: "#0F1117", border: "1px solid rgba(255,255,255,0.05)" }}
        >
          {/* Header row */}
          <div className="flex items-center gap-3 px-6 pt-5 pb-3">
            <SkeletonBlock className="w-2.5 h-2.5 rounded-full shrink-0" />
            <SkeletonBlock className="w-1 h-5 rounded-full shrink-0" />
            <SkeletonBlock className="h-5 w-28" />
          </div>

          {/* Divider */}
          <div className="mx-6 mb-1 h-px" style={{ backgroundColor: "rgba(255,255,255,0.05)" }} />

          {/* Content area skeleton */}
          <div className="px-6 py-4 space-y-3">
            <SkeletonBlock className="h-4 w-full" />
            <SkeletonBlock className="h-4 w-[90%]" />
            <SkeletonBlock className="h-4 w-[75%]" />
            <SkeletonBlock className="h-4 w-[80%]" />
          </div>
        </div>

        {/* Bottom pins */}
        <div className="flex gap-[3px] px-6 py-2">
          {Array.from({ length: 14 }).map((_, i) => (
            <div key={i} className="flex-1 h-[2px] rounded-full skeleton" />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Real Components ──────────────────────────────────────────────────────────

function ChipPins({ accentColor }: { accentColor: string }) {
  return (
    <div className="flex gap-[3px] px-6 py-2">
      {Array.from({ length: 14 }).map((_, i) => (
        <div key={i} className="flex-1 h-[2px] rounded-full" style={{ backgroundColor: `${accentColor}18` }} />
      ))}
    </div>
  );
}

// ─── Hoverable List Item ────────────────────────────────────────────────────────
// Used for Use Cases and Key Devices. On hover:
//   • Left border transitions from white/5 → accentColor (slides in visually
//     because the border was already there; color + width animate)
//   • Background gains a 5% accent tint
// Both changes use CSS transition via inline style.

function HoverItem({
  accentColor,
  children,
  className = "",
}: {
  accentColor: string;
  children: React.ReactNode;
  className?: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`rounded-lg transition-colors duration-250 ${className}`}
      style={{
        backgroundColor: hovered ? `${accentColor}0D` : "rgba(15,17,23,0.4)",
        borderLeft: `2px solid ${hovered ? accentColor : "rgba(255,255,255,0.07)"}`,
        borderRight: "1px solid rgba(255,255,255,0.05)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        // Ambient baked back-glow
        boxShadow: hovered ? `0 0 35px -15px ${accentColor}88` : "none",
        transition: "background-color 0.25s ease, border-left-color 0.25s ease, box-shadow 0.25s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  );
}

// ─── Pros / Cons ──────────────────────────────────────────────────────────────
// Icon pulse: on hover the ✓/✗ plays the icon-pulse keyframe (defined in
// index.css) for a 0.55 s burst. Implemented by toggling a key prop on the
// span — changing the key forces React to remount the element, which restarts
// the CSS animation cleanly every time the user enters the item.

function ProsConsItem({
  text,
  icon,
  iconColor,
  accentColor,
}: {
  text: string;
  icon: string;
  iconColor: string;
  accentColor: string;
}) {
  const [hovered, setHovered] = useState(false);
  const [pulseKey, setPulseKey] = useState(0);

  const handleEnter = () => {
    setHovered(true);
    setPulseKey((k) => k + 1); // remount icon → restarts animation
  };

  return (
    <li
      className="flex gap-2 rounded-lg p-3 relative"
      style={{
        backgroundColor: hovered ? `${accentColor}0D` : "rgba(15,17,23,0.4)",
        borderLeft: `2px solid ${hovered ? accentColor : "rgba(255,255,255,0.07)"}`,
        borderRight: "1px solid rgba(255,255,255,0.05)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        // Ambient baked back-glow
        boxShadow: hovered ? `0 0 35px -15px ${accentColor}88` : "none",
        transition: "background-color 0.25s ease, border-left-color 0.25s ease, box-shadow 0.25s ease",
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon — white-hot core + bloom, remounted on hover */}
      <span
        key={pulseKey}
        className={`shrink-0 mt-0.5 inline-block ${hovered ? "animate-icon-pulse" : ""}`}
        style={{
          // Hardware diode core: white when active, color when inactive
          color: hovered ? "#ffffff" : iconColor,
          // Intense bloom filter
          filter: hovered 
            ? `drop-shadow(0 0 3px ${iconColor}) drop-shadow(0 0 8px ${iconColor}) drop-shadow(0 0 15px ${iconColor}AA)` 
            : "none",
          transition: "filter 0.25s ease, color 0.25s ease",
        }}
      >
        {icon}
      </span>
      <span className="text-gray-300 relative z-10">{text}</span>
    </li>
  );
}

function ProsCons({ pros, cons, accentColor }: { pros: string[]; cons: string[]; accentColor: string }) {
  return (
    <div className="space-y-5">
      <div>
        <h4 className="font-semibold mb-3 flex items-center gap-2" style={{ color: "#00C2D1" }}>
          <span className="w-1 h-4 rounded-full inline-block" style={{ backgroundColor: "#00C2D1", boxShadow: `0 0 8px #00C2D1` }} />
          Pros
        </h4>
        <ul className="space-y-2">
          {pros.map((p, i) => (
            <ProsConsItem
              key={i}
              text={p}
              icon="✓"
              iconColor="#00C2D1"
              accentColor={accentColor}
            />
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-3 flex items-center gap-2" style={{ color: "#FF8C42" }}>
          <span className="w-1 h-4 rounded-full inline-block" style={{ backgroundColor: "#FF8C42", boxShadow: `0 0 8px #FF8C42` }} />
          Cons
        </h4>
        <ul className="space-y-2">
          {cons.map((c, i) => (
            <ProsConsItem
              key={i}
              text={c}
              icon="✗"
              iconColor="#FF8C42"
              accentColor={accentColor}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

// ─── Comparison Table ─────────────────────────────────────────────────────────
// Row hover:
//   • Row background → 5% accent tint
//   • Row box-shadow → Ambient back-glow
//   • Attribute cell text transitions gray-400 → white

function ComparisonTableRow({
  row,
  accentColor,
}: {
  row: { attribute: string; arm: string; x86: string };
  accentColor: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <tr
      className="border-b border-white/5 last:border-0 relative z-10"
      style={{
        backgroundColor: hovered ? `${accentColor}0D` : "transparent",
        boxShadow: hovered ? `inset 0 0 20px -10px ${accentColor}66` : "none",
        transition: "background-color 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <td
        className="p-3 font-medium"
        style={{
          color: hovered ? "#ffffff" : "#9ca3af",
          // Give the text itself a slight bloom on hover
          textShadow: hovered ? `0 0 8px ${accentColor}AA` : "none",
          transition: "color 0.2s ease, text-shadow 0.2s ease",
        }}
      >
        {row.attribute}
      </td>
      <td className="p-3 text-gray-300">{row.arm}</td>
      <td className="p-3 text-gray-300">{row.x86}</td>
    </tr>
  );
}

function ComparisonTable({ data, accentColor }: { data: typeof armData; accentColor: string }) {
  return (
    <div className="overflow-x-auto overflow-hidden rounded-lg border border-white/5">
      <table className="w-full text-xs min-w-[340px]">
        <thead>
          <tr className="bg-arch-bg/60">
            <th className="text-left p-3 font-mono text-gray-300 font-medium border-b border-white/5">Attribute</th>
            <th className="text-left p-3 font-mono font-medium border-b border-white/5" style={{ color: "#00C2D1" }}>ARM</th>
            <th className="text-left p-3 font-mono font-medium border-b border-white/5" style={{ color: "#FF8C42" }}>x86</th>
          </tr>
        </thead>
        <tbody>
          {data.comparisonTable.map((row, i) => (
            <ComparisonTableRow key={i} row={row} accentColor={accentColor} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Detail Content Router ─────────────────────────────────────────────────────

function DetailContent({
  category,
  data,
  accentColor,
}: {
  category: string;
  data: typeof armData;
  accentColor: string;
}) {
  return (
    <div className="text-sm text-gray-300 space-y-3">
      {category === "overview" && <p className="leading-relaxed text-base">{data.overview}</p>}
      {category === "performance" && <AnimatedBars data={data.performance} />}

      {category === "useCases" && (
        <ul className="space-y-2">
          {data.useCases.map((item, i) => (
            <HoverItem key={i} accentColor={accentColor} className="p-3">
              {item}
            </HoverItem>
          ))}
        </ul>
      )}

      {category === "keyDevices" && (
        <div className="space-y-3">
          {data.keyDevices.map((device, i) => (
            <HoverItem key={i} accentColor={accentColor} className="p-4">
              <h4 className="text-white font-medium">{device.name}</h4>
              <p className="text-gray-400 text-xs mt-1">{device.description}</p>
            </HoverItem>
          ))}
        </div>
      )}

      {category === "prosAndCons" && (
        <ProsCons pros={data.pros} cons={data.cons} accentColor={accentColor} />
      )}

      {category === "comparison" && (
        <ComparisonTable data={data} accentColor={accentColor} />
      )}
    </div>
  );
}

// ─── Detail Page ──────────────────────────────────────────────────────────────

function DetailPage({ arch, category, onBack }: { arch: "arm" | "x86"; category: string; onBack: () => void }) {
  const data = arch === "arm" ? armData : x86Data;
  const accentColor = arch === "arm" ? "#00C2D1" : "#FF8C42";

  const categoryLabel = category === "useCases" ? "Use Cases"
    : category === "keyDevices" ? "Key Devices"
    : category === "prosAndCons" ? "Pros and Cons"
    : category === "comparison" ? "Comparison Table"
    : category.charAt(0).toUpperCase() + category.slice(1);

  // ── Skeleton loading state ────────────────────────────────────────────────────
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 350);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -60 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="min-h-screen bg-pcb flex flex-col items-center py-10 px-4"
    >
      <AnimatePresence mode="wait">
        {!mounted ? (
          <motion.div
            key="skeleton"
            className="w-full max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <DetailPageSkeleton />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            className="w-full max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
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
                  {/* accentColor forwarded so all hover states use the correct arch colour */}
                  <DetailContent category={category} data={data} accentColor={accentColor} />
                </div>
              </div>

              <ChipPins accentColor={accentColor} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default DetailPage;

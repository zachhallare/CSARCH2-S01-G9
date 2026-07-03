import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { armData, x86Data } from "./data";

const categories = ["Overview", "Performance", "Use Cases", "Key Devices", "Pros and Cons", "Comparison Table"];

// ─── Skeleton Helpers ──────────────────────────────────────────────────────────

function SkeletonBlock({ className }: { className?: string }) {
  return <div className={`skeleton ${className ?? ""}`} />;
}

function CategoryPageSkeleton() {
  return (
    <div className="w-full max-w-2xl">
      {/* Back button placeholder */}
      <SkeletonBlock className="h-4 w-16 mb-6" />

      {/* Header card skeleton */}
      <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: "#1A1F2B", border: "1px solid rgba(255,255,255,0.05)" }}>
        <SkeletonBlock className="h-8 w-32 mb-3" />
        <SkeletonBlock className="h-3 w-56 mb-4" />
        <SkeletonBlock className="h-5 w-12 rounded" />
      </div>

      {/* 6-card grid skeleton */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.05)", backgroundColor: "#0F1117" }}
          >
            {/* Top pins */}
            <div className="flex gap-[2px] px-3 py-1">
              {Array.from({ length: 10 }).map((_, j) => (
                <div key={j} className="flex-1 h-[2px] rounded-full skeleton" />
              ))}
            </div>
            {/* Inner chip body */}
            <div className="mx-3 rounded-lg" style={{ minHeight: 70, backgroundColor: "#0F1117" }}>
              <SkeletonBlock className="mx-4 my-4 h-3 w-20 mx-auto" />
            </div>
            {/* Bottom pins */}
            <div className="flex gap-[2px] px-3 py-1">
              {Array.from({ length: 10 }).map((_, j) => (
                <div key={j} className="flex-1 h-[2px] rounded-full skeleton" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Real Components ──────────────────────────────────────────────────────────

function ChipPins({ accentColor }: { accentColor: string }) {
  return (
    <div className="flex gap-[2px] px-3 py-1">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="flex-1 h-[2px] rounded-full" style={{ backgroundColor: `${accentColor}18` }} />
      ))}
    </div>
  );
}

// ─── ChipButton with Circuit Trace + Power-On hover ───────────────────────────
//
// Hover effects:
//   1. Border trace — an SVG <rect> with stroke-dasharray equal to the card's
//      full perimeter is drawn on hover via a CSS animation on stroke-dashoffset
//      (card-trace keyframe defined in index.css). The rect is positioned
//      absolutely so it overlays the existing border without affecting layout.
//   2. Grid activation — the inner chip grid brightens from opacity 0.025 →
//      0.07 via a CSS transition on the background-image opacity.
//   3. Dot power-on — the indicator dot transitions from opacity 0.45 → 1.0
//      and gains a subtle drop-shadow glow matching the accent color.

function ChipButton({ label, accentColor, onClick }: { label: string; accentColor: string; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);

  // Instead of drawing the full perimeter, we draw a small "packet" of length 0.15 (15% of perimeter)
  // and animate it continuously around the border.
  const traceStyle: React.CSSProperties = hovered
    ? {
        strokeDasharray: "0.15 1",
        strokeDashoffset: "0",
        animation: "card-trace 2s linear infinite",
        opacity: 1,
      }
    : {
        strokeDasharray: "0.15 1",
        strokeDashoffset: "1",
        opacity: 0,
        transition: "opacity 0.3s ease",
      };

  return (
    <motion.div
      layout
      className="rounded-xl cursor-pointer transition-transform duration-200 relative"
      style={{
        border: `1px solid ${hovered ? accentColor : `${accentColor}25`}`,
        backgroundColor: `${accentColor}06`,
        transform: hovered ? "scale(1.05)" : "scale(1)",
        // Ambient baked back-glow behind the entire card when hovered
        boxShadow: hovered ? `0 0 35px -10px ${accentColor}88` : "none",
        transition: "transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
      }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Animated border trace (SVG overlay) ── */}
      {/* White-hot core + multi-layered colored bloom */}
      <svg
        className="absolute inset-0 w-full h-full rounded-xl overflow-visible pointer-events-none"
        style={{ zIndex: 2 }}
      >
        <rect
          x="0.75"
          y="0.75"
          width="calc(100% - 1.5px)"
          height="calc(100% - 1.5px)"
          rx="11"
          ry="11"
          fill="none"
          // White core when active, invisible when inactive
          stroke={hovered ? "#ffffff" : "transparent"}
          strokeWidth="1.5"
          pathLength="1"
          style={{
            // Intense hardware diode bloom
            filter: hovered ? `drop-shadow(0 0 3px ${accentColor}) drop-shadow(0 0 8px ${accentColor})` : "none",
            ...traceStyle 
          }}
        />
      </svg>

      <ChipPins accentColor={accentColor} />

      {/* ── Inner chip body — grid brightens on hover ── */}
      <div
        className="mx-3 rounded-lg overflow-hidden relative"
        style={{
          backgroundColor: "#0F1117",
          border: `1px solid ${accentColor}${hovered ? "40" : "12"}`,
          minHeight: 70,
          backgroundImage: hovered
            ? `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
               linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`
            : `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
               linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`,
          backgroundSize: "16px 16px",
          transition: "background-image 0s, border-color 0.25s ease",
        }}
      >
        <div className="flex flex-col items-center justify-center h-full px-4 py-4 relative z-10">
          {/* ── Indicator dot — hardware diode effect ── */}
          <div
            className="w-2 h-2 rounded-full mb-2 shrink-0"
            style={{
              // White core on hover
              backgroundColor: hovered ? "#ffffff" : accentColor,
              opacity: hovered ? 1 : 0.45,
              animation: hovered ? "dot-pulse 1.5s ease-in-out infinite" : "none",
              // Bloom + localized back-glow
              boxShadow: hovered 
                ? `0 0 4px 1px ${accentColor}, 0 0 12px 3px ${accentColor}` 
                : "none",
              transition: "opacity 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease",
            }}
          />
          <span
            className="text-sm font-mono font-bold tracking-wider text-center"
            style={{
              color: accentColor,
              opacity: hovered ? 1 : 0.85,
              transition: "opacity 0.25s ease",
            }}
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

  // ── Skeleton loading state ───────────────────────────────────────────────────
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
            className="w-full max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <CategoryPageSkeleton />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            className="w-full max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default CategoryPage;

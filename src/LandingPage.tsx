function ChipPin({ cx, cy, color, horizontal }: { cx: number; cy: number; color: string; horizontal: boolean }) {
  if (horizontal) {
    return <line x1={cx} y1={cy} x2={cx + 5} y2={cy} stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />;
  }
  return <line x1={cx} y1={cy} x2={cx} y2={cy + 5} stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />;
}

function CpuChip({ color, label }: { color: string; label: string }) {
  const pins = [18, 28, 38, 48, 58, 68, 78];

  return (
    <svg viewBox="0 0 100 100" width="130" height="130" className="drop-shadow-2xl">
      {pins.map((px) => (
        <g key={`t${px}`}>
          <ChipPin cx={px} cy={6} color={color} horizontal={false} />
          <ChipPin cx={px} cy={88} color={color} horizontal={false} />
          <ChipPin cx={6} cy={px} color={color} horizontal={true} />
          <ChipPin cx={88} cy={px} color={color} horizontal={true} />
        </g>
      ))}

      <rect x="10" y="10" width="80" height="80" rx="6" fill="#1A1F2B" stroke={color} strokeWidth="1.5" opacity="0.92" />
      <circle cx="16" cy="16" r="3" fill={color} opacity="0.35" />

      <rect x="20" y="20" width="60" height="60" rx="3" fill="#0F1117" stroke={color} strokeWidth="0.5" opacity="0.5" />

      {[33, 46, 59].map((v) => (
        <g key={`grid-${v}`}>
          <line x1={v} y1="20" x2={v} y2="80" stroke={color} strokeWidth="0.4" opacity="0.12" />
          <line x1="20" y1={v} x2="80" y2={v} stroke={color} strokeWidth="0.4" opacity="0.12" />
        </g>
      ))}

      <rect x="30" y="40" width="40" height="22" rx="3" fill={color} opacity="0.1" />
      <text x="50" y="55" textAnchor="middle" fill={color} fontFamily="JetBrains Mono, monospace" fontWeight="700" fontSize="14" letterSpacing="2">
        {label}
      </text>
    </svg>
  );
}

function VsBadge() {
  return (
    <div className="relative flex items-center justify-center w-16 h-16 shrink-0">
      <div className="absolute inset-0 rounded-full border border-white/15 animate-pulse-glow" />
      <div className="absolute inset-2 rounded-full bg-arch-panel flex items-center justify-center border border-white/10">
        <span className="font-mono text-xs font-bold text-white/70">VS</span>
      </div>
    </div>
  );
}

function CircuitLine({ side, width, color, delay }: { side: "left" | "right"; width: number; color: string; delay: number }) {
  const x1 = side === "left" ? 0 : width;
  const x2 = side === "left" ? width - 40 : 40;

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
      <line
        x1={x1} y1="50" x2={x2} y2="50"
        stroke={color} strokeWidth="1" opacity="0.25"
        strokeDasharray="6 6"
        className="animate-circuit"
      />
      <line
        x1={x1} y1="51" x2={x2} y2="51"
        stroke={color} strokeWidth="0.5" opacity="0.1"
        strokeDasharray="3 8"
        className="animate-circuit"
        style={{ animationDelay: `${delay}s` }}
      />
    </svg>
  );
}

function LandingPage({ onSelect }: { onSelect: (arch: "arm" | "x86") => void }) {
  return (
    <div className="min-h-screen bg-pcb flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div className="text-center mb-10">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-3">
          ARM <span className="text-white/30 mx-2 font-light">vs</span> x86
        </h1>
        <p className="text-gray-500 text-base md:text-lg max-w-2xl font-light tracking-wide">
          Computer Architecture Comparison — Interactive Engineering Analysis
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 relative">
        <div className="relative" onClick={() => onSelect("arm")}>
          <div className="cursor-pointer hover:scale-105 transition-transform duration-300 flex flex-col items-center gap-3 group">
            <CpuChip color="#00C2D1" label="ARM" />
            <div className="flex flex-col items-center">
              <span className="text-sm font-mono text-arm tracking-widest">ARM</span>
              <span className="text-[10px] text-gray-500 font-mono mt-1 uppercase tracking-wider">RISC · Power Efficient</span>
            </div>
            <div className="w-24 h-[2px] bg-arm/20 rounded-full group-hover:bg-arm/40 transition-colors" />
          </div>
        </div>

        <div className="flex items-center justify-center relative">
          <CircuitLine side="left" width={100} color="#00C2D1" delay={0} />
          <CircuitLine side="right" width={100} color="#FF8C42" delay={0.15} />
          <VsBadge />
        </div>

        <div className="relative" onClick={() => onSelect("x86")}>
          <div className="cursor-pointer hover:scale-105 transition-transform duration-300 flex flex-col items-center gap-3 group">
            <CpuChip color="#FF8C42" label="x86" />
            <div className="flex flex-col items-center">
              <span className="text-sm font-mono text-x86 tracking-widest">x86</span>
              <span className="text-[10px] text-gray-500 font-mono mt-1 uppercase tracking-wider">CISC · High Performance</span>
            </div>
            <div className="w-24 h-[2px] bg-x86/20 rounded-full group-hover:bg-x86/40 transition-colors" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

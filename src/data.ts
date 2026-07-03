export interface ComparisonRow {
  attribute: string;
  arm: string;
  x86: string;
}

export interface ArchitectureData {
  name: string;
  tagline: string;
  gradientFrom: string;
  gradientTo: string;
  isa: string;
  overview: string;
  performance: { metric: string; arm: number; x86: number }[];
  useCases: string[];
  keyDevices: { name: string; description: string }[];
  pros: string[];
  cons: string[];
  comparisonTable: ComparisonRow[];
}

const comparisonTable: ComparisonRow[] = [
  { attribute: "ISA Type", arm: "RISC (Reduced Instruction Set)", x86: "CISC (Complex Instruction Set)" },
  { attribute: "Instruction Length", arm: "Fixed (32-bit)", x86: "Variable (1–15 bytes)" },
  { attribute: "Power Efficiency", arm: "Excellent — 5–15W typical", x86: "Moderate — 15–250W typical" },
  { attribute: "Peak Performance", arm: "Moderate — optimized for throughput", x86: "High — optimized for single-thread" },
  { attribute: "Market Dominance", arm: "Mobile, Embedded, IoT", x86: "Desktop, Server, HPC" },
  { attribute: "Licensing Model", arm: "Architecture license (any fab)", x86: "Proprietary (Intel/AMD only)" },
  { attribute: "Design Philosophy", arm: "Energy efficiency per watt", x86: "Raw performance first" },
  { attribute: "Software Ecosystem", arm: "Growing (macOS, Linux, Windows ARM)", x86: "Mature, vast legacy support" },
  { attribute: "Manufacturing Cost", arm: "Lower (simpler cores, smaller die)", x86: "Higher (complex decode, larger die)" },
  { attribute: "Common Use Case", arm: "Smartphones, tablets, SBCs, IoT", x86: "PCs, workstations, servers, gaming" },
];

export const armData: ArchitectureData = {
  name: "ARM",
  tagline: "RISC · Power Efficient · Mobile-First",
  gradientFrom: "from-arm",
  gradientTo: "to-cyan-500",
  isa: "RISC",
  overview:
    "ARM (Advanced RISC Machines) is a RISC (Reduced Instruction Set Computer) architecture known for its power efficiency and simplicity. Developed by Arm Holdings, it uses a load-store architecture with a uniform instruction length, making it ideal for mobile and embedded devices. ARM licenses its designs to other manufacturers rather than fabricating chips itself.",
  performance: [
    { metric: "Instructions Per Clock", arm: 85, x86: 100 },
    { metric: "Power Efficiency", arm: 100, x86: 60 },
    { metric: "Thermal Efficiency", arm: 95, x86: 55 },
    { metric: "Cost per Chip", arm: 90, x86: 70 },
    { metric: "Mobile Optimization", arm: 100, x86: 40 },
  ],
  useCases: [
    "Smartphones and tablets (Apple A/M series, Qualcomm Snapdragon, Samsung Exynos)",
    "Embedded systems and IoT devices",
    "Single-board computers (Raspberry Pi, NVIDIA Jetson)",
    "Apple Silicon Macs (M1, M2, M3, M4 series)",
    "Wearable technology and smart home devices",
  ],
  keyDevices: [
    { name: "Apple iPhone 15 Pro", description: "A17 Pro chip with 6-core CPU and 6-core GPU" },
    { name: "Raspberry Pi 5", description: "Broadcom BCM2712 quad-core ARM Cortex-A76" },
    { name: "Apple MacBook Air M3", description: "M3 chip with 8-core CPU and 10-core GPU" },
    { name: "Samsung Galaxy S24", description: "Exynos 2400 / Snapdragon 8 Gen 3" },
    { name: "AWS Graviton 3", description: "Cloud servers using ARM-based processors" },
  ],
  pros: [
    "Superior power efficiency — longer battery life and less heat",
    "Lower manufacturing costs and licensing flexibility",
    "Excellent for mobile, embedded, and IoT applications",
    "Growing ecosystem with Apple Silicon and server adoption",
    "Simpler design reduces silicon area and complexity",
  ],
  cons: [
    "Less raw performance in high-end desktop and server workloads",
    "Smaller software ecosystem compared to x86 (legacy compatibility)",
    "Fragmented vendor implementations (no unified standard)",
    "Historically weaker single-threaded performance",
    "Transition challenges for x86-native software ecosystems",
  ],
  comparisonTable,
};

export const x86Data: ArchitectureData = {
  name: "x86",
  tagline: "CISC · High Performance · Desktop Dominant",
  gradientFrom: "from-x86",
  gradientTo: "to-amber-500",
  isa: "CISC",
  overview:
    "x86 is a CISC (Complex Instruction Set Computer) architecture developed by Intel and AMD. It features variable-length instructions and a rich instruction set that allows complex operations to be executed in single instructions. x86 has dominated desktop, laptop, and server markets for decades due to its backward compatibility and high single-threaded performance.",
  performance: [
    { metric: "Instructions Per Clock", arm: 85, x86: 100 },
    { metric: "Power Efficiency", arm: 100, x86: 60 },
    { metric: "Thermal Efficiency", arm: 95, x86: 55 },
    { metric: "Cost per Chip", arm: 90, x86: 70 },
    { metric: "Mobile Optimization", arm: 100, x86: 40 },
  ],
  useCases: [
    "Desktop and laptop computers (Windows, Linux, macOS Intel)",
    "Enterprise servers and data centers",
    "High-performance computing (HPC) and workstations",
    "Gaming PCs and consoles (Xbox, PlayStation use x86 AMD APUs)",
    "Legacy enterprise software and virtualization hosts",
  ],
  keyDevices: [
    { name: "Intel Core i9-14900K", description: "24-core (8P+16E) desktop processor" },
    { name: "AMD Ryzen 9 7950X", description: "16-core / 32-thread enthusiast CPU" },
    { name: "Mac Pro (Intel)", description: "Intel Xeon W workstation processors" },
    { name: "Xbox Series X", description: "Custom AMD Zen 2 8-core CPU" },
    { name: "Dell PowerEdge R750", description: "Enterprise server with Intel Xeon Scalable" },
  ],
  pros: [
    "Highest single-threaded and multi-threaded performance available",
    "Vast software and legacy application compatibility",
    "Dominant in desktop, gaming, and data center markets",
    "Mature ecosystem with extensive tooling and support",
    "Backward compatibility spanning decades of software",
  ],
  cons: [
    "Higher power consumption and heat generation",
    "More complex chip design increases manufacturing costs",
    "Less suitable for battery-powered and mobile devices",
    "CISC complexity leads to larger die area",
    "Faces growing competition from ARM in servers and laptops",
  ],
  comparisonTable,
};

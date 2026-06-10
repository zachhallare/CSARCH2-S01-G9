# Computer Architecture Virtual Exhibit 2026: "Computer Architecture are Forever"

**GitHub Repository:** [https://github.com/zachhallare/CSARCH2-S01-G9](https://github.com/zachhallare/CSARCH2-S01-G9)

## ARM vs x86: Interactive Architecture Explorer

**Group 9**
* **Co, Adrian**
* **Hallare, Zach**
* **Javier, David**
* **Lee, Tyrone**
* **Tiu, Kyle**

---

## Topic Theme: ARM vs x86 Comparison

At the core of any computer system lies the Instruction Set Architecture (ISA), the critical bridge between software programs and the hardware that executes them. It is important to distinguish the ISA from general processor microarchitecture (the physical evolution and layout of the chip). Rather than dealing with physical silicon, the ISA defines the abstract programmer's model of the machine. It explicitly dictates the **assembly language**, the available **registers**, the **memory** addressing modes, and the overarching structural design.

The purpose of this virtual exhibit is to provide an in-depth exploration of the ISA by comparing and contrasting its two most widely used philosophies: **ARM (Reduced Instruction Set Computer - RISC)** and **x86 (Complex Instruction Set Computer - CISC)**. 

By evaluating how ARM's simplified, register-heavy approach compares to x86's complex, memory-centric instructions, this project aims to provide an informative experience. Users will gain a deeper understanding of how an ISA operates at the assembly and memory levels, and why choosing between RISC and CISC architectures remains a fundamental consideration in modern computer system design.

---

## Tech Stack Plan

Our exhibit will be built using a modern, interactive web stack designed for smooth animations and component-based architecture:

* **React.js:** Serves as the primary framework for this project. React's component-based architecture makes the creation of graphical elements—and the implementation of their individual characteristics and behaviors—highly efficient.
* **Vite:** Used as the development environment due to its lightning-fast setup and efficient compilation. Its hot-module replacement (HMR) allows code changes to reflect in real-time, streamlining the testing and development stages.
* **Framer Motion:** Handles the complex animations within the exhibit. Its vast library of animation presets integrates perfectly with React to create smooth, app-like transitions between cards.
* **CSS:** Utilized for custom styling, layout management, and ensuring cross-device compatibility.

---

## Proposed Interactive Element

### The Clickable Card Explorer
The core of the exhibit will feature a side-by-side **Clickable Card Explorer** that allows users to interactively compare the ARM and x86 architectures. 

1. **Initial View:** Two main cards are displayed simultaneously, each representing one architecture (ARM and x86). This side-by-side layout immediately frames the exhibit as a comparison, setting the user's expectation before any interaction begins.
2. **Expansion Mechanics:** Upon clicking a main card, it expands to reveal a row of five smaller inner cards beneath it. Each inner card represents a specific category of information:
   * **Overview:** The design philosophy behind each architecture (RISC vs. CISC, registers, and assembly approach).
   * **Performance:** Efficiency, power consumption, and instruction execution speed.
   * **Use Cases:** Industries and environments where each architecture thrives.
   * **Key Devices:** Real-world products powered by each architecture.
   * **Pros and Cons:** The specific trade-offs of choosing one over the other.
3. **Flipping/Revealing Content:** Each inner card is initially shown in a closed state, displaying only its category label. Clicking an inner card flips or expands it to reveal the full content. This layered structure mirrors a physical museum exhibit, allowing visitors to choose what to engage with rather than being overwhelmed with text.
4. **Independent Interaction:** Both main cards are independently interactive. A user can have the ARM card fully expanded while the x86 card remains closed, supporting different, self-paced learning approaches within the same interface.

### Mobile-Responsive Layout
The component is fully mobile-responsive. On smaller screens (smartphones and tablets), the side-by-side main cards will dynamically stack vertically. The inner detail cards will adjust into a compact grid layout to remain highly readable without requiring horizontal scrolling.

---

## Tentative Style Guide Snapshot

The visual design of the exhibit utilizes a modern, sleek aesthetic fitting for a deep dive into computer architecture. Cards will feature intuitive navigation (left/right arrows) and expanding animations to handle large amounts of text smoothly.

**View the full interactive design layout and style guide here:** 🔗 [Canva Prototype Link](https://canva.link/hpok85xmm3n5rga)

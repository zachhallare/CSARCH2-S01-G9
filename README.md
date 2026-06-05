# Computer Architecture Virtual Exhibit 2026: "Computer Architecture are Forever"

## ARM vs x86: Interactive Architecture Explorer

**Group 9**
* **Co, Adrian**
* **Hallare, Zach**
* **Javier, David**
* **Lee, Tyrone**
* **Tiu, Kyle**

---

## Topic Theme: ARM vs x86 Comparison

When discussing important aspects of a computer system, many individuals tend to think about things like the central processing unit (CPU), motherboard, and random access memory (RAM). While these components are crucial, they often overshadow the many other elements that can be just as, if not more, vital to maintaining a computer’s functionality. 

One of these overlooked factors is the **Instruction Set Architecture (ISA)**. The ISA defines various attributes—such as the allowed instructions and data types—that affect the logic behind a program’s execution. Without this abstract model, computers would essentially be worthless, as programs would cease to function without a standardized way to execute instructions. 

The purpose of this virtual exhibit is to provide an in-depth exploration of the responsibilities that fall under the ISA by comparing and contrasting its two most widely used variations: **ARM** and **x86**. By evaluating the benefits, drawbacks, and specific use cases of each ISA, this exhibit will provide an informative and insightful experience that offers a deeper understanding of how an ISA operates and why it is a critical consideration in modern computer system design.

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
   * **Overview:** The design philosophy behind each architecture (RISC vs. CISC).
   * **Performance:** Efficiency, power consumption, and speed characteristics.
   * **Use Cases:** Industries and environments where each architecture thrives.
   * **Key Devices:** Real-world products powered by each architecture.
   * **Pros and Cons:** The specific trade-offs of choosing one over the other.
3. **Flipping/Revealing Content:** Each inner card is initially shown in a closed state, displaying only its category label. Clicking an inner card flips or expands it to reveal the full content. This layered structure mirrors a physical museum exhibit, allowing visitors to choose what to engage with rather than being overwhelmed with text.
4. **Independent Interaction:** Both main cards are independently interactive. A user can have the ARM card fully expanded while the x86 card remains closed, supporting different, self-paced learning approaches within the same interface.

### Mobile-Responsive Layout
The component is fully mobile-responsive. On smaller screens (smartphones and tablets), the side-by-side main cards will dynamically stack vertically. The inner detail cards will adjust into a compact grid layout to remain highly readable without requiring horizontal scrolling.

---

## Tentative Style Guide Snapshot

The visual design of the exhibit utilizes a modern, sleek aesthetic fitting for a deep dive into computer architecture. 

* **Color Palette:** Deep purple backgrounds (`#1A0B2E` or similar) paired with bright, neon-white text to create a high-contrast, futuristic feel.
* **Typography:** Bold, sans-serif fonts for headers to emulate a tech-focused environment, paired with clean serif or readable sans-serif fonts for body text.
* **UI Elements:** Cards feature subtle glowing borders, rounded corners, and soft drop shadows to emphasize interactivity. Navigation utilizes intuitive left/right arrow icons.

**View the full interactive design mockup
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

When discussing important aspects of a computer system, many individuals tend to think about things like the **central processing unit (CPU)**, **motherboard**, and **random access memory (RAM)**. While these components are crucial, they often overshadow the many other elements that can be just as, if not more, vital to maintaining a computer's functionality. One of these overlooked factors is the computer's **architecture**, which defines the various attributes, such as the **representation of data types** and the **handling of memory**, that dictate how a computer operates at the fundamental level. Without the presence of this structure, computers would essentially be useless as they would not know how to interpret the data provided to them, preventing them from executing any programs.

As such, the purpose of this project is to provide an in-depth exploration of the importance of selecting a suitable computer architecture by comparing and contrasting the two most widely used variations: **ARM** and **x86**. By evaluating the different benefits, drawbacks, and use cases that each architecture has, the group expects to provide an informative and insightful experience that not only offers a deeper understanding of **computer design**, but also why it is such a necessary consideration when deciding on the system that is best suited for one's purposes.

---

## Tech Stack Plan

Our exhibit will be built using a modern, interactive web stack designed for smooth animations and component-based architecture:

* **React.js:** Serves as the primary framework for this project. This is to leverage its component-based architecture and make the creation of graphical elements, as well as the implementation of their individual characteristics and behavior, much easier.
* **Vite:** Used as the development environment due to its very fast setup and efficient compilation. Additionally, its ability to easily set up a local server and reflect code changes in real time would be useful during the testing stage of development.
* **Framer Motion and CSS:** Handles the animations and styling of the elements in the project. Aside from their compatibility with React, the former has a vast library of animation presets that are applicable and could easily be implemented in the project.

---

## Proposed Interactive Element

The exhibit will feature a side-by-side **Clickable Card Explorer** that allows users to interactively compare the ARM and x86 architectures. Two main cards will be displayed on screen simultaneously, each representing one architecture. This side-by-side layout immediately frames the exhibit as a comparison, setting the user's expectation before any interaction begins.

Upon clicking a main card, it expands to reveal a row of five smaller inner cards beneath it, each representing a specific category of information:

* **Overview:** the design philosophy behind each architecture
* **Performance:** efficiency and speed characteristics
* **Use Cases:** industries and devices in which each architecture is commonly found
* **Key Devices:** real-world products that use each architecture
* **Pros and Cons:** trade-offs between the two

Each inner card is initially shown in a closed state, displaying only its 
category label. Clicking an inner card flips or expands it to reveal the full 
content for that category. The **Performance** category further features 
**animated comparison bars** that fill dynamically upon reveal, visually 
representing the speed and efficiency differences between the two architectures. 
This layered structure, where a main card leads to inner cards which then lead 
to content, mirrors the experience of browsing a physical museum exhibit, where 
a visitor chooses what to engage with rather than being presented with 
everything at once.

Both main cards are **independently interactive**, meaning a user can have the ARM card fully expanded while the x86 card remains closed. This freedom of navigation is intentional, as it supports different learning approaches within the same interface.

The component is fully **mobile-responsive**. On smaller screens, the two main cards stack vertically, and the inner cards adjust to a compact grid layout to remain readable without horizontal scrolling.


---

## Tentative Style Guide Snapshot

The visual design of the exhibit utilizes a modern, sleek aesthetic fitting for a deep dive into computer architecture. Cards will feature intuitive navigation (left/right arrows) and expanding animations to handle large amounts of text smoothly.

**View the full interactive design layout and style guide here:** [Canva Snapshot Prototype Link](https://canva.link/hpok85xmm3n5rga)

---

## Proposal with Highlighted Revisions

The highlighted revisions and their corresponding comments can be viewed in the 
Google Docs link below:

[View Highlighted Revisions on Google Docs](https://docs.google.com/document/d/1aFv7ZEC7oXG_M5LDeyJp128cibDaMuXKnh5ud8JuTIg)


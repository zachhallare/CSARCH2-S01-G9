import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LandingPage from "./LandingPage";
import CategoryPage from "./CategoryPage";
import DetailPage from "./DetailPage";

type View = { type: "landing" } | { type: "categories"; arch: "arm" | "x86" } | { type: "detail"; arch: "arm" | "x86"; category: string };

function App() {
  const [view, setView] = useState<View>({ type: "landing" });

  return (
    <AnimatePresence mode="wait">
      {view.type === "landing" && (
        <LandingPage key="landing" onSelect={(arch) => setView({ type: "categories", arch })} />
      )}
      {view.type === "categories" && (
        <CategoryPage
          key={`cat-${view.arch}`}
          arch={view.arch}
          onBack={() => setView({ type: "landing" })}
          onSelect={(category) => setView({ type: "detail", arch: view.arch, category })}
        />
      )}
      {view.type === "detail" && (
        <DetailPage
          key={`det-${view.arch}-${view.category}`}
          arch={view.arch}
          category={view.category}
          onBack={() => setView({ type: "categories", arch: view.arch })}
        />
      )}
    </AnimatePresence>
  );
}

export default App;

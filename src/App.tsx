import "./App.css";
import Card from "./Card.tsx";
function App() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="grid grid-cols-3 gap-4">
        <Card content="shi" />
        <Card content="" />
        <Card content="" />
        <Card content="" />
        <Card content="" />
        <Card content="" />
      </div>
    </div>
  );
}

export default App;

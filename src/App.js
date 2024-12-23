import AnimatedText from "./components/AnimatedText/AnimatedText";
import Menu from "./components/Menu/Menu";

function App() {
  const words = ["world!", "bob!", "users!", "everybody!"];
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <AnimatedText words={words} interval={3000} />
      <Menu />
    </div>
  );
}

export default App;

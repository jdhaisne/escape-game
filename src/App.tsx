import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import { EHeader } from "./components/EHeader";
import { EFooter } from "./components/EFooter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <EHeader></EHeader>

      <EFooter></EFooter>
    </>
  );
}

export default App;

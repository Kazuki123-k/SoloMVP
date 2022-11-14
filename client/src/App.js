import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header.js";
import Healthy from "./components/Healthy.js";
import Unhealthy from "./components/Unhealthy.js";

function App() {
  const [unhealthyOption, setUnhealthyOption] = useState("");

  return (
    <div className="App">
      <Header />
      <Unhealthy />
      <Healthy />
    </div>
  );
}

export default App;

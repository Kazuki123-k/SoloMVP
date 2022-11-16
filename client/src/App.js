import { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import Landing from "./components/Landing.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [unhealthyOption, setUnhealthyOption] = useState("");

  return (
    <div className="App">
      <main>
        <Router>
          <Routes>
            <Route path={"/"} element={<Landing />} />
            <Route path={"/home"} element={<Home />} />
            <Route path={"/List"} element={<List />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;

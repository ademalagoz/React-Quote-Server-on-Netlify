import "./App.css";
import React, { useState } from "react";
import Quotes from "./Quotes.js";
import Button from "./Button";

function App() {
  const [click, setClick] = useState(false);
  return (
    <div className="App">
      <Quotes click={click} />
      <Button setClick={setClick} />
    </div>
  );
}

export default App;

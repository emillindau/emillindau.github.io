import React from "react";
import "./App.css";
import { useCountdown } from "./use-countdown";

function App() {
  const { timeLeft } = useCountdown(1593788400000);

  return (
    <div>
      <header>
        <h1>Emil & Matildas semester countdown</h1>
      </header>
      <div className="countdown">
        <h2 className="xlarge">{timeLeft}</h2>
      </div>
    </div>
  );
}

export default App;

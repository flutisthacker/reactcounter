import React from "react";
import "./styles.css";
import Counter from "./Counter.js";

export default function App() {
  return (
    <div className="App">
      <div className="numbers">
        <Counter number={105} title={"Posts"} />
        <Counter number={5425} title={"Following"} />
        <Counter number={105} title={"Followers"} />
      </div>
    </div>
  );
}

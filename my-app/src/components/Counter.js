import { useState } from "react";

function Counter() {
  let [counter, setCounter] = useState(0);
  function handleAdd() {
    setCounter(counter + 1);
    console.log(counter);
  }
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleAdd} style={{ background: "red", color: "white" }}>
        Add
      </button>
    </div>
  );
}

export default Counter;

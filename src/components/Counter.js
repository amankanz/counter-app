import { useState } from "react";
import Button from "./Button";

function Counter() {
  const [curValue, setCurValue] = useState(0);
  // const [decrement, setDecrement] = useState(0);
  function handleIncrement() {
    setCurValue((c) => c + 1);
  }

  function handleDecrement() {
    if (curValue === 0) return;
    setCurValue((c) => c - 1);
  }

  return (
    <section>
      <p>{curValue}</p>
      <Button onClick={handleIncrement}>➕</Button>
      <Button onClick={handleDecrement}>➖</Button>
    </section>
  );
}

export default Counter;

import { useState } from "react";
import "./Button.css";
export default function Button({ children, onTap, onClick }) {
  const [toggler, setToggler] = useState(false);
  function handleClicker() {
    if (toggler) {
      onTap();
    } else {
      onClick();
    }
    setToggler(!toggler);
  }
  return (
    <button onClick={handleClicker}>
      {children} {toggler ? "⏸️" : "⏯️"}
    </button>
  );
}

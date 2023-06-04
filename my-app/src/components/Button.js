import "./Button.css";

export default function Button({ children, onTap }) {
  function handleClicker() {
    onTap();
  }
  return <button onClick={handleClicker}>{children}</button>;
}

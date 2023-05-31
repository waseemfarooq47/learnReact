import "./App.css";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="container">
      <Cards cardTitle="Solo Squad Win" Likes="999K" Duration="3 Months" />
      <Cards cardTitle="Battle Field" Likes="99K" Duration="1 Months" />
      <Cards cardTitle="PUBG" Likes="1 M" Duration="20 Months" />
    </div>
  );
}

export default App;

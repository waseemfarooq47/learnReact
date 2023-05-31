import "./App.css";
import Cards from "./components/Cards";
import data from "./sample-data/data";
function App() {
  return (
    <div className="container">
      {data.map((cards) => (
        <Cards
          cardTitle={cards.cardTitle}
          Likes={cards.Likes}
          Duration={cards.Duration}
          Thumbnail={cards.Thumbnail}
          Verify={cards.Verify}
        />
      ))}

      {/* <Cards cardTitle="Battle Field" Likes="99K" Duration="1 Months" />
      <Cards cardTitle="PUBG" Likes="1 M" Duration="20 Months" /> */}
    </div>
  );
}

export default App;

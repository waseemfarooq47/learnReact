import "./App.css";
import Cards from "./components/Cards";
import data from "./sample-data/data";
import Button from "./components/Button";
function App() {
  return (
    <>
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

        <Button onTap={() => console.log("hello i am On")}>On</Button>
        <Button onTap={() => alert("hi i am off")}>Off</Button>
      </div>
    </>
  );
}

export default App;

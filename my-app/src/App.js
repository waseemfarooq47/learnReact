import "./App.css";
import Cards from "./components/Cards";
import data from "./sample-data/data";
import Counter from "./components/Counter";
import Button from "./components/Button";
// import Assignment from "./assignment-work/assignment";
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
          >
            <Button
              onTap={() => console.log("Playing...")}
              onClick={() => console.log("Paused")}
            >
              {cards.cardTitle}
            </Button>
          </Cards>
        ))}
      </div>
      {true && (
        <div className="assignment">
          {/* <Assignment /> */}
          <Counter />
        </div>
      )}
    </>
  );
}

export default App;

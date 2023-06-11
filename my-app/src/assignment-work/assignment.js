import "./assignment.css";
export default function assignment() {
  function handleOver() {
    let imgg = document.getElementById("my-pic");
    imgg.style.height = "500px";
    imgg.style.width = "500px";
  }
  function handleOut() {
    let imgg = document.getElementById("my-pic");
    imgg.style.height = "300px";
    imgg.style.width = "300px";
  }

  function handleDoubleClick() {
    console.log("Doubled Clicked");
  }
  function handleClick() {
    alert("Clicked Once");
  }
  return (
    <div className="assign-wrapper">
      <button onClick={handleClick} onDoubleClick={handleDoubleClick}>
        Click
      </button>
      <img
        src="https://indiater.com/wp-content/uploads/2021/06/free-fortnite-game-thumbnail-banner-design-psd-template.jpg"
        alt="123"
        onMouseOver={handleOver}
        onMouseOut={handleOut}
        id="my-pic"
      />
    </div>
  );
}

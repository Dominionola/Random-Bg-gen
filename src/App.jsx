import { useState } from "react";

function App() {
  const [color, setColor] = useState("#000000");
  const [black, setBlack] = useState(true);

  const randomColor = () => {
    const characters = "0123456789abcdef";
    let value = "#";
    for (let i = 0; i < 6; i++) {
      value += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setColor(value);
    console.log(value);
  };

  const blackOrWhite = black ? "Black" : "White";

  let textColor = color === "#000000" ? "#ffffff" : "#000000";
  function handleClick() {
    setBlack((prev) => !prev);
  }

  return (
    <div style={{ backgroundColor: color, minHeight: "100vh" }}>
      <>
        <h1 style={{ color: textColor }}> Background Color :{color} </h1>
        <button onClick={randomColor}>Change Color</button>
        <button style={{ backgroundColor: blackOrWhite }} onClick={handleClick}>
          This is {blackOrWhite}
        </button>
      </>
    </div>
  );
}

export default App;

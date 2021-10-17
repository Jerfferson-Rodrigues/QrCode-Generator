import "./App.css";
import { useState } from "react";
import QrCanvas from "./QrCanvas";

function App() {
  const [text, setText] = useState("");
  return (
    <div className="App">
      <input
        onChange={(element) => setText(element.target.value)}
        value={text}
        placeholder={"Digite Aqui....✍️"}
      ></input>

      <QrCanvas text={text}></QrCanvas>
    </div>
  );
}

export default App;

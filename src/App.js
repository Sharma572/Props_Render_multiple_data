import "./styles.css";
import React, { useState } from "react";
import Props_file from "/Props_file";
export default function App() {
  const [Song, setData] = useState("Wanna Know my favourite song");
  return (
    <div className="App">
      <h1>My favourite Singer</h1>
      <h2>"Music is the shorthand of emotion."</h2>
      <Props_file name="Arijit Singh " reason={"Romantic"} Song={Song} />

      <h4 style={{ color: "darkred" }}>{Song}</h4>
      <button
        onClick={() => {
          setData("Shayad by Arijit Sing and Tere Bina Zindagi Se by Lata Ji");
        }}
      >
        favourite song
      </button>
    </div>
  );
}

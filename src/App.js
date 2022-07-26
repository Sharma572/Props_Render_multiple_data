import "./styles.css";
import React from "react";
import Props_file from "/Props_file";
export default function App() {
  return (
    <div className="App">
      <h1>My favourite Singer</h1>
      <h2>"Music is the shorthand of emotion."</h2>
      <Props_file name="Arijit Singh " reason="Romantic" />
      <Props_file name="Lata Mangeshkar" reason="Melodious" />
    </div>
  );
}

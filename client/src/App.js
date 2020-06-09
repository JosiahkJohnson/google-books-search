import React, { Component } from "react";
import "./App.css";
import api from "./api";

function App() {
  return (
    <div className="App">
      <button onClick = {searchTitle}>testAPI</button>
    </div>
  );
}

function searchTitle() {
  const query = "gonewithwind";

  api.byTitle(query).then(response => {
    console.log(response);
  }).catch(error => {
    console.log(error);
  });
};

export default App;

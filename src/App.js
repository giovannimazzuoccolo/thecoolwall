import React, { Component } from "react";
import "./App.css";
import Header from "./header/header";
import DraggableArea from "./draggableArea/draggableArea";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <DraggableArea />
      </div>
    );
  }
}

export default App;

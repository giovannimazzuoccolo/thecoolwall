import React, { Component } from "react";
import "./App.css";
import Header from "./header/header";
import DraggableArea from "./draggableArea/draggableArea";
import Footer from "./footer/footer";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <DraggableArea />
        <Footer lives={3} points={0} />
      </div>
    );
  }
}

export default App;

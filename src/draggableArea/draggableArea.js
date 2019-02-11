import React, { useState } from "react";
import "./draggableArea.css";
import { BOARDS } from "../enums/boards";
import cars from "../dataset/car.json";
import Car from "../car/car";
import classNames from "classnames";

export default function DraggableArea() {
  const [indexCar, updateIndexCar] = useState(0);

  const updatingCar = board => {
    console.log(board);
    if (cars[indexCar].board === board) {
      alert("correct!");
      updateIndexCar(indexCar + 1);
    } else {
    }
  };

  const allowDrop = event => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <div className="draggableArea">
        <div
          className={classNames([BOARDS.SERIOUSLY_UNCOOL, "board"])}
          onDrop={() => updatingCar(BOARDS.SERIOUSLY_UNCOOL)}
          onDragOver={event => allowDrop(event)}
        />
        <div
          className={BOARDS.UNCOOL + " board"}
          onDrop={() => updatingCar(BOARDS.UNCOOL)}
          onDragOver={event => allowDrop(event)}
        />
        <div
          className={BOARDS.COOL + " board"}
          onDrop={() => updatingCar(BOARDS.COOL)}
          onDragOver={event => allowDrop(event)}
        />
        <div
          className={BOARDS.SUBZERO + " board"}
          onDrop={() => updatingCar(BOARDS.SUBZERO)}
          onDragOver={event => allowDrop(event)}
        />
        <Car model={cars[indexCar].model} image={cars[indexCar].image} />
      </div>
    </React.Fragment>
  );
}

import React from "react";
import classNames from "classnames";
import  { Droppable } from "react-beautiful-dnd"; 
export default function Column(props) {
  return <div className={classNames([props.columnId, "board"])} {...props} />;
}

import React from "react";
import classNames from "classnames";

export default function Column(props) {
  return <div className={classNames([props.columnId, "board"])} {...props} />;
}

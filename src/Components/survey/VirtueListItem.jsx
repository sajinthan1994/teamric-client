import React from "react";

import Draggable from "./Draggable";

import "../styles/virtue-list-item.scss";

const VirtueListItem = (props) => {
  return (
    <Draggable id={props.id.toString()}>
      <article className="virtue_container">{props.name}</article>
    </Draggable>
  );
};

export default VirtueListItem;
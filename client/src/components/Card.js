import React from "react";

export default (props) => {
  return (
    <div class="row">
      <div class="card deep-purple lighten-5">
        <div class="card-content">
          <span class="card-title">{props.title}</span>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
};

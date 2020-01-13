import React from "react";

const AdoptModelContent = props => (
  <React.Fragment>
    <h1>Would you like to adopt {props.name}?</h1>
    <div className="buttons">
      <button onClick={props.toggleModal}>Yes</button>
      <button onClick={props.toggleModal}>Definetly Yes</button>
    </div>
  </React.Fragment>
);

export default AdoptModelContent;

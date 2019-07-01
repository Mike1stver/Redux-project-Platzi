import React from "react";
import "../../css/spinner.css";

const Spinner = () => {
  return (
    <div className="center">
      <div className="lds-roller">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Spinner;

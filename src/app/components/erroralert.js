import React from "react";

const ErrorAlert = (props) => {
  return (
    <div className ="container">
      <div className="alert alert-danger">
        <h3>{props.errMsg}</h3>
        <button className="btn btn-warning" onClick={props.onClick}>Re-try</button>
      </div>
    </div>
  );
};

export default ErrorAlert

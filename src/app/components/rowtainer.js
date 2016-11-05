import React from "react";

const Rowtainer = (props) => {
  return (
    <div className ="container">
      <div className ="row">
        <div className = "col-xs-12">
        {props.children}
        </div>
      </div>
    </div>
  );
};

export default Rowtainer

import React from "react";
import { Link } from "react-router";

const Comment = (props) => (
    <div className ="container">
      <div className ="row">
        <div className = "col-xs-12">
          <h3>Name: {props.name}</h3>
          <h4>Body: {props.body}</h4>
          <h5>From: {props.email}</h5>
        </div>
      </div>
      <hr/>
    </div>
);

export default Comment;

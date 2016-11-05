import React from "react";
import { Link } from "react-router";

// Comment presentation component

const Comment = (props) => (
        <div>
          <h3>Name: {props.name}</h3>
          <h4>Body: {props.body}</h4>
          <h5>From: {props.email}</h5>
        </div>
);

export default Comment;

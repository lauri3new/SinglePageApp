import React from "react";
import { Link } from "react-router";

// Post presentation component.

const Post = (props) =>  (
          <div>
            <h3>Title: {props.name}</h3>
            <h4>Body: {props.username}</h4>
            <p><Link className="btn btn-default" to={"/post/"+ props.pid + "/comments"}>Comments about this post</Link></p>
          </div>
)
;

export default Post

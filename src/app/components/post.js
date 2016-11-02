import React from "react";
import { Link } from "react-router";

// Post presentation component.

const Post = (props) =>  (
      <div className="container">
        <div className="row">
          <div className="col-xs-12" >
            <h3>Title: {props.name}</h3>
            <h4>Body: {props.username}</h4>
            <p><Link className="btn btn-default" to={"/post/"+ props.pid + "/comments"}>Comments about this post</Link></p>
          </div>
        </div>
        <hr/>
      </div>
);

export default Post

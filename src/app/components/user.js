import React from "react";
import { Link } from "react-router";

// User presentation component.

const User = (props) => (
          <div>
            <h3>{props.name}</h3>
            <h4>A.K.A "{props.username}"</h4>
            <p><Link className="btn btn-default" to={"user/" + props.uid + "/posts"}>Posts by this user</Link></p>
          </div>
);

export default User;

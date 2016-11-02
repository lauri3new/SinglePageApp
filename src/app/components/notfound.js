import React from 'react';
import { Link } from "react-router";

// not found presentation component displayed with link to home, when route not recognised.

function NotFound() {
  return (
    <div className ="container">
      <div className ="row">
        <div className = "col-xs-12 col-xs-offset-5">
        <h3>Not Found.</h3>
        <Link className="btn btn-primary" to="/">Return home</Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;

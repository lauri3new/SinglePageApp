import React from "react";
import { Link } from "react-router";
import { connect } from "react-redux";

// Root contains some in line styling and a ternary operator that renders
// a loading bar (could be replace with a nice spinner) when state property
// isLoading is true (for example during AJAX request).

const App = (props) => {
    let divStyle = {
  color: 'grey'
};
let postStyle = {
  marginTop: 10,
  paddingBottom: 10
};
let logoStyle = {
  display:"inline!important"
};
let imgStyle ={
  height:100,
  width: 100
};
let titleStyle = {
  textDecoration: "none",
  display: "inline!important",
  fontSize:30,
  color: "grey"
};
    return(
      <div className="container">
        <div className="row" style={postStyle}>
          <Link style={titleStyle} to={"/users"}>
            <div className="col-xs-offset-4 col-xs-12 ">
              <span> SPA demo home </span>
              <span style={logoStyle}>
                <img style={imgStyle} src={"https://avatars3.githubusercontent.com/u/21179705?v=3&s=200"} alt="we raise"/>
              </span>
            </div>
          </Link>
        </div>
        <div className="row">
        {props.isLoading ? <div className=" col-xs-12 col-xs-offset-5"><h2 style={divStyle}>Loading...</h2></div> : null}
        {props.children}
        </div>
      </div>
    )
}

// mapStateToProps tells React which properties of global state do we want to
// use in this component and to which local properties do we want to map them,
// so that they are accessible in from this.props
const mapStateToProps = (state) => ({
    isLoading: state.isLoading
});


// connect hooks up mapStateToProps and mapDispatchToProps to named component
// eg App
export default connect(mapStateToProps)(App);

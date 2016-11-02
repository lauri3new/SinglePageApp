import React from "react";
import { Link } from "react-router";

import { connect } from "react-redux";
import { getUsers, clearErr } from "../actions/actions.js";
import User from "../components/user.js";

class UserList extends React.Component  {
  componentDidMount() {
// clear errors on reload
console.log(this.props);
 this.props.clearErr();
// Only getUsers if users array empty (when app first loads)
    if (this.props.users.length < 1) {
    this.props.getUsers();
  }
}
  render() {
    return (
      <div className="container">
       {this.props.users.map((user,i) => {return <User key={i} name={user.name} username={user.username} uid={user.id}/>})}
       {this.props.isError ? <div className="alert alert-danger"><h3>{this.props.errMsg}</h3><button className="btn btn-warning" onClick={() => this.props.getUsers()}>Reload</button></div> : null}
      </div>
    )
  }
}

// mapStateToProps tells React which properties of global state do we want to
// use in this component and to which local properties do we want to map them,
// so that they are accessible in from this.props
const mapStateToProps = (state) => ({
    users: state.users,
    isError: state.error.isError,
    errMsg: state.error.errMsg
});

// mapDispatchToProps maps functions that use dispatch methods to this.props
// so that they will be availble also from this.props locally
const mapDispatchToProps = (dispatch) => {
  return {
      getUsers() {
      dispatch(getUsers())
    },
    clearErr() {
      dispatch(clearErr())
    }
  }
};
// connect hooks up mapStateToProps and mapDispatchToProps to named component
// eg App
export default connect(mapStateToProps,mapDispatchToProps)(UserList);

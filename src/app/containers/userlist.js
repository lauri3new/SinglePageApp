import React from "react";
import User from "../components/user.js";
import { Link } from "react-router";
import { connect } from "react-redux";
import { getUsers, clearErr } from "../actions/actions.js";

// Userlist contains list of user components with passed down props.
// componentDidMount method: set isError = false in state via clearErr() action,
// so no errors displayed if there was error in previous state.
// getUsers if Users not in state (should run only when app loads first time).
// ternary operator renders error msg and re-try button if isError = True (i.e. when getUsers fails).
// Should replace error msg and button with error presentation component!!
class UserList extends React.Component  {
  componentDidMount() {
      this.props.clearErr();
      if (this.props.users.length < 1) {
        this.props.getUsers();
      };
}
  render() {
    return (
      <div className="container">
       {this.props.users.map((user,i) => {return <User key={i} name={user.name} username={user.username} uid={user.id}/>})}
       {this.props.isError ? <div className="alert alert-danger"><h3>{this.props.errMsg}</h3><button className="btn btn-warning" onClick={() => this.props.getUsers()}>Re-try</button></div> : null}
      </div>
    )
  }
}

// mapStateToProps tells React which properties of global state do we want to
// use in this component (users, error obj) and to which local properties we want to map them,
// so that they are accessible in from this.props
const mapStateToProps = (state) => ({
    users: state.users,
    isError: state.error.isError,
    errMsg: state.error.errMsg
});

// mapDispatchToProps maps functions (action creators) that use dispatch methods
//to this.props so that they will be availble also from this.props locally
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
export default connect(mapStateToProps,mapDispatchToProps)(UserList);

import React from "react";
import Post from "../components/post.js";
import Rowtainer from "../components/rowtainer.js";
import { connect } from "react-redux";
import { Link, withRouter} from "react-router";
import { getPosts, clearErr } from "../actions/actions.js";

// similiar to UserList but dealing with loading/displaying posts (see userlist.js comments for explanation)
// however uses withRouter to access params for selecting posts (using selector function) see below
class PostList extends React.Component  {
  componentDidMount(){
     this.props.clearErr();
    if (this.props.posts.length === 0) {
    this.props.getPosts(this.props.params.uid);
    }
  }
  render() {
    return(
      <div className="container">
       {this.props.posts.map((post,i) => {return <Rowtainer key={i}><Post name={post.title} username={post.body} pid={post.id}/></Rowtainer>})}
        {this.props.isError ? <div className="alert alert-danger"><h3>{this.props.errMsg}</h3><button className="btn btn-warning" onClick={() => this.props.getPosts()}>Re-try</button></div> : null}
      </div>
    )
  }
}

// Selector function: filters posts in state by userId based on uid from url params
const filterPostsByUid = (posts, uid) => {
  if (Object.keys(posts).length !== 0) {
  return posts.filter(post => post.userId == uid)
  } else {
  return []
  }
}

// here url params are passed so that they can be used to filter posts by userId
const mapStateToProps = (state, { params }) => ({
    posts: filterPostsByUid(state.posts, params.uid),
    isError: state.error.isError,
    errMsg: state.error.errMsg
});

const mapDispatchToProps = (dispatch) => ({
    getPosts(uid) {
      dispatch(getPosts(uid))
    },
    clearErr() {
      dispatch(clearErr())
    }
});

// connect hooks up mapStateToProps and mapDispatchToProps to named component.
// withRouter allows url params to be accessed in mapStateToProps.
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(PostList));

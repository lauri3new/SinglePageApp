import React from "react";
import { connect } from "react-redux";
import { Link, withRouter} from "react-router";

import { getPosts, clearErr } from "../actions/actions.js";
import Post from "../components/post.js";

class PostList extends React.Component  {
  componentDidMount(){
    // clear errors on reload
     this.props.clearErr();
    // check if posts array is empty, if it is getPosts by user ID from url params
    if (this.props.posts.length === 0) {
    this.props.getPosts(this.props.params.uid);
    }
  }
  render() {
    return(
      <div className="container">
       {this.props.posts.map((post,i) => {return <Post key={i} name={post.title} username={post.body} pid={post.id}/>})}
        {this.props.isError ? <div className="alert alert-danger"><h3>{this.props.errMsg}</h3><button className="btn btn-warning" onClick={() => this.props.getPosts()}>Reload</button></div> : null}
      </div>
    )
  }
}

// selector function, selects posts based on uid
const filterPostsByUid = (posts, uid) => {
  if (Object.keys(posts).length !== 0) {
  return posts.filter(post => post.userId == uid)
} else {
  return []
}
}

const mapStateToProps = (state, { params }) => ({
    posts: filterPostsByUid(state.posts, params.uid),
    isError: state.error.isError,
    errMsg: state.error.errMsg
});

// mapDispatchToProps maps functions that use dispatch methods to this.props
// so that they will be availble also from this.props locally
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

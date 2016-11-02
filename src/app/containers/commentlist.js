import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router";

import { getComments, clearErr } from "../actions/actions.js";
import Comment from "../components/comment.js";

class CommentList extends React.Component  {
  componentDidMount(){
    // clear errors on reload
     this.props.clearErr();
     // check if comments array is empty, if it is getComments by user ID from url params
    if (this.props.comments.length === 0) {
    this.props.getComments(this.props.params.pid);
    }
  }
  render() {
    return(
      <div className="container">
        {this.props.comments.map((comment,i) => {return <Comment key={i} cid={comment.id} name={comment.name} body={comment.body} email={comment.email} />})}
          {this.props.isError ? <div className="alert alert-danger"><h3>{this.props.errMsg}</h3><button className="btn btn-warning" onClick={() => this.props.getComments()}>Reload</button></div> : null}
      </div>
    )
  }
}

// selector function, selects comments based on post id
const filterCommentsByUid = (comments, pid) => {
  return comments.filter(comment => comment.postId == pid)
}

const mapStateToProps = (state, { params }) => ({
    comments: filterCommentsByUid(state.comments, params.pid),
    isError: state.error.isError,
    errMsg: state.error.errMsg
});

// mapDispatchToProps maps functions that use dispatch methods to this.props
// so that they will be availble also from this.props locally
const mapDispatchToProps = (dispatch) => ({
    getComments(pid) {
      dispatch(getComments(pid))
    },
    clearErr() {
      dispatch(clearErr())
    }
});

// connect hooks up mapStateToProps and mapDispatchToProps to named component,
// withRouter allows access of params in mapStateToProps
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CommentList));

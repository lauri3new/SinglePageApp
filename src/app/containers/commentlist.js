import React from "react";
import Comment from "../components/comment.js";
import Rowtainer from "../components/rowtainer.js";
import ErrorAlert from "../components/erroralert.js";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router";
import { getComments, clearErr } from "../actions/actions.js";

// similar to UserList and PostList but for comments (see PostList.js)
class CommentList extends React.Component  {
  componentDidMount(){
    this.props.clearErr();
    if (this.props.comments.length === 0) {
      this.props.getComments(this.props.params.pid);
    }
  }
  render() {
    return(
      <div className="container">
        {this.props.comments.map((comment,i) => {return <Rowtainer key={i}><Comment cid={comment.id} name={comment.name} body={comment.body} email={comment.email} /></Rowtainer>})}
        {this.props.isError ? <ErrorAlert errMsg={this.props.errMsg} onClick={() => this.props.getComments(this.props.params.pid)}/> : null}
      </div>
    )
  }
}
//          {this.props.isError ? <div className="alert alert-danger"><h3>{this.props.errMsg}</h3><button className="btn btn-warning" onClick={() => this.props.getComments()}>Re-try</button></div> : null}
// selector function, selects comments based on post id
const filterCommentsByUid = (comments, pid) => {
  return comments.filter(comment => comment.postId == pid)
}

const mapStateToProps = (state, { params }) => ({
    comments: filterCommentsByUid(state.comments, params.pid),
    isError: state.error.isError,
    errMsg: state.error.errMsg
});

const mapDispatchToProps = (dispatch) => ({
    getComments(pid) {
      dispatch(getComments(pid))
    },
    clearErr() {
      dispatch(clearErr())
    }
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CommentList));

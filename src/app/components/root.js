import React from "react";
import { Router, Route, browserHistory, IndexRedirect } from "react-router";
import { Provider } from "react-redux";
import UserList from "../containers/userlist.js";
import PostList from "../containers/postlist.js";
import CommentList from "../containers/commentlist.js";
import App from "../containers/app.js";
import NotFound from "./notfound.js";

 const Root = ({ store }) => (
   <Provider store={store}>
       <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRedirect to="/users" />
          <Route path={"users"} component={UserList}/>
          <Route path={"user/:uid/posts"} component={PostList}/>
          <Route path={"post/:pid/comments"} component={CommentList}/>
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
  </Provider>
);

export default Root;

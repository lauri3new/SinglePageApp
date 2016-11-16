import fetch from 'isomorphic-fetch';
require('es6-promise').polyfill();
// clear error function called at componentDidMount stage to remove old errors
export const clearErr = () => {
  return dispatch => {
  dispatch({
    type: "RELOAD"
  });
  }
}
//api base url
const baseUrl = "https://jsonplaceholder.typicode.com/";
// get users
export const getUsers = () => {
  return getData("USERS", "users")
}
// get posts
export const getPosts = (uid) => {
  let path = "posts?userId=" + uid;
  return getData("POSTS", path)
}
// get comments
export const getComments = (pid) => {
  let path = "comments?postId=" + pid;
  return getData("COMMENTS", path)
}

// fetch data
export const getData = (type, path) => {
  return (dispatch) => {
    dispatch(getRequest());
    return fetch(baseUrl + path)
  .then(
    response => {
      if (response.status !== 200) {
        throw new Error(response.status + " " + response.statusText)
      }
      return response.json()
    })
  .then( json => {
    dispatch(getRequestSuccess(type,json));
  })
  .catch(function(err) {
    dispatch(getRequestFailure(err));
  })
  }
}

// fetch request
const getRequest = () => ({
  type: `GET_REQUEST`
})
// fetch sucess
const getRequestSuccess = (type,data) => ({
  type: `GET_${type}_SUCCESS`,
  payload : data
})
// fetch failure
const getRequestFailure = (err) => ({
  type: `GET_REQUEST_FAILURE`,
  payload: err.message || "Something went wrong"
})

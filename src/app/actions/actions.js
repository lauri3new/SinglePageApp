// clear error function called at componentDidMount stage to remove old errors
export function clearErr() {
  return dispatch => {
  dispatch({
    type: "RELOAD"
  });
  }
}
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
const getData = (type, path) => {
  let baseUrl = "https://jsonplaceholder.typicode.com/";
  return (dispatch) => {
    dispatch({
      type: `GET_REQUEST`
    });
    fetch(baseUrl + path)
  .then(
    function(response) {
      if (response.status !== 200) {
        throw new Error(response.status + " " + response.statusText)
      }
      response.json().then(function(data) {
        dispatch({
          type: `GET_${type}_SUCESS`,
          payload: data
        });
      });
    })
  .catch(function(err) {
    dispatch({
      type: `GET_REQEST_FAILURE`,
      payload: err.message || "Something went wrong"
    });
  });
  }
}

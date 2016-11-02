// clear error function called at componentDidMount stage to remove old errors
export function clearErr() {
  return dispatch => {
  dispatch({
    type: "RELOAD",
    payload: ""
  });
  }
}

// fetch users
export function getUsers() {
  return dispatch => {
    dispatch({
      type: "GET_USERS_REQUEST"
    });
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
          dispatch({
            type: "GET_POSTS_FAILURE",
            payload: err.message || "Something went wrong"
          });
      }

      response.json().then(function(data) {
        dispatch({
          type: "LOADING",
          payload: false
        });
        dispatch({
          type: "GET_USERS_SUCESS",
          payload: data
        });
      });
    })
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
    dispatch({
      type: "GET_POSTS_FAILURE",
      payload: err.message || "Something went wrong"
    });
  });
}};

// fetch posts
export function getPosts(uid) {
  return dispatch => {
    dispatch({
      type: "GET_POSTS_REQUEST"
    });
    fetch('https://jsonplaceholder.typicode.com/posts?userId=' + uid)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
          dispatch({
            type: "GET_POSTS_FAILURE",
            payload: err.message || "Something went wrong"
          });
      }

      response.json().then(function(data) {
        dispatch({
          type: "GET_POSTS_SUCESS",
          payload: data
        });
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
    dispatch({
      type: "GET_POSTS_FAILURE",
      payload: err.message || "Something went wrong"
    });
  });
    }
}

// fetch comments
export function getComments(pid) {
  return dispatch => {
    dispatch({
      type: "GET_COMMENTS_REQUEST",
      payload: []
    });
    dispatch({
      type: "LOADING",
      payload: true
    });
    fetch('https://jsonplaceholder.typicode.com/comments?postId=' + pid)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
          dispatch({
            type: "LOADING",
            payload: false
          });
        dispatch({
          type: "GET_COMMENTS_FAILURE",
          payload: "error"
        });
      }

      response.json().then(function(data) {
        dispatch({
          type: "LOADING",
          payload: false
        });
        dispatch({
          type: "GET_COMMENTS_SUCESS",
          payload: data
        });
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
    dispatch({
      type: "LOADING",
      payload: false
    });
    dispatch({
      type: "GET_COMMENTS_FAILURE",
      payload: "error"
    });
  });
  }
}
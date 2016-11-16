
const isLoadingReducer = (state = false, action) => {
  switch (action.type) {
    case "GET_REQUEST":
    state = true
    break;
    case "GET_USERS_SUCCESS":
    case "GET_POSTS_SUCCESS":
    case "GET_COMMENTS_SUCCESS":
    case "GET_REQUEST_FAILURE":
    state = false
    break;
  }
  return state
}

export default isLoadingReducer

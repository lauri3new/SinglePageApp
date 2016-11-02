const initialState = {
  isError: false,
  errMsg: ""
}

const error = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS_FAILURE":
    case "GET_COMMENTS_FAILURE":
    case "GET_POSTS_FAILURE":
    state = {
      isError: true,
      errMsg: action.payload
    }
    break;
    case "GET_USERS_REQUEST":
    case "GET_COMMENTS_REQUEST":
    case "GET_POSTS_REQUEST":
    case "RELOAD":
    state = {
      isError: false,
      errMsg: ""
    }
    break;
    default:

  }
  return state
}

export default error

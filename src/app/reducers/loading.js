
const isLoading = (state = false, action) => {
  switch (action.type) {
    case "GET_USERS_REQUEST":
    case "GET_COMMENTS_REQUEST":
    case "GET_POSTS_REQUEST":
    state = true
    break;
    case "GET_USERS_SUCESS":
    case "GET_USERS_FAILURE":
    case "GET_POSTS_SUCESS":
    case "GET_POSTS_FAILURE":
    case "GET_COMMENTS_SUCESS":
    case "GET_COMMENTS_FAILURE":
    state = false
    break;
  }
  return state
}

export default isLoading

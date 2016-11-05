
const isLoading = (state = false, action) => {
  switch (action.type) {
    case "GET_REQUEST":
    state = true
    break;
    case "GET_USERS_SUCESS":
    case "GET_POSTS_SUCESS":
    case "GET_COMMENTS_SUCESS":
    case "GET_REQUEST_FAILURE":
    state = false
    break;
  }
  return state
}

export default isLoading

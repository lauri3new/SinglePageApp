
const posts = (state = [], action) => {
  switch (action.type) {
    case "GET_POSTS_SUCESS":
    return state.concat(action.payload)
      break;
  }
  return state
}

export default posts

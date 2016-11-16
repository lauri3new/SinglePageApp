
const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_COMMENTS_SUCCESS":
    return state.concat(action.payload)
    break;
  }
  return state
}

export default commentsReducer

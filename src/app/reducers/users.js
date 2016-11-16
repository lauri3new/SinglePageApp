
const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_USERS_SUCCESS":
    return state.concat(action.payload)
      break;
  }
  return state
}

export default usersReducer


const users = (state = [], action) => {
  switch (action.type) {
    case "GET_USERS_SUCESS":
    return state.concat(action.payload)
      break;
  }
  return state
}

export default users

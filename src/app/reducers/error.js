const initialState = {
  isError: false,
  errMsg: ""
}

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_REQUEST_FAILURE":
    state = {
      isError: true,
      errMsg: action.payload
    }
    break;
    case "GET_REQUEST":
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

export default errorReducer

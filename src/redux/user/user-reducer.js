const INITIAL_STATE = {
  currentUser: null
}

// state = INITIAL_STATE -> ES6 feature to pass intiial value
const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser : action.payload
      }
    default:
      return state
  }
}

export default userReducer
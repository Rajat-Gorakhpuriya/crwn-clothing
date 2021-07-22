/**initially we set the initial state same as in out App.js */
const INITIAL_STATE = {
    currentUser: null
}

/** we have to return always a new object otherwise it get problem in 
 *  render over the view
 */
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;
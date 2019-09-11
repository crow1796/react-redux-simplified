import * as Types from './actions/types/hello'
const initialState = {
    message: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GREET:
            return {
                ...state,
                message: action.payload
            }
        default:
            return state
    }
}

export default reducer
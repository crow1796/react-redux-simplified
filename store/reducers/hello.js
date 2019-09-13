import * as Types from './actions/types/hello'
const initialState = {
    message: null
}

const reducers = {
    [Types.GREET]: (state = initialState, payload) => ({...state, message: payload})
};

export default (state = initialState, action) => reducers[action.type] ? reducers[action.type](action.payload) : state;

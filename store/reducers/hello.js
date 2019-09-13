const Types = {
    GREET: 'GREET'
}

const initialState = {
    message: null
}

const reducers = {
    [Types.GREET]: (state, payload) => ({...state, message: payload})
};

const actions = {
    greet(){
        return {
            type: Types.GREET
        }
    }
}

export {
    initialState,
    reducers,
    actions
}
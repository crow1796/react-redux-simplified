const initialState = {
    message: null
}

const actions = {
    greet: {
        handler(){

        },
        reducer(state, payload){
            ({ ...state, message: payload })
        }
    }
}

export {
    initialState,
    actions
}
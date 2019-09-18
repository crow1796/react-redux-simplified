const state = {
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
    state,
    actions
}
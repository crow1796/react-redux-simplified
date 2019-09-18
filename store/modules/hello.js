const state = {
    message: null
}

const actions = {
    greet: {
        handler(){

        },
        reducer(state, payload){
            return ({ ...state, message: payload })
        }
    }
}

export {
    state,
    actions
}
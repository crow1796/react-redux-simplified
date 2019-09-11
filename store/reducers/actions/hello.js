import * as Types from './types/hello'

const greet = (name) => {
    return {
        type: Types.GREET,
        payload: name
    }
}

export {
    greet
}
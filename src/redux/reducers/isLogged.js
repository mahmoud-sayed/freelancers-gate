import { SIGN_IN } from './../actions'

const loggerReducer = (state = false, action) => {

    switch (action.type) {
        case SIGN_IN:
            return !state;
        default:
            return state;
    }
}

export default loggerReducer;
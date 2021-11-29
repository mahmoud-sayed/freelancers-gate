import { INCERMENT, DECERMENT } from './../actions/actions';

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case INCERMENT:
            return state + 1;

        case DECERMENT:
            return state + 1;
        default:
            return state;
    }
}

export default counterReducer;
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import reduxThunk from 'redux-thunk';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(applyMiddleware(reduxThunk)));

export default store;
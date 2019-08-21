import {applyMiddleware, compose, createStore} from "redux";

import rootReducer from "./Reducer/RootReducer";

const stateLogger = store => next => action => {
    console.log("State Logger Action > ", action);
    let result = next(action);
    console.log("State Logger Next State > ", store.getState());
    return result;
};


export default function configureStore() {
    const initialState = {};
    const enhancers = [];
    const middleware = [stateLogger];

    const composedEnhancers = compose(
        applyMiddleware(...middleware),
        ...enhancers
    );

    return createStore(rootReducer, initialState, composedEnhancers);
}
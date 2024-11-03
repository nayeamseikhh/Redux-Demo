// state - count : 0
// action - incerment, decrement, reset
// reducer

const { createStore } = require("redux");

// store
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
//state
const initialState = {
    count : 0
}
//ACTION set
const incrementCounterAction = () =>{
    return {
        type: INCREMENT,
    }
}
const decrementCounterAction = () =>{
    return {
        type: DECREMENT,
    }
}
const resetCounterAction = () =>{
    return {
        type: RESET,
    }
}
//Create REDUCER
const counterReducer = (state=initialState, action) =>{
    switch (action.type) {
        case INCREMENT:
            return{
                ...state,
                count: state.count + 1
            }
            case DECREMENT:
            return{
                ...state,
                count: state.count - 1
            }
            case RESET:
            return{
                
                count: 0
            }
        default:
            state;
    }
}
//STORE create
const store = createStore(counterReducer);
store.subscribe (()=>{
    console.log(store.getState());
})
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(decrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(resetCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());

import {createStore} from 'redux';

const resetCount = () => ({ // a function to call the action reset
      type: 'RESET'
});

const store = createStore((state = {count:0}, action) => { // this block is reducer
    switch (action.type) {
        case 'INCREMENT':
          const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
          return {
            count: state.count+incrementBy
           };
        case 'DECREMENT':
          const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
          return {
              count: state.count-decrementBy
            };
        case 'RESET':
          return {
                count: 0
            };
        case 'SET':
          return {
              count: action.count
          }
        default:
          return state;
    }
});

const unsub = store.subscribe(() => { // now we are subscribed to this store so this will be called each time some action is performed
    console.log(store.getState());
});

store.dispatch({ // performing the action increment
    type: 'INCREMENT',
    incrementBy: 5
});
store.dispatch(resetCount()); // performing the event reset

unsub();//unsubscribed, from now on the subscription function won't run for any action

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 5
});
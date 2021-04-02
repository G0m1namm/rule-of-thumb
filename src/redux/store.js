import { createStore } from 'redux';
import { loadState, persistState } from './persistHandler';
import rootReducer from './reducer';


const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

// Save redux state on every update
store.subscribe(() => {
    persistState(store.getState())
})

export default store

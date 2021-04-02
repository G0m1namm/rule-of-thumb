import { createStore } from 'redux';
import { loadState, persistState } from './persistHandle';
import rootReducer from './reducer';


const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
    persistState(store.getState())
})

export default store
